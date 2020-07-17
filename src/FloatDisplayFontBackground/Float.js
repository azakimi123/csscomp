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
                                <p className='article-content'><img className='article-img' src='https://i.pinimg.com/originals/3b/19/fd/3b19fdf93d2f539ed3c7981bf08b7fad.jpg' alt='rainbow drive in'/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.</p>
                            </article>
                            <article >
                                <h3 className='article-title'>Cinnamons</h3>
                                <p className='article-2-content' ><img className='article-2-img' src='https://www.hawaiimagazine.com/sites/default/files/field/image/CinnamonFood.jpg' alt='cinnamons food'/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.</p>
                            </article>
                            <article>
                                <h3 className='article-title' >Zippy's</h3>
                                <p className='article-content'><img className='article-img' src='https://lh3.googleusercontent.com/proxy/kSbeOtk8P9cpSqB9JR13pjKhNzvbzqBoToSKKKIJbYUjPkUQtf149f0Pu8YkgjIXfenxSeWFjizEae6Iz9axu0prK82EYzsD_K-Vl2MpNDBNA96l9wl5ggHqnqY4ojxMm8Sv' alt="Zippy's food"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.</p>
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