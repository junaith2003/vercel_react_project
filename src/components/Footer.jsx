import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white text-center py-6'>
            <p>🌍 © 2025 MyWebsite. All Rights Reserved.</p>
            <div className='flex justify-center space-x-2 mt-4 '>
                <a className='hover:text-blue-600' href="">Facebook</a>
                <a className='hover:text-blue-600' href="">Twitter</a>
                <a className='hover:text-blue-600' href="">Instagram</a>
            </div>


        </footer>
    )
}

export default Footer