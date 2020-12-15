<template>
  <div class="container mx-auto bg-white py-8 border-t border-gray-400">
    <div class="container flex px-3 py-8">
      <div class="w-full mx-auto flex flex-wrap">
        <div class="flex w-full lg:w-1/2 justify-center">
          <div class="px-3 md:px-0">
            <h3 class="font-bold text-gray-900">ERROR 404 NOT FOUND!</h3>
            <p class="py-4">
                 <NuxtLink  NuxtLink to="/">Volver al inicio</NuxtLink>
            </p>
          </div>
        </div>
        <div class="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
          <div class="px-3 md:px-0">
            <h3 class="font-bold text-gray-900">Social</h3>
            <ul class="list-reset items-center pt-3">
              <li>
                <a
                  class="inline-block no-underline hover:text-black hover:underline py-1"
                  href="#"
                  >Add social links</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
}
</script>
