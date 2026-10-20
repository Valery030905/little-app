import { useState } from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Reservation from './pages/Reservation';
import DateTime from './pages/DateTime';
import Time from './pages/Time';
import GuestInformation from './pages/GuestInformation';
import Confirmation from "./pages/Confirmation";
import ReservationConfirmed from "./pages/ReservationConfirmed";

function App() {

    const [page, setPage] = useState('home');

    const [reservationData, setReservationData] = useState({
        guests: 2,
        date: null,
        time: null,
        fullName: "",
        phone: "",
        email: "",
        occasion: "",
        allergies: "",
        specialRequest: ""
    });

    return (
        <>
            <Header setPage={setPage} />

            {page === 'home' && (
                <Main />
            )}

            {page === 'reservation' && (
                <Reservation
                    reservationData={reservationData}
                    setReservationData={setReservationData}
                    setPage={setPage}
                />
            )}

            {page === 'date' && (
                <DateTime
                    reservationData={reservationData}
                    setReservationData={setReservationData}
                    setPage={setPage}
                />
            )}

            {page === 'time' && (
                <Time
                    reservationData={reservationData}
                    setReservationData={setReservationData}
                    setPage={setPage}
                />
            )}

            {page === 'guest' && (
                <GuestInformation
                    reservationData={reservationData}
                    setReservationData={setReservationData}
                    setPage={setPage}
                />
            )}

            {page === "confirmation" && (
                <Confirmation
                    reservationData={reservationData}
                    setPage={setPage}
                />
            )}

            {page === "confirmed" && (
                <ReservationConfirmed
                    reservationData={reservationData}
                    setPage={setPage}
                />
            )}

            <Footer />
        </>
    );
}

export default App;