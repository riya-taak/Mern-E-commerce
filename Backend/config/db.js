// import mongoose from "mongoose";
// import { MongoMemoryServer } from "mongodb-memory-server";

// const connectDB = async () => {
//   try {
//     const mongoServer = await MongoMemoryServer.create();
//     const uri = mongoServer.getUri();
//     await mongoose.connect(uri);
//     console.log('MongoDB connected successfully');
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//   }
// };

// export default connectDB;


import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongoServer;

const connectDB = async () => {
  try {
    mongoServer = await MongoMemoryServer.create({
      instance: {
        dbName: "myapp", // fixed name, easier to inspect
      },
      binary: {
        version: "6.0.9", // pin a stable version to avoid the fassert() crash
      },
    });

    const uri = mongoServer.getUri();
    await mongoose.connect(uri);

    console.log("MongoDB (in-memory) connected successfully");
    console.log("URI:", uri); // useful if you want to inspect via mongosh/Compass while running
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export const disconnectDB = async () => {
  await mongoose.connection.close();
  if (mongoServer) await mongoServer.stop();
};

export default connectDB;