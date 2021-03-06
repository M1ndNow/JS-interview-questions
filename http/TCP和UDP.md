# TCP和UDP

参考链接1（第3、4点） https://mp.weixin.qq.com/s?__biz=MzI0MzIyMDM5Ng==&mid=2649825731&idx=1&sn=2c0835cebfee3a44e82d9efeb54f6e43&chksm=f175eb00c602621649fd46d7c9de87f7f08a4cdaa9e08808b938948584ca6977e24a5f5336ce&scene=21#wechat_redirect



### TCP和UDP都属于传输层协议



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



### 应用场景

- #### TCP

  - 文件传输（FTP HTTP 对数据准确性要求高，速度可以相对慢），
  - 发送或接收邮件（POP IMAP SMTP 对数据准确性要求高，非紧急应用），
  - 远程登录（TELNET SSH 对数据准确性有一定要求，有连接的概念）等等。

- #### UDP

  - 即时通信（QQ聊天 对数据准确性和丢包要求比较低，但速度必须快）
  - 在线视频（RTSP 速度一定要快，保证视频连续，但是偶尔花了一个图像帧，人们还是能接受的）
  - 网络语音电话（VoIP 语音数据包一般比较小，需要高速发送，偶尔断音或串音也没有问题）等等。
    