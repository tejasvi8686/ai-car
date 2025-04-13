# 🚗 Full Stack AI Car Marketplace – React, Next.js, Prisma, Supabase, Gemini API, Clerk, Tailwind 🔥

![GitHub stars](https://img.shields.io/github/stars/tejasvi8686/ai-car?style=social)&nbsp;&nbsp;
![GitHub forks](https://img.shields.io/github/forks/tejasvi8686/ai-car?style=social)&nbsp;&nbsp;
![Github Followers](https://img.shields.io/github/followers/tejasvi8686.svg?style=social&label=Follow)&nbsp;&nbsp;

---
### ⭐ Don't forget to star this repository if you find it helpful!
---

<p align="center">

  <img src="https://i.ibb.co/Q7b8cT0D/Screenshot-2025-04-13-at-2-27-57-PM.png" width="1000" title="hover text">
  
</p>

## 📑 Introduction

Welcome to the **AI Car Marketplace**, a modern, AI-powered ecommerce-style platform for buying and selling cars. Built with cutting-edge tech including **React 19**, **Next.js 15**, **TailwindCSS**, **Supabase**, **Prisma**, and **Clerk**, it’s the perfect project to showcase your full-stack skillset!

This marketplace features secure user authentication, data handling with Supabase and Prisma, AI features powered by Gemini API, and performance optimization with Arcjet. Ideal for learning modern tooling.

## 💻 Technologies Used

- **React 19** – For high-performance UI
- **Next.js 15 (App Router)** – Modern full-stack React framework
- **Tailwind CSS + Shadcn UI** – Rapid and responsive styling
- **Prisma ORM** – Type-safe database access
- **Supabase** – Open-source Firebase alternative
- **Clerk Auth** – Seamless authentication & user management
- **Gemini API** – AI-powered enhancements
- **Arcjet** – Edge protection and performance

## ✨ Features

- 🔒 **Authentication**: Sign in/up via Clerk
- 🚘 **Car Listings**: Post and view AI-enhanced car listings
- 📸 **Image Upload**: Upload and preview car photos
- 🎨 **Modern UI**: Built with Radix UI, Shadcn UI, Tailwind
- 🧠 **AI Integration**: Gemini API to enhance metadata
- ⚡ **Performance**: Fast, scalable with Arcjet CDN
- 📱 **Responsive**: Works beautifully across devices

## 🌐 Environment Variables

```env
DATABASE_URL=your_database_url
DIRECT_URL=your_direct_url

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_public_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=your_gemini_key
ARCJET_KEY=your_arcjet_key


.
├── .clerk/                      # Clerk auth configuration
├── .next/                       # Next.js build output
├── actions/                     # Server-side actions
│   ├── admin.js
│   ├── car-listing.js
│   ├── cars.js
│   ├── home.js
│   ├── settings.js
│   └── test-drive.js
├── app/                         # App router directory
│   ├── (admin)/                 # Admin pages
│   │   ├── admin/
│   │   └── layout.js
│   ├── (auth)/                  # Authentication pages
│   │   ├── sign-in/
│   │   ├── sign-up/
│   │   └── layout.jsx
│   ├── (main)/                  # Main app sections
│   │   ├── cars/
│   │   ├── reservations/
│   │   ├── saved-cars/
│   │   ├── test-drive/
│   │   └── layout.js
│   └── waitlist/               # Waitlist feature
├── components/                  # Reusable UI components
│   └── ui/
│       ├── CarCard.jsx
│       ├── car-card.jsx
│       ├── Footer.jsx
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── HomeSearch.jsx
│       ├── Lottie.jsx
│       └── test-drive-card.jsx
├── hooks/                       # Custom React hooks
├── lib/                         # Helper libraries and utilities
├── prisma/                      # Prisma schema and config
├── public/                      # Static assets
├── .env                         # Environment variables
├── .env.local                   # Local environment overrides
├── .gitignore                   # Git ignore rules
├── components.json              # Shadcn or custom UI config
├── eslint.config.mjs           # ESLint configuration
├── middleware.js                # Middleware logic
├── next-env.d.ts                # TypeScript Next.js env declarations
├── next.config.ts               # Next.js config
├── package.json                 # Project dependencies
├── package-lock.json            # Dependency lock file
├── postcss.config.mjs           # PostCSS config
├── README.md                    # Project documentation
└── tsconfig.json                # TypeScript configuration

git clone [your-repository-link]
cd [your-repository-name]
npm install
npm run dev
