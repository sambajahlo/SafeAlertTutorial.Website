const express = require('express');
const app = express()

app.set('view engine', 'pug')

app.get('/',(req,res) =>{
  res.render('index',
  {
    lat: 37.33182,
    lon: -122.03118,
    uuid: "UUID"
   })
})
app.get('/uuid/:uuid/lat/:lat/lon/:lon',(req,res)=>{
  res.render('index',
  {
    lat: req.params.lat,
    lon: req.params.lon,
    uuid: req.params.uuid
  })
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
