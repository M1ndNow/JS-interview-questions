# apply、call、bind的区别和实现



### 作用

改变函数的this指向



### apply和call的区别

- apply 将参数作为一个**数组**传递
- call 将参数**直接传递**，使用逗号分隔



### bind

- 使用apply()和call()时，函数会**立即执行**

- 使用bind时，不会立即执行，而是**返回一个函数**

- bind()的传参方式与call()相同



### 应用

- 求数组中的最大和最小值

  ```
  let arr = [1,2,4,99,0]
  let max = Math.max.apply(null, arr) // 99
  let min = Math.min.apply(null, arr) // 0
  ```

- 自定义log

  ```
  function log(){
    console.log.apply(console, arguments);
  };
  log(1);    //1
  log(1,2);    //1 2
  ```

  