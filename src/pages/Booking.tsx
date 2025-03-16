import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingPage = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);

  const handleBooking = () => {
    alert("Booking Confirmed!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Reservation Form</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Check-in Date</label>
            <DatePicker selected={checkIn} onChange={(date) => setCheckIn(date)} className="w-full border p-2 rounded-lg" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Check-out Date</label>
            <DatePicker selected={checkOut} onChange={(date) => setCheckOut(date)} className="w-full border p-2 rounded-lg" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Number of Guests</label>
            <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} className="w-full border p-2 rounded-lg" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Number of Rooms</label>
            <input type="number" value={rooms} onChange={(e) => setRooms(e.target.value)} className="w-full border p-2 rounded-lg" />
          </div>
          <button onClick={handleBooking} className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition">Confirm Booking</button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
