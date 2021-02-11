const HTMLWebPackPlugin = require('html-webpack-plugin');
module.exports = {
   module:{
    rules:[
     {
       test:/\.(js|jsx)$/,
       exclude:/node_modules/,
       use: {
       loader:'babel-loader',
        }
       },
       {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
   ],
  },
  plugins: [
    new HTMLWebPackPlugin(
      {
       template:"./public/index.html",
       filename:"./index.html"
      }
     )
  ],
  devServer:{
    port:5200
 }
};