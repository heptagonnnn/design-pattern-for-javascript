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


interface IFactory {
	getProduct(any): IProduct;
}

interface IProduct {
	show(): void;
}


class ProductA implements IProduct {
	constructor() {
	}
	
	show() {
		console.log("ProductA");
	}
}

class ProductB implements IProduct {
	constructor() {
	}
	
	show() {
		console.log("ProductB");
	}
}

class FactoryA implements IFactory {
	getProduct() {
		return new ProductA();
	}
}

class FactoryB implements IFactory {
	getProduct() {
		return new ProductB();
	}
}

const af = new FactoryA();

const a = af.getProduct();

a.show();

const bf = new FactoryB();

const b = bf.getProduct();

b.show();
