import { resolve } from 'path';
import { networkInterfaces } from 'os';
import {
  HotModuleReplacementPlugin,
  NamedModulesPlugin,
  LoaderOptionsPlugin
} from 'webpack';
import {
  forEach,
  get,
  isEqual
} from 'lodash';

const getExternalIpAddress = () => {
  let externalIpAddress;
  let ExternalNetworkInterfaces = networkInterfaces().en0 || networkInterfaces().en5;
  forEach(ExternalNetworkInterfaces, (item) => {
    if (isEqual(get(item, 'family'), 'IPv4')) {
      externalIpAddress = get(item, 'address');
    }
  });
  return externalIpAddress;
};

export default {
  target: 'web',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?https://'+ getExternalIpAddress() +':9188',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: resolve(__dirname, '../example'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, '../example'),
    publicPath: '/',
    compress: true,
    https: true,
    stats: 'normal',
    historyApiFallback: true,
    host: getExternalIpAddress(),
    port: 9188
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
    new LoaderOptionsPlugin({
      minimize: true,
      debug: true
    })
  ]
};
