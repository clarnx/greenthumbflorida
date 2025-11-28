  console.log("Loading function", {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    SMTP_FROM: process.env.SMTP_FROM,
    SMTP_TO: process.env.SMTP_TO,
  });
exports.handler = async (event) => {
  console.log("Function called - minimal test");
  console.log("Event method:", event.httpMethod);
  console.log("Event headers:", JSON.stringify(event.headers));

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Minimal test successful",
      timestamp: new Date().toISOString(),
      envVarsPresent: {
        SMTP_HOST: !!process.env.SMTP_HOST,
        SMTP_PORT: !!process.env.SMTP_PORT,
        SMTP_USER: !!process.env.SMTP_USER,
        SMTP_PASSWORD: !!process.env.SMTP_PASSWORD,
        SMTP_FROM: !!process.env.SMTP_FROM,
        SMTP_TO: !!process.env.SMTP_TO,
      }
    })
  };
};

