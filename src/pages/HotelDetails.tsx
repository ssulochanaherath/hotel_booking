import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const hotels = [
    {
        id: 1,
        name: "The Palm Resort",
        location: "Maldives",
        rating: 4.8,
        price: "$299/night",
        description:
            "A luxurious resort in the Maldives, perfect for relaxation and adventure.",
        amenities: ["Free Wi-Fi", "Ocean View", "Spa", "Private Pool"],
        images: [
            "/images/login-background.jpg",
            "/images/palm.jpg",
            "https://source.unsplash.com/800x600/?resort,pool",
        ],
    },
    {
        id: 2,
        name: "Skyline Hotel",
        location: "New York",
        rating: 4.5,
        price: "$199/night",
        description:
            "A modern hotel with stunning views of New York City, ideal for city exploration.",
        amenities: ["Free Wi-Fi", "24/7 Room Service", "Gym", "Bar"],
        images: [
            "https://source.unsplash.com/800x600/?hotel,city",
            "https://source.unsplash.com/800x600/?hotel,night",
            "https://source.unsplash.com/800x600/?hotel,luxury",
        ],
    },
    {
        id: 3,
        name: "Mountain Escape",
        location: "Switzerland",
        rating: 4.7,
        price: "$249/night",
        description:
            "A cozy retreat in the Swiss Alps, offering breathtaking mountain views.",
        amenities: ["Free Wi-Fi", "Mountain View", "Restaurant", "Ski Access"],
        images: [
            "https://source.unsplash.com/800x600/?mountain,resort",
            "https://source.unsplash.com/800x600/?mountain,ski",
            "https://source.unsplash.com/800x600/?mountain,luxury",
        ],
    },
];

const HotelDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const hotel = hotels.find((h) => h.id === parseInt(id));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!hotel) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-8">
                <h1 className="text-xl font-bold text-gray-800">Hotel Not Found</h1>
            </div>
        );
    }

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === hotel.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? hotel.images.length - 1 : prevIndex - 1
        );
    };

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handleBooking = () => {
        navigate(`/book/${hotel.id}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative">
                        <img
                            src={hotel.images[currentImageIndex]}
                            alt={hotel.name}
                            className="w-full h-80 object-cover"
                        />
                        <button
                            onClick={handlePrevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={handleNextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition"
                        >
                            &gt;
                        </button>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {hotel.images.map((_, index) => (
                                <span
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`w-3 h-3 rounded-full cursor-pointer ${
                                        index === currentImageIndex
                                            ? "bg-indigo-600"
                                            : "bg-gray-400"
                                    }`}
                                ></span>
                            ))}
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-3xl font-bold text-gray-800">{hotel.name}</h2>
                            <div className="flex items-center gap-1 text-yellow-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className="w-6 h-6"
                                >
                                    <path d="M9.049 3.927c-.3-.92-1.627-.92-1.926 0L6.4 6.347l-1.444-.207a1.002 1.002 0 0 0-.559 1.775l1.038.966-.246 1.467c-.084.493.409.876.823.642L9.5 8.61l1.32.696c.414.223.907-.149.823-.642l-.246-1.467 1.038-.966a1.002 1.002 0 0 0-.559-1.775l-1.444.207-.723-2.42z" />
                                </svg>
                                <span className="text-sm font-medium text-gray-700">
                                    {hotel.rating}
                                </span>
                            </div>
                        </div>
                        <p className="text-xl text-gray-600 mb-4">{hotel.location}</p>
                        <p className="text-lg text-gray-700 mb-6">{hotel.description}</p>
                        <p className="text-xl font-semibold text-indigo-600">{hotel.price}</p>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                Amenities:
                            </h3>
                            <ul className="list-disc pl-5 text-gray-700">
                                {hotel.amenities.map((amenity, index) => (
                                    <li key={index} className="mb-1">
                                        {amenity}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <button
                                onClick={handleBooking}
                                className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;
