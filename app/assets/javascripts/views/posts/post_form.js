JournalApp.Views.PostForm = Backbone.View.extend({

  events: {
    "submit form": "formSubmit"
  },

  template: JST['posts/form'],

  initialize: function() {
  },

  render: function() {
    this.$el.html(this.template({post: this.model}));

    return this;
  },

  formSubmit: function(event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    this.model.save(formData.post, {
      wait: true,
      success: function (model) {
        this.collection.add(model, {merge: true});
        Backbone.history.navigate("/posts/" + model.get('id'), {trigger: true});
      }.bind(this),
      error: function (model, response) {
        this.$('.errors').html(response.responseJSON);
      }.bind(this)
    });
  }
});
