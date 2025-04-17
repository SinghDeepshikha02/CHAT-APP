import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [

    {
        email: "varsha@email.com",
        fullName: "Varsha",
        password: "123456",
        profilePic: "https://res.cloudinary.com/da5kyzruk/image/upload/v1744450947/sample.jpg",

    },
    {
        email: "ragini@email.com",
        fullName: "Ragini",
        password: "123456",
        profilePic: "https://res.cloudinary.com/da5kyzruk/image/upload/v1744450952/samples/food/spices.jpg",
    },
    {
        email: "sampada@email.com",
        fullName: "Sampada",
        password: "123456",
        profilePic: "https://res.cloudinary.com/da5kyzruk/image/upload/v1744450952/samples/landscapes/nature-mountains.jpg",
    },
    {
        email: "anamika@email.com",
        fullName: "Anamika",
        password: "123456",
        profilePic: "https://res.cloudinary.com/da5kyzruk/image/upload/v1744450957/samples/balloons.jpg",
    },

];

const seedDatabase = async () => {
    try {
        await connectDB();

        await User.insertMany(seedUsers);
        console.log("Database seeded successfully");
    } catch (error) {
        console.error("Error seeding database:", error);
    }
};

// Call the function
seedDatabase();