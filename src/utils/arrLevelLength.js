/**
 * 
 * @param {Array} arr 要处理的[]
 * @param {Number} level 代表层级关系，默认是0
 * @param {Object} obj 返回obj，将曾经关系及数量以对象形式返回
 * @return {String} 
 * @author rainci(刘雨熙)
 * @time 2019.7.15
 */
export function arrLevelLength({ arr, level = 0, obj = {} }) {//计算数组层级数量
    if (!obj[level]) { obj[level] = 0 }
    obj[level] += arr.length;
    for (let { children } of arr) {
        if (children && children.length) {
            arrLevelLength({arr:children, level:(level+1), obj})
  
        }
    }
    return obj
  }