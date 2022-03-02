const server = require("./src/server");
const dbConnect = require("./src/lib/db");

dbConnect()
  .then(() => {
    console.log("Database connect :D");
    server.listen(8080, () => {
      console.log("Server running on port 8080");
    });
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
