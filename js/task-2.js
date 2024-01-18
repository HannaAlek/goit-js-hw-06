class Storage{
    #item=[];
    getItems(){
        return this.#item;
    };
    addItem(newItem){
        this.#item.push(newItem);
    };
    removeItem(itemToRemove){
        constructor(item){this.#item=item};
        this.#item=this.#item.filter(product=>product!==itemToRemove)
    }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]