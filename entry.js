
// --- Part 1----

// console.log("Hello World")
// console.log("Jai Shree Ganesha")
// console.log("Your Directory name is :",__dirname,"\n")
// console.log("Your file name is :",__filename,"\n")
// var late=require("./hi");
// var Hello=require("./hello");

// console.log(late);
// console.log(Hello.person1);
// console.log(Hello.person2);
// console.log(Hello);

// var greet=function(name){
//     console.log("Hey Hello ",name);
// }

// Hello("sree");
// Hello("Gundu")
// late("sree");
// late("Gundu")


//-----Part -2 -------

// Os Module Practice....

// const os=require("os");
// // console.log("Your Info :\n",os.userInfo());
// // console.log("Your Uptime :\n",os.uptime());

// const alldetails={
//     name:os.type(),
//     release:os.release(),


//     // these are Providig theError Itoo Don't Know
//     // totalMem:os.totalMem(),
//     // freeMem:os.freeMem()
// }

// console.log(alldetails);


// ------Path Module-----

const path=require("path");
const file="/helllo/Hi";
console.log(path.sep);
console.log(path.join("/helllo","/Hi"))
console.log("Base Name :",path.basename(file));
console.log("Directory Name",path.dirname(file));
console.log("REsolved Path :",path.resolve(__dirname,"/hehe","/haha"));



