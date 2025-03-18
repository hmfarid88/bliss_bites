import React from "react";

const Page = () => {
    return (
        <div className="container p-6">

            <div className="flex flex-col w-full justify-center items-center">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg">Have questions? Reach out to us!</p>
            </div>
            <div className="flex flex-col md:flex-row w-full">
                <div className="flex flex-col items-center justify-center w-full md:w-1/2">
                    <div className="flex mt-6">
                        <form className="space-y-4">
                            <div>
                                <label className="block">Name</label>
                                <input
                                    type="text"
                                    className="w-full max-w-xs p-2 border rounded-md"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block">Email</label>
                                <input
                                    type="email"
                                    className="w-full max-w-xs p-2 border rounded-md"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label className="block">Message</label>
                                <textarea
                                    className="w-full max-w-xs p-2 border rounded-md"
                                    placeholder="Your Message"
                                    rows={4}
                                ></textarea>
                            </div>
                            <button className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full md:w-1/2">
                    <div className="flex flex-col mt-6">
                        <h2 className="text-xl font-semibold">Our Contact Details</h2>
                        <p>Email: info.blissbites@gmail.com</p>
                        <p>Phone: +88 01901-347623</p>
                        <p>Address: B.B Road, Chasara, Narayanganj</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
