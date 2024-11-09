const currencyFirst = document.getElementById('currency-first');
const worthFirst = document.getElementById('worth-first');
const currencySecond = document.getElementById('currency-second');
const worthSecond = document.getElementById('worth-second');
const convertResult = document.getElementById('convert-result');

changeRate()

function changeRate() {
    fetch(`https://v6.exchangerate-api.com/v6/c2f9fa8874900a7969936e23/latest/${currencyFirst.value}`)
        .then((res) => res.json())
        .then((data) => {
            const rates = data.conversion_rates[currencySecond.value]
            convertResult.innerText = `1 ${currencyFirst.value} = ${ rates + " " +  currencySecond.value}`;

            worthSecond.value = (worthFirst.value * rates).toFixed(3)
        });

}

currencyFirst.addEventListener("change", changeRate);
worthFirst.addEventListener("input",changeRate);
