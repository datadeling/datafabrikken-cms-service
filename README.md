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

## Updating collections and content types manually

If you cannot run Strapi in develop mode, you may add or edit components and collections manually.
Components can be added or edited by working with the .json files in the `/components` subdirectories.
Adding collections can be done by simply copying an existing collection, making sure to rename all files and fields appropriately, and adding or removing the attributes you wish. **If you create a new collection that should be publicly available, make sure you update permissions in the admin panel at `/admin/settings/users-permissions/roles/`**

## Quickstart

```shell
▶ yarn develop
```

## Documentation

Apart from this README, you can [find documentation on Strapi on their website][strapi-docs].

[strapi]: https://strapi.io/
[strapi-docs]: https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html
