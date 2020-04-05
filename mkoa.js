const koa = require('koa2')
const app = new koa()

app.use(async ctx => {
  ctx.body = 'hi koa2'
})

app.listen(3200)