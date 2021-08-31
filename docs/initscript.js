function init(){
    flg=0,flg_s=0,cmp_flag=0;
  gpr=[0,0,0,0,0,0,0,0];
  count=-1;
  z=0;
errorflag=0;

  for(let j=0;j<30;j++){
  extern[j]=0;}
  /*for(i=0;i<cou;i++){
  if (isNaN(ram[i])==false){
  ram[i]=0;*/

  for(i=0;i<(2**14);i++){
  ram[i] = 0; }

  document.getElementById("tb3").value="";
  document.getElementById("tb2").value="";
  disp="";
  
  
  
  document.getElementById("r1").innerHTML=flg;
  document.getElementById("r2").innerHTML=flg_s;
  document.getElementById("r3").innerHTML=cmp_flag;
  document.getElementById("r4").innerHTML=errorflag;

  
  
  document.getElementById("row1").innerHTML=gpr[0];
 document.getElementById("row2").innerHTML=gpr[1]; 
 document.getElementById("row3").innerHTML=gpr[2]; 
 document.getElementById("row4").innerHTML=gpr[3]; 
 document.getElementById("row5").innerHTML=gpr[4];
 document.getElementById("row6").innerHTML=gpr[5]; 
 document.getElementById("row7").innerHTML=gpr[6]; 
 document.getElementById("row8").innerHTML=gpr[7];


//externnn
document.getElementById("c1").innerHTML=extern[15];
document.getElementById("c2").innerHTML=extern[14];
document.getElementById("c3").innerHTML=extern[13];
document.getElementById("c4").innerHTML=extern[12];
document.getElementById("c5").innerHTML=extern[11];
document.getElementById("c6").innerHTML=extern[0];
document.getElementById("c7").innerHTML=extern[1];
document.getElementById("c8").innerHTML=extern[3];
document.getElementById("c9").innerHTML=extern[2];
document.getElementById("c10").innerHTML=extern[4];


//  document.getElementById("ro1").innerHTML=ram.slice(0,11); 
//  document.getElementById("ro2").innerHTML=ram.slice(11,21);
//  document.getElementById("ro3").innerHTML=ram.slice(21,31);
//    document.getElementById("ro4").innerHTML=ram.slice(31,41); 
//  document.getElementById("ro5").innerHTML=ram.slice(41,51);
//  document.getElementById("ro6").innerHTML=ram.slice(51,61);
//    document.getElementById("ro7").innerHTML=ram.slice(61,71); 
//  document.getElementById("ro8").innerHTML=ram.slice(71,81);
//  document.getElementById("ro9").innerHTML=ram.slice(81,91);
//   document.getElementById("ro10").innerHTML=ram.slice(91,101);
 }