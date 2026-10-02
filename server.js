import { app } from "./src/app.js";
import dns from "dns";
dns.setServers(["8.8.8.8"], ["1.1.1.1"]);
import connectDB from "./src/db/db.js";

connectDB();
const port = 3001;

app.listen(port, () => {
  console.log(`server is listing at http://localhost:${port}`);
});
