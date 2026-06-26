const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const errorHandler = require("./middleware/errorHandler");
const app = express();


const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(errorHandler);
app.use(express.json());
app.use(errorHandler);



app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/products", productRoutes);

app.use("/api/v1/orders", orderRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


module.exports = app;
