# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Guess the Number

## Prereqs:
* JS primitives
* JS conditionals
* JS functions

## Getting Started
1. **Fork and clone** this repository
2. Create a javascript file in the `js` subdirectory for your code and link it up the provided `index.html`
3. You can use a `console.log()` in your javascript file to make sure it is linked up correctly to the html. *press F12 in Chrome to open up the developer console*
___

## Using `alert` and `prompt`

In Javascript we have access to two built in functions, `alert` and `prompt`, that trigger an alert window at the top of the client page. 

Today we will be using `prompt`. `prompt` takes two arguments (the statement you want in presented to the user in the alert window, and a default value), and returns whatever value users have submitted. 

Example use to get user's favorite vegetable:
```js
let favVeg = prompt("What is your favorite vegetable?", "Brussel Sprouts")

console.log(`Oh, I see - your favorite vegetable is ${favVeg}.`)
```
___

## 1. Guess the Number

Write a function that takes a random number for guessing and then prompts a user to guess that number (limit the random number to between 1-10).

If the users initial guess is incorrect, continue to prompt them for a guess until they get the correct number. 

On correct response return a success message. 

___

## 2. Recursive Solution

Often times in crafting functions we find ourselves needing to reuse the same function we are declaring within the function definition itself. 

This sounds overthought and complicated but this concept is called recursion - the idea that we would use a function within the very definition of the function. 

To read of some "real world examples" of recursion see this Stack Overflow answer [here](https://stackoverflow.com/questions/105838/real-world-examples-of-recursion#:~:text=People%20often%20sort%20stacks%20of,like%20technique%2C%20which%20is%20recursive).

**How could this challenge be solved recursively?**

If you did not write your first solution recursively, try to refractor your code to do so (first in pseudocode, then in JS).
___

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
