const tBodyElem = document.querySelector("tbody");

const resualt1 = [];

function getLatestChildren(array){
    const latestGames = []

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        const resultString = element.querySelector("span").textContent.trim();
        latestGames.push(resultString);
        
    }

    return latestGames;

}


for (let index = 0; index < tBodyElem.children.length; index++) {
    const element = tBodyElem.children[index];

    const latestGames = getLatestChildren(element.children.item(10).children);

    resualt1.push({
        rank: element.children.item(0).textContent.trim(),
        name: element.children.item(2).querySelector("a").querySelector("span").textContent,
        game: element.children.item(3).textContent.trim(),
        win: element.children.item(4).textContent.trim(),
        draw: element.children.item(5).textContent.trim(),
        loss: element.children.item(6).textContent.trim(),
        goal: element.children.item(7).textContent.trim(),
        diff: element.children.item(8).textContent.trim(),
        score: element.children.item(9).textContent.trim(),
        latestGames: latestGames,
    })
    
}

console.log({resualt1});


// //////////////////////////////////////////

// const resualt2 = [];

// function getLatestChildren2(array){
//     const latestGames = []

//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];

//         const resultString = element.querySelector("span").textContent.trim();
//         latestGames.push({
//             result: resultString,
//             opponent: 
//             opponetsgoal: 
//             goal:

//         });
        
//     }

//     return latestGames;

// }


// for (let index = 0; index < tBodyElem.children.length; index++) {
//     const element = tBodyElem.children[index];

//     const latestGames = getLatestChildren2(element.children.item(10).children);

//     resualt2.push({
//         rank: element.children.item(0).textContent.trim(),
//         name: element.children.item(2).querySelector("a").querySelector("span").textContent,
//         game: element.children.item(3).textContent.trim(),
//         win: element.children.item(4).textContent.trim(),
//         draw: element.children.item(5).textContent.trim(),
//         loss: element.children.item(6).textContent.trim(),
//         goal: element.children.item(7).textContent.trim(),
//         diff: element.children.item(8).textContent.trim(),
//         score: element.children.item(9).textContent.trim(),
//         latestGames: latestGames,
//     })
    
// }

// console.log({resualt2});










