const express = require("express");
const app = express();
require("dotenv").config({ silent: true }); // Read values from .env file
const hellosign = require("hellosign-sdk")({
  key: process.env.API_KEY,
  client_id: process.env.CLIENT_ID,
});
require("hbs"); // Handlebars as view engine

var session;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server listening"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  // authenticate
  session = {
    name: "Atef",
    // lastname: 'M\'Guaidi',
    email: "pycrk13@gmail.com",
    //street: 'huistraße 5',
    //post_code: '64293',
    //city: 'Darmstadt'
  };

 
});

const opts = async() => {
  let options = {
    clientId: process.env.CLIENT_ID,
    subject: "Signature Test",
    message: "Please sign this DOC, THX",
    signers: [
      {
        name: session.name,
        email: session.email,
      },
    ],
    files: ["yogi.docx"],
    use_text_tags: 1,
    hide_text_tags: 1,
    test_mode: 1,
  };

 
    let response = await hellosing.signatureRequest.createEmbedded(options);
    let signature_id = response.signature_request.signatures[0].signature_id;

    let embedded_resp = await hellosign.embedded.getSignUrl(signature_id);
    
    return embedded_resp.embedded.sign_url;
  
};

app.get("/embeddedURL", async (req, res)=> {
  let embedded_url;
  try {
    embedded_url = await opts(req.session.email, req.session.name);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
  let args = {
    username: session.name,
    email: session.email,
    clientID: process.env.CLIENT_ID,
    embedded_url:embedded_url,
  };
  res.render("index", args);
});