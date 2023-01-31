var router = Backbone.Router.extend({
    routes:{
        '':'home',
        'apples/:appleName' : 'loadApple'
    },
    initialize: function(){
        var apples = new Apples()
        apples.reset(appleData)
        this.homeView = new homeView({collection:apples})
        this.appleView = new appleView({collection:apples})
    },
    home: function(){
        this.homeView.render()
    },
    loadApple: function(appleName){
        this.appleView.render(appleName)
    }
})


//define the home view
var homeView = Backbone.View.extend({
    el: 'body',
    template: _.template('Hello World'),
    render: function(){
        this.$el.html(this.template({data: JSON.stringify(this.collection.models)}))
    }
})


var app
$(document).ready(function(){
    app = new router
    Backbone.history.start()

})