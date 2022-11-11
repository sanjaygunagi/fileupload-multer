const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();
app.use(cors());

const PORT = 8081;
app.use(express.static("Server"));
app.use("/uploads", express.static("uploads"));

app.post("/upload", upload.single("image"), (req, res) => {
  res.send("Hello");
  console.log(req.body);
});

app.get("/download", (req, res) => {
  res.json({ image: "Server/uploads/14aac0333d516b1d0ae8c1afc6b4b1ce" });
});

app.listen(PORT, () => {
  console.log("Runnning on", PORT);
});
