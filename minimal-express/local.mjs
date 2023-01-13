import { service } from "./src/service.mjs"
const PORT = process.env.PORT ?? 3000
service.listen(PORT, () => console.log(`Service at: http://localhost:${PORT}`))