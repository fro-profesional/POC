FROM golang:1.18

WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY *.go ./

RUN go build -o /go-api

EXPOSE 3000

CMD [ "/go-api" ]

# DOCKER_DEFAULT_PLATFORM=linux/amd64 docker build --tag frodevclau/go-api .
# DOCKER_DEFAULT_PLATFORM=linux/amd64 docker run -p 3000:3000 frodevclau/go-api