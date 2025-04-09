import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "49673705-a6e36a8adce307eb03930fb9e";

export function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };
    const response = axios.get(BASE_URL, { params });
    return response;
}