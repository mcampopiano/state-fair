const sideshowTarget = document.querySelector(".sideshow")
const foodTarget = document.querySelector(".food")
const gameTarget = document.querySelector(".games")
const rideTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("FullPackageTicketPurchased", customEvent => {
        sideshowTarget.innerHTML += `<div class="person gawker"></div>`
        rideTarget.innerHTML += `<div class="person rider"> </div>`
        gameTarget.innerHTML += `<div class="person player"> </div>`
        foodTarget.innerHTML += `<div class="person eater"> </div>`
    })
}