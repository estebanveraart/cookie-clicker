import {achat} from "../assets/obj"

function gold(){

    // --------------------------------------------------------
    //                      GOLDS Click
    // --------------------------------------------------------

    let cluck = 0;
    let gold = 0;
    let goldpclick = 1;
    let minion = document.querySelector('.minionImage');
    let nbgolds = document.querySelector('.golds');

    minion.addEventListener("click", () => {

        cluck++;
        gold += goldpclick;
        nbgolds.textContent = gold;

        for (let i = 0; i < achat.length; i++) {
            
            if(cluck >= achat[i].min && cluck < achat[i].max){

                goldpclick = achat[i].goldclick;

            }
                
        }

       goldobjects();
       console.log(gold);

    })

    // --------------------------------------------------
    //                      GOLDS Objets
    // --------------------------------------------------

    let eplongue = document.querySelector('.eplongue');
    let dadentelee = document.querySelector('.dadentelee');
    let brillan = document.querySelector('.brillan');
    let bfglaive = document.querySelector('.bfglaive');
    let draktarr = document.querySelector('.draktarr');
    let muram = document.querySelector('.muram');
    let rabadonnn = document.querySelector('.rabadonnn');
    const buttons = [eplongue, dadentelee, brillan, bfglaive, draktarr, muram, rabadonnn];


    let eplongueG = document.querySelector('.eplongueG');
    let dadenteleeG = document.querySelector('.dadenteleeG');
    let brillanG = document.querySelector('.brillanG');
    let bfglaiveG = document.querySelector('.bfglaiveG');
    let draktarrG = document.querySelector('.draktarrG');
    let muramG = document.querySelector('.muramG');
    let rabadonnnG = document.querySelector('.rabadonnnG');
    const buttonsP = [eplongueG, dadenteleeG, brillanG, bfglaiveG, draktarrG, muramG, rabadonnnG];


    const goldobjects = () => {

        for (let i = 0; i < buttons.length; i++) {
            
            buttons[i].disabled = true;
    
            if(gold >= achat[i].prix){

                buttons[i].disabled = false;

            }

            buttons[i].addEventListener('click', () => {

                if(gold >= achat[i].prix){

                    gold -= achat[i].prix;
                    nbgolds.textContent = gold;
                    buttonsP[i].textContent = achat[i].prix + " => " + achat[i].goldd + achat[i].effet;

                    function goldppsec(){

                        gold += achat[i].goldd;

                    }

                    setInterval(goldppsec, 1000);

                    if(gold < achat[i].prix){

                        buttons[i].disabled = true;

                    }

                }

            })

        }
    
    }

}

export {gold}