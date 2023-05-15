//TODO - Make a function that sorts and array and deletes any duplicates in the data you have stored.

//NOTE - example: duplicateArray([1,2,3, 4,5]) -> [1,2,3,4,5]

function duplicateArray(arr) {
    const newArray = [] // This is the empty array that will be filled.

    let currentArray = arr[0] // This is the variable for iterating.

    newArray.push(currentArray) // Here we begin iterating.

    for(let i = 0; i < arr.length; i++) {  // for loop with adding incriment.
        if(arr[i] !== currentArray) {  // If statement
            currentArray = [i]
            newArray.push(currentArray) //NOTE - The push() method adds the specified elements to the end of an array and returns the new length of the array.
        }
    }
    return newArray
}

//NOTE - Develop a function that counts number of zeros in a 2D array.

function twoArrays(arr) {
    let count = 0

    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                count++
            }
        }
    }
    return count    
}