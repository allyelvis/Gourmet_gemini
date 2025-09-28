# Gourmet Gemini

A modern e-commerce restaurant app where users can browse a menu, add items to a cart, and get personalized meal suggestions from a Gemini-powered AI chef.

## ✨ Features

- **Dynamic Menu:** Browse food and beverage items organized by category.
- **Nutritional Information:** View detailed nutritional facts (calories, protein, carbs, fat) for each menu item.
- **Interactive Shopping Cart:** Add items, adjust quantities, and see a running subtotal.
- **AI-Powered Suggestions:** Get personalized meal recommendations from "Chef Gemini" based on your current cart items.
- **Real-Time Order Tracking:** After checkout, watch the status of your order update in real-time, from preparation to delivery.
- **Estimated Delivery Countdown:** See a live countdown timer for your delivery on the order tracking page.
- **Responsive Design:** A seamless experience on both desktop and mobile devices.

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript
- **Styling:** Tailwind CSS
- **AI:** Google Gemini API (`@google/genai`)

## 🚀 Getting Started

To run this project, you need to have a Google Gemini API key.

### Prerequisites

- A modern web browser.
- A valid Google Gemini API key.

### Installation & Running

1.  **Set up the API Key:** The application expects the Google Gemini API key to be available as an environment variable named `API_KEY`. Make sure this is configured in your execution environment.

    *The `geminiService.ts` file will automatically use this key to initialize the AI client.*

2.  **Serve the application:** Open `index.html` in a web server environment that supports ES modules.

## 📁 Project Structure

```
.
├── components/          # Reusable React components (Header, Menu, Cart, etc.)
│   └── icons/           # SVG icon components
├── services/            # Modules for external API interactions (geminiService.ts)
├── App.tsx              # Main application component, manages state and views
├── constants.ts         # Static data, such as the menu items
├── index.html           # The main HTML file
├── index.tsx            # React application entry point
├── metadata.json        # Application metadata
└── types.ts             # TypeScript type definitions
```
