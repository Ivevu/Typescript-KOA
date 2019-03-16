import * as Router from "koa-router";
const ArticleController = require('../controller/diary.controller')

const router = new Router({
  prefix: '/api',
})

/**
 * 文章接口
 */
// 创建文章接口（路由）
router.post('/article', ArticleController.create);
// 获取文章详情接口（路由）
router.get('/article/:id', ArticleController.detail);


router.get('/', async (ctx: any) => {
  ctx.body = "首页";
})


export default router;