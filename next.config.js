if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'blog-mdb.000webhostapp.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname:'secure.gravatar.com',
        pathname: '**',
      },
    ],
  },
};
