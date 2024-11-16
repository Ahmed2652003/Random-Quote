var Quotes=[
    `"It's not what happens to you, but how you react to it that matters."
    
    --Epictetus`,
    `"The best revenge is massive success."

    --Frank Sinatra`,
    `"Resentment is like drinking poison and waiting for your enemies to die."

    --Nelson Mandela`,
    `"You miss 100% of the shots you don't take."

    --Wayne Gretzy`,
    `"Do not take life too seriously. You will not get out alive."
    
    --Elbert Hubbard`
]

var currentParagraph = "";

function showRandomParagraph() {

    var randomIndex;
    var newParagraph;

    do {
        randomIndex = Math.floor(Math.random() * Quotes.length);
        newParagraph = Quotes[randomIndex];
    } while (newParagraph === currentParagraph);

    document.getElementById("Paragraph").innerText = newParagraph;

    currentParagraph =newParagraph;
}