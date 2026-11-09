<div align="center">

# 🔐 VTOP Login Assistant

**A lightweight Browser extension that takes the repetitive work out of logging into VIT Vellore's VTOP portal.**

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Manifest](https://img.shields.io/badge/Manifest-V3-green)
![Browser](https://img.shields.io/badge/Browser-Brave-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Status](https://img.shields.io/badge/status-in%20development-lightgrey)

</div>

---

## ⚠️ Prerequisite: Install This First

> **VTOP Login Assistant does not work on its own.**
> It is built to run alongside **VTOP Captcha Solver**, which handles the CAPTCHA on the login page. Without it, this extension has nothing to complete the login with.

| Required Extension | Link |
|---|---|
| 🧩 **VTOP Captcha Solver** (Chrome Web Store) | [Install from the Web Store](https://chromewebstore.google.com/detail/balpfhmdaaahhppiijcgaemeoeojejam?utm_source=item-share-cb) |
| 💻 Source code (GitHub) | [pratyush3124/VtopCaptchaSolver3.0](https://github.com/pratyush3124/VtopCaptchaSolver3.0) |

Works with Chromium-based Browsers.

---

## 🙏 Credits

This project would not exist without the work of **[Pratyush (pratyush3124)](https://github.com/pratyush3124)**, the author of **[VtopCaptchaSolver3.0](https://github.com/pratyush3124/VtopCaptchaSolver3.0)**.

All CAPTCHA solving is done entirely by his extension. VTOP Login Assistant only builds on top of it by handling the credential autofill and the surrounding login flow. Please star his repository and support his work. ⭐

---

## ✨ Features

- **Automatic credential fill:** populates the username and password fields from a local configuration file.
- **DOM-based form detection:** locates the login elements by inspecting the page, with no hard-coded coordinates or fragile timing tricks.
- **CAPTCHA error detection:** inspects the DOM to detect CAPTCHA error states.
- **Local-only credentials:** nothing is sent anywhere. Your details stay on your machine.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| JavaScript | Core extension logic |
| HTML DOM APIs | Form detection and field population |
| Chrome Extensions Manifest V3 | Extension framework |

---

## 🚀 Installation

### 1. Install the CAPTCHA solver
Add [VTOP Captcha Solver](https://chromewebstore.google.com/detail/balpfhmdaaahhppiijcgaemeoeojejam?utm_source=item-share-cb) from the Chrome Web Store.

### 2. Clone this repository
```bash
git clone https://github.com/Cainvon17/Vtop-QuickLogin.git
cd Vtop-QuickLogin
```

### 3. Edit config.js file with your Vtop Credentials (Replace the placeholders)
```js
// config.js
const CONFIG = {
  username: "YOUR_REGISTRATION_NUMBER",
  password: "YOUR_PASSWORD",  
};
```

### 4. Load the extension in the browser
1. Open example: `brave://extensions`
2. Enable **Developer mode** (top right)
3. Click **Load unpacked**
4. Select the project folder

### 5. Log in
Open the VTOP login page. The assistant fills in your credentials, and the CAPTCHA solver takes care of the CAPTCHA.

---

## ⚙️ Configuration (config.js file)

| Option | Description |
|---|---|
| `username` | Your VTOP username |
| `password` | Your VTOP password |

---

## 📁 Project Structure

```
vtop-login-assistant/
├── manifest.json        # Manifest V3 configuration
├── content.js           # Form detection and autofill logic
├── config.example.js    # Template for local credentials
├── config.js            # Your credentials (git-ignored)
├── .gitignore
└── README.md
```

---

## 🔒 Security

- Credentials live in a **local configuration file** that is **excluded from version control** via `.gitignore`.
- No credentials are transmitted, logged, or stored remotely.
- CAPTCHA verification is handled **separately** by the CAPTCHA solver extension, not by this project.


---

## 📈 Progress

**Current version: v1.0.0**

### ✅ Completed
- [x] Local config-based credential autofill
- [x] DOM-based login form detection
- [x] Support for multiple VTOP validation button variants
- [x] CAPTCHA error detection through DOM inspection
- [x] Configurable execution delay for compatibility with other extensions
- [x] Integration alongside VTOP Captcha Solver

### 🔧 In Progress
- [ ] Refining the overall login flow
- [ ] Improving speed and reliability

### 🗺️ Roadmap
- [ ] Options page for configuring credentials without editing files
- [ ] Cleaner setup and onboarding experience
- [ ] Wider testing across VTOP page variations

---

## 🤝 Contributing

This is a personal project, but suggestions and bug reports are welcome. Feel free to open an issue.

---

## 📄 Disclaimer

This is an **independent personal project** and is **not affiliated with or endorsed by VIT Vellore**. Use it at your own discretion and keep your credentials safe.

---

<div align="center">

Built by [Raghav](https://github.com/Cainvon17) · Powered by [VtopCaptchaSolver3.0](https://github.com/pratyush3124/VtopCaptchaSolver3.0) by Pratyush

</div>
