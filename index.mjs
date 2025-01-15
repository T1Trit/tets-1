// index.mjs

import { process } from './process.mjs';

// Кейс 1
const store1 = [{ size: 2, quantity: 1 }];
const order1 = [{ id: 102, size: [1, 2], masterSize: "s1" }];
console.log("Кейс 1:", process(store1, order1));

// Кейс 2
const store2 = [{ size: 3, quantity: 1 }];
const order2 = [{ id: 102, size: [1, 2], masterSize: "s1" }];
console.log("Кейс 2:", process(store2, order2));

// Кейс 3
const store3 = [{ size: 2, quantity: 4 }];
const order3 = [
    { id: 101, size: [2] },
    { id: 102, size: [1, 2], masterSize: "s2" },
];
console.log("Кейс 3:", process(store3, order3));

// Кейс 4
const store4 = [
    { size: 1, quantity: 1 },
    { size: 2, quantity: 2 },
    { size: 3, quantity: 1 },
];
const order4 = [
    { id: 100, size: [1] },
    { id: 101, size: [2] },
    { id: 102, size: [2, 3], masterSize: "s1" },
    { id: 103, size: [1, 2], masterSize: "s2" },
];
console.log("Кейс 4:", process(store4, order4));