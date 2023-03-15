let standOpen = 6;
let standClose = 20; // closing in military time
let hoursOpen = standClose - standOpen;
let stores = [];

function CookieLocation(standLocation, minCust, maxCust, avgSale) {
  this.location = standLocation;
  this.min = minCust;
  this.max = maxCust;
  this.avgSale = avgSale;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesSold = 0;
  console.log(this, stores);
  stores.push(this); // all new stores, are pushed into stores array

  // return statement is implied with a constructor function
}

// prototype method because connected to an object.
CookieLocation.prototype.randomCustomers = function(){
  let min = Math.ceil(this.min);
  let max = Math.floor(this.max);
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum; // sometimes we don't want to change / mutate "this" and just return a value.
};

// this methods mutates this, so no value needs to be returned
CookieLocation.prototype.dailyCookiesSold = function(){
  // for loop
  for (let i = standOpen; i <= standClose; i++) {
    let customers = this.randomCustomers();
    this.customersPerHour.push(customers);
    let cookies = Math.round(customers * this.avgSale);
    this.cookiesPerHour.push(cookies);
    this.totalCookiesSold += cookies;
  } //end for loop
};

CookieLocation.prototype.render = function(){
  // this.createHeader();
  let table = document.getElementById('dataTable');
  let tbody = document.createElement('tbody');

  table.appendChild(tbody);
  let dataRow = document.createElement('tr');
  table.appendChild(tbody);

  let tableData = document.createElement('td');
  tbody.appendChild(dataRow);
  tableData.textContent = this.location;
  dataRow.appendChild(tableData);

  let cookiesPerHour = this.cookiesPerHour;
  // goes through cookiesPerHour array, assigns a variable "cookie" for each item in the array.
  cookiesPerHour.forEach(cookie => {
    let tableDataCookies = document.createElement('td');
    tableDataCookies.textContent = cookie;
    dataRow.appendChild(tableDataCookies);
    console.log(dataRow, tableDataCookies);
  });

  let totalCookiesSold = this.totalCookiesSold;
  let tableDataTotal = document.createElement('td');
  tableDataTotal.textContent = totalCookiesSold;
  // tableDataTotal.style='font-weight: 600; list-style:none; padding: 10px 0;';
  dataRow.appendChild(tableDataTotal);
};

function displayTableHeader(){
  //looks for the table by id='dataTable'
  let table = document.getElementById('dataTable');
  // creates a <thead> element to store the header
  let thead = document.createElement('thead');
  // creates <tr> to hold each time cell
  let headerRow = document.createElement('tr');

  //Add the <thead> to the <table>
  table.appendChild(thead);

  //add headerRow <tr> to the <thead>
  thead.appendChild(headerRow);

  //creates a blank <th> variable so i can put it before the times
  let blankTh = document.createElement('th');

  // add blank <th> to <tr>
  headerRow.appendChild(blankTh);

  // for loop that generates the time based on what time a location opens and what time it closes. If using an array, you would just set i = 0; i <= array.length and loop through your array.
  for (let i = standOpen; i <= standClose; i++) {
    // create <th>
    let thead = document.createElement('th');

    //give <th> a value
    if (i === 12) {
      thead.textContent = `${i}pm`;
    } else if (i > 12) {
      thead.textContent = `${i - 12}pm`;
    } else {
      thead.textContent = `${i}am`;
    }
    //add <th> to the <tr>
    headerRow.appendChild(thead);
  }
  // create a cell/column to store the totals
  let totalHeader = document.createElement('th');

  // give the header the Total Value
  totalHeader.textContent = 'Total';
  // this just gives it style
  // totalHeader.style='font-weight: 600; list-style:none; padding: 10px 0;';
  // adds the total column after all the times from the for-loop
  headerRow.appendChild(totalHeader);
}

function displayTableBody(){
  for (let i = 0; i < stores.length; i++){
    let store = stores[i];
    store.dailyCookiesSold();
    store.render();
  }
}

function displayTableFooter(){
  console.log('tableFooter');
  let table = document.getElementById('dataTable');

  let tfoot = document.createElement('tfoot');
  let footerRow = document.createElement('tr');

  table.appendChild(tfoot);
  tfoot.appendChild(footerRow);

  let totalFooter = document.createElement('td');

  totalFooter.textContent = 'Total';
  // totalFooter.style='font-weight: 600; list-style:none; padding: 10px 0;';
  footerRow.appendChild(totalFooter);

  let grandTotal = 0;

  // while the hour is less than the hours open
  let h = 0;
  while (h <= hoursOpen){
    let hourlyTotal = 0; // resets the hourlyTotal to zero after each iteration

    for (let i = 0; i < stores.length; i++){
      hourlyTotal += stores[i].cookiesPerHour[h]; //hourlyTotal starts at 0 because of code on line 143.
      grandTotal += stores[i].cookiesPerHour[h]; //keeps running total because we do not reset grandTotal = 0 anywhere in for or while loop.
    }
    let tableFooterTotal = document.createElement('td');
    tableFooterTotal.textContent = hourlyTotal;
    // tableFooterTotal.style='font-weight: 600; list-style:none; padding: 10px 0;';
    footerRow.appendChild(tableFooterTotal);

    h++;
  }

  let grandTotalFooter = document.createElement('td');
  grandTotalFooter.textContent = grandTotal;
  // grandTotalFooter.style='font-weight: 600; list-style:none; padding: 10px 0;';
  footerRow.appendChild(grandTotalFooter);
}

let seattle = new CookieLocation('Seattle', 23, 65, 6.3);
let tokyo = new CookieLocation('Tokyo', 3, 24, 1.2);
let dubai = new CookieLocation('Dubai', 11, 38, 3.7);
let paris = new CookieLocation('Paris',20,38,2.3);
let lima = new CookieLocation('Lima', 2, 16, 4.6);

displayTableHeader();
displayTableBody();
displayTableFooter();
