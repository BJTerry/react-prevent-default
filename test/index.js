var chai = require('chai'),
    expect = chai.expect,
    spies = require('chai-spies'),
    pd = require('../index');
chai.use(spies);

describe('preventDefault', function() {
    it('returns a function', function(){
        var f = pd(function(){});
        expect(typeof f).to.equal('function');
    });
    it('calls preventDefault on the first argument that supports preventDefault', function(){
        var spy = chai.spy(function(){});
        var e = {
            preventDefault: spy,
        };
        var f = pd((function(){}).bind(null, 1, 2, 3));
        f(e); // This is what the browser does
        expect(spy).to.have.been.called();
    });
});
