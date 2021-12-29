module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '29b396451dd5e193ab26a5c84a95cb35'),
  },
});
