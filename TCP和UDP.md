# TCP和UDP

参考链接1（第3、4点） https://mp.weixin.qq.com/s?__biz=MzI0MzIyMDM5Ng==&mid=2649825731&idx=1&sn=2c0835cebfee3a44e82d9efeb54f6e43&chksm=f175eb00c602621649fd46d7c9de87f7f08a4cdaa9e08808b938948584ca6977e24a5f5336ce&scene=21#wechat_redirect





### UDP和TCP有什么区别？

- TCP协议在传送数据段的时候要给段标号；UDP协议不
- TCP协议可靠；UDP协议不可靠
- TCP协议是面向连接；UDP协议采用无连接
- TCP协议负载较高，采用虚电路；UDP采用无连接
- TCP协议的发送方要确认接收方是否收到数据段（3次握手协议）
- TCP协议采用窗口技术和流控制

| 特性       | TCP          | UDP          |
| :--------- | :----------- | :----------- |
| 是否连接   | 面向连接     | 面向非连接   |
| 传输可靠性 | 可靠         | 不可靠       |
| 应用场合   | 传输大量数据 | 传输少量数据 |
| 速度       | 慢           | 快           |