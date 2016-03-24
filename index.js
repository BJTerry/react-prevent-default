module.exports = function preventDefault(handler){
    return function(){
        var last = arguments[arguments.length - 1];
        if(last && last.preventDefault){
            last.preventDefault();
        }
        return handler.apply(this, arguments);
    }
};
