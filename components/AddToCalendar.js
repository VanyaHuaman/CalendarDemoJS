function AddToCalendar() {
    console.log("Button clicked! Executing script...");
    if (typeof window !== "undefined") {
        const startTime = '05 October 2011 14:48 UTC'
        const endTime = '05 October 2023 16:48 UTC'
        const title = 'Test Title'
        const description = 'TestDescription'
        const eventLocation = '14841 Dallas Pkwy, Dallas, TX 75254'
        const email = 'test@test.com'
        Android.addToCalendar(startTime, endTime, title, description, eventLocation, email)
    }
}

export default AddToCalendar