# Etapa 1: build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Etapa 2: server con Nginx
FROM nginx:stable-alpine

# Copiar el build generado a la carpeta pública de nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Eliminar la configuración default de nginx
RUN rm /etc/nginx/conf.d/default.conf

# Añadir nuestra propia configuración para SPA
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]