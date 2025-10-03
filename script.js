// Data dummy cuaca
const weatherData = {
  jakarta: {
    temperature: 30,
    condition: "Cerah Berawan",
    desc: "Cerah sebagian, angin sepoi-sepoi.",
    humidity: "65%",
    wind: "8 km/h",
    timezone: "Asia/Jakarta",
    video: "jakarta.mp4"
  },
  balikpapan: {
    temperature: 27,
    condition: "Hujan Ringan",
    desc: "Hujan tipis, jalan agak licin.",
    humidity: "80%",
    wind: "10 km/h",
    timezone: "Asia/Makassar",
    video: "balikpapan.mp4"
  },
  sulawesi: {
    temperature: 32,
    condition: "Panas Terik",
    desc: "Matahari terik, cuaca panas.",
    humidity: "55%",
    wind: "12 km/h",
    timezone: "Asia/Makassar",
    video: "sulawesi.mp4"
  },
  // Tambahan kota luar negeri
  "new york": {
    temperature: 12,
    condition: "Hujan Deras",
    desc: "Hujan deras sepanjang hari.",
    humidity: "85%",
    wind: "15 km/h",
    timezone: "America/New_York",
    video: "newyork.mp4"
  },
  paris: {
    temperature: 5,
    condition: "Bersalju",
    desc: "Salju turun perlahan, suhu dingin.",
    humidity: "90%",
    wind: "7 km/h",
    timezone: "Europe/Paris",
    video: "paris.mp4"
  }
};

function showWeather() {
  const city = document.getElementById("citySelect").value;
  const result = document.getElementById("result");
  const bgVideo = document.getElementById("bgVideo");
  const data = weatherData[city];

  result.innerHTML = `
    <h2>${capitalize(city)}</h2>
    <div class="time" id="time">${getTime(data.timezone)}</div>
    <div class="temp">${data.temperature}°C</div>
    <p class="condition">${data.condition}</p>
    <p class="desc">Deskripsi: ${data.desc}</p>
    <div class="extra">
      <span>Humidity: ${data.humidity}</span>
      <span>Angin: ${data.wind}</span>
    </div>
  `;

  // Update video
  bgVideo.src = "videos/" + data.video;

  // Console log
  console.log(`Cuaca di ${capitalize(city)}:`);
  console.log(`Suhu: ${data.temperature}°C`);
  console.log(`Kondisi: ${data.condition}`);
  console.log(`Deskripsi: ${data.desc}`);
  console.log(`Humidity: ${data.humidity}, Angin: ${data.wind}`);
}

// Ambil waktu sesuai timezone
function getTime(timezone) {
  return new Intl.DateTimeFormat("id-ID", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(new Date());
}

// Update jam tiap detik
setInterval(() => {
  const city = document.getElementById("citySelect").value;
  const data = weatherData[city];
  const timeEl = document.getElementById("time");
  if (timeEl && data) {
    timeEl.textContent = getTime(data.timezone);
  }
}, 1000);

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

window.onload = showWeather;

