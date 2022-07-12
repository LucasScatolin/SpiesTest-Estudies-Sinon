const Fibonacci = require ('./fibonacci')
const sinon = require('sinon')
const assert = require('assert')
;
(async () => {
    {
        const fibonacci = new Fibonacci()
        const spy = sinon.spy(fibonacci, fibonacci.execute.name) //create spy analisy 
        for ( const i of fibonacci.execute(3)){} //initial execute = 0 => 0,1,2,3 , run multiple times
        //fibonacci.execute(3))//initial execute = 0 => 0,1,2,3 - run once
        const expectedCallCount = 4
        assert.deepStrictEqual(spy.callCount, expectedCallCount)
    }
    {
        const fibonacci = new Fibonacci()
        const spy = sinon.spy(fibonacci, fibonacci.execute.name) //create spy analisy 
        const [...results ]=  fibonacci.execute(5)

        // [0] input = 5, current = 0, next = 1
        // [1] input = 4, current = 1, next = 1
        // [2] input = 3, current = 1, next = 2
        // [3] input = 2, current = 2, next = 1
        // [4] input = 1, current = 3, next = 3
        // [5] input = 0 - break

        const call = spy.getCall(2)
        const { args } = spy.getCall(2)
        const expectedResult = [ 0, 1, 1, 2, 3]
        const expectedParams = Object.values({
            input: 3,
            current: 1,
            next: 2
        })

        assert.deepStrictEqual(args, expectedParams)
        assert.deepStrictEqual(results, expectedResult)
    }
})()


//Generators, executa uma vez, e cria um objeto generator
// utlizando iteradores assync, .next, for await, for off. 