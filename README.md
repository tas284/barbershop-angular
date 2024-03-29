# ClientApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend
Depends on this project for run Backend: https://github.com/tas284/aspnet-core

## Build image docker

Run `docker build -t app .`

## Run with docker compose

Run `docker compose up -d`

## Try yourself Build and Run on Nginx Web Server with docker

Run `npm run build`

```bash
docker run -p 80:80 --rm \
  --mount type=bind,source="$(pwd)/config/nginx.conf,target=/etc/nginx/conf.d/default.conf" \
  --mount type=bind,source="$(pwd)/dist/client-app,target=/usr/share/nginx/html" \
  -v /var/cache/nginx \
  --name client-app nginx:alpine
```

## Run Backend and Frontend in mode production with docker

Run `docker compose -f .\docker-compose.prod.yml up`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
