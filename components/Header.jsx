import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { getCategories } from '../services';

// const categories = [
//     { name: 'React', slug: 'react'},
//     { name: 'Web Development', slug: 'web-dev'}

// ]

const Header = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories() 
      .then((newCategories) => setCategories(newCategories))
  }, []);

  return (
    <div className='container mb-8 bg-white'>
        <div className="px-10 w-full inline-block py-6 md:flex flex-col items-center lg:flex flex-col items-center">
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-2xl text-[#be185d]'>
                        conversate.Africa
                    </span>
                    
                </Link>
            </div>
            <div className='hidden  md:flex lg:flex'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>
                            {category.name} 
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header