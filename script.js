
const API_KEY = "HcXLlHB3JAI1U4BBrhUsC4Mu2Zl9Uhdt1YHYeGj0";

const queryInput = document.querySelector(".query-input");
const searchButton = document.getElementById('searchButton');

const getAstroData = () => {
    const inputDate = queryInput.value;
    if (inputDate === "") return;

    const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${inputDate}`;
    //https://api.nasa.gov/planetary/apod?api_key=HcXLlHB3JAI1U4BBrhUsC4Mu2Zl9Uhdt1YHYeGj0&date=2011-09-14
   
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        if (!data) return alert(`Request date might be out of date or invalid input`);
        localStorage.setItem('data', JSON.stringify(data));
        window.location.href = "detail.html";
        
    }).catch(() => {
        alert("An error occurred while fetching the data");
    });
}
document.addEventListener('DOMContentLoaded', function() {
    searchButton.addEventListener("click", getAstroData);
});


function displayStoredData() {
    const savedData = localStorage.getItem('data');
    const parsedData = JSON.parse(savedData);
    
    const dateElement = document.getElementById('date');
    const explanationElement = document.getElementById('explanation');
    const titleElement = document.getElementById('title');
    const urlElement = document.getElementById('url');
    
    dateElement.textContent = parsedData.date;
    explanationElement.textContent = parsedData.explanation;
    titleElement.textContent = parsedData.title;
    urlElement.innerHTML = `<img src="${parsedData.url}" alt="APOD Image">`;
}

window.addEventListener('load', displayStoredData);