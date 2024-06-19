import "./env.js"
import express from "express"
import { connectUsingMongoose } from "./src/config/mongoose.db.js";
import productRouter from "./src/product/product.routes.js";

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome to Ecommerce API");
});

//Product Router
server.use("/products",productRouter)

//Handling 404 error response
server.use((req, res) => {
  res.status(404).json("API not found, Please go to document https://documenter.getpostman.com/view/33771867/2sA3XTdev3 to get more details");
})

//listening to port
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  connectUsingMongoose();
});
