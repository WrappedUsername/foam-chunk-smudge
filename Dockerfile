# Stage 1
FROM node AS builder 

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .

# If you are building your code for production
RUN npm install

# RUN npm ci --only=production
COPY . .

# Bundle app source
ENV PORT=8080

# Expose port 8080
EXPOSE 8080

# Run the app
CMD ["npm", "start"]