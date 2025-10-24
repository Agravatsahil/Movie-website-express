🎬 Movie Website Project

This is a movie website project built as a practice project to learn Node.js, Express.js, EJS, and Nodemon.
It demonstrates how to build a dynamic website with server-side rendering, routing, and reusable components while practicing real-world web development skills.

🧩 Features

🔎 Search & Filter Movies – Users can search movies by title or genre.

📄 Movie Detail Pages – Each movie has a dedicated page with details.

⚙️ Dynamic Routing – Express routes render pages using EJS templates.

🧩 EJS Includes – Reusable header, footer, and layout for cleaner code.

❌ Custom 404 Page – Displays when a page does not exist.

🎨 Responsive Design – Basic CSS styling to practice layouts and visuals.

🛠️ Technologies Used

Node.js – Backend JavaScript runtime.

Express.js – Web server framework for routing and requests.

EJS (Embedded JavaScript) – Template engine for dynamic HTML rendering.

Nodemon – Automatically restarts server during development.

JSON – Used as a simple database to store movie data.

CSS – Styling pages and practicing responsive design.

📂 Project Structure
project/
├── public/          # CSS, images, JS files
├── views/           # EJS templates (home, details, 404, includes)
├── movie.json       # Movie data
├── index.js           # Main Express server
└── package.json     # Node dependencies and scripts

💡 What I Learned

How to create a backend server using Express.js.

Using EJS for dynamic HTML and reusable templates with includes.

How to filter data (search by title or genre) and render it dynamically.

Handling routes, including dynamic detail pages and 404 errors.

Using Nodemon to automatically restart the server during development.

Structuring a Node.js project for scalability and clarity.

🚀 How to Run Locally

Clone the repository:

git clone https://github.com/Agravatsahil/Movie-website-express.git


Navigate to the project folder:

cd Movie-website-express


Install dependencies:

npm install


Run the server:

nodemon index.js


Open your browser:

http://localhost:3000

📌 Notes

This project is mainly a practice project for learning backend development, EJS templating, and dynamic routing.
It uses JSON as a dataset and does not connect to a live database.