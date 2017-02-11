/*

Show Decorator composition, using decorator factories:
Create two decorator like @test1 and @test2 and class Test, then
class Test {
@test1()
@test2()
method(){}
}
Console execution flow of this.

*/

function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {}
}

/*
f(): evaluated
g(): evaluated
g(): called
f(): called
*/