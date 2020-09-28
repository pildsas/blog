var Encore = require("@symfony/webpack-encore");

Encore
   // the project directory where compiled assets will be stored
   .setOutputPath("public/build/")
   // the public path used by the web server to access the previous directory
   .setPublicPath("/build")
   .cleanupOutputBeforeBuild()
   .enableSourceMaps(!Encore.isProduction())
   // uncomment to create hashed filenames (e.g. app.abc123.css)
   // .enableVersioning(Encore.isProduction())

   // uncomment to define the assets of the project
   .addEntry("app", "./assets/js/app.js")
   .addEntry("index", "./assets/js/index.js")
   .addEntry("profile", "./assets/js/profile.js")
   .addEntry("post", "./assets/js/post.js")
   .addEntry("register", "./assets/js/register.js")
   .addEntry("login", "./assets/js/login.js")
   .addEntry("form_post", "./assets/js/form_post.js")
   // .addStyleEntry("base", "./assets/css/base.css")
   // .addStyleEntry("index_page", "./assets/css/index_page.css")
   // .addStyleEntry("profile_page", "./assets/css/profile_page.css")
   // .addStyleEntry("login_page", "./assets/css/login_page.css")
   // .addStyleEntry("register_page", "./assets/css/register_page.css")
   // .addStyleEntry("read_post", "./assets/css/read_post.css");
   // .addStyleEntry("post", "./assets/css/post.css");
   .addStyleEntry("base", "./assets/css/base.scss")
   .addStyleEntry("index_page", "./assets/css/index_page.scss")
   .addStyleEntry("profile_page", "./assets/css/profile_page.scss")
   .addStyleEntry("login_page", "./assets/css/login_page.scss")
   .addStyleEntry("register_page", "./assets/css/register_page.scss")
   .addStyleEntry("post_page", "./assets/css/post_page.scss")

   // uncomment if you use Sass/SCSS files
   .enableSassLoader();

// uncomment for legacy applications that require $/jQuery as a global variable
// .autoProvidejQuery()

module.exports = Encore.getWebpackConfig();
