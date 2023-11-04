const dramaWords = [];
const yikarmaWords = ['Judy...', 'If youre going to cough every 20 seconds, maybe todays class isnt for you', 'Is it possible for some of yall to walk any slower', 'No one walks slower than the person in front of you when youre late to class', 'Classes are starting to feel optional...', 'Whats up with the baseball field?', 'Just steal a tweet and post it'];
const funnyWords = ['Why did the lady wear a helmet every time she ate? She was on a crash diet!', 'Always identify who to blame in an emergency.', 'Why dont the enemies of the Teenage Mutant Ninja Turtles just flip them on their backs?', 'How do you get Pikachu onto the bus? You Pokemon.','My girlfriend just found out I replaced our bed with a trampoline; she hit the roof.', 'Remember youre never uselss, you can always be a bad example' ];
const roomNums = ['110', '112', '113', '120', '210', '220', '218', '315', '318','130', '118', '205', '212', '315']
const dorms = ['Crescent', 'Mountainview', 'Commons', 'Dana']
const hush = ['Be quiet for once, ', 'Can you guys quiet down in ', 'One night of peace please ', 'Hush its so late ', 'Do you ever stop jumping ']

const quoteDisplay = document.getElementById('quote');
const generateButton = document.getElementById('generateQuote');
const titledDisplay = document.getElementById('titled');

const dramaButton = document.getElementById('drama')
const yikButton = document.getElementById('yikarma')
const funnyButton = document.getElementById('funny')

let words = dramaWords;


yikButton.addEventListener('click', function(){
    words = yikarmaWords;
    titledDisplay.textContent = 'Get Likes / Yikarma';

})
dramaButton.addEventListener('click', function(){
    words = dramaWords;
    titledDisplay.textContent = 'Cause Drama';
})
funnyButton.addEventListener('click', function(){
    words = funnyWords;
    titledDisplay.textContent = 'Bad Jokes'
})


function getRandomQuote() {
    if (words == dramaWords) {
        const randomDorm = Math.floor(Math.random() * dorms.length);
        const randomRoom = Math.floor(Math.random() * roomNums.length);
        const randomHush = Math.floor(Math.random() * hush.length);
        return hush[randomHush] + dorms[randomDorm] + ' ' + roomNums[randomRoom];
    }
    else {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }
}



generateButton.addEventListener('click', function(){
    const randomQuote = getRandomQuote();
    quoteDisplay.textContent = randomQuote;
});

