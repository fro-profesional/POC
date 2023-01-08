FROM hayd/deno-lambda:1.29.1

COPY . .
RUN deno cache lambda.ts

CMD ["lambda.handler"]