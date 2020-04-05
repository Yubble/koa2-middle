const http = require('http')
// const request = require('./request')
// const response = require('./response')
// const context = require('./context')

module.exports = class sKoa {
  constructor () {
    this.middlewares = []
  }
  listen (...args) {
    http.createServer(async (req, res) => {
      // 创建上下文
      const ctx = this.createContext(req, res);
      const fn = this.compose(this.middlewares)
      await fn(ctx)
      // 返回数据
      res.end(ctx.res.body)
    }).listen(...args)
  }
  use (mid) {
    this.middlewares.push(mid)
  }
  createContext (req, res) {
    // const ctx = Object.create(context)
    const ctx = {}
    ctx.request = Object.create(req)
    ctx.response = Object.create(res)

    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;

    return ctx
  }
  compose (middlewares) {
    return function (ctx) {
      return dispatch(0)
      function dispatch(i) {
        let fn = middlewares[i]
        if (!fn) {
          return Promise.resolve();
        }
        return Promise.resolve(
          fn (ctx.req, ctx.res, function next() {
            return dispatch(i + 1)
          })
        )
      }
    }
  }
}