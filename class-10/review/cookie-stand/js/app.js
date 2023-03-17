`use strict`;

const allStores = []
const allStoresCookies = 0
const tableBodyEl = document.getElementById('table-values')
const tableHeadEl = document.getElementById('table-head')
const tableFootEl = document.getElementById('table-foot')
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm",
"1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

function renderElement(elementName, textToAdd, elementToAddTo) {
    const element = document.createElement(elementName);
    element.textContent = textToAdd;
    elementToAddTo.appendChild(element);
}

function Locations(name, minCust, maxCust, avgCookie){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.hourlyCust = [];
    this.hourlyCookie = [];
    this.totalCookies = [];
    allStores.push(this);
}

Locations.prototype.getRNGcust = function(minCust, maxCust) {
    for(i = 0; i < hours.length; i++){        
        this.hourlyCust.push((Math.round(Math.random() * (this.maxCust - this.minCust)) + this.minCust))
        
    }
}

Locations.prototype.getHourlyCook = function(avgCookie, hourlyCust){
    for(i = 0; i < hours.length; i++){
        this.hourlyCookie.push((Math.ceil(this.hourlyCust[i] * this.avgCookie)))
    }
}

Locations.prototype.getTotalCookie = function(hourlyCookie, totalCookies){
    this.totalCookies.push(this.hourlyCookie.reduce((hourlyCookie, totalCookies) => hourlyCookie + totalCookies, 0))
}

Locations.prototype.drawRow = function() {
    const tableRow = document.createElement('tr');
    tableBodyEl.appendChild(tableRow);
    const tableData = document.createElement('td')
    tableData.textContent = this.name;
    tableRow.appendChild(tableData);
    for(i = 0; i < hours.length; i++){
        const tableData = document.createElement('td');
        tableData.textContent = this.hourlyCookie[i];
        tableRow.appendChild(tableData);
    }
    const tableCookies = document.createElement('td')
    tableCookies.textContent = this.totalCookies
    tableRow.appendChild(tableCookies)
}

hourlyRow = function(){
    const tableHead = document.createElement('tr');
    tableHeadEl.appendChild(tableHead);
    const headData = document.createElement('th');
    headData.textContent = this.none;
    tableHead.appendChild(headData);
    for(i = 0; i < hours.length; i++){
    const headData = document.createElement('th');
    headData.textContent = hours[i];
    tableHead.appendChild(headData);
    };
    const headTotal = document.createElement('th');
    headTotal.textContent = "Daily Location Total";
    tableHead.appendChild(headTotal);
}

totalsRow = function(){
    const footer = document.getElementById('table-foot');
    footer.innerHTML = '';
    const tableFoot = document.createElement('tr');
    tableFootEl.appendChild(tableFoot);
    const footData = document.createElement('td');
    footData.textContent = "Totals";
    tableFoot.appendChild(footData);
    let h = 0;
    let grandTotal = 0;
    while (h < hours.length){
        let hourlyTotal = 0;
        for(i = 0; i < allStores.length; i++){
            hourlyTotal += allStores[i].hourlyCookie[h];
            grandTotal += allStores[i].hourlyCookie[h];
        }
        const hourTotal = document.createElement('td');
        hourTotal.textContent = hourlyTotal;
        tableFoot.appendChild(hourTotal);
        h++;
    }
    const totalTotal = document.createElement('td');
    totalTotal.textContent = grandTotal;
    tableFoot.appendChild(totalTotal);
}

runMath = function(store){
    store.getRNGcust();
    store.getHourlyCook();
    store.getTotalCookie();    
}

let submitEl = document.getElementById('submit-button')
let formEl = document.getElementById('store-form')

formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Store added');
    // what is the event.target?
    let { store_city, store_min, store_max, store_avg } = event.target;
    let newStore = new Locations(
        store_city.value,
        parseInt(store_min.value),
        parseInt(store_max.value),
        parseInt(store_avg.value),
    )
    runMath(newStore)
    newStore.drawRow();
    console.log(allStores)
    totalsRow();
});

let seattleStore = new Locations("Seattle", 23, 65, 6.3);
let tokyoStore = new Locations("Tokyo", 3, 24, 1.2);
let dubaiStore = new Locations("Dubai", 11, 38, 3.7);
let parisStore = new Locations("Paris", 20, 38, 3.7);
let limaStore = new Locations("Lima", 2, 16, 4.6);

for(let i = 0; i < allStores.length; i++){
    runMath(allStores[i])
}
console.log(allStores);
for (let i = 0; i < allStores.length; i++){
    allStores[i].drawRow();
};
hourlyRow();
totalsRow();