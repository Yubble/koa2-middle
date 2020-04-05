const skoa = require('./myKoa/selfKoa')
const app = new skoa()

app.use(async (req, res, next) => {
  // console.log('1 start body is ', res.body)
  // console.log('中间件1开始')
  next()
  // console.log('1 end body is ', res.body)
  // console.log('中间件1结束')
})

app.use(async (req, res, next) => {
  // console.log('2 start body is ', res.body)
  // console.log('中间件2开始')
  next()
  // console.log('中间件2结束')
  // console.log('2 end body is ', res.body)
})

app.use(async (req, res, next) => {
  res.body = 'this is end'
  next()
  // console.log('3 body is ', res.body)
})
app.listen(3400)