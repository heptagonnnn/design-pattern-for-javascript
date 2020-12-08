/*

创建型模式

工厂方法模式

特点，两个抽象，多个具体
即 抽象工厂接口，抽象产品接口
任意多个具体实现类

优点
只要知道工厂的名字，就可以获得对应的实例，无需关注创建过程
解耦好，高层模块只要知道产品的抽象类，而无需关心其具体的实现类

缺点
难以理解
一种工厂只能生产一种产品


本模式的核心是抽象接口，所以以ts来实现
*/
var ProductA = /** @class */ (function () {
    function ProductA() {
    }
    ProductA.prototype.show = function () {
        console.log("ProductA");
    };
    return ProductA;
}());
var ProductB = /** @class */ (function () {
    function ProductB() {
    }
    ProductB.prototype.show = function () {
        console.log("ProductB");
    };
    return ProductB;
}());
var FactoryA = /** @class */ (function () {
    function FactoryA() {
    }
    FactoryA.prototype.getProduct = function () {
        return new ProductA();
    };
    return FactoryA;
}());
var FactoryB = /** @class */ (function () {
    function FactoryB() {
    }
    FactoryB.prototype.getProduct = function () {
        return new ProductB();
    };
    return FactoryB;
}());
var af = new FactoryA();
var a = af.getProduct();
a.show();
var bf = new FactoryB();
var b = bf.getProduct();
b.show();
