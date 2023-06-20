import { getEmployees, getOrders } from "./database.js"

const orders = getOrders()
const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

const employeeOrders = (employees) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === employees.id) {
            fulfilledOrders++
        }
    }
    return fulfilledOrders
}

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")) {

            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {

                if (employee.id === parseInt(employeeId)) {

                    const orderCount = employeeOrders(employee);
                    

                    window.alert(`${employee.name} sold ${orderCount} products`)
                }

            }

        }

    }
)
