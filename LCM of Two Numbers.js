
// Write a function that returns the least common multiple (LCM) of two integers.

const gcd = (a, b) => (!b ? a : gcd(b, a % b));

const lcm = (a, b) => a * (b / gcd(a, b));

