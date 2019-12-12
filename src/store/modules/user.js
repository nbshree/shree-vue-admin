import { loginbyUser, logout, getUserInfo, permission } from '@/api/login';
import * as loginAuth from '@/utils/session';
import appConst from '../appConst';

const user = {
    state: {
        sessionId: '',
        userId: '',
        userName: '',
        nickName: '',
        roles: [],
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
        introduction: ''
    },
    mutations: {
        [appConst.user.motaions.SET_SESSION]: (state, sessionId) => {
            state.sessionId = sessionId;
        },
        [appConst.user.motaions.SET_USER_INFO]: (state, userInfo) => {
            state.sessionId = userInfo.sessionId;
            state.userId = userInfo.userId;
            state.userName = userInfo.userName;
            state.nickName = userInfo.nickName;
            state.roles = userInfo.roles;
        },
        [appConst.user.motaions.SET_AVATAR]: (state, avatar) => {
            state.avatar = avatar;
        },
        [appConst.user.motaions.SET_INTRODUCTION]: (state, introduction) => {
            state.introduction = introduction;
        }
    },
    actions: {
        login({ commit }, { username, password }) {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await loginbyUser(username, password);
                    if (response.data) {
                        commit(appConst.user.motaions.SET_USER_INFO, response.data);
                        loginAuth.setSession(JSON.stringify(response.data));
                        loginAuth.setSessionId(response.data.sessionId);
                    }
                    resolve(response);
                } catch (error) {
                    reject(error);
                }
            });
        },
        logout({ commit, state }) {
            return new Promise(async (resolve, reject) => {
                try {
                    await logout(state.token);
                    commit(appConst.user.motaions.SET_USER_INFO, {
                        sessionId: '',
                        userId: '',
                        userName: '',
                        nickName: '',
                        roles: [],
                        avatar: '',
                        introduction: ''
                    });
                    loginAuth.removeSessionId();
                    loginAuth.removeSession();
                    resolve();
                } catch (error) {
                    reject(error);
                }
            });
        },
        logoutForError({ commit, state }) {
            return new Promise(async (resolve, reject) => {
                try {
                    commit(appConst.user.motaions.SET_USER_INFO, {
                        sessionId: '',
                        userId: '',
                        userName: '',
                        nickName: '',
                        roles: [],
                        avatar: '',
                        introduction: ''
                    });
                    loginAuth.removeSessionId();
                    loginAuth.removeSession();
                    resolve();
                } catch (error) {
                    reject(error);
                }
            });
        },
        getUserPermission({ commit }, { roles }) {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await permission(roles);
                    // const response = await api.post('permissions', {});
                    let result = {
                        status: 0,
                        permissionCodeList: []
                    };
                    if (response.code === 200) {
                        result.status = 1;
                        // 处理权限列表结果
                        response.data.forEach((item) => {
                            if (item.contentType === 'view') {
                                result.permissionCodeList.push(item.content);
                            }
                        });

                        commit(appConst.permission.motaions.SET_PERMISSION_LIST, response.data);
                        commit(appConst.permission.motaions.SET_PERMISSION_CODE_LIST, result.permissionCodeList);
                    }
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
        }
    }
};

export default user;
