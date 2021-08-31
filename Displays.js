
function sear()
{ 
   gd_st=document.getElementById("search_id").value
   addr_gd=parseFloat(gd_st);
//  for(let u=addr_gd;u<addr_gd+100;u++)
/* document.getElementById("tb2").value=addr_gd;
  document.getElementById("ro1").innerHTML=ram.slice(addr_gd,addr_gd+30);  
  document.getElementById("ro2").innerHTML=ram.slice(addr_gd+31,addr_gd+61);  
  document.getElementById("ro3").innerHTML=ram.slice(addr_gd+61,addr_gd+91);*/

  displayRAMinfo(parseInt(gd_st));
  
}


function displayRAMinfo(address)
{

    let k = ram.length;
    console.log("The length of Ram is " + ram.length);


   var disp = "";

   disp += "<table border=\"20px\" cellpadding=\"20px\" cellspacing=\"25px\">";
   max_col = address+60;
   for(i=address;i<max_col;i=i+15)
   {
   disp += "<tr>";
   disp += "<th> "+i + "</th>" ;
   for(k=0;k<=14;k++)
   disp += "<td>" + ram[i+k] + "</td>";
   }
   disp += "</table>";
   document.getElementById("ram_data").innerHTML = disp;
}




