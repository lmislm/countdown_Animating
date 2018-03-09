/*
 * @Author: lmislm 
 * @Date: 2018-03-09 21:53:04 
 * @Last Modified by: lmislm
 * @Last Modified time: 2018-03-09 21:54:05
 */
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3001, () => {
  console.log(`App listening at port 3001`);
});
