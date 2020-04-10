import {observable, action} from 'mobx';

export default class ActionStore {
    /*constructor(){
        this.result
    }*/

    @observable result

    @action increase = (params) => {
        console.log(params, 'increase')
        this.result = params
    }

    @action decrease = () => {
        console.log('decrease')
    }

}