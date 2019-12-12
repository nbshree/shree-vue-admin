import queryString from 'query-string';

const userMap = {
    admin: {
        roles: ['admin'],
        // token: "admin",
        introduction: 'i am admin',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
        userName: 'Admin',
        sessionId: 'e69b81b5d4c04183b378a75fe42d8b06'
    },
    editor: {
        roles: ['editor'],
        // token: "sakuya",
        introduction: 'i am editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
        userName: 'editor',
        sessionId: 'e69b81b5d4c04183b378a75fe42d8b07'
    }
};
const newUserMao = {
    admin: {}
};
const userPermission = {
    data: [
        { contentType: 'view', content: 'dashboard' },
        { contentType: 'view', content: 'supportManage:appList:index' },
        { contentType: 'view', content: 'supportManage:userList:index' },
        { contentType: 'view', content: 'updateCenter:projectList:index' },
        { contentType: 'view', content: 'updateCenter:esealFirmware:index' }
    ]
};

const userPermissionByAdmin = [
    { contentType: 'view', content: 'dashboard' },
    { contentType: 'view', content: 'supportManage:appList:index' },
    { contentType: 'view', content: 'supportManage:userList:index' },
    { contentType: 'view', content: 'updateCenter:projectList:index' },
    { contentType: 'view', content: 'updateCenter:esealFirmware:index' }
];
const userPermissionByEditor = [
    { contentType: 'view', content: 'dashboard' },
    { contentType: 'view', content: 'supportManage:appList:index' }
    // {contentType: 'view', content: 'supportManage:userList:index'},
    // {contentType: 'view', content: 'updateCenter:projectList:index'},
    // {contentType: 'view', content: 'updateCenter:esealFirmware:index'}
];

export default {
    loginbyUser: (config) => {
        let { username } = JSON.parse(config.body);
        let response = {};
        if (username in userMap) {
            response = {
                code: 200,
                data: userMap[username],
                message: 'Login success, Welcome'
            };
        } else {
            response = {
                code: 200,
                data: null,
                message: 'Login failed, User does not exist'
            };
        }
        return response;
    },
    logout: () => {
        return {
            code: 200,
            data: {
                state: 1
            },
            message: 'Logout success'
        };
    },
    info: (config) => {
        let params = queryString.parse(config.url.replace(/^\S+(?=\?)/, ''));
        let response = {
            code: 200,
            data: userMap[params.username],
            message: 'Login success, Welcome'
        };
        return response;
    },
    permission: (config) => {
        let { roles } = JSON.parse(config.body);
        var permissionData = {};
        if (roles.indexOf('admin') !== -1) {
            permissionData.data = userPermissionByAdmin;
        } else {
            permissionData.data = userPermissionByEditor;
        }

        let response = {
            code: 200,
            message: 'get permission success',
            ...permissionData
        };
        return response;
    }
};
