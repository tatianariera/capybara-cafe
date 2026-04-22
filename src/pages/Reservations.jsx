import { useEffect, useState } from "react";
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css";

const Reservations = () => {

  const [date, setDate] = useState(new Date());

  const [reservations, setReservations] = useState(() => {
    const saved = localStorage.getItem("reservations");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  const formatDate = (date) => date.toISOString().split("T")[0];

  const isDayFullyBooked = (date) => {
    const day = formatDate(date);

    const slots = reservations
      .filter(r => r.date === day)
      .map(r => r.slot);
    
    return allSlots.every(slot => slots.includes(slot));
  };

  const isPartiallyBooked = (date) => {
    const day = formatDate(date);
    const slots = reservations.filter(r => r.date === day);
    return slots.length === 1;
  }

  const getAvailableSlots = () => {
    const day =  formatDate(date);

    const reserved = reservations
      .filter(r => r.date === day)
      .map(r => r.slot);

    const allSlots = ["10:00 - 10:30", "10:30 - 11: 00", "11:00 - 11:30", "11:30 - 12:00", "12:30 - 13:00", "13:00 - 13:30", "13:30 - 14:00"];
    return allSlots.filter(slot => !reserved.includes(slot));
  }

  const handleReserve = (slot) => {
    const day = formatDate(date);

    const exists = reservations.some(
      r => r.date === day && r.slot === slot
    );

    if (exists) return;

    setReservations([
      ...reservations,
      {date: day, slot}
    ]);
  };

  const availableSlots = getAvailableSlots();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-16">
      <h1 className="h1-brand">make a reservation</h1>
      
      <div className="bg-brand-soft p-6 rounded-2xl shadow-lg">
        <Calendar 
          onChange={setDate}
          value={date}
          titleDisabled={({date}) => isWeekend(date)}
          titleClassName={({date, view}) => {
            if (view === "month") {
              let base = "rounded-full hover:bg-brand-light transition";

              if (isDayFullyBooked(date)) {
                return base + " bg-red-500 text-white";
              }

              if (isPartiallyBooked(date)){
                return base + " bg-brand-muted text-white";
              }

              return base;
            }
          }}
        />
      </div>

      <p className="mt-6 text-text-body">
        selected time: {date.toDateString()}
      </p>

      <div className="mt-6 flex gap-4 flex-wrap justify-center mb-5">
        {availableSlots.length === 0 ? (
          <p className="text-red-500 font-medium">
            no slots available
          </p>
        ) : (
          availableSlots.map(slot => (
            <button
              key={slot}
              onClick={() => handleReserve(slot)}
              className="bg-brad text-white px-5 py-2 rounded-xl bg-brand-muted transition duration-300 hover:scale-105"
            >
              {slot}
            </button>
          ))
        )}
      </div>

      <button
        onClick={() => setReservations([])}
        className="btn-brand"
      >
        reset reservation
      </button>  

      <p className="font-semibold text-text-muted max-w-2xl mx-auto mt-10 text-sm md:text-base text-center">
        note that a drink purchase is required id addition to the entry fee - please don't forget to be gentle with our capybaras
      </p>

    </div>
  );
};

export default Reservations;
