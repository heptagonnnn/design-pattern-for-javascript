/*
创建型模式

简单工厂


简单工厂的原理是通过一个类生成器，来匹配类，而创建实例的工作则由匹配到的类实现
从而达到创建与使用分离
*/


const CLASS_ENUM = {
	FOO: "Foo",
	BAR: "Bar"
}

class Foo {
	constructor(props) {
		this.foo = props;
	}

	show() {
		console.log("Foo", this.foo);
	}
}

class Bar {
	constructor(props) {
		this.foo = props;
	}

	show() {
		console.log("Bar", this.foo);
	}
}

function simpleFactory(className, ...args) {

	switch (className) {
		case CLASS_ENUM.FOO:
			return new Foo(...args);
		case CLASS_ENUM.BAR:
			return new Bar(...args);
	}
}


const a = simpleFactory(CLASS_ENUM.FOO, 1);
a.show();
const b = simpleFactory(CLASS_ENUM.BAR, 2);
b.show();


/*
缺点
需要手动维护枚举，不符合开闭原则
*/
