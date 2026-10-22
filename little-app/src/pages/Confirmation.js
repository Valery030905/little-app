import { useState } from "react";
import { submitAPI } from "../api";

function Confirmation({
  setReservationData,
   reservationData,
   setPage
}) {

    const [termsAccepted, setTermsAccepted] = useState(false);

    const submitForm = (formData) => {
        const success = submitAPI(formData);

        if (success) {
            setPage("confirmed");
        }
    };

    // Formatear fecha
    const formatDate = () => {

        if (!reservationData.date) {
            return "Not selected";
        }

        const { day, month, year } = reservationData.date;

        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        return `${monthNames[month]} ${day}, ${year}`;
    };

    
    return (

        <main className="reservation-page">

            <section className="reservation-hero">

                <div className="reservation-overlay">

                    {/* LOGO */}

                    <img
                        src="/images/logo-white.png"
                        alt="Little Lemon"
                        className="reservation-logo"
                    />


                    {/* PROGRESS BAR */}

                    <div className="progress-bar">
                        <div className="progress progress-step-5"></div>
                    </div>


                    {/* CARD */}

                    <div className="reservation-card confirmation-card">

                        {/* BACK */}

                        <button
                            type="button"
                            className="back-button"
                            onClick={() => setPage("guest")}
                            aria-label="Go back"
                        >
                            ‹
                        </button>


                        <h1>Confirm Reservation</h1>


                        {/* ==========================
                            RESERVATION DETAILS
                        =========================== */}

                        <section className="confirmation-section">

                            <h2>Reservation details</h2>

                            <div className="confirmation-grid">


                                {/* DATE */}

                                <div className="confirmation-item">

                                    <div className="confirmation-title">

                                        <i class="fa-regular fa-calendar"></i>

                                        <span>
                                            Date
                                        </span>

                                    </div>

                                    <p>
                                        {formatDate()}
                                    </p>

                                </div>


                                {/* TIME */}

                                <div className="confirmation-item">

                                    <div className="confirmation-title">

                                        <i class="fa-regular fa-clock"></i>

                                        <span>
                                            Time
                                        </span>

                                    </div>

                                    <p>
                                        {reservationData.time ||
                                            "Not selected"}
                                    </p>

                                </div>


                                {/* GUESTS */}

                                <div className="confirmation-item">

                                    <div className="confirmation-title">

                                        <i class="fa-solid fa-user-group"></i>

                                        <span>
                                            Guests
                                        </span>

                                    </div>

                                    <p>
                                        {reservationData.guests || 0} guests
                                    </p>

                                </div>


                                {/* OCCASION */}

                                <div className="confirmation-item">

                                    <div className="confirmation-title">

                                        <i class="fa-solid fa-champagne-glasses"></i>

                                        <span>
                                            Occasion
                                        </span>

                                    </div>

                                    <p>
                                        {reservationData.occasion || "None"}
                                    </p>

                                </div>

                            </div>

                        </section>


                        {/* ==========================
                            GUEST INFORMATION
                        =========================== */}

                        <section className="confirmation-section">

                            <h2>Guest Information</h2>

                            <div className="confirmation-info">


                                <div className="confirmation-item">

                                    <span className="confirmation-label">
                                        Full name
                                    </span>

                                    <p>
                                        {reservationData.fullName}
                                    </p>

                                </div>


                                <div className="confirmation-item">

                                    <span className="confirmation-label">
                                        Phone Number
                                    </span>

                                    <p>
                                        {reservationData.phone}
                                    </p>

                                </div>


                                <div className="confirmation-item">

                                    <span className="confirmation-label">
                                        Email address
                                    </span>

                                    <p>
                                        {reservationData.email}
                                    </p>

                                </div>

                            </div>

                        </section>


                        {/* ==========================
                            ADDITIONAL INFORMATION
                        =========================== */}

                        <section className="confirmation-section">

                            <h2>Additional information</h2>

                            <div className="confirmation-grid">


                                <div className="confirmation-item">

                                    <span className="confirmation-label">
                                        Allergies
                                    </span>

                                    <p>
                                        {reservationData.allergies ||
                                            "None"}
                                    </p>

                                </div>


                                <div className="confirmation-item">

                                    <span className="confirmation-label">
                                        Special Requests
                                    </span>

                                    <p>
                                        {reservationData.specialRequest ||
                                            "None"}
                                    </p>

                                </div>

                            </div>

                        </section>


                        {/* ==========================
                            TERMS
                        =========================== */}

                        <label className="terms-checkbox">

                            <input
                                type="checkbox"
                                checked={termsAccepted}
                                onChange={(event) =>
                                    setTermsAccepted(
                                        event.target.checked
                                    )
                                }
                            />

                            <span>
                                I agree to the terms and conditions.
                            </span>

                        </label>


                        {/* ==========================
                            CONFIRM
                        =========================== */}

                       <button
                       className="confirm-button"
                        type="button"
                        disabled={!termsAccepted}
                        onClick={() => {
                            const reservationNumber =
                                `LL-${Date.now().toString().slice(-6)}`;

                            const updatedReservationData = {
                                ...reservationData,
                                reservationNumber
                            };

                            setReservationData(updatedReservationData);
                            submitForm(updatedReservationData);
                        }}

                    >
                        Confirm Reservation
                    </button>


                        {/* ==========================
                            EDIT
                        =========================== */}

                        <button
                            type="button"
                            className="edit-button"
                            onClick={() => setPage("guest")}
                        >
                            ← Edit Reservation
                        </button>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Confirmation;