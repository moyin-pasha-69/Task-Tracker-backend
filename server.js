import { app } from "./src/app.js";
const port = 3001;

app.use("/", (req, res) => {
  res.send("hello bro");
});

app.listen(port, () => {
  console.log(`server is listing at http://localhost:${port}`);
});
