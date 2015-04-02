JournalApp.Routers.Posts = Backbone.Router.extend({

  routes: {
    "": 'homeView',
    "posts/new": "postForm",
    "posts/:id": "postShow"
  },

  initialize: function(options) {
    this.$el = options.$el;

    this.$sidebar = $('<div class="sidebar">');
    this.$content = $('<div class="content">');

    this._posts = new JournalApp.Collections.Posts();
    this._posts.fetch();

    this.$el.append(this.$sidebar);
    this.$el.append(this.$content);

    var postsIndex = new JournalApp.Views.PostsIndex({collection: this._posts});
    this.$sidebar.html(postsIndex.render().$el);
  },

  homeView: function () {
    var homeView = new JournalApp.Views.HomeView();
    this.$content.html(homeView.render().$el);
  },

  // postsIndex: function() {
  //   var postsIndex = new JournalApp.Views.PostsIndex({collection: this._posts});
  //   this.$content.html(postsIndex.render().$el);
  // },

  postShow: function(id) {
    var post = this._posts.getOrFetch(id);
    var postShow = new JournalApp.Views.PostShow({model: post, collection: this._posts });
    this.$content.html(postShow.render().$el);
  },

  postForm: function() {
    var post = new JournalApp.Models.Post();
    var postForm = new JournalApp.Views.PostForm({model: post, collection: this._posts });
    this.$content.html(postForm.render().$el);
  },

});
