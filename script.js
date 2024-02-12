// let datalist = document.getElementById('exampleDataList')
// let datalistValues = document.querySelectorAll('#datalistOptions > option')

// let listOfValues = []

// datalistValues.forEach(element => {
//     listOfValues.push(element.value)
// });


// datalist.onchange = function (event) {
//         if(listOfValues.includes(datalist.value)) {
//             console.log(datalist.value);
//         }else {
//             console.log("Doesn't exists!");
//         }
// }

// try Seletct data extraction

let selectInput = document.getElementById('cities')



selectInput.addEventListener("change", function (e) {
    console.log(selectInput.value);
})





