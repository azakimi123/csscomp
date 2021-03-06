import React, {Component} from 'react';
import './BoxModel.scss';

class BoxModel extends Component {
  render() {
    return (
      <div>
        <main className='box-model-container'>
          <section className='main-box'>
              <section className='sub-box'>
                  <h3 className='box-title'>Plants</h3>
                  <span className='skill' >Flex Wrap and Box Shadow:</span>
                  <img className='img-1' 
                    src='https://smartgardenguide.com/wp-content/uploads/2019/04/how-to-fertilize-houseplants-naturally-3.jpg'
                    alt='plants'/>
                  <img className='img-2'
                    src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/various-beautiful-green-plants-in-pots-on-white-royalty-free-image-931824676-1565950537.jpg?crop=0.825xw:0.620xh;0.0785xw,0.132xh&resize=1200:*'
                    alt='plants on a shelf'/>
                  <img className='img-2'
                    src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/various-beautiful-green-plants-in-pots-on-white-royalty-free-image-931824676-1565950537.jpg?crop=0.825xw:0.620xh;0.0785xw,0.132xh&resize=1200:*'
                    alt='plants on a shelf'/>
                  <img className='img-2'
                    src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/various-beautiful-green-plants-in-pots-on-white-royalty-free-image-931824676-1565950537.jpg?crop=0.825xw:0.620xh;0.0785xw,0.132xh&resize=1200:*'
                    alt='plants on a shelf'/>
                  <img className='img-2'
                    src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/various-beautiful-green-plants-in-pots-on-white-royalty-free-image-931824676-1565950537.jpg?crop=0.825xw:0.620xh;0.0785xw,0.132xh&resize=1200:*'
                    alt='plants on a shelf'/>
                  <div className='bar-1'></div>
                  <div className='bar-1'></div>
              </section>
          </section>
          <span>Flex Direction: row-reverse =></span>
          <section className='numbers'>
            <h3 className='number'>One</h3>
            <h3 className='number'>Two</h3>
            <h3 className='number'>Three</h3>
          </section>
          <span>Gradient Div =></span>
          <div className='box'>
          </div>
        </main>
      </div>
    )
  }
}

export default BoxModel;

