var express = require("express");
var app = express();
var port = 3000; //neu trung thi doi port

app.use(express.static("public")); //đường dẫn thưu mục public
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs"); //đuôi mở rộng ejs
app.set("views", "./views"); //thư mục view
app.listen(port);

app.get("/", function (req, res) {
  res.render("home");
});
