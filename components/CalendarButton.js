'use client'
import AddToCalendar from "./AddToCalendar";
const CalendarButton = () => {
    return (
        <div>
            <button onClick={() => AddToCalendar()}>
                Add to Calendar
            </button>
        </div>
    )
}

export default CalendarButton