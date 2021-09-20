import { useHistory } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Home () {
    const { push } = useHistory();

    return (
        <div className="homeContainer" style={{ backgroundColor: 'rgb(90, 90, 255)' }}>
            {/* page main content */}
            <div className="body">
                <motion.h3
                    animate={{ y: 0 }}
                    initial={{ y: '-100vh' }}
                    transition={{ type: 'spring', stiffness: 120 }}
                >kumba <span>foods</span></motion.h3>

                <motion.button
                    animate={{ x: 0 }}
                    initial={{ x: '-100vw' }}
                    transition={{ type: 'spring', stiffness: 120 , delay: 2 }}
                    onClick={ () => push('/profile') } 
                >My Profile</motion.button>

                <motion.button
                    animate={{ x: 0 }}
                    initial={{ x: '100vw' }}
                    transition={{ type: 'spring', stiffness: 120 , delay: 3 }}
                    onClick={ () => push('/order') } 
                >My Order</motion.button>
            </div>

            {/* refrence to tomiwa */}
            <div className='tomiwa' style={{ color: 'white', marginTop: '10px', height: '30px', fontWeight: 'bold'}}>
                <div>
                Made with love <FaHeart color='red' fontSize='20px'/> by Tomiwa
                </div>
            </div>
        </div>
    )
}

export default Home;