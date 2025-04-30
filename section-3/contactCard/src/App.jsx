import React, { useState } from "react"
import avatar from "../src/assets/images/avatar.png"
import starFilled from "./assets/images/star-filled.png"
import starEmpty from "../src/assets/images/star-empty.png"
import './App.css'
export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? starFilled : starEmpty;
    function toggleFavorite() {
        console.log("Toggle Favorite")
        setContact(prev => ({
          ...prev,
          isFavorite: !prev.isFavorite
        }))
      }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isfavorite ? "Remove from favorites" : "add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ?  "Filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
