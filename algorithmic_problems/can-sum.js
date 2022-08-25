//#problem
//find out whether there are a combination of numbers that add up to the target number!

//the solution is, we recursively iterate over the array, subtract each number from our target, to see if we get to the 0
//if we do, then the problem is solved!
//if not, we can surely state that there is no way to get the number by summing up numbers inside the array

const canSum = (target, nums, solutions = {}) => {
    if (target in solutions) return solutions[target];

    if (target === 0) return true;
    if (target < 0) return false;

    for (const num of nums) {
        const reminder = target - num;
        if (canSum(reminder, nums, solutions) === true) {

            solutions[num] = true;
            return true;
        }
    }
    solutions[target] = false;
    return false;
}

console.log('---------------------------------------------------------------');

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(7, [4, 3])); // true
