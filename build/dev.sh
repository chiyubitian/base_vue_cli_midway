#!bin/bash
cd backend
if [! -d './node_modules']; then
echo 'backend node_moudles not exist, start install dependencies'
npm i
fi
npm run dev