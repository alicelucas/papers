#!/bin/bash
npm install pm2 --global; pm2 start server/index.js; pm2 serve build/ 80 --spa