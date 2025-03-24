import app from "./app";

import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT ?? 3000;
const URL = process.env.SERVER_URL;

app.listen(PORT, () => {
  console.log(`Server is running on ${URL}/`);
});
