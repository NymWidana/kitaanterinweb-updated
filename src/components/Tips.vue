<script setup>
import { ref } from "vue";
import { reactive } from "vue";

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
const specialTips = [
  {
    judul: "Anti sakit perut club1",
    urlGambar: new URL("/src/assets/specialtips01.png", import.meta.url).href,
  },
  {
    judul: "Anti sakit perut club2",
    urlGambar: new URL("/src/assets/tips1.png", import.meta.url).href,
  },
  {
    judul: "Anti sakit perut club3",
    urlGambar: new URL("/src/assets/tips2.png", import.meta.url).href,
  },
  {
    judul: "Anti sakit perut club4",
    urlGambar: new URL("/src/assets/tips3.png", import.meta.url).href,
  },
  {
    judul: "Anti sakit perut club",
    urlGambar: new URL("/src/assets/specialtips01.png", import.meta.url).href,
  },
];
const currentST = ref(1);
const tips = [
  {
    judul: "menyimpan daging agar tahan lama",
    urlGambar: new URL("/src/assets/tips1.png", import.meta.url).href,
  },
  {
    judul: "vegetarian snack from terong",
    urlGambar: new URL("/src/assets/tips2.png", import.meta.url).href,
  },
  {
    judul: "manfaat sawi putih untuk anak",
    urlGambar: new URL("/src/assets/tips3.png", import.meta.url).href,
  },
  {
    judul: "tip1 jadi kurus dalam 1 detik",
    urlGambar: new URL("/src/assets/tips1.png", import.meta.url).href,
  },
  {
    judul: "tip2 jadi kurus dalam 1 detik",
    urlGambar: new URL("/src/assets/tips2.png", import.meta.url).href,
  },
  {
    judul: "tip3 jadi kurus dalam 1 detik",
    urlGambar: new URL("/src/assets/tips3.png", import.meta.url).href,
  },
];
const topTips = tips.slice(0, 3);

function toggleMenu() {
  var element = document.getElementById("hamBtn");
  element.classList.toggle("close");
  var element = document.getElementById("nav");
  element.classList.toggle("open");
}

// setInterval(() => {
//   if (currentST.value === specialTips.length) {
//     currentST.value = 1;
//   }else{
//     currentST.value++;
//   }
// }, 3000)
// function changeCurrentST(){
// var activeDot = document.querySelector('#dot'+currentST.value)
//   var element = document.getElementById(activeDot);
//   element.classList.toggle("active");
// }
</script>

<template>
  <nav class="bg-greenka relative z-50 shadow-md">
    <div class="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
      <div
        class="text-white w-full md:w-1/4 font-medium mt-4 md:mt-0 text-2xl md:text-xl order-3 md:order-none text-center"
      >
        <hr class="h-0.5 bg-white block md:hidden" />
        TIPS FROM US
        <hr class="h-0.5 bg-white block md:hidden" />
      </div>
      <router-link
        to="/"
        class="flex items-center mx-auto w-1/2 md:w-auto md:justify-center"
      >
        <img
          src="../assets/kitaanterinlogo5.png"
          class="h-12 md:h-20"
          alt="Kita Anterin Logo"
        />
      </router-link>
      <div
        class="flex items-center justify-end md:justify-center w-1/2 md:hidden"
      >
        <button
          id="hamBtn"
          type="button"
          class="text-sm rounded-sm"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div id="nav" class="hidden md:block w-full md:w-1/4" style="top: 7rem">
        <ul
          class="flex flex-col justify-end font-medium m-4 rounded-lg bg-black bg-opacity-50 md:bg-opacity-0 backdrop-blur-sm md:backdrop-blur-none md:flex-row md:space-x-8 md:m-0 md:border-0 md:bg-transparent"
        >
          <li v-for="nav in navs">
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
  <div>
    <div class="m-6 md:m-12 mb-12 md:mb-24 md:flex md:gap-8 md:items-center">
      <div class="relative mb-4 md:mb-0">
        <div class="">
          <img
            :src="specialTips[currentST - 1].urlGambar"
            :alt="'gambar' + specialTips[currentST - 1].judul"
            class="h-120 ratio-3/2 object-cover"
          />
        </div>
        <div
          class="text-white font-semibold absolute left-0 bottom-0 right-0 p-4 md:p-8 bg-black bg-opacity-50"
        >
          <div class="text-2xl">Edisi puasa</div>
          <a href="" class="text-xl">{{ specialTips[currentST - 1].judul }}</a>
        </div>
        <div
          class="absolute flex gap-1 bottom-3 right-3 md:bottom-6 md:right-6"
        >
          <div
            v-for="(s, index) in specialTips"
            :key="index"
            :id="'dot' + (index + 1)"
            class="w-2 h-2 bg-white rounded-full"
            @click="currentST = index + 1"
          ></div>
        </div>
        <button
          class="absolute text-7xl top-1/2 -translate-y-1/2 left-4 bg-black bg-opacity-50 text-white grid place-items-center rounded-full p-2"
          @click="currentST--"
          :disabled="currentST === 1"
        >
          <img src="../assets/toleft.svg" class="w-6 h-6 pr-2" alt="" />
        </button>
        <button
          class="absolute text-7xl top-1/2 -translate-y-1/2 right-4 bg-black bg-opacity-50 text-white grid place-items-center rounded-full p-2"
          @click="currentST++"
          :disabled="currentST === specialTips.length"
        >
          <img src="../assets/toright.svg" class="w-6 h-6 pl-2" alt="" />
        </button>
      </div>
      <div class="h-120 flex flex-col gap-4 md:gap-8">
        <div
          class="flex items-center gap-3 md:gap-6 overflow-hidden"
          v-for="tips in topTips"
        >
          <img
            :src="tips.urlGambar"
            class="object-cover h-28 sm:h-36 md:h-32 lg:h-36 ratio-5/4"
            :alt="'gambar ' + tips.judul"
          />

          <div class="font-medium sm:font-semibold">
            <div class="xs:text-xl sm:text-2xl md:text-lg">Tips!!</div>
            <a href="#" class="xs:text-lg sm:text-xl md:text-base">{{
              tips.judul
            }}</a>
          </div>
        </div>
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
                  v-for="description in paginatedProducts()[
                    currentActiveProduct
                  ].descriptions"
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
              <p class="text-4xl text-right">
                {{
                  paginatedProducts()[
                    currentActiveProduct
                  ].price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })
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
  </div>
</template>
