//bin search algorithm with while loop

//binary search algorithm
//1 divides your array by selecting the middle value
//2 compares to the target
//3 if found, returns index
//4 if not then
//5 compares the target to see if the found middle value is smaller or bigger
//6 if smaller, then look up on the left side of the array
//7 else look up on the right side of the array
//the same logic from 1-7 is repeating till the value is found, otherwise the number doesn't exist in your array!

//please note that I added two ways of finding the middle index of the array
// 1) a classic approach with Math.floor
// 2)and an approach utilizing right shift bitwise operator

//Also, I used a simple if else at the beginning of the function
//that helps you to look up in a specific range of your array!

const binSearch = (arr, x, range = false) => {
    let start, end;
    if (range) {
        [start, end] = [...range];
    } else {
        start = 0;
        end = arr.length - 1;
    }

    while (start <= end) {
        // const mid = Math.floor((end + start) / 2); //this is the classic approach
        const mid = (end + start) >> 1; //this approach includes the right shift bitwise operator
        if (arr[mid] === x) return mid;
        else if (arr[mid] < x) {
            start = mid + 1;
        } else end = mid - 1;
    }
    return -1;
}

console.log('bin', binSearch([0, 1, 2, 3, 4, 5], 0, [0, 4]));
for (let i = 0; i < 6; i++) {
    console.log(`bin search for value ${i}: `, binSearch([0, 1, 2, 3, 4, 5], i));
}
