module.exports = {
  get url() {
    return this.requst.url
  },
  get body() {
    console.log('body is ')
    return this.response.body;
  },
  set body(val) {
    this.response.body = val
  }
}