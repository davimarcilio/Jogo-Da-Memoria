const Front = 'card-front';
const Back = 'card-back';
let apps = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
];
function CreateCard(apps) {
    let cards = [];
    for (const app of apps) {
        cards.push(CreatePair(app))
    }    
    return cards.flatMap(pair => pair);
}
function CreatePaior(app) {
    return [{
        id: CreateId(app),
        icon: app,
        flipped:false,
    },{
        id: CreateId(app),
        icon: app,
        flipped:false,  
    }]
}
function CreateId(app) {
    return app + parseInt(Math.random * 1000);
}
