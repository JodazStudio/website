# Multi-stage build for Vite + pnpm project
FROM node:18-alpine AS builder
WORKDIR /app

# Enable corepack and pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy lockfile and package manifests first for better caching
COPY package.json pnpm-lock.yaml ./

# Install deps
RUN pnpm install --frozen-lockfile --prod=false

# Copy source and build
COPY . .
RUN pnpm run build

FROM node:18-alpine AS runner

# Use a minimal Node image to serve static files with 'serve'
WORKDIR /app

# Install 'serve' to serve built files
RUN corepack enable && corepack prepare pnpm@latest --activate && \
	pnpm add -g serve

# Copy built assets from builder
COPY --from=builder /app/dist ./dist

EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
