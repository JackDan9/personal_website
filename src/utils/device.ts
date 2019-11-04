import enquireJs from 'enquire.js';

export const DEVICE_TYPE = {
    DESKTOP: 'desktop',
    TABLET: 'tablet',
    MOBILE: 'mobile'
};

export const deviceEnquire = function (callback:any) {
    const matchDesktop = {
        match: () => {
            callback && callback(DEVICE_TYPE.DESKTOP)
        }
    };

    const matchLablet = {
        match: () => {
            callback && callback(DEVICE_TYPE.TABLET)
        }
    };

    const matchMobile = {
        match: () => {
            callback && callback(DEVICE_TYPE.MOBILE)
        }
    };

    // screen and (max-wdith: 1087.99px)
    enquireJs
        .register('screen and (max_width: 576px)', matchMobile)
        .register('screen and (min_width: 576px) and (max-width: 1199px)', matchLablet)
        .register('screen and (min-wdith: 1200px)', matchDesktop)
};