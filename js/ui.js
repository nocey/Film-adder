function UI() {


}

UI.prototype.addFilm = function(e) {
    const films = document.getElementById("tbodyfilm");
    films.innerHTML += `<tr id="alt-taraf">
                     <th>
                         <img src="${e.url}" alt="">
                     </th>
                     <th>${e.title}</th>
                     <th>${e.director}</th>
                     <th>
                     <button type="button" class="btn" id="filmsil">Sil</button>
                     </th>
                 </tr>`
}
UI.prototype.alerts = function() {
    const hata = document.querySelectorAll(".parca");
    const div = document.createElement("div");
    div.className = `hata`;
    div.textContent = `Tekrar Deneyiniz`;
    hata[1].appendChild(div);
    setTimeout(function() {
        div.remove();
    }, 3000);
}

UI.prototype.loadAllFilms = function(films) {
    const tümFilmler = new UI();
    films.forEach(function(e) {
        tümFilmler.addFilm(e);
    })
}

UI.prototype.delFilm = function(e) {
    e.parentElement.parentElement.remove();
}