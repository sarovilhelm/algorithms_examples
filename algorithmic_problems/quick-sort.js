//quick sort algorithm
//so there are two main functions involved in this algorithm, "partition" and "quickSort"

//in the beginning, we start with quickSort, by passing arguments "start", "end" and "arr"
//during the first call, arguments are (0, arr.length - 1, arr) respectively
//general logic of the algorithm is, we sort the array by dividing it to sub arrays

//LOGIC OF "partition" function
//during every sort of the sub array, we choose a pivot value, and we rearrange the whole sub array by comparing
//all the elements to the pivot, so that in the end, we get all the smaller elements to the LEFT side of the pivot value,
//and all the bigger or equal elements to the RIGHT side of the pivot value

//"partition" function in the end returns an index of the middle value, compared to which the whole array is rearranged
//meaning, it returns an index of the element that is in its right place
//all the greater or equal elements are to the RIGHT, and all the smaller ones are to the LEFT

//LOGIC OF "quickSort" function
//the "quickSort" function then gets the pivot index compared to which all the elements are arranged(returned by the "partition" function),
//and repeats the whole process by calling itself, only this time, as we already have relatively sorted array(i.e. [smallerElements, pivotElement, largerElements])
//we only care for the left and right sides of the array that we have, as the middle element is placed correctly!
//so we only need to sort those unsorted sides(left and right)
//and that is what the "quickSort" function does exactly
//it calls itself once on the left, then on the right side of the already partitioned array(recursively).


const arr = [1, 2, 10, 12, -3, 18, 22, 7];

const partition = (start, end, arr) => {//1,1,-1,0 -> -1,1,1,0 -> -1,0,1,1
    let pivValue = arr[end];
    let pivIndex = start;

    for (let i = start; i < end; i++) {
        if (arr[i] < pivValue) {
            [arr[i], arr[pivIndex]] = [arr[pivIndex], arr[i]];
            pivIndex += 1;
        }
    }
    [arr[pivIndex], arr[end]] = [arr[end], arr[pivIndex]];
    return pivIndex;
};

//quick sort recursive
const quickSort = (start, end, arr) => {
    if (start >= end) return;

    const pivIndex = partition(start, end, arr);
    quickSort(start, pivIndex - 1, arr);
    quickSort(pivIndex + 1, end, arr);

};


quickSort(0, arr.length - 1, arr);
console.log('answer of the quicksort -> ', arr);