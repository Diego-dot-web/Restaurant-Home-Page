import ContactImage from './contactImage.jpg'

export function addContact(){
    const container = document.createElement("div")
    container.classList.add("contact");
    container.classList.add("hidden");

    const productImage = new Image()
    productImage.src = ContactImage

    const title = document.createElement("h1")
    title.textContent = "This Is Our Menu"
    title.classList.add("title")

    const description = document.createElement("p")
    description.textContent = "Connect with us at the crossroads of culinary excellence. Our doors are open to welcome you into a realm of gastronomic delight. Visit us at [Restaurant Name], where passion meets palate. For reservations and inquiries, reach us at [Phone Number] or drop a message at [Email Address]. Follow the aroma, follow the taste, and discover a world of extraordinary dining experiences."
    description.classList.add("description")

    document.body.appendChild(container)
    container.appendChild(title)
    container.appendChild(productImage)
    container.appendChild(description)
}