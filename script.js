`use strict`;

console.log(`js loaded ok`);

const container = document.querySelector(`.container`);

const greetingEl = document.querySelector(`.greeting`);

const clockEl = document.querySelector(`.clock`);

const dayEl = document.querySelector(`.day`);

const quoteEl = document.querySelector(`.quote`);

const quotes = {
    0: `The concept of waiting bewilders me. There are always deadlines. There are always ticking clocks. That is why you must manage your time.`,

    1: `Give a man a gun and he can rob a bank, but give a man a bank, and he can rob the world.`,

    2: `She doesn’t love the people who love her. She loves the people who don’t.`,

    3: `People are all just people, right? When it gets down to it, everyone’s the same. They love something. They want something. They fear something. Specifics help, but specifics don’t change the way that everyone is vulnerable. It just changes the way that we access those vulnerabilities.`,

    4: `Even extraordinary people, and I believe you are, are driven by human banalities.`,

    5: `People walk around, act like they know what hate means. Nah, no one does, until you hate yourself. I mean truly hate yourself. That’s power.`,

    6: `I believe in fate. There’s a reason we met. There’s something between us. I can see it.`,

    7: `Power belongs to the people that take it. Nothing to do with their hard work, strong ambitions, or rightful qualifications, no. The actual will to take is often the only thing that’s necessary.`,

    8: `You’re never sure about anything unless there’s something to be sure about.`,

    9: `You hack people. I hack time.`,

    10: `The concept of waiting bewilders me. There are always deadlines. There are always ticking clocks.`,

    11: `I’m good at reading people. My secret , I look for the worst in them.`,

    12: `Don’t mistake my generosity for generosity.`,

    13: `When you see a good move, look for a better one.`,

    14: `People always told me growing up that it’s never about the destination. It’s about the journey. But what if the destination is you?`,

    15: `A bug is never just a mistake. It represents something bigger. An error of thinking that makes you who you are.`,

    16: `They will die in debt for things they didn’t want to do.`,

    17: `Unfortunately, we’re all human. Except me, of course.`,

    18: `Though she’s a psychologist she’s really bad at reading people but I’m good at reading people. My secret? I look for the worst in them.`,

    19: `Getting into the mind of a woman, it’s the toughest route for even the best sources`,

    20: `Most kids get scared shitless when they’re alone, but I wasn’t. I loved it.`,

    21: `I never want to be right about my hacks, but people always find a way to disappoint.`,

    22: `I’m gonna fix the world I broke, and put it back together better than it was before.`,

    23: `I’ve never found it hard to hack most people. If you listen to them, watch them, their vulnerabilities are like a neon sign`,

    24: `Never trust a tech guy with a rat tail—too easy to carve secrets out of him.`,

    25: `Control can sometimes be an illusion. But sometimes you need illusion to gain control`,

    26: `It’s good. So good, it scratched that part of my mind. The part that doesn’t allow good to exist without a condition.`,

    26: `Maybe wars aren’t meant to be won, maybe they’re meant to be continuous.`,

    27: `When we lose our principles, we invite chaos.`,

    28: `I have burrowed underneath your brain. I am nested there. I am the scream in your mind. You will cooperate.`,

    29: `Though she’s a psychologist she’s really bad at reading people but I’m good at reading people. My secret? I look for the worst in them.`,

    30: `We’re all living in each other’s paranoia.`,

    31: `If you want to change things, perhaps you should try from within, because this is what happens from the outside.`,
};

const capitalise = function(element) {
    element.trim().toLowerCase();

    let fstLetter = element[0];

    let restWord = element.slice(-(element.length - 1));

    return fstLetter.toUpperCase().concat(restWord);
};

function speak(text) {
    if ("speechSynthesis" in window) {
        const synthesis = window.speechSynthesis;
        let speakText = new SpeechSynthesisUtterance(text);

        synthesis.speak(speakText);
    } else {
        console.log("Speech synthesis not supported by this browser.");
    }
}

const clock = function() {
    const days = {
        0: `sunday`,
        1: `monday`,
        2: `tuesday`,
        3: `wednesday`,
        4: `thursday`,
        5: `friday`,
        6: `saturday`,
    };

    const months = {
        0: `january`,
        1: `february`,
        2: `march`,
        3: `april`,
        4: `may`,
        5: `june`,
        6: `july`,
        7: `august`,
        8: `september`,
        9: `octomber`,
        10: `november`,
        11: `december`,
    };

    const timeOfDayVar = {
        0: `morning`,
        1: `after noon`,
        2: `evening`,
        3: `night`,
    };

    const now = new Date();

    const hours = (now.getHours() % 12 || 12).toString().padStart(2, 0);

    const minutes = now.getMinutes().toString().padStart(2, 0);

    const seconds = now.getSeconds().toString().padStart(2, 0);

    const amPm = now.getHours() > 12 ? `PM` : `AM`;

    const date = now.getDate();

    const day = now.getDay();

    const month = now.getMonth();

    const year = now.getFullYear();

    let timeOfDay = ``;

    if (now.getHours() >= 00 && now.getHours() < 13) {
        timeOfDay = capitalise(timeOfDayVar[0]);
    } else if (now.getHours() >= 13 && now.getHours() < 16) {
        timeOfDay = capitalise(timeOfDayVar[1]);
    } else if (now.getHours() >= 16 && now.getHours() < 22) {
        timeOfDay = capitalise(timeOfDayVar[2]);
    } else if (now.getHours() >= 22 && now.getHours() <= 23) {
        timeOfDay = capitalise(timeOfDayVar[3]);
    }

    const sufix = { 0: `'st`, 1: `'nd`, 2: `'rd`, 3: `'th` };

    let sufixTxt = ``;

    if (date.toString().slice(-1) === `1`) {
        sufixTxt = sufix[0];
    } else if (date.toString().slice(-1) === `2`) {
        sufixTxt = sufix[1];
    } else if (date.toString().slice(-1) === `3`) {
        sufixTxt = sufix[2];
    } else {
        sufixTxt = sufix[3];
    }

    let clockElFormat = `${hours} : ${minutes} : ${seconds} ${amPm}`;

    clockEl.textContent = clockElFormat;

    let dayElFormat = `${capitalise(
    days[day].slice(0, 3)
  )} ${date}${sufixTxt} ${capitalise(months[month].slice(0, 3))} ${year}`;

    greetingElFormat = `Good ${timeOfDay}!`;

    dayEl.textContent = dayElFormat;

    greetingEl.textContent = greetingElFormat;

    // i know it would be much easier if quotes was an array, but this is fun purpose only, or i could use an API, maybe next time

    const randomQuote = Math.floor(
        Math.random() * Object.keys(quotes).length + 1
    );

    // I couldn't stop the speak function from executing repetitivelly, so I've added a second contition in the if statement

    if (minutes % 1 === 0 && seconds % 60 === 0) {
        speak(greetingElFormat + `friend`);
        speak(`the time is ${minutes} minutes past ${hours}`);
        speak(`${days[day]} the ${date}${sufixTxt} of ${months[month]} ${year}`);
        quoteEl.textContent = quotes[randomQuote];
        speak(quotes[randomQuote]);
    }
};

setInterval(() => {
    clock();
}, 1000);