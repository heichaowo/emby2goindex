# emby2goindex
项目借鉴了https://github.com/heichaowo/emby2goindex 和 https://github.com/Achrou/goindex-theme-acrou

# 特点
1. Rclone挂载网盘作为EMBY的片源仓库。
2. 2. 同一个网盘搭建了列表程序（goindex，oneindex，onemanager）。 
3. 3. 播放时不走服务器流量，播放网盘直链。

# 效果
EMBY和Goindex挂载同一个谷歌网盘，目录结构基本一样。
替换emby视频路径，直接调用potplayer播放网盘内的视频。

按按钮调用potplayer，播放网盘直链

<img width="658" alt="image" src="https://raw.githubusercontent.com/beiona/emby-goindex-potplayer/main/%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC/emby-goindex-potplayer01.png">

<img width="658" alt="image" src="https://raw.githubusercontent.com/beiona/emby-goindex-potplayer/main/%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC/emby-goindex-potplayer02.png">


# 使用方法
先把worker.js部署到cloudflare workers上更改三个变量client_id、client_secret、refresh_token变量具体的获取方式和worker部署方式请自行解决。

<img width="658" alt="image" src="https://raw.githubusercontent.com/heichaowo/emby2goindex/main/pic01.png">
把jquery-3.6.0.min.js和embyUrl2goindexUrl.js两个文件放入/opt/emby-server/system/dashboard-ui/文件夹


<img width="658" alt="image" src="https://raw.githubusercontent.com/heichaowo/emby2goindex/main/pic02.png">
修改同目录下index.html文件，在body里加2行
<script type="text/javascript" src="./jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="./embyUrl2goindexUrl.js"></script>


<img width="658" alt="image" src="https://raw.githubusercontent.com/heichaowo/emby2goindex/main/pic03.png">
修改embyUrl2goindexUrl.js文件，共3处。
在2-4行

# 举例
<img width="658" alt="image" src="https://raw.githubusercontent.com/heichaowo/emby2goindex/main/pic04.png">
Rclone的挂载目录


<img width="658" alt="image" src="https://raw.githubusercontent.com/heichaowo/emby2goindex/main/pic05.png">
网盘的列表程序目录


<img width="658" alt="image" src="https://raw.githubusercontent.com/heichaowo/emby2goindex/main/pic06.png">
把不同的前缀填入embyUrl2goindexUrl.js即可