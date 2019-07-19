import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import { arrLevelLength, uniqueArray, pickData } from '../utils'
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
var arra = [{id:11},{id:12},{name:'yx'},{id:15},{id:12}]
var re = uniqueArray(arra,'id')
console.log('re:',re)
let obj = {a:{b:1}}
let pick = pickData(obj,'a.b.c.d')
function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! useful fn</h1>
      <p>arrLevelLength 方法结果：将多层数组的层级关系计算出来，以对象方式展示： {JSON.stringify(res)}</p>
      <p>uniqueArray 方法结果：将数组过滤： {JSON.stringify(re)}</p>
      <p>pickData 方法结果：从obj中获取对应的key值：不存在也不会报错 {JSON.stringify(pick)}</p>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
