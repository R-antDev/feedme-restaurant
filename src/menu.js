function menuContent() {
    const menuElements = `
    <div class="flex items-center space-x-2 text-xl">
        <span><i class="ri-menu-unfold-line"></i></span>
        <span class="font-bold">Food menu</span>
    </div>
    <div class="flex items-center justify-center space-x-10">
        <div class="flex items-center space-x-2">
            <span class="text-xl"><i class="ri-search-line"></i></span>
            <input class="w-96 border-2 border-customOrange-dark rounded-full py-2 px-4"
                   placeholder="What you want to eat?" type="text" title="search-food">
        </div>
        <div class="flex items-center space-x-4">
            <div class="cursor-pointer text-lg text-bgDark space-x-2"><i
                    class="ri-filter-2-line"></i><span>Filter</span></div>
            <div class="cursor-pointer text-lg text-bgDark space-x-2"><i class="ri-sort-alphabet-asc"></i><span>Sort
                        by</span></div>
        </div>
        <div>
            <button title="cart"
                    class="bg-customOrange-dark text-bgLight py-1 px-3 rounded hover:bg-customOrange transition-colors duration-300 text-xl">
                <i
                        class="ri-shopping-cart-line"></i>
            </button>
        </div>
    </div>
    <!-- Food items -->
    <div class="gap-10 flex items-center flex-wrap justify-center">
        <!-- Card -->
        <div
                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">
            <div class="w-full">
                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg"
                     alt="" srcset="">
            </div>
            <div class="px-4 pb-2 space-y-2">
                <div class="flex items-center justify-between">
                    <h4 class="font-bold text-lg">Pizza</h4>
                    <div class="flex items-center space-x-2">
                        <h4 class="font-bold"><span>$</span> 200 </h4>
                        <span> BDT </span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <h4 class="text-md">Vegan, Healthy</h4>
                    <div class="flex items-center text-md">
                        <h4 class="font-bold"> 20-30 </h4>
                        <span>min</span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <div class="flex space-x-2">
                        <h4 class="text-md font-bold">4.9</h4>
                        <span class="text-customOrange">
                                <i class="ri-star-smile-line"></i>
                            </span>
                    </div>
                    <button
                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
        <div
                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">
            <div class="w-full">
                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg"
                     alt="" srcset="">
            </div>
            <div class="px-4 pb-2 space-y-2">
                <div class="flex items-center justify-between">
                    <h4 class="font-bold text-lg">Burger</h4>
                    <div class="flex items-center space-x-2">
                        <h4 class="font-bold"><span>$</span> 200 </h4>
                        <span> BDT </span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <h4 class="text-md">Vegan, Healthy</h4>
                    <div class="flex items-center text-md">
                        <h4 class="font-bold"> 20-30 </h4>
                        <span>min</span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <div class="flex space-x-2">
                        <h4 class="text-md font-bold">4.9</h4>
                        <span class="text-customOrange">
                                <i class="ri-star-smile-line"></i>
                            </span>
                    </div>
                    <button
                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
        <div
                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">
            <div class="w-full">
                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg"
                     alt="" srcset="">
            </div>
            <div class="px-4 pb-2 space-y-2">
                <div class="flex items-center justify-between">
                    <h4 class="font-bold text-lg">Sandwich</h4>
                    <div class="flex items-center space-x-2">
                        <h4 class="font-bold"><span>$</span> 200 </h4>
                        <span> BDT </span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <h4 class="text-md">Vegan, Healthy</h4>
                    <div class="flex items-center text-md">
                        <h4 class="font-bold"> 20-30 </h4>
                        <span>min</span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <div class="flex space-x-2">
                        <h4 class="text-md font-bold">4.9</h4>
                        <span class="text-customOrange">
                                <i class="ri-star-smile-line"></i>
                            </span>
                    </div>
                    <button
                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
        <div
                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">
            <div class="w-full">
                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg"
                     alt="" srcset="">
            </div>
            <div class="px-4 pb-2 space-y-2">
                <div class="flex items-center justify-between">
                    <h4 class="font-bold text-lg">Pasta</h4>
                    <div class="flex items-center space-x-2">
                        <h4 class="font-bold"><span>$</span> 200 </h4>
                        <span> BDT </span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <h4 class="text-md">Vegan, Healthy</h4>
                    <div class="flex items-center text-md">
                        <h4 class="font-bold"> 20-30 </h4>
                        <span>min</span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <div class="flex space-x-2">
                        <h4 class="text-md font-bold">4.9</h4>
                        <span class="text-customOrange">
                                <i class="ri-star-smile-line"></i>
                            </span>
                    </div>
                    <button
                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
        <div
                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">
            <div class="w-full">
                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/1549542994.jpg" alt=""
                     srcset="">
            </div>
            <div class="px-4 pb-2 space-y-2">
                <div class="flex items-center justify-between">
                    <h4 class="font-bold text-lg">Salad</h4>
                    <div class="flex items-center space-x-2">
                        <h4 class="font-bold"><span>$</span> 200 </h4>
                        <span> BDT </span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <h4 class="text-md">Vegan, Healthy</h4>
                    <div class="flex items-center text-md">
                        <h4 class="font-bold"> 20-30 </h4>
                        <span>min</span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <div class="flex space-x-2">
                        <h4 class="text-md font-bold">4.9</h4>
                        <span class="text-customOrange">
                                <i class="ri-star-smile-line"></i>
                            </span>
                    </div>
                    <button
                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
        <div
                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">
            <div class="w-full">
                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg"
                     alt="" srcset="">
            </div>
            <div class="px-4 pb-2 space-y-2">
                <div class="flex items-center justify-between">
                    <h4 class="font-bold text-lg">Desert</h4>
                    <div class="flex items-center space-x-2">
                        <h4 class="font-bold"><span>$</span> 200 </h4>
                        <span> BDT </span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <h4 class="text-md">Vegan, Healthy</h4>
                    <div class="flex items-center text-md">
                        <h4 class="font-bold"> 20-30 </h4>
                        <span>min</span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <div class="flex space-x-2">
                        <h4 class="text-md font-bold">4.9</h4>
                        <span class="text-customOrange">
                                <i class="ri-star-smile-line"></i>
                            </span>
                    </div>
                    <button
                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
        <div
                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">
            <div class="w-full">
                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/1543774956.jpg" alt=""
                     srcset="">
            </div>
            <div class="px-4 pb-2 space-y-2">
                <div class="flex items-center justify-between">
                    <h4 class="font-bold text-lg">Pastries</h4>
                    <div class="flex items-center space-x-2">
                        <h4 class="font-bold"><span>$</span> 200 </h4>
                        <span> BDT </span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <h4 class="text-md">Vegan, Healthy</h4>
                    <div class="flex items-center text-md">
                        <h4 class="font-bold"> 20-30 </h4>
                        <span>min</span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <div class="flex space-x-2">
                        <h4 class="text-md font-bold">4.9</h4>
                        <span class="text-customOrange">
                                <i class="ri-star-smile-line"></i>
                            </span>
                    </div>
                    <button
                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
        <div
                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">
            <div class="w-full">
                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
                     alt="" srcset="">
            </div>
            <div class="px-4 pb-2 space-y-2">
                <div class="flex items-center justify-between">
                    <h4 class="font-bold text-lg">Chicken Handi</h4>
                    <div class="flex items-center space-x-2">
                        <h4 class="font-bold"><span>$</span> 200 </h4>
                        <span> BDT </span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <h4 class="text-md">Vegan, Healthy</h4>
                    <div class="flex items-center text-md">
                        <h4 class="font-bold"> 20-30 </h4>
                        <span>min</span>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-700">
                    <div class="flex space-x-2">
                        <h4 class="text-md font-bold">4.9</h4>
                        <span class="text-customOrange">
                                <i class="ri-star-smile-line"></i>
                            </span>
                    </div>
                    <button
                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>`

    const menuSection = document.createElement("section")
    menuSection.classList.add("container", "my-10", "space-y-10")
    menuSection.innerHTML = menuElements

    return menuSection
}

export default menuContent;