import axios from 'axios';
import Toast from 'app.components/toast/Toast';
import { qs } from 'app.modules/util/qs';
// import { errorMessage } from '../constant/errorMessage';
import { processEnvApiURI } from 'app.modules/environment';

const axiosClient = axios.create({
  baseURL: processEnvApiURI,
});

export const request: any = async ({ url, method, data = null }) => {
  try {
    const response: any = await axiosClient({
      method,
      url,
      data,
    });

    return response;
  } catch (error) {
    console.error('#err-web-client: ', error.toString());

    if (error.toString().includes('Network Error')) {
      return Toast.alert(
        '네트워크 오류로 처리되지 않았습니다.\n다시 시도해주세요.'
      );
    }

    await Toast.alert("예기치 못한 오류가 발생했습니다.");
  }
};

class API {
  async CALL({ method, url, data = null }) {
    return request({ method, url, data });
  }

  GET({ url, ...params }) {
    return this.CALL({
      method: 'GET',
      url: url + qs.stringURL(params.data, url),
    });
  }

  SSR_GET({ url, ...params }) {
    return this.CALL({
      method: 'GET',
      url: url + qs.stringURL(params.data),
    });
  }

  POST({ url, ...params }) {
    return this.CALL({
      method: 'POST',
      url,
      ...params,
    });
  }

  PUT({ url, ...params }) {
    return this.CALL({
      method: 'PUT',
      url,
      ...params,
    });
  }

  DELETE({ url, ...params }) {
    return this.CALL({
      method: 'DELETE',
      url,
      ...params,
    });
  }
}

export default new API();
