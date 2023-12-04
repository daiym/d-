`
  普通对象与函数对象？
  JavaScript 中，万物皆对象！但对象也是有区别的。分为普通对象和函数对象，Object 、Function 是JS自带的函数对象。
  通过 new Function() 创建的对象都是函数对象，其他的都是普通对象。
`
`
  构造函数?
  function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() { alert(this.name) } 
  }
  var person1 = new Person('Zaxlct', 28, 'Software Engineer');
  person1是实例，他的构造函数属性指向Person。
  实例的构造函数属性（constructor）指向构造函数。
`
`
  原型对象？
  每定义一个对象，都有些默认的预定义属性。
  每个“函数对象”都有一个prototype 属性，这个属性指向该函数的“原型对象”。
  prototype 是保存着它们所有实例方法的真正所在。
  原型对象定义：原型对象就是 xxx.prototype, 是一个对象。也有constructor构造函数属性，指向prototype所在的函数（xxx）。
  定律：每个对象都有 __proto__ 属性，但只有函数对象才有 prototype 属性。

  function Person() {}
  Person.prototype = {
    name:  'Zaxlct',
    age: 28,
    job: 'Software Engineer',
    sayName: function() {
      alert(this.name);
    }
 }

 结论：原型对象（Person.prototype）是 构造函数（Person）的一个实例。
`
`
  所有函数对象的 __proto__ 都指向 Function.prototype，它是一个空函数（Empty function）。
  所有对象的 __proto__ 都指向其构造器的 prototype。
  原型和原型链是JS实现继承的一种模型。
  原型链的形成是真正是靠__proto__ 而非prototype。
`