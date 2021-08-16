// function delay(time) {
//     return new Promise( function(resolve,reject){
//     setTimeout( resolve, time );
//     } );
//     }
//     delay( 100 ) 
//     .then( function STEP2(){
//     console.log( "step 2 (after 100ms)" );
//     return delay( 200 );
//     } )
//     .then( function STEP3(){
//     console.log( "step 3 (after another 200ms)" );
//     } )
//     .then( function STEP4(){
//     console.log( "step 4 (next Job)" );
//     return delay( 50 );
//     } )
//     .then( function STEP5(){
//     console.log( "step 5 (after another 50ms)" );
//     } );






//     function delay(hobby) {
//         return new Promise( function(resolve,reject){
//         setTimeout( resolve, hobby );
//         } );
//         }
//         delay( 100 ) 
//         .then( function HOBBY2(){
//         console.log( "READING BOOKS" );
//         return delay();
//         } )
//         .then( function HOBBY3(){
//         console.log( "LISENING MUSIC" );
//         } )
//         .then( function HOBBY4(){
//         console.log( "PAINTING" );
//         return delay( 50 );
//         } )
//         .then( function HOBBY5(){
//         console.log( "DANSING" );
//         } );



        


let add = function(x, y) {
    return new Promise((resolve,reject) => {
      let sum = x + y;
      if (sum) {
        resolve(sum);
      }
      else {
        reject(Error("could not add the two values!"));
      }
    });
  };
  
  let subtract = function(x, y) {
    return new Promise((resolve, reject) => {
      let sum = x - y;
      if (sum) {
        resolve(sum);
      }
      else {
        reject(Error("Could not subtract the two values!"));
      }
    });
  };
  
 
  add(2,2)
    .then((added) => {
      
      return subtract(added, 3);
    })
    .then((subtracted) => {
      
      return add(subtracted, 5);
    })
    .then((added) => {
      
      return added * 2;    
    })
    .then((result) => {
      
      console.log("My result is ", result);
    })
    .catch((err) => {
     
      console.log(err);
    });






   
    
      
   