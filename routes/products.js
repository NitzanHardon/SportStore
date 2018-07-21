const express = require('express');
const router = express.Router();

router.get('/',(req,res,) => {
    console.log("Entered to Product router (get action)");
    res.send("products - get");
});
module.exports = router;
