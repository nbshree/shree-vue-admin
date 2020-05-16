import http from '@/utils/http';

export function loginbyUser(username, password) {
    const data = {
        username,
        password
    };
    console.log(data)
    return http({
        url: '/login/login',
        method: 'post',
        data
    });
}

export function logout() {
    return http({
        url: '/login/logout',
        method: 'post'
    });
}

export function getUserInfo(username) {
    return http({
        url: '/user/info',
        method: 'get',
        params: { username }
    });
}

export function permission(roles) {
    const data = {
        roles
    };
    return http({
        url: '/user/permission',
        method: 'get',
        data
    });
}
