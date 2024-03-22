import React, { useState } from "react";
import './login.css';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSignUp = () => {
        // Simple validation
        if (!name.trim() || !email.trim() || !password.trim()) {
            alert("Please fill in all fields");
            return;
        }

        // Perform signup logic here

        // Show success message
        setShowSuccessMessage(true);

        // Reset form fields
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="container">
            {showSuccessMessage && (
                <div className="success-message">
                    Login successful! 
                </div>
            )}
            <div className="header">
                <div className="text">Login</div>
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
                    login
                </div>
            </div>
            <div className="login-link">
                Want to create a new account? <a href="/loginsignup">Signup</a>
            </div>
        </div>
    );
};

export default Login;
