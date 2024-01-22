import './style.css';
import ByeMeow from './byeMeow.jpg';

export function loadMain (){
    const container = document.querySelector(".content");
    const productImage = new Image()
    productImage.src = ByeMeow

    const title = document.createElement("h1")
    title.textContent = "This Amazing Restaurant"
    title.classList.add("title")

    const description = document.createElement("p")
    description.textContent = "Nestled within the heart of culinary innovation, our restaurant is a symphony of flavors that dance on the palate, orchestrated by masterful chefs who transform the ordinary into the extraordinary. The ambiance, a tapestry of modern elegance and warmth, invites you into a world where each dish is a culinary masterpiece, crafted with precision and passion. Immerse yourself in a gastronomic journey where every bite tells a story, and every moment is a celebration of exquisite taste and unparalleled dining experiences."
    description.classList.add("description")

    
    container.appendChild(title)
    container.appendChild(productImage)
    container.appendChild(description)
}
