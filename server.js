const express = require("express");
const userRoutes = require("./routes/user.routes");

const dotenv = require("dotenv");
require("./config/db");

dotenv.config({ path: "./config/.env" });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
