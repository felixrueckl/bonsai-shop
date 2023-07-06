const mongoose = require("mongoose");
const app = require("./app");
// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000;

const MONGO_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connections[0].name}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
app.all("*", (req, res) => {
  res.json({ "every thing": "is awesome" });
});

function connectToServer() {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

connectDB().then(connectToServer);
