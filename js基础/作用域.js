/*
作用域是指代码中定义变量的区域，也就是可访问变量的权限区域。
js是采用的”词法作用域“，也叫做”静态作用域“。
函数的作用域在”函数定义“的时候就决定了。
*/

//举例 两个全部打印出local scope，因为函数的作用域在函数定义的时候就决定了，在哪里调用没关系。
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();

