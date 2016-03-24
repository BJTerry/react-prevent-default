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
    it('calls preventDefault on the last argument', function(){
        var spy = chai.spy(function(){});
        var e = {
            preventDefault: spy,
        };
        var f = pd(function(){});
        f(1, 2, e);
        expect(spy).to.have.been.called();
    });
});
