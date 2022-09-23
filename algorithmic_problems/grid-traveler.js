// 2d grid traveler
//suppose you are a 2D matrix(grid) traveler
//the trick is that you can only move one unit down, or one unit to the right
//and your goal is to reach to the bottom right corner
//find in how many ways you can travel to the bottom right corner of the grid by only moving right or down!


//solution is
//we recursively iterte over the matrix by decreasing the row and the column of the matrix
//the way it works is

//if we move one unit down, let's say our matrix is 3X3(3 rows and 3 columns)
//now we know that we can only move to the bottom or to the right
//that means that our problem size(matrix size) is now reduced
//more specifically, if we moved one unit down, that means that we now have one row less than we had previously
//so our playground now is 2X3 matrix, as we only are allowed to move down or right

//same goes for if we decide to move to the right,
//we now have 3X2 matrix to travel

//you see the pattern right?
//the only thing left to do is to gradually decrease size of the rows and columns one by one
//and at the end, we check to see if we reach to the grid the size of which is 1X1
//if so, we found a way to travel, now it is time to move on with other ways, and that is taken care by recursion!

const traveler = (x, y, memo = {}) => {

    if (memo[`${x}-${y}`]) return memo[`${x}-${y}`];
    // base cases
    if (x === 1 && y === 1) return 1;
    if (x === 0 || y === 0) return 0;

    const ways = traveler(x - 1, y, memo) + traveler(x, y - 1, memo);
    memo[`${x}-${y}`] = ways;
    return ways;
}

console.log('---------------------------------------------------------------');


console.log(traveler(2, 3)); // 3
console.log(traveler(1, 1)); // 1
console.log(traveler(18, 18)); // 2333606220
