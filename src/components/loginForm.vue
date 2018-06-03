<template>
	<div class="form-wrap">
		<div class="form-wrap-group">
			<label>用户名</label>
			<input type="text" v-model="username" placeholder="输入用户名">
			<span>{{userNameCheck.errorText}}</span>
		</div>
		<div class="form-wrap-group">
			<label>密　码</label>
			<input type="password" v-model="password" placeholder="输入密码">
			<span>{{passwordCheck.errorText}}</span>
		</div>
		<div class="form-wrap-group">
			<button class="button" @click="login">登录</button>
			<span>{{errorTip}}</span>
		</div>
	</div>
</template>

<style type="text/css">

</style>
<script type="text/javascript">
	export default {
		methods: {
			login () {
				if(!(this.username === '' || this.password === '') &&
					this.userNameCheck.status && this.passwordCheck.status) {
					this.errorTip = '';
					this.$http.get('api/getUserInfo').then((res) => {
						this.$emit('has-login',res.data);
					},(error) => {
						console.log(error);
					});
				}else {
					this.errorTip = '请填写正确的用户名密码';
				}
			}
		},
		computed:{
			userNameCheck () {
				var errorText = '';
				var status = true;
				var passwordFlat = true;
				if (!/@/g.test(this.username)) {
			        status = false;
			        errorText = '不包含@'
			    }else {
			    	status = true;
			    	errorText = '';
			    }
			    if(!this.usernameFlag) {
			    	status = true;
			    	errorText = '';
			    	this.usernameFlag = true;
			    }
			    return {
			    	status,
			    	errorText
			    }
			},
			passwordCheck () {
				var errorText = '';
				var status = true;
				if (!/^\w{3,18}$/g.test(this.password)) {
			        status = false
			        errorText = '密码不是3-18位'
			      }else {
			        status = true
			        errorText = ''
			      }
			      if(!this.passwordFlag) {
			    	status = true;
			    	errorText = '';
			    	this.passwordFlag = true;
			      }
			      return {
			      	status,
			      	errorText
			      }
			}
		},
		data () {
			return {
				username: 'wangpiece@163.com',
				password: '',
				errorTip: ''
			}
		}
	}
</script>