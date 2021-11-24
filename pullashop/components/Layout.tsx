import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';
import Nav from './Nav';

const Layout = ({children}: any): JSX.Element => {
    return (
    <>
    <Meta />
    <Nav />
    <div>
        <main>
            <Header />
                {children}
            <Footer />
        </main>
    </div>
    </>
    )
}
export default Layout;