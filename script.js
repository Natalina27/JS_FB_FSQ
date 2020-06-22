// Solution 1

function findIntersection(arr) {
    let result = [];
    el1 = arr[0].split(',');
    console.log(el1);
    el2 = arr[1].split(',');
    console.log(el2);
    for (let i=0; i < el1.length; i++){
        for(let j=0; j < el2.length; j++){
            if (el1[i] === el2[j]){
                result.push(el1[i]);
            }
        }
    }
    return result.join(',').length === 0 ? 'false' : result.join(',');
}

console.log(findIntersection(['1, 3, 4, 7, 15', '1, 2, 4, 15, 21']));
console.log(findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']));
console.log(findIntersection(['1, 3, 9, 10, 17, 18', '4, 44, 99']));

// The time complexity would be O(nm). n and m represent the size of the strings.

// Solution 2

const getIntersection = (arr) =>{
    const [arr1, arr2] = arr.map(arr => arr.split(", "))

    return arr1.filter(item =>
        arr2.includes(item)
    )
}

console.log(getIntersection(['1, 3, 4, 7, 15', '1, 2, 4, 15, 21']));
console.log(getIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']));
console.log(getIntersection(['1, 3, 9, 10, 17, 18', '4, 44, 99']));