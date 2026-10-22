import { useState } from "react";
function DateTime({
    reservationData,
    setReservationData,
    setPage,
    updateTimes,
}) {

    const today = new Date();

    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

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

    const daysOfWeek = [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ];

    // Primer día del mes
    const firstDay = new Date(
        currentYear,
        currentMonth,
        1
    ).getDay();

    // Número de días del mes
    const daysInMonth = new Date(
        currentYear,
        currentMonth + 1,
        0
    ).getDate();

    // Cambiar al mes anterior
    const previousMonth = () => {

        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }

        setReservationData({
            ...reservationData,
            date: null
        });
    };

    // Cambiar al mes siguiente
    const nextMonth = () => {

        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }

        setReservationData({
            ...reservationData,
            date: null
        });
    };

    // Evitar navegar a meses anteriores al actual
    const isPreviousMonthDisabled =
        currentYear === today.getFullYear() &&
        currentMonth === today.getMonth();

    // Seleccionar / deseleccionar fecha
    const handleDateClick = (day) => {

        const selected = new Date(
            currentYear,
            currentMonth,
            day
        );

        // No permitir fechas pasadas
        if (selected < new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
        )) {
            return;
        }

        // Si vuelve a hacer click sobre la misma fecha,
        // se deselecciona
        if (
            reservationData.date &&
            reservationData.date.day === day &&
            reservationData.date.month === currentMonth &&
            reservationData.date.year === currentYear
        ) {
            setReservationData({
                ...reservationData,
                date: null
            });
        } else {
            const newReservationData = {
                ...reservationData,
                date: {
                    day,
                    month: currentMonth,
                    year: currentYear
                }
            };

            setReservationData(newReservationData);

            updateTimes(selected);
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
                        <div className="progress progress-step-2"></div>
                    </div>

                    <div className="reservation-card date-card">

                      <button
                            type="button"
                            className="back-button"
                            onClick={() => setPage("reservation")}
                            aria-label="Go back"
                            >
                                <i class="fa-solid fa-angle-left"></i>
                        </button>

                        <h1>Select the date</h1>

                        {/* CAMBIO DE MES */}
                        <div className="calendar-header">

                            <button
                                type="button"
                                onClick={previousMonth}
                                disabled={isPreviousMonthDisabled}
                                aria-label="Previous month"
                            >
                                ‹
                            </button>

                            <span>
                                {monthNames[currentMonth]}
                            </span>

                            <button
                                type="button"
                                onClick={nextMonth}
                                aria-label="Next month"
                            >
                                ›
                            </button>

                        </div>

                        {/* DÍAS DE LA SEMANA */}
                        <div className="weekdays">

                            {daysOfWeek.map((day) => (
                                <span key={day}>
                                    {day}
                                </span>
                            ))}

                        </div>

                        {/* CALENDARIO */}
                        <div className="calendar-days">

                            {/* Espacios antes del día 1 */}
                            {Array.from({
                                length: firstDay
                            }).map((_, index) => (
                                <span
                                    key={`empty-${index}`}
                                    className="empty-day"
                                ></span>
                            ))}

                            {/* Días */}
                            {Array.from({
                                length: daysInMonth
                            }).map((_, index) => {

                                const day = index + 1;

                                const date = new Date(
                                    currentYear,
                                    currentMonth,
                                    day
                                );

                                const todayDate = new Date(
                                    today.getFullYear(),
                                    today.getMonth(),
                                    today.getDate()
                                );

                                const isPast = date < todayDate;

                                const isSelected =
                                    reservationData.date &&
                                    reservationData.date.day === day &&
                                    reservationData.date.month === currentMonth &&
                                    reservationData.date.year === currentYear;

                                return (
                                    <button
                                        key={day}
                                        type="button"
                                        disabled={isPast}
                                        className={`
                                            calendar-day
                                            ${isSelected ? "selected" : ""}
                                        `}
                                        onClick={() =>
                                            handleDateClick(day)
                                        }
                                    >
                                        {day}
                                    </button>
                                );
                            })}

                        </div>

                        {/* NEXT */}
                        <button
                            type="button"
                            className="next-button"
                            disabled={!reservationData.date}
                            onClick={() => setPage("time")}
                        >
                            Next
                        </button>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default DateTime;