import enquireJs from 'enquire.js';

export enum DeviceType {
    Mobile,
    DeskTop,
}

export const DEVICE_TYPE = {
    DESKTOP: 'desktop',
    TABLET: 'tablet',
    MOBILE: 'mobile',
};

// export const deviceEnquire = function(callback: any) {
export const deviceEnquire = (callback?: any) => {
    const matchDesktop = {
        match: () => {
            callback(DEVICE_TYPE.DESKTOP);
            // callback && callback(DEVICE_TYPE.DESKTOP);
        },
    };

    const matchLablet = {
        match: () => {
            callback(DEVICE_TYPE.TABLET);
            // callback && callback(DEVICE_TYPE.TABLET);
        },
    };

    const matchMobile = {
        match: () => {
            callback(DEVICE_TYPE.MOBILE);
            // callback && callback(DEVICE_TYPE.MOBILE);
        },
    };

    // screen and (max-wdith: 1087.99px)
    enquireJs
        .register('screen and (max_width: 576px)', matchMobile)
        .register('screen and (min_width: 576px) and (max-width: 1199px)', matchLablet)
        .register('screen and (min-wdith: 1200px)', matchDesktop);
};
