
import * as Koa from 'koa';
const router = require('./router/index');
const app = new Koa();

// const path = require('path');
// const server = require('koa-static');
var bodyParser = require('koa-bodyparser');
// const staticPath = './webapp';

app.use(bodyParser());
// app.use(server(path.join(__dirname, staticPath)));
// app.use(async ctx => {
//   // ctx.body = ctx.request.body;
//   ctx.body = 'ctx.request.query'
// });


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4399);