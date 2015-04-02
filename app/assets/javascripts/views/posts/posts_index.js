JournalApp.Views.PostsIndex = Backbone.View.extend({
  events: {

  },

  template: JST['posts/index'],

  initialize: function() {
    this.listenTo(this.collection, 'sync remove add', this.render);
  },

  render: function () {
    this.$el.html(this.template());
    this.collection.each(function(post) {
      var postIndexItem = new JournalApp.Views.PostsIndexItem({ model: post });
      this.$("ul").append(postIndexItem.render().$el);
    }, this);

    return this;
  },


});
