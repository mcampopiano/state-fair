const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("GameTicketPurchased", customEvent => {
        contentTarget.innerHTML += `<div class="person player"> </div>`
    })
}
