export const sideDishes = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sideData = await response.json()

    const sideHTML = sideData.map(side => `
        <div>
            <input type='radio' name='side' value='${side.id}'/> ${side.title}
        </div>
    `).join("")

    return `<h2>Sides</h2>${sideHTML}`
}


