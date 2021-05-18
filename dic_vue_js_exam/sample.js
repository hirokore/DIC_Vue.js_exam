let app = new Vue({
  el: '#app',
  
  data: {
    addName: '',
    addCourse: '',
    addBetween: '',
    list:[],
  },
  methods: {
    addToDo() {
      if (!this.addName.length) {
        return
      }else if(!this.addCourse.length) {
        return
      }else if(!this.addBetween.length) {
        return
      }
      this.list.push({
        name: this.addName,
        course: this.addCourse,
        between: this.addBetween
      });
      this.addName = '',
      this.addCourse = '',
      this.addBetween = '' 
    }
  }
})
