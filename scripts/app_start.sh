#bin/bash

cd /var/www/html/

#installing npm

npm install

pm2 restart all

#pm2 start all