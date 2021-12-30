const moreBtn = document.getElementById("more");
const container = document.querySelector(".container");
const popupText = document.querySelector(".popuptext");
const page = document.querySelector("#page");
let currentPage = 1;
let popUpInfo;

const getPopup = (title, desc, age, shortDesc, slogan, r1, r2, r3, r4, r5, poster) => {
    return `
    <div>
        <h2 class="popup_title">${title}</h2>
        <div class="popup_poster-desc">
            <img class="popup_poster" src="${poster}" alt="poster"/>
            <div class="popup_highlight">Описание: <span class="popup_highlight-elem">${desc}</span></div>
        </div>
        <div class="popup_highlight">Краткое описание: <span class="popup_highlight-elem">${shortDesc}</span></div>
        <div class="popup_highlight">Возраст: <span class="popup_highlight-elem">${age.substring(3)}</span></div>
        <div class="popup_highlight">Слоган: <span class="popup_highlight-elem">${slogan}</span></div>
        <ul>
            <span class="popup_critics">Критики:</span>
            <li class="popup_highlight">Await: <span class="popup_highlight-elem">${r1}</span></li>
            <li class="popup_highlight">Film Critics: <span class="popup_highlight-elem">${r2}</span></li>
            <li class="popup_highlight">Good Revie: <span class="popup_highlight-elem">${r3}</span></li>
            <li class="popup_highlight">Imdb: <span class="popup_highlight-elem">${r4}</span></li>
            <li class="popup_highlight">Kinopoisk: <span class="popup_highlight-elem">${r5}</span></li>
        </ul>
    </div>`;
}

const displayPopup = (info) => {
    const template = `<div class="popuptext" id="myPopup">${info}</div>`;
    container.insertAdjacentHTML("beforebegin", template);
}

const getFilm = (img, titleRu, titleEn, rating, ratingVoteCount, year, genres, lenght, countries, id) => {
    const template = `
        <div class="card_container">
            <img id="${id}"  class="card_image" src="${img}" alt="Movie's image">
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
            console.log(data)
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

displayPopup(popUpInfo);

container.addEventListener("click", function(e) {
    e.preventDefault();
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
            console.log(data);
            [data].map(({ nameRu, description, ratingAgeLimits, shortDescription, slogan, ratingAwait, ratingFilmCritics, ratingGoodReview, ratingImdb, ratingKinopoisk, posterUrlPreview }) => {
                popUpInfo = getPopup(nameRu, description, ratingAgeLimits, shortDescription, slogan, ratingAwait, ratingFilmCritics, ratingGoodReview, ratingImdb, ratingKinopoisk, posterUrlPreview)
            });
            console.log(popUpInfo)
            document.querySelector("#myPopup").classList.toggle("show");
        })
        .catch((err) => {
            console.log("Error:", err);
        });
});

moreBtn.addEventListener("click", () => {
    if (currentPage === 13) return;
    currentPage += 1;
    displayFilms();
});