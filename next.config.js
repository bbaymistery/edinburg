/** @type {import('next').NextConfig} */

async function getRoutes() {
  // fetch data here
  let languages = ["en"]
  try {
    const response = await fetch(`https://api.london-tech.com/app/en`).then((res) => res.json())
    if (response.status === 200) languages = response?.languages.map(language => language.value);
  } catch (error) { console.log(error); }
  const singleRoutes = languages.map(lang => ({ source: `/${lang}`, destination: '/', locale: false }));
  let allLangaugesAsString = languages.length > 1 ? languages.join("|") : "en" //en|tr|es|ar|it|zh|ru
  let linknameRoutes = [{ source: `/:lang(${allLangaugesAsString})/:path`, destination: '/:path', locale: false, }]
  // generate rewrite rules dynamically
  // let toursRoutes = [{ source: `/:lang(${allLangaugesAsString})/tours/:link`, destination: '/tours/:link', locale: false, }]
  // for each language, create a rewrite rule with the language code in the source path
  const rewriteRules = [...singleRoutes, ...linknameRoutes,];


  return rewriteRules
}

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true, // modern JS minification (daha hızlı build ve daha küçük dosyalar)

  env: {
    mapApiKey: "AIzaSyDulwIwncfuxBve8MKXPIIPmPLRve6ySw8",
    NEXT_PUBLIC_GOOGLE_ANALYTICS: "G-S02J90JMSB",
  },

  experimental: {
    modularizeImports: {
      lodash: {
        transform: "lodash/{{member}}",
      },
    },
  },

  async rewrites() {
    const rules = await getRoutes();
    return rules;
  },

  images: {
    remotePatterns: [
      { hostname: 'api.london-tech.com' },
      { hostname: 'www.airport-pickups-london.com' },
    ],
  },

  async headers() {
    return [
      {
        source: '/:all*(js|css|png|jpg|webp|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig
