const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const errorHandler = require("./middlewares/error.middleware.js");
const aiRouter = require("./routes/ai.route.js");

const { Configuration, OpenAIApi } = require("openai");

// Configurations
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Cross Origin Resource Sharing
app.use(cors());

// built-in middleware for json
app.use(express.json());

// Routes
app.use("/api/ai", aiRouter);

// Error Handler Middleware
app.use(errorHandler);

app.listen(port, () => console.log(`server running on port ${port}`));
