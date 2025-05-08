#!/bin/bash
# Clean up any old builds
rm -rf .next 

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  npm install
fi

# Build the application
npm run build

# Start the development server
PORT=3000 npm run dev 