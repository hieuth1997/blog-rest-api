/**
 *
 *@description merge array2  to array1
 * @param {array} array1
 * @param {*array2} array2
 */
const merge = (array1, array2) => {
  array2.forEach((elm2) => {
    if (elm2.total)
      array1.forEach((elm1) => {
        if (elm1._id === elm2._id) elm1.total = elm2.total;
      });
  });
  return array1;
};
export default merge;
