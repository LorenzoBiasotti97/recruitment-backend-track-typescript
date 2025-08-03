# Section development
FROM node:20 AS development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


RUN npm run build

EXPOSE 3000

CMD ["npx", "ts-node", "src/server.ts"]

# Section production
# FROM node:20-alpine AS production
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --only=production
# COPY --from=development /app/dist /app/dist
# EXPOSE 3000
# CMD ["npm", "start"]
