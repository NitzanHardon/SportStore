const express = require('express');
const router = express.Router();

router.get('/',(req,res,) => {
    console.log("Entered to Shops router (get action)");
    res.send("shops - get");
});
module.exports = router;
