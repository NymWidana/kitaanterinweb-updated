<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted, computed } from "vue";
// import store get data product
import { useShopStore } from "../stores/store-shop";

// mendefinisikan store shop
const store = useShopStore();

// load data product
const products = computed(() => {
  return store.products;
});

onMounted(() => {
  store.fetchProducts();
});

const navs = [
  {
    teks: "HOME",
    url: "/",
  },
  {
    teks: "SHOP",
    url: "/Shop",
  },
  {
    teks: "TIPS",
    url: "/Tips",
  },
];

function toggleMenu() {
  document.getElementById("hamBtn").classList.toggle("close");
  document.getElementById("nav").classList.toggle("open");
}

const categories = [
  "All",
  "Vegetables",
  "Fruits",
  "Meats",
  "Herbs",
  "Seafoods",
  "Others",
];

// const productsPerPage = ref(12);
// const selectedCategory = ref("all");
// const searchQuery = ref("");
// const currentPage = ref(1);

// function filteredProducts() {
//   let filteredProducts = products;
//   if (selectedCategory.value !== "all") {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.category === selectedCategory.value
//     );
//   }
//   if (searchQuery.value !== "") {
//     filteredProducts = filteredProducts.filter((product) =>
//       product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
//     );
//   }
//   return filteredProducts;
// }
// function totalPages() {
//   return Math.ceil(filteredProducts().length / productsPerPage.value);
// }
// function paginatedProducts() {
//   const startIndex = (currentPage.value - 1) * productsPerPage.value;
//   return filteredProducts().slice(
//     startIndex,
//     startIndex + productsPerPage.value
//   );
// }
// const currentActiveProduct = ref(0);
// function openProductdtl(index) {
//   document.getElementById("productdtl").classList.add("open");
//   currentActiveProduct.value = index;
// }
// function closeProductdtl() {
//   document.getElementById("productdtl").classList.remove("open");
// }
</script>

<template>
  <header class="bg-black bg-opacity-20 backdrop-blur-sm z-50 fixed w-full">
    <nav class="border-gray-200 bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <router-link to="/" class="flex items-center">
          <img
            src="../assets/kitaanterinlogo4.png"
            class="h-12 mr-3"
            alt="Kita Anterin Logo"
          />
        </router-link>
        <div class="flex items-center">
          <button
            id="hamBtn"
            type="button"
            class="text-sm rounded-sm md:hidden"
            @click="toggleMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div id="nav" class="hidden md:block w-full md:w-auto">
          <ul
            class="flex flex-col font-medium m-4 rounded-lg bg-black bg-opacity-50 md:bg-opacity-0 backdrop-blur-sm md:backdrop-blur-none md:flex-row md:space-x-8 md:m-0 md:border-0 md:bg-transparent"
          >
            <li v-for="nav in navs" :key="nav">
              <router-link
                :to="nav.url"
                class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                >{{ nav.teks }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <!-- banner -->
  <div
    class="bg-bannerp h-banner flex items-center justify-center relative -z-50"
  >
    <div
      class="text-3xl sm:text-5xl lg:text-6xl text-white bg-black bg-opacity-20 p-8 rounded-full fixed -translate-y-24"
    >
      OUR PRODUCTS
    </div>
  </div>

  <!-- content -->
  <div class="bg-white mx-auto max-w-screen-xl pt-8 md:pt-16">
    <div class="bg-greenka p-2 rounded-full mx-4 md:mx-8 mb-4 md:mb-8">
      <div
        class="ml-auto rounded-full py-2 px-4 w-48 sm:w-64 bg-white flex items-center gap-1"
      >
        <img src="../assets/searchicon.svg" class="w-5" alt="searchicon" />
        <input
          type="text"
          class="focus:outline-none w-full"
          placeholder="Search...."
          v-model="searchQuery"
        />
      </div>
    </div>
    <div class="mx-6 sm:mx-12 md:mx-24">
      <!-- category -->
      <div
        class="flex gap-2 md:gap-4 my-4 md:my-8 overflow-x-scroll md:overflow-x-auto text-sm sm:text-base"
      >
        <button
          class="categorybtn p-1 sm:p-2 px-4 sm:px-8 md:px-0 border-black border-2 cursor-pointer rounded-full grow text-center hover:bg-greenka2 hover:text-white hover:border-greenka2 transition"
          v-for="category in categories"
          :key="category"
          @click="
            selectedCategory = category.toLowerCase();
            currentPage = 1;
          "
          :class="category"
        >
          {{ category }}
        </button>
      </div>
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 pb-8 md:pb-16"
      >
        <button
          @click="openProductdtl(index)"
          class="rounded-3xl overflow-hidden flex flex-col p-4 gap-8 shadow-lg shadow-slate-400 hover:shadow transition items-center"
          v-for="product in products"
          :key="product.product_id"
        >
          <div>
            <img
              :src="product.primary_image.original"
              class="mx-auto h-56"
              :alt="'gambar ' + product.name"
            />
          </div>
          <div class="text-center w-full">
            <div class="font-medium sm:text-xl font-tnr">
              {{ product.price.text_idr }}
            </div>
            <div class="text-sm sm:text-base capitalize font-tnr">
              {{ product.name }}
            </div>
          </div>
        </button>
      </div>
      <!-- <div
        class="m-auto sm:ml-auto w-fit flex gap-4 sm:gap-8 pb-12 md:pb-24 items-center"
      >
        <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          class="text-white text-sm sm:text-base font-medium p-2 px-4 sm:px-8 bg-greenka3 rounded-xl"
        >
          &lt;pre
        </button>
        <div>{{ currentPage }}/{{ totalPages() }}</div>
        <button
          @click="currentPage++"
          :disabled="currentPage === totalPages()"
          class="text-white text-sm sm:text-base font-medium p-2 px-4 sm:px-8 bg-greenka3 rounded-xl"
        >
          next&gt;
        </button>
      </div> -->

      <!-- detail produk -->
      <!-- <div
        class="fixed z-50 bg-black bg-opacity-20 backdrop-blur-sm inset-0 px-12 hidden items-center"
        id="productdtl"
      >
        <div
          class="w-full bg-white grid grid-flow-col place-items-center rounded-l-3xl p-12 pr-0 relative"
        >
          <div class="grid place-items-center">
            <img
              :src="paginatedProducts()[currentActiveProduct].urlGambar"
              class="h-28rem"
              alt=""
            />
            <div
              class="p-1 sm:p-2 px-4 sm:px-8 border-black border-2 rounded-full grow text-center"
            >
              {{ paginatedProducts()[currentActiveProduct].category }}
            </div>
          </div>
          <div class="bg-greenka text-white p-8 rounded-l-3xl">
            <h4 class="text-3xl mb-8 capitalize font-PFD">
              {{ paginatedProducts()[currentActiveProduct].name }}
            </h4>
            <div class="text-xl">
              <p
                class="mb-4"
                v-for="description in paginatedProducts()[currentActiveProduct]
                  .descriptions"
                :key="description"
              >
                {{ description }}
              </p>
              <p class="mb-4">
                {{
                  "min pemesanan : " +
                  paginatedProducts()[currentActiveProduct].minPemesanan
                }}
              </p>
              <p class="mb-4">
                {{
                  "kondisi : " +
                  paginatedProducts()[currentActiveProduct].kondisi
                }}
              </p>
            </div>
            <p class="text-4xl text-right font-tnr">
              {{
                paginatedProducts()[currentActiveProduct].price.toLocaleString(
                  "id-ID",
                  {
                    style: "currency",
                    currency: "IDR",
                  }
                )
              }}
            </p>
          </div>
          <button
            id="productclosebtn"
            class="absolute top-4 right-4 text-white bg-slate-200 p-2 rounded-3xl"
            @click="closeProductdtl"
          >
            <img src="../assets/closebtn.svg" class="w-4 h-4" alt="" />
          </button>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style>
.bg-bannerp {
  background: url(../assets/bannerp.png) center/cover no-repeat fixed;
}
</style>
