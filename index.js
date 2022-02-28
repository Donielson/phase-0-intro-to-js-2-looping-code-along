// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    let i = 0; 
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        debugger;
    }

    return messages;

}

writeCards(names);


function countDown(count) {
    while (count >= 0) {
        console.log(count);
        count--;
    }

    return count;
}

countDown(count);