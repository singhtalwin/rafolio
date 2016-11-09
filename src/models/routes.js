const landing = require('./landing');
const nds = require('./nds');
const starWars = require('./star-wars');
const zuru = require('./zuru');

module.exports = {
    landing: {
        model: landing,
        path: '/',
        view: 'pages/landing'
    },
    nds: {
        model: nds,
        path: '/nds',
        view: 'pages/nds'
    },
    starWars: {
        model: starWars,
        path: '/star-wars',
        view: 'pages/star-wars'
    },
    zuru: {
        model: zuru,
        path: '/zuru',
        view: 'pages/zuru'
    }
};
