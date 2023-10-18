function createGames(player1, time, player2){
    return`
        <li>
            <img class="icons" src="./assets/icon_${player1}.svg" alt=" ${player1} icon.">
            <strong>${time}</strong>
            <img class="icons" src="./assets/icon_${player2}.svg" alt="${player2} icon.">
            
        </li>
    `
}

let delay = -0.4;
function createCard(date, day, games){
    delay += 0.4; 
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
                <ul>
                    ${games}
                </ul>
            </div>
    `
}

document.querySelector("#cards").innerHTML = 
        createCard("24/11","quinta",
            createGames("switzerland","06:00","cameroon")+
            createGames("uruguay","09:00","south_korea")+
            createGames("portugal","12:00","ghana")+
            createGames("brazil","15:00","serbia"))+
        createCard("28/11","segunda",
            createGames("cameroon","06:00","serbia")+
            createGames("south_korea","09:00","ghana")+
            createGames("brazil","12:00","switzerland")+
            createGames("portugal","15:00","uruguay"))+
        createCard("02/12","sexta",
            createGames("south_korea","11:00","portugal")+
            createGames("ghana","11:00","uruguay")+
            createGames("serbia","15:00","switzerland")+
            createGames("brazil","15:00","cameroon"))
        
