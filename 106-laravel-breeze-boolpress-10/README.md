## Passaggi dopo la clonazione

1. composer install
2. cp .env.example .env
3. php artisan key:generate
4. npm install
5. npm run dev
6. php artisan serve


## per ristabilire la connessione tra storage e public io ho fatto cosi: 

rm public/storage 

php artisan storage:link



