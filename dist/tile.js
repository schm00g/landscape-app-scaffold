const _jsxFileName = "/Users/shanemcgrath/create-landscape-app/tile/tile.js";import React, { Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';


export default class tlionsdenTile extends Component {

  render() {
    return (
      React.createElement('div', { className: "w-100 h-100 relative"  , style: { background: '#1a1a1a' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}
        , React.createElement('a', { className: "w-100 h-100 db pa2 no-underline"    , href: "/~tlionsden", __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
          , React.createElement('p', { className: "gray label-regular b absolute"   , style: { left: 8, top: 4 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}, "tlionsden")
          , React.createElement('p', { className: "white absolute" , style: { top: 25, left: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}, "This is sample text for your full app tile."        )
        )
      )
    );
  }

}

window.tlionsdenTile = tlionsdenTile;
