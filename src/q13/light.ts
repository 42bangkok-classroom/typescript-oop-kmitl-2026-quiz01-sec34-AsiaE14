const a = process.argv[2] || ``;
if(a == `red`){
console.log(`Stop`)
}else if( a ==`yellow`){
    console.log(`Caution`)
}else if(a == 'green'){
    console.log(`Go`)
}else( console.log(`Unknown`))

