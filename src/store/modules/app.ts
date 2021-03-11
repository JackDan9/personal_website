import Vue from 'vue';
import { SHOWLOADING, HIDELOADING } from '../../store/mutation-types';
import state, { State } from '../../store/state';

export interface App {
  state: any,
  mutations: any,
  actions: any,
}

const app:App = {
  state: state,
  mutations: {
    SHOWLOADING: (state: State) => {
      state.isLoadingShow = true;
    },
    HIDELOADING: (state: State) => {
      state.isLoadingShow = false;
    }
  },
  actions: {
    showLoading({commit, state}) {
      commit('SHOWLOADING');
    },
    hideLoading({commit, state}) {
      commit('HIDELOADING');
    }
  },
};

export default app;

// import Vue from 'vue';
// import { 
//     SIDEBAR_TYPE,
//     DEFAULT_THEME,
//     DEFAULT_LAYOUT_MODE,
//     DEFAULT_COLOR,
//     DEFAULT_COLOR_WEAK,
//     DEFAULT_FIXED_HEADER,
//     DEFAULT_FIXED_HEADER_HIDDEN,
//     DEFAULT_FIXED_SIDEMENU,
//     DEFAULT_CONTENT_WIDTH_TYPE,
//     DEFAULT_MULTI_TAB
// } from '@/store/mutation-types';
// import state, { State } from '@/store/state';

// export interface App {
//     state: any,
//     mutations: any,
//     actions: any,
// };

// const app:App = {
//     state: state,
//     mutations: {
//         SET_SIDEBAR_TYPE: (state: State, type: boolean) => {
//             state.sidebar = type;
//             (Vue as any).ls.set(SIDEBAR_TYPE, type);
//         },
//         CLOSE_SIDEBAR: (state: State) => {
//             (Vue as any).ls.set(SIDEBAR_TYPE, true);
//             state.sidebar = false;
//         },
//         TOGGLE_DEVICE: (state: State, device:string) => {
//             state.device = device;
//         },
//         TOGGLE_THEME: (state:State, theme:string) => {
//             (Vue as any).ls.set(DEFAULT_THEME, theme);
//             state.theme = theme;
//         },
//         TOGGLE_LAYOUT_MODE: (state:State, layout:string) => {
//             (Vue as any).ls.set(DEFAULT_LAYOUT_MODE, layout);
//             state.layout = layout;
//         },
//         TOGGLE_FIXED_HEADER: (state:State, fixed: boolean) => {
//             (Vue as any).ls.set(DEFAULT_FIXED_HEADER, fixed);
//             state.fixedHeader = fixed;
//         },
//         TOGGLE_FIXED_HEADER_HIDDEN: (state:State, show:boolean) => {
//             (Vue as any).ls.set(DEFAULT_FIXED_HEADER_HIDDEN, show);
//             state.autoHideHeader = show;
//         },
//         TOGGLE_FIXED_SIDEBAR: (state:State, fixed:boolean) => {
//             (Vue as any).ls.set(DEFAULT_FIXED_SIDEMENU, fixed);
//             state.fixSiderbar = fixed;
//         },
//         TOGGLE_CONTENT_WIDTH: (state: State, type:string) => {
//             (Vue as any).ls.set(DEFAULT_CONTENT_WIDTH_TYPE, type);
//             state.contentWidth = type;
//         },
//         TOGGLE_COLOR: (state:State, color: string) => {
//             (Vue as any).ls.set(DEFAULT_COLOR, color);
//             state.color = color;
//         },   
//         TOGGLE_WEAK: (state:State, flag: boolean) => {
//             (Vue as any).ls.set(DEFAULT_COLOR_WEAK, flag);
//             state.weak = flag;
//         },
//         TOGGLE_MULTI_TAB: (state:State, bool:boolean) => {
//             (Vue as any).ls.set(DEFAULT_MULTI_TAB, bool);
//             state.multiTab = bool;
//         },
//     },
//     actions: {
//         setSidebar ({ commit }:any, type:string) {
//             commit('SET_SIDEBAR_TYPE', type);
//         },
//         CloseSidebar ({ commit }:any) {
//             commit('CLOSE_SIDEBAR');
//         },
//         ToggleDevice ({ commit }:any, theme:string) {
//             commit('TOGGLE_THEME', theme);
//         },
//         ToggleLayoutMode ({ commit }:any, mode:string) {
//             commit('TOGGLE_ALYOUT_MODE', mode);
//         },
//         ToggleFixedHeader ({ commit }:any, fixedHeader:boolean) {
//             if (!fixedHeader) {
//                 commit('TOGGLE_FIXED_HEADER_HIDDEN', false);
//             }
//             commit('TOGGLE_FIXED_HEADER', fixedHeader);
//         },
//         ToggleFixedHeaderHidden ({ commit }:any, show: boolean) {
//             commit('TOGGLE_FIXED_HEADER_HIDDEN', show);
//         },
//         TogglerFixedSiderbar ({ commit }:any, fixSiderbar:boolean) {
//             commit('TOGGLE_FIXED_SIDERBAR', fixSiderbar);
//         },
//         ToggleContentWidth ({ commit }:any, type:boolean) {
//             commit('TOGGLE_CONTENT_WIDTH', type);
//         },
//         ToggleColor ({ commit }:any, color:string) {
//             commit('TOGGLE_COLOR', color);
//         },
//         ToggleWeak ({ commit }:any, weakFlag:boolean) {
//             commit('TOGGLE_WEAK', weakFlag);
//         },
//         ToggleMultiTab ({ commit }:any, bool:boolean) {
//             commit('TOGGLE_MULTI_TAB', bool);
//         }, 
//     },
// };

// export default app;
