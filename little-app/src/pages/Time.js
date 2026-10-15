function Time({
    reservationData,
    setReservationData,
    setPage
}) {

    const times = [
        "1:00 PM",
        "1:30 PM",
        "2:00 PM",
        "2:30 PM",
        "3:00 PM",
        "3:30 PM",
        "4:00 PM",
        "4:30 PM",
        "5:00 PM",
        "5:30 PM",
        "6:00 PM",
        "6:30 PM",
        "7:00 PM",
        "7:30 PM",
        "8:00 PM",
        "8:30 PM"
    ];

    const handleTimeClick = (time) => {

        if (reservationData.time === time) {

            setReservationData({
                ...reservationData,
                time: null
            });

        } else {

            setReservationData({
                ...reservationData,
                time: time
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
                        <div className="progress progress-step-3"></div>
                    </div>

                    <div className="reservation-card time-card">

                        <button
                            type="button"
                            className="back-button"
                            onClick={() => setPage("date")}
                            aria-label="Go back"
                        >
                            ‹
                        </button>

                        <h1>Select a time</h1>

                        <div className="time-options">

                            {times.map((time) => {

                                const isSelected =
                                    reservationData.time === time;

                                return (
                                    <button
                                        key={time}
                                        type="button"
                                        className={`time-option ${
                                            isSelected ? "selected" : ""
                                        }`}
                                        onClick={() =>
                                            handleTimeClick(time)
                                        }
                                    >
                                        {time}
                                    </button>
                                );

                            })}

                        </div>

                        <button
                            type="button"
                            className="next-button"
                            disabled={!reservationData.time}
                            onClick={() => setPage("guest")}
                        >
                            Next
                        </button>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Time;