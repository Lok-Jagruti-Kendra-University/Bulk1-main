const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const options = { 'pretty': true };
const locals = { 
  'name': 'John doe', 
  'occupation': 'gardener' 
};
app.get("/about",(req,res)=>{
  res.render('home', Object.assign(locals, options));
});

app.listen(port);