#Components used
1. Reactjs
2. WebPack
3. Babel
3. Firebase
4. material-ui
5. lodash
6. ES 6/7

This is very basic-raw code not following much good practices or Flux

Based on https://github.com/hendrikswan/react-stack

#Demo
This app is deployed and is running @ https://jacjos-react-stack.firebaseapp.com/

#Further Reading

1. http://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html
2. https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack
3. Webpack - https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement
4. Webpack - https://webpack.github.io/docs/webpack-dev-server.html
5. Ultimate Webpack setup - http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup

#Build and Deploy
1. npm install
2. webpack (to enable automatic compilation when files change, add the --watch option . eg. webpack --progress --colors --watch)
3. Open index.html or follow below steps
4. Make sure python is installed and is available in the path (C:\Python27\;C:\Python27\Scripts\)
5. Run "Python -m SimpleHTTPServer" at the root of the project folder (where index.html is present). Server will start in port 8000 (more ref: http://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python)
6. Deployed to firebase hosting using "firebase-tools" utility
