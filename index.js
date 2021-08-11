let us_info = document.createElement("div");
us_info.setAttribute("class", "us_info");

let us_flag = document.createElement("img");
us_flag.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg");

us_info.innerHTML = `<h3>USA</h3>
<p><b>Population: </b>56,876,456</p>
<p><b>Capital: </b>Washington</p>
<p><b>Region: </b>North America</p>
`

let us_container = document.createElement("div");
us_container.setAttribute("class", "us_container");
us_container.append(us_flag, us_info);

document.body.append(us_container);



let canada_info = document.createElement("div");
canada_info.setAttribute("class", "canada_info");

let canada_flag = document.createElement("img");
canada_flag.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg");

canada_info.innerHTML = `<h3>CANADA</h3>
<p><b>Population: </b>56,876,456</p>
<p><b>Capital: </b>Ottawa</p>
<p><b>Region: </b>North America</p>
`

let canada_container = document.createElement("div");
canada_container.setAttribute("class", "canada_container");
canada_container.append(canada_flag, canada_info);

document.body.append(canada_container);




let mexico_info = document.createElement("div");
mexico_info.setAttribute("class", "mexico_info");

let mexico_flag = document.createElement("img");
mexico_flag.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg");

mexico_info.innerHTML = `<h3>MEXICO</h3>
<p><b>Population: </b>56,876,456</p>
<p><b>Capital: </b>Mexico City</p>
<p><b>Region: </b>North America</p>
`

let mexico_container = document.createElement("div");
mexico_container.setAttribute("class", "mexico_container");
mexico_container.append(mexico_flag, mexico_info);

document.body.append(mexico_container);



let greenland_info = document.createElement("div");
greenland_info.setAttribute("class", "greenland_info");

let greenland_flag = document.createElement("img");
greenland_flag.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg");

greenland_info.innerHTML = `<h3>GREENLAND</h3>
<p><b>Population: </b>56,876,456</p>
<p><b>Capital: </b>Nuuk</p>
<p><b>Region: </b>North America</p>
`

let greenland_container = document.createElement("div");
greenland_container.setAttribute("class", "greenland_container");
greenland_container.append(greenland_flag, greenland_info);

document.body.append(greenland_container);




let haiti_info = document.createElement("div");
haiti_info.setAttribute("class", "haiti_info");

let haiti_flag = document.createElement("img");
haiti_flag.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg");

haiti_info.innerHTML = `<h3>HAITI</h3>
<p><b>Population: </b>56,876,456</p>
<p><b>Capital: </b>Port-au-Prince</p>
<p><b>Region: </b>North America</p>
`

let haiti_container = document.createElement("div");
haiti_container.setAttribute("class", "haiti_container");
haiti_container.append(haiti_flag, haiti_info);

document.body.append(haiti_container);




let cuba_info = document.createElement("div");
cuba_info.setAttribute("class", "cuba_info");

let cuba_flag = document.createElement("img");
cuba_flag.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg");

cuba_info.innerHTML = `<h3>CUBA</h3>
<p><b>Population: </b>56,876,456</p>
<p><b>Capital: </b>Havana</p>
<p><b>Region: </b>North America</p>
`

let cuba_container = document.createElement("div");
cuba_container.setAttribute("class", "cuba_container");
cuba_container.append(cuba_flag, cuba_info);

document.body.append(cuba_container);

let main_container = document.createElement("div");
main_container.setAttribute("class", "main_container");
main_container.append(us_container, canada_container, mexico_container, greenland_container, haiti_container, cuba_container);

document.body.append(main_container);