function Storage() {

}
Storage.prototype.addFilmStorage = function(newFilm) {
    let films = this.getFilmStorage();

    films.push(newFilm);

    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.getFilmStorage = function() {
    let films;

    if (localStorage.getItem("films") === null) {
        films = [];
    } else {
        films = JSON.parse(localStorage.getItem("films"))
    }
    return films;
}

Storage.prototype.deleteAllFilms = function(e) {
    localStorage.removeItem("films");
}

Storage.prototype.delİtem = function(element) {
    const films = this.getFilmStorage();
    films.forEach(function(index, e) {

        if (e.title === element) {
            films.splice(index, 1);
        }
    });
    localStorage.setItem("films", JSON.stringify(films));
}