async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=SPfb2CGEpfBTyoVcZihUa0l62N1fPPDYgsvEi2MQ';
fetchData(apiUrl);