const express = require("express");
const router = express.Router();
const users = require("../model/Users");

router.get("/", async (req, res) => {
    var fetchUser = req.query.user;
    console.log(fetchUser);
    const DoesExist = await users.exists({ user: fetchUser });
    console.log(DoesExist);
    if(DoesExist){
        const doc = await users.findOne({ user: fetchUser },'user password isAdmin');
        console.log(doc);
        res.send({
            user :doc.user,
            password:doc.password,
            isAdmin:doc.isAdmin
        });
    }else{
        res.send({
            user : "",
            password:"",
            isAdmin: false
        })
    }
});



module.exports = router;