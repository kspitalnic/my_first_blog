const Post = require("./Post");
const User = require('./User');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

  User.belongsToMany(Post, {
    through: Comment,
    as: 'commented_posts',
    foreignKey: 'user_id'
  });
  
  Post.belongsToMany(User, {
    through: Comment,
    as: 'commented_posts',
    foreignKey: 'post_id'
  });

module.exports = { User, Post };
