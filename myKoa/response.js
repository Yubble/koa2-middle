module.exports = {
  get body() {
    return this.req.url
  },
  set body(val) {
    this._body = val
  }
}