let totalColumns = 16;
let totalRows = 16;
let container = document.getElementById('container');
container.style.setProperty('grid-template-columns', `repeat(${totalColumns}, 1fr)`);
container.style.setProperty('grid-template-columns', `repeat(${totalRows}, 1fr)`);


function makeColumn(){
    let divContain = document.querySelector('#container');
    for(let i=0;i<totalColumns;i++){
        var newDiv = document.createElement('div');
        newDiv.className = 'gridMember';
        divContain.appendChild(newDiv);
    }
}

function makeRows(){
    for(let i=0;i<totalRows;i++){
        makeColumn();
    }
}

makeRows();



function changeColor(grid){
    let getDiv = document.getElementsByClassName('gridMember');
    console.log(getDiv.length)
    for(let i=0; i<getDiv.length;i++){
        getDiv[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'purple';
        });
        // getDiv[i].addEventListener('mouseout', function(event){
          //    event.target.style.backgroundColor = 'aqua';
        //});
    }
}


let divGrid = document.querySelector('#container');
changeColor(divGrid);

let responsiveWindow = window.matchMedia("(max-width: 600px) (max-width: 400px) (width === 360)");
function makeResponsive(responsiveWindow){
    if(responsiveWindow.matches){
        changeColor(divGrid);
    }
}

function resetBoard(){
    let gridCaller = document.getElementsByClassName('gridMember');
    let resetButton = document.querySelector('.button');

    resetButton.addEventListener('click', function(){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        totalColumns = totalRows = prompt('Enter number of columns for next grid(must be smaller than 100):'); 
        console.log(totalColumns);
        console.log(totalRows);

        //update css so that size of grid matches user input
        container.style.setProperty('grid-template-columns', `repeat(${totalColumns}, 1fr)`);
        container.style.setProperty('grid-template-columns', `repeat(${totalRows}, 1fr)`);


        makeRows();
        changeColor(divGrid);
    })

}


resetBoard();



