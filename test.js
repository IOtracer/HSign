/*
const express = require('express');
const app = express();
const hellosign = require('hellosign-sdk')({key:'9f1a349b54b866274ad385f0e19a5aa31ab89916022e550bb40789de14ab83df'})

var session;

app.listen(3000,()=>console.log('Server listening'));
app.set('view engine','hbs');

app.get('/', (req, res) => {
  // authenticate
  session = {
    name: 'Atef',
    lastname: 'M\'Guaidi',
    email_address: 'pycrk13@gmail.com',
    street: 'huistraße 5',
    post_code: '64293',
    city: 'Darmstadt'
  }
  
  res.render('index',{username:session.name})
});

app.post('/sign',async (req,res)=>{
  let options = {
    test_mode:1,
    signers:[{
      name:session.name,
      email_address:session.email_address,
      role:'Customer'
    }],

    template_id:'c9e7152b393e979ea2d56d59bf01d04a98eb7b29',
    custom_fields:{
      name:session.name,
      lastname:session.lastname,
      street:session.street,
      post_code:session.post_code,
      city:session.city
    }
   // use_text_tags: 1,
    //hide_text_tags: 1
  }

  try {
    await hellosign.signatureRequest.sendWithTemplate(options);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  } finally {
    res.end();
  }
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
*/
