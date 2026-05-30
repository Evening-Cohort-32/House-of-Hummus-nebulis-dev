export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const veggieData = await response.json()

    const veggieHTML = veggieData.map(veggie => `
        <div>
            <input type='radio' name='veggie' value='${veggie.id}'/> ${veggie.type}
        </div>
    `).join("")
 
    return `<h2>Vegetables</h2>${veggieHTML}`
}
