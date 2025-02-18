import React from "react";
import "./GuestBox.css"; // Import the CSS file
import Dinesh from "../assets/dinesh.webp";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa"; // Import icons

const events = [
    {
        title: "Dinesh Sir",
        img: Dinesh,
        description: (
            <div className="flex flex-col gap-2">
                {/* Row for Courses */}
                <div className="flex justify-center">
                    <a
                        href="https://dineshsir.live/courses"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-button text-white text-2xl py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200 text-center "
                        
                    >
                        Courses
                    </a>
                </div>
                {/* Row for Social Media Links */}
                <div className="grid grid-cols-3 gap-2">
                    <a
                        href="https://www.youtube.com/@MyDineshSir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-links"
                    >
                        <FaYoutube />
                    </a>
                    <a
                        href="https://www.instagram.com/dinesh_sirg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-links"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.facebook.com/dineshgsir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-links"
                    >
                        <FaFacebookF />
                    </a>
                </div>
            </div>
        ),
    },
 
];

const GuestBox = () => {
    return (
        <div className="guestbox-container">
            <h1>Event Guests</h1>
            <p>Here are some of our speakers</p>
            <div className="guestbox-grid">
                {events.map((event, index) => (
                    <div className="guestbox-card" key={index}>
                        {event.title && <h2 className="guestbox-title">{event.title}</h2>}
                        <div className="guestbox-image-container">
                            <img
                                src={event.img}
                                alt={event.title || "Event"}
                                className="guestbox-image"
                            />
                        </div>
                        <div className="guestbox-description">
                            {typeof event.description === "string" ? (
                                <p>{event.description}</p>
                            ) : (
                                event.description
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GuestBox;
