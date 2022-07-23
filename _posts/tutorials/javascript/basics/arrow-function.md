Arrow Functions helps developers to write code in concise way, it’s introduced in ES6.
Arrow functions can be written in multiple ways. Below are couple of ways to use arrow function but it can be written in many other ways as well. 

## 1. With no argument

### Syntax

```javascript
() => expression
```

### Example

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const squaresOfEvenNumbers = numbers.filter(ele => ele % 2 == 0)
                                    .map(ele => ele ** 2);

console.log(squaresOfEvenNumbers);
```
### Run [here](https://onecompiler.com/javascript/3vr48m78h)

## 2. With Multiple arguments

### Syntax

```javascript    
(a1,b1,c1) => expression
```

### Example
```javascript    
let sum= (a,b,c) => {
    return a+b+c;
}
console.log(sum(10,20,30));
```
### Run [here](https://onecompiler.com/javascript/3vr48ndc4)

## Benefits:

1. Shorter syntax
2. Bind this lexically
3. Simplify function scoping
