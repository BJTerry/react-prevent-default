module.exports = function preventDefault(handler){
    return function(){
        for(var x = 0; x < arguments.length; x++){
            var e = arguments[x];
            if(e && e.preventDefault){
                e.preventDefault();
                break;
            }
        }
        return handler.apply(this, arguments);
    };
};
