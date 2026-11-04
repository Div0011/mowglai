# Development Dockerfile with hot reload
FROM node:22-slim

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
COPY packages/ ./packages/

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000 for Next.js dev server
EXPOSE 3000

# Enable polling for hot reload in Docker
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

# Start development server
CMD ["npm", "run", "dev"]
