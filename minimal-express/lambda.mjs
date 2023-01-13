import serverlessExpress from "@vendia/serverless-express";
import { service } from "./src/service.mjs";
export const handler = serverlessExpress({ app: service });