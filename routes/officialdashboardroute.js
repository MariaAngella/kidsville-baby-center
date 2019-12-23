const express = require("express");
const router = express.Router();
const Register = require("../models/parentdbmodel");






router.get("/", async (req, res) => {
  try {
    const items = await Register.find();
    console.log(items);
    res.render("officialdashboard", { users: items });
  } catch (err) {
    //.catch promise and used because nodejs asyncronously waits
    res.status(500).send("unable to save to database");
  }
});



router.post('/delete', async(req, res) => {  
  try {
    await Register.deleteOne({_id: req.body.id})
    res.redirect('back')
  }
  catch (err){
    res.status(500).send('unable to delete from the database')
  }
 })


module.exports = router;
