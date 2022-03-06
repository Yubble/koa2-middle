/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-12-23 23:14:21
 **/
const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('第一层 开始')
  res.send('响应中间')
  next()
  console.log('第一层 结束')
})

app.use((req, res, next) => {
  console.log('第二层 开始')
  next()
  res.send('响应最后')
  console.log('第二层 结束')
})

app.listen(3300)