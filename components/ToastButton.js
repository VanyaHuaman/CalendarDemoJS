'use client'
import AddToCalendar from "./AddToCalendar";
const CustomButton = () => {
    return (
        <div>
            <button onClick={() => AddToCalendar()}>
                Click Me
            </button>
        </div>
    )
}

export default CustomButton