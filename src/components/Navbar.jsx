import {
    FaHome,
    FaInfoCircle,
    FaServicestack,
    FaEnvelope,
    FaRocket

} from "react-icons/fa"

const navlink = [
    {
        name: "Home",
        icon: <FaHome />,
        href: "#"
    },
    {
        name: "About",
        icon: <FaInfoCircle />,
        href: "#"
    },
    {
        name: "Services",
        icon: <FaServicestack />,
        href: "#"
    },
    {
        name: "Contact",
        icon: <FaEnvelope />,
        href: "#"
    },
]

function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4 sticky top-0 z-10">
            <div className="container flex items-center justify-between mx-auto ">
                <h1 className="font-bold text-2xl flex items-center gap-2"><FaRocket />My Website</h1>
                <ul className="flex gap-6">
                    

                    {navlink.map((link,index) => (
                        <li key={index}>
                            <a href={link.href} className="flex items-center gap-1 hover:text-blue-400">
                                {link.icon}
                                {link.name}

                            </a>
                        </li>
                    )

                    )}
                </ul>
            </div>
        </nav>
    )
}


export default Navbar;