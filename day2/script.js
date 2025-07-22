let figlet = require("figlet");

figlet("ANIKET",function(err,data){
    if(err){
        console.log("Something Went Wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
})