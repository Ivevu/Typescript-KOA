
import * as Koa from 'koa';
import * as Router from "koa-router";
const path = require('path')
const server = require('koa-static')
const app = new Koa()
const router = new Router();
var bodyParser = require('koa-bodyparser');
const staticPath = './webapp'
app.use(bodyParser());
app.use(server(path.join(__dirname, staticPath)))
// app.use(async ctx => {
//   // ctx.body = ctx.request.body;
//   ctx.body = ctx.request.query
// });

app.use(router.routes());
app.listen(4399);