var { LinkedList } = require('./linked_list');

let linkedList = new LinkedList();

linkedList.appendNode(5);
linkedList.appendNode(10);
linkedList.appendNode(15);
linkedList.appendNode(20);
linkedList.prependNode(1);
linkedList.removeNode(20);
console.log(linkedList);