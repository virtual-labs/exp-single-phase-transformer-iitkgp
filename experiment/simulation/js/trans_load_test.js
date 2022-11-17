                                                                                                                     
/////////////////////////////// The code starts from here/////////////////////////////////////
//Author: Piyali Chattopadhyay
//        RE, VLABS Projects,IIT KGP

function execute_ckt3()
		{
			
		
		var f3=parseFloat(document.getElementById('f3').value);
		var Vin3=parseFloat(document.getElementById('v3').value);
	    var p8=parseFloat(document.getElementById('p6').value);
		var v=parseFloat(document.getElementById('v2').value);
	   var  p9=parseFloat(document.getElementById('p2').value);
		var x=0.477;
		var y=0.8783;
		//I4=6.8;
		var R1=0.562;
		var R2=0.562;
		var X1=1.032651;
		var X2=1.036521;
		var Vin2= v*p9;
		var Z=(R1+R2)/x;
		var I4=Vin2/Z;
		//I2=I4*2;
		var Pin2=Vin2*I4*x;
		var r1=(Z*x)/2;
		var r2=r1;
		var x1=(Z*y)/2;
		var x2=x1;
		var re=r1+r2;
		var xe=x1+x2;
		var ReL=re;//*(0.5*0.5);
		var XeL=xe;//*(0.5*0.5);
		/*var Ro1=document.f1.Ro.value ;
		Ro1=623.711;
	    var Xm1=document.f1.Xm.value ;
		Xm1= 96.688;
		


		  var ReL=  document.f1.Re.value;
               ReL  = 1.124;
		    var XeL=document.f1.Xe.value ;
			XeL= 2.06962;*/
		
		
		
		var w1= 2*3.141*f3;
		var V=parseFloat(document.getElementById('v').value);
	    var p3=parseFloat(document.getElementById('p').value);
		var b=1.417;
		var Vin= V*p3;
		var t1 = Math.cos(b);                                                                             
		var Ro = 623.711;
		var Xm = 97;
		var Ic = Vin/Ro;
		var Io = Ic/t1;
		var Pin = Vin*Io*t1;
		//V2o = Vin*2.05;
		var Im = Io*Math.sin(b);
		var ro = Vin/Ic;
		var xm = Vin/Im;
		
		
		
		
		var Pin31=Pin.toPrecision(6);
		//I2=19.94572;*/
		var Vrated3=Vin3*p8; 
		var Ro1=ro; //parseFloat(document.getElementById('ro').value);
        var Xm1=xm; //parseFloat(document.getElementById('xm').value);		
		//w=2*3.14*(f3);
		if (document.getElementById('L').value > 0)
		{
		var XL=w1*parseFloat(document.getElementById('L').value);
		}
		else
		{
		XL=0;
		}
		if (document.getElementById('C').value > 0)
		{
		var XC=(-1/(w1*parseFloat(document.getElementById('C').value)));
		}
		else
		{
		XC=0;
		}
		
		
		
		var R3=parseFloat(document.getElementById('R').value);
		var ZL=Math.sqrt((R3*R3)+((XL+XC)*(XL+XC)));
		var t=Math.atan((XL+XC)/R3);
		var pf2=Math.cos(t);
	    var Z2=Math.sqrt((ReL*ReL)+(XeL*XeL));
		//var Z1=(Ro1*Xm1)/(Math.sqrt((Ro1*Ro1)+(Xm1*Xm1)));
		var Zeq=(Z2+ZL);
		var I1=Vrated3/Zeq;
		//var I2=Vrated3/Z1;
		//var I3=  I1-I2;   //I1*(Z1/(Z1+Z2+ZL));
		var VL=I1*ZL;
		
		//// Calculation of % Efficiency////////////////
		var Ironloss =Pin31;//I2*I2*Z1;//Pin31;
		var Copperloss = Pin2.toPrecision(6); 
		var FoL= parseFloat (I1/6.82);
		var Pout =( FoL* 1500*pf2);
		var FLCL =((FoL*FoL)*Copperloss).toPrecision(6);
		var Pinput = (+parseFloat( Pout).toFixed(2))+ (+parseFloat (Ironloss).toFixed(2)) + (+parseFloat (FLCL).toFixed(2));// (I2*I2*Z1)+(I3*I3*Z2);
		var n1 = (Pout);  //parseFloat((Pout/Pin)*100);
		var n2 =  (Pinput); 
		var n =(n1/n2)*100 ;
		
		var a=t*57.3;
		//// Calculation of % Regulation////////////////////////
		if((XL+XC)>0 ||(XL==0 && XC==0))
		{
		var reg=  (((I1*ReL*pf2)+(I1*XeL*Math.sin(t)))/Vrated3)*100;
		}
		else if((XL + XC)<0)
		{
		var reg=  (((I1*ReL*pf2)-(I1*XeL*Math.sin(t)))/Vrated3)*100;
		}
		
	   if(document.getElementById('myImage3').src.match("s5"))
		{
		    if (I1 > 15) //|| isNaN(I3))
		    {
			var fuse = document.getElementById('led3');
			fuse.src = "./images/led_off.png";
			fuse.style["cursor"] = "pointer";
			Alert.render('Click on the fuse indicator to repair it and increase the resistance value.');
			changeImage3();
		    }
		    else
		    {
			document.f1.Vrated.value = Vrated3.toPrecision(6);
			document.f1.V13.value = VL.toPrecision(6);
			//document.f1.A13.value = I1.toPrecision(6);
			document.f1.A23.value = I1.toPrecision(6); 
			document.f1.PH2.value = a.toPrecision(6);
			document.f1.PF2.value = pf2;
			perform_meter2();perform_meter7(); perform_meter18(); perform_meter16(); 
		    }
		}
		else
		{
			document.f1.Vrated.value =0; document.f1.V13.value = 0; document.f1.PH2.value = 0; /*document.f1.A13.value = 0; */ document.f1.PF2.value = 0; document.f1.A23.value = 0;
			perform_meter2();perform_meter7(); perform_meter18(); perform_meter16(); 
		}	
	    
}	

function changeImage3() {

		var image = document.getElementById('myImage3');
		var im13= document.getElementById('v3');
		var im23= document.getElementById('f3');
		var fuse3 = document.getElementById('led3');
		var f3=parseFloat(document.getElementById('f3').value);
		var w1= 2*3.141*f3;
		
		if (document.getElementById('L').value > 0)
		{
		var XL=w1*parseFloat(document.getElementById('L').value);
		}
		else
		{
		XL=0;
		}
		if (document.getElementById('C').value > 0)
		{
		var XC=(-1/(w1*parseFloat(document.getElementById('C').value)));
		}
		else
		{
		XC=0;
		}
		
	
		if (image.src.match("s6.png")) {
			image.src = "images/s5.png"; 
			document.getElementById("cktdiagram3").src = "images/tx_loadckt_swch_close.jpg";
			fuse3.src = "images/led_on.png";
			im13.setAttribute('readonly', 'readonly'); im23.setAttribute('readonly', 'readonly'); 
			execute_ckt3(); 
			//show_lead_lag();
		} else {
			image.src = "images/s6.png"; 
			document.getElementById('cktdiagram3').src = "images/tx_loadckt_swch_open.jpg";
			im13.removeAttribute('readonly'); im23.removeAttribute('readonly'); 
			document.getElementById('lag').style.display="none";	document.getElementById('lead').style.display="none";	document.getElementById('unity').style.display="none";	
			document.f1.Vrated.value =0; document.f1.V13.value = 0; document.f1.PH2.value = 0;  document.f1.PF2.value = 0;  document.f1.N.value = 0; document.f1.A23.value = 0; document.f1.REG.value = 0;
			perform_meter2();perform_meter7(); perform_meter18();  perform_meter16(); 
			
		}
		if (image.src.match("s5.png") && (XL==0)&&(XC==0)) {
			
		document.getElementById('cktdiagram3').src =" ./images/unity.jpg";	
			
		}	
		else if(image.src.match("s5.png") && (XL==0)&&(XC!=0)){
			
		document.getElementById('cktdiagram3').src ="./images/RC.jpg";	
			
}
     else if (image.src.match("s5.png") && (XL!=0)&&(XC==0)) {
			
		document.getElementById('cktdiagram3').src ="./images/RL.jpg";	
			
		}	
		

/*if (image.src.match("s5.png") && (XL!=0)&&(XC==0)) {
			
		document.getElementById('cktdiagram3').src =" ./images/RL.jpg";	
			
		}	
		else{
			
		document.getElementById('cktdiagram3').src =" ./images/tx_loadckt_swch_close.jpg";


		}
/*if(document.getElementById('R').value ==0){
	
	Alert.render (' Increase the Load resistance value');
	image.src = "images/s6.png";
	
}*/
}
	
	
function xyz3() {	

var f3=parseFloat(document.getElementById('f3').value);
		var Vin3=parseFloat(document.getElementById('v3').value);
	    var p8=parseFloat(document.getElementById('p6').value);
		var v=parseFloat(document.getElementById('v2').value);
	   var  p9=parseFloat(document.getElementById('p2').value);
		var x=0.477;
		var y=0.8783;
		//I4=6.8;
		var R1=0.562;
		var R2=0.562;
		var X1=1.032651;
		var X2=1.036521;
		var Vin2= v*p9;
		var Z=(R1+R2)/x;
		var I4=Vin2/Z;
		//I2=I4*2;
		var Pin2=Vin2*I4*x;
		var r1=(Z*x)/2;
		var r2=r1;
		var x1=(Z*y)/2;
		var x2=x1;
		var re=r1+r2;
		var xe=x1+x2;
		var ReL=re;//*(0.5*0.5);//cause Turns ratio = 150/300 or 110/220 and the Re Xe we are getting in SC test are, Re(HV side)and Xe(HV side);
		var XeL=xe;//*(0.5*0.5);
		/*var Ro1=document.f1.Ro.value ;
		Ro1=623.711;
	    var Xm1=document.f1.Xm.value ;
		Xm1= 96.688;
		


		  var ReL=  document.f1.Re.value;
               ReL  = 1.124;
		    var XeL=document.f1.Xe.value ;
			XeL= 2.06962;*/
		
		
		
		var w1= 2*3.141*f3;
		var V=parseFloat(document.getElementById('v').value);
	    var p3=parseFloat(document.getElementById('p').value);
		var b=1.417;
		var Vin= V*p3;
		var t1 = Math.cos(b);                                                                             
		var Ro = 623.711;
		var Xm = 97;
		var Ic = Vin/Ro;
		var Io = Ic/t1;
		var Pin = Vin*Io*t1;
		//V2o = Vin*2.05;
		var Im = Io*Math.sin(b);
		var ro = Vin/Ic;
		var xm = Vin/Im;
		
		
		
		
		var Pin31=Pin.toPrecision(6);
		//I2=19.94572;*/
		var Vrated3=Vin3*p8; 
		var Ro1=ro; //parseFloat(document.getElementById('ro').value);
        var Xm1=xm; //parseFloat(document.getElementById('xm').value);		
		//w=2*3.14*(f3);
		
		//if (document.getElementById('L').value > 0)
		//{
		var XL=w1*parseFloat(document.getElementById('L').value);
		//}
		//else
		//{
		//XL=0;
		//}
		//if (document.getElementById('C').value > 0)
		//{
		var XC=(-1/(w1*parseFloat(document.getElementById('C').value)));
		//}
		//else
		//{
		//XC=0;
		//}
		if (document.getElementById('L').value == 0){
			XL=0;
		}
		if (document.getElementById('C').value == 0){
			XC=0;
		}
		if((XL + XC)>0)
		{
		document.getElementById('lag').style.display="block";
		document.getElementById('lead').style.display="none";
		document.getElementById('unity').style.display="none";
		}
		else if((XL + XC)<0)
		{
		document.getElementById('lead').style.display="block";	
		document.getElementById('lag').style.display="none";
		document.getElementById('unity').style.display="none";
		}
		
		else if(XC==0 && XL==0)
		{
		document.getElementById('unity').style.display="block";
		document.getElementById('lead').style.display="none";
		document.getElementById('lag').style.display="none";
		
		}
		
			
			
			
		var R3=parseFloat(document.getElementById('R').value);
		var ZL=Math.sqrt((R3*R3)+((XL+XC)*(XL+XC)));
		var t=Math.atan((XL+XC)/R3);
		var pf2=Math.cos(t);
	    var Z2=Math.sqrt((ReL*ReL)+(XeL*XeL));
		//var Z1=(Ro1*Xm1)/(Math.sqrt((Ro1*Ro1)+(Xm1*Xm1)));
		var Zeq=(Z2+ZL);
		var I1=Vrated3/Zeq;
		//var I2=Vrated3/Z1;
		//var I3=  I1-I2;   //I1*(Z1/(Z1+Z2+ZL));
		var VL=I1*ZL;
		
		//// Calculation of % Efficiency////////////////
		var Ironloss =Pin31;//I2*I2*Z1;//Pin31;
		var Copperloss = Pin2.toPrecision(6); 
		var FoL= parseFloat (I1/6.82);
		var Pout =( FoL* 1500*pf2);
		var FLCL =((FoL*FoL)*Copperloss).toPrecision(6);
		var Pinput = (+parseFloat( Pout).toFixed(2))+ (+parseFloat (Ironloss).toFixed(2)) + (+parseFloat (FLCL).toFixed(2));// (I2*I2*Z1)+(I3*I3*Z2);
		var n1 = (Pout);  //parseFloat((Pout/Pin)*100);
		var n2 =  (Pinput); 
		var n =(n1/n2)*100 ;
		
		var a=t*57.3;
		//// Calculation of % Regulation////////////////////////
		if((XL+XC)>0 ||(XL==0 && XC==0))
		{
		var reg=  (((I1*ReL*pf2)+(I1*XeL*Math.sin(t)))/Vrated3)*100;
		}
	    if((XL + XC)<0)
		{
		var reg=  (((I1*ReL*pf2)-(I1*XeL*Math.sin(t)))/Vrated3)*100;
		}






        if(document.getElementById('myImage3').src.match("s5"))
		{
		    document.f1.N.value = n; //.toPrecision(6);
			document.f1.REG.value = reg; //.toPrecision(6);
		}
		else 
		{
			Alert.render("Please switch on the supply first to get the readings.");
			document.f1.N.value = 0;
			document.f1.REG.value = 0;
		}
		
        
}
	

function change_led3() 
{
	var fuse = document.getElementById('led3');
	fuse.src = "./images/led_on.png"; 
	
	document.getElementById('R').value= "50";
	document.getElementById('L').value= "0.1";
	document.getElementById('C').value= "0.5";
	
	document.getElementById('pr2').value= "50";
	document.getElementById('pl2').value= "0.1";
	document.getElementById('pc4').value= "0.5";
	
	
}





