let sum_og = function(a, b) { return a + b }

let sum_arrow_function = ( a, b ) => a + b;

const boolean = false;

let myFunc = boolean ? 
    () => { console.log('True')} : 
    () => { console.log('False')}

console.log('boolean, myFunc()', boolean, myFunc())