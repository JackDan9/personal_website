import Vue from 'vue';
import { SHOWSIDEBAR, HIDESIDEBAR } from '../mutation-types';
import state, { State } from '../../store/state';

export interface Sidebar {
  state: any,
  mutations: any,
  actions: any,
}

const sidebar: Sidebar = {
  state: state,
  mutations: {
    HANDLESIDEBAR: (state: State) => {
      state.isOpenSideBar = !state.isOpenSideBar;
    },
    SHOWSIDEBAR: (state: State) => {
      state.isOpenSideBar = true;
    },
    HIDESIDEBAR: (state: State) => {
      state.isOpenSideBar = false;
    }
  },
  actions: {
    handleSidebar({commit, state}) {
      commit('HANDLESIDEBAR');
    },
    showSidebar({commit, state}) {
      commit('SHOWSIDEBAR');
    },
    hideSidebar({commit, state}) {
      commit('HIDESIDEBAR')
    }
  },
};

export default sidebar;
