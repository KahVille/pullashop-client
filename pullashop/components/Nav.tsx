import Link from 'next/link'
import { useState } from 'react';
import FavouriteList from './FavouriteList';

const Nav = () => {
    const [displayFavourites, toggleFavourites] = useState<boolean>(false)
    
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/products">Products</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <button onClick={() => toggleFavourites(!displayFavourites)}>Favourites</button>
                </li>

                {  displayFavourites ? <FavouriteList /> : ''}

            </ul>
        </nav>
    )
}

export default Nav;