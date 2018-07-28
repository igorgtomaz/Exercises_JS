// Used text
let story = '\nLast weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

// Array with words
let storyWords = story.split(' ')

// Most used words
let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Get unnecessary words
const getWords = (unnecessary) => {
  let returnVet = []
  let confWord = false
  
  storyWords.forEach(function(word) {
    if (unnecessary.indexOf(word) === -1)
      returnVet.push(word)
  });
   	return returnVet
  }
	
	const getOverUsed = (mainArray, overArray) => {
  	let countOver = []
    let count
 	
    for (let i = 0; i < overArray.length; i++) {
      count = 0;
      for (let j = 0; j < mainArray.length; j++) {
      	if (overArray[i] === mainArray[j]) {
          count++;
        }
      }
     
      if (count > 0)
      	countOver.push(count);
    }
    
    return countOver
  }
  
  // Show the result of search about words
  const showOverUsed = (mainArray, overArray) => {
    let cOverUsed = getOverUsed(mainArray, overArray)

   for (let i = 0; i < cOverUsed.length; i++) {
    	console.log(overArray[i] + ' - used: ' + cOverUsed[i] + ' times.')
  	}
    
    let max = cOverUsed.reduce(function(a, b) {
      return Math.max(a, b);
    });
    
    return max
  }
 
  // Count how many sentences the text has
  const contSentences = words => {
    let countSen = 0
    
    for(let i = 0; i < words.length; i++) {
      if (words[i] === '. ' || words[i] === '!' || words[i] === '?' || words[i]+words[i+1]+words[i+2] === '...')
        countSen++;
    }
    
    console.log(`There are ${countSen} sentences on this string.`);
  }
  
  // Log in console all data of this search
  const logEverything = () => {
  	
    console.log(`Total of words: ${storyWords.length}\n`)
    contSentences(story);
    console.log(`\nWords overused:`)
   let max = showOverUsed(storyWords, overusedWords) 
   console.log(`Most used is: ${max}`)
   }
 	
  let betterWords = getWords(unnecessaryWords)
  logEverything()
	console.log('\nText used: \n' + betterWords.join(' '))