const webpack = require('webpack');
const helpers = require('./helpers');

/*
 * Webpack Plugins
 */
// problem with copy-webpack-plugin
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AssetsPlugin = require('assets-webpack-plugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const { TsConfigPathsPlugin, CheckerPlugin } = require('awesome-typescript-loader');
const HtmlElementsPlugin = require('./html-elements-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

/*
 * Webpack Constants
 */
const HMR = helpers.hasProcessFlag('hot');
const METADATA = {
    title: '',
    baseUrl: '/',
    isDevServer: helpers.isWebpackDevServer()
};

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function(options) {
    isProd = options.env === 'production';
    console.log('===============');
    console.log(helpers.root('tsconfig.json'));
    return {

        /*
         * Cache generated modules and chunks to improve performance for multiple incremental builds.
         * This is enabled by default in watch mode.
         * You can pass false to disable it.
         *
         * See: http://webpack.github.io/docs/configuration.html#cache
         */
        //cache: false,

        /*
         * The entry point for the bundle
         * Our Angular.js app
         *
         * See: http://webpack.github.io/docs/configuration.html#entry
         */
        entry: {

            'polyfills': './src/polyfills.browser.ts',
            'vendor': './src/vendor.browser.ts',
            'main': './src/main.browser.ts'

        },

        /*
         * Options affecting the resolving of modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve
         */
        resolve: {

            /*
             * An array of extensions that should be used to resolve modules.
             *
             * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
             */
            extensions: ['.ts', '.js', '.json'],

            // An array of directory names to be resolved to the current directory
            modules: [helpers.root('src'), helpers.root('node_modules')],

            //alias: { jquery: "/path/to/jquery-git2.min.js" }
        },

        /*
         * Options affecting the normal modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#module
         */
        module: {

            rules: [

                /*
                 * Typescript loader support for .ts and Angular 2 async routes via .async.ts
                 * Replace templateUrl and stylesUrl with require()
                 *
                 * See: https://github.com/s-panferov/awesome-typescript-loader
                 * See: https://github.com/TheLarkInn/angular2-template-loader
                 */
                {
                    test: /\.ts$/,
                    use: [
                        '@angularclass/hmr-loader?pretty=' + !isProd + '&prod=' + isProd,
                        'awesome-typescript-loader',
                        'angular2-template-loader',
                        'angular2-router-loader'
                    ],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },

                /*
                 * Json loader support for *.json files.
                 *
                 * See: https://github.com/webpack/json-loader
                 */
                {
                    test: /\.json$/,
                    use: 'json-loader'
                },

                /*
                 * to string and css loader support for *.css files
                 * Returns file content as string
                 *
                 */
                { //this rule will only be used for any vendors
                    test: /\.css$/,
                    loaders: ['style-loader', 'css-loader'],
                    //exclude: [helpers.root('node_modules/select2/dist/css/select2.css')]
                },
                //{
                //  test: /\.css$/,
                //  loaders: ['to-string-loader', 'css-loader'],
                //  include: [helpers.root('node_modules/select2/dist/css/select2.css')]
                //},

                /* Raw loader support for *.html
                 * Returns file content as string
                 *
                 * See: https://github.com/webpack/raw-loader
                 */
                {
                    test: /\.html$/,
                    use: 'raw-loader',
                    exclude: [helpers.root('src/index.html')]
                },

                /* File loader for supporting images, for example, in CSS files.
                 */
                {
                    test: /\.(jpg|png|gif|svg)$/,
                    use: 'file-loader?name=img/[name].[ext]'
                },
                //fonts
                {
                    test: /.woff$|.woff2$|.ttf$|.eot$|.otf$/,
                    loader: "file-loader?name=fonts/[name].[ext]"
                },
                //alertify window shim
                {
                    test: /alertify\.js^/,
                    loader: "imports-loader?this=>window"
                }
            ],

        },

        /*
         * Add additional plugins to the compiler.
         *
         * See: http://webpack.github.io/docs/configuration.html#plugins
         */
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                jquery: 'jquery',
                alertify: "imports-loader?this=>window!alertify/lib/alertify"
            }),
            //new ExtractTextPlugin({ filename: 'css/[name].[chunkhash].css', allChunks: true}),
            new AssetsPlugin({
                path: helpers.root('dist'),
                filename: 'webpack-assets.json',
                prettyPrint: true
            }),

            /*
             * Plugin: ForkCheckerPlugin
             * Description: Do type checking in a separate process, so webpack don't need to wait.
             *
             * See: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
             */
            new CheckerPlugin(),
            new TsConfigPathsPlugin({
                configFileName: helpers.root('tsconfig.json'),
                compiler: "typescript"
            }),
            /*
             * Plugin: CommonsChunkPlugin
             * Description: Shares common code between the pages.
             * It identifies common modules and put them into a commons chunk.
             *
             * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
             * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
             */
            new CommonsChunkPlugin({
                name: ['polyfills', 'vendor'].reverse()
            }),

            /**
             * Plugin: ContextReplacementPlugin
             * Description: Provides context to Angular's use of System.import
             *
             * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
             * See: https://github.com/angular/angular/issues/11580
             */
            //new ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            // /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
            // helpers.root('src'), // location of your src
            //{
            // your Angular Async Route paths relative to this root directory
            //}
            //),
            new webpack.ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)@angular/,
                helpers.root('src')
            ),
            /*
             * Plugin: CopyWebpackPlugin
             * Description: Copy files and directories in webpack.
             *
             * Copies project static assets.
             *
             * See: https://www.npmjs.com/package/copy-webpack-plugin
             */
            new CopyWebpackPlugin([
                { from: 'src/assets', to: 'assets' },
                { from: 'src/locales', to: 'locales' },
                {
                    context: 'src/app/features',
                    from: {
                        glob: '**/locales/*.json',
                        dot: true
                    },
                    to: 'locales',
                    flatten: true
                }
            ]),


            /*
             * Plugin: HtmlWebpackPlugin
             * Description: Simplifies creation of HTML files to serve your webpack bundles.
             * This is especially useful for webpack bundles that include a hash in the filename
             * which changes every compilation.
             *
             * See: https://github.com/ampedandwired/html-webpack-plugin
             */
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                title: METADATA.title,
                chunksSortMode: 'dependency',
                metadata: METADATA,
                inject: 'head'
            }),

            /*
             * Plugin: ScriptExtHtmlWebpackPlugin
             * Description: Enhances html-webpack-plugin functionality
             * with different deployment options for your scripts including:
             *
             * See: https://github.com/numical/script-ext-html-webpack-plugin
             */
            new ScriptExtHtmlWebpackPlugin({
                defaultAttribute: 'defer'
            }),

            /*
             * Plugin: HtmlElementsPlugin
             * Description: Generate html tags based on javascript maps.
             *
             * If a publicPath is set in the webpack output configuration, it will be automatically added to
             * href attributes, you can disable that by adding a "=href": false property.
             * You can also enable it to other attribute by settings "=attName": true.
             *
             * The configuration supplied is map between a location (key) and an element definition object (value)
             * The location (key) is then exported to the template under then htmlElements property in webpack configuration.
             *
             * Example:
             *  Adding this plugin configuration
             *  new HtmlElementsPlugin({
             *    headTags: { ... }
             *  })
             *
             *  Means we can use it in the template like this:
             *  <%= webpackConfig.htmlElements.headTags %>
             *
             * Dependencies: HtmlWebpackPlugin
             */
            new HtmlElementsPlugin({
                headTags: require('./head-config.common')
            }),

            /**
             * Plugin LoaderOptionsPlugin (experimental)
             *
             * See: https://gist.github.com/sokra/27b24881210b56bbaff7
             */
            new LoaderOptionsPlugin({}),

            // Fix Angular 2
            new NormalModuleReplacementPlugin(
                /facade(\\|\/)async/,
                helpers.root('node_modules/@angular/core/src/facade/async.js')
            ),
            new NormalModuleReplacementPlugin(
                /facade(\\|\/)collection/,
                helpers.root('node_modules/@angular/core/src/facade/collection.js')
            ),
            new NormalModuleReplacementPlugin(
                /facade(\\|\/)errors/,
                helpers.root('node_modules/@angular/core/src/facade/errors.js')
            ),
            new NormalModuleReplacementPlugin(
                /facade(\\|\/)lang/,
                helpers.root('node_modules/@angular/core/src/facade/lang.js')
            ),
            new NormalModuleReplacementPlugin(
                /facade(\\|\/)math/,
                helpers.root('node_modules/@angular/core/src/facade/math.js')
            ),
        ],

        /*
         * Include polyfills or mocks for various node stuff
         * Description: Node configuration
         *
         * See: https://webpack.github.io/docs/configuration.html#node
         */
        node: {
            global: true,
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }

    };
}
