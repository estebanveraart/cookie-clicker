
function click(){

    let click = 0;
    let minion = document.querySelector('.minionImage');
    let nbclick = document.querySelector('.click');

    minion.addEventListener("click", () => {
    
        click++ ;
        nbclick.textContent = click
        

    })

}

export{click};