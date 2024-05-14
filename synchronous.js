// SYNCHRONOUS
// function f1()
// {
//     console.log("hello");
// }
// function f2(callback)
// {
//     console.log("finished");
//     callback()
// }
// f2(f1);
// asynchronous
// function f1()
// {
//     console.log("hello")
// }
// function f2()
// {
//     setTimeout(f1,1000);
//     console.log("Finished")
// }
// f2()
function add(x,y){
    return x+y;
}
function sub(x,y)
{
    return  x-y;

}
function mul(x,y)
{
    return x*y;
}
function div(x,y)
{
    return x/y;
}
function  mod(x,y)
{
    return x%y;
}
function compute(callback,x,y)
{
return   callback(x,y);



}
console.log(compute(add,2,4))
console.log(compute(sub,2,4))
console.log(compute(mul,2,4))
console.log(compute(div,2,4))
console.log(compute(mod,2,4))