export default {
  data() {
    return {
      toast: {
        show: false,
        status: '',
        title: '',
        text: '',
        hide() {
          setTimeout(() => (this.show = false), 3000)
        }
      }
    }
  },
  methods: {
    setToastData(data) {
      this.toast = {
        ...data,
        hide: this.toast.hide
      }
    }
  }
}
