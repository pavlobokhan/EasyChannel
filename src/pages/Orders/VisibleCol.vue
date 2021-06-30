<template>
  <div class="visibleCol-btn" @click="modal = !modal">
    <font-awesome-icon :icon="['fas', 'columns']" color="#8854DD" />
  </div>
  <div style="position: relative">
    <div v-if="modal" class="visibleCol__modal" @mouseleave="modal = false">
      <div 
        class="visibleCol__modal-item"
        v-for="(item, index) in items"
        :key="index"
        @click="$emit('change', item.key)"
      >
        {{item.title}}
        <font-awesome-icon :icon="['fas', visibleRow[item.key] ? 'eye' : 'eye-slash']" color="#8854DD" style="margin-left: 10px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['change'],
  props: {
    items: {
      type: Array,
      default: []
    },
    visibleRow: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      modal: false
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .visibleCol {
    
    &-btn {
      border-radius: 8px;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 0 0 0 10px;
      background: #FFFFFF;
      box-shadow: 0px 4px 8px rgba(102, 104, 160, 0.1);
      border-radius: 8px;
    }

    &__modal {
      position: absolute;
      right: 5px;
      top: 30px;
      background: #FFFFFF;
      box-shadow: 0px 4px 8px rgba(102, 104, 160, 0.1);
      border-radius: 8px;
      padding: 5px 0;
      z-index: 99999999;

      &-item {
        width: 100%;
        cursor: pointer;
        padding: 5px 20px;
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        color: #554780;
      }
    }
  }
</style>