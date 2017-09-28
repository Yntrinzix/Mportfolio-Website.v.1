import React from 'react';
import ProfileName from './ProfileName';

class Content extends React.Component {

  render(){
    return(

        <div className='content'>
          <div className='content-inner'>
            <img className='port-img' src={require('../../assets/portrait.png')} />
          </div>
          <ProfileName/>
        </div>

    );
  }
}

export default Content;
