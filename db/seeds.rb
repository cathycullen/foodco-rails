# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Store.destroy_all
Product.destroy_all

store1 = Store.create!(
  name: "Jets Pizza",
  address: "5058 N Clark St, Chicago, IL",
  description: "Jets Pizza of Andersonville",
)

store2 = Store.create!(
  name: "Pokiology",
  address: "124600 N Magnolia Ave, Chicago, IL",
  description: "Pokiology Uptown",
)

pizza = Product.create!(
  name: "Pepperoni Pizza",
  description: "World Famous Pie",
  image_descr: "image",
  qty_available: 10,
  ingredients: "sauce, mozzarella cheese, pepperoni, gluten",
  original_price: 20,
  discounted_price: 5,
  item_category: "meal",
  suprise: false,
  rating: "****",
  store_id: store1.id
)

surprise = Product.create!(
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
  store_id: store2.id
)
