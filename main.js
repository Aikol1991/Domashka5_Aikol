const som = document.querySelector('#som');
const usd =document.querySelector('#usd');
const eur = document.querySelector('#eur');


const convert = (elem, target1, target2) => {
    elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        target1.forEach(e => {
            target2 === "som" ?
                e.value = (elem.value / data[e.id]).toFixed(2)
                : e === som ?
                e.value = (elem.value * data[elem.id]).toFixed(2)
                : e.value = ((elem.value * data[elem.id]) / data[e.id]).toFixed(2)
        });
        elem.value === "" && (target1.forEach(e => e.value = ""))
    })
    });
};

convert(som, [usd, eur], "som");
convert(usd, [som, eur]);
convert(eur, [som, usd]);

// som.addEventListener("input", (e) =>{
//     console.log(e.target.value);
//     const request = new XMLHttpRequest();
//     request.open("GET", "data.json");
//     request.setRequestHeader("Content-Type", "application/json");
//     request.send();
//     request.addEventListener("load", () => {
//         console.log(request.response);
//         const data = JSON.parse(request.response);
//         console.log(data);
//         usd.value = (e.target.value / data.usd).toFixed(2);
//         eur.value = (e.target.value / data.eur).toFixed(2);
//     });
// });