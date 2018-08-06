@echo off
color 03
cls
echo Starting python server!
echo.
echo Alt+Click to follow link:

if "%1" == "" (
    echo http://localhost:8000/
    echo.
    python -m SimpleHTTPServer 8000
) else (
    echo http://localhost:%1/
    echo.
    python -m SimpleHTTPServer %1
)