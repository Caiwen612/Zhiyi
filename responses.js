//-- Author: Low Zhi Yi

function botResponse(input) {
    const chatList = [
        "location",
        "contact",
        "product",
        "price",
        "cost",
        "tnc",
        "shipping",
        "delivery time",
        "hi", "hello",
        "how are you",
        "nice to meet you",
        "good morning",
        "bye",
        "ok", "okay",
        "thank you",
        "help"
    ];

    const replyList = [
        "We have a lot of branches in Malaysia! You can find the nearest store from <a href='retailstore.html' class='chat-link'>here</a>.",
        "Feel free to contact us <a href='contact_us.html' class='chat-link'>here</a> :)",
        "We are selling <a href='fragrance.html' class='chat-link'><strong>fragrances</strong></a> and <a href='makeup.html' class='chat-link'><strong>makeups</strong></a> for face, eyes, lips, nails and also makeup remover.",
        "Our makeup products cost as low as RM60 and as high as RM248, while the price of our fragrance products are ranged in RM182 to RM570.",
        "Our makeup products cost as low as RM60 and as high as RM248, while the price of our fragrance products are ranged in RM182 to RM570.",
        "You can find the full version of terms and condition at <a href='tnc.html' class='chat-link'>here</a>!",
        "You can enjoy free shipping for orders with more than a total price of RM110.",
        "It takes 5-7 business days for West Malaysia and 5-11 business days for East Malaysia and Labuan.",
        "Hello :>", "Hey there :]",
        "I'm energized to help you :D",
        "Morning! How are you?",
        "Nice to meet you too! Is there anything I could help?",
        "Goodbye! Have a nice day! ^^",
        ":D", ":D",
        "You are welcome!",
        "You can search for:<br />location<br />contact<br />product<br />price<br />tnc<br />shipping<br />delivery time"
    ];

    // make input to lower case so that input is not case sensitive
    var inputLower = input.toLowerCase();

    for (var i = 0; i < chatList.length; i++) {
        console.log(inputLower == chatList[i]);
        if (inputLower == chatList[i])
            return replyList[i];
    }

    return "Sorry! I cannot understand your words. Reply '<b>help</b>' " +
    "to get the list of available questions or you may find answers " + 
    "at <a href='faq.html' class='chat-link'>here</a>.";
}