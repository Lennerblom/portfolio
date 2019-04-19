
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.previous = null;
    this.image = '';
  }
}

class LinkedList {
    
  constructor(val) {
    this.head = null;
    this.value = val;
    this.next = null;
  }
  
  append(val){
    let node = new Node(val);
    if(this.head === null) {
      this.head = new Node(val);
    } else {
      node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(val);
    }
    return node.next;
  }

  prepend(val) {
    let node = new Node(val);
    if(this.head === null) {
      this.head = node;
    } else {
      node.next = this.head ;
      this.head = node;
    }
    return this.head;
  }

  reverse() {
    let current = this.head;
    if(!this.head) {return null;}
    else if(this.head.next === null) {
      return this.head;
    } else {
      while(current.next) {
        let save = current.next;
        current.next = this.previous;
        this.previous = current;
        current = save;
      }
      this.head = current;
      this.head.next = this.previous;
    }
  }
 
  remove(offset) {
    let newHead;
    if(!this.head || !this.head.next && this.head === offset) {return null;}
    if(this.head === offset){
      this.head = this.head.next;
      this.head.next = newHead;
      this.head = newHead;
      return this.head;
    }
    let current = this.head;
    while(current.next) {
      if(current.next.value === offset) {
        current.next = current.next.next;
        break;
      }
      current = current.next;
    }
  }
  serialize() {
    let str = '';
    let node = this.head;
    while(node) {
      str += '[' + node.value + '] ->';
      node = node.next;
    }
    str += '[X]';

    return str;

  }
  // deserialize() {
  //   let something;
  //   something;
  // }
}

export default LinkedList;
