import React, {Component} from 'react';
import './BoxModel.css';

class BoxModel extends Component {
  render() {
    return (
      <div>
        <main className='container'>
          <section className='main-box'>
              <section className='sub-box'>
                  <h3 className='box-title'>Plants</h3>
                  <img className='img-1' 
                    src='https://smartgardenguide.com/wp-content/uploads/2019/04/how-to-fertilize-houseplants-naturally-3.jpg'
                    alt='plants'/>
                  <img className='img-2'
                    src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/various-beautiful-green-plants-in-pots-on-white-royalty-free-image-931824676-1565950537.jpg?crop=0.825xw:0.620xh;0.0785xw,0.132xh&resize=1200:*'
                    alt='plants on a shelf'/>
                  <div className='bar-1'></div>
                  <div className='bar-1'></div>
              </section>
          </section>
          <section className='content-box'>
              <p className='content'>Ac tortor vitae purus faucibus ornare suspendisse sed. Metus aliquam eleifend mi in. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Magna eget est lorem ipsum. Quam pellentesque nec nam aliquam sem et tortor consequat. Arcu odio ut sem nulla pharetra diam. Morbi non arcu risus quis varius quam quisque. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Tristique sollicitudin nibh sit amet commodo nulla. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Iaculis eu non diam phasellus vestibulum. Quam quisque id diam vel quam elementum pulvinar.</p>
          </section>
        </main>
      </div>
    )
  }
}

export default BoxModel;

