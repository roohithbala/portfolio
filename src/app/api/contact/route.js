import { NextResponse } from 'next/server';
import axios from 'axios';

const limits = new Map();
const LIMIT = 3;
const WINDOW = 180000;

export async function POST(req) {
  const ipHeader = req.headers.get('x-forwarded-for');
  const ip = ipHeader ? ipHeader.split(',')[0].trim() : (req.headers.get('x-real-ip') || '127.0.0.1');
  const now = Date.now();
  if (!limits.has(ip)) {
    limits.set(ip, []);
  }
  const history = limits.get(ip).filter(t => now - t < WINDOW);
  if (history.length >= LIMIT) {
    return NextResponse.json({ success: false, error: 'Rate limit reached' }, { status: 429 });
  }
  history.push(now);
  limits.set(ip, history);
  try {
    const body = await req.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }
    const url = process.env.GOOGLE_SCRIPT_URL;
    const res = await axios.post(url, { name, email, message }, {
      headers: { 'Content-Type': 'text/plain' }
    });
    let data = res.data;
    if (typeof data === 'string') {
      try { data = JSON.parse(data); } catch (e) { }
    }
    if (data && data.success) {
      return NextResponse.json({ success: true });
    }
    const status = data?.error === 'Rate limit reached' ? 429 : 500;
    return NextResponse.json({ success: false, error: data?.error || 'Failed to send' }, { status });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
