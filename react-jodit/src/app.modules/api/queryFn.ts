import API from 'app.modules/api/index';
import { qs } from 'app.modules/util/qs';

const queryFn = async ({ queryKey, ...props }) => {
  let url = queryKey[0];
  const param = queryKey[1] ? queryKey[1] : '';

  if (param) url = queryKey + qs.stringURL(param);

  const res = await API.GET(url);
  return res.data.result;
};

export default queryFn;
