import express from "express";
const app = express();
app.use(express.static("./workie"));

const PORT = 8000;


app.get("/workie", (req, res) => {
  res.json({ message: "Hello from server!" });
});




app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});