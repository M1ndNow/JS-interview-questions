# 浏览器输入URL

参考链接1（腾讯云社区） https://cloud.tencent.com/developer/article/1586851（很详细）



流程：

1. 合成URL

2. DNS域名解析（递归查询+迭代查询）

   ![image-20210612092335361](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20210612092335361.png)

   

3. 建立TCP连接，三次握手

4. 发送HTTP请求，服务器处理请求，返回响应结果

5. 关闭TCP连接，四次挥手

6. 浏览器渲染

   ![image-20210612101059034](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20210612101059034.png)

   

