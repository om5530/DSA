// Insertion Sort
function insertion(arr) {
    for (let i = 0; i < arr.length; i++) {
        let curr = i;
        console.log(arr[i]);

        while (curr >= 1 && arr[curr - 1] > arr[curr]) {
            [arr[curr - 1], arr[curr]] = [arr[curr], arr[curr - 1]];
            curr--;
        }
    }
    return arr
}
console.log(insertion([7, 5, 28, 9, 542, 42, 5]));
[5, 7, 28, 9, 542, 42, 5]
