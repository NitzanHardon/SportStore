const express = require('express');
const router = express.Router();

router.get('/',(req,res,) => {
    console.log("Server - get  user/");
    res.send("users - get");
});

// Register
router.post('/register', (req, res, next) => {
    console.log("Server - post  user/register");
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    console.log("Server - post  user/authenticate");
});
// Profile
router.get('/profile', passport.authenticate('jwt',{session:false}), (req, res, next) => {
    console.log("Server - get  user/profile");
});

router.get('/userslist', passport.authenticate('jwt',{session:false}), (req, res, next) => {
    console.log("Server - get  user/userslist");
});

router.post('/delete',(req,res,next) => {
    console.log("Server - post  user/delete");
});

module.exports = router;
