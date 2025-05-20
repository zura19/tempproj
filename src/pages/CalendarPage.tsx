import { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const hours = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

interface IBookedDays {
  date: string;
  hour: string;
}

export default function CalendarPage() {
  const [bookedDays, setBookedDays] = useState<IBookedDays[]>([]);
  const [value, onChange] = useState<Value>(new Date());
  const [activeHour, setActiveHour] = useState<string | null>(null);

  const selectedDate = new Date(value as Date).toDateString();

  console.log("bookedDays", bookedDays);

  function handleBook() {
    const bookedDay = new Date(value as Date).toDateString();

    setBookedDays((prev) => [
      ...prev,
      { date: bookedDay, hour: activeHour as string },
    ]);
    setActiveHour(null);
  }

  function handleHourClick(hour: string) {
    setActiveHour(hour);
  }

  function hourClass(hour: string) {
    if (activeHour === hour) {
      return "bg-amber-400";
    }
    if (
      bookedDays.some((day) => day.date === selectedDate && day.hour === hour)
    ) {
      return "bg-red-400 opacity-70 pointer-events-none cursor-not-allowed";
    }
    return "bg-gray-400 hover:bg-gray-500 cursor-pointer";
  }

  return (
    <div className="max-w-[1200px] mx-auto py-4 space-y-4">
      <div className="grid grid-cols-2 gap-4 items-center">
        <Calendar className={"w-full"} onChange={onChange} value={value} />
        <div className="grid grid-cols-6 gap-2 mt-4 h-full">
          {hours.map((hour) => (
            <div
              className={`cursor-pointer  flex items-center justify-center rounded-md p-2  ${hourClass(
                hour
              )} transition-all duration-200`}
              key={hour}
              onClick={() => handleHourClick(hour)}
            >
              <p>{hour}</p>
            </div>
          ))}
        </div>
      </div>
      {
        <p>
          selected Day : {selectedDate} {activeHour}
        </p>
      }
      <button
        disabled={!activeHour}
        className="bg-amber-300 w-full rounded-md p-2 cursor-pointer hover:bg-amber-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleBook}
      >
        add to booked days
      </button>
    </div>
  );
}
