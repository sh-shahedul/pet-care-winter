import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiArrowRight, FiUser, FiCalendar } from 'react-icons/fi';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Pet Article Images
import groomingBlog from "../../assets/groming_Blog.jpg"
import winterCareBlog from "../../assets/winterBlogs.jpg";
import trainingBlog from "../../assets/Trainingblogs.jpg";
import nutritionBlog from "../../assets/nutration_blog.jpg";
import adoptionBlog from "../../assets/adoptBlog.jpg";

// Initialize AOS
AOS.init({
    duration: 900,
    once: true,
});

// Pet Articles Data
const petArticles = [
    {
        id: 1,
        title: "Winter Care Tips for Your Furry Friends",
        summary: "Keep your pets warm, safe, and healthy during the cold season with these expert tips.",
        author: "Dr. Emily R.",
        date: "Dec 2, 2025",
        category: "Winter Care",
        imageUrl: winterCareBlog,
    },
    {
        id: 2,
        title: "Top 10 Grooming Hacks for Dogs and Cats",
        summary: "Groom your pets like a pro! Discover simple tips to make grooming stress-free.",
        author: "Sarah P.",
        date: "Nov 28, 2025",
        category: "Grooming",
        imageUrl: groomingBlog,
    },
    {
        id: 3,
        title: "Essential Nutrition Guide for Your Pets",
        summary: "Learn how to provide a balanced diet for dogs and cats to keep them healthy and happy.",
        author: "Michael T.",
        date: "Nov 18, 2025",
        category: "Nutrition",
        imageUrl: nutritionBlog,
    },
    {
        id: 4,
        title: "Training Your Dog: Basic Commands and Tricks",
        summary: "Fun and easy dog training techniques that strengthen your bond and improve behavior.",
        author: "Alex J.",
        date: "Nov 10, 2025",
        category: "Training",
        imageUrl: trainingBlog,
    },
    {
        id: 5,
        title: "How to Adopt a Pet: What You Need to Know",
        summary: "Step-by-step guide for first-time adopters to bring home a furry companion responsibly.",
        author: "Maria S.",
        date: "Oct 25, 2025",
        category: "Adoption",
        imageUrl: adoptionBlog,
    },
];

// Animation Variants
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
    hover: { scale: 1.05, boxShadow: "0 20px 40px rgba(255, 165, 0, 0.25)" },
};

const FancyPetBlogs = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredArticles = petArticles.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const featuredArticle = filteredArticles[0];
    const recentArticles = filteredArticles.slice(1);

    const uniqueCategories = [...new Set(petArticles.map(post => post.category))];

    return (
        <div className="bg-gradient-to-b from-orange-50 via-white to-orange-50 min-h-screen py-16">
            <div className="container mx-auto px-4 space-y-16">

                {/* Hero Section */}
                <section className="text-center space-y-4" data-aos="fade-up">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-extrabold text-gray-900"
                    >
                        Pet <span className="text-orange-600">Frosty Hub</span>
                    </motion.h1>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl font-light">
                        Expert insights on Pet Care, Grooming, Nutrition, Training, and Adoption.
                    </p>
                </section>

                <hr className="border-orange-200" />

                {/* Featured Article & Sidebar */}
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Featured Article */}
                    {featuredArticle && (
                        <motion.div
                            data-aos="fade-right"
                            data-aos-delay="200"
                            className="lg:col-span-2 bg-white backdrop-blur-md bg-opacity-70 rounded-3xl shadow-2xl overflow-hidden border border-orange-100 hover:shadow-orange-300 transition-all duration-300"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="h-96 w-full relative overflow-hidden rounded-t-3xl">
                                <img 
                                    src={featuredArticle.imageUrl} 
                                    alt={featuredArticle.title} 
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-8 space-y-4">
                                <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                    {featuredArticle.category}
                                </span>
                                <h2 className="text-4xl font-extrabold text-gray-900 hover:text-orange-600 transition duration-300 cursor-pointer">
                                    {featuredArticle.title}
                                </h2>
                                <p className="text-gray-600 text-lg line-clamp-3">{featuredArticle.summary}</p>
                                <div className="flex items-center text-gray-500 space-x-6 text-sm">
                                    <div className="flex items-center space-x-1">
                                        <FiUser size={16} />
                                        <span>{featuredArticle.author}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <FiCalendar size={16} />
                                        <span>{featuredArticle.date}</span>
                                    </div>
                                </div>
                                <button className="flex items-center text-white bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-full font-semibold mt-4 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg">
                                    Read Full Article
                                    <FiArrowRight className="ml-2" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8" data-aos="fade-left" data-aos-delay="300">
                        {/* Search */}
                        <div className="p-6 bg-white backdrop-blur-md bg-opacity-60 rounded-2xl shadow-lg border border-orange-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Search Articles</h3>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search pet tips..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full border border-orange-200 rounded-full py-3 pl-10 pr-4 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                                />
                                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="p-6 bg-white backdrop-blur-md bg-opacity-60 rounded-2xl shadow-lg border border-orange-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                            <ul className="space-y-3">
                                {uniqueCategories.map(cat => (
                                    <li key={cat} className="flex justify-between items-center text-gray-600 hover:text-orange-600 cursor-pointer transition-all duration-300">
                                        <span>{cat}</span>
                                        <span className="text-sm font-semibold">({petArticles.filter(p => p.category === cat).length})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Recent Articles */}
                <section className="space-y-10 pt-10">
                    <h2 className="text-4xl font-extrabold text-gray-900 text-center" data-aos="fade-up">
                        Recent Articles
                    </h2>
                    
                    {filteredArticles.length === 0 && (
                        <p className="text-center text-xl text-gray-500">No articles found for "{searchTerm}".</p>
                    )}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentArticles.map((post, index) => (
                            <motion.div
                                key={post.id}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white backdrop-blur-md bg-opacity-70 rounded-2xl overflow-hidden shadow-xl border border-orange-100 flex flex-col cursor-pointer hover:scale-105 transition-transform duration-300"
                            >
                                <div className="h-52 w-full relative overflow-hidden rounded-t-xl">
                                    <img 
                                        src={post.imageUrl} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="text-xs font-semibold text-orange-600 uppercase tracking-widest mb-2">
                                        {post.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-orange-700 transition duration-300 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">{post.summary}</p>
                                    <div className="mt-auto flex justify-between items-center border-t border-orange-100 pt-4 text-sm text-gray-500">
                                        <div className="flex items-center space-x-1">
                                            <FiUser size={14} />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <FiCalendar size={14} />
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FancyPetBlogs;
