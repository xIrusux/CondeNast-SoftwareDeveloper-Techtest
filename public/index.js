(() => {
  console.log("function called");
  let countryElements = document.querySelectorAll(".country-select");
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

let addDom = obj => {
  let articleElements = document.querySelector(".articles-display");
  let article = document.createElement("article");
  let headline = document.createElement("h2");
  let image = document.createElement("img");
  let text = document.createElement("p");
  let articleURL = document.createElement("a");

  headline.textContent = obj.title;
  image.src = obj.urlToImage;
  text.textContent = obj.description;
  articleURL.href = obj.url;

  articleElements.appendChild(article);
  article.appendChild(articleURL);
  articleURL.appendChild(headline);
  article.appendChild(image);
  article.appendChild(text);
};
