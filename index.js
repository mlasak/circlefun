function fun2 () {
    return 42;
}

function fun1 () {
    return fun2();
}

module.exports = {
    fun1,
    fun2,
}