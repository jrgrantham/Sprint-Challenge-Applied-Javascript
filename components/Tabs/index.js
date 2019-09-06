// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const data = {
    "topics": [
        "javascript",
        "bootstrap",
        "technology",
        "jquery",
        "node.js"
    ]
}


// const test = [];
// data.topics.forEach((item) => {
//     test.push(item)
// });

// const tabArray = data.topics.forEach((item) => {
//     tabCreater(item)
// })

function tabCreater(response) {

    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = response;

    return tab;
}



document.querySelector('.topics').appendChild(tabCreater(data.topics))