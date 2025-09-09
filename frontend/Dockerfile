# ---- Build Stage ----
FROM node:18-slim AS build

WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

# Install deps (ci ensures clean install from package-lock.json)
RUN npm ci

# Copy rest of the source
COPY . .

# Build optimized React app
RUN npm run build

# ---- Production Stage ----
FROM nginx:alpine

# Copy React build files from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Optional: Custom nginx config for React Router (SPA support)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
