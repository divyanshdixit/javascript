// *
// * *
// * * *
// * * * *
// * * * * *

// 1
// 12
// 123
// 1234
// 12345

// var star = '';

// for(i=1;i<=5;i++){ // i=2
//     for(j=1;j<=i; j++){ // j <= 2
//         star = star + '* ' // * *
//     }
//     console.log(star);
//     star = '';
// }

//         *
//       * *
//     * * * 
//   * * * *
// * * * * *


//      *
//     * *
//    * * *
//   * * * *
//  * * * * *

var star = '';

// for(i=5;i>=1;i--){
//     for(j=i; j>=1; j--){
//         star = star + '* '
//     }
    
//     console.log(star)
//     star = '';
// }


// console.log('object')
var space = '';
var star = '*';
var count = 4;
var i, j;
// hme hr line me total 9 elements chahiye aur first line me ek * star hai means baki sare space honge (8 space 1 star)
// next line 2 star ke beech me 1 space hai (2 star + 1 space = 3 elements ho gye) bache 6 elements to ye 6 space hai (6 space + 2 star with space)
// next line 3 star ke beech me 2 space hai (3 star + 2 space = 5 elements) bache 4 element to ye 4 space hia (4 space + 3 star with space)

for(i=1; i<=5;i++){
   
    for(j=1; j<=count; j++){
        // space = space + ' ';
        space= ` ${space}`;
        document.write(space);
    }

    space = space + star; // &&&&*
    star = star + ' *';

    console.log(space) // &&&&*
    space = '';
    count = count - 1; // 4-1 = 3

}

// * * * * *
//   * * * *
//     * * *
//       * *
//         *