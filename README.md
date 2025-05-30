# ☀️ Weather App - README

![Weather App Preview](https://via.placeholder.com/800x500/1e1e1e/ffffff?text=Weather+App+Interface)

A responsive weather application built using **HTML**, **CSS**, and **Vanilla JavaScript** that fetches real-time weather data from the OpenWeatherMap API. Features a clean dark-themed UI with responsive design.

---

## ✨ Features

- **City Search**: Get weather information for any city worldwide
- **Real-time Data**: Display current temperature and weather conditions
- **Responsive Design**: Works seamlessly on mobile and desktop devices
- **Error Handling**: Shows clear error messages for invalid cities
- **Persistent UI**: Clean dark theme with purple accent

---

## 📁 Files Included

* `index1.html` - Main HTML structure with embedded CSS styling
* `API.js` - JavaScript logic for API interactions and DOM manipulation

---

## 💻 Technologies Used

* **HTML5** - Application structure and layout
* **CSS3** - Modern dark UI with responsive design
* **JavaScript (ES6+)** - API integration and dynamic content
* **OpenWeatherMap API** - Real-time weather data

---

## 🚀 Setup & Usage

1. **Get API Key**:
   - Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up)
   - Create your API key in the account dashboard

2. **Configure Application**:
   - Open `API.js`
   - Replace `${API_KEY}` with your actual API key:
   ```javascript
   // Replace this line:
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
   
   // With your actual API key:
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY_HERE`;
   ```

3. **Run the App**:
   - Open `index1.html` in any modern web browser
   - Enter a city name and click "Get Weather"

---
ssage
  function showerror() {
    // Display error UI
  }
});
```

## ⚠️ Error Handling

The app handles these cases:
- Empty city name input (ignores request)
- Invalid city names (shows "City not found" error)
- API connection failures

---

## 🌐 Browser Support

Supports all modern browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

> **Note**: You'll need to sign up for a free OpenWeatherMap API key to use this application. The free tier provides up to 60 calls per minute.
