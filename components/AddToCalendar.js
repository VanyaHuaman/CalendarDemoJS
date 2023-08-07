/**
 * In the real implementation these values would be passed to the function.
 * @constructor
 */

function AddToCalendar() {
    console.log("Button clicked! Executing add to calendar script...");
    if (typeof window !== "undefined") {
        const startTime = '2023-12-03T10:15:30'
        const endTime = '2023-12-03T10:17:30'
        const title = 'Test Title'
        const description = 'TestDescription'
        const eventLocation = '14841 Dallas Pkwy, Dallas, TX 75254'
        const email = 'test@test.com'
        Android.addToCalendar(startTime, endTime, title, description, eventLocation, email)
    }
}

export default AddToCalendar