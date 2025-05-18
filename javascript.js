// create container reference to store cells
const container = document.querySelector("#grid-container");

// create 16x16 grid in the dom
for (let i = 0; i < 16; i++) {
    
    // rows
    const row = document.createElement("div");

        row.classList.add("grid-row");
        // row.textContent = "row " + i;
        container.appendChild(row);

    // columns
    for (let j = 0; j < 16; j++) {

        const col = document.createElement("div");

            col.classList.add("grid-col");

            // name each cell
            // col.textContent = "column [" + i + "," + j + "]";
            row.appendChild(col); 

            // set up "hover" effect
                // add event listener to reference
                // change color when mouse hovers

    }

}

