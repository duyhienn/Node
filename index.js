var express = require("express");
var app = express();
var port = 3000; //Neu trung thi doi port
var expressLayouts = require("express-ejs-layouts"); //Thu vien Layout
var nodemailer = require("nodemailer");

app.use(express.static("public")); //Dường dẫn thư mục public
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts); //Chay trang ten Layout

app.set("view engine", "ejs"); //Duôi mở rộng ejs
app.set("views", "./views"); //Thư mục view
app.listen(port);

// duong dan trang chu
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/gioithieu", function (req, res) {
  res.render("gioithieu");
});

app.get("/email", function (req, res) {
  res.render("partials/email");
});

app.post("/post-email", function (req, res) {
  console.log(req.body.emailgui);
  console.log(req.body.emailnhan);
  console.log(req.body.noidung);

  //   setting email
  var option = {
    service: "gmail",
    auth: {
      user: "nonameok2010@gmail.com",
      pass: "gmhb uqea cymg hovo",
    },
  };

  var transporter = nodemailer.createTransport(option);
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("ket noi thanh cong");
    }
  });

  var mail = {
    from: req.body.emailgui,
    to: req.body.emailnhan,
    subject: req.body.chude,
    html: req.body.noidung,
  };

  transporter.sendMail(mail, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.redirect("/email");
});
