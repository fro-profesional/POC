import { MongoClient } from "mongodb";
const mongoClient = new MongoClient(process.env.MONGO_DB_URL as string);
const shiftsCollection = mongoClient.db("coppel").collection("shifts");

// Insert new shift
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const confirmation = await shiftsCollection.insertOne(body);

  console.log({ body, confirmation });
  return {
    api: "works",
  };
});
