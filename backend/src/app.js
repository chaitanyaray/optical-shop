const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middleware/errorHandler");
const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(errorHandler);
app.use(express.json());
app.use("/api/v1/auth", authRoutes);

app.use(errorHandler);

const userRoutes = require("./routes/user.routes");

app.use("/api/v1/users", userRoutes);


module.exports = app;
