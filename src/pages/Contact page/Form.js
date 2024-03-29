import React from "react";


const Form = () => {
    return(
        <div className="my-10 lg:m-10 p-10 w-full lg:w-3/5 bg-gray-100 rounded-3xl">
            <form action="" method="POST" className="max-w-xl mx-auto">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                <div className="w-full">
                    <span className="px-5 py-1.5 bg-blue-800 text-white rounded-full text-sm font-semibold tracking-tighter">Your Name*</span>
                    <input className="text-white py-3 px-5 rounded-2xl bg-blue-800 w-full mt-4 border-none outline-none appearance-none focus:ring-4 focus:ring-gray-400" type="text" name="Name" required/>
                </div>
                <div className="w-full">
                    <span className="px-5 py-1.5 bg-blue-800 text-white rounded-full text-sm font-semibold tracking-tighter">Your Email*</span>
                    <input className="text-white py-3 px-5 rounded-2xl bg-blue-800 w-full mt-4 outline-none appearance-none focus:ring-4 focus:ring-gray-400" type="email" name="Email" required/>
                </div>
            </div>
            <div className="w-full mt-8">
                <span className="px-5 py-1.5 bg-blue-800 text-white rounded-full text-sm font-semibold tracking-tighter">Your Message*</span>
                <textarea className="text-white py-3 px-5 rounded-2xl bg-gray-200 w-full mt-4 h-48 outline-none appearance-none focus:ring-4 focus:ring-gray-400" name="Message"></textarea>
            </div>
            <button type="submit" className="text-white p-4 font-bold tracking-tighter rounded-2xl bg-blue-800 w-full mt-8 outline-none appearance-none border-none focus:ring-4 focus:ring-gray-400">Send</button>
        </form>
        </div>
    )
}

export default Form;