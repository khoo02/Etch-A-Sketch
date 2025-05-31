// container reference to store cells
const container = document.querySelector("#grid-container");

// random color generator
function getRandomColor() {

    let values = "0123456789ABCDEF"; // valid characters
    let color = "#"; // color value starting with '#'

        // calculate hex value
        for (let i = 0; i < 6; i++) {

            // pick character using random index and append
            color += values[Math.floor(Math.random() * 16)];

        }

    // returns random hex value with 6 characters
    return color;
}

function createGrid(size) {

    // change background color
    container.style.background = "rgb(0,0,0)";

    // 16x16 grid in the dom
    for (let i = 0; i < size; i++) {
        
        // rows
        // add class list and append to container
        const row = document.createElement("div");
        row.classList.add("grid-row");
        container.appendChild(row);
    
        // columns
        for (let j = 0; j < size; j++) {
    
            // add class list and append to row
            const col = document.createElement("div");
            col.classList.add("grid-col"); // grid cell
            row.appendChild(col); 
    
            // set opacity to max
            let opacity = 1;
    
            // set up "hover" effect
            col.addEventListener("mouseover", function(e) {
    
                // if not colored, change then toggle flag
                if (!col.dataset.colored) {
    
                    // extra credit: randomize color
                    e.target.style.background = getRandomColor();
                    col.dataset.colored = "true";
    
                }
    
                // reduce opacity by 10% until 0%
                if (opacity > 0) {
                    
                    // reduce by 10%
                    opacity -= 0.1;
                    e.target.style.opacity = opacity;
    
                }   

                }
            )
        }
    }
}

// create initial 16x16 grid
createGrid(16);

// reference to controls
controls = document.querySelector("#controls");

// create button in dom and append
const button = document.createElement("button");
button.classList.add("button");
button.textContent = "Reset";
controls.appendChild(button);

// reset button
button.addEventListener("click", () => {

    // create prompt for grid size
    let newSize = prompt("Enter grid size (1-100):");

    // check user input
    if (newSize !== null) {
        
        // convert string to integer
        newSize = parseInt(newSize);

        // error check: integer between 0 and 100
        if(!isNaN(newSize) && (newSize > 0) && (newSize <= 100)) {

            // remove old grid
            container.innerHTML = "";
            
            // create new grid
            createGrid(newSize);

        } else {

            // error message
            alert("Please enter a number between 1 and 100");
        }

    }

})