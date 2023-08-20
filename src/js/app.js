import * as libraryJquery from "./modules/jqury.js";
import * as library from "./modules/library.js";
import * as flsFunction from "./modules/function.js";
import * as searchHeader from "./modules/search.js";
import * as menuOpen from "./modules/menu.js";
import * as sliders from "./modules/slider.js";
import * as popup from "./modules/popup.js";
import * as loadMore from "./modules/loadMore.js";


flsFunction.isWebp();
libraryJquery.jQuery();
library.mansory();

searchHeader.search();
menuOpen.burgerMenu();
sliders.slider();
popup.modal();
loadMore.loadMore();


function imageGallery(){
    let img = document.querySelectorAll(".btn-image img");
    img.forEach(image =>{
        image.onclick = () =>{
            document.querySelector(".popup-image").style.display = "block";
            document.querySelector(".popup-image img").src = image.getAttribute("src");
        }
        
    });
    console.log(img)
    document.querySelector(".popup-image span").onclick = () =>{
        document.querySelector(".popup-image").style.display = "none";
    }
}
imageGallery()