
function Account(name, balance, IBAN) {
    this.name = name;
    this.balance = balance;
    this.IBAN =IBAN;
    
  }
  
  Account.prototype.deposit = function(amount) {
    if (this._isPositive(amount)) {
      this.balance += amount;
      return true;
    }
    return false;
  }
  
  Account.prototype.withdraw = function(amount) {
    if (this._isAllowed(amount)) {
      this.balance -= amount;
      return true;
    }
    return false;
  }
  Account.prototype.getBalance = function(){
      return this.balance;
  }
  
  
  
  Account.prototype._isPositive = function(amount) {
    const isPositive = amount > 0;
    if (!isPositive) {
      console.error('Amount must be positive!');
      return false;
    }
    return true;
  }
  
  Account.prototype._isAllowed = function(amount) {
    if (!this._isPositive(amount)) return false;
  
    const isAllowed = this.balance - amount >= 0;
    if (!isAllowed) {
      console.error('You have insufficent funds!');
      return false;
    }
    return true;
  }
  
