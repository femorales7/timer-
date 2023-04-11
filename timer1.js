// process.stdout.write('\x07');
const args = process.argv.splice(2).map(_ => parseInt(_))
if (args.length > 0){
  for (const arg of args){
    let timer = arg;
    if (timer > 0 && typeof timer === "number" ){
      setTimeout(() => {
        process.stdout.write('\x07')
        console.log(timer)
      }, timer * 1000)
      
    }

  }

}else  {
  console.log("Is necesary at less one number")
}

