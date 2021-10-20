
function gold(){

    let cluck = 0;
    let gold = 0;
    let minion = document.querySelector('.minionImage');
    let nbgolds = document.querySelector('.golds');

    minion.addEventListener("click", () => {

        if(cluck < 100){

            cluck++;
            gold++;
            nbgolds.textContent = gold;

        }

        else if(cluck >= 100 && cluck < 500){

            cluck++;
            gold = gold +5;
            nbgolds.textContent = gold;
        }

        else if(cluck >= 500 && cluck < 2500){

            cluck++;
            gold = gold + 50;
            nbgolds.textContent = gold;

        }

        else if(cluck >= 2500 && cluck < 7500){

            cluck++;
            gold = gold + 500;
            nbgolds.textContent = gold;

        }

        else if(cluck >= 7500 && cluck < 15000 ){

            cluck++;
            gold = gold + 2000;
            nbgolds.textContent = gold;

        }

        else if(cluck >= 15000 && cluck < 30000){

            cluck++;
            gold = gold + 5000;
            nbgolds.textContent = gold;

        }

        else if(cluck >= 30000 && cluck < 50000){

            cluck++;
            gold = gold + 50000;
            nbgolds.textContent = gold;

        }

        else if(cluck >= 50000 && cluck < 100000){

            cluck++;
            gold = gold + 500000;
            nbgolds.textContent = gold;

        }

    })

}

export {gold}