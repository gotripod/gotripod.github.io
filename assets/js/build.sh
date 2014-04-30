# Remove existing build artifacts
rm ./assets/js/build.*

# Combine all of our JS files into build.js, maintaining the include order
cat ./assets/js/jquery.js ./assets/js/jquery.sticky.js ./assets/js/jquery.quote.rotator.min.js ./assets/js/neatshow.js ./assets/js/common.js > ./assets/js/build.js

# Use yui compressor to make a mini version
java -jar ~/Downloads/yuicompressor-2.4.8.jar --verbose -o ./assets/js/build.min.js ./assets/js/build.js