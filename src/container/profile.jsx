import { useHistory } from 'react-router-dom';
import { AiTwotoneDislike, AiTwotoneLike } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

import avatar from '../asset/image/IMG-20210614-WA0011.jpg'

function Profile ({ user }) {
    const { push } = useHistory();

    return (
        <div>
            <div className="profileContainer">
                <h3>Profile</h3>
                <img src={ avatar } alt="profile" />
                <div className="userData">
                    {/* user information */}
                    <motion.div 
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ type: 'tween', duration: 0.5 }}
                        className="info">
                        <p><span>Name </span>: { user.name }</p>
                        <div>
                            <h4>Address</h4>
                            <p> { user.address }</p>
                        </div>
                        <div>
                            <h4>About</h4>
                            <p>{ user.about }</p>
                        </div>
                    </motion.div>

                    <div className="likesdislike">
                        <motion.div 
                            animate={{ x: 0 }}
                            initial={{ x: '-100vw' }}
                            transition={{ type: 'spring', stiffness: 120 , delay: 1 }}
                            className="dislike"
                        >
                            <AiTwotoneDislike fontSize="30px" color='red'/>
                            <ul>
                                {
                                    // dynamically generating a food user dislikes
                                    user.dislikes.map((dislike) => {
                                        return <li
                                            key={ dislike }
                                        >{ dislike }</li>
                                    })
                                }
                            </ul>
                        </motion.div>

                        <motion.div 
                            animate={{ x: 0 }}
                            initial={{ x: '100vw' }}
                            transition={{ type: 'spring', stiffness: 120 , delay: 2 }}
                            className="like"
                        >
                            <AiTwotoneLike fontSize="30px" color='green'/>
                            <ul>
                                {
                                    // dynamically generating a food user likes
                                    user.likes.map((like) => {
                                        return <li
                                            key={ like }
                                        >{ like }</li>
                                    })
                                }
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* button for navigation */}
                <motion.div 
                    animate={{ y: 0 }}
                    initial={{ y: '-200vh' }}
                    transition={{ type: 'spring', stiffness: 120 , delay: 4 }}
                    className="button"
                >
                    <button
                        onClick={ () => push('/') }
                    >home</button>
                    <button
                        onClick={ () => push('/order') }
                    >my order</button>
                </motion.div>
            </div>
            
            {/* reference to tomiwa */}
            <div className='tomiwa' style={{ color: 'rgb(1, 1, 41)', marginTop: '10px', height: '30px', fontWeight: 'bold'}}>
                <div>
                Made with love <FaHeart color='red' fontSize='20px'/> by Tomiwa
                </div>
            </div>
        </div>
    )
}

export default Profile;