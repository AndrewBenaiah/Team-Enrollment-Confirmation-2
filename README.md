# 🚗 REVOC - Vehicle Maintenance Tracker

A browser-based vehicle maintenance tracking app built with plain HTML, CSS, and JavaScript. No frameworks, no build tools, no backend — just open `index.html` and start tracking!

## ✨ Features

### 🔐 Authentication
- Create account / Sign in
- **Remember Me** - saves your credentials so you can log in again quickly
- Per-user data storage with localStorage

### 📊 Dashboard
- Overview stats: total vehicles, services, and total spent
- Recent services feed
- Quick access to your vehicles

### 🚗 Vehicle Management
- Add, edit, and delete vehicles
- Track name, registration no., make, model, year, fuel type, color, and image
- Vehicle grid with photos

### 🛠️ Services
- Log services: Full Service, Oil Change, Brake Service, Tire Rotation, and more
- Track date, odometer, cost, next service date, notes, and receipt photo
- Full service history

### 🧾 Bills
- Track bills with bill number, vehicle, date, amount, category, vendor, and receipt photo
- Statistics: total bills, total amount, this month's spending

### 🌐 Multi-Language Support
- English, Tamil (தமிழ்), Hindi (हिन्दी), Telugu (తెలుగు), Kannada (ಕನ್ನಡ)

## 🚀 Getting Started

1. Open `index.html` in any modern browser
2. **Create Account** to register (or use demo: `admin` / `admin123`)
3. Check **Remember me** to save your credentials
4. Add vehicles, log services, and track bills!

## 💾 Data Storage

All data is saved locally in your browser using `localStorage`. Data is stored per-user and persists between sessions. No internet connection required (except for the Google Fonts CDN).

## 🛠️ Tech Stack

- **HTML5** - Structure
- **CSS3** - Styling (custom properties, responsive design, dark theme)
- **Vanilla JavaScript** - All app logic
- **localStorage** - Data persistence

## 📁 Project Structure

```
vehicle-maintenance/
├── index.html    # App structure & UI
├── styles.css    # Styling
├── app.js        # Application logic
└── .gitignore    # Git ignore rules
```

## 📄 License

Free to use for personal and educational purposes.