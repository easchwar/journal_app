JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],

  events: {
    "dblclick .title, .body": "editAttr",
    // "dblclick .body": "editBody",
    "blur input": "updateModel"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);

  },

  render: function() {
    this.$el.html(this.template({post: this.model}));
    return this;
  },

  editAttr: function(event) {
    var $attr = $(event.currentTarget);
    console.log($attr);
    var attrVal = $attr.html();
    console.log(attrVal);

    var $input = $('<input type="text">');
    $input.attr('value', attrVal);
    $attr.html($input);
  },

  editBody: function(event) {
    console.log(event.currentTarget);
  },

  updateModel: function(event) {


    console.log($(event.currentTarget));
    // var $(title)  = $("<h1>" + $target "</h1>")
    // this.$el.html($title)
  }
});
