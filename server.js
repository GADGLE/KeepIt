import express from "express";

import router from "./server/routes/bookmarks.routes.js"

const app = express();

app.use( express.json(), express.urlencoded({ extended: true }) );


app.use("/api", router)

app.listen(8000, () => console.log("Sevidor listo!"));