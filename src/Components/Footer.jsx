function Footer() {
    return (
        <>
            {/* footer */}
            <div className=" 2xl:w-1/2 2xl:mx-auto mt-24 mb-4 p-4">
                <div className='grid grid-cols-12 gap-8'>
                    <div className='flex flex-col space-y-4 col-span-3'>
                    <img className="rounded-md w-12" src="/logo.svg"/>
                    <h1 className='font-bold'>SUMMER</h1>
                    </div>
                    <ul className='flex flex-col space-y-4 col-span-3'>
                    <li className='font-bold'><a href='#'>Home</a></li>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Home</a></li>
                    </ul>
                    <ul className='flex flex-col space-y-4 col-span-3'>
                    <li className='font-bold'><a href='#'>Home</a></li>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Home</a></li>
                    </ul>
                    <ul className='flex flex-col space-y-4 col-span-3'>
                    <li className='font-bold'><a href='#'>Home</a></li>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Home</a></li>
                    </ul>
                </div>
            </div>
        {/* footer */}
        </>
    )
}

export default Footer;