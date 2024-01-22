import MenuImage from './menuImage.jpg'

export function addMenu(){
    const container = document.createElement("div")
    container.classList.add("menu");
    container.classList.add("hidden");

    const productImage = new Image()
    productImage.src = MenuImage

    const title = document.createElement("h1")
    title.textContent = "This Is Our Menu"
    title.classList.add("title")

    const description = document.createElement("p")
    description.textContent = "Our menu is a canvas of culinary artistry, blending global influences with local flair. Each dish is a meticulously curated masterpiece, showcasing the finest ingredients harmoniously united in a symphony of flavors. From vibrant appetizers that tantalize the senses to decadent main courses that redefine indulgence, our menu invites you on a journey of gastronomic discovery. Savor the fusion of tradition and innovation, where every plate tells a story, and every bite is a revelation of extraordinary taste."
    description.classList.add("description")



    document.body.appendChild(container)
    container.appendChild(title)
    container.appendChild(productImage)
    container.appendChild(description)

}