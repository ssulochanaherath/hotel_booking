import React from "react";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center text-gray-500 mt-6">
                    Don't have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
