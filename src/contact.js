function contactContent(){
    const contentElements = `<section class="container my-10 space-y-10">
        <div class="flex items-center space-x-2 text-xl">
            <span><i class="ri-customer-service-2-fill"></i></span>
            <span class="font-bold">Contact us</span>
        </div>

        <section class="grid grid-cols-2 gap-10 place-items-center">
            <div class="space-y-5">
                <h1 class="text-2xl font-bold text-customBlue-dark">
                    Book a table!
                </h1>
                <div class="w-3/4">
                    <form action="" class="space-y-6">
                        <div class="space-y-6 w-full">
                            <div class="flex space-x-4">
                                <div class="flex flex-col w-1/3">
                                    <label for="date" class="flex justify-between">
                                        <span>Date</span>
                                        <i class="ri-arrow-down-s-line"></i>
                                    </label>
                                    <input type="text" id="date" class="border border-bgDark rounded py-2 px-4">
                                </div>
                                <div class="flex flex-col w-1/3">
                                    <label for="time" class="flex justify-between">
                                        <span>Time</span>
                                        <i class="ri-arrow-down-s-line"></i>
                                    </label>
                                    <input type="text" id="time" class="border border-bgDark rounded py-2 px-4">
                                </div>
                                <div class="flex flex-col w-1/3">
                                    <label for="guest" class="flex justify-between">
                                        <span>Guest</span>
                                        <i class="ri-arrow-down-s-line"></i>
                                    </label>
                                    <input type="number" id="guest"
                                           class="border border-bgDark w-full rounded py-2 px-4">
                                </div>
                            </div>
                            <div class="mt-4">
                                <label>
                                    <input type="email" placeholder="Enter your email"
                                           class="border border-bgDark rounded py-2 px-4 w-full">
                                </label>
                            </div>
                        </div>
                        <button type="button" class="px-4 py-2 bg-customGreen-medium text-bgLight rounded-lg">Book now!
                        </button>
                    </form>
                </div>
            </div>
            <div class="space-y-5">
                <h1 class="text-2xl font-bold text-customBlue-dark">
                    Our Location
                </h1>
                <div class="">
                    <div class="space-y-2">
                        <div class="flex items-center space-x-2 text-lg">
                            <i class="ri-map-pin-fill text-2xl"></i>
                            <h4 class="">Bhaluka, Gafargaun Road, Mymensingh</h4>
                        </div>
                        <div class="flex items-center space-x-2 text-lg">
                            <i class="ri-mail-fill text-2xl"></i>
                            <h4 class="font-bold">Email: imemon.sh@gmail.com</h4>
                        </div>
                        <div class="space-y-2">
                            <h2 class="text-xl font-bold text-customBlue-dark underline underline-offset-4">Opening
                                Hours</h2>
                            <div class="ms-8 space-y-2">
                                <h4 class="">Saturday - thursday: 11:00 - 23:00</h4>
                                <h4 class="">Holidays: 12:00 - 24:00</h4>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4 text-4xl text-customBlue">
                            <i class="hover:scale-125 transition-transform duration-300 ri-instagram-fill text-2xl"></i>
                            <i class="hover:scale-125 transition-transform duration-300 ri-facebook-circle-fill text-2xl"></i>
                            <i class="hover:scale-125 transition-transform duration-300 ri-twitter-fill text-2xl"></i>
                            <i class="hover:scale-125 transition-transform duration-300 ri-youtube-fill text-2xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>`

    const contactSection = document.createElement('section')
    contactSection.classList.add('h-screen')
    contactSection.innerHTML = contentElements
    return contactSection
}

export default contactContent;