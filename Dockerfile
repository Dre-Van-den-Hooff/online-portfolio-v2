# Use official Node.js 16.20.2 image
FROM node:16.20.2-alpine

# Set working directory
WORKDIR /app

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