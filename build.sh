#!/bin/bash
set -e  # Exit on any error

echo "🔨 Building frontend container..."

# Build and push for production
docker buildx build \
  --platform linux/amd64 \
  -f Dockerfile.prod \
  -t ghcr.io/qiumatthew/website-frontend:latest \
  --push \
  --progress=plain \
  .

echo "✅ Build complete! Image pushed to GitHub Container Registry"
echo "📦 Image: ghcr.io/qiumatthew/website-frontend:latest"
echo ""
echo "To deploy on VM:"
echo "  cd ~/deployment"
echo "  docker compose pull"
echo "  docker compose up -d"