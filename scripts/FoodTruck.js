import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { sideDishes } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreeHTML = await Entrees()
    const sideHTML = await sideDishes()
    const veggieHTML = await Veggies()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>


        <section class="choices">
            <article>
                ${entreeHTML}
            </article>

            <article>
                ${sideHTML}
            </article>

            <article>
                ${veggieHTML}
            </article>
        </section>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
