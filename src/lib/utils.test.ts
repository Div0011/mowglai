import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { cn } from './utils.ts';

describe('cn', () => {
    it('merges class names and resolves tailwind conflicts', () => {
        assert.equal(cn('p-2', 'p-4', 'text-white', 'text-black'), 'p-4 text-black');
    });

    it('ignores falsey values', () => {
        assert.equal(cn('block', '', undefined, null), 'block');
    });
});

