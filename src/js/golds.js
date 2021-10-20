
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

        if(cluck >= 100 && cluck < 500){

            goldpclick = 5;

        }

        else if(cluck >= 500 && cluck < 2500){

            goldpclick = 25;

        }

        else if(cluck >= 2500 && cluck < 7500){

            goldpclick = 125

        }

        else if(cluck >= 7500 && cluck < 15000 ){

            goldpclick = 625

        }

        else if(cluck >= 15000 && cluck < 30000){

            goldpclick = 3125;

        }

        else if(cluck >= 30000 && cluck < 50000){

            goldpclick = 15625;

        }

        else if(cluck >= 50000 && cluck < 100000){

            goldpclick = 78125;

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
    const eplongueGo = [100, 500, 1500, 5000, 20000, 81000, 243000, 728800, "MAX"];
    const eplongueGoS = ["2 golds/s", "4 golds/s", "8 golds/s", "16 golds/s", "32 golds/s", "64 golds/s", "128 golds/s", "256 golds/s"];
    let E = 0;
    eplongueG.textContent = eplongueGo[E] + " => " + eplongueGoS[E];
    const goldpsec11 = [0, 2, 4, 8, 16, 32, 64, 128, 256];


    let dadenteleeG = document.querySelector('.dadenteleeG');
    const dadenteleeGo = [1000, 3000, 9000, 27000, 81000, 243000, 728800, 2000000, "MAX"];
    const dadenteleeGoS = ["6 golds/s", "12 golds/s", "24 golds/s", "48 golds/s", "96 golds/s", "192 golds/s", "384 golds/s", "768 golds/s"];
    let D = 0;
    dadenteleeG.textContent = dadenteleeGo[D] + " => " + dadenteleeGoS[D];
    const goldpsec22 = [0, 6, 12, 24, 48, 96, 192, 384, 768];



    let brillanG = document.querySelector('.brillanG');
    const brillanGo = [2000, 6000, 18000, 54000, 162000, 486000, 1457600, 4000000, "MAX"];
    let B = 0;
    brillanG.textContent = brillanGo[B];


    let bfglaiveG = document.querySelector('.bfglaiveG');
    const bfglaiveGo = [4000, 12000, 36000, 108000, 324000, 972000, 2915200, 8000000, "MAX"];
    let F = 0;
    bfglaiveG.textContent = bfglaiveGo[F];


    let draktarrG = document.querySelector('.draktarrG');
    const draktarrGo = [8000, 24000, 72000, 216000, 648000, 1918000, 5830400, 16000000, "MAX"];
    let K = 0;
    draktarrG.textContent = draktarrGo[K];


    let muramG = document.querySelector('.muramG');
    const muramGo = [16000, 48000, 144000, 432000, 1298000, 2836000, 11660800, 32000000, "MAX"];
    let M = 0;
    muramG.textContent = muramGo[M];


    let rabadonnnG = document.querySelector('.rabadonnnG');
    const rabadonnnGo = [32000, 96000, 288000, 864000, 2596000, 5672000, 23321600, 64000000, "MAX"]
    let R = 0;
    rabadonnnG.textContent = rabadonnnGo[R];


    const goldobjects = () => {

        for (let i = 0; i < buttons.length; i++) {
            
            buttons[i].disabled = true;
    
        }

        if(gold >= eplongueGo[E]){

            eplongue.disabled = false;
        
        }
        
        eplongue.addEventListener("click", () => {

            if(gold >= eplongueGo[E]){

                gold -= eplongueGo[E];
                nbgolds.textContent = gold;
                E++;
                eplongueG.textContent = eplongueGo[E] + " => " + eplongueGoS[E];

                function goldpsec1(){

                    gold += goldpsec11[E];

                }

                setInterval(goldpsec1, 1000);

                if(gold < eplongueGo[E]){

                    eplongue.disabled = true;

                }
            
            }

            

        })

        if(gold >= dadenteleeGo[D]){

            dadentelee.disabled = false;
        
        }
        
        dadentelee.addEventListener("click", () => {

            if(gold >= dadenteleeGo[D]){

                gold -= dadenteleeGo[D];
                nbgolds.textContent = gold;
                D++;
                dadenteleeG.textContent = dadenteleeGo[E] + " => " + dadenteleeGoS[E];

                function goldpsec2(){

                    gold += goldpsec22[E];

                }

                setInterval(goldpsec2, 1000);

                if(gold < dadenteleeGo[E]){

                    dadentelee.disabled = true;

                }
            
            }

        })
    
    }

}

export {gold}