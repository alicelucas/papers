#!/bin/bash
npm i pm2 -g && /usr/local/lib/nodejs/node-v12.21.0-linux-x64/bin/pm2 start server/index.js && /usr/local/lib/nodejs/node-v12.21.0-linux-x64/bin/pm2 serve build/ 80 --spa