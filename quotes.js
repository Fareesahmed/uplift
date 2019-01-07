var quotes = [
  'Admire someone else\'s beauty without questioning your own.',
  'When we deny our emotions, we become a slave to them. It\'s only when we acknowledge them that we can put them in their rightful place.',
  'So many years of education yet nobody ever taught us how to love ourselves and why it\'s important.',
  'It\'s better to love and lose than never love at all.',
  'Spend a little more time trying to make something of yourself and a little less time trying to impress people.',
  'Get piercings, remove them, make friends, move on, travel, stay in. Find what kind of person you are and love that person.',
  'Our purpose is never to get away from hard things. It\'s to find the hard things worth doing.',
  'Fill your life with adventures, not things. Have stories to tell, not stuff to show.',
  'Be strong, be weak, be whoever you want to be.',
  'You are enough.',
  'Do more things that make you forget to check your phone.',
  'Be soft. Do not let the world make you hard. Do not let pain make you hate. Do not let the bitterness steal your sweetness. Take pride that even though the rest of the world may disagree, you still believe it to be a beautiful place.',
  'Act as if it were impossible to fail.',
  'People wait all week for Friday, all year for summer, and all of life for happiness.',
  'Be the reason someone smiles today.',
  'Happiness looks good on you.',
  'The best view comes after the hardest climb.',
  'You were not born to just pay bills and die.',
  'Be who you needed when you were younger.',
  'Be a combination of all the best people you meet, not the worst.',
  'Stop being afraid of what could go wrong and start being positive about what could go right.',
  'A wolf does not lose sleep over the opinion of sheep.',
  'Be a Fruit Loop in a world of Cheerios.',
  'Do not be dismayed by the brokenness of the world. All things break. And all things can be mended. Not with time, as they say, but with intention. So go. Love intentionally, extravagantly, unconditionally. The broken world waits in darkness for the light that is you. ~ L.R.Knost',
  'Just remember; someone loves everything you hate about yourself ~ Frank Ocean',
  'Selfish people end up having only their self.',
  'It is not death that a man should fear, but he should fear never beginning to live. ~ Marcus Aurelius',
  'Comparison is the thief of joy. ~ Theodore Roosevelt',
  'Take care of your body. It’s the only place you have to live in.',
  'Sleep is the best meditation ~ Dalai Lama',
  'You can’t do big things if you’re distracted by small things',
  'Know the difference between those who stay to feed the soil and those who come to grab the fruit.',
  'Chains of habit are too light to be felt until they are too heavy to be broken. ~ Warren Buffett',
  'Clutter is anything that doesn’t support your better self. ~ Eleanor Brown',
  'If it’s not a Hell Yeah!, it’s a no ~ Derek Sivers',
];

var quoteElement = document.getElementsByClassName('quote')[0];
var quotesLength = quotes.length;
function replaceQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.innerHTML = randomQuote;
}
replaceQuote();
window.onclick = replaceQuote;

// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-104633301-1', 'auto');
ga('send', 'pageview');
