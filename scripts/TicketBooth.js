const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", e => {
    if (e.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
})
eventHub.addEventListener("click", e => {
    if (e.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
})
eventHub.addEventListener("click", e => {
    if (e.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("GameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    }
})
eventHub.addEventListener("click", e => {
    if (e.target.id === "sideTicket") {
        const sideEvent = new CustomEvent("SideTicketPurchased")
        eventHub.dispatchEvent(sideEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideTicket">Sideshow Ticket</button>
        </div>
    `
}

