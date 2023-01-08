import {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
  Context,
} from "https://deno.land/x/lambda@1.28.3/mod.ts";
import { app as service } from "./src/service.ts";

const serverless = (app: any) => {
  const isGET = (method: string): boolean => ["GET", "get"].includes(method);
  let localHandler = async (
    event: APIGatewayProxyEventV2,
    context: Context
  ): Promise<APIGatewayProxyResultV2> => {
    // Request data
    let req = null;
    let reqUrl = "http://localhost:3000";
    let reqHeaders: any = {};
    let reqBody = null;

    // Response data
    let res = null;
    let resBody = null;
    let resMessage = `Welcome to deno ${Deno.version.deno} 🦕`;

    try {
      // Extract HTTP event data
      let { domainName, http } = event.requestContext;
      let { method, path } = http;

      // Create request
      reqUrl = `https://${domainName}/${path}`;
      reqBody = isGET(method) ? undefined : JSON.parse(event.body ?? "{}");
      reqHeaders = new Headers(event.headers as any);
      req = new Request(reqUrl, { method, headers: reqHeaders, body: reqBody });

      // Get response
      res = (await app.handle(req)) as Response;

      // Get response body
      try {
        resBody = await res?.json?.();
      } catch (error) {}

      // Gather data
      resBody = { resBody, event, context, resMessage };
    } catch (error: any) {
      console.log({ error });
      resBody = { error, event, context, resMessage };
    }

    return {
      body: JSON.stringify(resBody),
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        ...reqHeaders,
      },
      statusCode: 200,
    };
  };
  return localHandler;
};

const handler = serverless(service);

export { handler };
