import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import { arrLevelLength } from '../utils'
var arr = [{
  id: 0,
  children: [
      {
          id: 1,
          children: [
              { id: 11 },
              {
                  id: 12,
                  children: [
                      { id: 121 },
                      {
                          id: 122,
                          children: [
                              { id: 1221 }
                          ]
                      }
                  ]
              }
          ]
      },
      {
          id: 2,
          children: [
              {
                  id: 21,
                  children: [
                      { id: 211 }
                  ]
              }
          ]
      }
  ]
}]

let res = arrLevelLength({arr})
console.log('res:',res)

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! useful fn</h1>
      <p>arrLevelLength 方法结果：将多层数组的层级关系计算出来，以对象方式展示： {JSON.stringify(res)}</p>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
