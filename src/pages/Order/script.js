import { mapActions } from "vuex"

export default {
  mounted() {
    this.getOrder(this.$route.params.id)
      .then(res => {
        this.order = res.data
      })
      .catch(() => {
        this.$router.push({ name: 'orders'})
      })
  },
  data() {
    return {
      order: null
    }
  },
  watch: {},
  computed: {},
  methods: {
    ...mapActions(['getOrder'])
  }
}