"use strict";

 const logItems = function(items) {
     let i = 1;
     for ( const item of items) {
         console.log(`${i} - ${item}`);
         i++;
     }
 };

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);