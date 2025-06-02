#!/bin/sh
echo "Inicializando variables de entorno..."
mkdir -p /usr/share/nginx/html/assets
cat <<EOF > /usr/share/nginx/html/assets/env.js
window.env = {
  API_URL: "http://backend:3012"
};
EOF
