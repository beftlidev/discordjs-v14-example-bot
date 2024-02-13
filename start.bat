@echo off
:start
node index.js
echo [ERROR] Bot bir hata nedeniyle durduruldu, ( 1 ) dakika icinde yeniden baslatilacak.
timeout /t 60 /nobreak >nul
goto start