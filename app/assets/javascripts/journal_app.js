window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $main = $("#main");
    var postsRouter = new this.Routers.Posts({$el: $main});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
