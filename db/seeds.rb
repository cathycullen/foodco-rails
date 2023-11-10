# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Product.create(
  name: "Pepperoni Pizza",
  description: "Delicious Pie",
  image_descr: "image",
  qty_available: 10,
  ingredients: "gluten, sauce, mozzarella cheese, pepperoni",
  original_price: 20,
  discounted_price: 5,
  item_category: "meal",
  suprise: false,
  rating: "****"
)

Product.create(
  name: "Surprise Bag",
  description: "Assortment of Goodies",
  image_descr: "image",
  qty_available: 15,
  ingredients: "This suprise bag will most likely contain rice, some proteinand a sauce",
  original_price: 15,
  discounted_price: 3.99,
  item_category: "meal",
  suprise: true,
  rating: "****",
)