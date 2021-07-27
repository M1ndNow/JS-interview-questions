# Promise



js异步编程的解决方案



promise就是一个对象，用来传递异步操作的消息，它代表未来才会知道的结果。  

它有两个特点  

（1）对象状态不受外界影响。3种状态（进行中pending，已完成resolved，已失败rejected）  

（2）一旦状态改变就不会再变。状态改变只有两种可能（pending->resolved,pending->rejected）  

缺点  

（1）无法取消  

（2）不设置回调函数，内部错误不会反应到外部  

（3）处于pending状态无法得知进展到哪里



异步编程

- fs 文件操作

  ```
  require('fs').readFile('...')
  ```

- 数据库操作

- ajax

- 定时器



Promise

- 支持链式调用，解决回调地狱问题（回调函数套用回调函数，异常处理不方便）
- 可在异步任务结束后指定多个





#### Promise的基本使用

```javascript
const p = new Promise((resolve, reject) => {
	// reslove 解决 函数类型
	// reject 拒绝 函数类型
	if(ok){
		resolve();
	}else{
		reject();
	}
});

// 调用then方法
p.then((value)={
	// resolve()被执行时调用
	
}, (reason)={
	// reject()被执行时调用
	
})

```



```javascript
// util.promisify的使用
const util = require('util');
const fs = require('fs');
let myReadFile = util.promisify(fs.readFile);

myReadFile('./text.txt').then((value)={
	console.log(value);
})
```





##### promise的状态

- PromiseState
  - pending  未决定的
  - resolved / fullfilled  成功
  - rejected  失败

- 只能改变一次



##### PromiseResult

- 保存成功(resolve)/失败(reject)的结果





#### Promise对象的方法

```javascript
Promise.resolve()

Promise.reject()

Promise.all(promises)  // promises是一个Promise对象数组,每一个Promise对象都resovle才resovle

Promise.race(promises)

// 返回的均是一个Promise对象
```





.then()方法的链式使用

异常穿透



#### 中断promise链

```javascript
// 中断promise链 , 返回一个pending状态的Promise对象
const p = new Promise((resolve, reject)=>{
	setTimeout(()={
		resolve('ok')
	}, 1000);
});

p.then(value => {
	console.log('111');
	return new Promise(() => {})	// 返回一个pending状态的Promise对象, 此时'222', '333'不会进行输出
}).then(value => {
	console.log('222');
}).then(value => {
	console.log('333');
}).catch(reason => {
	console.warn(reason);
})
```





