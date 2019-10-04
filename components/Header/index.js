// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const myDiv = document.createElement("div");
    myDiv.classList.add("header");

    const firstSpan = document.createElement("span");
    firstSpan.classList.add("date");
    firstSpan.textContent = "SMARCH 28, 2019";

    const myH1 = document.createElement("h1");
    myH1.textContent = "Lambda Times";

    const secondSpan = document.createElement("span");
    secondSpan.classList.add("temp");
    secondSpan.textContent="98°";

    console.log(myDiv);
    myDiv.appendChild(firstSpan);
    myDiv.appendChild(myH1);
    myDiv.appendChild(secondSpan);

    return myDiv;

}


let headerContainer = document.querySelector(".header-container");

let myHeader = Header();
headerContainer.appendChild(myHeader);

