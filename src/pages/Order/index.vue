<template>
  <div class="order" v-if="order">
    <div class="order__header">
      <div class="order__header-left" @click="$router.push({ name: 'orders'})">
        <font-awesome-icon :icon="['fas', 'arrow-left']" color="#504780" />
      </div>
      <div class="order__header-status"><strong>Status:</strong> {{order.status}}</div>
    </div>
    <el-row class="order__top">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <img src="@/assets/product.png" class="order__top-image" />
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="order__top-details">
          <h4>Buyer Info</h4>
          <div>Name: {{order.buyer.name}}</div>
          <div>Username: {{order.buyer.username}}</div>
          <div>Email: {{order.buyer.email}}</div>
        </div>
        <div class="order__top-details">
          <h4>Address Info</h4>
          <div>Phone: {{order.address.phone}}</div>
          <div>Country: {{order.address.country}}</div>
          <div>City: {{order.address.city}}</div>
          <div>Address: {{order.address.address}}</div>
          <div>Postal Code: {{order.address.postal_code}}</div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <h3>Transactions List</h3>
      </el-col>
      <el-col :span="24">
        <el-table
          :data="order.transactions"
          style="width: 99%; margin-bottom: 20px;"
        >
          <el-table-column
            prop="id"
            label="Id"
          >
          </el-table-column>
          <el-table-column
            prop="item_id"
            label="Item ID"
          >
            <template #default="scope">{{ scope.row.item.id }}</template>
          </el-table-column>
          <el-table-column
            prop="item_title"
            label="Item Title"
          >
            <template #default="scope">{{ scope.row.item.title }}</template>
          </el-table-column>
          <el-table-column
            prop="price"
            label="Price"
          >
            <template #default="scope">${{ scope.row.price }}</template>
          </el-table-column>
          <el-table-column
            prop="status"
            label="Status"
          >
            <template #default="scope">{{ scope.row.shipping_status }}</template>
          </el-table-column>
        </el-table>
      </el-col >
    </el-row>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss">@import "style"</style>