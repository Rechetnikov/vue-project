export default {
    data() {
      return {
        searchName: '',
        names: ['Vlad', 'Max', 'Elena', 'Igor', 'Sergey']
      }
    },
    computed: {
      filteredNames() {
        return this.names.filter(name => {
          return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
        })
      }
    }
  }