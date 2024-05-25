function homeContent() {
    const homeElements = `
        <section class="grid grid-cols-2 gap-10">
            <div class="space-y-6 my-20">
                <div class="flex-grow space-y-4">
                    <p class="text-customOrange-dark">Get 25% off your first order</p>
                    <h1 class="text-3xl">Welcome to our <br> <span class="font-bold text-4xl">feedme Restaurant!</span>
                    </h1>
                    <p class="text-md text-wrap">Craving a culinary adventure? feedme isn't your typical restaurant;
                        it's a global
                        fusion fiesta for your taste buds. We
                        transform fresh, seasonal ingredients into exciting dishes that will surprise and delight. From
                        adventurous foodies to
                        curious newcomers, feedme offers a warm and inviting atmosphere where you can explore bold
                        flavors from around the
                        world.</p>
                </div>
                <button title="menu" type="button" id="explore-menu-button"
                        class="px-6 py-3  bg-customOrange-dark hover:bg-customOrange hover:scale-105 transition-transform duration-300 ease-in-out text-bgLight rounded-lg font-bold">
                    Explore
                    Food Menu
                </button>

            </div>
            <div class="bg-[url('./food.jpg')] bg-cover">
            </div>
        </section>
        <section class="flex items-center gap-10 my-10">
            <div
                    class="space-y-2 hover:ring-2 ring-offset-8 hover:scale-105 transition-transform duration-300 ease-in-out w-1/3 h-48 border border-gray-300 py-4 px-6 rounded-xl bg-customBlue-dark text-bgLight drop-shadow-lg">
                <div class="text-5xl text-bgLight">
                    <i class="ri-speed-up-line"></i>
                </div>
                <h1 class="text-xl">
                    Fastest Delivery
                </h1>
                <p class="text-md">
                    Craving a hot meal in a hurry? Fast food delivery satisfies your taste buds in a flash.
                </p>
            </div>
            <div
                    class="space-y-2 hover:ring-2 ring-offset-8 hover:scale-105 transition-transform duration-300 ease-in-out w-1/3 h-48 border border-gray-300 py-4 px-6 rounded-xl bg-customGreen-dark text-bgLight drop-shadow-lg">
                <div class="text-5xl text-bgLight">
                    <i class="ri-bowl-line"></i>
                </div>
                <h1 class="text-xl">
                    Best Taste
                </h1>
                <p class="text-md">
                    The best restaurant tastes are subjective adventures, discover on every plate.
                </p>
            </div>
            <div
                    class="space-y-2 hover:ring-2 ring-offset-8 hover:scale-105 transition-transform duration-300 ease-in-out w-1/3 h-48 border border-gray-300 py-4 px-6 rounded-xl bg-customPurple-dark text-bgLight drop-shadow-lg">
                <div class="text-5xl text-bgLight">
                    <i class="ri-gift-2-line"></i>
                </div>
                <h1 class="text-xl">
                    Best Offers
                </h1>
                <p class="text-md">
                    Unleash your inner foodie and devour delicious deals our restaurants near you!
                </p>
            </div>
        </section>
    `

    const homeSection = document.createElement('section')
    homeSection.innerHTML = homeElements

    return homeSection
}

export default homeContent;