let arr = [1 ,4, 2 , 5, 3, 6, 8,9,10,12,7];

let max = Math.max(...arr);

let sum = (max*(max+1))/2;

let add = 0;

for(let i=0; i<arr.length; i++){
    add += arr[i];

}

let miss = miss - add;

console.log(miss);
