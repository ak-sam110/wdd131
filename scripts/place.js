// script.js

// Example document last modified
document.getElementById("last-modified").textContent =
    `${new Date(document.lastModified).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;

// Weather values (static for this page)
const temperature = 10; // Celsius (°C)
const windSpeed = 5; // km/h

// Wind Chill Calculation for metric (°C, km/h):
// Formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
function calculateWindChill(tempC, windKmh) {
    return Math.round((13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)) * 10) / 10;
}

function updateWindChill() {
    const temp = temperature;
    const wind = windSpeed;
    let windChill = "N/A";
    // Only calculate if T <= 10°C and wind > 4.8 km/h
    if (temp <= 10 && wind > 4.8) {
        windChill = calculateWindChill(temp, wind);
    }
    document.getElementById("windchill").textContent = windChill;
}

updateWindChill();