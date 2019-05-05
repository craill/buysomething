<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a> &gt;
        <a href="/goods/42/1.html">商品详情</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <div class="left-925">
            <div class="goods-box clearfix">
              <div class="pic-box">
                <!-- <img :src="item.thumb_path" alt="" v-for="(item, index) in imglist" :key="index"> 
                -->
                <el-carousel height="310px" trigger="click">
                  <el-carousel-item v-for="item in imglist" :key="item.id">
                    <img :src="item.thumb_path" alt class="slider">
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="goods-spec">
                <h1>{{goodsinfo.title}}</h1>
                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em id="commoditySellPrice" class="price">¥{{goodsinfo.sell_price}}</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <el-input-number
                          v-model="num"
                          :min="1"
                          :max="goodsinfo.stock_quantity"
                          label="描述文字"
                        ></el-input-number>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div id="buyButton" class="btn-buy">
                        <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                        <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="goodsTabs" class="goods-tab bg-wrap">
              <div
                id="tabHead"
                class="tab-head"
                style="position: static; top: 517px; width: 925px;"
              >
                <ul>
                  <li>
                    <a href="javascript:;" :class="{selected:isdesc}" @click="isdesc=true">商品介绍</a>
                  </li>
                  <li>
                    <a href="javascript:;" :class="{selected:!isdesc}" @click="isdesc=false">商品评论</a>
                  </li>
                </ul>
              </div>
              <div class="tab-content entry" v-show="isdesc" v-html="goodsinfo.content">
                <!-- 内容 -->
              </div>
              <div class="tab-content" v-show="!isdesc">
                <div class="comment-box">
                  <div id="commentForm" name="commentForm" class="form-box">
                    <div class="avatar-box">
                      <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                      <div class="editor">
                        <textarea
                          id="txtContent"
                          name="txtContent"
                          sucmsg=" "
                          data-type="*10-1000"
                          nullmsg="请填写评论内容！"
                          v-model.trim="mycomment"
                        ></textarea>
                        <span class="Validform_checktip"></span>
                      </div>
                      <div class="subcon">
                        <input
                          id="btnSubmit"
                          name="submit"
                          type="submit"
                          value="提交评论"
                          class="submit"
                          @click="submit"
                        >
                        <span class="Validform_checktip"></span>
                      </div>
                    </div>
                  </div>
                  <ul id="commentList" class="list-box">
                    <p
                      style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                    >暂无评论，快来抢沙发吧！</p>
                    <li v-for="(item, index) in message" :key="index">
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>{{item.user_name}}</span>
                          <span>{{item.add_time}}</span>
                        </div>
                        <p>{{item.content}}</p>
                      </div>
                    </li>
                    <!-- <li>
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>匿名用户</span>
                                                    <span>2017/10/23 14:59:36</span>
                                                </div>
                                                <p>很清晰调动单很清晰调动单</p>
                                            </div>
                    </li>-->
                  </ul>
                  <div class="page-box" style="margin: 5px 0px 0px 62px;">
                    <div class="block">
                      <!-- <span class="demonstration">完整功能</span> -->
                      <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageIndex"
                        :page-sizes="[5, 10, 15, 20]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalcount"
                        background
                      ></el-pagination>
                    </div>
                    <!-- <div id="pagination" class="digg">
                      <span class="disabled">« 上一页</span>
                      <span class="current">1</span>
                      <span class="disabled">下一页 »</span>
                    </div>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list">
                  <li v-for="(item, index) in hotgoodslist" :key="index">
                    <div class="img-box">
                      <!-- <a href="#/site/goodsinfo/90" class> -->
                      <router-link :to="'/detail/'+item.id">
                        <img :src="item.img_url">
                      </router-link>
                      <!-- </a> -->
                    </div>
                    <div class="txt-box">
                      <!-- <a href="#/site/goodsinfo/90" class> -->
                      <router-link :to="'/detail/'+item.id">{{item.title}}</router-link>
                      <!-- </a> -->
                      <span>{{item.add_time | change}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { log } from 'util';
// import axios from "axios";
export default {
  name: "detail",
  data() {
    return {
      hotgoodslist: [],
      goodsinfo: {},
      imglist: [],
      num: 1,
      isdesc: true,
      pageIndex: 1,
      pageSize: 10,
      message: [],
      totalcount: 0,
      mycomment: ""
    };
  },
  methods: {
    getComments() {
      this.$axios
        .get(
          `/site/comment/getbypage/goods/${this.$route.params.id}?pageIndex=${
            this.pageIndex
          }&pageSize=${this.pageSize}`
        )
        .then(res => {
          console.log(res);
          this.pageIndex = res.data.pageIndex;
          this.pageSize = res.data.pageSize;
          this.message = res.data.message;
          this.totalcount = res.data.totalcount;
        });
    },
    // 改变页容量
    handleSizeChange(val) {
      this.pageSize = val;
      // 获取新数据后渲染
      this.getComments();
    },
    //改变当前页
    handleCurrentChange(val) {
      this.pageIndex = val;
      // 获取新数据后渲染
      this.getComments();
    },
    // 点击提交评论
    submit() {
      if (this.mycomment=='') {
        this.$message.warning('评论不允许为空')
        return
      }
      this.$axios.post(
        `/site/validate/comment/post/goods/${this.$route.params.id}`,
        {
          commenttxt: this.mycomment
        }
      ).then(res => {
        console.log(res);
        if (res.status==200) {
          this.$message.success(res.statusText)
          // 文本域清空
          this.mycomment=''
           // 重新获取评论数据
            this.getComments()
        }
      });
    }
  },
  created() {
    // console.log(this.$route.params.id);
    this.$axios
      .get(`/site/goods/getgoodsinfo/${this.$route.params.id}`)
      .then(res => {
        // console.log(res);
        this.hotgoodslist = res.data.message.hotgoodslist;
        this.goodsinfo = res.data.message.goodsinfo;
        this.imglist = res.data.message.imglist;
      });
    this.getComments();
  },
  watch: {
    "$route.params.id"(newval) {
      this.$axios
        .get(`http://111.230.232.110:8899/site/goods/getgoodsinfo/${newval}`)
        .then(res => {
          // console.log(res);
          this.hotgoodslist = res.data.message.hotgoodslist;
          this.goodsinfo = res.data.message.goodsinfo;
          this.imglist = res.data.message.imglist;
        });
    }
  }
};
</script>

<style>
.tab-content img {
  display: block;
  margin: 0 auto;
}
.pic-box {
  width: 360px;
  /* height: 310px; */
}
</style>
