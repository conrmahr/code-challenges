// https://buttondown.email/cassidoo/archive/nothing-will-work-unless-you-do-maya-angelou/

// You went on a vacation with friends. Each of you paid for certain meals on the trip for the group. Write a function that determines who owes money to whom so that everyone pays equally.

let receipts = [
  { name: 'Ximena', paid: 45 },
  { name: 'Clara', paid: 130 },
  { name: 'Ximena', paid: 100 },
  { name: 'Cassidy', paid: 140 },
  { name: 'Cassidy', paid: 76 },
  { name: 'Clara', paid: 29 },
  { name: 'Ximena', paid: 20 },
]

function whoOwes(ledger) {
  let bank = new Map();

  ledger.filter((e) => {
    if (!bank.has(e.name)) {
      bank.set(e.name, e.paid)
    } else {
      bank.set(e.name, bank.get(e.name) + e.paid)
    }
  }
  );
  
  const total = Object.keys(ledger).reduce((previous, key) => {
    return previous + ledger[key].paid;
  }, 0);
  
  bank = new Map([...bank.entries()].sort((a, b) => b[1] - a[1]));
  const payee = bank.keys().next().value;
  const owed = Math.round(total / bank.size);
  let message = [];
  
  bank.forEach((key, val) => {
    if (payee !== val) {
      message.push(`${val} owes ${payee} $${owed - key}`);
    }
  });
  
  return message.join(', ');
}

console.log(whoOwes(receipts));
//'Clara owes Cassidy $21, Ximena owes Cassidy $15