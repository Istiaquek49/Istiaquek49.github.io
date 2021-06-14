let numRows = 1;
let numCols = 1;
let colorSelected;

function AddRow() 
{
    let thisGrid = document.getElementById("grid")//sets up the grid in the dom
    let addRow = document.createElement("tr")
    if (numCols === 0)//if its equal to 0 creates a box
    { 
        let box = document.createElement("td");
        box.onclick = function ()
        {
            this.style.backgroundColor = document.getElementById("colorchooser").value;
        };
        addRow.appendChild(box);
        numCols++;
    } else { 
        for (let i = 0; i < numCols; i++)//adds the column to the rows
        {
            let box = document.createElement("td");
            box.onclick = function ()
            {
                this.style.backgroundColor = document.getElementById("colorchooser").value;
            };
            addRow.appendChild(box);
        }
    }
    thisGrid.appendChild(addRow);//appends and increases
    numRows++;
}

function AddColumn() 
{
    let thisGrid = document.getElementById("grid");//sets up the grid in the dom
    let allRows = document.querySelectorAll("tr");
    let numberRows = 0;
    for(let i = 0; i < numRows; i++) 
    {
        let box = document.createElement("td");
        box.onclick = function ()
        {
            this.style.backgroundColor = document.getElementById("colorchooser").value;
        };
        allRows[numberRows].appendChild(box);
        numberRows++;
    }
    numCols++;
}

function RemoveRow() 
{
    let thisGrid = document.getElementById("grid");//takes the grid
    thisGrid.deleteRow(numRows-1);//deletes the last row
    numRows--;
}

function RemoveColumn() 
{
    let thisGrid = document.getElementById("grid");//takes the grid
    let allRows = document.querySelectorAll("tr");
    let numberRows = 0;
    for(let i = 0; i < numRows; i++) //removes the last column
    {
        allRows[numberRows].removeChild(allRows[numberRows].lastChild);
        numberRows++;
    }
    numCols--;//column minus by 1
}

function fillAll()
{
    let color = document.getElementById("colorchooser").value;//stores one color 
    let allgrids = document.querySelectorAll('td').forEach(td => td.style.backgroundColor = color);//takes all grids and changes color to one
}

function FillAllUncolored()
{
    let color = document.getElementById("colorchooser").value;//takes the grid
    let table = document.querySelectorAll('td').forEach(td => {
        if(td.style.backgroundColor == "" || td.style.backgroundColor == "white")//if the box is white or empty
        {
            td.style.backgroundColor = color;//fills the all the boxes with the color
        }
    });
}

function Clear() {
    let clearcolor = document.querySelectorAll('td').forEach(td => td.style.backgroundColor = "");//turns all grids color blank
}