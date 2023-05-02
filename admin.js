class Workshop {
    constructor(id, name, description, price){
        this.id = id
        this.name = name
        this.description = description
        this.price = parseFloat(price) 
    }
}

const workshops = JSON.parse(localStorage.getItem("workshops")) || []

const deleteWorkshop = (id) => {
    const deleteButton = document.querySelector("#btnDelete" + id)
    deleteButton.addEventListener("click", () => {
        const index = workshops.findIndex((el) => el.id == id)
        workshops.splice(index,1)
        localStorage.setItem("workshops", JSON.stringify(workshops))
        const productsCreated = document.querySelector("#workshop" + id)
        productsCreated.remove()
    })
}


const updateWorkshop = (id) => {
    const updateForm = document.querySelector("#edit" + id)
    updateForm.addEventListener("submit", () => {
        e.preventDefault()
        const data = e.target.children 
        const index = workshops.findIndex((el) => el.id == id)
        workshops[index].name = data["name"].value
        workshops[index].description = data["description"].value
        workshops[index].price = data["price"].value
        localStorage.setItem("workshops", JSON.stringify(workshops))
    })
}


const readWorkshop = (workshop) => {
    const productsCreated = document.querySelector("#workshops")
    const card = document.createElement("div")
        card.className = "workshop";
        card.id = "workshop" + workshop.id
        card.innerHTML = `
            <img src="./src/img/workshop.jpeg" alt="">
            <form class="edit" id="edit${workshop.id}">
                <input type="text" name="name" placeholder="${workshop.name}">
                <input type="text" name="description" placeholder="${workshop.description}">
                <input type="number" name="price" placeholder="${workshop.price}">
            </form>
            <button class="btn"> Editar </button>
            <button class="btn" id="btnDelete${workshop.id}"> Borrar </button>
                    `
        productsCreated.append(card)
        deleteWorkshop(workshop.id)
        updateWorkshop(workshop.id)
}

const addWorkshop = () => {
    const create = document.querySelector("#create")
    create.addEventListener("submit", (e) => {
        e.preventDefault()
        let idWorkshop = parseInt(localStorage.getItem("idWorkshop") || 0)
        const data = e.target.children
        const workshop = new Workshop(
            idWorkshop,
            data["name"].value, 
            data["description"].value, 
            data["price"].value,
            )
        workshops.push(workshop)
        localStorage.setItem("workshops",JSON.stringify(workshops))
        create.reset()
        idWorkshop++
        localStorage.setItem("idWorkshop",idWorkshop)
        readWorkshop(workshop)
    })
}

const readWorkshops = () => {
    workshops.forEach(workshop => {
        readWorkshop(workshop)
        
})
}

readWorkshops()
addWorkshop()




