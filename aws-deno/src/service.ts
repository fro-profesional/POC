import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

// const MONGO_DB_URL = Deno.env.get("MONGO_DB_URL");
const mongoClient = new MongoClient();
const router = new Router();

router.get("/", async (ctx) => {
  let data = {
    method: "GET",
  };
  let confirmation = null;

  const db = await mongoClient.connect({
    db: "coppel",
    tls: true,
    servers: [
      {
        host: "dmp-stage-0.jyiis.mongodb.net",
        port: 27017,
      },
    ],
    credential: {
      username: "storage-core",
      password: "wl7XR3WQgbJkheqt",
      // db: "<db_name>",
      mechanism: "SCRAM-SHA-256",
    },
  });


  const shiftsCollection = db.collection("shifts");
  confirmation = await shiftsCollection.insertOne(data);

  ctx.response.body = {
    confirmation,
    data,
  };
});

// router.post("/", async (ctx) => {
//   let data = {
//     method: "POST",
//   };
//   let confirmation = null;

//   const db = await mongoClient.connect(MONGO_DB_URL as string);
//   const shiftsCollection = db.collection("shifts");
//   confirmation = await shiftsCollection.insertOne(data);

//   ctx.response.body = {
//     confirmation,
//     data,
//   };
// });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

export { app };
