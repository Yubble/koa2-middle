/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-12-23 23:14:21
 **/
const express = require('express')
const app = express()

app.use((res, req, next) => {
  console.log('第一层 开始')
  next()
  console.log('第一层 结束')
})

app.use((res, req, next) => {
  console.log('第二层 开始')
  next()
  console.log('第二层 结束')
})

app.listen(3100)