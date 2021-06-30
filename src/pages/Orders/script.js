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
    ...mapActions(['fetchOrders', 'deleteOrder', 'deleteOrders']),
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
    },
    handleDeleteOrder(id) {
      this.$confirm('You want to delete order?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.deleteOrder(id)
          .then(() => {
            this.$message({
              type: 'success',
              message: 'Delete completed'
            });
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        });
      });
    },
    openOrder(id) {
      this.$router.push({name: 'order', params: {id}})
    },
    massDelete() {
      this.deleteOrders(this.multipleSelection)
        .then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
        })
    }
  }
}