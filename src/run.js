// function eventLargestNumber(arr) {
//     let benchmark = -1

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             if (arr[i] > benchmark) {
//                 benchmark = arr[i]
//             }
//         }
//     }
//     return benchmark
// }

// //TODO -  - Write a function that transforms an array into a mirror array.
// //NOTE - mirrorArray([1,2,3,4])  turns into [1,2,3,4,3,2,1]

// function mirrorArray(arr) {  //NOTE - this is the function name and the data type.
//     for(let i = arr.length-2; i >= 0; i--) {  //NOTE - this for loop sets "i" as the arry length -2 which is the second to last postion.
//         arr.push(arr[i]) //NOTE - this pushes the arry through "i"
//     }
//     return arr //NOTE - this then returns the MODIFIED array.
// }
// console.log(mirrorArray([1,2,3,4,5,6,7]));

//TODO - Return the total numbe of sub-arrays.
//NOTE - numberOfSubArrays([[1,3,4]]) turns into 1

function numberOfSubArrays(arr) {
    let subArrays = 0
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) [
            subArrays++
        ]
    }
    return subArrays
}
console.log(numberOfSubArrays([[1,3,4],[3,1],"Paul",["Paul","John"]]));