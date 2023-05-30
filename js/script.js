// let arr = [12, 14, 45, 65, 78]
// let num = 0
// for (let i = 0; i < arr.length; i++) {
//     num = num + arr[i] / arr.length
// }
// console.log(num)



function calcAvarage (arr) {
    let num = 0
    for ( let i = 0; i < arr.length; i++) {
        num = num + arr[i]
        
    }
    return num /arr.length
}
let birorta = [4,6,7,8,9,9,9,12]
console.log(calcAvarage(birorta))