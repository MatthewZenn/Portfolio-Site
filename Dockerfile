FROM ubuntu/apache2:latest
RUN rm /var/www/html/index.html
COPY ./www /var/www/html