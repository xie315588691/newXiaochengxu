import { RECEIVE_LIST, MOVICE_ARR } from './mutation-type'

export default {
    [RECEIVE_LIST](state, { list_data }) {
        state.listTmp = list_data
    },
    [MOVICE_ARR](state, data) {
        state.moviesArr = data
    }
}