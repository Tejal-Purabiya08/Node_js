const express = require("express");
const app = express();
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const U_router = require("./Routes/userRoutes");
const P_router = require("./Routes/productR");
const C_router = require("./Routes/categoryR");

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(cookieParser());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials:true
//   })
// );

app.use("/upload", express.static(path.join(__dirname, "upload")));

app.use("/user", U_router);
app.use("/product", P_router);
app.use("/category", C_router);

app.listen(3006, () => {
  console.log("server listen");
});
