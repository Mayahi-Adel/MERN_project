const express = require("express");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");

const dotenv = require("dotenv");
require("./config/db");

dotenv.config({ path: "./config/.env" });

const { checkUser, requireAuth } = require("./middleware/auth.middleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//JWT
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

// routes
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
