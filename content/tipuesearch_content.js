var tipuesearch = {"pages": [{'title': 'Week', 'text': 'week2-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'Week.html'}, {'title': 'week2-5', 'text': 'Week-2 \n 第二週練習影片: \n \n 1.先將USB格式化為exFat( 單一檔案 大小 上限可達64ZB ) \n 2.將 2019Fall可攜套件.7z 下在至USB內並進行解壓縮 \n 3.進入 Github \xa0 ， 創建一個新的倉儲,並命名為\'\'cad2019\'\' \n 4.git clone至自身的USB \n 5.並進行身分輸入: \n \xa0git config\xa0 --global user.name "s40723242" \n \xa0git config\xa0 --global user.email "40723242@gm.nfu.edu.tw" \n \xa0git config\xa0 --global\xa0http.proxy [2001:288:6004:17:7]:3128\xa0 \n 6.git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n 7.下載附件 python -m pip install flask_cors \n 8.進入 cmsimde 輸入 python wsgi.py 編輯頁面 \n 9.編輯完進入靜態網頁 ，退到cad2019推上Github \n 如何推上? git add .\xa0 ⇒ git commit\xa0 -m "名稱"\xa0⇒ git push \n 10.完成 \n \n Week-3 \n 第三週練習影片: \n \n 進行Solvespace 編譯 \n 1. 將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n 2. 查驗 git 版本是否在"2.13以上" \n 3.git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace(務必在網路穩定地方下進行下載) \n 4.編輯Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt 開啟後將第713行及714行前方加上"#" \n 5.將 libpng.dll.a 的編譯，改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 \n 6. cd solvespace\xa0>cd extlib\xa0>cd libpng >mkdir build > cd build\xa0 \n 7.輸入cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 8.輸入mingw32-make > 退到solvespace > mkdir build > cd build \n 9.在執行一次cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 10.在輸入mingw32-make\xa0> Done \n \n Week-4 \n 1.本週自行編輯網站，編輯自身影片加上字幕並加上浮水印. \n 錄影: Sharex \n 字幕: aegisub \xa0.  arctime \n 整合: avidemux \n 浮水印: \n \n \n Week-5 \n solvespace繪製練習- Solvespace Tutorial 4 - Assembly \xa0 \n \xa01-建立一個20X20的方形( 快捷鍵R ) ，分別 擠出長500的桌框及200的桌腳(Shift+x) ，個別另存新檔，成為個別的零件. \n \xa02-將桌框及桌腳利用方位變換(快捷鍵x)及結點接合(快捷鍵o)，組起桌架. \n \xa03-在建立一個540X540的方形( 快捷鍵R )，分別 擠出寬12的桌面(Shift+x)另存新檔. \n \xa04-將桌面跟桌架合併.( 快捷鍵x)及( 快捷鍵o) \n 完成圖: \n \n 操作影片: \n \n 使用快捷鍵: \n Sketch: \n  rectangle-R \n Constrain: \n lengh\xa0- D \n equal length/radius/angle-Q \n point on line/curve/plane/point-O \n normals in\xa0same direction-X \n New group: \n extrude\xa0-Shift+X \n linking/assembling file-Shift+I \n Perspective: \n nearest isometric view - F3 \n align view to workplane- W \n 操作影片: \n 2.閱讀手冊熟悉solvespace  reference \n 3.將自評及互評填寫完畢 課程評量表單 \n \n', 'tags': '', 'url': 'week2-5.html'}, {'title': 'week6-9', 'text': 'Week-6 \n 任務 \n 1.機械設計工程系-電腦輔助設計實習 W6 任務一參數化零組件繪製 \n \n 模型: \n \n 2.機械設計工程系-電腦輔助設計實習 W6 任務一網際 V-rep 模型控制 \n \n 1.先將 V-rep 3.6.1 rev 4.7z V-rep 3.6.1 rev 4.7z及模型web_vrep2.zip (local)下載完成. \n 2.我們可以透過v-rep將solvespace的模組進行動態測試. \n 3.並透過python控制v-rep，所以我們先把solvespace繪製的模型導入到v-rep. \n 4.再執行python程式去做API控制，並執行網頁，控制拖車的前後左右的方向. \n 3.機械設計工程系-電腦輔助設計實習 W6 任務一新增啟動與停止按鈕 \n \n 1.開啟E:\\web_vrep2\\templates中的contrils.html，複製一行按鈕指令當作修改內容，把up改成start及stop. \n 2.開啟E:\\web_vrep2中的vrep_linefollower.py，新增啟動與停止的指令程式碼，完成後即可操作啟動與停止鈕.(先開V-REP3V-REP3再啟動程式，不然會沒反應) \n \n Week-7 \n \n \n \n \n \n week8 \n 1.啟用 CMSiMDE中的網誌系統 \n \n 1.打開 leo edit \n 2. 用 leo edit 將config中的pelican.leo做編輯 \n 3.將近端跑完的指令輸入到倉儲下執行 \n 4.完成 \n 2.導入 Webots \n \n 1.下載 Webot 2019a.7z \n 2. 複製start_mdecourse.bat並更名start_mdecourse -webot.bat \n 3.將指令貼上 \n 4.按stop,開啟 start_mdecourse -webot.bat \n 5.完成 \n 3.以ssh對Github 連線 \n \n 1.將E:\\201906_fall\\data\\portablegit\\bin中的sh_for_solvespace_compile複製並更名為sh.exe \n 2.進入黑窗輸入 ssh-keygen -t rsa -b 4096 -C "使用者學號" \n 3.下載putty並透過putty.chm新增兩枚鑰使 \n 4.修改 start.bat: \n set GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe \n 5.修改自身 倉儲 .git 中的 config 檔案中的 url 設定 \n url =  git@github.com:mdecourse/cad2019.git \n 6.設定putty \n 7.在Y:\\home_mdecourse\\.ssh中新增config並加入指令 \n ProxyCommand y:/putty/plink.exe github.com %h %p\n \nHost github.com\n    User git\n    Port 22\n    Hostname github.com\n \n    TCPKeepAlive yes\n    IdentitiesOnly yes \n 8.在githun ssh設定中新增鑰使 \n 9.完成 \n \n week9 \n 期中影片: \n \n', 'tags': '', 'url': 'week6-9.html'}, {'title': 'Week-6', 'text': '任務 \n 1.機械設計工程系-電腦輔助設計實習 W6 任務一參數化零組件繪製 \n \n 模型: \n \n 2.機械設計工程系-電腦輔助設計實習 W6 任務一網際 V-rep 模型控制 \n \n 1.先將 V-rep 3.6.1 rev 4.7z V-rep 3.6.1 rev 4.7z及模型web_vrep2.zip (local)下載完成. \n 2.我們可以透過v-rep將solvespace的模組進行動態測試. \n 3.並透過python控制v-rep，所以我們先把solvespace繪製的模型導入到v-rep. \n 4.再執行python程式去做API控制，並執行網頁，控制拖車的前後左右的方向. \n 3.機械設計工程系-電腦輔助設計實習 W6 任務一新增啟動與停止按鈕 \n \n 1.開啟E:\\web_vrep2\\templates中的contrils.html，複製一行按鈕指令當作修改內容，把up改成start及stop. \n 2.開啟E:\\web_vrep2中的vrep_linefollower.py，新增啟動與停止的指令程式碼，完成後即可操作啟動與停止鈕.(先開V-REP3V-REP3再啟動程式，不然會沒反應) \n', 'tags': '', 'url': 'Week-6.html'}, {'title': 'Week-7', 'text': '\xa0Solvespace 編譯與參數繪圖驗證: \n 1.Solvespace 編譯-About中加上學號 \n \n 2. Solvespace \xa0參數繪圖驗證 \n (1) \n \n 成品圖: \n \n (3) \n \n 成品圖: \n \n (4) \n \n 成品圖: \n \n (5) \n \n 成品圖: \n \n (6) \n \n 成品圖: \n \n (7) \n \n 成品圖: \n \n (8) \n \n 成品圖: \n \n (9) \n \n 成品圖: \n \n (10) \n \n 成品圖: \n \n (11) \n \n 成品圖: \n \n (12) \n \n 成品圖: \n \n (13) \n \n 成品圖: \n \n (14) \n \n 成品圖: \n \n (15) \n \n 成品圖: \n \n (16) \n \n 成品圖: \n \n (17) \n \n 成品圖: \n \n (18) \n \n 成品圖: \n \n', 'tags': '', 'url': 'Week-7.html'}, {'title': 'week8', 'text': '1.啟用 CMSiMDE中的網誌系統 \n \n 1.打開 leo edit \n 2. 用 leo edit 將config中的pelican.leo做編輯 \n 3.將近端跑完的指令輸入到倉儲下執行 \n 4.完成 \n 2.導入 Webots \n \n 1.下載 Webot 2019a.7z \n 2. 複製start_mdecourse.bat並更名start_mdecourse -webot.bat \n 3.將指令貼上 \n 4.按stop,開啟 start_mdecourse -webot.bat \n 5.完成 \n 3.以ssh對Github 連線 \n \n 1.將E:\\201906_fall\\data\\portablegit\\bin中的sh_for_solvespace_compile複製並更名為sh.exe \n 2.進入黑窗輸入 ssh-keygen -t rsa -b 4096 -C "使用者學號" \n 3.下載putty並透過putty.chm新增兩枚鑰使 \n 4.修改 start.bat: \n set GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe \n 5.修改自身 倉儲 .git 中的 config 檔案中的 url 設定 \n url =  git@github.com:mdecourse/cad2019.git \n 6.設定putty \n 7.在Y:\\home_mdecourse\\.ssh中新增config並加入指令 \n ProxyCommand y:/putty/plink.exe github.com %h %p\n \nHost github.com\n    User git\n    Port 22\n    Hostname github.com\n \n    TCPKeepAlive yes\n    IdentitiesOnly yes \n 8.在githun ssh設定中新增鑰使 \n 9.完成 \n', 'tags': '', 'url': 'week8.html'}, {'title': 'week10-14', 'text': 'week10 - issue \n 本週開始進行協同倉儲 ，所有組員必須fork組長所創建的倉儲，並開始維護自身的分支及原先的網站. \n Fork倉儲 \n 正向pull request :無權組員修改過的檔案經由new\xa0 pull request，向組長提出申請，經組長確認檔案無誤後進行衝突合併，若無權組員檔案版本過舊將在提出申請前即被擋下. \n 反向 pull request :無權組員檔案版本過舊時，將new\xa0 pull request反向回推至個人分支進行更新.更新也可透過(git pull "你fork的倉儲") \n 操作影片: \n \n 推送流程 \n git pull "fork倉儲網址">開啟近端修改其內容>關閉近端>git add .>git commit -m "修改版次">git push>到自身分支提交new pull request>待組審核後才會呈現在版面上. \n soildworks/nx分析 \n \n Solidworks \n \n 3D曲線支援能力 :支援3D曲線，2D/3D線各別獨立. 平面及軸向鎖定 ：按tab鍵可切換繪製平面簡單方便，直線可鎖定軸向. 鎖點能力 ：一般，很多情況下需要使用relation幫忙定位還好他提供直接在3D線模式下建立補助平面，算是就比較麻煩一點但還能接受. \n 3D曲線編輯 \n 基本上SWX的曲線打上兩個端點之後產生的是一個3 dregree的曲線，含端點總共4個控制點 ， SWX曲線的handler可獨立調整切線方向或是切線延長切線影響範圍，在同類軟體裏面算是相當的好用的調整方式 ， 同時也可以打開控制點的顯示，直接修改控制點的位置 ， 缺點的話就是他的handler若只想針對單一平面調整會有些困難，經常可以看到一些示範影片中調整了上視圖的曲線之後側視圖的就跟著跑掉，一直來回調整 ， 另外調整handler時經常造成閃退，以及handler經常無故消失無法操作是比較頭痛的問題 ， 還有一點比較奇怪的是在開啟遠近透視的情況下，從上視圖拖曳點移動，會發現連垂直位置也受到影響. \n 曲面生成及修改 SWX的曲面生成介面非常好用，可任意不按順序修改構成曲線也可以選擇截斷曲面的位置，這點可大幅減少配合曲面截斷曲線的需要合併線段選擇能力：SWX的Selection Manager也是一個相當好用的功能可以選擇合併不同線段來構成曲面，也是其它軟體比較缺乏的設計 ， 但他的Selectin Manager操作上還是略嫌煩瑣就是。 \n 連續曲率能力(G1/G2/G3..等) 基本上都可支援到G2 – 特有建模方式：應該沒有 – 分析工具 Curvature/Zebra都相當方便易用. \n 顯示能力 曲面反射顯示：開啟顯卡Realview功能後可直接在視圖顯示反射，速度上還算不錯，相當的實用。但缺點是即使作適當調整後仍稍有些過曝感覺. 即時視圖渲染：即時視圖不支援ray tracing，不過其實也不太需要就是. \n 操作介面 指令圖示 ：功能清楚，安排容易上手. 分割視圖 ：可切換分割. 快速視角切換 ：沒有切換視角的小方塊，需要用工具列切換比較不直覺 平移旋轉操作 ：中鍵旋轉，似乎無法自定右鍵功能. \n 執行順暢度 硬體需求 ：繪圖時CPU佔用比其它軟體來的高，隨便畫個曲線都能聽到CPU風扇起飛的聲音。 軟體穩定度 ：不佳，經常遇到閃退情況。 閃退時自動回復功能經常失效，或是乾脆完全都不作用，造成工作進度的損失。 奇怪的問題不少，使用上的體驗並不是很好。 \n \n Creo (Pro/Engineer，ProE) \n \n 優點 1. 硬體效能夠強，可以處理幾千件零組件的計算與畫面移動、旋轉等動作 2. 軟體能順暢處理大型組合件 3. 市購品廠商提供3D CAD模型 \n 缺點: \n 機械設備的零組件少量多樣，不適合大量製造的製程，基本上都是以車、銑、鑽、磨為主，連放電跟線切割都要避免(成本考量)，形狀通常不會太過於複雜，少數會用到鑄造，形狀已經算比較複雜，包括必需考慮脫模角度，所以一般來說，設備零件考慮到加工製造的的成本效益很少會用到曲面。 相對消費性產品考慮量產與外觀，零件製造方法會以鈑金沖壓、塑膠射出為主， 需要公母模的布林計算、鈑金展開、沖壓模或射出模設計，這些都需要用到複雜的形狀與曲面能力，這也是ProE在主要市場消費性電子產品設計上，軟體功能強項發展多在複雜的零件形狀設計(曲面)，以提供外觀設計跟大量製造的模具所需；但是這些曲面、模具設計功能到了機械設計用途就變成一無是處。 \n 常用軟件開發歷史 \n Pro / ENGINEER \n \n SDRC \n \n SolidWorks \n \n NX \n \n \n week12- issue \n Batch Command \n 1.cad.bat - 啟動 wsgi.py 並且在瀏覽器開啟 https 9443 動態網頁. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n @echo off \n y: \n cd tmp\\cad2019\\cmsimde \n start python wsgi.py | start chrome https: //localhost:9443 \n \n \n \n \n \n 2.cadh.bat - 啟動  http-server  並且在瀏覽氣開啟  https 8444  靜態網頁 . \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n @echo off \n y: \n cd tmp\\cad2019\\ \n start python http-server.py | start chrome https: //localhost:8444 \n \n \n \n \n \n \n \n \n \n 3.cadg.bat-近端倉儲維護告一段落後 ,  啟動  gitextensions  開啟  cad2019  倉儲時 ,  使用 . \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n @echo off \n y: \n Y:\\cad\\201906_fall\\data\\GitExtensions\\gitextensions.exe\xa0 browse y:\\tmp\\cad2019\\ \n \n \n \n \n \n [~ 複製貼上更改檔案位置即可 , 有時啟動需間隔一些時間 ~] \n \n \n \n NX練習影片: \n \n NX解說(第七章): \n 第7章-自由曲面建模: \n 要創建自由形式特徵，首先需要一組點，曲線，圖紙或實體的邊緣，面 片材或固體或其他物體。 以下各節介紹了一些您可以使用的方法 可以使用自由格式功能來創建模型。 \n 7.1概述: \n 在NX 12中，“自由格式功能”選項位於菜單→插入→ 表面/網格表面/掃掠/法蘭表面和菜單→編輯→表面更高級 操作。 您可以通過多種方式從現有的方式創建自由格式功能. \n 7.1.1從點創建自由特徵: \n 構建曲面(From Menu, click on Insert → Surface): \n (圖一)\xa0 \xa0 \xa0 \xa0 \xa0\xa0 (圖二)\xa0 \xa0 \xa0 \xa0 \xa0\xa0 (圖三) \n 1.Four Point Surface:如果有四個角點 2.Through Points:如果點形成矩形陣列 3.Through Points:如果定義的點形成矩形陣列 \n 7.1.2從部分創建自由格式功能: \n 利用曲線和邊緣創建自由曲面(From Menu, click on Insert → Mesh Surface): \n \xa0(圖一)\xa0 \xa0 \xa0 \xa0 \xa0\xa0 \xa0(圖二)\xa0 \xa0 \xa0 \xa0(圖三)\xa0 \xa0 \xa0 \xa0(圖四) \n 1.Ruled (圖一) ：如果您有兩個大致相同的線平行 (圖三) 2.Through Curves (圖二)\xa0 ：如果大約三個或更多線平行 (圖四) \n 若構造幾何包含兩個或多個線（曲線，面，邊線）以及彼此平行的一個或多個截面 垂直於第一組曲線（參考線）使用下列兩種方式. \n \xa0 (圖一)\xa0  \xa0 \xa0 \xa0 \xa0\xa0 \xa0 (圖二) \xa0 \xa0 \xa0 \xa0 \xa0 (圖三)\xa0  \xa0 \xa0 (圖四) \n 1.Through Curve Mesh(圖一): 如果至少有四個截面，則可使用.[弦在每個方向上都存在至少兩個弦（平行和垂直）] (圖三) \n 2.Swept(圖二)\xa0: 如果至少兩個部分線段大致相同，則可使用.[垂直（從菜單中，選擇插入→掃描）] (圖四) \n 7.1.3從面孔創建自由特徵: \n \xa0(圖一)\xa0 \xa0 \xa0 \xa0 \xa0\xa0 \xa0(圖二)\xa0 \xa0 \xa0 \xa0 \xa0(圖三)\xa0 \xa0 \xa0\xa0 \xa0(圖四) \n 1.Offset Surface(圖一): 如果要偏移的面（From Menu, click on Insert →Offset/Scale） \xa0(圖三) \n 2.Extension(圖二): 如果您有3D曲線和邊緣曲線 （Click on the Insert →Flange Surface →Extension） (圖四) \n 7.2自由格式功能建模: \n 進行一些自由結構建模的練習(structured points, a point cloud, curves and faces) \n 7.2.1用點建模 \n 1.打開文件freeform_thrupoints.prt➢右鍵單擊 Toolbars，並確保已選中“Surface Toolbar” \n \n 你會看到 \n \n \n 2.選擇 Insert →Surface →Through Points \n 3.單擊Toolbar圖標 \n 4.對於補丁類型，選擇多個 ➢對於封閉，選擇都不 ➢對於行度和列度，輸入3。 ➢點擊確定 \n \n 5.單擊全部鏈接 ➢選擇頂部起點和底部終點 最左行的點，如下圖所示 \n \n \n ➢重複相同的步驟選擇前四行點之後，將 彈出一個窗口(圖一) ，詢問是否所有點 指定，或者如果您想指定另一行 ➢選擇指定另一行，直到所有行都被指定的 ➢指定所有行後，選擇“指定所有點” ➢單擊“通過點”窗口中的“取消”您將看到如下所示的 表面(圖二) \n (圖一) (圖二) \n 7.2.2使用雲點建模 \n 打開freeform_cloud.prt \n \n ➢ 選擇“插入”→“曲面”→“擬合曲面”or➢單擊 將出現以下介面 ➢通過單擊屏幕上的所有點來選擇 雲點。 ➢在“適合方向”下拉菜單中，選擇“最佳”適合於. 這匹配點雲坐標 系統與原始系統 ➢將U和V度的默認值更改為3 ➢ 點擊確定 \n \n 7.2.3使用曲線建模: \n 打開freeform_thrucurves_parameter.prt \n \n 選擇“ Insert ”→“Mesh Surface”→“Through Curves” or ➢單擊 ➢選擇第一部分線段，如下所示。 確認選擇左側的某個位置弧線 \n \n ➢ 點擊鼠標中鍵MB2或單擊“添加新的 ” \n or ➢單擊與第一個相似的下一條曲線，然後單擊 鼠標中鍵MB2。 你可以看到一個表面 如圖所示，在兩條曲線之間生成 \n \n 重複相同的步驟以選擇其餘線段。 記住點擊MB2（或添加新集）選擇每條曲線後。 ➢對於對齊(Alignment)，選擇參數 ➢對於補丁(Patch Type)，選擇單(Single) ➢對於施工(Construction)，選擇簡單(Simple) 選擇“簡單”選項後，系統會嘗試構建最簡單的表面，使貼劑的數量最少。 \n ➢點擊確定 \n \n 7.2.4使用曲線和面建模 \n ➢打開freeform_thrucurves_faces.prt(曲線和面將顯示在右側) ➢選擇插入→網格表面→直通曲線(Through) ➢選擇頂面的邊1 ➢選擇edge-2並單擊MB2 ➢選擇邊3 ➢在介面對齊下，取消選中“保留形狀”檢查框 \n \n 確保所有箭頭都指向同一方向（如果不是，請雙擊任一箭頭即可翻轉其方向）。 ➢在對齊後於介面中選擇參數 ➢在“連續性”介面的“第一部分”中，選擇“ G2（曲率）”選項，然後選擇頂面的兩個斑塊 ➢點擊應用 \n \n 現在選擇edge-3，然後單擊MB2 ➢選擇下平面的三個邊緣 ➢在“第一部分”的“連續性”介面中將選項更改為G2（曲率） ➢選擇剛創建的表面，然後單擊MB2 ➢對於最後一節的連續性，選擇G2（曲率），然後選擇底部三個補丁作為參考 ➢單擊確定退出 \n \n \n Webots\xa0 Tutorial: 1.建立場景 \n 2.設定場景參數 \n 3.新增物件並設定物件參數,並複製三個 \n 4.新增機器人並施加拉力測試 \n 5.將程式導入機器人路徑 \n 6.完成 \n \n Vrep\xa0 Tutorial: \n \n \n week13-14 \n 第13周以前的內容報告: \n _ \n Webots及Vrep之介紹: \n Webots \n \n Webots是移動式機器人建模、程式撰寫與模擬軟體，內建機器人資料庫，可將控制程式傳送至多種真實的機器人，可定義完整的移動機器人模擬，包含模型性質，如形狀、質量、摩擦力等，以及多個感測器與致動器。以內建IDE撰寫控制程式與環境、軟體模擬，並由程式控制真實機器人。 \n Vrep \n \n Vrep是一款動力學模擬軟體，主要定位於機器人模擬建模領域，可以利用內嵌腳本、ROS節點、遠程API客戶端等實現分散式的控制結構，是非常理想的機器人模擬建模的工具。控制器可以採用C/C++, Python, Java, Lua, Matlab, Octave or Urbi等語言實現。 \n webots all tutorial : \n tutorial 1: \n 1.建立場景 \n 2.設定場景參數 \n 3.新增物件並設定物件參數,並複製三個 \n 4.新增機器人並施加拉力測試 \n 5.將程式導入機器人路徑 \n \n tutorial2 : \n 1.刪去原有場景 \n 2. 在children中新增一個形狀節點，形狀幾何中新增球形節點 \n 3.形狀外觀中新增幾何圖形節點並設定屬性、粗糙度及跟改顏色 \n 4.實體邊界中新增形狀節點，形狀幾何中新增箱型節點 \n 5.設定參數 \n \n tutorial3 : \n 1. 修改牆壁的外觀，在第一面牆的Appearance中的baseColor改成藍色，設定參數 \n 2.將球體新增紋路 \n 3. ImageTexture的url>WEBOTS_HOME / projects / default / worlds / textures / red_brick_wall.jpg 路徑下的圖片 \n _ \n tutorial4 : \n 1.理解機器人路徑程式的編輯模式後,將路徑程式做更改 \n 2. 新增一個控制程式碼檔案，並命名為e-puck_avoid_collision，自動迴避程式碼加入 \n 3.機器人將自動迴避障礙物 \n _ \n tutorial5 : \n 1.將所有物件刪除只留場景 \n 2.新增啞鈴， 新增Solid，在Shape中的geometry新增cylinder，並將height改為0.1及radius改為0.01 \n 3.在Transform中的children新增Shape，並在底下的geometry新增Sphere，然後將底下的radius改為0.03，並設定位置參數 \n 4.調整啞鈴位置，將rotation中的數值改為(1,0,0,1.5708)，且translation Y軸改為0.03 \n \n tutorial6 : \n \n \n \n', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week10', 'text': 'issue \n 本週開始進行協同倉儲 ，所有組員必須fork組長所創建的倉儲，並開始維護自身的分支及原先的網站. \n Fork倉儲 \n 正向pull request :無權組員修改過的檔案經由new\xa0 pull request，向組長提出申請，經組長確認檔案無誤後進行衝突合併，若無權組員檔案版本過舊將在提出申請前即被擋下. \n 反向 pull request :無權組員檔案版本過舊時，將new\xa0 pull request反向回推至個人分支進行更新.更新也可透過(git pull "你fork的倉儲") \n 操作影片: \n \n 推送流程 \n git pull "fork倉儲網址">開啟近端修改其內容>關閉近端>git add .>git commit -m "修改版次">git push>到自身分支提交new pull request>待組審核後才會呈現在版面上. \n soildworks/nx分析 \n \n Solidworks \n \n 3D曲線支援能力 :支援3D曲線，2D/3D線各別獨立. 平面及軸向鎖定 ：按tab鍵可切換繪製平面簡單方便，直線可鎖定軸向. 鎖點能力 ：一般，很多情況下需要使用relation幫忙定位還好他提供直接在3D線模式下建立補助平面，算是就比較麻煩一點但還能接受. \n 3D曲線編輯 \n 基本上SWX的曲線打上兩個端點之後產生的是一個3 dregree的曲線，含端點總共4個控制點 ， SWX曲線的handler可獨立調整切線方向或是切線延長切線影響範圍，在同類軟體裏面算是相當的好用的調整方式 ， 同時也可以打開控制點的顯示，直接修改控制點的位置 ， 缺點的話就是他的handler若只想針對單一平面調整會有些困難，經常可以看到一些示範影片中調整了上視圖的曲線之後側視圖的就跟著跑掉，一直來回調整 ， 另外調整handler時經常造成閃退，以及handler經常無故消失無法操作是比較頭痛的問題 ， 還有一點比較奇怪的是在開啟遠近透視的情況下，從上視圖拖曳點移動，會發現連垂直位置也受到影響. \n 曲面生成及修改 SWX的曲面生成介面非常好用，可任意不按順序修改構成曲線也可以選擇截斷曲面的位置，這點可大幅減少配合曲面截斷曲線的需要合併線段選擇能力：SWX的Selection Manager也是一個相當好用的功能可以選擇合併不同線段來構成曲面，也是其它軟體比較缺乏的設計 ， 但他的Selectin Manager操作上還是略嫌煩瑣就是。 \n 連續曲率能力(G1/G2/G3..等) 基本上都可支援到G2 – 特有建模方式：應該沒有 – 分析工具 Curvature/Zebra都相當方便易用. \n 顯示能力 曲面反射顯示：開啟顯卡Realview功能後可直接在視圖顯示反射，速度上還算不錯，相當的實用。但缺點是即使作適當調整後仍稍有些過曝感覺. 即時視圖渲染：即時視圖不支援ray tracing，不過其實也不太需要就是. \n 操作介面 指令圖示 ：功能清楚，安排容易上手. 分割視圖 ：可切換分割. 快速視角切換 ：沒有切換視角的小方塊，需要用工具列切換比較不直覺 平移旋轉操作 ：中鍵旋轉，似乎無法自定右鍵功能. \n 執行順暢度 硬體需求 ：繪圖時CPU佔用比其它軟體來的高，隨便畫個曲線都能聽到CPU風扇起飛的聲音。 軟體穩定度 ：不佳，經常遇到閃退情況。 閃退時自動回復功能經常失效，或是乾脆完全都不作用，造成工作進度的損失。 奇怪的問題不少，使用上的體驗並不是很好。 \n \n Creo (Pro/Engineer，ProE) \n \n 優點 1. 硬體效能夠強，可以處理幾千件零組件的計算與畫面移動、旋轉等動作 2. 軟體能順暢處理大型組合件 3. 市購品廠商提供3D CAD模型 \n 缺點: \n 機械設備的零組件少量多樣，不適合大量製造的製程，基本上都是以車、銑、鑽、磨為主，連放電跟線切割都要避免(成本考量)，形狀通常不會太過於複雜，少數會用到鑄造，形狀已經算比較複雜，包括必需考慮脫模角度，所以一般來說，設備零件考慮到加工製造的的成本效益很少會用到曲面。 相對消費性產品考慮量產與外觀，零件製造方法會以鈑金沖壓、塑膠射出為主， 需要公母模的布林計算、鈑金展開、沖壓模或射出模設計，這些都需要用到複雜的形狀與曲面能力，這也是ProE在主要市場消費性電子產品設計上，軟體功能強項發展多在複雜的零件形狀設計(曲面)，以提供外觀設計跟大量製造的模具所需；但是這些曲面、模具設計功能到了機械設計用途就變成一無是處。 \n 常用軟件開發歷史 \n Pro / ENGINEER \n \n SDRC \n \n SolidWorks \n \n NX \n \n \n', 'tags': '', 'url': 'week10.html'}, {'title': 'week12', 'text': 'issue \n Batch Command \n 1.cad.bat - 啟動 wsgi.py 並且在瀏覽器開啟 https 9443 動態網頁. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n @echo off \n y: \n cd tmp\\cad2019\\cmsimde \n start python wsgi.py | start chrome https: //localhost:9443 \n \n \n \n \n \n 2.cadh.bat - 啟動 \xa0 http-server \xa0 並且在瀏覽氣開啟 \xa0 https 8444 \xa0 靜態網頁 . \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n @echo off \n y: \n cd tmp\\cad2019\\ \n start python http-server.py | start chrome https: //localhost:8444 \n \n \n \n \n \n \n \n \n \n 3.cadg.bat-近端倉儲維護告一段落後 , \xa0 啟動 \xa0 gitextensions \xa0 開啟 \xa0 cad2019 \xa0 倉儲時 , \xa0 使用 . \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n @echo off \n y: \n Y:\\cad\\201906_fall\\data\\GitExtensions\\gitextensions.exe\xa0 browse y:\\tmp\\cad2019\\ \n \n \n \n \n \n [~ 複製貼上更改檔案位置即可 , 有時啟動需間隔一些時間 ~] \n \n \n \n NX練習影片: \n \n NX解說(第七章): \n 第7章-自由曲面建模: \n 要創建自由形式特徵，首先需要一組點，曲線，圖紙或實體的邊緣，面 片材或固體或其他物體。 以下各節介紹了一些您可以使用的方法 可以使用自由格式功能來創建模型。 \n 7.1概述: \n 在NX 12中，“自由格式功能”選項位於菜單→插入→ 表面/網格表面/掃掠/法蘭表面和菜單→編輯→表面更高級 操作。 您可以通過多種方式從現有的方式創建自由格式功能. \n 7.1.1從點創建自由特徵: \n 構建曲面(From Menu, click on Insert → Surface): \n (圖一)\xa0 \xa0 \xa0 \xa0 \xa0\xa0 (圖二)\xa0 \xa0 \xa0 \xa0 \xa0\xa0 (圖三) \n 1.Four Point Surface:如果有四個角點 2.Through Points:如果點形成矩形陣列 3.Through Points:如果定義的點形成矩形陣列 \n 7.1.2從部分創建自由格式功能: \n 利用曲線和邊緣創建自由曲面(From Menu, click on Insert → Mesh Surface): \n \xa0(圖一)\xa0 \xa0 \xa0 \xa0 \xa0\xa0 \xa0(圖二)\xa0 \xa0 \xa0 \xa0(圖三)\xa0 \xa0 \xa0 \xa0(圖四) \n 1.Ruled (圖一) ：如果您有兩個大致相同的線平行 (圖三) 2.Through Curves (圖二)\xa0 ：如果大約三個或更多線平行 (圖四) \n 若構造幾何包含兩個或多個線（曲線，面，邊線）以及彼此平行的一個或多個截面 垂直於第一組曲線（參考線）使用下列兩種方式. \n \xa0 (圖一)\xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \xa0 (圖二) \xa0 \xa0 \xa0 \xa0 \xa0 (圖三)\xa0 \xa0 \xa0 \xa0 (圖四) \n 1.Through Curve Mesh(圖一): 如果至少有四個截面，則可使用.[弦在每個方向上都存在至少兩個弦（平行和垂直）] (圖三) \n 2.Swept(圖二)\xa0: 如果至少兩個部分線段大致相同，則可使用.[垂直（從菜單中，選擇插入→掃描）] (圖四) \n 7.1.3從面孔創建自由特徵: \n \xa0(圖一)\xa0 \xa0 \xa0 \xa0 \xa0\xa0 \xa0(圖二)\xa0 \xa0 \xa0 \xa0 \xa0(圖三)\xa0 \xa0 \xa0\xa0 \xa0(圖四) \n 1.Offset Surface(圖一): 如果要偏移的面（From Menu, click on Insert →Offset/Scale） \xa0(圖三) \n 2.Extension(圖二): 如果您有3D曲線和邊緣曲線 （Click on the Insert →Flange Surface →Extension） (圖四) \n 7.2自由格式功能建模: \n 進行一些自由結構建模的練習(structured points, a point cloud, curves and faces) \n 7.2.1用點建模 \n 1.打開文件freeform_thrupoints.prt➢右鍵單擊 Toolbars，並確保已選中“Surface Toolbar” \n \n 你會看到 \n \n \n 2.選擇 Insert →Surface →Through Points \n 3.單擊Toolbar圖標 \n 4.對於補丁類型，選擇多個 ➢對於封閉，選擇都不 ➢對於行度和列度，輸入3。 ➢點擊確定 \n \n 5.單擊全部鏈接 ➢選擇頂部起點和底部終點 最左行的點，如下圖所示 \n \n \n ➢重複相同的步驟選擇前四行點之後，將 彈出一個窗口(圖一) ，詢問是否所有點 指定，或者如果您想指定另一行 ➢選擇指定另一行，直到所有行都被指定的 ➢指定所有行後，選擇“指定所有點” ➢單擊“通過點”窗口中的“取消”您將看到如下所示的 表面(圖二) \n (圖一) (圖二) \n 7.2.2使用雲點建模 \n 打開freeform_cloud.prt \n \n ➢ 選擇“插入”→“曲面”→“擬合曲面”or➢單擊 將出現以下介面 ➢通過單擊屏幕上的所有點來選擇 雲點。 ➢在“適合方向”下拉菜單中，選擇“最佳”適合於. 這匹配點雲坐標 系統與原始系統 ➢將U和V度的默認值更改為3 ➢ 點擊確定 \n \n 7.2.3使用曲線建模: \n 打開freeform_thrucurves_parameter.prt \n \n 選擇“ Insert ”→“Mesh Surface”→“Through Curves” or ➢單擊 ➢選擇第一部分線段，如下所示。 確認選擇左側的某個位置弧線 \n \n ➢ 點擊鼠標中鍵MB2或單擊“添加新的 ” \n or ➢單擊與第一個相似的下一條曲線，然後單擊 鼠標中鍵MB2。 你可以看到一個表面 如圖所示，在兩條曲線之間生成 \n \n 重複相同的步驟以選擇其餘線段。 記住點擊MB2（或添加新集）選擇每條曲線後。 ➢對於對齊(Alignment)，選擇參數 ➢對於補丁(Patch Type)，選擇單(Single) ➢對於施工(Construction)，選擇簡單(Simple) 選擇“簡單”選項後，系統會嘗試構建最簡單的表面，使貼劑的數量最少。 \n ➢點擊確定 \n \n 7.2.4使用曲線和面建模 \n ➢打開freeform_thrucurves_faces.prt(曲線和面將顯示在右側) ➢選擇插入→網格表面→直通曲線(Through) ➢選擇頂面的邊1 ➢選擇edge-2並單擊MB2 ➢選擇邊3 ➢在介面對齊下，取消選中“保留形狀”檢查框 \n \n 確保所有箭頭都指向同一方向（如果不是，請雙擊任一箭頭即可翻轉其方向）。 ➢在對齊後於介面中選擇參數 ➢在“連續性”介面的“第一部分”中，選擇“ G2（曲率）”選項，然後選擇頂面的兩個斑塊 ➢點擊應用 \n \n 現在選擇edge-3，然後單擊MB2 ➢選擇下平面的三個邊緣 ➢在“第一部分”的“連續性”介面中將選項更改為G2（曲率） ➢選擇剛創建的表面，然後單擊MB2 ➢對於最後一節的連續性，選擇G2（曲率），然後選擇底部三個補丁作為參考 ➢單擊確定退出 \n \n \n Webots\xa0 Tutorial: 1.建立場景 \n 2.設定場景參數 \n 3.新增物件並設定物件參數,並複製三個 \n 4.新增機器人並施加拉力測試 \n 5.將程式導入機器人路徑 \n 6.完成 \n \n Vrep\xa0 Tutorial: \n \n \n', 'tags': '', 'url': 'week12.html'}, {'title': 'week15-18', 'text': '\n', 'tags': '', 'url': 'week15-18.html'}, {'title': 'Note', 'text': 'Personal : \n MY\xa0repositories \n MY\xa0Youtube \n Website: \n Github \n SolveSpace \n Sharex \n aegisub \n avidemux \n 2019 Fall 電腦輔助設計實習課程網頁 \n KMOLab-Youtube \n \n', 'tags': '', 'url': 'Note.html'}, {'title': 'video production', 'text': '\n \n video production \n 我們使用"Sharex" (圖一)進行網頁拍攝,並使用"aegisub"(圖二)或arctime (圖二-1) 做字幕編輯,最後再由" avidemux"(圖三)進行影片檔跟字幕檔的合併. \n Sharex (圖一) \n \n \n aegisub (圖二) \n \n arctime (圖二-1) \n \n avidemux (圖三) \n \n \n \n', 'tags': '', 'url': 'video production.html'}, {'title': 'solvespace - 快捷鍵', 'text': '\n solvespace - 快捷鍵 \n \n Sketch: \n \n Constrain: \n \n New group: \n \n Perspective: \n \n', 'tags': '', 'url': 'solvespace - 快捷鍵.html'}, {'title': 'git基本指令', 'text': '\n git基本指令 \n \n \n', 'tags': '', 'url': 'git基本指令.html'}, {'title': 'Creo Parametric', 'text': 'Pro/E是美國參數技術公司 （ Parametric Technology Corporation ，簡稱 PTC ）的重要產品，在目前的三維造型軟件領域中佔有著重要地位。  pro-e 作為當今世界機械 CAD/CAE/CAM 領域的新標準而得到業界的認可和推廣，是現今主流的模具和產品設計三維 CAD/CAM 軟件之一。 \n 第一個提出了參數化設計的概念，並且採用了單一數據庫來解決特徵的相關性問題。另外，它採用模塊化方式，用戶可以根據自身的需要進行選擇，而不必安裝所有模塊。  Pro/E 的基於特徵方式，能夠將設計至生產全過程集成到一起，實現並行工程設計。它不但可以應用於工作站，而且也可以應用到單機上。 \n \n 參數化設計 : \n 相對於產品而言，可以把它看成幾何模型，而無論多麼複雜的幾何模型，都可以分解成有限數量的構成特徵，而每一種構成特徵，都可以用有限的參數完全約束，這就是參數化的基本概念。 \n 基於特徵建模 : \n Pro/E是基於特徵的實體模型化系統，工程設計人員採用具有智能特性的基於特徵的功能去生成模型，腔、殼、倒角及圓角，您可以隨意勾畫草圖，輕易改變模型。這一功能特性給工程設計者提供了在設計上從未有過的簡易和靈活，特別是在設計系列化產品上更是有得天獨到的優勢。 \n 單一數據庫 : \n Pro/Engineer是建立在統一基層上的數據庫上，不像一些傳統的 CAD/CAM 系統建立在多個數據庫上。所謂單一數據庫，就是工程中的資料全部來自一個庫，使得每一個獨立用戶在為一件產品造型而工作，不管他是哪一個部門的。換言之，在整個設計過程的任何一處發生改動，亦可以前後反應在整個設計過程的相關環節上。例如，一旦工程詳圖有改變， NC （數控）工具路徑也會自動更新；組裝工程圖如有任何變動，也完全同樣反應在整個三維模型上。這種獨特的數據結構與工程設計的完整的結合，使得一件產品的設計結合起來。這一優點，使得設計更優化，成品質量更高，產品能更好地推向市場，價格也更便宜。 \n 直觀裝配管理 : \n Pro/ENGINEER的基本結構能夠使您利用一些直觀的命令，例如“貼合”、“插入”、“對齊”等很容易的把零件裝配起來，同時保持設計圖。強大的功能支持大型複雜裝配體的構造和管理，這些裝配體中零件的數量不受限制。 \n 參考資料 : https://baike.baidu.com/item/Pro-E/4924172 \n', 'tags': '', 'url': 'Creo Parametric.html'}, {'title': 'SDRC', 'text': 'SDRC由工程師組成，並由當時的辛辛那提大學副教授 Jason R. Lemon 博士於 1967 年領導，是一家專門研究結構 動力學或機械零件振動的諮詢公司。美國鋼鐵公司是主要客戶和早期投資者，直到 80 年代初將其股票出售給通用電氣 。 \n 為了幫助進行諮詢，該公司編寫了模擬和預測振動的軟件。公司開始要求使用該軟件的權利，因此 SDRC 進入了軟件市場。在 70 年代， SDRC 成為有限元和建模公司，而在 80 年代和 90 年代， SDRC 成為實體建模和分析領域的領先公司之一。  SDRC （檸檬）是 70 年代最早創造 “ MCAE” （機械計算機輔助工程 ）一詞的機構之一。  Lemon 博士於 1982 年離開 SDRC ，並於 1983 年由國際 TechneGroup Incorporated 成立了一家新公司。專注於在產品開發的早期將 CAE 應用於主導設計（一種稱為 CP / PD （並行產品和流程開發）的方法）。 \n 在 SDRC 率先推出的多項技術中，由於與 Control Data 的合資企業，它是最早引入產品生命週期管理（ PLM ）解決方案的公司之一。產品 Metaphase 最終成為 SDRC 的獨家財產。 \n 參考資料 : https://en.wikipedia.org/wiki/SDRC \n', 'tags': '', 'url': 'SDRC.html'}, {'title': 'SolidWorks', 'text': '1993年 \n 創始人 Jon Hirschtick 招募了一個工程師團隊，旨在使 3D CAD 軟體更容易上手。 Hirschtick 從廣受好評的麻省理工學院二十一點隊的成員中籌得 100 萬美元，開始了他的新事業。該團隊的目標是構建一個基於 Windows 平台的易於使用且價格合理的軟體。這在當時真的是革命性的存在，當時所有其他流行的 CAD 系統都是在 Unix 上構建的。經過幾年的開發，最初發布的 SolidWorks 終於來了 \n 1995年 \n \n 與其他 CAD 系統的 18,000 美元相比， SolidWorks 的售價僅為 4,000 美元。 \n 該軟體更易於使用：與市場上其他 CAD 軟體相比，用戶只需 3 個月的使用經驗就可以輕鬆上手。易用性的很大一部分原因在於它採用了現代著名的 Windows 介面。 \n 模型的可視化是前所未有的。在光線充足的陰影環境中的構建功能與傳統建模空間形成鮮明對比，傳統建模空間僅顯示黑色背景下的線框。 \n 我們現在熟悉的類似 FeatureManager 用於顯示模型的構建歷史。 \n 零件，組件和圖紙從一開始就可用。用戶無法在組件中應用配合，但仍可將組件放置到位。 \n \n 1996年 \n \n 介紹了上下建模。允許使用自上而下的裝配建模方法。 \n 用戶現在可以在裝配中使用配合併捕捉動態裝配運動。除了干擾檢測，用戶還可以更輕鬆地驗證形狀，適合度和功能。 \n 拖放功能可將一個裝配體零部件移動到另一個裝配體中。 \n 部分配置。 \n 自動化物料清單。只有一種方法沒有自定義選項，但它很有效。 \n \n 1997年 \n \n 鈑金功能首次發布。 \n 標準庫功能推出。 \n Loft功能現在可以使用引導曲線。 \n SolidWorks 被  Dassault Systemes （達索公司）收購。 \n 面部圓角介紹。 \n 裝配配置。 \n 完全可定製的組件爆炸視圖。 \n SolidWorks Viewer作為免費產品推出，可與非 CAD 用戶共享設計，並在與外部方共享數據時保護智慧財產權。 \n \n 1998年 \n \n 已發布功能面板，現在與設計庫的功能類似。可以拖放到模型上的預製功能。 \n 草圖診斷可幫助用戶理解草圖不適用於特定特徵的原因。 \n Lofts和 Sweeps 的相切控制。 \n 組合件封包 (Assembly Envelopes) 。 \n 智能配合在建造組件中更多地使用拖放式自動化。 \n 隨著用戶不斷建造越來越大的組件，輕量級組件可以幫助提高性能。 \n 表面處理工具首次推出。 \n FeatureWorks用於導入文件，能夠更有效地使用來自其他軟體的現有 3D 數據。 \n 首次 CSWP 考試發布。它是手寫的，並通過郵件發送。 \n \n 1999年 \n \n Palm Springs的第一個 SolidWorks World 。 \n 拖動組件時對組件的實時碰撞檢測。 \n 3D草圖介紹。 \n 管道模塊發布。 \n 2D命令模擬器有助於縮小與以前 AutoCAD 用戶的差距。 \n \n 2000年 \n \n 發布 eDrawings 。 \n 實現了 Hole Wizard 接口。 \n 表面處理更有用，能夠編織，修剪和延伸表面。 \n SolidWorks Explorer。 \n 動態間隙檢測可驗證裝配部件之間的最小間隙。 \n \n 2001年 \n \n 鏡像組件中的組件。 \n 引領互動。以前，在任何 CAD 系統中，只要選擇了命令，軟體就會在模型頂部顯示整個對話框。 SOLIDWORKS 開始廢除這一點，並轉向我們現在知道的 PropertyManagers ，並將陰影標註返回到模型。 \n 現在允許靈活的子組件進一步捕捉準確的裝配運動。 \n 介紹填充表面命令。 \n DXF / DWG導入嚮導發布。 \n 3D Meeting（ 3D 會議），最終在幾個版本之後退出。利用 Microsoft Live Meeting 並允許與螢幕共享進行實時同步會議。 \n 運動模擬功能現在可以捕捉組件中移動的組件的實際物理動態。 \n 介紹大型裝配模式。 \n 實現了 2D 到 3D 轉換工具，以便將 2D CAD 數據輕鬆轉換為功能齊全的 3D 模型。 \n 介紹 SolidWorks Office ，將常用的插件如 PhotoWorks ， Toolbox ， Utilities 和 FeatureWorks 打包成一個產品。 \n Dassault Systemes收購了 SRAC 並開始將仿真引入主流設計流程。 \n \n 2003年 \n \n COSMOSXpress是第一款 Xpress 產品，它為每個桌面帶來了簡單的零件驗證。 \n 3DContentCentral為用戶提供了一個交互和共享模型的社區。 \n 多體零件設計。這是一個非常大的問題，現在是焊接，鈑金和模具設計的基礎。 \n 收購了 PDMWorks 並引入了 SolidWorks Office Professional 軟體包。開始將 PDM 作為每個客戶提供的一部分。 \n \n 2004年 \n \n 介面更新，包括 CommandManager ，彈出 FeatureManager 和 PropertyManager 和 ConfigurationManager 的管理器視圖選項卡。 \n 介紹了 Mold Tools （模具工具）和 Weldments （焊件）。 \n 實施 Auto Balloon 命令以匹配物料清單物料編號中的 balloon 編號。 \n 限制配合以捕捉更複雜的裝配運動。 \n 推出了 RealView Graphics ，以便隨時提供更逼真的圖像。 \n \n 2005年 \n \n 繪圖比較，為用戶提供工具來比較兩個圖紙之間的變化。 \n Flex功能。 \n 電氣布線，與管道布線一起使用。 \n 在圖紙中自動標註，以捕捕捉模型中已定義的尺寸。 \n 能夠繪製無限的線條。 \n SolidWorks Rx發布，旨在提供幫助技術支持更好地去識別問題。 \n \n 2006年 \n \n 發布 Smart Components 功能，允許為硬體之類的物件安裝智能裝配組件。 \n 介紹填充圖案。 \n 介紹草圖塊。 \n 顯示狀態。 \n 設計檢查器，允許用戶根據公司標準動態檢查他們的模型。 \n 添加了相機視圖功能。 \n 發布 SolidWorks Office Premium （白金版）軟體包，包括 Routing ， COSMOSWorks 和  COSMOSMotion 進行模擬，以及 ScanTo3D 。 \n \n 2007年 \n \n SWIFT工具可幫助設計人員在提供自動化解決方案時動態了解模型存在問題或錯誤的原因。 \n 可在組件中使用皮帶，鏈條和齒輪功能。 \n 用於表面處理的自由形式命令。 \n 介紹 Enterprise PDM 。 \n \n 2008年 \n \n 使用新的菜單欄和 CommandManager 布局對用戶介面進行全面檢修和現代化優化。上下工具欄和快捷工具欄首次可用。所有這些介面組件現在都可以完全自定義。 \n Instant3D，提供拖動和操縱幾何體的功能，可輕鬆測試不同的設計概念。 \n 發布 TolAnalyst 。 \n 設計剪貼畫，通過剖析現有數據以便在另一個模型中重複使用，可以更輕鬆地重用現有的 2D 和 3D 數據。 \n 推出 DriveWorksXpress 和 DFMXpress 。 \n \n 2009年 \n \n PhotoView360圖像渲染作為第一個渲染器引入，以訪問處理器的多核功能。 \n SpeedPak現在可用於簡化裝配中的組件。 \n 為追求更高目標，所以引入傳感器。 \n CircuitWorks發布並添加到 SolidWorks Office Premium （白金版）軟體包中。 \n 發布 3DVIA Composer 。 \n \n 2010年 \n \n 現在提供可持續發展方案，幫助用戶了解其設計對環境的影響。 \n 快速標註尺寸使得創建細節圖更加容易。 \n 介紹基於事件的運動模擬。 \n 首次提供滑鼠手勢快捷鍵。 \n 現在可以進行多體鈑金建模。 \n \n 2011年 \n \n PhotoView360完全集成到 SolidWorks 介面中。 \n 現在可以使用 Walk-through （走查）功能。 \n 引入了 Defeature 工具以幫助限制模型中的智慧財產權數量。 \n 現在可以在 Simulation 中使用平面簡化。 \n 自動排列圖紙中的尺寸。 \n \n 2012年 \n \n 方程式編輯器經過徹底檢修後，更加用戶友好。 \n 介紹 Large Design Review 。 \n Feature Freeze現在可以讓用戶更好地控制性能。 \n 鈑金增強：邊線法蘭的更多選擇，引入掃描法蘭，使用的成型工具更加人性化。 \n 發布成本計算加載項。 \n \n 2013年 \n \n View Orientation有一個對話框，不再只是在工具欄上了。還引入了選擇器多維數據集以及保存視圖功能以便之後使用。 \n 以前的版本文件互操作性： 2013 文件現在可以在 2012 SP5 中打開。 \n 介紹 Conic 草圖實體。 \n 相交功能。 \n Customer Portal（客戶門戶網站）上提供了 CAD Admin Dashboard （ CAD 管理員儀錶板）。 \n \n 2014年 \n \n 能夠通過上下工具欄快捷方式添加標準配合。 \n 替換草圖實體使用戶能夠用新的實體替換舊實體並仍然維護下游引用。 \n 推出了鈑金中的 Lofted Bend 功能。 \n 能夠創建 Conic Fillets （圓錐倒角）。 \n 樣式樣條草圖命令。 \n 自動縮放第一個草圖。現在，在草圖上創建第一個維度時，所有實體都會自行調整大小以進行縮放。 \n 能夠配置結構成員配置文件。現在允許配置輪廓草圖，這大大改變了需要組織的文件數量。 \n MySolidWorks作為能夠提供自學培訓以及所有 SolidWorks 的在線資源社區發布。 \n \n 2015年 \n \n 動態參考可視化，幫助用戶了解父 / 子關聯。 \n 引入了選擇集，以便於重複使用幾何選擇組合。 \n 能夠直接從 SolidWorks 進行 3D 列印。 \n Simulation中的疲勞分析。 \n Profile center mate（輪廓中心配合）。 \n 發布 SolidWorks MBD 。 \n \n 2016年 \n \n 用戶介面重新設計，包括更好地支持高解析度顯示器。 \n 藍色 / 灰色盤默認採用傳統配色方案。 \n 引入了選擇麵包屑，使相關命令更易於訪問。 \n 實現 Mate Controller 工具，以更加可訪問的方式捕捉裝配定位。 \n 能夠全局替換失敗的配合實體。 \n 介紹 Thread 功能。 \n 發布 PDM Standard （標準版）並添加到 SolidWorks Professional 專業版軟體包中。 \n SolidWorks Visualize作為獨立的圖片渲染應用程式發布。 \n \n 2017年 \n \n 引入 3D 互連以簡化不同文件類型與 SolidWorks 的協作。 \n Asset Publisher具有 ground plane （地層）和 magnetic mates （磁配對），可輕鬆實現大型裝配布局。 \n 引入了 Advanced Hole （高級孔）功能。 \n 增強了 Wrap 功能，可在更多類型的面選擇上創建幾何體。 \n 陰影草圖輪廓增強選擇和操作功能。 \n \n 2018年 \n \n SolidWorks啟動時的歡迎對話框。 \n 用戶設置現在可以登錄。新發布的在線許可也可以遵循此登錄，在需要在多台計算機上使用 SolidWorks 時為用戶提供另一種選擇。 \n 選擇幾何圖形，允許用戶忽略幾何圖形並在其上選擇其他實體。 \n 引入了標籤和插槽功能，自動執行以前在鈑金和焊件中常用的手動方法。 \n 能夠鏡像 3D 草圖中的實體。 \n 首次使用筆，觸屏和基於手勢的草圖繪製功能。 \n 引入拓撲仿真分析。 \n \n 2019年 \n \n 顯著改進裝配性能。 \n Silhouette defeature命令，簡化了從模型中刪除細節以提高性能或保護智慧財產權的過程。 \n 能夠按狀態對 mates 進行分組。 \n 部分倒角和圓角。 \n 將圖像轉換為網格 / 凹凸貼圖，從圖像文件創建實際的 3D 幾何體。 \n \n    原文網址： https://kknews.cc/news/l9vp3ne.html  參考資料 (1): https://kknews.cc/zh-tw/news/ey5ojpy.html \n 參考資料 (2): https://kknews.cc/news/l9vp3ne.html \n', 'tags': '', 'url': 'SolidWorks.html'}, {'title': 'NX', 'text': '1960年 \n McDonnell Douglas Automation 公司成立 \n 1976年 \n 收購了Unigraphics CAD/CAE/CAM系統的開發商——United Computing公司，UG的雛形問世 \n 1983年 \n UG 上市 \n 1986年 \n Unigraphics吸取了業界領先的、為實踐所證實的實體建模核心——Parasolid的部份功能 \n \n \n 1989年 \n Unigraphics宣布支持UNIX平台及開放系統的結構，並將一個新的與STEP標準兼容的三維實體建模核心Parasolid引入UG \n 1990年 \n Unigraphics作為McDonnell Douglas（波音飛機公司）的機械CAD/CAE/CAM的標準 \n 1991年 \n Unigraphics開始了從CAD/CAE/CAM大型機版本到工作站版本的轉移 \n 1993年 \n Unigraphics引入複合建模的概念，可以實體建模、曲線建模、框線建模、半參數化及參數化建模融為一體 \n 1995年 \n Unigraphics首次發布了Windows NT版本 \n 1996年 \n Unigraphics發布了能自動進行干涉檢查的高級裝配功能模塊、最先進的CAM模塊以及具有A類曲線造型能力的工業造型模塊：它在全球迅猛發展，占領了巨大的市場份額，已經成為高端及商業CAD/CAE/CAM應用開發的常用軟體 \n 1997年 \n Unigraphics新增了包括WAVE（幾何連結器）在內的一系列工業領先的新增功能。WAVE這一功能可以定義、控制、評估產品模板，被認為是在未來幾年中業界最有影響的新技術 \n 2000年 \n Unigraphics發布了新版本的UG17，最新版本的，是UGS成為工業界第一個可以裝載包含深層嵌入「基於工程知識」（KBE）語言的世界級MCAD軟體產品的供應商 \n 2001年 \n Unigraphics發布了新版本UG18，新版本對舊版本的對話框進行了調整，使得在最少的對話框中能完成更多的工作，從而簡化了設計 \n 2002年 \n Unigraphics發布了 UG NX1.0 .新版本繼承了UG18的優點，改進和增加了許多功能，使其功能更強大，更完美 \n 2003年 \n Unigraphics發布了新版本 UG NX2.0 \xa0 。新版本基於最新的行業標準，它是一個全新支持PLM的體系結構。EDS公司同其主要客戶一起，設計了這樣一個先進的體系結構，用於支持完整的產品工程 \n 2004年 \n Unigraphics發布了新版本的 UG NX3.0 ，它為用戶的產品設計與加工過程提供了數字化造型和驗證手段，。它針對用戶的虛擬產品的設計和工藝設計的需要，提供經過實踐驗證的解決方案 \n 2005年 \n Unigraphics發布了新版本的 UG NX4.0 .它是嶄新的NX體系結構，使得開發與應用更加簡單和快捷 \n \n \n 2007年04月 \n UGS公司發布了 NX 5.0 \xa0 – NX的下一代數字產品開發軟體，幫助用戶以更快的速度開發創新產品，實現更高的成本效益 \n 2008年06月 \n Siemens PLM Software發布 UG NX 6.0 ，建立在新的同步建模技術基礎之上的NX 6將在市場上產生重大影響。同步建模技術的發布標誌著NX的一個重要里程碑，並且向MCAD市場展示Siemens的鄭重承諾。 NX 6將為我們的重要客戶提供極大的生產力提高 \n 2009年10月 \xa0 \n  西門子工業自動化業務部旗下機構、全球領先的產品生命周期管理（PLM）軟體與服務提供商Siemens PLM Software 宣布推出其旗艦數字化產品開發解決方案NX 軟體的最新版。 UG NX 7.0 引入了「HD3D」（三維精確描述）功能，即一個開放、直觀的可視化環境，有助於全球產品開發團隊充分發掘PLM信息的價值，並顯著提升其制定卓有成效的產品決策的能力。此外，NX 7.0還新增了同步建模技術的增強功能。修復了很多6.0所存在的漏洞，穩定性方面較6.0有很大的提升 \n 2010年5月20日 \n Siemens PLM Software在上海世博會發布了功能增強的NX7最新版本（ UG NX 7.5 ），NX GC 工具箱將作為NX 7最新版本的一個應用模塊與NX 7一起同步發布。NX GC 工具箱是為滿足中國用戶對NX特殊需求推出的本地化軟體工具包。在符合國家標準（GB）基礎上，NX GC 工具箱做了進一步完善和大量的增強工作 \n 2011年09月\xa0 \n Siemens PLM Software發布了 UG NX 8.0 \n 2012年10月 \n Siemens PLM Software發布了 UG NX 8.5 \n 2013年10月 \n Siemens PLM Software發布了 UG NX 9.0 \n 2014年8月 \n Siemens PLM Software發布了 UG NX 10.0 \n 2016年8月 \n Siemens PLM Software發布了 UG NX 11.0 \n 2017年10月 \n Siemens PLM Software發布了 UG NX 12.0 \n \n \n 參考網址: https://kknews.cc/zh-tw/news/j4l9pnl.html \n', 'tags': '', 'url': 'NX.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};