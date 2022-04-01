/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var list = document.querySelector("#results");

var insertMovies = function insertMovies(data) {
  data.Search.forEach(function (result) {
    var movieTag = "<li class=\"list-group-item border-0\">\n      <img src=\"".concat(result.Poster, "\" alt=\"\" width=\"100\">\n    </li>");
    list.insertAdjacentHTML("beforeend", movieTag);
  });
};

var fetchMovies = function fetchMovies(query) {
  fetch("http://www.omdbapi.com/?s=".concat(query, "&apikey=adf1f2d7")).then(function (response) {
    return response.json();
  }).then(insertMovies);
};

fetchMovies("harry potter"); // on 1st page load

var form = document.querySelector("#search-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  list.innerHTML = "";
  var input = document.querySelector("#search-input");
  fetchMovies(input.value);
});
/******/ })()
;
//# sourceMappingURL=main.js.map