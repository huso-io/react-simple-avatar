import React, { Component } from 'react';
import { RouterAvatar, LinkAvatar, Initials, Src } from './component/Avatar';
import Radium from 'radium';
import { FullCanvas } from 'react-layout-kits';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <FullCanvas className='page-example'>

          <h1>Router Avatar</h1>


          <RouterAvatar
          to='#'
          alt='沈维忠'
          size={ 16 }>
            <Initials text='沈' size={ 12 }/>
            <Src from='https://unsplash.it/g/32?random&&image=12'/>
          </RouterAvatar>
          <RouterAvatar
          to='#'
          alt='沈维忠'
          size={ 26 }>
            <Initials text='沈' size={ 20 }/>
            <Src from='https://unsplash.it/g/52?random&&image=12'/>
          </RouterAvatar>
          <RouterAvatar
          to='#'
          alt='沈维忠'
          size={ 38 }>
            <Initials text='沈' size={ 30 }/>
            <Src from='https://unsplash.it/g/76?random&&image=12'/>
          </RouterAvatar>
          <RouterAvatar
          to='#'
          alt='沈维忠'
          size={ 88 }>
            <Initials text='沈' size={ 68 }/>
            <Src from='https://unsplash.it/g/176?random&&image=12'/>
          </RouterAvatar>

          <h1>Link Avatar</h1>

          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 16 }>
            <Initials text='沈' size={ 12 }/>
            <Src from='https://unsplash.it/g/32?random&&image=12'/>
          </LinkAvatar>
          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 26 }>
            <Initials text='沈' size={ 20 }/>
            <Src from='https://unsplash.it/g/52?random&&image=12'/>
          </LinkAvatar>
          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 38 }>
            <Initials text='沈' size={ 30 }/>
            <Src from='https://unsplash.it/g/76?random&&image=12'/>
          </LinkAvatar>
          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 88 }>
            <Initials text='沈' size={ 68 }/>
            <Src from='https://unsplash.it/g/176?random&&image=12'/>
          </LinkAvatar>

          <h1>Round Avatar</h1>

          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 16 }
          className='round'>
            <Initials text='沈' size={ 12 }/>
            <Src from='https://unsplash.it/g/32?random&&image=12'/>
          </LinkAvatar>
          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 26 }
          className='round'>
            <Initials text='沈' size={ 20 }/>
            <Src from='https://unsplash.it/g/52?random&&image=12'/>
          </LinkAvatar>
          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 38 }
          className='round'>
            <Initials text='沈' size={ 30 }/>
            <Src from='https://unsplash.it/g/76?random&&image=12'/>
          </LinkAvatar>
          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 88 }
          className='round'>
            <Initials text='沈' size={ 68 }/>
            <Src from='https://unsplash.it/g/176?random&&image=12'/>
          </LinkAvatar>

          <h1>Avatar with Round Corner</h1>

          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 16 }
          className='round-box-5px'>
            <Initials text='沈' size={ 12 }/>
            <Src from='https://unsplash.it/g/32?random&&image=12'/>
          </LinkAvatar>
          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 26 }
          className='round-box-5px'>
            <Initials text='沈' size={ 20 }/>
            <Src from='https://unsplash.it/g/52?random&&image=12'/>
          </LinkAvatar>
          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 38 }
          className='round-box-5px'>
            <Initials text='沈' size={ 30 }/>
            <Src from='https://unsplash.it/g/76?random&&image=12'/>
          </LinkAvatar>
          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 88 }
          className='round-box-5px'>
            <Initials text='沈' size={ 68 }/>
            <Src from='https://unsplash.it/g/176?random&&image=12'/>
          </LinkAvatar>

          <h1>Avatar with Border</h1>

          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 16 }
          className='round-box-5px border-2px'>
            <Initials text='沈' size={ 12 }/>
            <Src from='https://unsplash.it/g/32?random&&image=12'/>
          </LinkAvatar>
          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 26 }
          className='round-box-5px border-2px'>
            <Initials text='沈' size={ 20 }/>
            <Src from='https://unsplash.it/g/52?random&&image=12'/>
          </LinkAvatar>
          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 38 }
          className='round-box-5px border-2px'>
            <Initials text='沈' size={ 30 } style={{color: '#f00'}}/>
            <Src from='https://unsplash.it/g/76?random&&image=12'/>
          </LinkAvatar>
          <LinkAvatar
          to='#'
          alt='沈维忠'
          size={ 88 }
          className='round-box-5px border-2px'>
            <Initials text='沈' size={ 68 }/>
            <Src from='https://unsplash.it/g/176?random&&image=12'/>
          </LinkAvatar>

        </FullCanvas>
      </BrowserRouter>
    );
  }
}

export default Radium(App);
