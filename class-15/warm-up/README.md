# Concept Review

Assume you are in a pair programming session, and are the navigator.  For each of the lines of code below, provide the (nerdy) english instructions that you would give to your partner (the driver) that would make them type the code shown.

For example, if you wanted the driver to write this code:

```
const num = parseInt("2");
```

You would say:
> Declare a variable called number and assign it the return value from running the parseInt function with the argument "2"

## Javascript Fundamentals

```
const name = "John";
```

```
console.log( typeof name );
```

```
const nums = [1,2,3,4,5];
```

```
for( const i=1; i<=100; i++ ) {
  console.log(i * i);
}
```

## Javascript Objects

```
const john = {
  first: "John",
  last: "Cokos",
  lastName: "Cookoo",
  age: 50
}
```

```
console.log(john.first);
```

```
const keyword = "last";
```

```
console.log(john[keyword]); 
```


## Functions

```
function sayHi(name) {
  console.log('Hi', name);
}
```

```
sayHi('Lyndsey');
```




## Constructors

```
function Person(name) {
  this.fullName = name;
}
```

```
Person.prototype.sayMyName = function() {
  console.log( this.fullName.toUpperCase() );
}
```

```
const john = new Person('John Cokos');
```

```
john.sayMyName();
```

## Javascript for Fun and Profit

```
console.log( greet('John') );

function greet(name) { 
  return sayHelloTo(name, 'Hi');
}

function sayHelloTo(person,greeting) {
  return awkwardGreeting(greeting, person);
}

function awkwardGreeting(words,name) {
  return `${name}, uh ... ${words}?`
}
```

```
"These are some words".split(' ')[3].toUpperCase().charAt(0)
```

```
"Hello world".charAt(Math.sqrt(16));
```

```
({ type: "a", href: "http://swapi.co", text: "Star Wars API" })["type href text".split(" ")[Math.max(2, 0)]].length
```
