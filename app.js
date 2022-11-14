class Message {
    constructor(author, text) {
        this.author = author;
        this.time = new Date();
        this.text = text;
    }

    toString() {
        return `${this.time.getHours()}:${this.time.getMinutes()} ${this.author}: ${this.text}`
    }
}

class Messenger {
    constructor() {
        this.newMessages = []
    }
    show_history() {
        this.newMessages.forEach(item => console.log(item))
    }
    send(author, text) {
        let message = new Message(author, text)
        this.newMessages.push(message.toString())
    }
}

const newMessage = new Messenger();
newMessage.send('Shahnaz', 'Salam')
newMessage.send('Banu', 'Salam')
newMessage.send('Shahnaz', 'Necesen?')
newMessage.show_history();
console.log(newMessage);