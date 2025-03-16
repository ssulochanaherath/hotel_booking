import React from "react";
import { Search, Star } from "lucide-react";
import { Link } from 'react-router-dom';

const hotels = [
    {
        id: 1,
        name: "The Palm Resort",
        location: "Maldives",
        rating: 4.8,
        price: "$299/night",
        image: "https://source.unsplash.com/800x600/?resort,beach",
    },
    {
        id: 2,
        name: "Skyline Hotel",
        location: "New York",
        rating: 4.5,
        price: "$199/night",
        image: "https://source.unsplash.com/800x600/?hotel,city",
    },
    {
        id: 3,
        name: "Mountain Escape",
        location: "Switzerland",
        rating: 4.7,
        price: "$249/night",
        image: "https://source.unsplash.com/800x600/?mountain,resort",
    },
];

export default function Homepage() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-8">
            <header className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold mb-2 text-gray-800">Find Your Perfect Stay</h1>
                <p className="text-gray-600 text-lg">Book your next getaway from top-rated hotels worldwide</p>

                <div className="mt-6 flex justify-center">
                    <div className="flex items-center bg-white shadow-md rounded-xl px-4 py-2 gap-2 w-full max-w-xl">
                        <Search className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by location, hotel name..."
                            className="w-full bg-transparent outline-none text-gray-700"
                        />
                        <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition">
                            Search
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {hotels.map((hotel) => (
                    <div
                        key={hotel.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                    >
                        <img src={hotel.image} alt={hotel.name} className="w-full h-56 object-cover" />
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star className="w-5 h-5" />
                                    <span className="text-sm font-medium text-gray-700">{hotel.rating}</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mb-2">{hotel.location}</p>
                            <p className="text-lg font-semibold text-indigo-600">{hotel.price}</p>
                            <Link to={`/hotel/${hotel.id}`}>
                                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
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
