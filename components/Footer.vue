<template>
  <div>
    <!--footer app-->
    <!-- <footer
      class="container mx-auto bg-white py-8 border-t border-gray-400 fixed inset-x-0 bottom-0"
    >
      <div class="container flex px-3 py-8">
        <div class="w-full mx-auto flex flex-wrap">
          <div class="flex w-full lg:w-1/2">
            <div class="px-3 md:px-0">
              <h3 class="font-bold text-gray-900">About</h3>
              <p class="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse
                consectetur dapibus velit ut lacinia.
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
    </footer> -->

    <!--footer web-->
    <div class="mt-64">
      <footer
        class="mx-auto bg-white py-1 border-t border-gray-400 fixed inset-x-0 bottom-0"
      >
        <div class="flex px-3 text-center">
          <div class="w-full mx-auto flex flex-wrap">
            <div class="flex w-full justify-between">
              <div class="flex w-full justify-start items-center">
                <h3 class="font-bold text-gray-900 text-xs">
                  <i
                    class="mdi mdi-copyright"
                    style="font-size: 15px; font-weight: 900"
                  ></i>
                  {{ getDate }}
                  Cala Makeup Store
                </h3>
              </div>
              <div class="w-full mx-auto flex flex-wrap">
                <div class="flex w-full justify-end items-center">
                  <a class="px-2" href="#">
                    <i
                      class="mdi mdi-facebook text-gray-900"
                      style="font-size: 20px; font-weight: 900"
                    ></i>
                  </a>
                  <a class="px-2" href="#">
                    <i
                      class="mdi mdi-instagram text-gray-900"
                      style="font-size: 20px; font-weight: 900"
                    ></i>
                  </a>
                  <a class="px-2" href="#">
                    <i
                      class="mdi mdi-whatsapp text-gray-900"
                      style="font-size: 20px; font-weight: 900"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getDate() {
      return new Date().getFullYear()
    },
  },
}
</script>
