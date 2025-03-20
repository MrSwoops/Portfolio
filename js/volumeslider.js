const video = document.getElementById("vid");
const volumeControl = document.getElementById("volumeControl");

function updateSlider() {
    let percentage = (volumeControl.value - volumeControl.min) / (volumeControl.max - volumeControl.min) * 100;
    volumeControl.style.setProperty("--progress", `${percentage}%`);
}
// Set volume when slider changes
volumeControl.addEventListener("input", function() {
    video.muted = false; // Unmute when volume is adjusted
    video.volume = this.value;
    let percentage = (volumeControl.value - volumeControl.min) / (volumeControl.max - volumeControl.min) * 100;
    volumeControl.style.setProperty("--progress", `${percentage}%`);
});