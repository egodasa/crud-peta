'use strict'

class Column {
  constructor(name, caption = null, content = null){
    this.name = name
    this.caption = caption
    this.content = content
  }
}

module.exports = Column
