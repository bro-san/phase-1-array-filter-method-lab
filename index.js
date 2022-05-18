// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(array, str) {
    return array.filter(function(name) {return name.toLowerCase() === str.toLowerCase()})
}

function fuzzyMatch(array, str) {
    return array.filter(function(name) {return name.slice(0,1) === str.slice(0,1)})
}

function matchName(array, str) {
    return array.filter(element => element.name === str)
}
