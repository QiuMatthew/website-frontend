# Website Frontend

React-based frontend for my personal website, built with Material UI and deployed using Docker containers.

## 🚀 Deployment

- **Status**: Live and running on GCP
- **Container Image**: `ghcr.io/qiumatthew/website-frontend:latest`
- **Architecture**: Docker container with nginx

## 📦 Tech Stack

- **React 18** with React Router
- **Material UI** for components
- **nginx** for production serving
- **Docker** for containerized deployment

## 🛠️ Development

### Local Development
```bash
npm start
```
Runs the app at [http://localhost:3000](http://localhost:3000) with hot reload.

### Testing
```bash
npm test
```

### Building for Production
```bash
# Option 1: Build container image
./build.sh

# Option 2: Build static files only
npm run build
```

## 🐳 Docker Deployment

### Files
- `Dockerfile.prod` - Production container with nginx
- `nginx.conf` - nginx configuration for React Router
- `build.sh` - Build and push script

### Container Workflow
1. **Develop locally**: `npm start`
2. **Build and push**: `./build.sh` 
3. **Deploy on server**: Pull and run the image

### Manual Docker Commands
```bash
# Build for production
docker buildx build \
  --platform linux/amd64 \
  -f Dockerfile.prod \
  -t ghcr.io/qiumatthew/website-frontend:latest \
  --push .

# Run locally (for testing)
docker run -p 80:80 ghcr.io/qiumatthew/website-frontend:latest
```

## 📁 Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Route components
├── App.js         # Main app with routing
└── index.js       # Entry point

nginx.conf         # Production web server config
Dockerfile.prod    # Production container build
build.sh          # Build automation script
```

## 🔄 Deployment Process

This frontend is part of a microservices architecture:

1. **Development**: Work locally with `npm start`
2. **Build**: Use `./build.sh` to create and push container image
3. **Deploy**: Use [website-deployment](https://github.com/QiuMatthew/website-deployment) repo to orchestrate services

## 📚 Key Features

- **React Router**: Client-side routing with nginx fallback
- **Material UI**: Consistent design system
- **Production optimized**: Gzipped, cached static assets
- **Container-ready**: Runs on any Docker-enabled server

## 🤝 Contributing

This is a personal project, but feel free to explore the code for learning purposes!