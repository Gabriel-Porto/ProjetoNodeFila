class Queue {
  constructor() {
    this.q = []
  }
  push(item) {
    this.q.push(item)
  }
  shift() {
    return this.q.shift()
  }
  get() {
    return this.q.length;
  }
}

module.exports = Queue;