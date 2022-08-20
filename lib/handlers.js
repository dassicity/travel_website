const fortune = require('./fortune');

exports.home = (req, res, next) => {
    res.render('home');
}

exports.about = (req, res, next) => {
    res.render('about', { fortune: fortune.getFortune() });
}

exports.notFound = (req, res, next) => {
    res.render('404');
}

exports.serverError = (err, req, res, next) => {
    console.log(err);
    res.render('500');
}