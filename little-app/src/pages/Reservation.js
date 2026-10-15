function Reservation({
    reservationData,
    setReservationData,
    setPage
}) {

    const decreaseGuests = () => {
    if (reservationData.guests > 1) {
        setReservationData({
            ...reservationData,
            guests: reservationData.guests - 1
        });
      }
    };

    const increaseGuests = () => {
    if (reservationData.guests < 10) {
        setReservationData({
            ...reservationData,
            guests: reservationData.guests + 1
        });
      }
    };

    return (
        <main className="reservation-page">

            <section className="reservation-hero">

                <div className="reservation-overlay">

                    <img
                        src="/images/logo-white.png"
                        alt="Little Lemon"
                        className="reservation-logo"
                    />

                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>

                    <div className="reservation-card">

                        <h1>Number of guests</h1>

                        <div className="guest-counter">

                            <button
                                type="button"
                                onClick={decreaseGuests}
                                aria-label="Decrease number of guests"
                            >
                                −
                            </button>

                            <span>{reservationData.guests}</span>

                            <button
                                type="button"
                                onClick={increaseGuests}
                                aria-label="Increase number of guests"
                            >
                                +
                            </button>

                        </div>

                        <button
                            type="button"
                            className="next-button"
                            onClick={() => setPage("date")}
                        >
                            Next
                        </button>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Reservation;