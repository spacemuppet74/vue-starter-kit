const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const APP_PATH = path.resolve(__dirname, '..', 'src')
const BUILD_PATH = path.resolve(__dirname, '..', 'dist')

module.exports = {
mode: "production",
entry: [`${APP_PATH}/index.js`],
output: {
    filename: 'bundle.js',
    path: BUILD_PATH
},

resolve: {
    alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': APP_PATH
    },
    extensions: ['*', '.js', '.vue', '.json']
},
module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { importLoaders: 1}    
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        autoprefixer: {
                          browsers: ["last 2 versions", "ie > 9"]
                        },
                        sourceMap: true,
                        plugins: () => [require("autoprefixer")]
                      }
                }
            ]
        }
    ]
},
plugins: [
    new CleanWebpackPlugin( BUILD_PATH,{verbose: true, allowExternal: true}),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
        filename: 'css/styles.css'
      })
]
}