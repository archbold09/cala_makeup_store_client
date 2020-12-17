<template>
  <div>
    <!--Nav-->
    <nav id="header" class="w-full z-30 top-0 py-1">
      <div
        class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3"
      >
        <label for="menu-toggle" class="cursor-pointer md:hidden block">
          <svg
            class="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div
          class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul
              class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0"
            >
              <li>
                <nuxt-link
                  class="font-medium no-underline hover:font-black hover:text-black hover:underline py-2 px-4"
                  to="products"
                  >Productos</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  class="font-medium no-underline hover:font-black hover:text-black hover:underline py-2 px-4"
                  to="about"
                  >Nosotros</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>

        <div class="order-1 md:order-2">
          <nuxt-link
            class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl transform transition duration-500 hover:scale-110"
            to="/"
          >
            CALA
          </nuxt-link>
        </div>

        <div class="order-2 md:order-3 flex items-center" id="nav-content">
          <a class="pl-3 inline-block no-underline hover:text-black" href="#">
            <svg
              class="fill-current hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>
