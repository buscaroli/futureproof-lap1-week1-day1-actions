// 1. Using the inbuilt string methods only

// Return the length of a string
console.log('Hello People!'.length)

// console.log the word train from this sentence “I dislike trains as a mode of transport”
const str = 'I dislike trains as a mode of transport'
console.log(str.slice(10, 15))

// Return the fifth letter of the alphabet from this string ‘abcdefghijklmnopqrstuvwxyz’
console.log('abcdefghijklmnopqrstuvwxyz'[4])

// Make this string shouty by making it all upper case ‘I love you’
console.log('I love you'.toUpperCase())

// 2. Using the inbuilt number methods only

// console.log this number to 2 decimal places 1.23456789
console.log((1.23456789).toFixed(2))

// Change this string into a number “45”
console.log(Number('45'))

// 3. Using the inbuilt array methods only

// Return the first and last elements in this array [‘red’, ‘yellow’, ‘green’, ‘blue’]
const colours = ['red', 'yellow', 'green', 'blue']
console.log(colours.slice(0, 1) + ' ' + colours.slice(-1))

// Add ‘orange’ to the end of this array [‘red’, ‘yellow’, ‘green’, ‘blue’]
colours.push('orange')
console.log(colours)

// console.log the third element in this array [‘red’, ‘yellow’, ‘green’, ‘blue’]
console.log(colours[2])

// Find the minimum value in this array [23123, 2, -328, 0]
console.log([23123, 2, -328, 0].sort()[0])

// 4. Your own function

// Write a function that takes three inputs. One should be a country, one should be the length of flight to get there and one the final should be the place where someone lives. The function should return a sentence that describes the person's journey.
function travel(to, hours, from = 'London') {
  return `They are leaving from ${from} and they will be in ${to} in ${hours} hours.`
}

console.log(travel('Italy', 3))

// 5. Discover a library
// Pick a JS library and explore - consider a circumstance in which you feel this library could be useful to you. Share your findings with the group - there are so many, we are sure to come up with a nice variety!

// Greensock library to animate elements in the DOM

// 6. Craft your own library
// As a longer-term project, come up with an idea for a small library you would like to build yourself. A library does not have to be super extensive - being very good at one specific thing can be of great value. Start making some functions you would like to have in your library... remember tests! Check out the demo code in this repo for an example.

// TODO
