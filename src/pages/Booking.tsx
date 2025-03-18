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
        <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100 flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-10 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100">
                <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-8 tracking-tight leading-tight">
                    ✨ Hotel Reservation Form
                </h2>

                <div className="space-y-6">
                    <div className="group">
                        <label className="block mb-2 text-gray-700 font-semibold flex items-center gap-2">
                            <CalendarDays className="w-5 h-5 text-indigo-600" />
                            Check-in Date
                        </label>
                        <DatePicker
                            selected={checkIn}
                            onChange={(date) => setCheckIn(date)}
                            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 bg-gray-50 hover:border-indigo-400"
                            placeholderText="Select check-in date"
                        />
                    </div>

                    <div className="group">
                        <label className="block mb-2 text-gray-700 font-semibold flex items-center gap-2">
                            <CalendarDays className="w-5 h-5 text-indigo-600" />
                            Check-out Date
                        </label>
                        <DatePicker
                            selected={checkOut}
                            onChange={(date) => setCheckOut(date)}
                            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 bg-gray-50 hover:border-indigo-400"
                            placeholderText="Select check-out date"
                        />
                    </div>

                    <div className="group">
                        <label className="block mb-2 text-gray-700 font-semibold flex items-center gap-2">
                            <Users className="w-5 h-5 text-indigo-600" />
                            Number of Guests
                        </label>
                        <input
                            type="number"
                            min={1}
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 bg-gray-50 hover:border-indigo-400"
                            placeholder="Enter number of guests"
                        />
                    </div>

                    <div className="group">
                        <label className="block mb-2 text-gray-700 font-semibold flex items-center gap-2">
                            <BedDouble className="w-5 h-5 text-indigo-600" />
                            Number of Rooms
                        </label>
                        <input
                            type="number"
                            min={1}
                            value={rooms}
                            onChange={(e) => setRooms(e.target.value)}
                            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 bg-gray-50 hover:border-indigo-400"
                            placeholder="Enter number of rooms"
                        />
                    </div>

                    <button
                        onClick={handleBooking}
                        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 hover:scale-[1.02] transition duration-300 ease-in-out shadow-md hover:shadow-xl"
                    >
                        ✅ Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
