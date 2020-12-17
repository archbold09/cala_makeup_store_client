<template>
  <div>


    <!--footer web-->
    <div class="mt-34 footer-web">
      <footer
        class="mx-auto bg-white py-1 border-t border-gray-400 fixed inset-x-0 bottom-0"
      >
        <div class="flex px-3 text-center">
          <div class="w-full mx-auto flex flex-wrap">
            <div class="flex w-full justify-between">
              <div class="flex w-full justify-start items-center">
                <h3 class="font-black text-gray-900 text-xs uppercase">
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
                  <a class="px-2 transform transition duration-700 hover:scale-125" href="#">
                    <i
                      class="mdi mdi-facebook text-gray-900"
                      style="font-size: 20px; font-weight: 900"
                    ></i>
                  </a>
                  <a class="px-2 transform transition duration-700 hover:scale-125" href="#">
                    <i
                      class="mdi mdi-instagram text-gray-900"
                      style="font-size: 20px; font-weight: 900"
                    ></i>
                  </a>
                  <a class="px-2 transform transition duration-700 hover:scale-125" href="#">
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

<style lang="css" scoped>
.footer-app {
  visibility: hidden;
}

.footer-web {
  visibility: visible;
}

@media screen and (max-width: 768px) {
  .footer-app {
    visibility: visible;
  }

  .footer-web {
    visibility: hidden;
  }
}
</style>
