const asyncHandler = require('express-async-handler');
const express = require('express');
const dotenv = require("dotenv").config();
const errorHandler = require('./middleware/errorHandling');
const routes = require('./routes/contactRoutes');
const rout=require('./routes/farmerRoute');
const connectDb = require('./config/dbConnection');
const route = require('./routes/cropRoute');
const routebuyer=require('./routes/buyerRoute');
const cors = require('cors');
connectDb();
const app = express();
app.use(cors());
const crop=require('./models/cropModel');
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON


const getProducts = asyncHandler(async (req, res) => {
    const products = await crop.find(); // fetch all products
    res.status(200).json(products);
});

// ✅ Register routes first
app.get('/api/products', getProducts);
app.use('/api/farmer',rout);
app.use('/api/crop',route);
app.use('/api/buyer',routebuyer);
// ✅ Register custom error handler LAST
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
