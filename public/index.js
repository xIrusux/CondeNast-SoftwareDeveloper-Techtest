(() => {
    console.log("function called");
    let countryElements = document.querySelectorAll(".country-select");

    countryElements.forEach((elem) => {
        elem.addEventListener('click', () => {
            let countryCode = elem.dataset.country;
            apiCall(countryCode);
        })
    })
}
)();
let apiCall = (countryCode) => {
    console.log(countryCode);

    let xhr = new XMLHttpRequest();
    xhr.onload = response => {
        const newsObject = JSON.parse(xhr.responseText);
        console.log(newsObject);
    }
    xhr.open("GET", `/search?${countryCode}`, true);
    xhr.send();
}