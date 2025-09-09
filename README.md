# Three-Tier Microservices (React + Node.js + MySQL on Kubernetes)

## 📦 Components
- Frontend: React (served via Nginx)
- Backend: Node.js + Express
- Database: MySQL

## 🚀 How to Run

1. Build Docker Images:
   ```bash
   cd frontend
   docker build -t your-dockerhub-username/frontend:1.0 .
   cd ../backend
   docker build -t your-dockerhub-username/backend:1.0 .
   ```

2. Push Images to DockerHub:
   ```bash
   docker push your-dockerhub-username/frontend:1.0
   docker push your-dockerhub-username/backend:1.0
   ```

3. Deploy to Kubernetes:
   ```bash
   kubectl apply -f k8s/
   ```

4. Access Frontend:
   ```bash
   minikube service frontend
   ```
