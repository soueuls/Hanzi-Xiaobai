const https = require("https");
const functions = require("firebase-functions");

exports.addSubscriberToNewsletter = functions.https.onRequest((req, res) => {
  const { name, email } = req.body;

  const data = "";
  const request = https.request(
    "https://api.mailerlite.com/api/v2/groups/72265246/subscribers",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-MailerLite-ApiKey": functions.config().mailerlite.key
      }
    },
    response => {
      response.setEncoding("utf8");
      response.on("data", chunk => {
        data += chunk;
      });
      response.on("end", () => {
        res.send(data);
      });
    }
  );

  request.on("error", error => {
    res.status(error.code).send(error.message);
  });

  request.write(
    JSON.stringify({
      name,
      email
    })
  );
});
