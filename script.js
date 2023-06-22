document.getElementById('searchButton').addEventListener('click', searchMovies);

let api_key = '2437d547564b743b28742b1cb602981d'
let urlBase ='https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w500/'


function searchMovies () {
    let searchInput = document.getElementById('searchInput').value
    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies) {
    let resultsContainer = document.getElementById('results')
    resultsContainer.innerHTML =''

    if (movies.length ===0){
        resultsContainer.innerHTML = '<p> No se encontraron resultados para tu busqueda </p>'
        return
    }
    movies.forEach(movie => {
        let movieDiv = document.createElement ('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement ('p')
        releaseDate.textContent = 'La fecha de estreno de esta pelicula fue el:  ' + movie.release_date

        let overview = document.createElement ('p')
        overview.textContent = movie.overview
        
        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img') 
        poster.src = posterPath

        let clasificacion = document.createElement('p')
        clasificacion.textContent = 'Clasificación de 0 a 100 %:  ' + movie.popularity + '%'


        
        movieDiv.appendChild(poster) 
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)
        movieDiv.appendChild(clasificacion)

        resultsContainer.appendChild (movieDiv)
    });
}

