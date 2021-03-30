describe('Sorter', function () {
    describe('quickSort', () => {
        it('takes an array and returns a sorted array', function () {
            let input = [10,7,4,2,1,5,8,3,9,6];
            expect(Sorter.quickSort(input)).toEqual([1,2,3,4,5,6,7,8,9,10]);
        });
        it('given an empty array, it returns an empty array', function () {
            let input = [];
            expect(Sorter.quickSort(input)).toEqual([]);
        });
        it('given an array of 1 item, it returns the item', function () {
            let input = [0];
            expect(Sorter.quickSort(input)).toEqual([0]);
        });
    });
});