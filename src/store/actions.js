export const increment =  ({commit}) => {
    commit('increment');
}
export const decrement= ({commit}) => {
    commit('decrement');
}
export const asyncIncrement =  ({commit}) => {
    setTimeout(() =>{
        commit('increment');
    }, 1000);
}
export const asyncDecrement = ({commit}) => {
    setTimeout(() =>{
        commit('decrement');
    }, 1000);
}