import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
const express = require("express");
const app = express();
app.use(express.static("public"));
ReactDOM.render(<App />, document.getElementById("root"));


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function(){
    console.log("Server has started successfully");
});