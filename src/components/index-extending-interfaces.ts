/* extending interfaces */

interface HasFormatter {
  format(): string;
}

interface Bill extends HasFormatter {
  id: number | string;
  amount: number;
  server: string;
}

const user = {
  id: 1,
  format(): string {
    return `This user has id of ${this.id}`;
  },
};

const bill: Bill = {
  id: 2,
  amount: 50,
  server: "mario",
  format(): string {
    return `Bill with id ${this.id} and amount ${this.amount} to pay`;
  },
};

function printFormatted(val: HasFormatter): void {
  console.log(val.format());
}

function printBill(bill: Bill): void {
  console.log(`server: ${bill.server} `);
  console.log(bill.format);
}
printFormatted(user);
printFormatted(bill);
printFormatted(bill);

printBill(bill);

/* 
//----------------------
// extending interfaces
//----------------------

interface hasFormatter {
	format(): string
}

interface Bill extends hasFormatter {
	id: string | number
	amount: number
	server: string
}

const user = {
	id: 1,
	format(): string {
		return `This user has an id of ${this.id}`
	},
}

const bill = {
	id: 2,
	amount: 50,
	server: 'mario',
	format(): string {
		return `Bill with id ${this.id} has £${this.amount} to pay`
	},
}

function printFormatted(val: hasFormatter): void {
	console.log(val.format())
}

function printBill(bill: Bill): void {
	console.log('server:', bill.server)
	console.log(bill.format())
}

// testing the functions
printFormatted(user)
printFormatted(bill)
// printBill(user) --> not allowed
printBill(bill)
*/
