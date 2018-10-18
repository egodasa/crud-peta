'use strict'

const qs = require('qs');

class Datatable {
  setPageUrl(p){
    this.pageUrl = p
  }
  setRequest(req){
    this.req = req;
  }
  setUrl(url){
    this.url = url;
  }
  setPrimaryKey(p){
    this.primaryKey = p;
  }
  setColumn(c){
    this.column = c;
  }
  getPageUrl(namePage){
    let url = Object.assign({}, this.req);
    namePage == 'next' ? url[this.pageUrl]++ : url[this.pageUrl]--;
    return `${this.url}?${qs.stringify(url)}`
  }
  setPagination(paginate){
    Object.assign(this, paginate)
  }
}

module.exports = Datatable
