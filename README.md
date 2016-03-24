### Pay Attention, This is Important

This package solves a longstanding issue in React, Flux, Redux and many other applications: preventDefault getting scattered all over your code. Simply pass your event handler through this function and it will automatically have its default prevented. JavaScript magic!

# Example

```js
var preventDefault = require('react-prevent-default');
var LinkClicker = React.createClass({
    render: function(){
        return <a href="#" onClick={preventDefault(doSomethingCool.bind(null, 1, 2, 3))}> Click me for something cool to happen with 1 2 and 3 </a>;
    },
});
```

With the above code, you won't see an unsightly hash appear in your page url. 

## WARNING: MAY ALSO WORK WITH NON-REACT CODE.

