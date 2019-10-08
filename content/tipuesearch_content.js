var tipuesearch = {"pages": [{'title': 'Weekly progress', 'text': 'Personal \xa0repositories: \n MY\xa0repositories \n Week-1+2: \n 第一+二週練習影片: \n \n 1.先將USB格式化為exFat( 單一檔案 大小 上限可達64ZB ) \n 2.將 2019Fall可攜套件.7z 下在至USB內並進行解壓縮 \n 3.進入 Github \xa0 ， 創建一個新的倉儲,並命名為\'\'cad2019\'\' \n 4.git clone至自身的USB \n 5.並進行身分輸入: \n \xa0git config\xa0 --global user.name "s40723242" \n \xa0git config\xa0 --global user.email "40723242@gm.nfu.edu.tw" \n \xa0git config\xa0 --global\xa0http.proxy [2001:288:6004:17:7]:3128\xa0 \n 6.git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n 7.下載附件 python -m pip install flask_cors \n 8.進入 cmsimde 輸入 python wsgi.py 編輯頁面 \n 9.編輯完進入靜態網頁 ，退到cad2019推上Github \n 如何推上? git add .\xa0 ⇒ git commit\xa0 -m "名稱"\xa0⇒ git push \n 10.完成 \n \n Week-3: \n 第三週練習影片: \n \n 進行Solvespace 編譯 \n 1. 將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n 2. 查驗 git 版本是否在"2.13以上" \n 3.git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace(務必在網路穩定地方下進行下載) \n 4.編輯Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt 開啟後將第713行及714行前方加上"#" \n 5.將 libpng.dll.a 的編譯，改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 \n 6. cd solvespace\xa0>cd extlib\xa0>cd libpng >mkdir build > cd build\xa0 \n 7.輸入cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 8.輸入mingw32-make > 退到solvespace > mkdir build > cd build \n 9.在執行一次cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 10.在輸入mingw32-make\xa0> Done \n \n Week-4: \n 1.本週自行編輯網站，編輯自身影片加上字幕並加上浮水印. \n 錄影: Sharex \n 字幕: aegisub \n 整合: avidemux \n Week-5: \n 1. solvespace繪製練習 \n 2.將自評及互評填寫完畢 課程評量表單 \n \n Week-6: \n \n Week-7: \n \n \n \n', 'tags': '', 'url': 'Weekly progress.html'}, {'title': 'Website architecture', 'text': 'About \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n Develop \n https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Website architecture.html'}, {'title': 'video production', 'text': '我們使用"Sharex" (圖一)進行網頁拍攝,並使用"aegisub"(圖二)做字幕編輯,最後再由" avidemux"(圖三)進行影片檔跟字幕檔的合併. \n Sharex (圖一) \n \n aegisub (圖二) \n \n avidemux (圖三) \n \n', 'tags': '', 'url': 'video production.html'}, {'title': 'Learning', 'text': '', 'tags': '', 'url': 'Learning.html'}, {'title': 'Tools', 'text': 'Github \n SolveSpace \n Sharex \n aegisub \n avidemux \n', 'tags': '', 'url': 'Tools.html'}, {'title': 'Information', 'text': '\n', 'tags': '', 'url': 'Information.html'}, {'title': 'Website', 'text': '2019 Fall 電腦輔助設計實習課程網頁 \n KMOLab-Youtube \n 2019 Fall 電腦輔助設計實習課程網頁 \n', 'tags': '', 'url': 'Website.html'}, {'title': 'KMOLab-Youtube', 'text': 'KMOLab-Youtube \n', 'tags': '', 'url': 'KMOLab-Youtube.html'}]};