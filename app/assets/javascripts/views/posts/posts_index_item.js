JournalApp.Views.PostsIndexItem = Backbone.View.extend({

  tagName: 'li',

  events: {
    "click .delete": "deleteItem"
  },

  template: JST['posts/index_item'],

  render: function() {
    this.$el.html(this.template({ post: this.model }));

    return this;
  },

  deleteItem: function(event) {
    this.model.destroy();
  }

});
