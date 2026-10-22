
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
import { useState, useEffect } from 'react';
import { fetchAPI } from './api';

function App() {

    const [availableTimes, setAvailableTimes] = useState([]);

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

   
useEffect(() => {
    const today = new Date();
    const times = fetchAPI(today);

    setAvailableTimes(times);
}, []);


    
    const updateTimes = (selectedDate) => {
        const times = fetchAPI(selectedDate);
        setAvailableTimes(times);
    };


    return (
        <>
            <Header setPage={setPage} />

            {page === 'home' && (
                <Main setPage={setPage} />
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
                    updateTimes={updateTimes}
                />
            )}

            {page === 'time' && (
                <Time
                    reservationData={reservationData}
                    setReservationData={setReservationData}
                    setPage={setPage}
                    availableTimes={availableTimes}
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
                    setReservationData={setReservationData}
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