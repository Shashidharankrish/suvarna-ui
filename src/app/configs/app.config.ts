import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const BASE_URL = '/suvarna/api';

export const AppConfig: any = {
    routes: {
        dashboard: '',
        login: 'login',
        listReports: 'listReports',
        error404: '404',
        privacy: 'privacy',
        my_account: 'profile',
        admin: 'admin'
    },
    login: {
        signin: BASE_URL + '/auth/signin/',
        forgot_password: BASE_URL + '/auth/forgotpassword',
        reset_password: BASE_URL + '/auth/updatepassword',
        edit_profile: BASE_URL + '/auth/user',
        signout: BASE_URL + '/auth/user/signout'
    },
    listReports: {

    },
    reports: {

    },
    dashboard: {
        analysisCardCount: BASE_URL + '/analysisCardCount',
        menu : BASE_URL + '/menu',
        info : BASE_URL + '/info',
    },

    error: {
        serverError: 'Server responded with 0 code.',
        fileTypeError: 'You can\'t upload files of this type.',
        fileUploadError: 'Upload canceled.',
        folderStructureError: 'Invalid Folder Structure.',
        mismatchCsvError: 'Case/patient data not present in csv/xls file',
        bulkUploadServerError: 'Error occured while trying to proxy to: localhost:4200/analyses/bulk',
        noAccess: 'User does not have access to update analyses.'
    },

    footer_text : `Copyright © 2023-${new Date().getFullYear()} SDK Technologies | All Rights Reserved`

  };
