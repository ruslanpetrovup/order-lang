# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1

# Create necessary directories
RUN mkdir -p public src/payload/media

# Copy package files
COPY package.json package-lock.json ./
COPY .npmrc ./

# Install dependencies
RUN npm i --legacy-peer-deps

# Copy source files
COPY . .

# Clean .next directory if exists
RUN if [ -d ".next" ]; then rm -rf .next; fi

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3001

# Create necessary directories
RUN mkdir -p public src/payload/media

# Copy necessary files from builder
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src
COPY --from=builder /app/node_modules ./node_modules

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs .

USER nextjs

EXPOSE 3001

CMD ["npm", "start"]
