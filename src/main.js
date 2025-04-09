import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, hideLoader, showLoader } from "./js/render-functions";

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const query = event.target.elements["search-text"].value.trim();
    
    showLoader();
    clearGallery();



    getImagesByQuery(query).then((response) => {
        if(response.data.hits.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            })
            return;
        }
        createGallery(response.data.hits);        
    }
        )
        .catch((error) => iziToast.error({
            message:"Что то пошло не так",
            position: "topRight"
        }))
       .finally(() => hideLoader())
}


