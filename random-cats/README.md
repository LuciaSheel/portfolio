# 🐱 Random Cats

A simple web app that fetches and displays random cat images using an external API.

## 🚀 Features

- Fetches a new random cat image with each request
- Keeps the API key secure by using a backend
- Built with **HTML, CSS, JavaScript, and Node.js**

## 📂 File Structure

```
random-cats
│
├── backend                # Backend to fetch cat images securely
│   ├── server.js          # Express server handling API requests
│   ├── .env               # Stores API key securely
│
├── cats                   # Frontend for displaying random cats
│   ├── index.html         # Main webpage
│   ├── script.js          # Handles fetching and displaying images
│   ├── style.css          # Page styling
│
├── node_modules/          # Installed dependencies (ignored in Git)
├── package.json           # Dependencies and scripts
├── package-lock.json      # Lock file for dependencies
└── .gitignore             # Prevents sensitive files from being committed
```

## ⚙️ Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/luciasheel/random-cats.git  
   cd random-cats
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Add your API key:**
   - Create a `.env` file inside the `backend` folder
   - Add: `API_KEY=your_actual_api_key`
4. **Run the backend server:**
   ```sh
   node backend/server.js
   ```
5. **Open ********`cats/index.html`******** in a browser** and enjoy the cat pictures! 🐱

## 🛠 Technologies Used

- HTML5, CSS3, JavaScript
- Node.js with Express.js
- Fetch API for making requests
- dotenv for environment variables

## 🙌 Credits

- Cat images provided by [The Cat API](https://thecatapi.com/)
- Built by Lucia Sheel
- Assistance provided by ChatGPT 🤖

## ℹ️ Note

*You won't be able to clone this project quite yet as it is currently inside my portfolio repo. It may be moved to its own repository later.*

## 📜 License

This project is open-source and free to use.

