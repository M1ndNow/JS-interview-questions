# Cookie

参考链接1（W3C）https://www.w3school.com.cn/js/js_cookies.asp

**参考链接2（Cookie与LocalStorage）**https://www.cnblogs.com/qcloud1001/p/10101067.html



### 是什么？

Cookie 是服务器保存在浏览器的一小段文本信息，一般**大小不能超过4KB**。

浏览器每次向服务器发出请求，就会自动附上这段信息。（只有那些每次请求都需要让服务器知道的信息，才应该放在 Cookie 里面。）



### 用途

- 对话（session）管理：保存登录、购物车等需要记录的信息。
- 个性化信息：保存用户的偏好，比如网页的字体大小、背景色等等。
- 追踪用户：记录和分析用户行为。



### cookie的属性

1. ##### expires（http/1.0）、max age（http/1.1）

   - Expires其实是**cookie失效日期**，Expires必须是 GMT 格式的时间（可以通过 new Date().toGMTString()或者 new Date().toUTCString() 来获得）。

   - Max age的值是一个**以秒为单位**时间段（cookie失效时刻= 创建时刻+ Max age）。 

     Max age的**默认值是 -1(**即有效期为 session )； 

     Max age有三种可能值：负数、0、正数。

     ​		负数：有效期session

     ​		0：删除cookie

     ​		正数：有效期为创建时刻+ Max age

2. ##### Domain和Path

   Domain和Path一起来限制 cookie 能被哪些 URL 访问。即请求的URL是Domain或其子域、且URL的路径是Path或子路径，则都可以访问该cookie。

3. ##### secure

   Secure选项用来设置cookie只在**确保安全**的请求中才会发送。

   当请求是**HTTPS**或者其他安全协议时，包含 Secure选项的 cookie 才能被发送至服务器。

4. ##### httpOnly（安全，防止XSS攻击）

   当cookie带httpOnly选项时，客户端则无法通过js代码去访问（包括读取、修改、删除等）这个cookie。



### cookie的缺点

- 数量限制（Chrome和safari没有硬性限制；超过限制时，浏览器会清除以前设置的cookie）
- 大小限制（只有4KB）
- 效率限制（每次HTTP请求都会发送到服务端，影响获取资源的效率）
- 使用限制（需要自己封装获取、设置、删除cookie的方法）



## cookie和session的区别

- cookie是存在客户端浏览器上，session会话存在服务器上。



## 浏览器本地存储：

#### localStorage和sessionStorage

- sessionStorage用于**本地存储一个会话中的数据**，这些数据只有在同一个会话中的页面才能访问，并且当会话结束后，数据也随之销毁
- localStorage是**持久化的本地存储**，除非是通过js删除，或者清除浏览器缓存，否则数据是永远不会过期的。



#### web storage和cookie的区别

- 作用不同，web storage是用于本地**大容量存储数据**(web storage的存储量大到**5MB**);

  而cookie是用于**客户端和服务端间的信息传递**；

-  web storage有setItem、getItem、removeItem、clear等方法，

  cookie需要我们自己来封装setCookie、getCookie、removeCookie



