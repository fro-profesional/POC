import express from "express";

const service = express();

service.get("/", (request, response) => {
  response.send("Hello World!");
});

export { service };