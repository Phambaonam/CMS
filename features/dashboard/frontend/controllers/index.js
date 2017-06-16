'use strict';

module.exports = function (controller, component, application) {

    controller.index = function (req, res) {
        application.feature.blog.actions.findAll({
            where: {
                published: 1,
                type: 'post'
            },
            limit: application.getConfig('pagination').frontNumberItem | 5
        })
            .then((posts) => {
                res.frontend.render('index', {
                    postTitle: 'Welcome to Arrow CMS',
                    posts: posts
                })
            })
    };
};