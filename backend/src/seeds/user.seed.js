import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
    // Female Users
    {
        email: "varsha@example.com",
        fullName: "Varsha",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        email: "ragini@example.com",
        fullName: "Raginir",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        email: "sampada@example.com",
        fullName: "Sampada",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
        email: "anamika@example.com",
        fullName: "Anamika",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        email: "nisha@example.com",
        fullName: "Nisha",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
    },

    // Male Users
    {
        email: "abhishek@example.com",
        fullName: "Abhishek",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        email: "aarav@example.com",
        fullName: "Aarav",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        email: "aarush@example.com",
        fullName: "Aarush",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        email: "harsh@example.com",
        fullName: "Harsh",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
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