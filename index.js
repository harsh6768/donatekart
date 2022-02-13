const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const rootRouter = require("./routes/index");
app.use("/api", rootRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.info(`Server is up and running at port ${PORT}`);
});
