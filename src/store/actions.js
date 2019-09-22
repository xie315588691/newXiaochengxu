import { RECEIVE_LIST,MOVICE_ARR } from './mutation-type.js'
import  listData  from '../data/data-list.js'

export default {
    getList({ commit }) {
        commit(RECEIVE_LIST, listData)
    },
    getMovieList({commit},data){
        commit(MOVICE_ARR,data)
    }
}