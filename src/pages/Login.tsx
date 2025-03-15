import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const backgroundImage = "/images/login-background.jpg";  // Path from public folder

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Simulating login process, you can add Redux logic here later
        setTimeout(() => {
            if (email === "test@example.com" && password === "password") {
                // Handle successful login
                console.log("Login successful");
                // Redirect or store token logic here
            } else {
                setError("Invalid email or password");
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="w-full max-w-md bg-white bg-opacity-80 rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login to Your Account</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <button
                        type="submit"
                        className={`w-full ${loading ? "bg-gray-400" : "bg-indigo-600"} text-white py-3 rounded-xl hover:bg-indigo-700 transition duration-300`}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
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
