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
                  `
    productsCreated.append(card)
})

