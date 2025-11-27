FROM node:20.9.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY .next /app/.next
COPY public /app/public


CMD ["npm", "run", "start"]