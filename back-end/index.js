import express from "express";

const app = express();
const port = 3535;

app.listen(port, () => {
  console.log("server ajillaa");
});

// Массивт хадгалагдах өгөгдөл
let dataArray = [];

// JSON өгөгдлийг боловсруулж болохоор тохируулна
app.use(express.json());

// `POST` хүсэлтээр өгөгдөл нэмэх
app.post("/add-data", (req, res) => {
  const newData = req.body; // Хүсэлтээр ирсэн өгөгдөл
  dataArray.push(newData); // Массивт өгөгдөл нэмэх

  res.status(201).json({
    message: "Data added successfully!",
    dataArray,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
