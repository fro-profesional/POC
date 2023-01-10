FROM golang:1.18

WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY *.go ./

RUN go build -o /go-api

EXPOSE 3000

CMD [ "/go-api" ]

# Docker hub
# DOCKER_DEFAULT_PLATFORM=linux/amd64 docker build --tag frodevclau/go-api .
# docker run -p 3000:3000 frodevclau/go-api

# AWS ECR
# DOCKER_DEFAULT_PLATFORM=linux/amd64 docker build --tag go-api .
# docker tag go-api:latest public.ecr.aws/i7s8j3s8/go-api:latest
# docker push public.ecr.aws/i7s8j3s8/go-api:latest