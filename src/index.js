import './style.css';
import './themes.js';
import menu from './menu.json';
import postItem from './tamplates/item.hbs';

const refs = {
    postFeed: document.querySelector('.js-menu'),
} 

buildPostFeed(menu);

function buildPostFeed(posts) {
    const murkup = posts.map(post => postItem(post)).join('');

    refs.postFeed.insertAdjacentHTML('beforeend', murkup);
};

