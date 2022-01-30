const moreBtn = document.getElementById("more");
const container = document.querySelector(".container");
const popupText = document.querySelector(".popuptext");
const page = document.querySelector("#page");
let currentPage = 1;

const getPopup = (title, desc, age, shortDesc, slogan, r1, r2, r3, r4, r5, poster) => {
    document.querySelector('.title').innerHTML = title;
    document.querySelector('.desc').innerHTML = desc;
    document.querySelector('.age').innerHTML = age.substring(3);
    document.querySelector('.short_desc').innerHTML = shortDesc;
    document.querySelector('.slogan').innerHTML = slogan;
    document.querySelector('.r1').innerHTML = r1;
    document.querySelector('.r2').innerHTML = r2;
    document.querySelector('.r3').innerHTML = r3;
    document.querySelector('.r4').innerHTML = r4;
    document.querySelector('.r5').innerHTML = r5;
    document.querySelector('.poster').src = poster;
}

const getFilm = (img, titleRu, titleEn, rating, ratingVoteCount, year, genres, lenght, countries, id) => {
    const template = `
        <div class="card_container">
            <button class="get_more_info" id="${id}">Узнать больше</button>
            <img  class="card_image" src="${img}" alt="Movie's image">
            <div class="card_info">
                <a class="card_info-title" href="#">
                    <h2>${titleRu} (${titleEn})</h2>
                </a>
                <div class="card_info_year-genre">
                    <div class="card_info-year">Год: ${year}</div>
                    <div class="card_info-lenght">Страна: ${countries.map((countries)=> " " + countries.country)}</div>
                    <div class="card_info-genre">Жанр: ${genres.map((genres)=> " " + genres.genre)}</div>
                    <div class="card_info-rating">Рейтинг: ${rating} (${ratingVoteCount})</div>
                    <div class="card_info-lenght">Время: ${lenght}</div>
                </div>
                <p class="card_info-description"></p>
            </div>
    
        </div>
    `;
    container.insertAdjacentHTML("beforeend", template);
}

const displayFilms = () => {
    page.innerHTML = currentPage;
    const promise = fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${currentPage}`, {
            method: "GET",
            headers: {
                "X-API-KEY": "86345f7e-62a7-49aa-b982-7820be9dadc9",
                "Content-Type": "application/json",
            },
        }
    );
    promise
        .then((response) => response.json())
        .then((data) => {
            data.films.map(({ posterUrl, nameRu, nameEn, rating, ratingVoteCount, year, genres, filmLength, countries, filmId }) => {
                getFilm(posterUrl, nameRu, nameEn, rating, ratingVoteCount, year, genres, filmLength, countries, filmId);
            });
            moreBtn.innerHTML = 'More';
            moreBtn.classList.add('btn');
            if (currentPage === 13) {
                moreBtn.innerHTML = '';
                moreBtn.classList.add('display-none');
            }
        })
        .catch((err) => {
            console.log("Error:", err);
        });
}

displayFilms();

container.addEventListener("click", function(e) {
    e.preventDefault();
    if (e.target.tagName === "BUTTON") {
        const details = fetch(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/${e.target.id}`, {
                method: "GET",
                headers: {
                    "X-API-KEY": "86345f7e-62a7-49aa-b982-7820be9dadc9",
                    "Content-Type": "application/json",
                },
            }
        );
        details
            .then((response) => response.json())
            .then((data) => {
                [data].map(({ nameRu, description, ratingAgeLimits, shortDescription, slogan, ratingAwait, ratingFilmCritics, ratingGoodReview, ratingImdb, ratingKinopoisk, posterUrlPreview }) => {
                    getPopup(nameRu, description, ratingAgeLimits, shortDescription, slogan, ratingAwait, ratingFilmCritics, ratingGoodReview, ratingImdb, ratingKinopoisk, posterUrlPreview)
                });
                document.querySelector("#myPopup").classList.add("show");
            })
            .catch((err) => {
                console.log("Error:", err);
            });
    }
});

document.querySelector("#del").addEventListener("click", () => document.querySelector("#myPopup").classList.remove("show"))

moreBtn.addEventListener("click", () => {
    if (currentPage === 13) return;
    currentPage += 1;
    displayFilms();
});