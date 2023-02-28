# datafabrikken-cms-service

A headless Content Management System based on [strapi][strapi] v4.

## Usage

```
yarn install
```

### Run

```
yarn start
```

or to develop

```
yarn run develop
```

### Run with docker-compose

```
docker-compose build
docker-compose up
```

## Login localhost

Open http://localhost:1337, register user.

Update /config/server.js with your password:

```
secret: env('ADMIN_JWT_SECRET', <YOUR PASSWORD HERE>)
```

Restart Strapi

## Developing Strapi

Run Strapi in "develop" mode from localhost.
Build or edit content-types from Strapi admin.
Commit generated files.

Applications need to generate types by running graphql-codegen script.

## Quickstart

```shell
▶ yarn develop
```

## Documentation

Apart from this README, you can [find documentation on Strapi on their website][strapi-docs].

[strapi]: https://strapi.io/
[strapi-docs]: https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html


## Updating admin password in the database

```shell
▶ cd scripts/password
  yarn
  node password.js --password "[YOUR PASSWORD]"
```

Update the password in the database with the hash.
