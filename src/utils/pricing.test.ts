import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { formatPrice, roundPrice } from './pricing.ts';

describe('roundPrice', () => {
    it('rounds values below 1000 to nearest 10', () => {
        assert.equal(roundPrice(994), 990);
        assert.equal(roundPrice(995), 1000);
    });

    it('rounds values below 10000 to nearest 100', () => {
        assert.equal(roundPrice(1499), 1500);
        assert.equal(roundPrice(1549), 1500);
    });

    it('rounds values at or above 10000 to nearest 1000', () => {
        assert.equal(roundPrice(10499), 10000);
        assert.equal(roundPrice(10500), 11000);
    });
});

describe('formatPrice', () => {
    it('formats USD values for a locale', () => {
        assert.equal(formatPrice(55, 'USD', 'en-US'), '$55');
    });

    it('formats INR values for a locale', () => {
        assert.ok(formatPrice(5000, 'INR', 'en-IN').includes('5,000'));
    });

    it('falls back for invalid currency code', () => {
        assert.equal(formatPrice(1200, 'BAD_CODE', 'en-US'), 'BAD_CODE 1,200');
    });
});

