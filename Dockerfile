FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

COPY . .

# Vite default port
EXPOSE 5173

CMD ["bun", "run", "dev"]
