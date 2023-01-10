import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Layout({children, drawerShopping}) {
    return (
        <>
           <div className='px-40 2xl:px-0 bg-white h-screen'>
            {drawerShopping}
            <Header />
            <div className='bg-white w-full 2xl:w-1/2 2xl:mx-auto my-4'>
                {/* section search */}
                <div className="flex space-x-10 items-center">
                    <div className="flex space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#fd8f62]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                        <span>Shop by Categories</span>
                    </div>
                    <div className="flex justify-between space-x-2 flex-grow border rounded-xl px-4 py-2">
                        <input className="w-full focus:outline-none text-stone-600"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <div className="flex space-x-4">
                        <div className="relative cursor-pointer hover:opacity-80 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <span className="flex items-center justify-center w-4 h-4 absolute text-[0.50rem] rounded-full bg-[#fd8f62] -top-1 -right-1">
                            1
                            </span>
                        </div>
                        <div className="relative cursor-pointer hover:opacity-80 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>  
                            <span className="flex items-center justify-center w-4 h-4 absolute text-[0.50rem] rounded-full bg-[#fd8f62] -top-1 -right-1">
                            2
                            </span>
                        </div>
                    </div>
                </div>
             {/* section search */}
            </div>
            { children }
            <div className="2xl:w-1/2 2xl:mx-auto my-36">
                <div className='grid grid-cols-12 gap-8'>
                    <div className='col-span-6'>
                        <img src='/t-4.png' />
                    </div>
                    <div className='flex flex-col col-span-6 justify-center space-y-8'>
                        <h1 className='text-5xl font-bold'>Always Available</h1>
                        <div className='flex'>
                        <input className="flex-grow border bg-stone-100 focus:outline-none px-4 hover:border-stone-400 text-stone-600 h-14 transition" placeholder="Your email"/>
                        <button className='bg-black text-white px-4'>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
             <Footer />
            </div>
        </>
    )
}
export default Layout;