JournalApp.Views.HomeView = Backbone.View.extend({
  template: JST['posts/home'],

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
