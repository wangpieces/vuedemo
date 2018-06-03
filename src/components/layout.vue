<template>
	<div>
		<div class="app-head">
			<div class="app-head-inner">
        <router-link :to="{path: '/'}">
				  <img src="../assets/logo.png">
        </router-link>
				<div class="head-nav">
					<ul class="nav-list">
            <li v-if="username !== ''">{{username}}</li>
						<li v-if="username === ''" @click="loginClick">登录</li>
						<li class="nav-pile">|</li>
						<li v-if="username === ''" @click="registerClick">注册</li>
            <li v-if="username !== ''">退出</li>
						<li class="nav-pile">|</li>
						<li @click="aboutClick">关于</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container">
			<!--页面缓存-->
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="app-foot">
			<p>© 2018 fishenal MIT</p>
		</div>
    <!--index-right end-->
    <my-dialog :is-show="isLoginDialogShow" title="登录" @click-dialog="closeDialog('isLoginDialogShow')">
      <login-form @has-login="loginCallback"></login-form>
    </my-dialog>
    <my-dialog :is-show="isRegisterDialoShow" title="注册" @click-dialog="closeDialog('isRegisterDialoShow')">
       <p>register</p>
    </my-dialog>
    <my-dialog :is-show="isAboutDialogShow" title="关于" @click-dialog="closeDialog('isAboutDialogShow')">
        <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
    </my-dialog>
	</div>
</template>

<script type="text/javascript">
  import myDialog from '../components/dialog'
  import loginForm from '../components/loginForm';
	export default {
      data () {
        return {
          isLoginDialogShow: false,
          isRegisterDialoShow: false,
          isAboutDialogShow: false,
          username: ''
        }
      },
      components: {
        myDialog,
        loginForm
      },
      methods:{
        loginClick () {
          this.isLoginDialogShow = true
        },
        registerClick () {
          this.isRegisterDialoShow = true
        },
        aboutClick () {
          this.isAboutDialogShow = true
        },
        closeDialog (value) {
          this[value] = false
        },
        loginCallback (data) {
            if(data.username){
              this.username = data.username;
              setTimeout(()=> {
                  this.closeDialog('isLoginDialogShow');
              },1000)
            }
        }
      }
   }

</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
/*表单样式开始*/
.form-wrap {
    width:100%;
    height: 100%;
    border:0px solid red;
  }
.form-wrap-group{
  padding: 5px;
  margin-top:10px;
  width:100%;
  min-height: 40px;
  font-size: 0.9em;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-ser;
}
.form-wrap-group label{
  color: #4d5e73;
  vertical-align: middle;
} 
.form-wrap-group input{
  height: 30px;
  width: 45%;
  vertical-align: middle;
}
.form-wrap-group span{
  color:red;
  font-size:0.8em;
}
.button{
  min-width: 60px;
  height: 35px;
  background-color: #4fc08d;
  border-radius: 5px;
  color: white;
  padding:10px 20px;
  cursor: pointer;

}
.button:hover {
  background: #4fc08d;
}
</style>


 