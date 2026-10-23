"use strict";

/* ============================================================
   REVOC - Vehicle Maintenance App (Made for India)
   Languages: English, Tamil, Hindi, Telugu, Kannada
   ============================================================ */

const LANGUAGES = [
    { code: "en", label: "English" },
    { code: "ta", label: "தமிழ் (Tamil)" },
    { code: "hi", label: "हिन्दी (Hindi)" },
    { code: "te", label: "తెలుగు (Telugu)" },
    { code: "kn", label: "ಕನ್ನಡ (Kannada)" }
];

/* ------------------- I18N DICTIONARIES ------------------- */

const I18N = {
    en: {
        tagline: "Vehicle Maintenance Tracker",
        loginTitle: "Welcome Back",
        loginTitleSignup: "Create Account",
        username: "Username",
        password: "Password",
        signIn: "Sign In",
        newHere: "New here?",
        createAccount: "Create Account",
        haveAccount: "Already have an account?",
        signInLink: "Sign In",
        invalidCreds: "Invalid username or password",
        userExists: "Username already exists",
        emptyFields: "Please enter username and password",
        logout: "Logout",
        rememberMe: "Remember me",
        forgotPassword: "Forgot password?",
        dashboard: "Dashboard",
        vehicles: "Vehicles",
        services: "Services",
        bills: "Bills",
        addBill: "Add Bill",
        editBill: "Edit Bill",
        billNumber: "Bill No.",
        amount: "Amount (INR)",
        billCategory: "Category",
        vendor: "Vendor / Garage",
        billImage: "Bill / Receipt Photo",
        billStatsTotal: "Total Bills",
        billStatsThisMonth: "This Month",
        noBills: "No bills recorded yet. Click Add Bill to start.",
        confirmDeleteBill: "Delete this bill record?",
        recentBills: "Recent Bills",
        totalBillsVal: "Total Bills",
        totalBillSpent: "Total Bill Amount",
        recentServices: "Recent Services",
        yourVehicles: "Your Vehicles",
        addVehicle: "Add Vehicle",
        editVehicle: "Edit Vehicle",
        addService: "Add Service",
        editService: "Edit Service",
        vehicleName: "Vehicle Name",
        regNumber: "Registration No.",
        make: "Make", model: "Model", year: "Year", fuelType: "Fuel Type",
        color: "Color", petrol: "Petrol", diesel: "Diesel", cng: "CNG",
        electric: "Electric", vehicleImage: "Vehicle Image",
        addImage: "Add Image", removeImage: "Remove", cancel: "Cancel",
        save: "Save", selectVehicle: "Select Vehicle",
        serviceType: "Service Type", date: "Date",
        odometer: "Odometer (km)", cost: "Cost (INR)",
        nextServiceDate: "Next Service Date", note: "Note",
        serviceImage: "Receipt / Photo", fullService: "Full Service",
        oilChange: "Oil Change", brakeService: "Brake Service",
        tireRotation: "Tire Rotation", wheelAlignment: "Wheel Alignment",
        batteryService: "Battery Service", acService: "AC Service",
        wash: "Washing and Detailing", insurance: "Insurance", other: "Other",
        edit: "Edit", delete: "Delete",
        noVehicles: "No vehicles yet. Add your first vehicle!",
        noServices: "No services recorded yet. Click Add Service to start.",
        noServicesRecent: "No services recorded yet.",
        noVehiclesDash: "No vehicles yet. Add one from the Vehicles tab.",
        totalVehicles: "Total Vehicles",
        totalServices: "Total Services",
        totalSpent: "Total Spent",
        confirmDeleteVehicle: "Delete this vehicle and all its services?",
        confirmDeleteService: "Delete this service record?",
        validFields: "Please fill in required fields",
        imageTooLarge: "Image is too large. Maximum 2 MB.",
        invalidImage: "Please choose a valid image file.",
        km: "km", today: "Today", overdue: "Overdue", upcoming: "Upcoming",
        noVehiclesToService: "Please add a vehicle first."
    },

    ta: {
        tagline: "வாகன பராமரிப்பு கண்காணிப்பாளர்",
        loginTitle: "மீண்டும் வரவேற்கிறோம்",
        loginTitleSignup: "கணக்கு உருவாக்கு",
        username: "பயனர் பெயர்", password: "கடவுச்சொல்",
        signIn: "உள்நுழைக", newHere: "புதியவரா?",
        createAccount: "கணக்கை உருவாக்கு",
        haveAccount: "ஏற்கனவே கணக்கு உள்ளதா?", signInLink: "உள்நுழைக",
        invalidCreds: "தவறான பயனர் பெயர் அல்லது கடவுச்சொல்",
        userExists: "பயனர் பெயர் ஏற்கனவே உள்ளது",
        emptyFields: "பயனர் பெயர் மற்றும் கடவுச்சொல்லை உள்ளிடவும்",
        logout: "வெளியேறு", dashboard: "டாஷ்போர்டு",
        vehicles: "வாகனங்கள்", services: "சேவைகள்",
        recentServices: "சமீபத்திய சேவைகள்", yourVehicles: "உங்கள் வாகனங்கள்",
        addVehicle: "வாகனம் சேர்", editVehicle: "வாகனத்தை திருத்து",
        addService: "சேவை சேர்", editService: "சேவையை திருத்து",
        vehicleName: "வாகன பெயர்", regNumber: "பதிவு எண்",
        make: "தயாரிப்பு", model: "மாடல்", year: "ஆண்டு",
        fuelType: "எரிபொருள் வகை", color: "நிறம்",
        petrol: "பெட்ரோல்", diesel: "டீசல்", cng: "சிஎன்ஜி",
        electric: "மின்சாரம்", vehicleImage: "வாகன படம்",
        addImage: "படம் சேர்", removeImage: "நீக்கு", cancel: "ரத்து",
        save: "சேமி", selectVehicle: "வாகனத்தை தேர்ந்தெடுக்கவும்",
        serviceType: "சேவை வகை", date: "தேதி",
        odometer: "ஓடோமீட்டர் (கிமீ)", cost: "செலவு (₹)",
        nextServiceDate: "அடுத்த சேவை தேதி", note: "குறிப்பு",
        serviceImage: "ரசீது / புகைப்படம்", fullService: "முழு சேவை",
        oilChange: "எண்ணெய் மாற்றம்", brakeService: "பிரேக் சேவை",
        tireRotation: "டயர் சுழற்சி", wheelAlignment: "சக்கர சீரமைப்பு",
        batteryService: "பேட்டரி சேவை", acService: "ஏசி சேவை",
        wash: "சலவை மற்றும் அலங்காரம்", insurance: "காப்பீடு",
        other: "பிற", edit: "திருத்து", delete: "நீக்கு",
        noVehicles: "இன்னும் வாகனங்கள் இல்லை. முதல் வாகனத்தை சேர்க்கவும்!",
        noServices: "இன்னும் சேவைகள் பதிவு செய்யப்படவில்லை.",
        noServicesRecent: "சமீபத்திய சேவைகள் இல்லை.",
        noVehiclesDash: "வாகனங்கள் இல்லை. வாகனத் தாவலில் சேர்க்கவும்.",
        totalVehicles: "மொத்த வாகனங்கள்",
        totalServices: "மொத்த சேவைகள்",
        totalSpent: "மொத்த செலவு",
        confirmDeleteVehicle: "இந்த வாகனத்தையும் அதன் சேவைகளையும் நீக்கவா?",
        rememberMe: "என்னை நினைவில் வை",
        bills: "பில்கள்",
        addBill: "பில் சேர்",
        editBill: "பில் திருத்து",
        billNumber: "பில் எண்",
        amount: "தொகை (₹)",
        billCategory: "வகை",
        vendor: "விற்பனையாளர் / கேரேஜ்",
        billImage: "பில் / ரசீது படம்",
        noBills: "இன்னும் பில்கள் இல்லை. பில் சேர்க்கவும்.",
        confirmDeleteBill: "இந்த பில் பதிவை நீக்கவா?",
        confirmDeleteService: "இந்த சேவை பதிவை நீக்கவா?",
        validFields: "தேவையான புலங்களை நிரப்பவும்",
        imageTooLarge: "படம் மிக பெரியது. அதிகபட்சம் 2MB.",
        invalidImage: "சரியான படத்தை தேர்ந்தெடுக்கவும்.",
        km: "கிமீ", today: "இன்று", overdue: "தாமதம்", upcoming: "வரவிருக்கும்",
        noVehiclesSelected: "முதலில் வாகனத்தை சேர்க்கவும்."
    },

    hi: {
        tagline: "वाहन रखरखाव ट्रैकर",
        loginTitle: "वापसी पर स्वागत है",
        loginTitleSignup: "खाता बनाएं",
        username: "उपयोगकर्ता नाम", password: "पासवर्ड",
        signIn: "साइन इन", newHere: "नए हैं?",
        createAccount: "खाता बनाएं", haveAccount: "पहले से खाता है?",
        signInLink: "साइन इन",
        invalidCreds: "गलत उपयोगकर्ता नाम या पासवर्ड",
        userExists: "उपयोगकर्ता नाम पहले से मौजूद है",
        emptyFields: "उपयोगकर्ता नाम और पासवर्ड दर्ज करें",
        logout: "लॉग आउट", dashboard: "डैशबोर्ड",
        vehicles: "वाहन", services: "सेवाएं",
        recentServices: "हाल की सेवाएं", yourVehicles: "आपके वाहन",
        addVehicle: "वाहन जोड़ें", editVehicle: "वाहन संपादित करें",
        addService: "सेवा जोड़ें", editService: "सेवा संपादित करें",
        vehicleName: "वाहन का नाम", regNumber: "पंजीकरण सं.",
        make: "निर्माता", model: "मॉडल", year: "वर्ष",
        fuelType: "ईंधन प्रकार", color: "रंग",
        petrol: "पेट्रोल", diesel: "डीज़ल", cng: "सीएनजी",
        electric: "इलेक्ट्रिक", vehicleImage: "वाहन की छवि",
        addImage: "छवि जोड़ें", removeImage: "हटाएं", cancel: "रद्द करें",
        save: "सहेजें", selectVehicle: "वाहन चुनें",
        serviceType: "सेवा प्रकार", date: "दिनांक",
        odometer: "ओडोमीटर (किमी)", cost: "लागत (₹)",
        nextServiceDate: "अगली सेवा तिथि", note: "नोट",
        serviceImage: "रसीद / फोटो", fullService: "फुल सर्विस",
        oilChange: "तेल बदलना", brakeService: "ब्रेक सर्विस",
        tireRotation: "टायर घुमाव", wheelAlignment: "पहिया संरेखण",
        batteryService: "बैटरी सर्विस", acService: "एसी सर्विस",
        wash: "धुलाई और विवरण", insurance: "बीमा", other: "अन्य",
        edit: "संपादित", delete: "हटाएं",
        noVehicles: "अभी कोई वाहन नहीं। अपना पहला वाहन जोड़ें!",
        noServices: "अभी कोई सेवा दर्ज नहीं है। सेवा जोड़ें।",
        noServicesRecent: "अभी कोई सेवा नहीं।",
        noVehiclesDash: "अभी कोई वाहन नहीं। वाहन टैब से जोड़ें।",
        totalVehicles: "कुल वाहन", totalServices: "कुल सेवाएं",
        totalSpent: "कुल खर्च",
        confirmDeleteVehicle: "यह वाहन और इसकी सभी सेवाएं हटाएं?",
        rememberMe: "मुझे याद रखें",
        bills: "बिल",
        addBill: "बिल जोड़ें",
        editBill: "बिल संपादित करें",
        billNumber: "बिल नं.",
        amount: "राशि (₹)",
        billCategory: "श्रेणी",
        vendor: "विक्रेता / गैरेज",
        billImage: "बिल / रसीद फोटो",
        noBills: "अभी कोई बिल नहीं। बिल जोड़ें।",
        confirmDeleteBill: "यह बिल रिकॉर्ड हटाएं?",
        confirmDeleteService: "यह सेवा रिकॉर्ड हटाएं?",
        validFields: "अनिवार्य फ़ील्ड भरें",
        imageTooLarge: "छवि बहुत बड़ी है। अधिकतम 2MB।",
        invalidImage: "मान्य छवि चुनें।",
        km: "किमी", today: "आज", overdue: "अतिदेय", upcoming: "आगामी"
    },

    te: {
        tagline: "వాహన నిర్వహణ ట్రాకర్",
        loginTitle: "తిరిగి స్వాగతం",
        loginTitleSignup: "ఖాతా సృష్టించండి",
        username: "వినియోగదారు పేరు", password: "పాస్వర్డ్",
        signIn: "సైన్ ఇన్", newHere: "కొత్తవారా?",
        createAccount: "ఖాతా సృష్టించండి",
        haveAccount: "ఇప్పటికే ఖాతా ఉందా?", signInLink: "సైన్ ఇన్",
        invalidCreds: "తప్పు యూజర్ పేరు లేదా పాస్వర్డ్",
        userExists: "యూజర్ పేరు ఇప్పటికే ఉంది",
        emptyFields: "యూజర్ పేరు మరియు పాస్వర్డ్ నమోదు చేయండి",
        logout: "లాగ్అవుట్", dashboard: "డాష్‌బోర్డ్",
        vehicles: "వాహనాలు", services: "సేవలు",
        recentServices: "ఇటీవలి సేవలు", yourVehicles: "మీ వాహనాలు",
        addVehicle: "వాహనం జోడించండి", editVehicle: "వాహనం సవరించండి",
        addService: "సేవ జోడించండి", editService: "సేవ సవరించండి",
        vehicleName: "వాహనం పేరు", regNumber: "రిజిస్ట్రేషన్ నం.",
        make: "తయారీదారు", model: "మోడల్", year: "సంవత్సరం",
        fuelType: "ఇంధన రకం", color: "రంగు",
        petrol: "పెట్రోల్", diesel: "డీజిల్", cng: "సిఎన్జి",
        electric: "ఎలక్ట్రిక్", vehicleImage: "వాహనం చిత్రం",
        addImage: "చిత్రం జోడించు", removeImage: "తీసివేయి",
        cancel: "రద్దు", save: "సేవ్",
        selectVehicle: "వాహనాన్ని ఎంచుకోండి",
        serviceType: "సేవా రకం", date: "తేదీ",
        odometer: "ఓడోమీటర్ (కి.మీ)", cost: "ఖర్చు (₹)",
        nextServiceDate: "తదుపరి సేవా తేదీ", note: "గమనిక",
        serviceImage: "రసీదు / ఫోటో", fullService: "పూర్తి సేవ",
        oilChange: "ఆయిల్ మార్పు", brakeService: "బ్రేక్ సేవ",
        tireRotation: "టైర్ భ్రమణం", wheelAlignment: "చక్ర అమరిక",
        batteryService: "బ్యాటరీ సేవ", acService: "ఎసి సేవ",
        wash: "వాషింగ్ & డీటెయిలింగ్", insurance: "భీమా", other: "ఇతర",
        edit: "సవరించు", delete: "తొలగించు",
        noVehicles: "ఎటువంటి వాహనాలు లేవు. మొదటి వాహనాన్ని జోడించండి!",
        noServices: "ఎటువంటి సేవలు నమోదు కాలేదు.",
        noServicesRecent: "ఎటువంటి సేవలు లేవు.",
        noVehiclesDash: "వాహనాలు లేవు. వాహన టాబ్ నుండి జోడించండి.",
        totalVehicles: "మొత్తం వాహనాలు",
        totalServices: "మొత్తం సేవలు",
        totalSpent: "మొత్తం ఖర్చు",
        confirmDeleteVehicle: "ఈ వాహనం మరియు దాని సేవలన్నీ తొలగించాలా?",
        rememberMe: "నన్ను గుర్తుంచుకో",
        bills: "బిల్లులు",
        addBill: "బిల్లు జోడించు",
        editBill: "బిల్లు సవరించు",
        billNumber: "బిల్లు నం.",
        amount: "మొత్తం (₹)",
        billCategory: "వర్గం",
        vendor: "విక్రేత / గ్యారేజీ",
        billImage: "బిల్లు / రసీదు",
        noBills: "ఇంకా బిల్లులు లేవు. బిల్లు జోడించండి.",
        confirmDeleteBill: "ఈ బిల్లు రికార్డు తొలగించాలా?",
        confirmDeleteService: "ఈ సేవా రికారడు తొలగించాలా?",
        validFields: "అవసరమైన వివరాలు నమోదు చేయండి",
        imageTooLarge: "చిత్రం చాలా పెద్దది. గరిష్టం 2MB.",
        invalidImage: "సరైన చిత్రం ఎంచుకోండి.",
        km: "కి.మీ", today: "ఈరోజు", overdue: "ఆలస్యం", upcoming: "రాబోయే"
    },

    kn: {
        tagline: "ವಾಹನ ನಿರ್ವಹಣೆ ಟ್ರ್ಯಾಕರ್",
        loginTitle: "ಮತ್ತೆ ಸುಸ್ವಾಗತ",
        loginTitleSignup: "ಖಾತೆ ರಚಿಸಿ",
        username: "ಬಳಕೆದಾರರ ಹೆಸರು", password: "ಪಾಸ್ವರ್ಡ್",
        signIn: "ಸೈನ್ ಇನ್", newHere: "ಹೊಸವರು?",
        createAccount: "ಖಾತೆ ರಚಿಸಿ", haveAccount: "ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯಾ?",
        signInLink: "ಸೈನ್ ಇನ್",
        invalidCreds: "ತಪ್ಪಾದ ಬಳಕೆದಾರ ಹೆಸರು ಅಥವಾ ಪಾಸ್ವರ್ಡ್",
        userExists: "ಬಳಕೆದಾರ ಹೆಸರು ಈಗಾಗಲೇ ಇದೆ",
        emptyFields: "ಬಳಕೆದಾರ ಹೆಸರು ಮತ್ತು ಪಾಸ್ವರ್ಡ್ ನಮೂದಿಸಿ",
        logout: "ಲಾಗ್ ಔಟ್", dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        vehicles: "ವಾಹನಗಳು", services: "ಸೇವೆಗಳು",
        recentServices: "ಇತ್ತೀಚಿನ ಸೇವೆಗಳು", yourVehicles: "ನಿಮ್ಮ ವಾಹನಗಳು",
        addVehicle: "ವಾಹನ ಸೇರಿಸಿ", editVehicle: "ವಾಹನ ಸಂಪಾದಿಸಿ",
        addService: "ಸೇವೆ ಸೇರಿಸಿ", editService: "ಸೇವೆ ಸಂಪಾದಿಸಿ",
        vehicleName: "ವಾಹನದ ಹೆಸರು", regNumber: "ನೋಂದಣಿ ಸಂ.",
        make: "ನಿರ್ಮಾಪಕ", model: "ಮಾದರಿ", year: "ವರ್ಷ",
        fuelType: "ಇಂಧನ ಪ್ರಕಾರ", color: "ಬಣ್ಣ",
        petrol: "ಪೆಟ್ರೋಲ್", diesel: "ಡೀಸಲ್", cng: "ಸಿಎನ್ಜಿ",
        electric: "ವಿದ್ಯುತ್", vehicleImage: "ವಾಹನ ಚಿತ್ರ",
        addImage: "ಚಿತ್ರ ಸೇರಿಸಿ", removeImage: "ತೆಗೆದುಹಾಕಿ",
        cancel: "ರದ್ದು", save: "ಉಳಿಸಿ",
        selectVehicle: "ವಾಹನ ಆಯ್ಕೆಮಾಡಿ",
        serviceType: "ಸೇವೆ ಪ್ರಕಾರ", date: "ದಿನಾಂಕ",
        odometer: "ಓಡೋಮೀಟರ್ (ಕಿ.ಮೀ)", cost: "ವೆಚ್ಚ (₹)",
        nextServiceDate: "ಮುಂದಿನ ಸೇವೆ ದಿನಾಂಕ", note: "ಟಿಪ್ಪಣಿ",
        serviceImage: "ರಶೀದಿ / ಫೋಟೋ", fullService: "ಪೂರ್ಣ ಸೇವೆ",
        oilChange: "ಎಣ್ಣೆ ಬದಲಾವಣೆ", brakeService: "ಬ್ರೇಕ್ ಸೇವೆ",
        tireRotation: "ಟೈರ್ ತಿರುಗಿಸುವಿಕೆ", wheelAlignment: "ಚಕ್ರ ಜೋಡಣೆ",
        batteryService: "ಬ್ಯಾಟರಿ ಸೇವೆ", acService: "ಎಸಿ ಸೇವೆ",
        wash: "ವಾಷಿಂಗ್ ಮತ್ತು ಡಿಟೈಲಿಂಗ್", insurance: "ವಿಮೆ", other: "ಇತರೆ",
        edit: "ಸಂಪಾದಿಸಿ", delete: "ಅಳಿಸಿ",
        noVehicles: "ಇನ್ನೂ ವಾಹನಗಳಿಲ್ಲ. ಮೊದಲ ವಾಹನ ಸೇರಿಸಿ!",
        noServices: "ಇನ್ನೂ ಸೇವೆಗಳು ನಮೂದಾಗಿಲ್ಲ.",
        noServicesRecent: "ಇನ್ನೂ ಸೇವೆಗಳಿಲ್ಲ.",
        noVehiclesDash: "ವಾಹನಗಳಿಲ್ಲ. ವಾಹನ ಟ್ಯಾಬ್ ನಿಂದ ಸೇರಿಸಿ.",
        totalVehicles: "ಒಟ್ಟು ವಾಹನಗಳು",
        totalServices: "ಒಟ್ಟು ಸೇವೆಗಳು",
        totalSpent: "ಒಟ್ಟು ವೆಚ್ಚ",
        confirmDeleteVehicle: "ಈ ವಾಹನ ಮತ್ತು ಅದರ ಸೇವೆಗಳನ್ನು ಅಳಿಸಬೇಕೆ?",
        rememberMe: "ನನ್ನನ್ನು ನೆನಪಿಡಿ",
        bills: "ಬಿಲ್ಗಳು",
        addBill: "ಬಿಲ್ ಸೇರಿಸಿ",
        editBill: "ಬಿಲ್ ಸಂಪಾದಿಸಿ",
        billNumber: "ಬಿಲ್ ನಂ.",
        amount: "ಮೊತ್ತ (₹)",
        billCategory: "ವರ್ಗ",
        vendor: "ಮಾರಾಟಗಾರ / ಗ್ಯಾರೇಜ್",
        billImage: "ಬಿಲ್ / ರಶೀದಿ",
        noBills: "ಇನ್ನೂ ಬಿಲ್ಗಳಿಲ್ಲ. ಬಿಲ್ ಸೇರಿಸಿ.",
        confirmDeleteBill: "ಈ ಬಿಲ್ ದಾಖಲೆಯನ್ನು ಅಳಿಸಬೇಕೆ?",
        confirmDeleteService: "ಈ ಸೇವೆ ದಾಖರೆ ಅಳಿಸಬೇಕೆ?",
        validFields: "ಅಗತ್ಯವಿರುವ ವಿವರರಡಗಳನ್ನು ಭರಿಸಿ",
        imageTooLarge: "ಚಿತ್ರ ತುಂಬಾ ದೊಡ್ಡದು. ಗರಿಷ್ಠ 2MB.",
        invalidImage: "ಸರಿಯಾದ ಚಿತ್ರ ಆಯ್ಕೆಮಾಡಿ.",
        km: "ಕಿ.ಮೀ", today: "ಇಂದು", overdue: "ವಿಳಂಬ", upcoming: "ಮುಂಬರುವ"
    }
};

/* ------------------- STATE ------------------- */

const LS_USERS = "revoc_users";
const LS_SESSION = "revoc_session";
const LS_DATA = "revoc_data_";
const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2 MB

const LS_REMEMBER = "revoc_remember";

let currentLang = localStorage.getItem("revoc_lang") || "en";
let authMode = "login";
let currentUsername = null;
let vehicles = [];
let services = [];
let bills = [];
let editingVehicleId = null;
let editingServiceId = null;
let editingBillId = null;
let vehicleImageData = null;
let serviceImageData = null;
let billImageData = null;

/* ------------------- HELPERS ------------------- */

function lsGet(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
        return fallback;
    }
}

function lsSet(key, val) {
    try {
        localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
        console.warn("Storage error:", e);
    }
}

function getUsers() {
    return lsGet(LS_USERS, {});
}

function dataKey(user) {
    return LS_DATA + user;
}

function loadData() {
    if (!currentUsername) return;
    const data = lsGet(dataKey(currentUsername), { vehicles: [], services: [], bills: [] });
    vehicles = Array.isArray(data.vehicles) ? data.vehicles : [];
    services = Array.isArray(data.services) ? data.services : [];
    bills = Array.isArray(data.bills) ? data.bills : [];
}

function saveData() {
    if (!currentUsername) return;
    lsSet(dataKey(currentUsername), { vehicles: vehicles, services: services, bills: bills });
}

function t(key) {
    const dict = I18N[currentLang] || I18N.en;
    return dict[key] !== undefined ? dict[key] : (I18N.en[key] !== undefined ? I18N.en[key] : key);
}

function esc(s) {
    if (s === null || s === undefined) return "";
    return String(s)
        .replace(/&/g, "&" + "amp;")
        .replace(/</g, "&" + "lt;")
        .replace(/>/g, "&" + "gt;")
        .replace(/"/g, "&" + "quot;")
        .replace(/'/g, "&#39;");
}

/* ---------- i18n DOM ---------- */

function applyI18n() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
        el.placeholder = t(el.getAttribute("data-i18n-ph"));
    });
    document.querySelectorAll("select[data-i18n-opts]").forEach(function (sel) {
        Array.from(sel.options).forEach(function (opt) {
            if (opt.hasAttribute("data-i18n")) {
                opt.textContent = t(opt.getAttribute("data-i18n"));
            }
        });
    });
}

function populateLangSelects() {
    const loginSel = document.getElementById("loginLang");
    const appSel = document.getElementById("appLang");
    const opts = LANGUAGES.map(function (l) {
        return '<option value="' + l.code + '">' + l.label + "</option>";
    }).join("");
    loginSel.innerHTML = opts;
    appSel.innerHTML = opts;
    loginSel.value = currentLang;
    appSel.value = currentLang;

    loginSel.onchange = function () { setLang(loginSel.value); };
    appSel.onchange = function () { setLang(appSel.value); };
}

function setLang(code) {
    currentLang = code;
    localStorage.setItem("revoc_lang", code);
    const appSel = document.getElementById("appLang");
    const loginSel = document.getElementById("loginLang");
    if (appSel) appSel.value = code;
    if (loginSel) loginSel.value = code;
    applyI18n();
    refreshLoginUI();
    if (currentUsername) renderAll();
}

function refreshLoginUI() {
    const isSignup = authMode === "signup";
    document.getElementById("loginTitleText").textContent = t(isSignup ? "loginTitleSignup" : "loginTitle");
    document.getElementById("authTogglePrefix").textContent = t(isSignup ? "haveAccount" : "newHere");
    document.getElementById("authToggle").textContent = t(isSignup ? "signInLink" : "createAccount");
    document.getElementById("loginBtn").textContent = t("signIn");
}

/* ------------------- AUTH ------------------- */

function initAuth() {
    const users = getUsers();
    if (!users.admin) {
        users.admin = { password: "admin123", name: "Admin" };
        lsSet(LS_USERS, users);
    }
    const sess = lsGet(LS_SESSION, null);
    if (sess && sess.username && users[sess.username]) {
        currentUsername = sess.username;
        enterApp();
    } else {
        showLogin();
    }
}

function showLogin() {
    document.getElementById("loginScreen").classList.remove("hidden");
    document.getElementById("appScreen").classList.add("hidden");

    // Auto-fill saved credentials if "Remember me" was checked previously
    const saved = lsGet(LS_REMEMBER, null);
    if (saved && saved.username) {
        document.getElementById("loginUsername").value = saved.username;
        if (saved.password) {
            document.getElementById("loginPassword").value = saved.password;
        }
        document.getElementById("rememberMe").checked = true;
    } else {
        document.getElementById("rememberMe").checked = false;
    }

    refreshLoginUI();
}

function enterApp() {
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("appScreen").classList.remove("hidden");
    document.getElementById("userChip").textContent = currentUsername;
    loadData();
    renderAll();
    switchView("dashboard");
}

function saveRememberedCredentials(u, p) {
    const remember = document.getElementById("rememberMe");
    if (remember && remember.checked) {
        lsSet(LS_REMEMBER, { username: u, password: p });
    } else {
        localStorage.removeItem(LS_REMEMBER);
    }
}

function handleLoginSubmit(e) {
    e.preventDefault();
    const u = document.getElementById("loginUsername").value.trim();
    const p = document.getElementById("loginPassword").value;
    const errEl = document.getElementById("loginError");
    if (!u || !p) {
        errEl.textContent = t("emptyFields");
        return;
    }
    const users = getUsers();

    if (authMode === "login") {
        if (!users[u] || users[u].password !== p) {
            errEl.textContent = t("invalidCreds");
            return;
        }
        currentUsername = u;
        lsSet(LS_SESSION, { username: u });
        saveRememberedCredentials(u, p);
        enterApp();
    } else {
        if (users[u]) {
            errEl.textContent = t("userExists");
            return;
        }
        users[u] = { password: p, name: u };
        lsSet(LS_USERS, users);
        currentUsername = u;
        lsSet(LS_SESSION, { username: u });
        saveRememberedCredentials(u, p);
        enterApp();
    }
}

function handleLogout() {
    currentUsername = null;
    localStorage.removeItem(LS_SESSION);
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
    document.getElementById("loginError").textContent = "";
    authMode = "login";
    showLogin();
}

function toggleAuthMode() {
    authMode = authMode === "login" ? "signup" : "login";
    refreshLoginUI();
}

function togglePasswordVisibility() {
    const p = document.getElementById("loginPassword");
    p.type = p.type === "password" ? "text" : "password";
}

/* ------------------- VIEWS ------------------- */

function switchView(view) {
    document.querySelectorAll(".tab").forEach(function (btn) {
        btn.classList.toggle("active", btn.getAttribute("data-view") === view);
    });
    document.querySelectorAll(".view").forEach(function (v) {
        v.classList.remove("active");
    });
    const id = "view" + view.charAt(0).toUpperCase() + view.slice(1);
    const el = document.getElementById(id);
    if (el) el.classList.add("active");
    if (view === "dashboard") renderDashboard();
    if (view === "vehicles") renderVehicles();
    if (view === "services") renderServices();
    if (view === "bills") renderBills();
}

/* ------------------- MODALS ------------------- */

function openModal(id) {
    document.getElementById(id).classList.add("open");
}

function closeModal(id) {
    document.getElementById(id).classList.remove("open");
}

/* ------------------- IMAGE UPLOAD ------------------- */

function handleImagePick(file, kind) {
    if (!file) return;
    if (file.type.indexOf("image/") !== 0) {
        alert(t("invalidImage"));
        return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
        alert(t("imageTooLarge"));
        return;
    }
    const reader = new FileReader();
    reader.onload = function (ev) {
        const dataUrl = ev.target.result;
        if (kind === "vehicle") {
            vehicleImageData = dataUrl;
            document.getElementById("vfPreview").src = dataUrl;
            document.getElementById("vfPreviewWrap").classList.remove("hidden");
        } else if (kind === "service") {
            serviceImageData = dataUrl;
            document.getElementById("sfPreview").src = dataUrl;
            document.getElementById("sfPreviewWrap").classList.remove("hidden");
        } else if (kind === "bill") {
            billImageData = dataUrl;
            document.getElementById("bfPreview").src = dataUrl;
            document.getElementById("bfPreviewWrap").classList.remove("hidden");
        }
    };
    reader.readAsDataURL(file);
}

/* ------------------- VEHICLES ------------------- */

function openVehicleModal(id) {
    editingVehicleId = id || null;
    vehicleImageData = null;
    document.getElementById("vehicleForm").reset();
    document.getElementById("vfImage").value = "";
    document.getElementById("vfPreviewWrap").classList.add("hidden");
    document.getElementById("vehicleModalTitle").textContent = t(id ? "editVehicle" : "addVehicle");

    if (id) {
        const v = vehicles.find(function (x) { return x.id === id; });
        if (v) {
            document.getElementById("vfName").value = v.name || "";
            document.getElementById("vfReg").value = v.reg || "";
            document.getElementById("vfMake").value = v.make || "";
            document.getElementById("vfModel").value = v.model || "";
            document.getElementById("vfYear").value = v.year || "";
            document.getElementById("vfFuel").value = v.fuel || "petrol";
            document.getElementById("vfColor").value = v.color || "";
            if (v.image) {
                vehicleImageData = v.image;
                document.getElementById("vfPreview").src = v.image;
                document.getElementById("vfPreviewWrap").classList.remove("hidden");
            }
        }
    }
    openModal("vehicleModal");
}

function handleVehicleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("vfName").value.trim();
    const reg = document.getElementById("vfReg").value.trim();
    if (!name || !reg) {
        alert(t("validFields"));
        return;
    }
    const vehicle = {
        id: editingVehicleId || Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name: name,
        reg: reg,
        make: document.getElementById("vfMake").value.trim(),
        model: document.getElementById("vfModel").value.trim(),
        year: document.getElementById("vfYear").value,
        fuel: document.getElementById("vfFuel").value,
        color: document.getElementById("vfColor").value.trim(),
        image: vehicleImageData
    };

    if (editingVehicleId) {
        const idx = vehicles.findIndex(function (x) { return x.id === editingVehicleId; });
        if (idx > -1) {
            vehicle.id = editingVehicleId;
            vehicles[idx] = vehicle;
        }
    } else {
        vehicles.unshift(vehicle);
    }
    saveData();
    closeModal("vehicleModal");
    renderAll();
}

function deleteVehicle(id) {
    if (!confirm(t("confirmDeleteVehicle"))) return;
    vehicles = vehicles.filter(function (v) { return v.id !== id; });
    services = services.filter(function (s) { return s.vehicleId !== id; });
    saveData();
    renderAll();
}

/* ------------------- SERVICES ------------------- */

function populateVehicleSelect() {
    const sel = document.getElementById("sfVehicle");
    sel.innerHTML = "";
    if (!vehicles.length) {
        const opt = document.createElement("option");
        opt.value = "";
        opt.textContent = t("noVehicles");
        sel.appendChild(opt);
        return;
    }
    vehicles.forEach(function (v) {
        const opt = document.createElement("option");
        opt.value = v.id;
        opt.textContent = (v.name || "") + " (" + (v.reg || "") + ")";
        sel.appendChild(opt);
    });
}

function openServiceModal(id) {
    editingServiceId = id || null;
    serviceImageData = null;
    document.getElementById("serviceForm").reset();
    document.getElementById("sfImage").value = "";
    document.getElementById("sfPreviewWrap").classList.add("hidden");
    document.getElementById("serviceModalTitle").textContent = t(id ? "editService" : "addService");
    populateVehicleSelect();

    if (id) {
        const s = services.find(function (x) { return x.id === id; });
        if (s) {
            document.getElementById("sfVehicle").value = s.vehicleId || "";
            document.getElementById("sfType").value = s.type || "fullService";
            document.getElementById("sfDate").value = s.date || "";
            document.getElementById("sfOdo").value = s.odometer || "";
            document.getElementById("sfCost").value = s.cost || "";
            document.getElementById("sfNext").value = s.nextDate || "";
            document.getElementById("sfNote").value = s.note || "";
        }
    }
    openModal("serviceModal");
}

function handleServiceSubmit(e) {
    e.preventDefault();
    const vehicleId = document.getElementById("sfVehicle").value;
    const type = document.getElementById("sfType").value;
    const date = document.getElementById("sfDate").value;
    if (!vehicleId || !date) { alert(t("validFields")); return; }
    const record = {
        id: editingServiceId || Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        vehicleId: vehicleId,
        type: type,
        date: date,
        odometer: document.getElementById("sfOdo").value ? Number(document.getElementById("sfOdo").value) : null,
        cost: document.getElementById("sfCost").value ? Number(document.getElementById("sfCost").value) : null,
        nextDate: document.getElementById("sfNext").value,
        note: document.getElementById("sfNote").value.trim(),
        image: serviceImageData
    };
    if (editingServiceId) { const idx = services.findIndex(function (x) { return x.id === editingServiceId; }); if (idx > -1) services[idx] = record; }
    else { services.push(record); }
    saveData();
    closeModal("serviceModal");
    renderAll();
}

function deleteService(id) {
    if (!confirm(t("confirmDeleteService"))) return;
    services = services.filter(function (s) { return s.id !== id; });
    saveData();
    renderAll();
}

/* ------------------- BILLS ------------------- */

function populateBillVehicleSelect() {
    const sel = document.getElementById("bfVehicle");
    sel.innerHTML = "";
    if (!vehicles.length) {
        const opt = document.createElement("option");
        opt.value = "";
        opt.textContent = t("noVehicles");
        sel.appendChild(opt);
        return;
    }
    vehicles.forEach(function (v) {
        const opt = document.createElement("option");
        opt.value = v.id;
        opt.textContent = (v.name || "") + " (" + (v.reg || "") + ")";
        sel.appendChild(opt);
    });
}

function openBillModal(id) {
    editingBillId = id || null;
    billImageData = null;
    document.getElementById("billForm").reset();
    document.getElementById("bfImage").value = "";
    document.getElementById("bfPreviewWrap").classList.add("hidden");
    document.getElementById("billModalTitle").textContent = t(id ? "editBill" : "addBill");
    populateBillVehicleSelect();

    if (id) {
        const b = bills.find(function (x) { return x.id === id; });
        if (b) {
            document.getElementById("bfNumber").value = b.number || "";
            document.getElementById("bfVehicle").value = b.vehicleId || "";
            document.getElementById("bfDate").value = b.date || "";
            document.getElementById("bfAmount").value = b.amount || "";
            document.getElementById("bfCategory").value = b.category || "other";
            document.getElementById("bfVendor").value = b.vendor || "";
            document.getElementById("bfNote").value = b.note || "";
            if (b.image) {
                billImageData = b.image;
                document.getElementById("bfPreview").src = b.image;
                document.getElementById("bfPreviewWrap").classList.remove("hidden");
            }
        }
    }
    openModal("billModal");
}

function handleBillSubmit(e) {
    e.preventDefault();
    const number = document.getElementById("bfNumber").value.trim();
    const vehicleId = document.getElementById("bfVehicle").value;
    const date = document.getElementById("bfDate").value;
    const amount = document.getElementById("bfAmount").value;
    if (!number || !vehicleId || !date || !amount) {
        alert(t("validFields"));
        return;
    }
    const bill = {
        id: editingBillId || Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        number: number,
        vehicleId: vehicleId,
        date: date,
        amount: Number(amount),
        category: document.getElementById("bfCategory").value,
        vendor: document.getElementById("bfVendor").value.trim(),
        note: document.getElementById("bfNote").value.trim(),
        image: billImageData
    };
    if (editingBillId) {
        const idx = bills.findIndex(function (x) { return x.id === editingBillId; });
        if (idx > -1) bills[idx] = bill;
    } else {
        bills.push(bill);
    }
    saveData();
    closeModal("billModal");
    renderAll();
}

function deleteBill(id) {
    if (!confirm(t("confirmDeleteBill"))) return;
    bills = bills.filter(function (b) { return b.id !== id; });
    saveData();
    renderAll();
}

function renderBills() {
    const statsEl = document.getElementById("billStats");
    const listEl = document.getElementById("billList");

    // Stats
    const totalAmount = bills.reduce(function (sum, b) { return sum + (b.amount || 0); }, 0);
    const now = new Date();
    const thisMonthBills = bills.filter(function (b) {
        return b.date && b.date.slice(0, 7) === now.toISOString().slice(0, 7);
    });
    const monthAmount = thisMonthBills.reduce(function (sum, b) { return sum + (b.amount || 0); }, 0);

    statsEl.innerHTML = '<div class="stats-grid" style="margin-bottom:16px;">' +
        '<div class="stat-card"><div class="stat-icon blue">🧾</div><div class="stat-info">' +
        '<div class="stat-value">' + bills.length + '</div><div class="stat-label">' + t("totalBillsVal") + "</div></div></div>" +
        '<div class="stat-card"><div class="stat-icon green">💰</div><div class="stat-info">' +
        '<div class="stat-value">₹' + totalAmount.toLocaleString("en-IN") + '</div><div class="stat-label">' + t("totalBillSpent") + "</div></div></div>" +
        '<div class="stat-card"><div class="stat-icon yellow">📅</div><div class="stat-info">' +
        '<div class="stat-value">₹' + monthAmount.toLocaleString("en-IN") + '</div><div class="stat-label">' + t("billStatsThisMonth") + "</div></div></div>" +
        "</div>";

    // List
    if (!bills.length) {
        listEl.innerHTML = '<div class="empty-state"><span class="empty-icon">🧾</span><p>' +
            t("noBills") + "</p></div>";
        return;
    }

    const sorted = bills.slice().sort(function (a, b) {
        return (b.date || "").localeCompare(a.date || "");
    });

    listEl.innerHTML = sorted.map(function (b) {
        const thumb = b.image
            ? '<img class="service-thumb" src="' + b.image + '" onclick="viewImage(this.src)">'
            : '<div class="service-thumb-placeholder">🧾</div>';
        const meta = [];
        meta.push('<span>📅 ' + formatDate(b.date) + "</span>");
        if (b.vendor) meta.push('<span>🏪 ' + esc(b.vendor) + "</span>");
        meta.push('<span class="cost">₹' + Number(b.amount || 0).toLocaleString("en-IN") + "</span>");
        return '<div class="service-item">' + thumb +
            '<div class="service-info"><div class="service-info-top">' +
            '<span class="service-type">🧾 ' + esc(b.number || "") + " • " + esc(serviceTypeKey(b.category)) + "</span>" +
            '<span class="service-date">' + formatDate(b.date) + "</span></div>" +
            '<div class="service-vehicle">🚗 ' + esc(vehicleName(b.vehicleId)) + "</div>" +
            '<div class="service-meta">' + meta.join("") + "</div>" +
            (b.note ? '<div class="service-note">"' + esc(b.note) + '"</div>' : "") +
            '</div><div class="service-ctas">' +
            '<button class="btn-ghost small" data-action="edit-bill" data-id="' + b.id + '">✏️</button>' +
            '<button class="btn-ghost small btn-danger" data-action="delete-bill" data-id="' + b.id + '">🗑️</button>' +
            "</div></div>";
    }).join("");
}

/* ------------------- RENDERING ------------------- */

function vehicleName(id) {
    const v = vehicles.find(function (x) { return x.id === id; });
    return v ? (v.name || v.reg || "?") : "?";
}

function serviceTypeKey(key) {
    switch (key) {
        case "fullService": return "fullService";
        case "oilChange": return "oilChange";
        case "brakeService": return "brakeService";
        case "tireRotation": return "tireRotation";
        case "wheelAlignment": return "wheelAlignment";
        case "batteryService": return "batteryService";
        case "acService": return "acService";
        case "wash": return "wash";
        case "insurance": return "insurance";
        default: return "other";
    }
}

function formatDate(d) {
    if (!d) return "";
    try {
        return new Date(d + "T00:00:00").toLocaleDateString("en-IN", {
            day: "2-digit", month: "short", year: "numeric"
        });
    } catch (e) {
        return d;
    }
}

function renderDashboard() {
    const totalCost = services.reduce(function (sum, s) { return sum + (s.cost || 0); }, 0);
    const stats = [
        { icon: "🚗", cls: "", val: String(vehicles.length), label: t("totalVehicles") },
        { icon: "🛠️", cls: "blue", val: String(services.length), label: t("totalServices") },
        { icon: "💰", cls: "green", val: "₹" + totalCost.toLocaleString("en-IN"), label: t("totalSpent") }
    ];
    document.getElementById("statsGrid").innerHTML = stats.map(function (s) {
        return '<div class="stat-card"><div class="stat-icon ' + s.cls + '">' + s.icon +
            '</div><div class="stat-info"><div class="stat-value">' + s.val +
            '</div><div class="stat-label">' + s.label + "</div></div></div>";
    }).join("");

    const sorted = services.slice().sort(function (a, b) {
        return (b.date || "").localeCompare(a.date || "");
    }).slice(0, 6);
    const rsEl = document.getElementById("recentServices");
    if (!sorted.length) {
        rsEl.innerHTML = '<div class="empty-state"><span class="empty-icon">🛠️</span><p>' +
            t("noServicesRecent") + "</p></div>";
    } else {
        rsEl.innerHTML = sorted.map(function (s) {
            const thumb = s.image
                ? '<img class="service-thumb" src="' + s.image + '" onclick="viewImage(this.src)">'
                : '<div class="service-thumb-placeholder">🔧</div>';
            return '<div class="service-item" style="padding:10px">' + thumb +
                '<div class="service-info"><div class="service-info-top"><span class="service-type">' +
                esc(serviceTypeKey(s.type)) + '</span><span class="service-date">' + formatDate(s.date) +
                '</span></div><div class="service-vehicle">' + esc(vehicleName(s.vehicleId)) + "</div></div></div>";
        }).join("");
    }

    const dvEl = document.getElementById("dashboardVehicles");
    if (!vehicles.length) {
        dvEl.innerHTML = '<div class="empty-state"><span class="empty-icon">🚗</span><p>' +
            t("noVehiclesDash") + "</p></div>";
    } else {
        dvEl.innerHTML = vehicles.slice(0, 6).map(function (v) {
            const count = services.filter(function (s) { return s.vehicleId === v.id; }).length;
            const thumb = v.image
                ? '<img class="service-thumb" src="' + v.image + '" onclick="viewService(this.src)">'
                : '<div class="service-thumb-placeholder">🚗</div>';
            return '<div class="service-item" style="padding:10px">' + thumb +
                '<div class="service-info"><div class="service-vehicle" style="font-weight:700;margin:0">' +
                esc(v.name || v.reg) + '</div><div class="service-meta"><span class="reg-chip">' +
                esc(v.reg) + "</span></div></div></div>";
        }).join("");
    }
}

function renderVehicles() {
    const grid = document.getElementById("vehicleGrid");
    if (!vehicles.length) {
        grid.innerHTML = '<div class="empty-state"><span class="empty-icon">🚗</span><p>' +
            t("noVehicles") + "</p></div>";
        return;
    }
    grid.innerHTML = vehicles.map(function (v) {
        const svcCount = services.filter(function (s) { return s.vehicleId === v.id; }).length;
        const img = v.image
            ? '<img class="vehicle-img" src="' + v.image + '" onclick="viewService(this.src)" alt="">'
            : '<div class="vehicle-img-placeholder">🚗</div>';
        return '<div class="vehicle-card">' + img +
            '<div class="vehicle-body"><div class="vehicle-title"><h4>' +
            esc(v.name || "Vehicle") + '</h4><span class="reg-chip">' +
            esc(v.reg || "") + "</span></div>" +
            '<ul class="vehicle-meta">' +
            (v.make ? "<li><span>" + t("make") + ':</span><span>' + esc(v.make) + "</span></li>" : "") +
            (v.model ? "<li><span>" + t("model") + ':</span><span>' + esc(v.model) + "</span></li>" : "") +
            (v.year ? "<li><span>" + t("year") + ':</span><span>' + esc(v.year) + "</span></li>" : "") +
            (v.fuel ? "<li><span>" + t("fuelType") + ':</span><span>' + t(v.fuel) + "</span></li>" : "") +
            (v.color ? "<li><span>" + t("color") + ':</span><span>' + esc(v.color) + "</span></li>" : "") +
            '<li><span>🛠️</span><span>' + svcCount + " " + t("services") + "</span></li>" +
            '</ul><div class="vehicle-actions">' +
            '<button class="btn-ghost" data-action="edit-vehicle" data-id="' + v.id + '">✏️ ' + t("edit") + "</button>" +
            '<button class="btn-ghost btn-danger" data-action="delete-vehicle" data-id="' + v.id + '">🗑️ ' + t("delete") + "</button>" +
            "</div></div></div>";
    }).join("");
}

function renderServices() {
    const list = document.getElementById("serviceList");
    if (!services.length) {
        list.innerHTML = '<div class="empty-state"><span class="empty-icon">🛠️</span><p>' +
            t("noServices") + "</p></div>";
        return;
    }
    const sorted = services.slice().sort(function (a, b) {
        return (b.date || "").localeCompare(a.date || "");
    });
    list.innerHTML = sorted.map(function (s) {
        const thumb = s.image
            ? '<img class="service-thumb" src="' + s.image + '" onclick="viewService(this.src)">'
            : '<div class="service-thumb-placeholder">🔧</div>';
        const meta = [];
        meta.push('<span>📅 ' + formatDate(s.date) + "</span>");
        if (s.odometer) meta.push('<span>📍 ' + Number(s.odometer).toLocaleString("en-IN") + " " + t("km") + "</span>");
        if (s.cost !== null && s.cost !== undefined) meta.push('<span class="cost">₹' + Number(s.cost).toLocaleString("en-IN") + "</span>");
        if (s.nextDate) meta.push('<span>🗓️ ' + formatDate(s.nextDate) + "</span>");
        return '<div class="service-item">' + thumb +
            '<div class="service-info"><div class="service-info-top">' +
            '<span class="service-type">' + esc(serviceTypeKey(s.type)) + "</span>" +
            '<span class="service-date">' + formatDate(s.date) + "</span></div>" +
            '<div class="service-vehicle">🚗 ' + esc(vehicleName(s.vehicleId)) + "</div>" +
            '<div class="service-meta">' + meta.join("") + "</div>" +
            (s.note ? '<div class="service-note">"' + esc(s.note) + '"</div>' : "") +
            '</div><div class="service-ctas">' +
            '<button class="btn-ghost small" data-action="edit-service" data-id="' + s.id + '">✏️</button>' +
            '<button class="btn-ghost small btn-danger" data-action="delete-service" data-id="' + s.id + '">🗑️</button>' +
            "</div></div>";
    }).join("");
}

function renderAll() {
    renderVehicles();
    renderServices();
    renderBills();
    renderDashboard();
}

/* ------------------- EVENT WIRING ------------------- */

function initEvents() {
    document.getElementById("loginForm").addEventListener("submit", handleLoginSubmit);
    document.getElementById("logoutBtn").addEventListener("click", handleLogout);
    document.getElementById("authToggle").addEventListener("click", toggleAuthMode);
    document.getElementById("passToggle").addEventListener("click", togglePasswordVisibility);

    document.querySelectorAll(".tab").forEach(function (btn) {
        btn.addEventListener("click", function () {
            switchView(btn.getAttribute("data-view"));
        });
    });

    document.getElementById("addVehicleBtn").addEventListener("click", function () { openVehicleModal(); });
    document.getElementById("addServiceBtn").addEventListener("click", function () { openServiceModal(); });
    document.getElementById("addBillBtn").addEventListener("click", function () { openBillModal(); });

    document.querySelectorAll("[data-close]").forEach(function (el) {
        el.addEventListener("click", function () {
            closeModal(el.getAttribute("data-close"));
        });
    });

    document.getElementById("vehicleForm").addEventListener("submit", handleVehicleSubmit);
    document.getElementById("vfImage").addEventListener("change", function (e) {
        handleImagePick(e.target.files[0], "vehicle");
    });
    document.getElementById("vfRemoveImage").addEventListener("click", function () {
        vehicleImageData = null;
        document.getElementById("vfImage").value = "";
        document.getElementById("vfPreviewWrap").classList.add("hidden");
    });

    document.getElementById("serviceForm").addEventListener("submit", handleServiceSubmit);
    document.getElementById("sfImage").addEventListener("change", function (e) {
        handleImagePick(e.target.files[0], "service");
    });
    document.getElementById("sfRemoveImage").addEventListener("click", function () {
        serviceImageData = null;
        document.getElementById("sfImage").value = "";
        document.getElementById("sfPreviewWrap").classList.add("hidden");
    });

    document.getElementById("billForm").addEventListener("submit", handleBillSubmit);
    document.getElementById("bfImage").addEventListener("change", function (e) {
        handleImagePick(e.target.files[0], "bill");
    });
    document.getElementById("bfRemoveImage").addEventListener("click", function () {
        billImageData = null;
        document.getElementById("bfImage").value = "";
        document.getElementById("bfPreviewWrap").classList.add("hidden");
    });

    // Action buttons (edit/delete) via data-action attributes
    document.addEventListener("click", function (e) {
        const btn = e.target.closest("[data-action]");
        if (!btn) return;
        const action = btn.getAttribute("data-action");
        const id = btn.getAttribute("data-id");
        if (action === "edit-vehicle") openVehicleModal(id);
        if (action === "delete-vehicle") deleteVehicle(id);
        if (action === "edit-service") openServiceModal(id);
        if (action === "delete-service") deleteService(id);
        if (action === "edit-bill") openBillModal(id);
        if (action === "delete-bill") deleteBill(id);
    });
}

/* Global helpers for image viewing */
function viewService(src) {
    document.getElementById("imgModalImg").src = src;
    openModal("imgModal");
}

function viewImage(src) {
    viewService(src);
}

/* ------------------- BOOT ------------------- */

document.addEventListener("DOMContentLoaded", function () {
    populateLangSelects();
    applyI18n();
    initAuth();
    initEvents();
    authMode = "login";
    refreshLoginUI();
});
