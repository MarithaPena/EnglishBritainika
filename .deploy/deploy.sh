cd ~/english
npm run build

rm -r ~/../var/www/english/html
mv ~/english/dist ~/../var/www/english/html
