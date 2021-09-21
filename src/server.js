const express = require ("express");
const app = express();
// const { helloWorld } = require("./controllers");
const helloRouter = require("./routes")

app.use(express.json());

// app.get("/test", helloWorld);
app.use(helloRouter);

app.listen(5000, () => {
    console.log("Listening on Port 5000")
});