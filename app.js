const express = require("express");
const app = express();
const router = require("./routers/index");
const PORT = 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(router)


// app.listen(PORT, () => {
//     console.info(`running on http://localhost:${PORT}`);
// })



module.exports = app;

