const express = require("express");
const router = express.Router();

router.get("/articles", (req,res) =>{
    res.send("ARTICLES ROUTES")
});

router.get("/admin/articles/new", (req,res) =>{
    res.send("NEW ARTICLES ROUTES")
});

module.exports = router;