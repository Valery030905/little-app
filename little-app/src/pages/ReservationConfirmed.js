function ReservationConfirmed({
    reservationData,
    setPage
}) {

    // Generar número de reserva
    const reservationNumber = reservationData.reservationNumber;

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
                        <div className="progress progress-step-6"></div>
                    </div>


                    {/* CONFIRMATION CARD */}

                    <div className="reservation-card confirmed-card">

                        <div className="confirmation-check">
                            ✓
                        </div>

                        <h1>
                            Reservation Confirmed!
                        </h1>

                        <p className="confirmation-message">
                            Your reservation has been successfully
                            confirmed.
                        </p>


                        {/* RESERVATION NUMBER */}

                        <div className="reservation-number">

                            <span>
                                Reservation Number
                            </span>

                            <strong>
                                #{reservationNumber}
                            </strong>

                        </div>


                        {/* RESERVATION SUMMARY */}

                        <div className="confirmed-summary">

                            <p>
                                <strong>Date:</strong>{" "}
                                {formatDate(reservationData.date)}
                            </p>

                            <p>
                                <strong>Time:</strong>{" "}
                                {reservationData.time}
                            </p>

                            <p>
                                <strong>Guests:</strong>{" "}
                                {reservationData.guests}
                            </p>

                        </div>


                        {/* BACK TO HOME */}

                        <button
                            type="button"
                            className="home-button"
                            onClick={() => setPage("home")}
                        >
                            Back to Home
                        </button>

                    </div>

                </div>

            </section>

        </main>
    );
}


/* ==========================================
   FORMAT DATE
========================================== */

function formatDate(date) {

    if (!date) {
        return "Not selected";
    }

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

    return `${monthNames[date.month]} ${date.day}, ${date.year}`;
}


export default ReservationConfirmed;