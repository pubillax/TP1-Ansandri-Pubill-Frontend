FROM node:20 AS builder

WORKDIR /app
COPY . .


RUN npm install @angular/cli

RUN npm install

RUN chmod +x node_modules/@esbuild/linux-x64/bin/esbuild


RUN npm run build -- --configuration=production --project=frontend-cuentaBancaria


FROM nginx:alpine

COPY --from=builder /app/dist/frontend-cuenta-bancaria/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
