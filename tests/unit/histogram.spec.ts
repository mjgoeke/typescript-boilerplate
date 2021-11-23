import { Histo } from "../../src/histogram"

describe('histo test', () => {
    it('ages [1,67,99,21,55,87,23,33,11] should return histo of [0.11, 0.11, 0.22, 0.11, 0, 0.11, 0.11, 0, 0.11, 0.11]', () => {
        const h = new Histo([1,67,99,21,55,87,23,33,11]);
        expect(h.get_histo()).toEqual([0.11, 0.11, 0.22, 0.11, 0, 0.11, 0.11, 0, 0.11, 0.11]);
    });

    it('ages [99,88,77,66,55,44,33,22,11] should return histo', () => {
        const h = new Histo([99,88,77,66,55,44,33,22,11]);
        expect(h.get_histo()).toEqual([0, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11]);
    });
});