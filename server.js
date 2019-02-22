const express = require('express');
const pug = require('pug');
const app = express()
var PubNub = require('pubnub')


app.set('view engine', 'pug')
//app.use(express.static(path.join(__dirname, '/public')));

app.get('/',(req,res) =>{
  res.render('index',
  {
    lat: 37.33182,
    lon: -122.03118,
    uuid: "uuid"
   })
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
