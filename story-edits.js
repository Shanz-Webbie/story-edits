let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let count = 0;
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// Iterate over words and return the total count of words
storyWords.forEach((word) => {
count++;
});
// Remove 'literally' from the text
storyWords = storyWords.filter((word) => {
  if (word !== unnecessaryWord){
    return word;
  }
});

// Search the text and return the index of a bad word
badWordIndex = storyWords.findIndex((word) => {
  if (word === badWord){
    return word
  }
})

// Replace bad word with 'really'
storyWords[78] = 'really'

// Correct the spelling of a word
storyWords = storyWords.map( (word) => {
  if (word === misspelledWord){
    return 'beautiful'
  }
  if (word !== misspelledWord) {
    return word
  }
});

// Remove words over 10 characters
const lengthCheck = storyWords.every((word) => {
 return (word.length >= 10);
 });

 // Find the index of the longest word
 longWordIndex = storyWords.findIndex((word) => {
  if (word.length  > 10) {
    return word
  }
})

// Confirm which word is longest
 longWord = storyWords.filter((word) => {
  if (word.length  > 10){
    return word
      }
})
// Replace 'breathtaking' with shorter word
storyWords[111] = 'stunning'
// Log the total word count
console.log(`word count is: ${count}`)
// Join all of the words in the story into a paragraph
console.log(storyWords.join(" "))
// Display the index of a bad word
// console.log(badWordIndex)
// console.log(longWordIndex)
// console.log(longWord)
// console.log(lengthCheck)
