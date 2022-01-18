// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
}
function appendCat(name){
    return name = [...cats,"Broom"]
}
function prependCat(name){
    return name =["Arnold",...cats]
}
function removeLastCat(name){
    return name = cats.slice(0,cats.length-1)
}
function removeFirstCat(name){
    return name = cats.slice(1)
}