<template>
  <div class="orders">
    <div class="orders__header">
      <div class="orders__header-info">
        <h1 class="orders__header-info-title">Manage your Orders</h1>
        <h3 class="orders__header-info-description">Manage your orders from the past 90 days - send messages, add tracking numbers, and more.</h3>
      </div>
      <div class="orders__header__action">
        <el-input
          defaultValue=""
          placeholder="Search ItemID..."
          prefix-icon="el-icon-search"
          v-model="search"
          @blur="blurSearch"
        >
        </el-input>
        <VisibleCol
          :items="[
            { key: 'item', title: 'Item'},
            { key: 'order_date', title: 'Order Date'},
            { key: 'order_details', title: 'Order Details'},
            { key: 'profit', title: 'Profit'},
            { key: 'buyer_details', title: 'Buyer Details'},
            { key: 'formatted_address', title: 'Formatted Address'},
            { key: 'shipping_date', title: 'Shipping Date'},
          ]"
          :visibleRow="visibleRow"
          @change="changeVisible"
        />
      </div>
    </div>
    <el-button 
      size="small" 
      :disabled="multipleSelection.length === 0" 
      type="danger" 
      round
      style="margin-bottom: 10px;"
      @click="massDelete"
    >
      Delete Selected Orders
    </el-button>
    <el-table
      ref="multipleTable"
      :data="orders"
      style="margin-bottom: 20px;"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
      />
      <el-table-column
        v-if="visibleRow.item"
        prop="item"
        label="Item"
        min-width="300"
      >
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <img src="@/assets/product.png" style="height: 50px; width: 50px; object-fit: contain"/>
            <div style="margin-left: 8px">
              {{scope.row.buyer.name}} <br />
              <span style="color: #8854DD"><strong>Item ID: </strong>{{scope.row.id}}</span> <br />
              <span><strong>SKU: </strong>d36d9</span> <br />
              <span><strong>Qty: </strong>01</span>
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        v-if="visibleRow.order_date"
        prop="order_date"
        label="Date"
        min-width="120"
      >
        <template #default="scope">{{ moment(scope.row.order_date, 'YYYY-MM-DD HH:mm:SS').format('MMM DD, YYYY hh:mm A') }}</template>
      </el-table-column>

      <el-table-column
        v-if="visibleRow.order_details"
        prop="order_details"
        label="Order Details"
        min-width="300"
      >
        <template #default="scope">
          <template v-for="item in scope.row.transactions" :key="item.id">
            <span style="color: #8854DD"><strong>Order ID: </strong>{{scope.row.id}}</span> <br />
            <span><strong>Transaction ID: </strong>{{item.external_id}}</span> <br />
            <span><strong>Transaction price: </strong>{{item.currency}} {{item.price}}</span> <br />
            <span><strong>Transaction status: </strong>{{item.shipping_status}}</span> <br />
            <span><strong>Date paid: </strong>{{ moment(item.shipping_date, 'YYYY-MM-DD HH:mm:SS').format('MMM DD, YYYY hh:mm A') }}</span>
          </template>
        </template>
      </el-table-column>

      <el-table-column
        v-if="visibleRow.profit"
        prop="profit"
        label="Profit"
        min-width="50"
      >
        <template #default="">${{ Math.round(Math.random() * 1000) }}</template>
      </el-table-column>

      <el-table-column
        v-if="visibleRow.buyer_details"
        prop="buyer_details"
        label="Buyer Details"
        min-width="200"
      >
        <template #default="scope">
          <span>Name: {{scope.row.buyer.name}}</span> <br />
          <span>Username: {{scope.row.buyer.username}}</span>
        </template>
      </el-table-column>

      <el-table-column
        v-if="visibleRow.formatted_address"
        prop="formatted_address"
        label="Shipping Address"
        min-width="120"
      >
        <template #default="scope">{{ scope.row.address.formatted_address }}</template>
      </el-table-column>

      <el-table-column
        v-if="visibleRow.shipping_date"
        prop="shipping_date"
        label="Shipping Date"
        min-width="120"
      >
        <template #default="scope">{{ moment(scope.row.order_date, 'YYYY-MM-DD HH:mm:SS').format('MMM DD, YYYY hh:mm A') }}</template>
      </el-table-column>

      <el-table-column
        prop="actions"
        label="Actions"
        min-width="100"
      >
        <template #default="scope">
          <div style="display: flex">
            <div class="orders__btn orders__btn-view" @click="openOrder(scope.row.id)">
              <font-awesome-icon :icon="['fas', 'bolt']" color="#8854DD" />
            </div>
            <div class="orders__btn orders__btn-delete" @click="handleDeleteOrder(scope.row.id)">
              <font-awesome-icon :icon="['fas', 'trash']" color="white" />
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div style="display: flex">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="ordersMeta.total_count"
        :page-size="ordersMeta.limit"
        @current-change="onPaginationChange"
      />
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss">@import "style"</style>