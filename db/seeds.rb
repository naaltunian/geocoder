# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Place.find_or_create_by(
  name: "Miami Beach Senior High",
  street: "2231 Prairie Ave",
  city: "Miami Beach"
)
sleep 1
Place.find_or_create_by(
  name: "Dali Museum",
  street: "1 Dali Blvd",
  city: "St Petersburg",
  state: "FL"
)
sleep 1
Place.find_or_create_by(
  name: "Joe's Stone Crab",
  street: "11 Washington Ave",
  city: "Miami Beach"
)
sleep 1
Place.find_or_create_by(
  name: "Wyncode",
  street: "549 NW 28th Street",
  city: "Miami",
  state: "Florida"
)
