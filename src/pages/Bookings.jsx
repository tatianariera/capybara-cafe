import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Bookings = () => {
  const [date, setDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [confirmation, setConfirmation] = useState("");

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("bookings");
    return saved ? JSON.parse(saved) : [];
  });

  const allSlots = [
    "10:00 - 10:30",
    "10:30 - 11:00",
    "11:00 - 11:30",
    "11:30 - 12:00",
    "12:30 - 13:00",
    "13:00 - 13:30",
    "13:30 - 14:00",
  ];

  const formatDate = (date) =>
    date.toISOString().split("T")[0];

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  const getAvailableSlots = () => {
    const day = formatDate(date);

    const booked = bookings
      .filter((r) => r.date === day)
      .map((r) => r.slot);

    return allSlots.filter((slot) => !booked.includes(slot));
  };

  const isDayFullyBooked = (date) => {
    const day = formatDate(date);

    const slots = bookings
      .filter((r) => r.date === day)
      .map((r) => r.slot);

    return allSlots.every((slot) => slots.includes(slot));
  };

  const isPartiallyBooked = (date) => {
    const day = formatDate(date);
    const slots = bookings.filter((r) => r.date === day);
    return slots.length > 0 && !isDayFullyBooked(date);
  };

  const availableSlots = getAvailableSlots();

  useEffect(() => {
    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );
  }, [bookings]);

  useEffect(() => {
    setSelectedSlot(null);
  }, [date]);

  const handleBooking = (slot) => {
    const day = formatDate(date);

    const exists = bookings.some(
      (r) => r.date === day && r.slot === slot
    );

    if (exists) return;

    setBookings([
      ...bookings,
      { date: day, slot },
    ]);

    setConfirmation(
      `booked ${slot} on ${date.toDateString()}`
    );

    setSelectedSlot(null);

    setTimeout(() => {
      setConfirmation("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-16">
      <h1 className="h1-brand">book a visit</h1>

      <div className="bg-brand-soft p-6 rounded-2xl shadow-lg">
        <Calendar
          onChange={setDate}
          value={date}
          tileDisabled={({ date }) => isWeekend(date)}
          tileClassName={({ date, view }) => {
            if (view === "month") {
              let base =
                "rounded-full hover:bg-brand-light transition";

              if (isDayFullyBooked(date)) {
                return base + " bg-red-500 text-white";
              }

              if (isPartiallyBooked(date)) {
                return base + " bg-brand-muted text-white";
              }

              return base;
            }
          }}
        />
      </div>

      <p className="mt-6 text-text-body">
        selected date: {date.toDateString()}
      </p>

      {confirmation && (
        <div className="mt-4 bg-green-100 text-green-700 px-5 py-3 rounded-xl shadow-sm">
          {confirmation}
        </div>
      )}

      <div className="mt-6 flex gap-4 flex-wrap justify-center mb-5">
        {availableSlots.length === 0 ? (
          <p className="text-red-500 font-medium">
            no slots available
          </p>
        ) : (
          availableSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`text-white px-5 py-2 rounded-xl transition duration-300 hover:scale-105
                ${
                  selectedSlot === slot
                    ? "bg-brand-strong ring-2 ring-pink-300"
                    : "bg-brand-muted"
                }`}
            >
              {slot}
            </button>
          ))
        )}
      </div>

      <div className="flex gap-2">
        {selectedSlot && (
          <button
            onClick={() => handleBooking(selectedSlot)}
            className="btn-brand__light"
          >
            book {selectedSlot}
          </button>
        )}

        <button
          onClick={() => setBookings([])}
          className="btn-brand"
        >
          reset booking
        </button>
      </div>

      <p className="font-semibold text-text-muted max-w-2xl mx-auto mt-10 text-sm md:text-base text-center">
        note that a drink purchase is required in addition to the entry fee - please don't forget to be gentle with our capybaras
      </p>
    </div>
  );
};

export default Bookings;