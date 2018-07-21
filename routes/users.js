const express = require('express');
const router = express.Router();

router.get('/',(req,res,) => {
    console.log("Entered to Users router (get action)");
    res.send("users - get");
});
module.exports = router;
