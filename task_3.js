//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

class Notes {
    static Priority() {
        return {
            HIGH: 'high',
            LOW: 'low',
        }
    }
    constructor() {
        this.items = [];

    }
    addNote(note) {
        return this.items.push(note);
    }
    removeNote(text) {
        this.items = this.items.filter(el => el.text !== text)
    }
    updatePriority(text, newPriority) {
        const indexNote = this.items.findIndex(el => el.text === text)
        this.items[indexNote].priority = newPriority
    }
}
const notes = new Notes();
notes.addNote({ text: 'hello', priority: Notes.Priority().LOW });
notes.addNote({ text: 'WORLD', priority: Notes.Priority().HIGH });
notes.removeNote("hello");
notes.updatePriority('WORLD', Notes.Priority().LOW);
console.log('notes: ', notes);


const person = {
    name: 'Jon',

}