class Messages{
    constructor(){
        this.messages = [];
    }
    add(message){
        this.messages.push(message);
    }
    getFromIndex(i){
        return this.messages.slice(i);
    }
    getSize(){
        return this.messages.length;
    }
}
module.exports = Messages;