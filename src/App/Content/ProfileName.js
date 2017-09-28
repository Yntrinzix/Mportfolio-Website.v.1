import React from 'react';
import ListItems from '../1-reusable/ListItems';


class ProfileName extends React.Component {

  constructor() {
  super();

  this.state = {
    search: "",
    john: ['J','O','H','N'],
    mark: ['M','A','R','K'],
    martinez: ['M','A','R','T','I','N','E','Z'],
    intro:['H','i',',','\xa0','m','y','\xa0','n','a','m','e','\xa0','i','s'],
    outro:['I','m','\xa0','a','\xa0','w','e','b','\xa0','d','e','v','e','l','o','p','e','r']
  }
}

  render(){
    return(

        <div className='content-inner'>
          <div className='introName'>
            <ListItems list={this.state.intro}/>
          </div>
          <div className='profileName'>
            <div className='profileName-fName'>
              <ListItems list={this.state.john}/>
              <ListItems list={this.state.mark}/>
            </div>
            <div className='profileName-sName'>
              <ListItems list={this.state.martinez}/>
            </div>
          </div>
          <div className='introName'>
            <ListItems list={this.state.outro}/>
          </div>
        </div>

    );
  }
}

export default ProfileName;
