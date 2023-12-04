/* 组件通信

父子通讯：
1.props/$emit

2.$children/$parent，直接访问实例方法和数据  
  this.$children[0].数据data||fn   (第一个子组件的数据data和fn)
  this.$parent.数据data||fn

3.ref  节点访问 
  html: <child ref="one"></firstchild>
  js: this.$refs.one.数据data||fn  (data里面的数据，调用它的函数)

4.$attrs
  父：
  <子组件1 name="我是组件" title="程序员成长指北"></子组件1>
  inheritAttrs：false //不在子元素根节点显示传过来的数据

  子组件1:
  <p>子组件1的$attrs: {{ $attrs }}</p>
  <孙组件2 v-bind="$attrs"></孙组件2>
  inheritAttrs：false //不在子元素根节点显示传过来的数据

  孙组件2:
  <p>孙组件2的$attrs: {{ $attrs }}</p>

跨级多级：
1.vuex

2.eventbus 事件中转站 发送和接收事件   

3.$attrs/$listeners
  $attrs 子组件中没用props声明的数据，直接用$attrs获取，并且可以v-bind一直往下传递，$listeners 是传递事件，是用v-on一直往下传递事件。一个是传数据一个传事件。
  参数inheritAttrs，子组件根元素是否显示父元素提供的属性，默认是true显示，可手动设置false不显示
  
4.Provide/inject，  
  provide父组件中提供变量，在子组件中通过inject获取变量，直接把祖先组件的的实例this传递过去，子孙组件就能跟着改变，
  父：
  <子组件1></子组件1>
  provide: {
    for: "demo"
  }

  子组件1：
  <孙组件2></孙组件2>
  inject: ['for']

  孙组件2：
  <p>{{ demo }}</p>
  data() {
    return {
      demo: this.for
    }
  }
  inject: ['for']


*/