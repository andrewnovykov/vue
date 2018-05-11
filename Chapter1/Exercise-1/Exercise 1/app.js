new Vue({
  el: '#exercise',
  data: {
    name: 'Andrew',
    age: 31,
    imageLink: 'https://pbs.twimg.com/profile_images/645219915402715137/AGToACh7_400x400.jpg'

  },
  methods: {
    random: function() {
     return  Math.random(0, 1)
    }

  }
})
