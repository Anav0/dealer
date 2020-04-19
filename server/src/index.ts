import express from "express";
import categoriesEndpoints from "./routes/categories";
import productEndpoints from "./routes/product";
import activeService from "./services/activeServices";

const app = express();
const port = 8080; // default port to listen

app.use('/categories',categoriesEndpoints);
app.use('/products',productEndpoints);


//Error handler
app.use(function (err, req, res, next) {
    res.status(500).send(err.message)
})

app.listen( port, async () => {
    const dbConn = activeService.getDbConnectionService();
    await dbConn.connect();
    console.log( `server started at http://localhost:${ port }` );
} );