const RECIPIENT_EMAIL = "roohithbala@outlook.com";

function doPost(e) {
  try {
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }
    const { name, email, message } = data;
    if (!name || !email || !message) {
      return response({ success: false, error: "Missing fields" });
    }
    const cache = CacheService.getScriptCache();
    const globalKey = "global_email_count";
    let globalCount = parseInt(cache.get(globalKey) || "0", 10);
    if (globalCount >= 50) {
      return response({ success: false, error: "Limit exceeded" });
    }
    const emailKey = "rate_" + email.toLowerCase().replace(/[^a-z0-9]/g, "_");
    if (cache.get(emailKey)) {
      return response({ success: false, error: "Rate limit reached" });
    }
    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;
    GmailApp.sendEmail(RECIPIENT_EMAIL, subject, body, { replyTo: email });
    cache.put(emailKey, "1", 180);
    cache.put(globalKey, (globalCount + 1).toString(), 86400);
    return response({ success: true });
  } catch (err) {
    return response({ success: false, error: err.toString() });
  }
}

function response(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
