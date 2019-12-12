import Mock from 'mockjs';
import loginAPI from './login';
import article from './article'
import { param2Obj } from '@/utils/index'

const openMock = true;

if (openMock) {
    Mock.mock(/\/login\/login/, 'post', loginAPI.loginbyUser);
    Mock.mock(/\/login\/logout/, 'post', loginAPI.logout);
    Mock.mock(/\/user\/info/, 'get', loginAPI.info);
    Mock.mock(/\/user\/permission/, 'get', loginAPI.permission);
}
const mocks = [
  ...article
];
for (const i of mocks) {
  Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
}
function XHR2ExpressReqWrap(respond) {
  return function(options) {
    let result = null
    if (respond instanceof Function) {
      const { body, type, url } = options
      // https://expressjs.com/en/4x/api.html#req
      result = respond({
        method: type,
        body: JSON.parse(body),
        query: param2Obj(url)
      })
    } else {
      result = respond
    }
    return Mock.mock(result)
  }
}
export default Mock;
