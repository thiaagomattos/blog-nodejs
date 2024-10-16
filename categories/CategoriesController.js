const express = require("express");
const router = express.Router();

router.get("/categories", (req,res) =>{
    res.send("CATEGORIES ROUTES")
});

router.get("/admin/categories/new", (req,res) =>{
    res.send("NEW CATEGORIES ROUTES")
});

module.exports = router;