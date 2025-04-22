class BankAccount {
    // Приватні поля, недоступні напряму
    private _balance: number;
    private _accountHolder: string;
    private _transactions: { date: Date; amount: number; type: string }[] = [];
    private _pin: string;
  
    // Захищене поле, доступне лише в підкласах
    protected accountType: string;
  
    constructor(
      accountHolder: string,
      initialDeposit: number,
      pin: string,
      accountType: string = "Basic"
    ) {
      this._accountHolder = accountHolder;
      this._balance = initialDeposit;
      this._pin = pin;
      this.accountType = accountType;
      this.recordTransaction(initialDeposit, "Deposit");
    }
  
    // Публічний геттер для балансу (не дає змінювати баланс напряму)
    public get balance(): number {
      return this._balance;
    }
  
    // Публічний геттер для отримання імені власника рахунку
    public get accountHolder(): string {
      return this._accountHolder;
    }
  
    // Сеттер для оновлення PIN-коду з простою валідацією
    public set pin(newPin: string) {
      if (newPin.length >= 4) {
        this._pin = newPin;
      } else {
        console.log("PIN повинен містити щонайменше 4 символи.");
      }
    }
  
    // Публічний метод для внесення коштів
    public deposit(amount: number): void {
      if (amount > 0) {
        this._balance += amount;
        this.recordTransaction(amount, "Deposit");
      } else {
        console.log("Сума депозиту має бути більшою за 0.");
      }
    }
  
    // Публічний метод для зняття коштів (з валідацією)
    public withdraw(amount: number, pin: string): void {
      if (pin !== this._pin) {
        console.log("Невірний PIN!");
        return;
      }
      if (amount > 0 && amount <= this._balance) {
        this._balance -= amount;
        this.recordTransaction(amount, "Withdraw");
      } else {
        console.log("Недостатньо коштів або некоректна сума.");
      }
    }
  
    // Публічний метод для отримання історії транзакцій
    public getTransactionHistory(
      pin: string
    ): { date: Date; amount: number; type: string }[] | null {
      if (pin !== this._pin) {
        console.log("Невірний PIN!");
        return null;
      }
      return this._transactions;
    }
  
    // Приватний метод для запису транзакцій (не доступний ззовні)
    private recordTransaction(amount: number, type: string): void {
      this._transactions.push({
        date: new Date(),
        amount: amount,
        type: type,
      });
    }
  
    // Захищений метод для отримання типу рахунку (доступний у підкласах)
    protected getAccountType(): string {
      return this.accountType;
    }
  }
  
  // Створимо підклас для преміум-рахунку, який має додаткові можливості
  class PremiumBankAccount extends BankAccount {
    constructor(accountHolder: string, initialDeposit: number, pin: string) {
      super(accountHolder, initialDeposit, pin, "Premium");
    }
  
    // Метод для отримання типу рахунку
    public showAccountType(): void {
      console.log(`Тип рахунку: ${this.getAccountType()}`);
    }
  
    // Метод для нарахування бонусів на баланс (тільки для преміум-рахунку)
    public applyBonus(): void {
      const bonus = this.balance * 0.05; // 5% бонус
      this.deposit(bonus);
      console.log(`Нараховано бонус у розмірі: ${bonus}`);
    }
  }
  
  // Тестування функціональності
  const myAccount = new PremiumBankAccount("John Doe", 1000, "1234");
  
  // Отримуємо баланс і додаємо бонус
  console.log(myAccount.balance); // 1000
  myAccount.applyBonus(); // Нараховується бонус
  
  // Поповнення та зняття коштів
  myAccount.deposit(500); // Поповнюємо рахунок на 500
  console.log(myAccount.balance); // 1550
  
  myAccount.withdraw(200, "1234"); // Знімаємо 200
  console.log(myAccount.balance); // 1350
  
  // Неправильний PIN
  myAccount.withdraw(100, "4321"); // Невірний PIN!
  
  // Історія транзакцій з правильним PIN
  console.log(myAccount.getTransactionHistory("1234"));
  
  // Спроба зміни PIN-коду
  myAccount.pin = "5678"; // Змінюємо PIN
  myAccount.withdraw(100, "5678"); // Успішно знімаємо з новим PIN
  
  // Тип рахунку
  myAccount.showAccountType(); // Premium