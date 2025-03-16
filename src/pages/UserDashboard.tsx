import React from "react";
import { useNavigate } from "react-router-dom";

// Simulated user data and bookings
const userData = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
};

const bookings = [
    {
        id: 1,
        hotel: "The Palm Resort",
        location: "Maldives",
        checkIn: "2025-04-01",
        checkOut: "2025-04-07",
        status: "Booked",
    },
    {
        id: 2,
        hotel: "Skyline Hotel",
        location: "New York",
        checkIn: "2025-05-15",
        checkOut: "2025-05-20",
        status: "Booked",
    },
];

const UserDashboard = () => {
    const navigate = useNavigate();

    // Handle canceling a booking
    const handleCancelBooking = (bookingId) => {
        alert(`Booking with ID ${bookingId} has been canceled.`);
        // Perform the cancellation logic here (e.g., API call)
    };

    // Handle rescheduling a booking
    const handleRescheduleBooking = (bookingId) => {
        alert(`Booking with ID ${bookingId} has been rescheduled.`);
        // Perform the rescheduling logic here (e.g., API call)
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-3xl p-6">
                <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Welcome, {userData.name}</h2>

                {/* Profile Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h3>
                    <p className="text-gray-600">Email: {userData.email}</p>
                    <p className="text-gray-600">Phone: {userData.phone}</p>
                </div>

                {/* Bookings Section */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Bookings</h3>

                    {bookings.length > 0 ? (
                        <div className="space-y-6">
                            {bookings.map((booking) => (
                                <div
                                    key={booking.id}
                                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <h4 className="text-xl font-semibold text-indigo-700">{booking.hotel}</h4>
                                        <span className="text-sm text-gray-500">{booking.status}</span>
                                    </div>
                                    <p className="text-sm text-gray-500">{booking.location}</p>
                                    <p className="text-sm text-gray-500">Check-in: {booking.checkIn}</p>
                                    <p className="text-sm text-gray-500">Check-out: {booking.checkOut}</p>

                                    <div className="mt-4 flex gap-4 justify-between">
                                        <button
                                            onClick={() => handleRescheduleBooking(booking.id)}
                                            className="bg-indigo-600 text-white py-2 px-4 rounded-xl hover:bg-indigo-700 transition"
                                        >
                                            Reschedule
                                        </button>
                                        <button
                                            onClick={() => handleCancelBooking(booking.id)}
                                            className="bg-red-600 text-white py-2 px-4 rounded-xl hover:bg-red-700 transition"
                                        >
                                            Cancel Booking
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">You have no bookings yet.</p>
                    )}
                </div>

                {/* Logout Button */}
                <div className="mt-8 text-center">
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-red-600 text-white py-2 px-6 rounded-xl hover:bg-red-700 transition"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
