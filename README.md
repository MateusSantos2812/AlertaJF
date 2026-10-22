# AlertaJF

Aplicação web para consultar áreas de risco de Juiz de Fora e gerenciar alertas no navegador.

## Executar localmente

Na raiz do repositório, execute:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abra a porta 8000 no navegador. Use um servidor HTTP: abrir o `index.html` diretamente como arquivo não permite carregar os módulos JavaScript e as camadas GeoJSON corretamente.

Não há dependências para instalar nem etapa de build. É necessária conexão com a internet para carregar Leaflet e Turf pelo unpkg, os mapas do OpenStreetMap e a busca de endereços pelo Nominatim. Os alertas são armazenados no LocalStorage do navegador, sem backend.

## Estrutura

```text
index.html
css/style.css
js/app.js
js/models/AlertModel.js
js/views/AlertView.js
js/controllers/AlertController.js
dados/*.geojson
```

Para publicar, sirva a raiz do repositório como site estático, preservando essa estrutura de pastas.
