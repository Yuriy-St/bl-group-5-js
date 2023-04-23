// Є масив об'єктів. Потрібно створити з нього об'єкт, який буде містити в собі у якості ключів імена режисеів, а їх значення - масиви фільмів.
const favouriteMovies = [
    { director: 'Christopher Nolan', name: 'Interstellar' },
    { director: 'Quentin Tarantino', name: 'Pulp Fiction' },
    { director: 'Christopher Nolan', name: 'Inception' },
    { director: 'Christopher Nolan', name: 'The Dark Knight' },
    { director: 'Martin Scorsese', name: 'Taxi driver' },
    { director: 'Quentin Tarantino', name: 'Inglorious Basterds' },
    { director: 'Martin Scorsese', name: 'Silence' }
];
console.log(favouriteMovies);
const movies = {};

for (const movie of favouriteMovies) {
    if (!movies[movie.director]) movies[movie.director] = [];
    movies[movie.director].push(movie.name);
}

console.log(movies);
