const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  env: {
    DATABASE_URI: 'mongodb://cms:cmsdtlas@cmscluster-shard-00-00.1q2xe.azure.mongodb.net:27017,cmscluster-shard-00-01.1q2xe.azure.mongodb.net:27017,cmscluster-shard-00-02.1q2xe.azure.mongodb.net:27017/testdb?ssl=true&replicaSet=atlas-djk33y-shard-0&authSource=admin&retryWrites=true&w=majority',
  },
  webpack: (config, {
    buildId, dev, isServer, defaultLoaders, webpack,
  }) => {
    config.node = {
      child_process: 'empty',
      fs: 'empty',
      crypto: 'empty',
      net: 'empty',
      tls: 'empty',
    };
    return config;
  },
  resolve: {
    fallback: {
      child_process: 'empty',
      fs: 'empty',
      crypto: 'empty',
      net: 'empty',
      tls: 'empty',
    },
  },
  async redirects() {
    return [
      {
        source: '/en_index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/parallelchain',
        destination: '/',
        permanent: true,
      },
      // redirection of the parallelchain page to /
    ];
  },
  async rewrites() {
    return [
      {
        source: '/parallelchain/mainnet/papers/ecosystem-litepaper',
        destination: 'https://cms.parallelchain.io/uploads/Parallel_Chain_Ecosystem_LP_v1_3f6f62630f.pdf',
      },
      {
        source: '/parallelchain/mainnet/papers/tokenomics-whitepaper',
        destination: 'https://cms.parallelchain.io/uploads/Paralell_Chain_Mainnet_Tokenomics_WP_v1_7dc83bd605.pdf',
      },
      {
        source: '/parallelchain/mainnet/papers/mainnet-whitepaper',
        destination: 'https://cms.parallelchain.io/uploads/Parallel_Chain_Mainnet_Technical_Whitepaper_c6e01bb65d.pdf',
      },
    ];
  },
});
