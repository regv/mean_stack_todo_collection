import mongoose from "mongoose";

//Require MongoUI
import { MONGO_UI } from "./keys";

//Connecting to database
mongoose.connect(MONGO_UI, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.Promise = global.Promise;
let connection = mongoose.connection;

//Check for errors
connection.on('error', (err) => {
  if (err) console.log(err); 
});

//Check for connections
connection.once('open', () => console.log(`connecting to mongodb...`));

export default connection;