const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');
const MenuItem = require('./models/MenuItem');

const seedData = async () => {
  try {
    // Clear existing data
    await Restaurant.deleteMany({});
    await MenuItem.deleteMany({});

    // Create restaurants
    const restaurants = await Restaurant.create([
      {
        name: "Pizza Palace",
        cuisine: "Italian",
        description: "Authentic Italian pizza made with fresh ingredients and traditional recipes.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
        rating: 4.5,
        deliveryTime: 25,
        deliveryFee: 2.99,
        address: "123 Main St, Downtown"
      },
      {
        name: "Burger House",
        cuisine: "American",
        description: "Juicy burgers and crispy fries made with premium beef and fresh vegetables.",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
        rating: 4.2,
        deliveryTime: 20,
        deliveryFee: 1.99,
        address: "456 Oak Ave, Midtown"
      },
      {
        name: "Sushi Express",
        cuisine: "Japanese",
        description: "Fresh sushi and sashimi prepared by expert chefs with the finest ingredients.",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
        rating: 4.7,
        deliveryTime: 30,
        deliveryFee: 3.99,
        address: "789 Pine St, Uptown"
      },
      {
        name: "Taco Fiesta",
        cuisine: "Mexican",
        description: "Authentic Mexican tacos, burritos, and quesadillas with homemade salsa.",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
        rating: 4.3,
        deliveryTime: 22,
        deliveryFee: 2.49,
        address: "321 Elm St, Downtown"
      },
      {
        name: "Curry Corner",
        cuisine: "Indian",
        description: "Spicy and aromatic Indian curries with fresh naan bread and rice.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        rating: 4.6,
        deliveryTime: 28,
        deliveryFee: 2.99,
        address: "654 Maple Dr, Midtown"
      },
      {
        name: "Pho Delight",
        cuisine: "Vietnamese",
        description: "Traditional Vietnamese pho with rich broth and fresh herbs.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
        rating: 4.4,
        deliveryTime: 25,
        deliveryFee: 2.79,
        address: "987 Cedar Ln, Uptown"
      }
    ]);

    // Create menu items for each restaurant
    const menuItems = [];

    // Pizza Palace menu
    menuItems.push(
      {
        restaurantId: restaurants[0]._id,
        name: "Margherita Pizza",
        description: "Classic tomato sauce, mozzarella, and fresh basil",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop",
        category: "Pizza"
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Pepperoni Pizza",
        description: "Spicy pepperoni with melted cheese and tomato sauce",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
        category: "Pizza"
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Garlic Bread",
        description: "Crispy bread with garlic butter and herbs",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1572440271234-a78b5944a659?w=400&h=300&fit=crop",
        category: "Sides"
      }
    );

    // Burger House menu
    menuItems.push(
      {
        restaurantId: restaurants[1]._id,
        name: "Classic Cheeseburger",
        description: "Beef patty with cheese, lettuce, tomato, and special sauce",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        category: "Burgers"
      },
      {
        restaurantId: restaurants[1]._id,
        name: "Bacon Deluxe Burger",
        description: "Double patty with bacon, cheese, and all the fixings",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
        category: "Burgers"
      },
      {
        restaurantId: restaurants[1]._id,
        name: "French Fries",
        description: "Crispy golden fries with sea salt",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
        category: "Sides"
      }
    );

    // Sushi Express menu
    menuItems.push(
      {
        restaurantId: restaurants[2]._id,
        name: "California Roll",
        description: "Crab, avocado, and cucumber with rice and nori",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
        category: "Sushi"
      },
      {
        restaurantId: restaurants[2]._id,
        name: "Salmon Nigiri",
        description: "Fresh salmon over seasoned rice",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
        category: "Sushi"
      },
      {
        restaurantId: restaurants[2]._id,
        name: "Miso Soup",
        description: "Traditional Japanese soup with tofu and seaweed",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
        category: "Soups"
      }
    );

    // Taco Fiesta menu
    menuItems.push(
      {
        restaurantId: restaurants[3]._id,
        name: "Street Tacos",
        description: "Three authentic street tacos with carne asada",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
        category: "Tacos"
      },
      {
        restaurantId: restaurants[3]._id,
        name: "Chicken Burrito",
        description: "Grilled chicken with rice, beans, and fresh salsa",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
        category: "Burritos"
      },
      {
        restaurantId: restaurants[3]._id,
        name: "Guacamole & Chips",
        description: "Fresh guacamole with crispy tortilla chips",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1603049401522-9b2316d4b356?w=400&h=300&fit=crop",
        category: "Sides"
      }
    );

    // Curry Corner menu
    menuItems.push(
      {
        restaurantId: restaurants[4]._id,
        name: "Butter Chicken",
        description: "Creamy tomato-based curry with tender chicken",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        category: "Curries"
      },
      {
        restaurantId: restaurants[4]._id,
        name: "Naan Bread",
        description: "Fresh baked naan bread from the tandoor",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        category: "Bread"
      },
      {
        restaurantId: restaurants[4]._id,
        name: "Basmati Rice",
        description: "Fragrant basmati rice cooked with aromatic spices",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        category: "Sides"
      }
    );

    // Pho Delight menu
    menuItems.push(
      {
        restaurantId: restaurants[5]._id,
        name: "Beef Pho",
        description: "Traditional beef pho with rice noodles and herbs",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
        category: "Pho"
      },
      {
        restaurantId: restaurants[5]._id,
        name: "Chicken Pho",
        description: "Light chicken pho with fresh vegetables",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
        category: "Pho"
      },
      {
        restaurantId: restaurants[5]._id,
        name: "Spring Rolls",
        description: "Fresh spring rolls with shrimp and vegetables",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
        category: "Appetizers"
      }
    );

    await MenuItem.create(menuItems);

    console.log('Database seeded successfully!');
    console.log(`Created ${restaurants.length} restaurants and ${menuItems.length} menu items`);
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = seedData; 