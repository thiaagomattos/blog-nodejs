const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const Article = require("./articles/Articles");
const Category = require("./categories/Category");

//view engine
app.set('view engine', 'ejs');

//static
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//database
connection
    .authenticate()
    .then(() =>{
        console.log("connected with database");
    }).catch((error) =>{
        console.log(error);
    });

app.use("/", categoriesController);
app.use("/", articlesController);


app.get("/", (req,res) =>{
    Article.findAll({
        order:[
            ['id', 'DESC']
        ]
    }).then(articles =>{
        res.render("index",{articles: articles});
    });
});

app.get("/:slug", (req,res) =>{
    var slug = req.params.slug;
    Article.findOne({
        where:{
            slug: slug
        }
    }).then(article =>{
        if(article != undefined){
            res.render("article",{article: article});
        }else{
            res.redirect("/");
        }
    }).catch(error =>{
        res.redirect("/");
    })
})

app.listen(8080, (req,res) =>{
    console.log("running");
});