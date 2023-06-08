<script setup>
useHead({
  title: "Rebuilding Allbird"
});

const categories = ref([
  `Women's Running Shoes`,
  `Everyday Sneakers`,
  `Slip-Ons`,
  `High Tops`,
  `Boat Shoes`,
  `Flat`,
  `Weather Repellent Shoes`,
])

const products = ref([
  {
    name: `Women's Wool Runner Mizzles`,
    description: `Our weather-ready sneaker made with merino wool and Puddle Guard™️.`,
    styles: [
      {
        name: `Natural Gray (Cream Sole)`,
        price: `$115`,
        image: `https://placehold.co/2000`
      },
      {
        name: `Savanna Night (Cream Sole)`,
        price: `$115`,
        image: ``
      },
      {
        name: `Black Sands (Asphalt Sole)`,
        price: `$115`,
        image: ``
      },
      {
        name: `Cardamom (Cream Sole)`,
        price: `$115`,
        image: ``
      },
      {
        name: `Ginseng (Beige Sole)`,
        price: `$115`,
        image: ``
      },
      {
        name: `Dapple Gray (Cream Sole)`,
        price: `$115`,
        image: ``
      },
      {
        name: `Aurora (Cream)`,
        price: `$115`,
        image: ``
      },
      {
        name: `Pacific (Cream Sole)`,
        price: `$115`,
        image: ``
      },
      {
        name: `True Black (Black Sole)`,
        price: `$115`,
        image: ``
      },
    ]
  }
])
</script>

<template>
  <div class="px-4 py-1 bg-lime-800 text-white">
    <p class="text-white font-medium text-center">  
      We're raising prices on all products by $1 today in support of the planet. <a href="" class="underline">Learn more.</a>
    </p>
  </div>
  <header class="sticky top-0 relative px-5 py-3 flex items-center justify-between bg-white">
    <div class="absolute inset-0 shadow-lg opacity-50"></div>
    <div class="flex">
      <button class="h-8 w-8">
        <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div class="flex">
      Logo
    </div>
    <div class="flex">
      <button class="h-8 w-8">
        <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </button>
    </div>
  </header>
  <main>
    <div>
      <div class="flex items-center justify-between px-8 pt-4 pb-3">
        <div>
          <div class="text-xs font-medium text-gray-900 space-x-1">
            <a href="" class="underline">Home</a>
            <span>/</span>
          </div>
          <h1 class="text-lg font-bold text-gray-900">Women's Shoes</h1>
        </div>
        <div>
          <button class="block h-6 w-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
          </button>
        </div>
      </div>
      <div class="bg-gray-100 py-3 overflow-x-auto">
        <div class="px-8 text-sm inline flex space-x-5">
          <a href="" class="text-gray-800 whitespace-nowrap" v-for="category in categories">{{ category }}</a>
        </div>
      </div>
    </div>
    <div class="py-8">
      <div class="flex items-center space-x-4 bg-green-700 bg-opacity-20 px-8 py-3">
        <div>
          <svg class="-ml-2 w-14 h-14 transform rotate-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        </div>
        <div>
          <div class="flex space-x-2">
            <h2 class="text-sm font-medium text-gray-900">Pay It To The Planet</h2>
            <svg class="h6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
          </div>
          <p class="mt-1 text-sm text-gray-900 text-opacity-90">Every Black Friday purchase supports Fridays for Future</p>
        </div>
      </div>
      <div class="py-16 px-8">
        <div v-for="product in products">
          <div>
            <h2 class="text-sl font-semibold">{{ product.name }}</h2>
            <p class="text-sm text-gray-800">{{ product.description }}</p>
          </div>
          <div class="shadow-xl mt-4">
            <div class="shadow-lg">
              <a href="">
                <div>
                  <img v-bind:src="product.styles[0].image" alt="">
                </div>
                <div class="px-4 pt-3 antialiased">
                  <h3 class="text-sm font-semibold">{{ product.name }}</h3>
                  <p class="mt-1 text-sm text-gray-800">{{ product.styles[0].name }}</p>
                </div>
              </a>
              <div class="mt-1 px-4 pb-4">
                <p class="text-sm text-gray-800">{{ product.styles[0].price }}</p>
                <div class="mt-4 flex space-x-4">
                  <button v-for="style, i in product.styles" class="h-6 w-6 flex flex-col border border-gray-300 transform -rotate-45 rounded-full overflow-hidden ring-2 ring-offset-1 ring-gray-300">
                    <span class="sr-only">{{ style.name }}</span>
                    <span class="h-3 w-6" style="{{ background-color: style.colors[0]; }}"></span>
                    <span class="h-3 w-6" style="{{ background-color: style.colors[1]; }}"></span>
                  </button>
                </div>
              </div>
              <div class="border-t">
                <button class="px-4 py-3 text-sm w-full flex justify-between">
                  <span class="font-semibold">Quick Add</span>
                  <span class="h-6 w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>