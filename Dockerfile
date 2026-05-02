FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

ENV PORT=8080

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]
