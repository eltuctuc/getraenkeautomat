# Geträneautomat

Um den Getränkeautomat im Browser laufen zu lassen, ist ein Webserver nötig.

Die Komprimierte Website liegt unter /dist/index.html, der Developer-Website findet man unter /app/index.html.

## Webserver

Ein Webserver kann leicht unter Grunt gestartet werden. Dazu muss Node.js installiert sein.

* Als erstes die Node-Module mit 'npm install' nachinstallieren
* Dann mit 'grunt serve' den Webserver mit der Developer-Website starten
* Oder mit 'grunt serve:dist' die Website im Produktiv-Modus starten

Die Webadresse lauter: http://localhost:9000 (für Dev) oder http://localhost:9002 (für Live)
