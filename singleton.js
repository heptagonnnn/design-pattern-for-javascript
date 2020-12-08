/*

创建型模式

单例模式
*/

// 1. 单例类
(
	function () {
		let single = null;

		class Singleton {
			constructor(foo) {
				if (single) {
					console.log("instance existed");
					return single;
				}

				this.foo = foo;
				single = this;
			}


			static getInstance(...args) {
				if (single) {
					return single;
				}

				return new Singleton(...args);
			}
		}


		// test

		const a = new Singleton(1);
		console.log(a);
		const b = new Singleton(2);
		console.log(b);
		const c = Singleton.getInstance();
		console.log(c);
	}
);

// 2. 有限单例
(
	function () {

		const pool = [];
		const MAX_LENGTH = 3;

		class Multitcm {
			constructor(foo) {

				if (pool.length === MAX_LENGTH) {
					console.error("pool max length");
					// 随便返回一个
					const index = Math.floor(Math.random() * 3);
					return pool[index];
				}


				this.foo = foo;
				console.log(this);
				pool.push(this);
			}

			static getInstance(...args) {
				if (pool.length < MAX_LENGTH) {
					return new Multitcm(...args);
				} else {
					const index = Math.floor(Math.random() * 3);
					return pool[index];
				}
			}
		}


		const a = new Multitcm(1);
		const b = new Multitcm(2);
		const c = new Multitcm(3);
		const d = new Multitcm(4);
		const e = Multitcm.getInstance();


		console.log(pool);
		console.log(a, b, c, d, e);
	}
);



/*
单例模式典型应用场景

vuex/redux --- 全局状态管理
Websocket --- 全局长链

有限多例模式典型应用场景

pool模式，入线程池，请求池等

*/
