const items = document.getElementById('items');
const loader = document.getElementById('loader');

let addItem = ((code, value) => {
    
    let template = document.createElement('div');
    template.classList.add('item');

    const itemCode = document.createElement('div');
    itemCode.className = 'item__code';
    itemCode.innerHTML = code;

    const itemValue = document.createElement('div');
    itemValue.className = 'item__value';
    itemValue.innerHTML = value;

    const itemCurrency = document.createElement('div');
    itemCurrency.className = 'item__currency';
    itemCurrency.innerHTML = 'руб';

    template.appendChild(itemCode);
    template.appendChild(itemValue);
    template.appendChild(itemCurrency);

    return template;
});

let request = new XMLHttpRequest();
request.addEventListener('load', onLoad);
request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);
request.send();

function onLoad() {
    if (request.readyState === 4 && request.status === 200) {
        foo(JSON.parse(request.responseText));
    } else if (request.readyState !== 4 && request.status !== 200) {
        console.log(`Ответ ${request.status}: ${request.statusText}`);
    }
}

function foo(data) {
    let valuteList = data.response.Valute;
    
    for (let k in valuteList) {
        items.appendChild(addItem(valuteList[k].CharCode, valuteList[k].Value));
    };
    loader.classList.remove('loader_active');
}