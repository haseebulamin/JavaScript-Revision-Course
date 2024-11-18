class Account{
    #balance = 0;

    deposit(amount){
        if(amount>0) this.#balance += amount;
    }

    totalAmount(){
        return this.#balance;
    }
}

const ali = new Account();
ali.deposit(9847);
console.log(ali.totalAmount());