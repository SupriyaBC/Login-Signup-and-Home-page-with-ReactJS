import React, { useState } from "react";
import './loginsignup.css';


const Loginsignup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [currentPage, setCurrentPage] = useState("signup");

    const handleSignUp = () => {
        // Simple validation
        if (!name.trim() || !email.trim() || !password.trim()) {
            alert("Please fill in all fields");
            return;
        }

        // Perform signup logic here

        // Show success message
        setShowSuccessMessage(true);

        // Redirect to the home page
        setCurrentPage("home");

        // Reset form fields
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="container">
            {currentPage === "/home" ? (
                <div>
                    
                </div>
            ) : (
                <>
                    {showSuccessMessage && (
                        <div className="success-message">
                            Sign up successful! You can now log in.
                        </div>
                    )}
                    <div className="header">
                        <div className="text">Sign Up</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <input
                                type="email"
                                placeholder="Email Id"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="forgot-password">
                            Lost-Password?<span>Click here!</span>
                        </div>
                    </div>
                    <div className="submit-container">
                        <div className="submit" onClick={handleSignUp}>
                            Sign Up
                        </div>
                    </div>
                    <div className="login-link">
                        Already have an account? <a href="/login">Login</a>
                    </div>
                </>
            )}
        </div>
    );
};

export default Loginsignup;
