<template>
	<div class="slide-show-wrap"  @mouseout="runInterval" @mouseover="stopInterval">
		<div class="slide-show-body">
			<router-link :to="{path: slideShowData[selectIndex].url}">
				<img :src="slideShowData[selectIndex].src" />
			</router-link>
		</div>
		<div class="slide-title-bar">
			<div class="slide-title-bar-title">{{slideShowData[selectIndex].title}}</div>
			<ul class="slide-title-bar-index">
				<li @click="gotoPrev(selectIndex)">&lt;</li>
				<li v-for="(item, index) in slideShowData" @click="gotoIndex(index)">{{index + 1}}</li>
				<li @click="gotoNext(selectIndex)">&gt;</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			slideShowData: {
				type: Array,
				default: []
			},
			intervalTime: {
				type: Number,
				default: 1000
			}
		},
		data: () => {
			return{
				selectIndex: 0
			}
		},
		methods: {
			gotoIndex (index){
				this.selectIndex = index;
				this.$emit('onchange',index);
			},
			gotoPrev (index) {
				if(index == 0){
					this.selectIndex = this.slideShowData.length - 1;
				}else{
					this.selectIndex = index - 1;
				}
			},
			gotoNext (index) {
				if(index == this.slideShowData.length - 1){
					this.selectIndex = 0;
				}else{
					this.selectIndex = index + 1;
				}
			},
			runInterval () {
				this.intervalId = setInterval(()=>{
					this.gotoNext(this.selectIndex);
				},this.intervalTime)
			},
			stopInterval () {
				clearInterval(this.intervalId)
			}
		},
		mounted () {
			this.runInterval();
		}
	}
</script>

<style scoped>
.slide-show-wrap{
	width: 899px;
	height: 506px;
	border: 0px solid red;
	overflow: hidden;
	margin-top:15px;
}
.slide-title-bar {
	width: 100%;
	height: 35px;
	border: 0px solid red;
	position: relative;
	bottom: 36px;
	left: 0;
	background: black;
	opacity: 0.3;
	color: white;
}
.slide-title-bar-title{
	float: left;
	margin: 5px;
	line-height: 20px;
}
.slide-title-bar-index{
	float: right;
	margin-right: 50px;
}
.slide-title-bar-index li{
	float: left;
	width: 30px;
	height: 35px;
	line-height: 30px;
	border: 0px solid red;
	text-align:center;
	cursor: pointer;
}
</style>