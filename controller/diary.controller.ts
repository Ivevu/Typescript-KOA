import logger from '../util/log';
import  { ArticleModel } from '../module/diary.model';

class articleController {
  /**
   * 创建文章
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async create(ctx: any) {
    // 接收客服端
    let req = ctx.request.body;
    console.log(req.title);
    console.log(req.author);
    console.log(req.content);
    console.log(req.category);


    if (req.title // 文章标题
      && req.author // 文章作者
      && req.content // 文章内容
      && req.category // 文章分类
    ) {
      try {
        console.log(ArticleModel);

        // 创建文章模型
        const ret = await ArticleModel.createArticle(req);
        // 把刚刚新建的文章ID查询文章详情，且返回新创建的文章信息
        const data = await ArticleModel.getArticleDetail(ret.id);

        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '创建文章成功',
          data
        }
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          msg: '创建文章失败',
          data: err
        }
      }
    } else {
      const start = new Date()
      logger.resLogger(ctx, start)

      ctx.response.status = 416;
      ctx.body = {
        code: 200,
        msg: '参数不齐全',
      }
    }

  }

  /**
   * 获取文章详情
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async detail(ctx: any) {
    let id = ctx.params.id;
    console.log(1);

    if (id) {
      try {
        // 查询文章详情模型
        let data = await ArticleModel.getArticleDetail(id);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '查询成功',
          data
        }

      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: '查询失败',
          data: err
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: '文章ID必须传'
      }
    }
  }
}

module.exports = articleController