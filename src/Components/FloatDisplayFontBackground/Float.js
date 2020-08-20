import React, {Component} from 'react';
import './Float.css';

class Float extends Component {
    render() {
        return(
            <div className='float-container'>
                    <body className='float-body'>
                        <header>
                            <h1>RESTAURANTS IN HAWAII</h1>
                        </header>
                        <section className='article-container'>
                            <article>
                                <h3 className='article-title'>Rainbows</h3>
                                <p className='article-content'><img className='article-img' src='https://i.pinimg.com/originals/3b/19/fd/3b19fdf93d2f539ed3c7981bf08b7fad.jpg' alt='rainbow drive in'/>In 1961, in the midst of major economic changes in Hawaii, they took a chance and opened Rainbow Drive-In in Kapahulu, a small, local community at the entrance to Waikiki. They opened serving 50-cent chili and rice plates, $1 BBQ beef plates, 25-cent hamburgers and 14-cent fries. The menu and food were geared towards the working person and the Waikiki beach crowd. With that, they not only served hearty portions of food at a reasonable price, but they also insisted on quick, attentive service because they knew the working person only had a limited lunch period. The Ifuku’s kept their prices low and counted on the volume of sales to keep their venture going.</p>
                            </article>
                            <article >
                                <h3 className='article-title'>Cinnamons</h3>
                                <p className='article-2-content' ><img className='article-2-img' src='https://www.hawaiimagazine.com/sites/default/files/field/image/CinnamonFood.jpg' alt='cinnamons food'/>Went for a hearty breakfast and by far not disappointed. Were seated immediately and waited on by a most gracious waitress. Food was served in a short period of time and was plentiful (couldn’t finish) and delicious. Prices are very reasonable and the decor is most “Hawaiian”. If your looking for a restaurant with atmosphere, great food, and the best staff, this is the place.</p>
                            </article>
                            <article>
                                <h3 className='article-title' >Zippy's</h3>
                                <p className='article-content'><img className='article-img' src='https://cdn.theculturetrip.com/wp-content/uploads/2018/06/3279723671_817f6ecdeb_o.jpg' alt="Zippy's food"/>Ask anyone in Hawaii about Zippy’s Restaurants and you will hear real stories about cherished weekly dinners with grandparents, post-surf-session munchies satiated, romances won and lost at the restaurant, and the iconic Zippy’s food that helped them to celebrate it all.</p>
                            </article>
                        </section>
                    <section className='side-nav'>
                    <ul>
                        <li><a href='https://www.facebook.com/'>
                            <img className='social-media-icons' src='https://image.flaticon.com/icons/svg/1384/1384053.svg' alt='facebook logo'/></a></li>
                        <li><a href='https://www.instagram.com/'>
                            <img className='social-media-icons'  src='https://image.flaticon.com/icons/svg/1409/1409946.svg' alt='instagram logo'/></a></li>
                        <li><a href='https://twitter.com/explore'>
                            <img className='social-media-icons'  src='https://image.flaticon.com/icons/svg/733/733579.svg'alt='twitter logo'/></a></li>
                    </ul>
                    </section>
                    <footer>
                        <p>Copyright 2020</p>
                    </footer>
                    </body>
            </div>
        )
    }
}

export default Float;