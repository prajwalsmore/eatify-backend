`require('dotenv').config();
const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');

const sampleRestaurants = [
  {
    name: "Spice Villa",
    cuisine: "Indian",
    rating: 4.5,
    deliveryTime: 30,
    image: "https://source.unsplash.com/featured/?indian-food",
    menu: [
      {
        name: "Paneer Butter Masala",
        description: "Creamy tomato-based curry with soft paneer cubes.",
        price: 220,
        image: "https://source.unsplash.com/featured/?paneer"
      },
      {
        name: "Butter Naan",
        description: "Soft naan topped with melted butter.",
        price: 40,
        image: "https://source.unsplash.com/featured/?naan"
      }
    ]
  },
  {
    name: "Sushi House",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: 25,
    image: "https://source.unsplash.com/featured/?sushi",
    menu: [
      {
        name: "Salmon Nigiri",
        description: "Fresh salmon on seasoned rice.",
        price: 300,
        image: "https://source.unsplash.com/featured/?salmon-sushi"
      },
      {
        name: "Miso Soup",
        description: "Traditional Japanese soup with tofu and seaweed.",
        price: 90,
        image: "https://source.unsplash.com/featured/?miso-soup"
      }
    ]
  },
  {
    name: "Burger Town",
    cuisine: "American",
    rating: 4.2,
    deliveryTime: 20,
    image: "https://source.unsplash.com/featured/?burger",
    menu: [
      {
        name: "Cheeseburger",
        description: "Juicy beef patty with melted cheddar cheese.",
        price: 180,
        image: "https://source.unsplash.com/featured/?cheeseburger"
      },
      {
        name: "Fries",
        description: "Crispy golden fries with a side of ketchup.",
        price: 70,
        image: "https://source.unsplash.com/featured/?fries"
      }
    ]
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Restaurant.deleteMany({});
    await Restaurant.insertMany(sampleRestaurants);
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
}

seed(); 