# datafabrikken-cms-service

A headless Content Management System based on [strapi][strapi].

## Usage

```
npm install
```
### Run
```
npm start
```

or to develop

```
npm run develop
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
