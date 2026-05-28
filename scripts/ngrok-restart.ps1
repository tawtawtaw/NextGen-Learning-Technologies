# Restart both ngrok endpoints (fixes ERR_NGROK_334 "already online")
Write-Host "Stopping any running ngrok..."
Get-Process -Name ngrok -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 3

$config = Join-Path $env:LOCALAPPDATA "ngrok\ngrok.yml"
Write-Host "Starting all-exam-success + nextgen from $config"
ngrok start all-exam-success nextgen --config $config
