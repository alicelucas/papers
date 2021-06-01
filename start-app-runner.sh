#!/bin/bash
pm2 start server/index.js && pm2 serve build/ 80 --spa