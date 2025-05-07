import React, { Component } from 'react';
import Father from './Father';
import Child from './Child';

class Grand extends Component {
  render() {
    return (
      <>
        <p>부모와 자식 콤포넌트의 관계</p>
        <h3>Grand(조부모)콤포넌트</h3>
        <Father />
      </>
    );
  }
}

export default Grand;