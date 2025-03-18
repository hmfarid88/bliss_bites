import React from 'react'
import { pastries } from '../data/pastryData'
const Page = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
                {pastries.map((cake) => (
                    <div key={cake.id} className="card bg-base-100 shadow-md">
                        <figure>
                            <img src={cake.image} alt={cake.name} className="h-auto md:h-96 w-full hover:scale-110 duration-500 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{cake.name}</h2>
                            <p className='text-lg'><span className='text-xl'>৳</span> {cake.price}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Order Now &gt; 01901-347623</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Page