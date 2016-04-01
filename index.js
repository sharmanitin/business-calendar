var path = require('path');

function getCalendar(country, year) {
    var calendar = getFullPath(country, year);

    return require(calendar);
}

function getPath(country) {
    return path.join(__dirname, 'data', country);
}

function getFile(path, year) {
    return path + '/' + year + '.json';
}

function getFullPath(country, year) {
    return getFile(getPath(country), year);
}

exports.getCalendar = getCalendar;
