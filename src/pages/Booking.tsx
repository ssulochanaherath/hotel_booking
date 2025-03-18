import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays, Users, BedDouble } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [guests, setGuests] = useState(1);
    const [rooms, setRooms] = useState(1);

    const navigate = useNavigate();

    const handleBooking = () => {
        alert("🎉 Booking Confirmed!");
        navigate("/home");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8 transition-all">
                <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center tracking-tight">
                    Hotel Reservation Form
                </h2>

                <div className="space-y-6">
                    {/* Check-in */}
                    <div>
                        <label className="block mb-2 text-gray-700 font-semibold flex items-center gap-2">
                            <CalendarDays className="w-5 h-5 text-indigo-600" />
                            Check-in Date
                        </label>
                        <DatePicker
                            selected={checkIn}
                            onChange={(date) => setCheckIn(date)}
                            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                            placeholderText="Select check-in date"
                        />
                    </div>

                    {/* Check-out */}
                    <div>
                        <label className="block mb-2 text-gray-700 font-semibold flex items-center gap-2">
                            <CalendarDays className="w-5 h-5 text-indigo-600" />
                            Check-out Date
                        </label>
                        <DatePicker
                            selected={checkOut}
                            onChange={(date) => setCheckOut(date)}
                            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                            placeholderText="Select check-out date"
                        />
                    </div>

                    {/* Guests */}
                    <div>
                        <label className="block mb-2 text-gray-700 font-semibold flex items-center gap-2">
                            <Users className="w-5 h-5 text-indigo-600" />
                            Number of Guests
                        </label>
                        <input
                            type="number"
                            min={1}
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                            placeholder="Enter number of guests"
                        />
                    </div>

                    {/* Rooms */}
                    <div>
                        <label className="block mb-2 text-gray-700 font-semibold flex items-center gap-2">
                            <BedDouble className="w-5 h-5 text-indigo-600" />
                            Number of Rooms
                        </label>
                        <input
                            type="number"
                            min={1}
                            value={rooms}
                            onChange={(e) => setRooms(e.target.value)}
                            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                            placeholder="Enter number of rooms"
                        />
                    </div>

                    {/* Confirm Button */}
                    <button
                        onClick={handleBooking}
                        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition duration-300 ease-in-out shadow-lg"
                    >
                        Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
