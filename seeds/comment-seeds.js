const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'It worked!',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'I did not know that.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Cool.',
    user_id: 1,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;