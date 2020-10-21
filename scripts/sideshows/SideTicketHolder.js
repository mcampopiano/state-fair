const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideTicketHolders = () => {
    eventHub.addEventListener("SideTicketPurchased", customEvent => {
        contentTarget.innerHTML += `<div class="person gawker"></div>`
    })
}