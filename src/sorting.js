class Sorter {
    static quickSort(array) {
        if (array.length == 0) {
            return [];
        } else {
            let pivot = array[0];
            let left = [];
            let right = [];
            for (let item of array) {
                if (item < pivot) {
                    left.push(item);
                } else if (item > pivot) {
                right.push(item);
                }
            }
            return [...Sorter.quickSort(left), pivot, ...Sorter.quickSort(right)];
        }
    }
}