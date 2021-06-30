import { mapGetters, mapMutations, mapActions } from "vuex"
import moment from 'moment'

export default {
  mounted() {
    this.fetchOrders()
  },
  data() {
    return {
      multipleSelection: [],
      search: '',
      moment,
    }
  },
  watch: {
    search() {
      this.setOrdersMeta({search: this.search})
    }
  },
  computed: {
    ...mapGetters(['orders', 'ordersMeta'])
  },
  methods: {
    ...mapMutations(['setOrdersMeta']),
    ...mapActions(['fetchOrders']),
    onPaginationChange(value) {
      this.setOrdersMeta({page: value})
      this.fetchOrders({page: value})
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    blurSearch() {
      this.fetchOrders()
    }
  }
}