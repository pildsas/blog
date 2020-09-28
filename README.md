The project was created in Symfony framework and XAMPP environment.
The project requires a database connection and to set a virtual host.
The preferred way of viewing the project is by loading data fixtures.

1. To set virtual host, open .xampp\apache\conf\extra\httpd-vhosts.conf file and add:

<VirtualHost \*:80>
DocumentRoot "C:\xampp\htdocs\blog\public"
ServerName localhost
</VirtualHost>

2. Install PHP dependencies with composer, in project main directory run composer install (some dependecies require active database connection).

3. To set database, configure .env file in main project directory.
   default settings: user – root, password – "", db – blog

Once the .env file is configured and virtual host is set, generate database and load data fixtures by the following commands:

sequentially:

php bin/console doctrine:database:create
bin/console doctrine:schema:drop -n -q --force --full-database
rm src/Migrations/\*.php
php bin/console make:migration
php bin/console doctrine:migrations:migrate -n -q
bin/console doctrine:fixtures:load -n -q

all at once:

php bin/console doctrine:database:create &&
bin/console doctrine:schema:drop -n -q --force --full-database &&
rm src/Migrations/\*.php &&
php bin/console make:migration &&
php bin/console doctrine:migrations:migrate -n -q &&
bin/console doctrine:fixtures:load -n -q
