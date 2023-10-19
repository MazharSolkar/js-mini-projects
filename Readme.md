# Generate Random Number

### Math.random() give us `0.49530... random value` every time it runs.

```js
const randomNumber = () => Math.random();

Output: 0.243, 0.56434, 0.98556;
```

### I want to generate values from `0 to 15`, I multiply Math.random() with `hex.length(16)`, it will generate random value between `0.something to 15.something`.

```js
const randomNumber = () => Math.random() * colors.length;

output: 0.2343, 0.4545, 1.0484, 3.0564, 2.4654;
```

### I will use `Math.floor` to normalize the value as i dont want digits after decimal point.

```js
const randomNumber = () =>Math.floor(Math.random() \* colors.length)

output : 0, 2, 1, 3, 4, 8;
```
