import React from "react";
import {Search, Star, LayoutDashboard, ShoppingBag} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const hotels = [
    {
        id: 1,
        name: "Reagency",
        location: "Kandy",
        rating: 4.8,
        price: "$299/night",
        image: "/images/login-background.jpg",
    },
    {
        id: 2,
        name: "Grand Kandyan",
        location: "Kandy",
        rating: 4.5,
        price: "$199/night",
        image: "/images/skyline1.jpg",
    },
    {
        id: 3,
        name: "Queens Hotel",
        location: "Kandy",
        rating: 4.7,
        price: "$249/night",
        image: "/images/mountain1.jpg",
    },
];

export default function Homepage() {
    const navigate = useNavigate();
    const isAuthenticated = true;

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-10">

            {isAuthenticated && (
                <div className="absolute top-6 right-6 z-50">
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="inline-flex items-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition shadow-md"
                    >
                        <ShoppingBag className="w-5 h-5" />
                    </button>
                </div>
            )}

            <header className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-3">Find Your Perfect Stay</h1>
                <p className="text-gray-600 text-lg font-medium">
                    Book your next getaway from top-rated hotels worldwide
                </p>

                <div className="mt-8 flex justify-center">
                    <div className="flex items-center bg-white shadow-lg rounded-full px-6 py-3 gap-3 w-full max-w-2xl">
                        <Search className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by location, hotel name..."
                            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                        />
                        <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition font-medium text-sm">
                            Search
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {hotels.map((hotel) => (
                    <div
                        key={hotel.id}
                        className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-56 object-cover rounded-t-3xl"
                        />
                        <div className="p-5">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star className="w-5 h-5" />
                                    <span className="text-sm font-semibold text-gray-700">{hotel.rating}</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mb-1">{hotel.location}</p>
                            <p className="text-lg font-semibold text-indigo-600 mb-4">{hotel.price}</p>
                            <Link to={`/hotel/${hotel.id}`}>
                                <button className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition text-sm font-medium">
                                    Book Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
