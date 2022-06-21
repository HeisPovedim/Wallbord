import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex' 
import axios from 'axios'
import config from '../../config.json'
import {Screen, Event} from '../types'

export type State = {
  allScreens: Screen[],
  sortedScreens: Event[],
  appLang: string
}
export const key: InjectionKey<Store<State>> = Symbol('Typed vuex injection key')
export default createStore<State>({
    state: ()  => ({
        allScreens: [], 
        sortedScreens: [],
        appLang: ""
    }
    ),
  getters: {
      getBoard: (state) => state.allScreens ?? [],
      getsortedScreens: (state) => state.sortedScreens ?? [],
    },
    mutations: {
      SET_PRIORITY: (state, payload) => {
        const flatScreens: Event[] = [];
        for( let i = 0; i < payload.length; i++ ){
          for(let j = 0; j < payload[i].eventData.length; j++){
            const eventData = payload[i].eventData[j];
            const completedEvent: Event = {
              priority: state.allScreens[i].priority,
              screenType: state.allScreens[i].screenType,
              showPeriod: state.allScreens[i].showPeriod,
              repetition: state.allScreens[i].repetition,
              importance: state.allScreens[i].importance,
              photo: (eventData.dataEN ?? eventData.dataRU)!.photo,
              empoyee: (eventData.dataEN ?? eventData.dataRU)!.empoyee,
              eventDate: (eventData.dataEN ?? eventData.dataRU)!.eventDate,
              msgTitl: (eventData.dataEN ?? eventData.dataRU)!.msgTitl,
              msgContent: (eventData.dataEN ?? eventData.dataRU)!.msgContent,
            }
            flatScreens.push(completedEvent);
          }
        }

        const topPriorityScreens= flatScreens.filter((element:Event) => element.priority === 1);
        const middlePriorityScreens = flatScreens.filter((element:Event) => element.priority === 2);
        const lowPriorityScreens = flatScreens.filter((element:Event) => element.priority === 3);
        const sortedScreens:Event[] = [...topPriorityScreens, ...middlePriorityScreens, ...topPriorityScreens, ...middlePriorityScreens, ...topPriorityScreens, ...middlePriorityScreens, ...topPriorityScreens, ...lowPriorityScreens];
        for (let i = sortedScreens.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = sortedScreens[i];
                sortedScreens[i] = sortedScreens[j];
                sortedScreens[j] = temp;
        }
        state.sortedScreens = sortedScreens;
      },
      
      SET_CHECKING_LANGUAGE: (state) => {
        const userLang = navigator.language.toLowerCase();
        state.appLang = userLang;
      },

      SET_DROPSCREENS: (state, payload) => {
        state.sortedScreens.slice();
    },
      SET_SCREENS: (state, payload) => state.allScreens = payload
  },
    actions: { 
      getApiScreens: async ({commit,state}) => {
        const arrayScreens = await (await (axios.get(`${config.BASE_API_URL}/allevents/` + state.appLang))).data;
        commit('SET_SCREENS', arrayScreens);
        commit('SET_PRIORITY', arrayScreens);
      }
    }
})
