# ✈️ Spotter AI – Flight Scanner

A **responsive flight search app** built with **React + TypeScript** for the Spotter AI coding assessment. The app allows users to search for flights between two airports with specified dates and passengers, then displays flight options in a clean, modern interface.

---

## 🚀 Features

-   🔍 **Search Flights** by:

    -   Departure airport
    -   Destination airport
    -   Departure date
    -   Return date
    -   Number of passengers

-   ⚡ **Real-Time Airport Search Suggestions** with debounced API requests

-   💾 **State Management** using [Zustand](https://github.com/pmndrs/zustand)

-   📡 **Data Fetching & Caching** using [React Query](https://tanstack.com/query/latest)

-   💅 **Modern UI** built with [Tailwind CSS](https://tailwindcss.com/) and [Shadcn/UI](https://ui.shadcn.com/)

-   💡 **Icons** powered by [Lucide React](https://lucide.dev/)

-   ⏳ **Loading Indicators** from [React Spinners](https://www.davidhu.io/react-spinners/)

-   🧭 **Routing** handled by [React Router DOM](https://reactrouter.com/)

-   ⚙️ **Type Safety** ensured with TypeScript

---

## 🧰 Tech Stack

| Tool                              | Purpose                           |
| --------------------------------- | --------------------------------- |
| **React + Vite**                  | Frontend framework and build tool |
| **TypeScript**                    | Static typing                     |
| **Tailwind CSS**                  | Styling                           |
| **Shadcn/UI**                     | Reusable UI components            |
| **React Query**                   | Data fetching and caching         |
| **Zustand**                       | Global state management           |
| **React Router DOM**              | Routing between pages             |
| **Lucide React**                  | Icons                             |
| **React Spinners**                | Loading indicators                |
| **use-debounce**                  | Debounced search input            |
| **Google Flights API (RapidAPI)** | Fetching live flight data         |

---

## 🌐 API Usage

This project integrates the **Google Flights API** available on [RapidAPI](https://rapidapi.com/).
The API is used to:

-   Retrieve available flights between selected airports
-   Fetch airport suggestions as users type

> ⚠️ **Note:** For demo purposes only, the API keys are stored in the code to simplify testing and submission.
> In a **production environment**, sensitive keys would be securely stored in environment variables (e.g., `.env` file) and never committed to version control.

---

## 📸 Screens

**Flights Page**

-   Inputs for:

    -   Departure airport
    -   Destination airport
    -   Departure date
    -   Return date
    -   Number of passengers

-   “Search Flights” button triggers API call
-   Displays a list of available flights

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/spotter-ai-flight-scanner.git
cd spotter-ai-flight-scanner
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open in browser

Visit: `http://localhost:5173`

---

## 🗒️ Notes

This project was intentionally kept **simple** to demonstrate:

-   Clean, maintainable React + TypeScript structure
-   Integration with external APIs (RapidAPI)
-   Modern UI/UX design principles
-   Debounced search and efficient state management

Potential improvements include:

-   Flight detail view and filtering
-   Persistent search history
-   Improved error and loading states
-   Secure environment variable management

---

## 👨‍🎨 Author

**Mussie Habtemichael**
Frontend Developer | React • TypeScript • Next.js • Tailwind CSS
🌐 [Portfolio](https://musayh.com/) | 💼 [LinkedIn](https://www.linkedin.com/in/mussie-habtemichael/)

---

**Made with ❤️ using React, Vite, and Tailwind CSS**
