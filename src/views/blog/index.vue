<template>
  <div>
    <div
      class="fixed top-0 left-0 h-full z-101 bg-blue-800 hidden lg:flex xl:flex flex-col w-5/6 sm:w-5/6 md:w-5/6 lg:w-70 xl:w-80 xxxl:w-90"
    >
      <div class="w-full block flex-grow">
        <div
          class="flex flex-col mt-16 sm:mt-12 md:mt-12 mr-8 mb-12 ml-16 sm:ml-8 md:ml-8 lg:mx-0 xl:mx-0"
        >
          <div
            class="flex justify-center md:justify-center lg:justify-center xl:justify-center items-center"
          >
            <a
              class="rounded-full h-24 w-24 block border border-2 border-yellow-700 overflow-hidden"
              style="
                transform: translateZ(0);
                -webkit-transition: border-color 0.35s ease-in-out;
                -moz-transition: border-color 0.35s ease-in-out;
                transition: border-color 0.35s ease-in-out;
              "
              href="/"
              alt="avatar"
            >
              <img
                class="w-full h-full"
                :src="avatarUrl"
                alt="avatar"
                onerror="this.style.display='none'"
                style="transition: transform 0.5s"
              />
            </a>
          </div>
          <div class="ml-2 mt-4 lg:mx-0 xl:mx-0 flex flex-wrap content-center">
            <div class="text-left lg:text-center xl:text-center w-full">
              <a
                href="/"
                class="text-2xl tracking-wider m-0 font-black"
                style="
                  color: rgba(255, 255, 255, 0.5);
                  transition: color 0.35s ease-in-out;
                  user-select: none;
                "
                >{{ personInfo.name }}</a
              >
            </div>
            <div
              class="text-left lg:text-center xl:text-center w-full mt-1 text-base leading-5 italic font-sans"
              style="color: #828282"
            >
              {{ personInfo.content }}
            </div>
          </div>
        </div>
        <ul class="flex flex-col h-64 pl-0 mb-0 list-none">
          <li
            class="flex justify-center h-12"
            v-for="(sibarItem, sibarIndex) in sibarList"
            :key="sibarIndex"
          >
            <a
              class="flex w-full rounded-none text-base font-semibold tracking-wider px-0 py-2 lg:px-0 xl:px-0 xxxl:pl-10 xxxl:pr-4 lg:justify-center xl:justify-center xxxl:justify-start my-0 mx-1 items-center"
              href="/"
              style="
                color: #fcfcfc;
                transition: color 0.35s ease-in-out;
                user-select: none;
              "
            >
              <i
                v-bind:class="[sibarItem.icon]"
                class="icon iconfont border border-1 border-gray-100 rounded-full w-6 h-6 leading-none text-xs ml-4 mr-4 pt-1 pl-0 inline-block text-center lg:hidden xl:hidden xxxl:inline-block"
              ></i>
              <span class="tracking-widest">{{ sibarItem.name }}</span>
            </a>
          </li>
        </ul>
      </div>
      <div
        class="flex flex-wrap mt-12 ml-12 mr-12 mb-12 text-base justify-around"
      >
        <span class="text-base">
          <i
            class="icon iconfont icon-taiyang w-8 h-8 lg:w-4 lg:h-4 lg:text-xl xl:w-4 xl:h-4 xl:text-xl leading-none text-2xl text-yellow-400 pt-1 pl-0 inline-block text-center"
          ></i>
        </span>
        <span
          class="ml-1 mr-1 mt-3 w-1 h-1 border rounded-full"
          style="background: #525354"
        ></span>
        <a
          v-for="(icon, index) in iconList"
          :key="index"
          href=""
          target="_blank"
        >
          <i
            v-bind:class="[icon.name]"
            class="icon iconfont w-8 h-8 lg:w-4 lg:h-4 lg:text-xl xl:w-4 xl:h-4 xl:text-xl leading-none text-2xl text-yellow-400 pt-1 pl-0 inline-block text-center"
          ></i>
        </a>
      </div>
    </div>

    <div
      class="bg-gray-100 pt-24 lg:pt-0 xl:pt-0 ml-0 sm:ml-0 md:ml-0 lg:ml-70 xl:ml-80 xxxl:ml-90"
    >
      <div
        class="fixed z-100 bg-gray-100 inset-x-0 top-0 border-b-2 border-gray-200 lg:border-b-0 lg:static flex items-center"
      >
        <div class="w-full max-w-screen-xl relative mx-auto px-6">
          <div
            class="lg:border-b-2 lg:border-gray-200 h-24 flex flex-col justify-center"
          >
            <div class="flex items-center -mx-6">
              <div class="lg:w-1/4 xl:w-1/5 pl-6 pr-6">
                <div class="flex items-center">
                  <a href="/" class="block">
                    <svg
                      t="1603799846802"
                      class="h-12 w-auto hidden md:block icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="6823"
                      data-spm-anchor-id="a313x.7781069.0.i1"
                      width="128"
                      height="128"
                    >
                      <path
                        d="M232.9984 187.6736c-32.3328 21.8496-43.4176 70.2848-24.7424 108.1344 18.6624 37.8496 82.5472 96.5248 114.8928 74.6496 32.3328-21.8496 20.8768-115.9552 2.2144-153.8176-18.688-37.8368-60.032-50.816-92.3648-28.9664z m378.9824-60.7104c-39.8464 2.1632-73.9456 37.2608-76.1856 78.4128-2.2272 41.1392 25.536 122.3808 65.3696 120.2176 39.8336-2.1888 76.6464-86.9376 78.8992-128.0896 2.2272-41.1264-28.2496-72.704-68.0832-70.5408z"
                        fill="#0e2e93"
                        p-id="6824"
                        data-spm-anchor-id="a313x.7781069.0.i11"
                        class="selected"
                      ></path>
                      <path
                        d="M512 251.3536c-212.6208 0-384.9856 144.5632-384.9856 322.88 0 178.3424 172.3648 322.9056 384.9856 322.9056 212.6208 0 384.9856-144.5632 384.9856-322.9056 0-178.3168-172.3648-322.88-384.9856-322.88z"
                        fill="#0e2e93"
                        p-id="6825"
                        data-spm-anchor-id="a313x.7781069.0.i2"
                        class="selected"
                      ></path>
                      <path
                        d="M512 698.4448c-106.3168 0-192.4864-16.3328-192.4864 24.8064 0 41.1648 86.1824 74.5344 192.4864 74.5344s192.4864-33.3696 192.4864-74.5344c0-41.1392-86.1824-24.8064-192.4864-24.8064z"
                        fill="#638C3F"
                        p-id="6826"
                      ></path>
                      <path
                        d="M271.3856 450.048c-39.8592 0-72.1792 33.3696-72.1792 74.5088 0 41.1648 32.32 74.5088 72.1792 74.5088s72.1792-33.344 72.1792-74.5088c0-41.1392-32.32-74.5088-72.1792-74.5088z m481.2288 0c-39.8592 0-72.1792 33.3696-72.1792 74.5088 0 41.1648 32.32 74.5088 72.1792 74.5088s72.1792-33.344 72.1792-74.5088c0.0128-41.1392-32.32-74.5088-72.1792-74.5088z"
                        fill="#FFFFFF"
                        p-id="6827"
                      ></path>
                      <path
                        d="M295.4496 499.7248c-13.2864 0-24.064 11.136-24.064 24.832 0 13.7216 10.7776 24.8448 24.064 24.8448s24.064-11.1104 24.064-24.8448c0-13.696-10.7776-24.832-24.064-24.832z m481.2288 0c-13.2864 0-24.064 11.136-24.064 24.832 0 13.7216 10.7776 24.8448 24.064 24.8448s24.064-11.1104 24.064-24.8448c0-13.696-10.7776-24.832-24.064-24.832z"
                        fill="#4D4D4D"
                        p-id="6828"
                      ></path>
                      <path
                        d="M512 450.048c-93.0304 0-168.4352 66.7392-168.4352 149.0176 0 82.3168 75.4048 149.0432 168.4352 149.0432 93.0176 0 168.4352-66.7264 168.4352-149.0432 0-82.2784-75.4176-149.0176-168.4352-149.0176z"
                        fill="#ABF26D"
                        p-id="6829"
                      ></path>
                      <path
                        d="M439.8208 549.4016c-13.2864 0-24.064 22.2464-24.064 49.6768 0 27.4432 10.7776 49.7024 24.064 49.7024s24.064-22.2464 24.064-49.7024c-0.0128-27.4176-10.7776-49.6768-24.064-49.6768z m144.3584 0c-13.2864 0-24.064 22.2464-24.064 49.6768 0 27.4432 10.7776 49.7024 24.064 49.7024s24.064-22.2464 24.064-49.7024c0-27.4176-10.7776-49.6768-24.064-49.6768z"
                        fill="#3F5928"
                        p-id="6830"
                      ></path>
                      <path
                        d="M319.5136 350.7072h-96.2432c-13.2864 0-24.064 11.1104-24.064 24.8448 0 13.7216 10.7776 24.832 24.064 24.832h96.2432c13.2864 0 24.064-11.1104 24.064-24.832-0.0128-13.7344-10.7776-24.8448-24.064-24.8448z m481.2288 0h-96.2432c-13.2864 0-24.064 11.1104-24.064 24.8448 0 13.7216 10.7776 24.832 24.064 24.832h96.2432c13.2864 0 24.064-11.1104 24.064-24.832 0-13.7344-10.7776-24.8448-24.064-24.8448z"
                        fill="#638C3F"
                        p-id="6831"
                      ></path>
                    </svg>
                    <svg
                      t="1603799846802"
                      class="w-10 h-10 block md:hidden icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="6823"
                      data-spm-anchor-id="a313x.7781069.0.i1"
                    >
                      <title>JackDan's Den</title>
                      <path
                        d="M232.9984 187.6736c-32.3328 21.8496-43.4176 70.2848-24.7424 108.1344 18.6624 37.8496 82.5472 96.5248 114.8928 74.6496 32.3328-21.8496 20.8768-115.9552 2.2144-153.8176-18.688-37.8368-60.032-50.816-92.3648-28.9664z m378.9824-60.7104c-39.8464 2.1632-73.9456 37.2608-76.1856 78.4128-2.2272 41.1392 25.536 122.3808 65.3696 120.2176 39.8336-2.1888 76.6464-86.9376 78.8992-128.0896 2.2272-41.1264-28.2496-72.704-68.0832-70.5408z"
                        fill="#0e2e93"
                        p-id="6824"
                        data-spm-anchor-id="a313x.7781069.0.i11"
                        class="selected"
                      ></path>
                      <path
                        d="M512 251.3536c-212.6208 0-384.9856 144.5632-384.9856 322.88 0 178.3424 172.3648 322.9056 384.9856 322.9056 212.6208 0 384.9856-144.5632 384.9856-322.9056 0-178.3168-172.3648-322.88-384.9856-322.88z"
                        fill="#0e2e93"
                        p-id="6825"
                        data-spm-anchor-id="a313x.7781069.0.i2"
                        class="selected"
                      ></path>
                      <path
                        d="M512 698.4448c-106.3168 0-192.4864-16.3328-192.4864 24.8064 0 41.1648 86.1824 74.5344 192.4864 74.5344s192.4864-33.3696 192.4864-74.5344c0-41.1392-86.1824-24.8064-192.4864-24.8064z"
                        fill="#638C3F"
                        p-id="6826"
                      ></path>
                      <path
                        d="M271.3856 450.048c-39.8592 0-72.1792 33.3696-72.1792 74.5088 0 41.1648 32.32 74.5088 72.1792 74.5088s72.1792-33.344 72.1792-74.5088c0-41.1392-32.32-74.5088-72.1792-74.5088z m481.2288 0c-39.8592 0-72.1792 33.3696-72.1792 74.5088 0 41.1648 32.32 74.5088 72.1792 74.5088s72.1792-33.344 72.1792-74.5088c0.0128-41.1392-32.32-74.5088-72.1792-74.5088z"
                        fill="#FFFFFF"
                        p-id="6827"
                      ></path>
                      <path
                        d="M295.4496 499.7248c-13.2864 0-24.064 11.136-24.064 24.832 0 13.7216 10.7776 24.8448 24.064 24.8448s24.064-11.1104 24.064-24.8448c0-13.696-10.7776-24.832-24.064-24.832z m481.2288 0c-13.2864 0-24.064 11.136-24.064 24.832 0 13.7216 10.7776 24.8448 24.064 24.8448s24.064-11.1104 24.064-24.8448c0-13.696-10.7776-24.832-24.064-24.832z"
                        fill="#4D4D4D"
                        p-id="6828"
                      ></path>
                      <path
                        d="M512 450.048c-93.0304 0-168.4352 66.7392-168.4352 149.0176 0 82.3168 75.4048 149.0432 168.4352 149.0432 93.0176 0 168.4352-66.7264 168.4352-149.0432 0-82.2784-75.4176-149.0176-168.4352-149.0176z"
                        fill="#ABF26D"
                        p-id="6829"
                      ></path>
                      <path
                        d="M439.8208 549.4016c-13.2864 0-24.064 22.2464-24.064 49.6768 0 27.4432 10.7776 49.7024 24.064 49.7024s24.064-22.2464 24.064-49.7024c-0.0128-27.4176-10.7776-49.6768-24.064-49.6768z m144.3584 0c-13.2864 0-24.064 22.2464-24.064 49.6768 0 27.4432 10.7776 49.7024 24.064 49.7024s24.064-22.2464 24.064-49.7024c0-27.4176-10.7776-49.6768-24.064-49.6768z"
                        fill="#3F5928"
                        p-id="6830"
                      ></path>
                      <path
                        d="M319.5136 350.7072h-96.2432c-13.2864 0-24.064 11.1104-24.064 24.8448 0 13.7216 10.7776 24.832 24.064 24.832h96.2432c13.2864 0 24.064-11.1104 24.064-24.832-0.0128-13.7344-10.7776-24.8448-24.064-24.8448z m481.2288 0h-96.2432c-13.2864 0-24.064 11.1104-24.064 24.8448 0 13.7216 10.7776 24.832 24.064 24.832h96.2432c13.2864 0 24.064-11.1104 24.064-24.832 0-13.7344-10.7776-24.8448-24.064-24.8448z"
                        fill="#638C3F"
                        p-id="6831"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="flex flex-grow lg:w-3/4 xl:w-4/5">
                <div class="w-full lg:px-6 lg:w-3/4 xl:px-12">
                  <div class="relative">
                    <span
                      class="algolia-autocomplete"
                      style="
                        position: relative;
                        display: inline-block;
                        direction: ltr;
                      "
                    >
                      <input
                        id="docsearch"
                        class="transition-colors duration-100 ease-in-out bg-white shadow-md focus:outline-0 border border-transparent placeholder-gray-600 rounded-lg py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input text-base"
                        type="text"
                        placeholder='Search the docs (Press "/" to focus)'
                        autocomplete="off"
                        spellcheck="false"
                        role="combobox"
                        aria-autocomplete="list"
                        aria-expanded="false"
                        aria-label="search input"
                        aria-owns="algolia-autocomplete-listbox-0"
                        dir="auto"
                        style="position: relative; vertical-align: top"
                      />
                      <pre
                        aria-hidden="true"
                        style="
                          position: absolute;
                          visibility: hidden;
                          white-space: pre;
                          font-family: 'Inter var', system-ui, -apple-system,
                            BlinkMacSystemFont, 'Segoe UI', Roboto,
                            'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
                            'Apple Color Emoji', 'Segoe UI Emoji',
                            'Segoe UI Symbol', 'Noto Color Emoji';
                          font-size: 14px;
                          font-style: normal;
                          font-variant: normal;
                          font-weight: 400;
                          word-spacing: 0px;
                          letter-spacing: normal;
                          text-indent: 0px;
                          text-rendering: auto;
                          text-transform: none;
                        "
                      ></pre>
                      <span
                        class="ds-dropdown-menu"
                        role="listbox"
                        id="algolia-autocomplete-listbox-0"
                        style="
                          position: absolute;
                          top: 100%;
                          z-index: 100;
                          left: 0px;
                          right: auto;
                          display: none;
                        "
                        ><div class="ds-dataset-1"></div
                      ></span>
                    </span>
                    <div
                      class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center"
                    >
                      <svg
                        class="fill-current pointer-events-none text-gray-600 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  id="sidebar-open"
                  class="text-gray-500 focus:outline-none focus:text-gray-700 flex px-6 items-center lg:hidden"
                >
                  <svg
                    class="fill-current w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full max-w-screen-xl relative mx-auto px-6 pt-16 pb-40 md:pb-24 hidden"
      ></div>
    </div>

    <div
      class="relative bg-white ml-0 lg:ml-70 xl:ml-80 xxl:ml-80 xxxl:ml-90 px-0 pb-0 h-(screen-24) overflow-y-scroll"
    >
      <div
        class="pl-2 pr-2 flex flex-wrap ml-0 mr-0 lg:pl-12 xl:pl-12 xxxl:pl-48"
      >
        <div
          class="relative w-full pl-0 pr-0 md:pr-2 lg:pr-4 xl:pr-4 mt-0 md:mt-2 lg:mt-0 lg:max-w-screen-md xl:max-w-screen-md xxxl:max-w-screen-xmd"
        >
          <div class="pl-0 lg:pl-2 xl:pl-2 pr-0 lg:pr-4 xl:pr-8 pb-10 md:pb-12 lg:pb-16 xl:pb-20">
            <div class="pt-0 lg:pt-2 xl:pt-4 pr-0 lg:pr-1 xl:pr-2">
              <div
                class="pt-6 pb-4 border-b border-gray-200"
                v-for="(article, index) in articlesList"
                :key="index"
              >
                <div class="flex lg:pr-2 xl:pr-2 justify-between">
                  <h1 class="m-0 text-2xl font-normal font-sans">
                    <span class="text-gray-800 hover:border-b-2 cursor-pointer" @click="articleDetail(article.id)">
                      {{ article.title }}
                    </span>
                  </h1>
                </div>
                <div class="mt-2 mb-2 text-gray-600 leading-loose">
                  <p class="m-0 truncate text-base">{{ article.desc }}</p>
                </div>

                <div class="flex items-center" style="color: #6c757d">
                  <i
                    class="icon iconfont icon-huaban23 text-base font-normal pr-1"
                  ></i>
                  <span class="text-xs tracking-wide">{{ article.created_time }}</span>
                </div>
              </div>
            </div>
          </div>
          <footer
            class="flex w-full justify-center absolute bottom-0 py-0 px-2 lg:px-4 xl:px-4 pl-0 h-10 md:h-12 lg:h-16 xl:h-20 bg-white text-sm"
            style="color: #7a7b7d"
          >
            <div class="flex justify-between items-center">
              <div class="w-full">
                <p class="m-0">
                  © {{ currentYear }}
                  <a
                    class="text-sm lg:text-base xl:text-base italic text-teal-700"
                    href="https://github.com/JackDan9/"
                    >{{ githubName }}</a
                  >
                  .
                  <span>保留部分权益</span>
                </p>
              </div>
            </div>
          </footer>
        </div>
        <!-- right panel -->
        <div
          class="mt-0 md:mt-4 lg:mt-8 xl:mt-10 ml-0 sm:ml-0 md:ml-4 lg:ml-6 xl:ml-8 hidden sm:hidden md:hidden lg:hidden xl:block xxxl:block"
          style="max-width: 300px"
        >
          <div
            class="sticky top-8 mr-6 mt-12 mb-16"
            style="transition: top 0.2s ease-in-out"
          >
            <div class="mb-16 pl-4 border-l border-gray-500">
              <h3
                class="pt-2 pb-2 mt-0 mb-0 text-base text-gray-600 font-semibold tracking-tight"
              >
                最近更新
              </h3>
              <ul class="text-sm pb-1 pl-0 mt-2 ml-1 mb-4">
                <li
                  class="h-8 truncate overflow-hidden"
                  style="list-style: none"
                >
                  <a style="color: #7d6c6c"
                    >Swift 中使用 Option Pattern 改善可选项的 API 设计</a
                  >
                </li>
                <li
                  class="h-8 truncate overflow-hidden"
                  style="list-style: none"
                >
                  <a style="color: #7d6c6c"
                    >Swift 中使用 Option Pattern 改善可选项的 API 设计</a
                  >
                </li>
                <li
                  class="h-8 truncate overflow-hidden"
                  style="list-style: none"
                >
                  <a style="color: #7d6c6c"
                    >Swift 中使用 Option Pattern 改善可选项的 API 设计</a
                  >
                </li>
                <li
                  class="h-8 truncate overflow-hidden"
                  style="list-style: none"
                >
                  <a style="color: #7d6c6c"
                    >Swift 中使用 Option Pattern 改善可选项的 API 设计</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from 'vue-router';
import axios from 'axios';
import { ArticlesData } from './types/index';

@Component({})
export default class Index extends Vue {
  private avatarUrl: String = "../../assets/avtar.png";
  private currentYear: String = "2020";
  private githubName: String = "JackDan";

  private personInfo: Object = {
    name: "JackDan's Den",
    content: "一分耕耘，一分收获",
  };

  private articlesList: Array<object> = [];

  mounted(): void {
    this.handleSearch();
  }

  @Watch("$route")
  routeChange(val: Route, oldVal: Route): void {
    this.articlesList = [];
    this.handleSearch();
  }

  private async handleSearch(): Promise<void> {
    const data: ArticlesData = await axios.get('/static/articles.json').then(response => {
      const res = response.data;
      return { list: res.data };
    }, error => {
      throw new Error(error)
    });

    this.articlesList = [...this.articlesList, ...data.list];
  }

  private articleDetail(id: number): void {
    this.$router.push({name: 'blog-detail', query: { article_id: id.toString() }});
  }

  private iconList: object[] = [
    {
      name: "icon-github",
      value: "github",
    },
    {
      name: "icon-emailFilled",
      value: "email",
    },
    {
      name: "icon-gongzhonghao",
      value: "微信",
    },
    {
      name: "icon-weibo",
      value: "微博",
    },
    {
      name: "icon-qq",
      value: "qq",
    },
  ];

  private sibarList: object[] = [
    {
      icon: "icon-zhuye",
      name: "主页",
    },
    {
      icon: "icon-fenlei",
      name: "分类",
    },
    {
      icon: "icon-biaoqian",
      name: "标签",
    },
    {
      icon: "icon-guidang",
      name: "归档",
    },
    {
      icon: "icon-guanyuwomen",
      name: "关于",
    },
  ];
}
</script>

<style lang="scss" scoped>
.algolia-autocomplete {
  width: 100% !important;
}
.my-info {
  margin-left: 0.25rem !important;
  &:first-child {
    margin-left: 0 !important;
  }
}
</style>