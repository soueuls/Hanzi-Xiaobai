const https = require("https");
const cors = require("cors")({ origin: true });
const functions = require("firebase-functions");

exports.addSubscriberToNewsletter = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const data = JSON.stringify(req.body);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(data),
        "X-MailerLite-ApiKey": functions.config().mailerlite.key
      }
    };

    let body = [];
    const request = https.request(
      "https://api.mailerlite.com/api/v2/groups/72265246/subscribers",
      options,
      response => {
        response.on("data", chunk => body.push(chunk));
        response.on("end", () => {
          res.status(response.statusCode).send(Buffer.concat(body).toString());
        });
      }
    );
    request.on("error", () => {
      res.status(500).end();
    });

    request.write(data);
    request.end();
  });
});
