import { useState } from "react";

function GuestInformation({
    reservationData,
    setReservationData,
    setPage
}) {

    const [occasionOpen, setOccasionOpen] = useState(false);
    const [allergiesOpen, setAllergiesOpen] = useState(false);
    const [specialRequestOpen, setSpecialRequestOpen] = useState(false);

    const occasionOptions = [
        "No special occasion",
        "Engagement",
        "Business Meal",
        "Graduation",
        "Birthday",
        "Anniversary",
        "Date night"
    ];

    const allergyOptions = [
      "No allergies",
      "Peanuts",
      "Tree nuts",
      "Dairy",
      "Gluten",
      "Shellfish",
      "Other"
  ];

    const specialRequestOptions = [
        "None",
        "Window table",
        "Quiet table",
        "High chair",
        "Accessibility assistance"
    ];

    // Validar Full Name

    const isValidName = (name) => {
        return /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]{2,}$/.test(name.trim());
    };

    // Validar Phone
    const isValidPhone = (phone) => {
        return /^[0-9+\s()-]{7,20}$/.test(phone.trim());
    };

    // Validar email
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    };

    // Convertir la fecha guardada en un formato como:
    // 09 Oct 2026
    const formatDate = () => {

        if (!reservationData.date) {
            return "Select a date";
        }

        const { day, month, year } = reservationData.date;

        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];

        return `${String(day).padStart(2, "0")} ${monthNames[month]} ${year}`;
    };

    // Actualizar información del formulario
    const handleChange = (field, value) => {

        setReservationData({
            ...reservationData,
            [field]: value
        });
    };

    // Seleccionar ocasión
    const handleOccasionSelect = (occasion) => {

        if (reservationData.occasion === occasion) {
            handleChange("occasion", "");
        } else {
            handleChange("occasion", occasion);
        }

        setOccasionOpen(false);
    };

    // Seleccionar alergias
    const handleAllergySelect = (allergy) => {

        if (reservationData.allergies === allergy) {
            handleChange("allergies", "");
        } else {
            handleChange("allergies", allergy);
        }

        setAllergiesOpen(false);
    };

    // Seleccionar solicitud especial
    const handleSpecialRequestSelect = (request) => {

        if (reservationData.specialRequest === request) {
            handleChange("specialRequest", "");
        } else {
            handleChange("specialRequest", request);
        }

        setSpecialRequestOpen(false);
    };

    // Verificar si los campos obligatorios están completos
    const isFormValid =
        isValidName(reservationData.fullName || "") &&
        isValidPhone(reservationData.phone || "") &&
        isValidEmail(reservationData.email || "");

    return (
        <main className="reservation-page">

            <section className="reservation-hero">

                <div className="reservation-overlay">

                    {/* Logo */}
                    <img
                        src="/images/logo-white.png"
                        alt="Little Lemon"
                        className="reservation-logo"
                    />

                    {/* Barra de progreso */}
                    <div className="progress-bar">
                        <div className="progress progress-step-4"></div>
                    </div>

                    {/* Card */}
                    <div className="reservation-card guest-card">

                        {/* Botón volver */}
                        <button
                            type="button"
                            className="back-button"
                            onClick={() => setPage("time")}
                            aria-label="Go back"
                        >
                            <i class="fa-solid fa-angle-left"></i>
                        </button>

                        <h1>Reservation details</h1>


                        {/* =========================
                            RESUMEN DE RESERVA
                        ========================== */}

                        <div className="reservation-summary">

                            <div className="summary-item">
                                <i class="fa-solid fa-user-group"></i>

                                <span>
                                    {reservationData.guests} guests
                                </span>
                            </div>


                            <div className="summary-item">
                                <i class="fa-solid fa-calendar"></i>

                                <span>
                                    {formatDate()}
                                </span>
                            </div>


                            <div className="summary-item">
                                <i class="fa-solid fa-clock"></i>

                                <span>
                                    {reservationData.time || "Select a time"}
                                </span>
                            </div>

                        </div>


                        {/* =========================
                            FORMULARIO
                        ========================== */}

                        <div className="guest-form">


                            {/* =====================
                                COLUMNA IZQUIERDA
                            ====================== */}

                            <div className="guest-left">


                                {/* FULL NAME */}
                                <div className="guest-field">

                                    <label htmlFor="fullName">
                                        Full Name
                                    </label>

                                    <input
                                        id="fullName"
                                        type="text"
                                        value={
                                            reservationData.fullName || ""
                                        }
                                        onChange={(event) =>
                                            handleChange(
                                                "fullName",
                                                event.target.value
                                            )
                                        }
                                    />

                                    {reservationData.fullName &&
                                        !isValidName(reservationData.fullName) && (
                                            <small className="field-error">
                                                Please enter a valid name.
                                            </small>
                                        )}

                                </div>


                                {/* PHONE */}
                                <div className="guest-field">

                                    <label htmlFor="phone">
                                        Phone Number
                                    </label>

                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="+57 300 000 0000"
                                        value={
                                            reservationData.phone || ""
                                        }
                                        onChange={(event) =>
                                            handleChange(
                                                "phone",
                                                event.target.value
                                            )
                                        }
                                    />

                                    {reservationData.phone &&
                                        !isValidPhone(reservationData.phone) && (
                                            <small className="field-error">
                                                Please enter a valid phone number.
                                            </small>
                                        )}

                                </div>


                                {/* EMAIL */}
                                <div className="guest-field">

                                    <label htmlFor="email">
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        value={
                                            reservationData.email || ""
                                        }
                                        onChange={(event) =>
                                            handleChange(
                                                "email",
                                                event.target.value
                                            )
                                        }
                                    />

                                    {reservationData.email &&
                                        !isValidEmail(reservationData.email) && (
                                            <small className="field-error">
                                                Please enter a valid email address.
                                            </small>
                                        )}

                                </div>

                            </div>


                            {/* =====================
                                COLUMNA DERECHA
                            ====================== */}

                            <div className="guest-right">


                                {/* =====================
                                    OCCASION
                                ====================== */}

                                <div className="guest-field custom-select">

                                    <label>
                                        Occasion
                                    </label>

                                    <button
                                        type="button"
                                        className="custom-select-button"
                                        onClick={() => {

                                            setOccasionOpen(
                                                !occasionOpen
                                            );

                                            setSpecialRequestOpen(false);
                                        }}
                                    >

                                        <span>
                                            {reservationData.occasion ||
                                                "Occasion"}
                                        </span>

                                        <span
                                            className={
                                                occasionOpen
                                                    ? "arrow rotated"
                                                    : "arrow"
                                            }
                                        >
                                            ⌃
                                        </span>

                                    </button>


                                    {occasionOpen && (

                                        <div className="custom-select-options">

                                            {occasionOptions.map(
                                                (occasion) => {

                                                    const isSelected =
                                                        reservationData.occasion ===
                                                        occasion;

                                                    return (

                                                        <button
                                                            key={occasion}
                                                            type="button"
                                                            className={
                                                                `option-chip ${
                                                                    isSelected
                                                                        ? "selected"
                                                                        : ""
                                                                }`
                                                            }
                                                            onClick={() =>
                                                                handleOccasionSelect(
                                                                    occasion
                                                                )
                                                            }
                                                        >
                                                            {occasion}
                                                        </button>

                                                    );
                                                }
                                            )}

                                        </div>
                                    )}

                                </div>
                                {/* =====================
                                    ALLERGIES
                                ====================== */}

                                <div className="guest-field custom-select">

                                  <label>
                                      Allergies
                                  </label>

                                  <button
                                      type="button"
                                      className="custom-select-button"
                                      onClick={() => {
                                          setAllergiesOpen(!allergiesOpen);
                                          setOccasionOpen(false);
                                          setSpecialRequestOpen(false);
                                      }}
                                  >

                                      <span>
                                          {reservationData.allergies || "Allergies"}
                                      </span>

                                      <span
                                          className={
                                              allergiesOpen
                                                  ? "arrow rotated"
                                                  : "arrow"
                                          }
                                      >
                                          ⌄
                                      </span>

                                  </button>

                                  {allergiesOpen && (

                                      <div className="custom-select-options">

                                          {allergyOptions.map((allergy) => {

                                              const isSelected =
                                                  reservationData.allergies === allergy;

                                              return (

                                                  <button
                                                      key={allergy}
                                                      type="button"
                                                      className={
                                                          `option-chip ${
                                                              isSelected
                                                                  ? "selected"
                                                                  : ""
                                                          }`
                                                      }
                                                      onClick={() =>
                                                          handleAllergySelect(allergy)
                                                      }
                                                  >
                                                      {allergy}
                                                  </button>

                                              );
                                          })}

                                      </div>
                                  )}

                                </div>

                                {/* =====================
                                    SPECIAL REQUEST
                                ====================== */}

                                <div className="guest-field custom-select">

                                    <label>
                                        Special requests (Optional)
                                    </label>

                                    <button
                                        type="button"
                                        className="custom-select-button"
                                        onClick={() => {

                                            setSpecialRequestOpen(
                                                !specialRequestOpen
                                            );

                                            setOccasionOpen(false);
                                        }}
                                    >

                                        <span>
                                            {reservationData.specialRequest ||
                                                "Requests"}
                                        </span>

                                        <span
                                            className={
                                                specialRequestOpen
                                                    ? "arrow rotated"
                                                    : "arrow"
                                            }
                                        >
                                            ⌄
                                        </span>

                                    </button>


                                    {specialRequestOpen && (

                                        <div className="custom-select-options">

                                            {specialRequestOptions.map(
                                                (request) => {

                                                    const isSelected =
                                                        reservationData.specialRequest ===
                                                        request;

                                                    return (

                                                        <button
                                                            key={request}
                                                            type="button"
                                                            className={
                                                                `option-chip ${
                                                                    isSelected
                                                                        ? "selected"
                                                                        : ""
                                                                }`
                                                            }
                                                            onClick={() =>
                                                                handleSpecialRequestSelect(
                                                                    request
                                                                )
                                                            }
                                                        >
                                                            {request}
                                                        </button>

                                                    );
                                                }
                                            )}

                                        </div>
                                    )}

                                </div>

                            </div>

                        </div>


                        {/* =========================
                            NEXT
                        ========================== */}

                        <button
                            type="button"
                            className="next-button"
                            disabled={!isFormValid}
                            onClick={() => setPage("confirmation")}
                        >
                            Next
                        </button>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default GuestInformation;