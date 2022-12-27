import { app as service } from "./src/service.ts";

await service.listen({ port: 8000 });