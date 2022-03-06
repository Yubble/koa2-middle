/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-12-23 23:14:21
 **/
const koa = require('koa2')
const app = new koa()

app.use(async (ctx, next) => {
  console.log('第一层 开始')
  ctx.body = { data: '相应中间' }
  await next()
  console.log('第一层 结束')
})

app.use(async (ctx, next) => {
  console.log('第二层 开始')
  await next()
  ctx.body = { data: '相应最后' }
  console.log('第二层 结束')
})

app.listen(3200)