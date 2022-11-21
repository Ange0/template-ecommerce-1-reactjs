
import { Navigation, Pagination , Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import InnerImageZoom from 'react-inner-image-zoom'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

function App() {
  return (
    <div className='px-40 2xl:px-0 bg-white h-screen'>
      <div className='bg-white w-full 2xl:w-1/2 2xl:mx-auto '>
        <div className='flex flex-col p-4'>
          {/* header */}
          <div className='flex justify-between py-8 border-b text-sm'>
            <nav className='flex space-x-6 items-center'>
                <img className="rounded-md w-20" src="/logo.svg"/>

                <a className="text-[#fd8f62] font-bold" href='#'>Home</a>
                <a href='#'>Shop</a>
                <a href='#'>Pages</a>
                <a href='#'>Blog</a>
            </nav>
            <div className='flex space-x-4 text-sm'>
                <div className="flex space-x-2 items-center">
                  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <span>My account</span>
                </div>
                <div className="flex space-x-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                  </svg>    
                  <span>EN</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                <div className="flex space-x-2 items-center">
                  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <span>English</span>
                </div>
            </div>
          </div>
          {/* header */}

          {/* first section content*/}
          <div className="flex flex-col py-8 space-y-4">
            {/* section search */}
              <div className="flex space-x-10 items-center">
                <div className="flex space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#fd8f62]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                  </svg>
                  <span>Shop by Category</span>
                </div>
                <div className="flex justify-between space-x-2 flex-grow border rounded-xl px-4 py-2">
                  <input className="w-full focus:outline-none text-stone-600"/>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <div className="flex space-x-4">
                   <div className="relative">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      <span className="w-3 absolute text-[0.50rem] text-center h-3 rounded-full bg-[#fd8f62] -top-1 -right-1">
                        1
                      </span>
                   </div>
                   <div className="relative">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>  
                      <span className="w-3 absolute text-[0.50rem] text-center h-3 rounded-full bg-[#fd8f62] -top-1 -right-1">
                        2
                      </span>
                   </div>
                </div>
              </div>
            {/* section search */}

            {/* section loop images */}
              <div className="py-4">
                <Swiper 
                modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={2}
                  slidesPerView={1}
                  autoplay
                  onSlideChange={() => console.log('ok')}
                >
                  <SwiperSlide>
                    <img className="rounded-md" src="/overlay-1.svg"/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="rounded-md" src="/overlay-2.svg"/>
                  </SwiperSlide>
                </Swiper>
              </div>
            {/* section loop images */}

            {/* section categories */}
            <div>
                <h1 className="text-lg">Categories</h1>
                <div className="grid grid-cols-10 gap-4 pt-4">
                  <div className="flex flex-col space-y-2 rounded-md justify-between col-span-2 bg-[#f5f2ec] p-2 items-center hover:rotate-2 cursor-pointer transition">
                     <img className="rounded-md w-14 h-14" src="/categories/hat.svg"/>
                      <span className="text-sm">Hats</span>
                  </div>
                  <div className="flex flex-col space-y-2 rounded-md justify-between col-span-2 bg-[#f5f2ec] p-2 items-center hover:rotate-6 cursor-pointer transition">
                     <img className="rounded-md w-14 h-14" src="/categories/tshirt-w.svg"/>
                      <span className="text-sm">T-shirt</span>
                  </div>
                  <div className="flex flex-col space-y-2 rounded-md justify-between col-span-2 bg-[#f5f2ec] p-2 items-center hover:rotate-6 cursor-pointer transition">
                     <img className="rounded-md w-14 h-14" src="/categories/roller.svg"/>
                      <span className="text-sm">Roller</span>
                  </div>
                  <div className="flex flex-col space-y-2 rounded-md justify-between col-span-2 bg-[#f5f2ec] p-2 items-center hover:rotate-6 cursor-pointer transition">
                     <img className="rounded-md w-14 h-14" src="/categories/foot.svg"/>
                      <span className="text-sm">Foot</span>
                  </div>
                  <div className="flex flex-col space-y-2 rounded-md justify-between col-span-2 bg-[#f5f2ec] p-2 items-center hover:rotate-6 cursor-pointer transition">
                     <img className="rounded-md w-14 h-14" src="/categories/wallet.svg"/>
                      <span className="text-sm">Wallet</span>
                  </div>
                  
                  <div className="col-span-10 mt-24">
                    <div className="grid grid-cols-12 gap-6 w-full">
                      <div className="col-span-6">
                        <div className="flex flex-col space-y-14">
                          <div className="flex flex-col space-y-8">
                              <div className="flex flex-col space-y-4">
                                <h1 className="text-2xl font-bold">Deal of day</h1>
                                <div>Lorem je sais pas quoi dit pour le moment</div>
                              </div>
                              <div className="flex justify-between font-bold  text-3xl">
                                  <div className="flex flex-col space-y-6">
                                    <span>07</span>
                                    <span className="font-thin text-xs">DAYS</span>
                                  </div>
                                  <span>:</span>
                                  <div className="flex flex-col space-y-6">
                                    <span>12</span>
                                    <span className="font-thin text-xs">HOURS</span>
                                  </div>
                                  <span>:</span>
                                  <div className="flex flex-col space-y-6">
                                    <span>05</span>
                                    <span className="font-thin text-xs">MINUTES</span>
                                  </div>
                                  <span>:</span>
                                  <div className="flex flex-col space-y-6">
                                    <span>55</span>
                                    <span className="font-thin text-xs">SECONDS</span>
                                  </div>
                              </div>
                          </div>
                          <div>
                            <button className="bg-[#f08355] text-xs px-8 py-2">SHOP NOW</button>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-6">
                          <div className="grid grid-cols-12 gap-4">
                              <div className="col-span-6">
                                <div className="bg-[#f5f2ec] p-2 flex justify-center items-center">
                                     <InnerImageZoom className="w-40 rounded-lg transition delay-200 cursor-pointer" src="/clock-1.svg" />
                                  <img  />
                                </div>
                              </div>
                              <div className="col-span-6">
                                <div className="bg-[#f5f2ec] p-2 flex justify-center items-center">
                                  <img className="w-40 rounded-lg hover:scale-[1.2] transition delay-200 cursor-pointer" src="/camera.svg" />
                                </div>
                              </div>
                              <div className="col-span-6">
                                <div className="bg-[#f5f2ec] p-2 flex justify-center items-center">
                                  <img className="w-40 rounded-lg hover:scale-[1.2] transition delay-200 cursor-pointer" src="/shoes.svg" />
                                </div>
                              </div>
                              <div className="col-span-6">
                                <div className="bg-[#f5f2ec] p-2 flex justify-center items-center">
                                  <img className="w-40 rounded-lg hover:scale-[1.2] transition delay-200 cursor-pointer" src="/bag.svg" />
                                </div>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
              
            {/* section categories */}

          </div>
          {/* first section content*/}
        </div>
      </div>
      <div className="bg-[#fbeee5] p-10">
        <div className="2xl:w-1/2 2xl:mx-auto flex flex-col space-y-20">
            <div className="">
                <h1 className="text-xl font-bold">Why Choose <span className="text-[#f08355]">Sammer</span> ?</h1>
                <p className="mt-4">Je sais pas quoi trop dit pour l'instant</p>
            </div>
            <div className="grid grid-cols-9 gap-10">
                <div className="flex flex-col space-y-8 col-span-3">
                    <img src="/illustrations/i-1.svg" />
                   <div>
                      <h1 className="mt-4 font-bold text-lg">Free delivery</h1>
                      <p className="mt-2">JE suis cool</p>
                   </div>
                </div>
                <div className="flex flex-col space-y-8 col-span-3">
                    <img src="/illustrations/i-2.svg" />
                   <div>
                      <h1 className="mt-4 font-bold text-lg">Packages in 2 days</h1>
                      <p className="mt-2">JE suis cool</p>
                   </div>
                </div>
                <div className="flex flex-col space-y-8 col-span-3">
                    <img src="/illustrations/i-3.svg" />
                   <div>
                      <h1 className="mt-4 font-bold text-lg">7j/7 for you</h1>
                      <p className="mt-2">JE suis cool</p>
                   </div>
                </div>
            </div>
        </div>
      </div>
      <div className="flex flex-col 2xl:w-1/2 2xl:mx-auto ">
        <h1 className='text-2xl font-bold my-14'>Trendings items</h1>
        <div className='grid grid-cols-12 gap-4'>
          <div className='flex flex-col col-span-4 space-y-2 rounded-md'>
            <div className='flex flex-col bg-[#f5f2ec] relative'>
              <div className='flex justify-end p-2 cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg> 
              </div> 
              <div className='flex justify-center p-2 pb-12'>
                <img className="cursor-pointer w-28" src="/trending-1.svg" />
              </div>
              <div className='flex divide-x items-center bg-black w-full rounded-bl-md rounded-br-md absolute -bottom-1'>
                  <div className='p-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                    </svg>    
                  </div> 
                  <span className='font-bold text-white text-xs flex-grow text-center p-2 cursor-pointer'>
                    Add to card
                  </span>
                  <div className='p-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                  </div> 
              </div>
            </div>
            <div className='flex flex-col space-y-2'>
              <h1>Lorem ipsum et exporerdddj cool</h1>
              <div className='flex space-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <span className='font-bold'>$500</span>
            </div>
          </div>
          <div className='flex flex-col col-span-4 space-y-2 rounded-md'>
            <div className='flex flex-col bg-[#f5f2ec] relative'>
              <div className='flex justify-end p-2 cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg> 
              </div> 
              <div className='flex justify-center p-2 pb-12'>
                <img className="cursor-pointer w-28" src="/trending-2.svg" />
              </div>
              <div className='flex divide-x items-center bg-black w-full rounded-bl-md rounded-br-md absolute -bottom-1'>
                  <div className='p-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                    </svg>    
                  </div> 
                  <span className='font-bold text-white text-xs flex-grow text-center p-2 cursor-pointer'>
                    Add to card
                  </span>
                  <div className='p-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                  </div> 
              </div>
            </div>
            <div className='flex flex-col space-y-4'>
              <h1>Lorem ipsum et exporerdddj cool</h1>
              <div className='flex space-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <span>$400</span>
            </div>
          </div>
          <div className='flex flex-col col-span-4 space-y-2 rounded-md'>
            <div className='flex flex-col bg-[#f5f2ec] relative'>
              <div className='flex justify-end p-2 cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg> 
              </div> 
              <div className='flex justify-center p-2 pb-12'>
                <img className="cursor-pointer w-28" src="/trending-3.svg" />
              </div>
              <div className='flex divide-x items-center bg-black w-full rounded-bl-md rounded-br-md absolute -bottom-1'>
                  <div className='p-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                    </svg>    
                  </div> 
                  <span className='font-bold text-white text-xs flex-grow text-center p-2 cursor-pointer'>
                    Add to card
                  </span>
                  <div className='p-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                  </div> 
              </div>
            </div>
            <div className='flex flex-col space-y-4'>
              <h1>Lorem ipsum et exporerdddj cool</h1>
              <div className='flex space-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <span>$200</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-200  2xl:w-1/2 2xl:mx-auto mt-24">Footer</div>
    </div>
  );
}

export default App;