export interface State {
    sidebar: boolean,
    device: string,
    theme: string,
    layout: string,
    contentWidth: string,
    fixedHeader: boolean,
    fixSiderbar: boolean,
    autoHideHeader: boolean,
    color: string | null,
    weak: boolean,
    multiTab: boolean
};

// Initialize state data
const state: State = {
    sidebar: false,
    device: 'desktop',
    theme: 'dark',
    layout: '',
    contentWidth: '',
    fixedHeader: false,
    fixSiderbar: false,
    autoHideHeader: true,
    color: null,
    weak: false,
    multiTab: false
}

export default state;
