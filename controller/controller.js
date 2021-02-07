exports.getHome = (req, res, next) => {
    res.render('index', {
        title: 'Allaia'
    })
}

exports.getBlog = (req, res, next) => {
    res.render('blog', {
        title: 'Allaia'
    })
}