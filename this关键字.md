# this关键字

this和context的区别

- this是执行的主体（谁执行this就是谁）
- context是执行所在的范围（在哪执行的上下文就是谁）
- this和context没有必然的联系



this和函数在哪定义的或者在哪执行的都没有任何关系

#### this的区分:

- 1、函数执行,首先看函数名前面是否有”.“,有的话,”.“前面是谁this就是谁;没有的话this就是window
- 2、自执行函数中的this永远是window，（window去执行的，很多时候window可以省略）
- 3、给元素的某一个事件绑定方法,当事件触发的时候,执行对应的方法,方法中的this是当前的元素



##### 参考链接1	this关键字

https://gitee.com/coderdxh/learn-this-in-JavaScript/blob/master/%E7%AC%94%E8%AE%B0/this%E6%8C%87%E5%90%91%E9%97%AE%E9%A2%98.md

#### 显式绑定

```javascript
function foo() {
    console.log(this);
  }

  let obj = {
    name: "dxh",
    test: foo
  }

  foo.call(obj); // obj
  foo.call(window); // window
  foo.call(123); // Number {123}
  foo.call("abc") // String {abc}

  foo.apply(obj); // obj
  foo.apply(window); // window
  foo.apply(123); // Number {123}
  foo.apply("abc"); // String {abc}

  var newFoo = foo.bind(obj);
  newFoo(); // obj
  newFoo(); // obj
  newFoo(); // obj

// forEach
 var obj = {name: "coderdxh"}
  var names = ["dxh", "coderdxh", "coder"];
  names.forEach(function(item) {
    console.log(this)  // 数组长度次的  window
  })

  names.forEach(function(item) {
    console.log(this)
  }, obj)


// new关键字创建出的实例，this指向实例
  function person() {
    console.log(this);  // this -> p
    this.name = "dxh";
  }

  var p = new Person();
  console.log(p.name);
```



#### new绑定与显示绑定的比较（new比bind优先级高）

- new关键字不能和call/apply同时使用，会报错（foo.call/foo.apply is not a constructor）

```javascript
 function foo () {
    console.log(this);
  }

  var person = {
    name: "person"
  }

  var Foo = foo.bind(person);
  var p = new Foo();
  // this 指向 foo{} 也就是p对象
```



#### bind比call/apply的优先级高

```javascript
function foo () {
    console.log(this);
  }

  var person1 = {
    name: "person1"
  }

  var person2 = {
    name: "person2"
  }

  var Foo = foo.bind(person1);
  Foo.call(person2);  // this -> {name: "person1"}  说明bind优先级比call高
  Foo.apply(person2); // this -> {name: "person1"}  说明bind优先级比apply高
```



#### 箭头函数

- ##### 箭头函数永远不绑定this,箭头函数的this找上级作用域

```javascript
// setTimeout() 执行的时候，会给添加显式绑定this为window，因此要访问对象本身，需要进行操作: var _this = this,setTimeout()中用_this访问对象本身
  var obj = {
    products: [],
    getData: function() {
      var _this = this;
      setTimeout(function() {
        var res = ["衣服", "鞋子", "裤子"];
        _this.products.push(...res);
        console.log(_this); // obj
      },1000)
    }
  }

  obj.getData();
```

```javascript
  // 如果将setTimeout中的回调函数改为箭头函数，因为箭头函数不绑定this，如果在箭头函数中使用this的话，就会沿着作用域链找其上级作用域中的this，在这里也就是getData函数中的this，指向obj
  var obj = {
    products: [],
    getData: function() {
      setTimeout(() => {
        var res = ["衣服", "鞋子", "裤子"];
        this.products.push(...res);
        console.log(this); // obj
      },1000)
    }
  }

  obj.getData();
```



#### 补充

##### call、apply、bind

- call与apply的区别
  - 功能相同，都是绑定this作用域;绑定时都会**立即执行**
  - call()传递参数时需要一个一个的传
    - func.call(obj, 1, 2, 3)
  - apply()传递参数时必须传递一个数组作为参数
    - func.apply(obj, [1, 2, 3])

- bind方法用于将函数体内的this绑定到某个对象，**然后返回一个新函数**