module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ad89f20bbdc5a4efd536f5e163ed4c58'),
  },
});
