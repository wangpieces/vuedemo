<template>
	<div class="dialog-wrap" v-if="isShow">
		<div class="dialog-cover" @click="closeDialog"></div>
		<transition name="drop">
			<div class="dialog-content-wrap">
				<div class="dialog-close" @click="closeDialog">x</div>
				<div class="dialog-title">{{title}}</div>
				<div class="dialog-content">
					<slot></slot>
				</div>
			</div>
		</transition>
	</div>
</template>

<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}
.dialog-cover{
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0px;
	left: 0px;
	opacity: 0.3;
	background: #000;
	border: 0px solid red;
}
.dialog-content-wrap{
	width: 40%;
	min-height: 30%;
	position: fixed;
	top: 25%;
	left: 30%;
	background: white;
	border: 0px solid red;
	border-radius: 10px;
	border:3px solid #666;
}
.dialog-close{
	float: right;
	margin: 5px;
	margin-right: 10px;
	cursor: pointer;
	font-weight: bold;
	font-size:18px;
}
.dialog-title{
	margin-left: 47%;
	margin-top:10px;
	font-size:18px;
}
.dialog-content{
	clear: right;	
	font-size:18px;
	white-space: pre-line;
	text-indent: 2em;
	padding: 20px 30px 30px 30px;
	line-height: 35px;
}
</style>
<script type="text/javascript">
	export default {
		props:{
			isShow: {
				type: Boolean,
				default:false
			},
			title: {
				type: String,
				default: ''
			}
		},
		methods:{
			closeDialog () {
				this.$emit('click-dialog');
			}
		},
		data () {
			return {
				
			}
		}
	}

</script>