class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // implemented as in previous challenge
    if (!this.left) {
      this.left = node;
    }
    this.right.add(node);
  }

  findPerson(name) {
    // takes name and returns person object
    // starting at the root, find person by name by comparing nodes
    // return person object
    if (name === this.value) {
      return this.person;
    } else if (name !== this.value) {
      this.left.findPerson(name);
      return this.person || null;
    } else {
      this.right.findPerson(name);
      return this.person || null;
    }
  }
}
