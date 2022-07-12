
class Fibonacci {
    *execute (input, current = 0, next = 1) {
        //console.count('execute!')
        if (input === 0 ){
            return 0 
        }

        yield current //stepbystep return value = const expectedResult = [ 0, 1, 1, 2, 3]
        yield* this.execute(input -1, next, current + next) // * don't return value, only function delegation in stp
    }

}

module.exports = Fibonacci // exports , not export XD