//Define a function that removes duplicates from an array of numbers and returns it as a result.
//The order of the sequence has to stay the same.

function distinct(a) {
    return Array.from(new Set(a));
}

// My solution relies on the Set object which only allows unique values, this automatically removes any duplicate numbers
