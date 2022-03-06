const { Post } = require('../models');

const postdata = [
  {
    title: 'First post',
    post_content: 'This is my first blog post.',
    user_id: 1
  },
  {
    title: 'Seeds',
    post_content: 'You can seed data.',
    user_id: 3
  },
  {
    title: 'Lorem',
    post_content: 'Lorem text',
    user_id: 1
}
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;