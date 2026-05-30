export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entreeData = await response.json()

   const entreeHTML = entreeData.map(entree => `
        <div>
            <input type='radio' name='entree' value='${entree.id}'/> ${entree.name}
        </div>
    `).join("")
 
    return `<h2>Entrees</h2>${entreeHTML}`
}