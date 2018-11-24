const domain = 'http://139.159.231.245'; // 正式
//const domain = 'http://192.168.24.17:8081'; // 正式

export default {
  //轮播图
  queryCarouselInfo: `${domain}/aegFrontSystem/restServer/dataService/queryCarouselInfo`,
  //
  findItemForWAP: `${domain}/aegFrontSystem/restServer/itemCatService/findItemForWAP`,

  //食谱类型接口
  findRecipeType: `${domain}/aegFrontSystem/restServer/recipeFrontService/findRecipeType`,
  //根据类别查询食谱列表接口
  findRecipeContent: `${domain}/aegFrontSystem/restServer/recipeFrontService/findRecipeContent`,
  //食谱详情接口
  findRecipeContentDetils: `${domain}/aegFrontSystem/restServer/recipeFrontService/findRecipeContentDetils`,
  //食谱推荐接口
  findRecommendRecipe: `${domain}/aegFrontSystem/restServer/recipeFrontService/findRecommendRecipe`,
  //查询食谱总数接口
  findRecipeNum: `${domain}/aegFrontSystem/restServer/recipeFrontService/findRecipeNum`,

  //faq查询type接口
  findFaqType: `${domain}/aegFrontSystem/restServer/saafLookupServlet/findFaqType`,
  //faq查询type接口
  findFaqList: `${domain}/aegFrontSystem/restServer/faqFrontService/findFaqList`,

  //品牌新闻(故事)查询接口
  findArticleManagementInfo: `${domain}/aegFrontSystem/restServer/articleFrontService/findArticleManagementInfo`,
  //品牌新闻(故事)详情接口
  queryArticleInfoById: `${domain}/aegFrontSystem/restServer/articleFrontService/queryArticleInfoById`,

  //服务支持查询接口
  queryServiceSupportList: `${domain}/aegFrontSystem/restServer/serviceSupportService/queryServiceSupportList`,
  //服务支持详情接口
  queryServiceInfoById: `${domain}/aegFrontSystem/restServer/serviceSupportService/queryServiceInfoById`,

  //明星专栏产品列表查询接口
  queryCmsStarProductPage: `${domain}/aegFrontSystem/restServer/cmsStarProductService/queryCmsStarProductPage`,
  //明星专栏产品详情接口
  queryCmsStarProductById: `${domain}/aegFrontSystem/restServer/cmsStarProductService/queryCmsStarProductById`,

  //产品手册列表查询接口
  queryCmsProductManualsPage: `${domain}/aegFrontSystem/restServer/cmsProductManualsService/queryCmsProductManualsPage`,
  //产品手册详情接口
  queryProductInfoById: `${domain}/aegFrontSystem/restServer/cmsProductManualsService/queryProductInfoById`,

  //商品维护产品列表
  findItemSpu: `${domain}/aegFrontSystem/restServer/itemSpuService/findItemSpu`,
  //商品维护产品详细信息
  findItemSpuDetails: `${domain}/aegFrontSystem/restServer/itemSpuService/findItemSpuDetails`,
  //商品分类
  findItemTree: `${domain}/aegFrontSystem/restServer/itemCatService/findItemTree`,

  //登录账户
  loginMember: `${domain}/aegFrontSystem/restServer/memberInfoService/loginMember`,

  //查询用户信息
  queryUserInfo: `${domain}/aegFrontSystem/restServer/memberInfoService/queryUserInfo`,

  //保存用户信息
  updateUserInfo: `${domain}/aegFrontSystem/restServer/memberInfoService/updateUserInfo`,

  //查询用户消息数据
  querymsgTemplateInfo: `${domain}/aegFrontSystem/restServer/messageService/querymsgTemplateInfo`,

  //查询用户收藏数据
  findCollection: `${domain}/aegFrontSystem/restServer/itemCollectionService/findCollection`,

  //获取验证码
  sendCode: `${domain}/aegFrontSystem/restServer/memberInfoService/sendsCode`,

  //用户注册
  saveRegisteredMember: `${domain}/aegFrontSystem/restServer/memberInfoService/saveRegisteredMember`,

  //找回密码
  recoverPassword: `${domain}/aegFrontSystem/restServer/memberInfoService/recoverPassword`,

  //收藏产品
  saveCollection: `${domain}/aegFrontSystem/restServer/itemCollectionService/saveCollection`,

  //删除收藏产品
  deleteCollection: `${domain}/aegFrontSystem/restServer/itemCollectionService/deleteCollection`,

  //意见反馈
  feedback: `${domain}/aegFrontSystem/restServer/csdFront/save`,

  //评论列表
  findCommentsList: `${domain}/aegFrontSystem/restServer/aegCommentsService/findCommentsList`,

  //评论详细
  findCommentsById: `${domain}/aegFrontSystem/restServer/aegCommentsService/findCommentsById`,

  //保存评论
  saveCommentsList: `${domain}/aegFrontSystem/restServer/aegCommentsService/saveCommentsList`,

}

