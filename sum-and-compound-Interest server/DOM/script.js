// const principal = parseFloat(document.getElementById("numOne").value)
// const rate = parseFloat(document.getElementById("numTwo").value)
// const years = parseFloat(document.getElementById("numThree").value)

// const result = document.querySelectorAll(".finalRes");

// function populateDiv() {
    
//     fetch(`http://localhost:8080/interest?p=${principal}&r=${rate}&n=${years}`)
//         .then(function(response){
//             response.text()
//                 .then(function(ans){
//                     document.getElementById("finalRes").innerHTML = ans;
//                 })
//         })
//         .catch(function(error) {
//             console.log('Error fetching data:', error);
//         })
// }

async function populateDiv() {
    const principal = document.getElementById("numOne").value;
    const rate = document.getElementById("numTwo").value;
    const years = document.getElementById("numThree").value;

    // Check if the input values are not empty
    // if (principal !== "" && rate !== "" && years !== "") {
        // Parse the input values as integers
        const p = parseInt(principal);
        const r = parseInt(rate);
        const n = parseInt(years);

        await fetch(`http://localhost:8080/interest?p=${p}&r=${r}&n=${n}`)
            .then(function(response){
                return response.text()
                    .then(function(ans){
                        document.getElementById("finalRes").innerHTML = ans;
                    })
            })
            
    // } 
}



// Clear the result if any input field is empty
