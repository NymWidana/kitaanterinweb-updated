import { defineStore } from 'pinia';
import axios from 'axios';

const PRODUCTS_URL = '/public/data/products.json'; // Replace with the actual URL

export const useShopStore = defineStore('shop', {
  state: () => ({
    products: [],
    users: []
  }),
  actions: {
    async fetchProducts() {
  try {
    const response = await axios.get(PRODUCTS_URL, {
      params: {
        etalase_id: 'etalase',
        order_by: 1,
        page: 1,
        per_page: 80,
        shop_id: 13260399,
        user_cityId: 176,
        user_districtId: 2274,
      },
    });

    const productsData = response.data[0].data.GetShopProduct.data; // Access the nested data array
    this.products = productsData;
    console.log(this.products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
},

    async fetchUsers() {
        try {
          const data = await axios.get('https://jsonplaceholder.typicode.com/users')
            this.users = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
  },
});
