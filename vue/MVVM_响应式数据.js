/************************ vue2 *****************************/
/*
mvvm原理？
其实mvvm就是mode-view-viewMode的缩写。
mode代表数据模型，view代表页面，viewModel就是监听数据变化的一种行为，他将数据和页面连接起来。

mvvm其实就是整合了observer,complie和watch三者，通过observer来监听数据变化，通过complie来解析模板指令，
最终利用watch来连接observe和complie之间的通信，达到了数据变化视图更新，视图变化数据更新的双向绑定效果。


vue的响应式数据？ ||  vue的双向绑定？
vue是采用了”数据劫持“配合”发布者订阅者“模式的方式，通过Object.defineProperty来劫持个个属性的set和get，
在数据变化的时候发布消息给订阅器，去通知相应的订阅者，做出回调更新视图。
*/

/************************ vue2与vue3的绑定数据的区别 *****************************/
/*
vue2采用了Object.defineProperty来更改数据。
vue3采用了proxy来更改数据。

1. Proxy是”代理“用来操作对象的，Object.defineProperty() 是”劫持属性“是用来操作对象的属性的，不是一样的东西。
2. vue2.x使用 Object.defineProperty()实现数据的响应式，但是由于 Object.defineProperty()是对象属性，
无法监听数组变化，vue2重新封装了push/pop等api，下角标变化数据是监听不到的。
当页面初始化后，数据在新增和删除属性是加不上去的，Object.defineProperty()是监听不到的，需要使用内置的$set才能保证增加响应式属性，
$set内部也是通过调用Object.defineProperty()去处理的。
3. 由于 Object.defineProperty 只能对属性进行劫持，需要遍历对象的每个属性，如果属性值也是对象，则需要深度遍历。
而 Proxy 直接代理对象，不需要遍历操作。

参数区别：
Object.defineProperty(obj,name,{value: xx}) //obj目标对象，name是对象修改的key，value是修改的值
new Proxy(target, handle) //target使是目标对象，handle处理对象的方法
*/
