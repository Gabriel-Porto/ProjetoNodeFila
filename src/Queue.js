class Queue {
  constructor() {
      this.items = []
      this.frontIndex = 0
      this.backIndex = 0
  }
  push(item) {
      this.items.push(item)
      this.backIndex++
      return item + ' inserido'
  }
  shift() {
      const item = this.items[this.frontIndex]
      this.items.shift()
      this.frontIndex++
      return item + ' retirado '
  }
  peek() {
      return this.items[this.frontIndex]
  }
  get printQueue() {
      return this.items;
  }
  get length() {
    return this.items.length;
  }
}

module.exports = Queue;