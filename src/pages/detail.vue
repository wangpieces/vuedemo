<template>
	<div class="detail-wrap">
		<div class="detail-wrap-left">
			<img :src="productIcon">
			<ul class="wrap-detail-ul">
				<router-link v-for="(item,index) in products" :to="{path: item.path}" tag="li" active-class="active" :key="index">{{item.name}}
				</router-link>
			</ul>
		</div>
		<div class="detail-wrap-right">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<style type="text/css">
.detail-wrap{
	width: 1210px;
	min-height: 500px;
	border:0px solid red;
	overflow: hidden;
	margin-top:10px;
}
.detail-wrap-left{
	width: 300px;
	min-height: 500px;
	border:0px solid red;
	float: left;
	margin-right: 20px;
}
.detail-wrap-right{
	width: 880px;
	min-height: 500px;
	border: 0px solid red;
	float: left;
}
.wrap-detail-ul li:first-child{
	border-top: 0px solid red;
}
.wrap-detail-ul li{
	width: 95%;
	height: 30px;
	padding: 5px;
	margin: 2px;
	border-bottom:0px solid red;
	cursor: pointer;
	text-align: left;
	line-height: 30px;
	background: none;
}
.wrap-detail-ul li:hover{
	background-color: #ddd;
}
.wrap-detail-ul li.active{
	background-color: #4fc08d;
	color: white;
}
.sales-wrap {
	width: 100%;
	height: 100%;
	margin:10px;
	padding:10px;
}
.sales-wrap-footer h2,
.sales-wrap-header h2{
	font-size: 1.5em;
	color: #555;
}
.sales-wrap-footer p,
.sales-wrap-header p{
	padding:30px 0px 20px 0px;
	line-height: 30px;
	text-indent: 2em;
}
.sales-wrap-footer{
	margin-top:50px;
	padding:10px;
}
.sales-wrap-table{
	width: 98%;
	border:0px solid red;
}
.ui-table-row{
	padding:2px;
}
.intro-pic{
	margin: 10px;
	padding:10px;
}
</style>

<script type="text/javascript">
	export default {
		data () {
			return {
				products: [
					{
			          name: '数据统计',
			          path: 'count',
			          // icon: require('../assets/images/1.png'),
			          active: false
			        },{
			          name: '数据预测',
			          path: 'forecast',
			          active: false
			        },{
			          name: '流量分析',
			          path: 'analysis',
			          active: false
			        },{
			          name: '广告发布',
			          path: 'publish',
			          active: false
			        }
				],
				imgMap: {
			        '/detail/count': require("../assets/images/1.png"),
			        '/detail/forecast': require("../assets/images/2.png"),
			        '/detail/analysis': require("../assets/images/3.png"),
			        '/detail/publish': require("../assets/images/4.png")
     			}
			}
		},
		computed: {
			productIcon () {
				return this.imgMap[this.$route.path]
			}
		}
	}
</script>