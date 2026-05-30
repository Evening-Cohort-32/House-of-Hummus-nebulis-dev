import { FoodTruck } from "./FoodTruck.js"
 
const mainContainer = document.querySelector("#container")
 
const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}
 
const handlePurchase = async () => {
    const getSelected = (name) => document.querySelector(`input[name="${name}"]:checked`)?.value
    
    const [entreeId, sideId, veggieId] = ["entree", "side", "veggie"].map(getSelected)
 
    if (!entreeId || !sideId || !veggieId) {
        return alert("Oops! It looks like your order is incomplete, please select an item from each column to make your order!")
    }
 
    const [entree, side, veggie] = await Promise.all(
        [entreeId, sideId, veggieId].map((id, i) => 
            fetch(`http://localhost:8088/${["entrees", "sides", "vegetables"][i]}/${id}`).then(r => r.json())
        )
    )
 
    const total = entree.price + side.price + veggie.price
 
    await fetch("http://localhost:8088/purchases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ total })
    })
 
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false)
    renderAllHTML()
}
 
renderAllHTML()
document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") handlePurchase()
})