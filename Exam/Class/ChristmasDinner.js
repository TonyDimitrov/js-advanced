class ChristmasDinner {
    constructor(budget) {
        this._budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
        this.budget = budget;
    }

    get budget() {
        return this._budget;
    }

    set budget(budget) {
        if (budget < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = budget;
    }

    shopping(product) {
        if (product[1] > this.budget) {
            throw new Error("Not enough money to buy this product");
        }
        this.budget -= product[1];
        this.products.push(product[0]);
        return `You have successfully bought ${product[0]}!`;
    }

    recipes(recipe) {
        let recipeName = recipe.recipeName;
        let productsList = recipe.productsList;

        let hasAllProducts = true;

        for (const pr of productsList) {
            if (!this.products.includes(pr)) {
                hasAllProducts = false;
                break;
            }
        }

        if (!hasAllProducts) {
            throw new Error("We do not have this product");
        }
        let dish = {
            [recipeName]: productsList,
        };
        this.dishes.push(dish);
        return `${recipeName} has been successfully cooked!`;
    }
    inviteGuests(name, dish) {
        let existingdish = this.dishes.filter(d => Object.keys(d)[0] === dish);
        if (existingdish.length === 0) {
            throw new Error("We do not have this dish");
        }
        let alreadyInvited = Object.keys(this.guests).includes(name);
        if (alreadyInvited) {
            throw new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance(){
        let res = '';
        for (const key in this.guests) {
            let dishName = this.guests[key];
            let dishObj = this.dishes.filter(d => d.hasOwnProperty(dishName))[0];
            let products = dishObj[dishName];
            res += `${key} will eat ${dishName}, which consists of ${products.join(', ')}\n`;
        }
        return res.trim();
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
