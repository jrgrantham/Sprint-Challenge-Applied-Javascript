// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {

    const header = document.createElement('div');
    const span1 = document.createElement('span');
    const h1 = document.createElement('h1');
    const span2 = document.createElement('span');

    header.appendChild(span1);
    header.appendChild(h1);
    header.appendChild(span2);

    header.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');

    h1.textContent = 'Lambda Times';
    span1.textContent = 'MARCH 28, 2019';
    span2.textContent = '98°'

    return header;

}

const newHeader = Header();

document.querySelector('.header-container').appendChild(newHeader);
