var arr = [
"No one cares if you tried if you can't do it.",
"Even if we throw it in the garbage, it's still cheaper.",
"I didn't come here to learn!",
"I don't need to be dainty. I'm fucking starving. Give me a sandwich.",
"How do I go back to living a normal life after traveling? My expectations are way beyond the realm of reality.",
"I only drank a little water because I thought I was choking.",
"We are not just flame adjacent, we are almost en fuego.",
"Even the water is diluted!",
"Coronas without limes is like shitting without toilet paper.",
"I enjoy everything about this concert except the music.",
"Beggars can't be choosers. If you're too cheap for a hotel, you'll sleep where I put a bed.",
"What are you writing?",
"I have more fun than you could ever have.",
"No one can entertain me the way that I entertain myself.",
"I'm surrounded by stupidity at all times.",
"Most of my good memories are at the Marriott.",
"I looked good, I don't care what you say. I don't need to get my self-confidence from you.",
"I am funny all the time.",
"Now I know why people give up on their dreams. I'm fucking tired. I am so tired.",
"Don't put a chair where I can't sit.",
"I love going to sleep. I love it so much.",
"I don't want to do anything. Even if it's fun, I'm not interested.",
"I mean, if you gain 3 pounds you can lose it by taking a shit and not drinking pop for a day.",
"What would we do without me?",
"She can't be bothered to shave her legs but she can still shave half her head.",
"No, I said apple PIE not an apple. Who the fuck wants an apple?",
"That would definitely be the hole in the coffin.",
"I love the Marriott. I love them so much.",
"Several is not a number.",
"I don't find myself to be stubborn, I'm just very involved in my principles.",
"If I could go back, I would not go back.",
"I bet you love the Red Chili Peppers.",
"If you have a story that doesn't have an ending, you should just wait to tell it.",
"Tonight's gonna be one of those nights that I don't wear pants.",
"It was never lost if I found it.",
"This is why people kill their husbands.",
"It was a little putting off.",
"I find grapefruit juice to be the most delicious juice there is. It's not too sweet. It's just perfect.",
"I miss JaRule.",
"Yeah, I'm trying. Trying to get drunk.",
"You can take all my money, you're not touching my points.",
"Oh, I thought that was a song. They're still sound checking?",
"I'm not going to see Bill Bob and the Excavators at Metro.",
"Javad is the reason why there's fine print.",
"If you're not here for my amusement then why are you here?",
"Everything you say is horribly offensive.",
"I'm actually tired from laying down. It makes me want to lay down more.",
"Are you hungry? We can get something from HubStub.",
"The people at LA-Z-BOY really got it right. They perfected the art of sitting and also laying.",
"Don't quote me on that because I don't like being held to anything I say.",
"Antique and garbage are often synonymous.",
"The early fish gets the worm.",
"I've always wanted to sleep through a workday, like a whole workday.",
"I am do not disturbing the shit out of this phone.",
"The sitting is the best part of the day."
];

var i = 0;

function nextItem() {
    i = i + 1; // increase i by one
    i = i % arr.length; // if we"ve gone too high, start from `0` again
    return arr[i]; // give us back the item of where we are now
}

function prevItem() {
    if (i === 0) { // i would become 0
        i = arr.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    return arr[i]; // give us back the item of where we are now
}

window.addEventListener("load", function () {
    document.getElementById("output").textContent = arr[0]; // initial value
    document.getElementById("prev_button").addEventListener(
        "click", // we want to listen for a click
        function (e) { // the e here is the event itself
            document.getElementById("output").textContent = prevItem();
        }
    );

    document.getElementById("next_button").addEventListener(
        "click", // we want to listen for a click
        function (e) { // the e here is the event itself
            document.getElementById("output").textContent = nextItem();
        }
    );
});
