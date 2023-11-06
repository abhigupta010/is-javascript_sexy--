console.log(a);
b(); 
 function b(){
     let d = 20;
    console.log("foobar");
   return function c(){
        console.log(d);
    }
  };
  var a =10;
  let e = b();
  e();

 