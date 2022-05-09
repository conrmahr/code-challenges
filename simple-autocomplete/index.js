// https://buttondown.email/cassidoo/archive/around-every-corner-always-protect-the-engine/
// Implement a simple version of autocomplete, where given an input string s and a dictionary of words dict, return the word(s) in dict that partially match s (or an empty string if nothing matches).

// let dict = ['apple', 'banana', 'cranberry', 'strawberry']

// $ simpleAutocomplete('app')
// $ ['apple']

// $ simpleAutocomplete('berry')
// $ ['cranberry', 'strawberry']

// $ simpleAutocomplete('fart')
// $ []

function simpleAutocomplete(input) {
    const dict = ['apple', 'banana', 'cranberry', 'strawberry'];
    return dict.filter(e => e.includes(input));
  }
  
  console.log(simpleAutocomplete('app'));
  // ['apple']
  
  console.log(simpleAutocomplete('berry'));
  // ['cranberry', 'strawberry']
  
  console.log(simpleAutocomplete('fart'));
  // []