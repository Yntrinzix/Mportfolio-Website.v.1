import React from 'react';
import ListItems from '../1-reusable/ListItems';
import Brand from './Brand';

class Header extends React.Component {

  constructor() {
  super();

  this.state = {
    search: "",
    links: ['projects','skills','about','history']
  }
}

  render(){
    return(
      <nav>
        <div className='innerNav'>
          <Brand/>
          <div className='links'>
            <ListItems list={this.state.links}/>
          </div>

        </div>
      </nav>
    );
  }
}

export default Header;
