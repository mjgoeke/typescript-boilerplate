import _ = require("lodash");
const clamp = (x: number, min: number, max: number): number => (Math.max(min, Math.min(max, x)));

//We require a class, Histo, to generate histograms from a random set of age data. 
/**
 * "toy" histogram class - creates 10 data buckets
 */
 export class Histo {
    constructor(private data: number[]/* typescript/javascript has no dedicated int type so we're using number */) { 
        //clean up the data
        this.data = _(data)
            .map(x => Math.round(x))
            .map(x => clamp(x, 0, 99))
            .value();
    }

    get_histo() {
        const buckets = new Array(10).fill(0);
        this.data.forEach(x => {
            const bucket = Math.trunc(x / 10);
            buckets[bucket]++;
        });
        return buckets.map(b => Math.round((b / this.data.length) * 100) / 100);
    }
}