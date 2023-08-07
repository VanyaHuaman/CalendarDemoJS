'use client'
import showToast from "./ShowToast";

const ToastButton = () => {
    return (
        <div>
            <button onClick={() => showToast()}>
                Show Toast
            </button>
        </div>
    )
}

export default ToastButton