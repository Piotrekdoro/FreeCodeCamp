function checkCashRegister(price, cash, cid) {
  
    // Variables setup
    let changeTotal=(cash-price)*100
    cid=cid.reverse()
    let status='OPEN'
    let curUnit=['ONE HUNDRED','TWENTY','TEN','FIVE','ONE','QUARTER','DIME','NICKEL','PENNY',]
    let curValue=[10000,2000,1000,500,100,25,10,5,1]
    let changeDue=[['ONE HUNDRED',0],['TWENTY',0],['TEN',0],['FIVE',0],['ONE',0],['QUARTER',0],['DIME',0],['NICKEL',0],['PENNY',0]]
    let curInDrawer=[]
    for(let i=0; i<cid.length; i++) {
      curInDrawer.push(Math.round(cid[i][1]*100))
    }
    let totalCID=curInDrawer.reduce((acc,curVal) => acc+curVal,0)
    let previousTotalCID=0
  
    // Counting change, recording cid, change total and change due, test for status key
    while(changeTotal>0) {

      previousTotalCID=totalCID

      for(let i=0; i<curValue.length; i++) {
        if(changeTotal%curValue[i]==0 && curInDrawer[i]!=0) {
          changeTotal-=curValue[i]
          curInDrawer[i]-=curValue[i]
          changeDue[i][1]+=curValue[i]/100
          break
        }
      }

    totalCID=curInDrawer.reduce((acc,curVal) => acc+curVal,0)
    if(totalCID==0 && changeTotal==0) {
      status='CLOSED'
    }
    if(totalCID==previousTotalCID && changeTotal!=0) {
      status='INSUFFICIENT_FUNDS'
      break
    }

    }
  
  //console.log(Math.round(changeDue[8][1]*10)/10)
    let change
    if(status=='OPEN') {
    change={status: status, change: changeDue.filter(item => item[1]!=0)}
    }
    if(status=='INSUFFICIENT_FUNDS') {
      change={status: status, change: []}
    }
    if(status=='CLOSED') {
      //changeDue.reverse().map(item => Math.round(item[1]*10)/10)
      change={status: status, change: changeDue.reverse().map(item => [item[0],Math.round(item[1]*10)/10])}
    }
    
    //console.log(changeDue.map(item => [item[0],Math.round(item[1]*10)/10])) 
    console.log(change)
    return change;
  }
  
 checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])