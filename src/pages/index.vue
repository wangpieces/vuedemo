<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2>全部产品</h2>
				<template v-for="product in productList">
					<h3>{{product.title}}</h3>
					<ul>
						<li v-for="item in product.list">
							<a v-bind:href="item.url">{{item.name}} <span v-if="item.hot" class="hot-tag">HOT</span></a>
						</li>
					</ul>
					<div v-if="!product.last" class="hr"></div>
				</template>
			</div>
			<div class="index-left-block lastest-news">
				<h2>最新消息</h2>
				<ul>
					<li v-for="item in newsList.list">
						<a :ng-href="item.url">{{item.name}} <span v-if="item.hot" class="hot-tag">HOT</span></a>
					</li>
				</ul>
			</div>
		</div>
		<!--index-left end-->
		<div class="index-right">
			<slide-show :slideShowData="slideShowData" :intervalTime="intervalTime" @onchange="doSomeThing"></slide-show>
			<div class="index-board-list">
				<div class="index-board-item" v-for="(item, index) in boardList" :class="[{'line-last' : index % 2 !== 0},'index-board-' + item.id]">
					<div class="index-board-item-inner">
						<h2>{{item.title}}</h2>
						<p>{{item.desc}}</p>
						<div class="index-board-button">
							<a href="" class="button">立即购买</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import slideShow from '../components/slideShow'
	export default {
		created (){
			this.$http.get('api/getProductList').then((res) => {
				this.productList = res.data;
			},(err) => {
				console.log('error-msg',error);
			});
			this.$http.get('api/getBoardList').then((res) => {
				this.boardList = res.data;
			},(err) => {
				console.log('error-msg',error);
			});
			this.$http.get('api/getNewsList').then((res) => {
				this.newsList = res.data;
			},(err) => {
				console.log('error-msg',error);
			});
		},
		components: {
			slideShow //简写，相当于 slideShow: slideShow
		},
		methods:{
			doSomeThing (...data) {
				console.log(data[0]);
			}
		},
		data () {
			return {
				intervalTime: 3000,
				productList: {},
				newsList: {},
				boardList: [],
				slideShowData: [
					{
				      "title" : "数据统计",
				      "src" : require("../assets/slide/pic1.jpg"),
				      "url" : "detail/count",
				      "desc" : "数据统计"
				    },{
				      "title" : "数据预测",
				      "src" :  require("../assets/slide/pic2.jpg"),
				      "url" : "detail/forecast",
				      "desc" : "数据预测"
				    },{
				      "title" : "流量分析",
				      "src" :  require("../assets/slide/pic3.jpg"),
				      "url" : "detail/analysis",
				      "desc" : "流量分析"
				    },{
				      "title" : "广告发布",
				      "src" :  require("../assets/slide/pic4.jpg"),
				      "url" : "detail/publish",
				      "desc" : "广告发布"
				    }
				]
			}
		}
	}
</script>

<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>