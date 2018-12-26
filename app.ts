import * as Koa from 'koa';
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
  console.log(1)
  await next();
  console.log(2)
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});
app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(3)
  await next();
  console.log(4)
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(4399);
