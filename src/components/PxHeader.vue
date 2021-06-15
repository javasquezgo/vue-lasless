<template>
  <header>
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
              class="py-3 text-base font-medium border rounded-full  text-las-orange px-11 border-las-orange"
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
              class="px-16 py-4 font-bold text-white rounded-lg  orange-shadow bg-las-orange"
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
      <div class="mt-10">
        <div class="border">
          <div class="mx-auto border w-72">
            <menu-icon class="text-purple-600 w-9 h-28" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
