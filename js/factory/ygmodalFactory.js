/**
 * Created by dell on 8/13/2016.
 */
angular.module('modalApp')
    .factory('YgModal', function(){
        var modal  ={};
        var state = {};
        state.isOpen = false;
        modal.open = function(title, body){
            state.title = title;
            state.body = body;
            state.isOpen = true;
        };
        modal.close = function(){
            state.isOpen = false;
        };
        modal.getModalState = function(){
            return state;
        };
        modal.confirm = function(callback){
            state.callback = callback;
        };
        return modal;
    });