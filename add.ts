#!/usr/bin/env ts-node
{
  let a:number = parseInt(process.argv[2])
  let b:number = parseInt(process.argv[3])
  if(isNaN(a) || isNaN(b)){
    console.log('error: type must be number')
    process.exit(1)
  }else if (b === 0){
    console.log('error: 0 is not be allow') 
    process.exit(2)
  }
  console.log(a+b)
  process.exit(0)
}