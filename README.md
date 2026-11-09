# DeveloperSatyam Portfolio (Frontend-Only Architecture)

A modern, responsive, high-performance personal portfolio website built with **React.js**, **Vite**, **Pure CSS3**, and **EmailJS**. Inspired directly by the reference design: dark matte background (`#121212`), golden yellow accents (`#f5b72e`), high-contrast pill action buttons, smooth animations, and clean responsive layouts.

> **100% Frontend Only:** Zero Node.js/Express backend, zero database, zero server maintenance required. Form submissions are delivered directly to your email inbox using the official EmailJS browser SDK.

---

## 🎨 Color Palette & Visual Identity

- **Primary Background**: `#121212` (Matte Dark Charcoal)
- **Secondary Background**: `#181818` (Section contrast)
- **Cards & Surfaces**: `#222222` to `#282828` with `#333333` border
- **Accent Yellow**: `#f5b72e` (Logo `W.`, Name Highlight, Active Nav Indicator)
- **Pill Buttons**: `#ffffff` background with `#121212` text
- **Social Badges**: Circular icons for Facebook, Twitter/X, YouTube, Instagram, GitHub, LinkedIn

---

## 📁 Project Structure

```
MyPortfolio/
├── frontend/
│   ├── public/
│   │   └── assets/               # Visual media assets & portfolio images
│   ├── src/
│   │   ├── assets/               # Local icons & media
│   │   ├── components/
│   │   │   ├── BackToTop/        # Floating smooth scroll-to-top button
│   │   │   ├── Footer/           # Social links, copyright, quick navigation
│   │   │   ├── Icons/            # Custom responsive SVG icon library
│   │   │   ├── Navbar/           # Sticky navbar with active indicator & mobile drawer
│   │   │   ├── ProjectModal/     # Interactive project deep-dive modal
│   │   │   └── ScrollProgress/   # Golden progress bar at top of screen
│   │   ├── data/
│   │   │   └── portfolioData.js  # Dynamic portfolio data model
│   │   ├── hooks/
│   │   │   ├── useIntersectionObserver.js # Scroll entrance animations
│   │   │   ├── useScrollSpy.js            # Tracks active section on scroll
│   │   │   └── useTypingEffect.js         # Typewriter effect for roles
│   │   ├── sections/
│   │   │   ├── About/            # "What I do" cards, journey, education
│   │   │   ├── Contact/          # EmailJS contact form & social links
│   │   │   ├── Experience/       # Hackathons, certifications, education timeline
│   │   │   ├── Hero/             # Intro, name highlight, CTAs, profile frame
│   │   │   ├── Projects/         # 3-column project grid with filters & modals
│   │   │   └── Skills/           # Categorized tech expertise with filters
│   │   ├── styles/
│   │   │   ├── animations.css    # Keyframes & transitions
│   │   │   ├── global.css        # Base styles, resets, pill button classes
│   │   │   └── variables.css     # CSS custom properties / theme colors
│   │   ├── App.css
│   │   ├── App.jsx               # Main portfolio layout
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env                      # Local EmailJS credentials (git-ignored)
│   ├── .env.example              # Placeholder environment template
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore                    # Ensures .env is never committed
├── package.json                  # Root scripts
└── README.md
```

---

## ⚡ Quick Start

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Start the Development Server

```bash
npm run dev
```

Visit **`http://localhost:5173`** in your browser.

---

## 📧 EmailJS Setup Guide (Bina Kisi Server Ke Email Kaise Receive Karein)

Portfolio ka Contact Form seedha aapke personal email par message bhejta hai via **EmailJS Browser SDK**.

### Step 1: EmailJS Account Banayein
1. [EmailJS](https://www.emailjs.com/) par free account sign up karein.

### Step 2: Email Service Add Karein
1. Dashboard me **Email Services** par jayein.
2. **Add New Service** par click karein aur **Gmail** (ya apna preferred provider) select karein.
3. Apna email account connect karein.
4. Yahan se apna **`Service ID`** copy karein (e.g., `service_xxxxxx`).

### Step 3: Email Template Banayein
1. Dashboard me **Email Templates** par jayein.
2. **Create New Template** par click karein.
3. Subject line me likhein:
   ```
   New Portfolio Message from {{from_name}}: {{subject}}
   ```
4. Content editor me yeh template variables use karein:
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```
5. Template settings me **Reply-To** field me `{{reply_to}}` set karein (taaki aap reply karein toh visitor ko email jaye).
6. Template save karein aur apna **`Template ID`** copy karein (e.g., `template_xxxxxx`).

### Step 4: Public Key Copy Karein
1. Dashboard me **Account** -> **API Keys** par jayein.
2. Apna **`Public Key`** copy karein (e.g., `user_xxxxxx` ya random string).

### Step 5: Environment Variables Configure Karein
`frontend/.env` file open karein aur values paste karein:

```env
VITE_EMAILJS_SERVICE_ID=service_your_actual_id
VITE_EMAILJS_TEMPLATE_ID=template_your_actual_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

> **Note:** Jab aap `.env` me changes karein, toh terminal me `npm run dev` ko restart karein taaki Vite nayi environment variables read kar sake.

---

## 🚀 One-Click Deployment (Vercel / Netlify / GitHub Pages)

Chunki yeh **100% Frontend-Only** project hai, aap ise kisi bhi static host par free me deploy kar sakte hain:

### Deploying to Vercel:
1. Apne code ko GitHub repository me push karein.
2. [Vercel](https://vercel.com/) par jayein aur **Import Project** karein.
3. **Root Directory**: `frontend` select karein.
4. **Environment Variables** section me 3 keys add karein:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Click **Deploy**. Website live ho jayegi!
