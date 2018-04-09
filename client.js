console.log('js loaded');

class Pizza {
    constructor(toppings = ['cheese']){
        this.toppings = toppings;
    }
    cost(){
        return 10 + (this.toppings.length - 1)*0.99;
    }
}

let cheesePizza = new Pizza();
console.log('cheese pizza ', cheesePizza);
console.log('price of cheese pizza ', cheesePizza.cost());

let basicPizza = new Pizza(['cheese', 'pineapple', 'mushrooms']);
console.log('A basic pizza ', basicPizza);
console.log('cost of basic pizza ', basicPizza.cost());

class Order {
    constructor(pizza){
        this.order = [pizza];
    }
    addPizza(pizza){
        this.order.push(pizza);
    }
    totalCost(){
        return this.order.reduce(function(totalCost, pizza){
            return totalCost += pizza.cost();
        }, 0);
    }
}
//make new order
let order1 = new Order(basicPizza);
//add pizza
order1.addPizza(cheesePizza);
//total cost
console.log('total cost of pizza ', order1.totalCost());




