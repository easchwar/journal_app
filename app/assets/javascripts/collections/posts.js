JournalApp.Collections.Posts = Backbone.Collection.extend({
  url: 'posts',

  model: JournalApp.Models.Post,



  getOrFetch: function(id) {
    var model;
    if (this.get(id) === undefined) {
      model = new JournalApp.Models.Post({id: id});
      model.fetch({
        success: function() {
          this.add(model);
        }.bind(this)
      });

    } else {
      model = this.get(id);
      model.fetch();
    }
    return model;
  },

});
