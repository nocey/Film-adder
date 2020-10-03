const film = document.getElementById("films");
const director = document.querySelector("#film-yonetmen");
const filmLink = document.querySelector("#film-link");
const filmName = document.querySelector("#film-isim");
const filmadd = document.querySelector("#addfilm");
const delAlls = document.querySelector("#del-all");
const tablo = document.querySelector("#tablo");
//! UI objesini başlatma
const ui = new UI();
const storage = new Storage();
eventListener();

function eventListener() {
    filmadd.addEventListener("click", filmAdd);
    document.addEventListener("DOMContentLoaded", function() {
        let films = storage.getFilmStorage();
        ui.loadAllFilms(films);
    });
    delAlls.addEventListener("click", function() {
        let filmler = storage.getFilmStorage();
        storage.deleteAllFilms(filmler);
    });

    tablo.addEventListener("click", deleteFilm);
}

function dellFilms() {
    let filmler = storage.getFilmStorage();
    storage.deleteAllFilms(filmler);
}

function filmAdd(e) {
    const dir = director.value;
    const title = filmName.value;
    const link = filmLink.value;

    if (title === "" || dir === "" || link === "") {
        ui.alerts();
    } else {
        //Yeni Filmi oluşturdu
        const newFilm = new Film(title, dir, link);
        storage.addFilmStorage(newFilm);
        ui.addFilm(newFilm);
    }

}

function deleteFilm(e) {
    if (e.target.id === "filmsil") {
        ui.delFilm(e.target);
        storage.delİtem(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    }
}