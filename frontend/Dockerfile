# ---- Build Stage ----
FROM node:18-slim AS build

WORKDIR /app

COPY package*.json ./

# If you have package-lock.json
RUN npm ci

# If you don’t have package-lock.json yet
# RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# ---- Production Stage ----
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
