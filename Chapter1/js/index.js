new Vue({
  el: '#app',
  data: {
    title: 'Hello!',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">Google</a>'
  },
  methods: {
    changeTitle: function(event){
      this.title = event.target.value
    },
    sayHello: function(){
       return this.title
       this.title = 'Hello world'
    }
  }
})
