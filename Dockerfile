# Use official Node.js 24 LTS image (major tag picks up patch/security releases)
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Ensure Yarn classic is available (not guaranteed in newer Node images)
RUN command -v yarn || npm install -g yarn@1.22.22

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy project files
COPY . .

# Build the Next.js app
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["yarn", "start"]
