import Footer from "../Sheard/Footer";
import Header from "../Sheard/Navbar";


const Eorre = () => {
    return (
        <div>
            <Header></Header>
             <div className='h-[500px] w-full flex justify-center items-center bg-gray-500'>
                <h2 className='text-2xl font-bold text-orange-500 '>Error / 404</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Eorre;