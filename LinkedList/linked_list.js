var { Node } = require('./linked_list_node.js');

class LinkedList{
  constructor(){
    this.head;
    this.tail;
    this.length = 0;
  }

  appendNode(value){
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.length++;
      return;
    }else if(!this.tail){
      this.head.next = newNode;
      this.tail = this.head.next;
      this.length++;
      return;
    }
    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.length++;
    
  }

  clearList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prependNode(value){
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  removeNode(value){
    let tempNode = this.head;
    let previousNode =this.head;
    let counter = 0;
    while(tempNode){
      let currentNode = tempNode;
      let nextNode = tempNode.next;
      if(currentNode.value === value && counter <= this.length){
        previousNode.next = nextNode;
        tempNode = currentNode.next;
        if(counter == this.length){
          this.tail = previousNode;
        }
        this.length--;
        counter++;
        continue;
      }
      previousNode = currentNode;
      tempNode = tempNode.next;
      counter++;
    }
  }
}

module.exports.LinkedList = LinkedList;