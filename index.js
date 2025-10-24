const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set static folder (for CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));


// Home route
app.get('/', (req, res) => {
    const moviedata = require('./movie.json');
    const searchQuery = req.query.search ? req.query.search.toLowerCase() : "";

    // Filter movies if search query exists
    let filteredMovies = moviedata;
    if (searchQuery) {
        filteredMovies = moviedata.filter(movie =>
            movie.title.toLowerCase().includes(searchQuery) ||
            movie.genre.toLowerCase().includes(searchQuery)
        );
    }
    // console.log(moviedata);
    res.render('home', { moviedata: filteredMovies, searchQuery });
});

//detail page
app.get('/:id', (req, res) => {
    const moviedata = require('./movie.json');
    let { id } = req.params;
    let data = moviedata[id - 1];
    // console.log(id);
    if (data) {
        res.render('detailspage', { data });
    } else {
        res.status(404).render('notfoundpage');
    }
})

// 404 handler (should be last)
app.use((req, res) => {
    res.status(404).render('notfoundpage');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});