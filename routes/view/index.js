var router = require("express").Router();
var db = require("../../models");

router.get("/", (req,res)=>{
db.newsScrapings
.find({saved:false})
.sort({date:-1})
.then((dbArticles)=>{
    res.render("home",{articles: dbArticles});
    });
});

router.get("/saved", (req, res) => {
    db.newsScrapings.find({saved:true})
    .sort({date:-1})
    .then((dbArticles)=>{
        res.render("saved", {articles: dbArticles});
    });
});

