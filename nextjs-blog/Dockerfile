FROM node:14

# App directory
WORKDIR /usr/src/app

# Install app dependencies using package/packagelock.json
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY . ./

EXPOSE 3000

RUN npm run build
CMD ["npm", "start"]