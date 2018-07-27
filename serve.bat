@echo off

echo Starting python server!

if "%1" == "" (
    python -m SimpleHTTPServer 8000
) else (
    python -m SimpleHTTPServer %1
)