<template>
  <header class="pb-20">
    <div class="w-11/12 mx-auto mt-5">
      <div class="items-center justify-between md:flex">
        <figure>
          <img
            class="mx-auto"
            src="@/assets/svg/logo.svg"
            alt="Logo de la empresa"
          />
        </figure>

        <nav class="mt-10 md:mt-0">
          <ul class="w-24 mx-auto md:flex md:w-auto">
            <li class="mr-5">
              <a href="#"><span class="text-las-gray">About</span></a>
            </li>
            <li class="px-5">
              <a href="#"><span class="text-las-gray">Features</span></a>
            </li>
            <li class="px-5">
              <a href="#"><span class="text-las-gray">Pricing</span></a>
            </li>
            <li class="px-5">
              <a href="#"><span class="text-las-gray">Testimonials</span></a>
            </li>
            <li class="px-5">
              <a href="#"><span class="text-las-gray">Help</span></a>
            </li>
          </ul>
        </nav>

        <div class="flex flex-col items-center mt-10 md:mt-0 md:flex-row">
          <a class="mb-5 md:m-0 md:mr-5" href="#"
            ><span class="text-base font-medium text-las-black"
              >Sign in</span
            ></a
          >
          <a href="#"
            ><span
              class="
                py-3
                text-base
                font-medium
                border
                rounded-full
                text-las-orange
                px-11
                border-las-orange
              "
              >Sign Up</span
            ></a
          >
        </div>
      </div>

      <div class="mt-20 md:flex">
        <div class="mb-20 md:w-1/2">
          <h1 class="mb-5 text-5xl font-medium md:w-2/3 leading-70">
            Want anything to be easy with
            <span class="font-bold leading-70">LaslesVPN.</span>
          </h1>

          <p class="mb-12 leading-8 text-las-gray md:w-3/4">
            Provide a network for all your needs with ease and fun using
            <span class="font-medium">LaslesVPN</span> discover interesting
            features from us.
          </p>

          <a class="mx-auto" href="#"
            ><span
              class="
                px-16
                py-4
                font-bold
                text-white
                rounded-lg
                orange-shadow
                bg-las-orange
              "
              >Get Started</span
            ></a
          >
        </div>
        <figure class="md:w-1/2">
          <img
            class="w-auto h-auto"
            src="@/assets/webp/header-img.webp"
            alt=""
          />
        </figure>
      </div>

      <div class="mt-20 header-shadow">
        <div class="justify-between border md:flex">
          <div class="flex justify-center py-16 w-72">
            <div
              class="
                flex
                items-center
                justify-center
                mr-5
                rounded-full
                bg-las-orange-light
                w-14
                h-14
              "
            >
              <menu-icon class="text-las-orange" />
            </div>
            <div class="ml-5">
              <h4 class="text-2xl font-bold leading-7">90+</h4>
              <p class="text-xl leading-7 text-las-gray">Users</p>
            </div>
          </div>

          <div class="flex justify-center py-16 w-72">
            <div
              class="
                flex
                items-center
                justify-center
                mr-5
                rounded-full
                bg-las-orange-light
                w-14
                h-14
              "
            >
              <location-icon class="text-las-orange" />
            </div>
            <div class="ml-5">
              <h4 class="text-2xl font-bold leading-7">30+</h4>
              <p class="text-xl leading-7 text-las-gray">Locations</p>
            </div>
          </div>

          <div class="flex justify-center py-16 w-72">
            <div
              class="
                flex
                items-center
                justify-center
                mr-5
                rounded-full
                bg-las-orange-light
                w-14
                h-14
              "
            >
              <server-icon class="text-las-orange" />
            </div>
            <div class="ml-5">
              <h4 class="text-2xl font-bold leading-7">50+</h4>
              <p class="text-xl leading-7 text-las-gray">Servers</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 md:flex">
        <figure class="mb-10 md:w-1/2">
          <img
            class="w-auto h-auto"
            src="@/assets/webp/header2-img.webp"
            alt=""
          />
        </figure>

        <div class="pt-20 pl-20">
          <h3 class="mb-5 text-4xl font-medium leading-10 md:w-96">
            We Provide Many Features You Can Use
          </h3>

          <p class="mb-5 leading-7 text-las-gray md:w-96">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>

          <ul class="list-disc">
            <li class="mb-3 text-sm text-las-gray">
              Powerfull online protection.
            </li>
            <li class="mb-3 text-sm text-las-gray">
              Internet without borders.
            </li>
            <li class="mb-3 text-sm text-las-gray">Supercharged VPN</li>
            <li class="mb-3 text-sm text-las-gray">No specific time limits.</li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import MenuIcon from "vue-material-design-icons/Account.vue";
import LocationIcon from "vue-material-design-icons/MapMarker.vue";
import ServerIcon from "vue-material-design-icons/Server.vue";

export default {
  name: "PxHeader",
  components: {
    MenuIcon,
    LocationIcon,
    ServerIcon,
  },
};
</script>
