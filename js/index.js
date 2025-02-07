import { fetchData } from "./fetch_data.module.js";

const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=SPfb2CGEpfBTyoVcZihUa0l62N1fPPDYgsvEi2MQ';
fetchData(apiUrl);