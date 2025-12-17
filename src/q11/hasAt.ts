const a =  process.argv[2] || `` ;
if( a.include(`@`)){

    console.log(`Has @`);
}else{
    console.log(`No @`);
}
