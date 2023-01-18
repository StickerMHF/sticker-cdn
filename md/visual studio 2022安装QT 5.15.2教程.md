# 使用VS2022编译QCAD项目

## 准备工作

1. 安装VS2022

2. 下载并安装QT5.15.2，及QT Visual Studio Tools工具；

   

   关于安装环境的配置可以看另一篇文章[《基于VS2022的QT环境安装配置》]()

## QT下载编译

1. **获取[QCAD源码](https://github.com/qcad/qcad)**

   ​       

   下载QCAD源码并解压至工作目录；

   

2. **QT项目转换维VS项目**

   ​        

    将下载到的QT项目文件（.pro）转换为.sln形式并进行编译；选择**VS2022—>扩展—>Qt VS Tools—>Open Qt Project File(.pro)**；
   
   ![1.1](H:\00-sticker\sticker-cdn\images\vs_qt\1.1.png)

​       选择解压文件中的qcad.pro文件，转换完成后会生成**qcadqcad.sln**文件；将此文件重命名为qcad.sln双击打开就可以看到qcad的VS项目；

![1.2](H:\00-sticker\sticker-cdn\images\vs_qt\1.2.png)

3. **编译**

- **删除无用文件，否则编译失败**

  打开qcad.sln项目后发现解决方案列表中出现了一个**qcadcmd.com**，将其进行删除；

  ![1.3](H:\00-sticker\sticker-cdn\images\vs_qt\1.3.png)

  

- **进行QT项目转换构建**

  将解决方案列表中的所有项目进行转换构建；**右键项目—>Qt—>convert custom build steps to Qt/MSBuild**;

  ![1.4](H:\00-sticker\sticker-cdn\images\vs_qt\1.4.png)

  如不进行以上操作，则可能导致后续编译失败，报错如下：

  ![1.5](H:\00-sticker\sticker-cdn\images\vs_qt\1.5.png)

  

- **配置qcadsctipts项目**

  右键qcadsctipts项目，**属性—>链接器—>命令行**，在其他选项里增加代码：**/FORCE:MULTIPLE**

  ![1.6](H:\00-sticker\sticker-cdn\images\vs_qt\1.6.png)

  否则可能会提示错误：**找到一个或多个重定义符号**

  ![1.7](H:\00-sticker\sticker-cdn\images\vs_qt\1.7.png)



- **编译界面文件**

  ​       打开qcad目录下\src\3rdparty\qt-labs-qtscriptgenerator-5.15.2文件夹，将其中的**qcadqt-labs-qtscriptgenerator-5.sln**改名为**qt-labs-qtscriptgenerator-5.sln**；

  

  ​      打开**qt-labs-qtscriptgenerator-5.sln**，选择 **生成—>生成解决方案**进行全部编译；编译完成后关闭并打开qcad.sln;

  ![1.8](H:\00-sticker\sticker-cdn\images\vs_qt\1.8.png)

- **编译主程序**

  打开qcad.sln，选择**生成—>生成解决方案**进行全部编译，耐心等待；完成后在debug目录下生成**qcad.exe**，即可运行；也可进行本地代码调试；

  ![1.9](H:\00-sticker\sticker-cdn\images\vs_qt\1.9.png)

  

  至此完成QCAD的编译调试；

  

  **另外编译的QCAD为社区版，以下为商业版和社区版的对比，仅供参考：**

  ![1.10](H:\00-sticker\sticker-cdn\images\vs_qt\1.10.png)

  

  

  

