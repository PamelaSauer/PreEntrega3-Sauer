const workshops = JSON.parse(localStorage.getItem("workshops")) || []

const productsCreated = document.querySelector("#workshops")


workshops.forEach(workshop => {

    const card = document.createElement("div")
    card.className = "workshop";
    card.innerHTML = `
        <img src="./src/img/workshop.jpeg" alt="">
        <h3> ${workshop.name} </h3>
        <p> ${workshop.description} </p>
        <span> $ ${workshop.price} </span>
        <button id="btnBuy${workshop.id}"> Comprar </button>
        <button id="btnRemove${workshop.id}"> Eliminar </button>
        <input type="hidden" class="workshop-id" value="${workshop.id}">
        <input type="hidden" class="workshop-name" value="${workshop.name}">
        <input type="hidden" class="workshop-price" value="${workshop.price}">
                  `
    productsCreated.append(card)
})

const addToCartButton = document.querySelector(`#btnBuy${workshop.id}`)


addToCartButton.addEventListener("click", () => {
    const workshopCard = addToCartButton.parentNode 
    const workshopId = workshopCard.querySelector(".workshop-id").value
    const workshopName = workshopCard.querySelector(".workshop-name").value
    const workshopPrice = workshopCard.querySelector(".workshop-price").value
    addToCart(workshopId, workshopName, workshopPrice)
})



const addToCart = (id, name, price) => {
    const workshop = { id, name, price } 
    const existWorkshop = cart.find(el => el.id === id)
    if(existWorkshop) {
        existWorkshop.quantity++
    } else {
        workshop.quantity = 1
        cart.push(workshop)
    }
    updateCartView()
}

const updateCartView = () => {
    const cartView = document.querySelector("#cart-view")
    cartView.innerHTML = ""
    cart.forEach(el => {
        const cartItem = document.createElement("div")
        cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <span class="cart-item-name">${item.name}</span>
      <span class="cart-item-quantity">${item.quantity}</span>
      <span class="cart-item-price">$${item.price * item.quantity}</span>
    `
    cartView.appendChild(cartItem);
    })
}


 
