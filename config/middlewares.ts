export default ({ env }) => ([
    'strapi::errors',
    'strapi::security',
    {
      name: 'strapi::cors',
      config: {
        origin: env.array('CORS_ORIGIN')
      }
    },
    {
      name: 'strapi::poweredBy',
      config: {
        poweredBy: 'Datafabrikken <datafabrikken.norge.no>'
      }
    },
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public'
  ]);
