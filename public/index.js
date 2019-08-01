import { createBrotliCompress } from "zlib";

(() => {
  console.log("function called");
  let countryElements = document.querySelectorAll(".country-select");
  let articleElements = document.querySelectorAll(".artciles-display");
  countryElements.forEach(elem => {
    elem.addEventListener("click", () => {
      let countryCode = elem.dataset.country;
      apiCall(countryCode);
    });
  });
})();
let apiCall = countryCode => {
  let xhr = new XMLHttpRequest();
  xhr.onload = response => {
    const newsObject = JSON.parse(xhr.responseText);
    var topThree = newsObject.splice(0, 3);
    topThree.forEach(elem => addDom(elem));
  };
  xhr.open("GET", `/search?${countryCode}`, true);
  xhr.send();
};

var addDom = obj => {};
