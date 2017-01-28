import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import { RouterAvatar, LinkAvatar, Initials, Src } from '../lib';

describe("<RouterAvatar />", () => {
  it("renders children when passed in", () => {
    expect(
      shallow(
        <RouterAvatar size={ 58 }>
          <Initials size={ 30 }/>
        </RouterAvatar>
      )
      .contains(<Initials size={ 30 }/>)
    ).to.equal(true);
  });

  it("matches a provided selector 'avatar router-avatar'", () => {
    expect(
      shallow(<RouterAvatar size={ 58 } />)
      .is('.avatar.router-avatar')
    ).to.equal(true);
  });

  it("matches a provided HTML markup", () => {
    let renderedHtml = '<div class="avatar router-avatar" data-radium="true" style="position: relative; z-index: 0; overflow: hidden; box-sizing: border-box; display: inline-block; background-color: rgb(183, 183, 183); width: 58px; height: 58px;"><a style="display: block; width: 100%; height: 100%;"><div class="full-canvas avatar-src" data-radium="true" style="overflow: hidden; width: 100%; height: 100%; box-sizing: border-box; position: absolute; z-index: 2; top: 0px; left: 0px;"><img src="http://placehold.it/16x16" data-radium="true" style="float: left; width: 100%; height: 100%; max-width: none;"></div></a></div>';
    expect(
      mount(
        <RouterAvatar size={ 58 }>
          <Src from='http://placehold.it/16x16'/>
        </RouterAvatar>
      )
      .html()
    ).to.equal(renderedHtml);
  });

  it("contains only one node", () => {
    expect(
      mount(
        <RouterAvatar size={ 58 }>
          <Initials size={ 30 }/>
          <Src from='http://placehold.it/16x16'/>
        </RouterAvatar>
      )
      .find('.avatar-src')
      .length
    ).to.equal(1);
  });

  it("exists the current node", () => {
    expect(
      mount(<RouterAvatar size={ 58 } />)
      .exists('.avatar')
    ).to.equal(true);
  });

  it("type of the current node is 'div'", () => {
    expect(
      shallow(<RouterAvatar size={ 58 } />)
      .type()
    ).to.equal('div');
  });

  it("matches a provided final class 'round-box-5px border-2px'", () => {
    expect(
      shallow(
        <RouterAvatar
         size={ 58 }
         className='round-box-5px border-2px' />
       )
      .props()
      .className
    ).to.equal('avatar router-avatar round-box-5px border-2px');
  });

  it(
    "matches a provided final style", () => {
    assert.deepEqual(
      shallow(
        <RouterAvatar
         size={ 50 }
         style={{zIndex: 1}} />
      )
      .props()
      .style,
      {
        position: 'relative',
        zIndex: 1,
        MozBoxSizing: 'border-box',
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        width: '50px',
        height: '50px',
        backgroundColor: '#B7B7B7'
      }
    );
  });
});

describe("<LinkAvatar />", () => {
  it("renders children when passed in", () => {
    expect(
      shallow(
        <LinkAvatar size={ 58 }>
          <Initials size={ 30 }/>
        </LinkAvatar>
      )
      .contains(<Initials size={ 30 }/>)
    ).to.equal(true);
  });

  it("matches a provided selector 'avatar link-avatar'", () => {
    expect(
      shallow(<LinkAvatar size={ 58 } />)
      .is('.avatar.link-avatar')
    ).to.equal(true);
  });

  it("matches a provided HTML markup", () => {
    let renderedHtml = '<div class="avatar link-avatar" data-radium="true" style="position: relative; z-index: 0; overflow: hidden; box-sizing: border-box; display: inline-block; background-color: rgb(183, 183, 183); width: 58px; height: 58px;"><a data-radium="true" style="display: block; width: 100%; height: 100%;"><div class="full-canvas avatar-src" data-radium="true" style="overflow: hidden; width: 100%; height: 100%; box-sizing: border-box; position: absolute; z-index: 2; top: 0px; left: 0px;"><img src="http://placehold.it/16x16" data-radium="true" style="float: left; width: 100%; height: 100%; max-width: none;"></div></a></div>';
    expect(
      mount(
        <LinkAvatar size={ 58 }>
          <Src from='http://placehold.it/16x16'/>
        </LinkAvatar>
      )
      .html()
    ).to.equal(renderedHtml);
  });

  it("contains only one node", () => {
    expect(
      mount(
        <LinkAvatar size={ 58 }>
          <Initials size={ 30 }/>
          <Src from='http://placehold.it/16x16'/>
        </LinkAvatar>
      )
      .find('.avatar-src')
      .length
    ).to.equal(1);
  });

  it("exists the current node", () => {
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

  it(
    "matches a provided final style", () => {
    assert.deepEqual(
      shallow(
        <LinkAvatar
         size={ 50 }
         style={{zIndex: 1}} />
      )
      .props()
      .style,
      {
        position: 'relative',
        zIndex: 1,
        MozBoxSizing: 'border-box',
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        width: '50px',
        height: '50px',
        backgroundColor: '#B7B7B7'
      }
    );
  });
});
