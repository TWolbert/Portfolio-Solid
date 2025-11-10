FROM oven/bun:latest AS base
WORKDIR /usr/src/app

# Dev deps for build/tests
FROM base AS deps
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Build the client (outputs to api/public)
FROM base AS build
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
# If your build requires env values at build time, uncomment the next COPY
# and include only the env files needed for building (avoid secrets).
# COPY .env .env.production .env.local* ./  # optional
# Optional: RUN bun test
RUN bun run build

# Prod deps only
FROM base AS prod-deps
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

# Final runtime
FROM oven/bun:latest AS release
ENV NODE_ENV=production
WORKDIR /usr/src/app

# Prod deps
COPY --from=prod-deps /usr/src/app/node_modules ./node_modules

# Built client assets
COPY --from=build /usr/src/app/api/public ./api/public

# Server source (so `bun api/server.ts` exists at runtime)
COPY --from=build /usr/src/app/api ./api

# Minimal package metadata if needed by your start script
COPY package.json bun.lock ./

# Copy env files (add/remove as appropriate)
# If some may not exist, use separate COPY commands with --chown, or rely on .dockerignore.
# Docker doesn't support globs that match non-existing files in a single COPY, so list explicitly.
# Remove files you don't use.
COPY .env.docker ./.env
# If you use per-environment files like .env.staging, add them too:
# COPY .env.staging ./

USER bun
EXPOSE 3000
CMD ["bun", "run", "start"]
