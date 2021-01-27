/**
 *
 * @description find with full options
 * @return result
 */
const findAdv = async (
  Model,
  {
    query = {},
    select = null,
    limit = 10,
    page = 1,
    sort = null,
    populate = '',
  },
) => {
  const skip = page && page - 1 * limit;
  const res = await Model.find(query, select, {
    skip: +skip,
    limit: +limit,
    sort,
    populate,
  });
  return res;
};
export default findAdv;
