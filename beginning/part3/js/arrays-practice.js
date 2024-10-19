//STEP 1
var favoriteMovies = ["Blade Runner 2049", 
    "The Shinning", 
    "Scott Pilgrim vs the World", 
    "Superbad", 
    "La la land"];

// Display the second movie in the array
console.log(favoriteMovies[1]); // Output: The Shawshank Redemption
//STEP 2
var movies = new Array(5); 

movies[0] = "Blade Runner 2049";
movies[1] = "The Shinning";
movies[2] = "Scott Pilgrim vs the World";
movies[3] = "Superbad";
movies[4] = "La la land";

console.log(movies[0]); 
//STEP 3
var movies = new Array(5); 

movies[0] = "Blade Runner 2049";
movies[1] = "The Shinning";
movies[2] = "Scott Pilgrim vs the World";
movies[3] = "Superbad";
movies[4] = "La la land";

movies[3] = "Black Swan"
console.log(movies[3]); 

//STEP 4
var favoriteMovies = ["Blade Runner 2049", 
    "The Shinning", 
    "Scott Pilgrim vs the World", 
    "Superbad", 
    "La la land"];

delete movies[0]; // This leaves an undefined value at index 0

// Display the contents of the array
console.log(movies);
//STEP 5
var movies = ["Blade Runner 2049", 
    "The Shinning", 
    "Scott Pilgrim vs the World", 
    "Superbad", 
    "La la land",
    "Hereditary",
    "Midsommar"];
    for (var i = 0; i < movies.length; i++) {
        console.log(movies[i]);
    }
//STEP 6
var movies = ["Blade Runner 2049", 
    "The Shinning", 
    "Scott Pilgrim vs the World", 
    "Superbad", 
    "La la land",
    "Hereditary",
    "Midsommar"];
    for (var index in movies) {
        console.log(movies[index]);
    } 
//STEP 7
console.log("Sorted movies view: ");
var movies = ["Blade Runner 2049", 
    "The Shinning", 
    "Scott Pilgrim vs the World", 
    "Superbad", 
    "La la land",
    "Hereditary",
    "Midsommar"];

    movies.sort();

    for (var index in movies) {
        console.log(movies[index]);
    } 
//STEP 8
var movies = ["Blade Runner 2049", 
    "The Shinning", 
    "Scott Pilgrim vs the World", 
    "Superbad", 
    "La la land",
    "Hereditary",
    "Midsommar"];

    var leastFavMovies = [
        "Cats",
        "The Kissing Booth",
        "Any Star Wars Movie (;"
    ];
    console.log("Movies I like:");

    for (var index in movies) {
        console.log(movies[index]);
    }
    console.log("");

    console.log("Movies I regret watching:");
    for (var index in leastFavMovies) {
        console.log(leastFavMovies[index]);
    }

//STEP 9
var movies = ["Blade Runner 2049", 
    "The Shinning", 
    "Scott Pilgrim vs the World", 
    "Superbad", 
    "La la land",
    "Hereditary",
    "Midsommar"];

    var leastFavMovies = [
        "Cats",
        "The Kissing Booth",
        "Any Star Wars Movie (;"
    ];
var allMovies = movies.concat(leastFavMovies);

allMovies.sort().reverse();

console.log("");
console.log("All Movies reverse sorted order: ");
for (var index in allMovies) {
    console.log(allMovies[index]);
}
//STEP 10

var movies = ["Blade Runner 2049", 
    "The Shinning", 
    "Scott Pilgrim vs the World", 
    "Superbad", 
    "La la land",
    "Hereditary",
    "Midsommar"];

    var leastFavMovies = [
        "Cats",
        "The Kissing Booth",
        "Any Star Wars Movie (;"
    ];
var allMovies = movies.concat(leastFavMovies);

allMovies.sort().reverse();

console.log("");
console.log("All Movies reverse sorted order:");
for (var index in allMovies) {
    console.log(allMovies[index]);
}


var lastMovie = allMovies.pop(); 

console.log("Last Movie: " + lastMovie);