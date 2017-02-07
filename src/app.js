import React, { Component } from 'react';
import { RouterAvatar, LinkAvatar, Initials, Src } from './component/Avatar';
import Radium from 'radium';
import { FullCanvas } from 'react-layout-kits';

class App extends Component {
  render() {
    return (
      <FullCanvas className='page-example'>

        <h1>Router Avatar</h1>

        <RouterAvatar
         to='#'
         alt='沈维忠'
         size={ 16 }>
          <Initials text='沈' size={ 12 }/>
          <Src from='http://placehold.it/16x16'/>
        </RouterAvatar>
        <RouterAvatar
         to='#'
         alt='沈维忠'
         size={ 26 }>
          <Initials text='沈' size={ 20 }/>
          <Src from='http://placehold.it/26x26'/>
        </RouterAvatar>
        <RouterAvatar
         to='#'
         alt='沈维忠'
         size={ 38 }>
          <Initials text='沈' size={ 30 }/>
          <Src from='http://placehold.it/38x38'/>
        </RouterAvatar>
        <RouterAvatar
         to='#'
         alt='沈维忠'
         size={ 88 }>
          <Initials text='沈' size={ 68 }/>
          <Src from='http://placehold.it/88x88'/>
        </RouterAvatar>

        <h1>Link Avatar</h1>

        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 16 }>
          <Initials text='沈' size={ 12 }/>
          <Src from='http://placehold.it/16x16'/>
        </LinkAvatar>
        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 26 }>
          <Initials text='沈' size={ 20 }/>
          <Src from='http://placehold.it/26x26'/>
        </LinkAvatar>
        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 38 }>
          <Initials text='沈' size={ 30 }/>
          <Src from='http://placehold.it/38x38'/>
        </LinkAvatar>
        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 88 }>
          <Initials text='沈' size={ 68 }/>
          <Src from='http://placehold.it/88x88'/>
        </LinkAvatar>

        <h1>Round Avatar</h1>

        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 16 }
         className='round'>
          <Initials text='沈' size={ 12 }/>
          <Src from='http://placehold.it/16x16'/>
        </LinkAvatar>
        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 26 }
         className='round'>
          <Initials text='沈' size={ 20 }/>
          <Src from='http://placehold.it/26x26'/>
        </LinkAvatar>
        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 38 }
         className='round'>
          <Initials text='沈' size={ 30 }/>
          <Src from='http://placehold.it/38x38'/>
        </LinkAvatar>
        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 88 }
         className='round'>
          <Initials text='沈' size={ 68 }/>
          <Src from='http://placehold.it/88x88'/>
        </LinkAvatar>

        <h1>Avatar with Round Corner</h1>

        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 16 }
         className='round-box-5px'>
          <Initials text='沈' size={ 12 }/>
          <Src from='http://placehold.it/16x16'/>
        </LinkAvatar>
        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 26 }
         className='round-box-5px'>
          <Initials text='沈' size={ 20 }/>
          <Src from='http://placehold.it/26x26'/>
        </LinkAvatar>
        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 38 }
         className='round-box-5px'>
          <Initials text='沈' size={ 30 }/>
          <Src from='http://placehold.it/38x38'/>
        </LinkAvatar>
        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 88 }
         className='round-box-5px'>
          <Initials text='沈' size={ 68 }/>
          <Src from='http://placehold.it/88x88'/>
        </LinkAvatar>

        <h1>Avatar with Border</h1>

        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 16 }
         className='round-box-5px border-2px'>
          <Initials text='沈' size={ 12 }/>
          <Src from='http://placehold.it/16x16'/>
        </LinkAvatar>
        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 26 }
         className='round-box-5px border-2px'>
          <Initials text='沈' size={ 20 }/>
          <Src from='http://placehold.it/26x26'/>
        </LinkAvatar>
        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 38 }
         className='round-box-5px border-2px'>
          <Initials text='沈' size={ 30 } style={{color: '#f00'}}/>
          <Src from='http://placehold.it/38x38'/>
        </LinkAvatar>
        <LinkAvatar
         to='#'
         alt='沈维忠'
         size={ 88 }
         className='round-box-5px border-2px'>
          <Initials text='沈' size={ 68 }/>
          <Src from='http://placehold.it/88x88'/>
        </LinkAvatar>

      </FullCanvas>
    );
  }
}

export default Radium(App);
