/*
原理：
从创建到销毁的过程叫做生命周期。

beforeCreate：创建前，vue挂载元素el和data都是undefined。
create：创建后，实例的data有了el还没有。
beforeMount：加载前，vue实例的el和data初始化了，还未渲染，data没有替换。
mounted：加载完成，data成功渲染。
beforeUpdate：更新前
update：更新后
beforeDestory：销毁前
destory：销毁后

vue父子组件生命周期执行顺序？

首次加载：
父beforeCreate -> 父create -> 父beforeMount -> 
子beforeCreate -> 子create -> 子beforeMount -> 子mounted -> 
父mounted

子组件更改：
父beforeUpdate -> 子beforeUpdate -> 子update -> 父update

父组件更改：
父beforeUpdate -> 父update

销毁：
父beforeDestory -> 子beforeDestory -> 子destory -> 父destory

nextTick？

在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

使用场景：更改数据后当想立即操作新 DOM 的时候需要使用它。

深层原理：Vue 异步执行 DOM 更新。当data变化时，DOM 并不会马上更新，在下一个事件循环开始时才会进行必要的DOM更新，
如果此时想要使用更新的 DOM 状态去做某些事情，就会出现问题。所以可以在数据变化之后立即使用 Vue.nextTick(callback)。

*/