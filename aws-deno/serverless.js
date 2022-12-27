const name = "deno-lambda-test";
let config = {
  service: name,
  provider: {
    name: "aws",
    ecr: { images: { [name]: { path: "./" } } },
  },
  functions: {
    service: {
      image: { name },
      events: [{ httpApi: "*" }],
    },
  },
};
module.exports = config;
