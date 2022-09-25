const movieList = [
    {
        title: "Batman",
        year: 1989,
        director: "Tim Burton",
        imdbRating: 7.6
    },
    {
        title: "Batman Returns",
        year: 1992,
        director: "Tim Burton",
        imdbRating: 7.0
    },
    {
        title: "Batman Forever",
        year: 1995,
        director: "Joel Schumacher",
        imdbRating: 5.4
    },
    {
        title: "Batman & Robin",
        year: 1997,
        director: "Joel Schumacher",
        imdbRating: 3.7
    },
    {
        title: "Batman Begins",
        year: 2005,
        director: "Christopher Nolan",
        imdbRating: 8.3
    },
    {
        title: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan",
        imdbRating: 9.0
    },
    {
        title: "The Dark Knight Rises",
        year: 2012,
        director: "Christopher Nolan",
        imdbRating: 8.5
    }
];

// TODO: Make an array of the titles of movies released before 2000
const titles = movies => movies.map(movie => movie.title)
// const filter = (movies, func) => movies.filter(func)
const before2000 = movie => movie.year <= 2000

// const moviesBefore2000 = titles(filter(movieList, before2000))

// console.log(moviesBefore2000);

const governmentForms = [
    {
        name: "Plutocracy",
        definition: "Rule by the wealthy"
    },
    {
        name: "Oligarchy",
        definition: "Rule by a small number of people"
    },
    {
        name: "Kleptocracy",
        definition: "Rule by the thieves"
    },
    {
        name: "Theocracy",
        definition: "Rule by a religious elite"
    },
    {
        name: "Democracy",
        definition: "Rule by the people"
    },
    {
        name: "Autocracy",
        definition: "Rule by a single person"
    }
];

// TODO: compute the formsEndingWithCy array
const names = forms => forms.map(form => form.name)
const filter = (forms, func) => forms.filter(func)
const endsWithCy = (form) => form.name.endsWith("cy")

const formsEndingWithCy = names(filter(governmentForms, endsWithCy))

// Should show ["Plutocracy", "Kleptocracy", "Theocracy", "Democracy", "Autocracy"]
console.log(formsEndingWithCy);

const arrays = [[1, 4], [11], [3, 5, 7]];

// TODO: compute the value of the arraysSum variable
const arrSum = (arrs) => arrs.reduce((acc, curr) => acc + curr, 0)
const arr2 = arr => arr.map(array => arrSum(array))

const arraysSum = arrSum(arr2(arrays))

console.log(arraysSum); // Should show 31