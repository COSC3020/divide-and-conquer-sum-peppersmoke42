function divideAndConquerSum(a) 
{
    return sum(a, 0, a.length - 1);
}

function sum(arr, low, high)
{
    //Base cases - anything less than 3 elements
    if (low > high)
        return 0;
    if (low === high)
        return arr[low];
    if (low + 1 === high)
        return arr[low] + arr[high];

    //Recursive bit
    let div = Math.floor((high - low + 1) / 3);
    const mid1 = low + div;
    const mid2 = low + (2 * div);

    const lowSum = sum(arr, low, mid1 - 1);
    const midSum = sum(arr, mid1, mid2 - 1);
    const highSum = sum(arr, mid2, high);

    return lowSum + midSum + highSum;
}
