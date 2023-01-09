package main

import "github.com/gofiber/fiber/v2"
// import "go.mongodb.org/mongo-driver/mongo"
// import "go.mongodb.org/mongo-driver/mongo/options"

// import "context"
// import "log"
// import "time"

// func getCollection(client *mongo.Client, name string) *mongo.Collection {
//     return client.Database("go-api").Collection(name)
// }

func main() {
	// Create app
	app := fiber.New()

	// DB
	// connectionString := "mongodb+srv://storage-core:wl7XR3WQgbJkheqt@dmp-dev-0.sup0szt.mongodb.net/?retryWrites=true&w=majority"
	// DBclient, err := mongo.NewClient(options.Client().ApplyURI(connectionString))

	// if err != nil { log.Fatal(err) }


	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello from GO + DOCKER!")
	})

	app.Get("/products", func(c *fiber.Ctx) error {
		// ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		// defer cancel()

		category := c.Query("category")
		product := c.Query("product")

		// productsCollection := getCollection(DBclient, "products")
		// cursor, err := productsCollection.Find(ctx, bson.D{})

		// if err != nil { log.Fatal(err) }

		// TODO: Get data from cursor and 


		return c.JSON(fiber.Map{
			"category": category,
			"product": product,
			// "cursor": cursor
		})
	})

	app.Get("/categories", func(c *fiber.Ctx) error {
		category := c.Query("category")

		// var categoriesCollection *mongo.Collection = getCollection(DB, "categories")

		return c.JSON(fiber.Map{
			"category": category,
		})
	})

	app.Listen(":3000")
}