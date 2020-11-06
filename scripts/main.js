import { FoodTicketHolders } from "./food/FoodTicketHolder.js"
import { FullPackageTicketHolders } from "./fullPackage/FullTicketHolders.js"
import { GameTicketHolders } from "./games/GameTicketHolder.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { SideTicketHolders } from "./sideshows/SideTicketHolder.js"
import { TicketBooth } from "./TicketBooth.js"

// Import and invoke the ticket booth component function
TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideTicketHolders()
FullPackageTicketHolders()