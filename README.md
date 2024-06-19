<p align="left">
    <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/JavaScript-ED8B00?style=for-the-badge&logo=javascript&logoColor=white">
    <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white"/>
    <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white">
    <img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white">
    <img src="https://img.shields.io/badge/gunicorn-%298729.svg?style=for-the-badge&logo=gunicorn&logoColor=white">
</p>


# Portfolio Website

https://jennifer-bramadas.de/

Die Webseite läuft mit **Flask** als Backend, **gunicorn** als Web Server Gateway Interface und **nginx** als Webserver.

## ✨ Hinweise für das Aufsetzen

> Dieser Absatz ist nur für das erstmalige Aufsetzen des Servers relevant.

Der User der den gunicorn-Service ausführt muss Zugriff auf den in diesem Projektordner erstellten Ordner `data` und das darin erstellte File `tracking.jsonl` erhalten sonst bekommt man Fehlermeldungen. Hierfür am besten vor dem Erstmaligen Aufsetzen des Servers folgende Commands ausführen.

```bash
mkdir <project_path>/data
touch <project_path>/data/tracking.jsonl
chown <user> <project_path>/data
chown <user> <project_path>/data/tracking.jsonl
```


## ✨ Projektfile updaten

Die Files für das Projekt liegen in `/var/www/portfolio_website`. Zum updaten können diese mit neuen Files ersetzt werden. Danach muss der Webserver neu gestartet werden.

```bash
# Restart gunicorn
systemctl restart portfolio_website

# Prüfen des gunicorn status
systemctl status portfolio_website

# Restart nginx
systemctl restart nginx
```

## ✨ Server ausschalten

```bash
# Ausschalten von gunicorn
systemctl stop portfolio_website

# Ausschalten von nignx
systemctl stop nginx
```

## ✨ Tracking

Die Metadaten zu eingehenden Anfragen liegen im Ordner `data` im Projektordner.
