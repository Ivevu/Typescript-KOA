// formatLog.js
let formatError = (ctx: any, err: any, costTime: any) => {
  let method = ctx.method
  let url = ctx.url
  let body = ctx.request.body
  let userAgent = ctx.header.userAgent
  return { method, url, body, costTime, err }
}
let formatRes = (ctx: any, costTime: any) => {
  let method = ctx.method
  let url = ctx.url
  let body = ctx.request.body
  let response = ctx.response
  return { method, url, body, costTime, response }
}
export = { formatError, formatRes }