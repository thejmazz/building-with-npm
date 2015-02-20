var favicons = require('favicons');
var path = require('path');
favicons({
    source: path.resolve('../assets/images/logo.png'),
    dest: path.resolve('../dist/'),
});
