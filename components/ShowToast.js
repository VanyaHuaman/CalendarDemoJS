function CustomScript() {
    console.log("Button clicked! Executing show toast script...");
    // Your script logic here
    if (typeof window !== "undefined") {
        Android.showToast("test")
    }
}

export default CustomScript