function checkCashRegister(price, cash, cid) {
  const currObj ={
    'ONE HUNDRED': 100,
    'TWENTY': 20,
    'TEN': 10,
    'FIVE': 5,
    'ONE': 1,
    'QUARTER': 0.25,
    'DIME': 0.1,
    'NICKEL': 0.05,
    'PENNY': 0.01
  };
let change = cash - price;
let register = Math.round(cid.reduce( (sum, curr) => sum + curr[1], 0)*100)/100;
console.log('Register: ', register);
console.log('Change: ', change);

if(change > register){
  return {status: "INSUFFICIENT_FUNDS", change: []};
}
if(change === register){
  return {status: "CLOSED", change: cid};

}

const resultObj = {change: []};
  for(let i = cid.length - 1; i >= 0; i--){
    console.log('temp: ', change);
    if(change >= cid[i][1] && cid[i][1] > 0){
      resultObj.change.push(cid[i]);
      change -= cid[i][1];
      change = Math.round(change * 100) / 100;

    } else if (change > currObj[cid[i][0]] && change <= cid[i][1] && cid[i][1] > 0){
      const deduct = Math.floor(change/currObj[cid[i][0]]) * currObj[cid[i][0]];
      console.log('deduct: ', deduct);
      resultObj.change.push([cid[i][0], deduct]);
      change -= deduct;
      change = Math.round(change * 100) / 100;

    }
  }
  console.log('Result: ', resultObj);
  console.log('End Change: ', change);
  if(change != 0){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  resultObj.status = 'OPEN';
  return resultObj;
};