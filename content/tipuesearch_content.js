var tipuesearch = {"pages": [{'title': 'Week', 'text': 'week2-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'Week.html'}, {'title': 'week2-5', 'text': 'Week-2 \n 第二週練習影片: \n \n 1.先將USB格式化為exFat( 單一檔案 大小 上限可達64ZB ) \n 2.將 2019Fall可攜套件.7z 下在至USB內並進行解壓縮 \n 3.進入 Github \xa0 ， 創建一個新的倉儲,並命名為\'\'cad2019\'\' \n 4.git clone至自身的USB \n 5.並進行身分輸入: \n \xa0git config\xa0 --global user.name "s40723242" \n \xa0git config\xa0 --global user.email "40723242@gm.nfu.edu.tw" \n \xa0git config\xa0 --global\xa0http.proxy [2001:288:6004:17:7]:3128\xa0 \n 6.git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n 7.下載附件 python -m pip install flask_cors \n 8.進入 cmsimde 輸入 python wsgi.py 編輯頁面 \n 9.編輯完進入靜態網頁 ，退到cad2019推上Github \n 如何推上? git add .\xa0 ⇒ git commit\xa0 -m "名稱"\xa0⇒ git push \n 10.完成 \n \n Week-3 \n 第三週練習影片: \n \n 進行Solvespace 編譯 \n 1. 將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n 2. 查驗 git 版本是否在"2.13以上" \n 3.git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace(務必在網路穩定地方下進行下載) \n 4.編輯Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt 開啟後將第713行及714行前方加上"#" \n 5.將 libpng.dll.a 的編譯，改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 \n 6. cd solvespace\xa0>cd extlib\xa0>cd libpng >mkdir build > cd build\xa0 \n 7.輸入cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 8.輸入mingw32-make > 退到solvespace > mkdir build > cd build \n 9.在執行一次cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 10.在輸入mingw32-make\xa0> Done \n \n Week-4 \n 1.本週自行編輯網站，編輯自身影片加上字幕並加上浮水印. \n 錄影: Sharex \n 字幕: aegisub \xa0.  arctime \n 整合: avidemux \n 浮水印: \n \n \n Week-5 \n solvespace繪製練習- Solvespace Tutorial 4 - Assembly \xa0 \n \xa01-建立一個20X20的方形( 快捷鍵R ) ，分別 擠出長500的桌框及200的桌腳(Shift+x) ，個別另存新檔，成為個別的零件. \n \xa02-將桌框及桌腳利用方位變換(快捷鍵x)及結點接合(快捷鍵o)，組起桌架. \n \xa03-在建立一個540X540的方形( 快捷鍵R )，分別 擠出寬12的桌面(Shift+x)另存新檔. \n \xa04-將桌面跟桌架合併.( 快捷鍵x)及( 快捷鍵o) \n 完成圖: \n \n 操作影片: \n \n 使用快捷鍵: \n Sketch: \n  rectangle-R \n Constrain: \n lengh\xa0- D \n equal length/radius/angle-Q \n point on line/curve/plane/point-O \n normals in\xa0same direction-X \n New group: \n extrude\xa0-Shift+X \n linking/assembling file-Shift+I \n Perspective: \n nearest isometric view - F3 \n align view to workplane- W \n 操作影片: \n 2.閱讀手冊熟悉solvespace  reference \n 3.將自評及互評填寫完畢 課程評量表單 \n \n', 'tags': '', 'url': 'week2-5.html'}, {'title': 'week6-9', 'text': 'Week-6 \n 任務 \n 1.機械設計工程系-電腦輔助設計實習 W6 任務一參數化零組件繪製 \n \n 模型: \n \n 2.機械設計工程系-電腦輔助設計實習 W6 任務一網際 V-rep 模型控制 \n \n 1.先將 V-rep 3.6.1 rev 4.7z V-rep 3.6.1 rev 4.7z及模型web_vrep2.zip (local)下載完成. \n 2.我們可以透過v-rep將solvespace的模組進行動態測試. \n 3.並透過python控制v-rep，所以我們先把solvespace繪製的模型導入到v-rep. \n 4.再執行python程式去做API控制，並執行網頁，控制拖車的前後左右的方向. \n 3.機械設計工程系-電腦輔助設計實習 W6 任務一新增啟動與停止按鈕 \n \n 1.開啟E:\\web_vrep2\\templates中的contrils.html，複製一行按鈕指令當作修改內容，把up改成start及stop. \n 2.開啟E:\\web_vrep2中的vrep_linefollower.py，新增啟動與停止的指令程式碼，完成後即可操作啟動與停止鈕.(先開V-REP3V-REP3再啟動程式，不然會沒反應) \n \n Week-7 \n \n \n \n', 'tags': '', 'url': 'week6-9.html'}, {'title': 'Week-7', 'text': '\xa0Solvespace 編譯與參數繪圖驗證: \n 1.Solvespace 編譯-About中加上學號 \n \n 2. Solvespace \xa0參數繪圖驗證 \n (1) \n \n 成品圖: \n \n (3) \n \n 成品圖: \n \n (4) \n \n 成品圖: \n \n (5) \n \n 成品圖: \n \n (6) \n \n 成品圖: \n \n (7) \n \n 成品圖: \n \n (8) \n \n 成品圖: \n \n (9) \n \n 成品圖: \n \n (10) \n \n 成品圖: \n \n (11) \n \n 成品圖: \n \n (12) \n \n 成品圖: \n \n (13) \n \n 成品圖: \n \n (14) \n \n 成品圖: \n \n (15) \n \n 成品圖: \n \n (16) \n \n 成品圖: \n \n (17) \n \n 成品圖: \n \n (18) \n \n 成品圖: \n \n', 'tags': '', 'url': 'Week-7.html'}, {'title': 'week10-14', 'text': '\n', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': '\n', 'tags': '', 'url': 'week15-18.html'}, {'title': 'Note', 'text': 'Personal : \n MY\xa0repositories \n MY\xa0Youtube \n Website: \n Github \n SolveSpace \n Sharex \n aegisub \n avidemux \n 2019 Fall 電腦輔助設計實習課程網頁 \n KMOLab-Youtube \n \n \n \n \n \n請用滑鼠點此：   顯現 \n \n video production \n 我們使用"Sharex" (圖一)進行網頁拍攝,並使用"aegisub"(圖二)或arctime (圖二-1) 做字幕編輯,最後再由" avidemux"(圖三)進行影片檔跟字幕檔的合併. \n Sharex (圖一) \n \n \n aegisub (圖二) \n \n arctime (圖二-1) \n \n avidemux (圖三) \n \n \n \n \n solvespace - 快捷鍵 \n \n Sketch: \n \n \n Constrain: \n \n \n New group: \n \n \n Perspective: \n \n \n \n \n', 'tags': '', 'url': 'Note.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};