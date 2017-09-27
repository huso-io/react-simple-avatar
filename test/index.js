import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterAvatar, LinkAvatar, Initials, Src } from '../lib';

describe('<RouterAvatar />', () => {
  it('renders children when passed in', () => {
    expect(
      shallow(
        <Router>
          <RouterAvatar to='/profile' size={ 58 }>
            <Initials size={ 30 }/>
          </RouterAvatar>
        </Router>
      )
      .contains(<Initials size={ 30 }/>)
    ).to.equal(true);
  });

  it('matches a provided selector "avatar router-avatar"', () => {
    expect(
      mount(
        <Router>
          <RouterAvatar to='/profile' size={ 58 } />
        </Router>
      )
      .find('.avatar.router-avatar')
      .length
    ).to.equal(1);
  });

  it('matches a provided HTML markup', () => {
    let mounted = mount(
      <Router>
        <RouterAvatar to='/profile' size={ 58 }>
          <Src from='http://placehold.it/16x16'/>
        </RouterAvatar>
      </Router>
    )
    .html();

    let renderedHtml = '<div style="overflow: hidden; display: inline-block; width: 58px; height: 58px;" class="avatar router-avatar" data-radium="true"><a style="position: relative; z-index: 0; display: block; width: 100%; height: 100%;" href="/profile"><div style="overflow: hidden; width: 100%; height: 100%; box-sizing: border-box; position: absolute; z-index: 2; top: 0px; left: 0px;" class="full-canvas avatar-src" data-radium="true"><img src="http://placehold.it/16x16" style="float: left; width: 100%; height: 100%; max-width: none;" data-radium="true"></div></a></div>';
    expect(mounted).to.equal(renderedHtml);
  });

  it('contains only one node', () => {
    let mounted = mount(
      <Router>
        <RouterAvatar to='/profile' size={ 58 }>
          <Initials size={ 30 }/>
          <Src from='http://placehold.it/16x16'/>
        </RouterAvatar>
      </Router>
    );

    expect(mounted.find('img').length).to.equal(1);
  });

  it('exists the current node', () => {
    expect(
      mount(
        <Router>
          <RouterAvatar to='/profile' size={ 58 } />
        </Router>
      )
      .exists('.avatar')
    ).to.equal(true);
  });

  it("matches a provided final class 'round-box-5px border-2px'", () => {
    expect(
      mount(
        <Router>
          <RouterAvatar
           to='/profile'
           size={ 58 }
           className='round-box-5px border-2px' />
        </Router>
       )
       .find('.avatar.router-avatar.round-box-5px.border-2px')
       .length
    ).to.equal(1);
  });

  //TODO: matches a provided final style
});

describe('<LinkAvatar />', () => {
  it('renders children when passed in', () => {
    expect(
      shallow(
        <LinkAvatar size={ 58 }>
          <Initials size={ 30 }/>
        </LinkAvatar>
      )
      .contains(<Initials size={ 30 }/>)
    ).to.equal(true);
  });

  it('matches a provided selector "avatar link-avatar"', () => {
    expect(
      shallow(<LinkAvatar size={ 58 } />)
      .is('.avatar.link-avatar')
    ).to.equal(true);
  });

  it('matches a provided HTML markup', () => {
    let mounted = mount(
      <LinkAvatar size={ 58 }>
        <Src from='http://placehold.it/16x16'/>
      </LinkAvatar>
    )
    .html();
    let renderedHtml = '<div style="overflow: hidden; display: inline-block; width: 58px; height: 58px;" class="avatar link-avatar" data-radium="true"><a style="position: relative; z-index: 0; display: block; width: 100%; height: 100%;" data-radium="true"><div style="overflow: hidden; width: 100%; height: 100%; box-sizing: border-box; position: absolute; z-index: 2; top: 0px; left: 0px;" class="full-canvas avatar-src" data-radium="true"><img src="http://placehold.it/16x16" style="float: left; width: 100%; height: 100%; max-width: none;" data-radium="true"></div></a></div>';
    expect(mounted).to.equal(renderedHtml);
  });

  it('contains only one node', () => {
    expect(
      mount(
        <LinkAvatar size={ 58 }>
          <Initials size={ 30 }/>
          <Src from='http://placehold.it/16x16'/>
        </LinkAvatar>
      )
      .find('img')
      .length
    ).to.equal(1);
  });

  it('exists the current node', () => {
    expect(
      mount(<LinkAvatar size={ 58 } />)
      .exists('.avatar')
    ).to.equal(true);
  });

  it("type of the current node is 'div'", () => {
    expect(
      shallow(<LinkAvatar size={ 58 } />)
      .type()
    ).to.equal('div');
  });

  it("matches a provided final class 'round-box-5px border-2px'", () => {
    expect(
      shallow(
        <LinkAvatar
         size={ 58 }
         className='round-box-5px border-2px' />
       )
      .props()
      .className
    ).to.equal('avatar link-avatar round-box-5px border-2px');
  });
});
