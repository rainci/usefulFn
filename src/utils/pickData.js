/** 
 * @param {Object} target 目标对象
 * @param {String} format 格式'a.b.c'
 * @author rainci(刘雨熙) 
 * @time 2019.7.15
 * 从对象中获取想要的key对应的value，防止直接获取key对应的值时报错。如：let obj = {a:{b:1}} obj.a.b.c.d
 */
export function pickData(target, format) {
    let keys = format.split('.');
    let resault = target;
    for (const key of keys) {
      if (resault) {
        resault = resault[key];
      } else {
        return undefined;
      }
    }
    return resault;
  }