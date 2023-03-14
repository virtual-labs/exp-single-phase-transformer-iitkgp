                                                                                                                     
/////////////////////////////// The code starts from here/////////////////////////////////////

var V,Vin,p3,t1,Ic,ro,xm,Io,Pin,V2o,Im,w1,f1,v,Vin2,p9,Z,I2,Pin2,re,xe,w2,f2,r1,r2,x1,x2,f3,Vin3,p8,V3,w,XL,XC,R3,t,pf2,VL,ipt,h,n,a,ZL,Z2,Z1,Zeq,I3,I1,reg,ReL,XeL,Ro1,Xm1,Pin31;

var cc=0;
function execute_ckt1()
		{
		//document.f1.A1.value=0;
		//var R=[], v=[], r4=[], v1=[], l1=[], c3=[], f1,m1=[];
		//var  z=[], z2=[], z1=[], i=[], i2=[], i1=[], dv=[], dvv;
		f1=parseFloat(document.getElementById('f').value);
		w1= 2*3.141*f1
		V=parseFloat(document.getElementById('v').value);
	    p3=parseFloat(document.getElementById('p').value);
		b=1.417;
		Vin= V*p3;
		t1 = Math.cos(b);                                                                             
		Ro = 623.711;
		Xm = 97;
		Ic = Vin/Ro;
		Io = Ic/t1;
		Pin = Vin*Io*t1;
		V2o = Vin*2.05;
		Im = Io*Math.sin(b);
		ro = Vin/Ic;
		xm = Vin/Im;
		
	    if(document.getElementById('myImage1').src.match("s2"))
		{
		    if (Io > 5 || isNaN(Io))
		    {
			var fuse = document.getElementById('led1');
			fuse.src = "./images/led_off.png";
			fuse.style["cursor"] = "pointer";
			Alert.render('Click on the fuse indicator to repair it and increase the resistance value.');
			changeImage1();
		    }
		    else
		    {
			document.f1.V1.value = Vin.toPrecision(6);
			document.f1.A1.value = Io.toPrecision(6);
			document.f1.W1.value = Pin.toPrecision(6); 
			document.f1.V2.value = V2o.toPrecision(6);
			perform_meter1(); perform_meter3(); perform_meter4(); 
			perform_meter5();
		    }
		}
		else
		{
			document.f1.A1.value = 0; document.f1.W1.value = 0; document.f1.V1.value = 0;
			document.f1.V2.value = 0;
			perform_meter1(); perform_meter3(); perform_meter4(); perform_meter5();
		}	
	    
}
	

function changeImage1() {

		var image = document.getElementById('myImage1');
		var im1= document.getElementById('v');
		var im2= document.getElementById('f');
		var fuse1 = document.getElementById('led1');
		
	
		if (image.src.match("s8")) {
			image.src = "./images/s2.png"; 
		    document.getElementById("cktdiagram1").src = "./images/tx_swch_close.jpg";
			fuse1.src = "./images/led_on.png"; 
			im1.setAttribute('readonly', 'readonly'); im2.setAttribute('readonly', 'readonly'); 
			execute_ckt1();  
		} else {
			image.src = "./images/s8.png"; 
			document.getElementById('cktdiagram1').src = "./images/tx_swch_open.jpg";
			im1.removeAttribute('readonly'); im2.removeAttribute('readonly'); 
			document.f1.A1.value = 0; document.f1.W1.value = 0; document.f1.V1.value = 0;
			document.f1.V2.value = 0; document.f1.Ro.value = 0; document.f1.Xm.value = 0;
			perform_meter1(); perform_meter3(); perform_meter4(); perform_meter5();
		}
	}
	
	
function xyz1() {	

        if(document.getElementById('myImage1').src.match("s2"))
		{
		    document.f1.Ro.value = ro;
		    document.f1.Xm.value = xm.toPrecision(5);
		}
		else 
		{
			Alert.render("Please switch on the supply first to get the readings.");
			document.f1.Ro.value = 0;
			document.f1.Xm.value = 0;
		}
		
        
}
	
function simulate_rc1() {
		var image = document.getElementById('myImage1');
		
		if(image.src.match("s8")){
			Alert.render("Please switch on the supply first to get the readings.");
			return;
		}
		else
		{
			cc = cc+1;
			if(cc==1)
			{
				document.f1.t1a.value= Vin.toPrecision(5); document.f1.t1b.value= Io.toPrecision(5); document.f1.t1c.value= Pin.toPrecision(5);
				document.f1.t1d.value= V2o.toPrecision(5); 
			}
			else if(cc==2)
			{
				document.f1.t2a.value= Vin.toPrecision(5); document.f1.t2b.value= Io.toPrecision(5); document.f1.t2c.value= Pin.toPrecision(5);
				document.f1.t2d.value= V2o.toPrecision(5); 
			}
			else if(cc==3)
			{
				document.f1.t3a.value= Vin.toPrecision(5); document.f1.t3b.value= Io.toPrecision(5); document.f1.t3c.value= Pin.toPrecision(5);
				document.f1.t3d.value= V2o.toPrecision(5); 
			}	
			else if(cc==4)
			{
				document.f1.t4a.value= Vin.toPrecision(5); document.f1.t4b.value= Io.toPrecision(5); document.f1.t4c.value= Pin.toPrecision(5);
				document.f1.t4d.value= V2o.toPrecision(5); 
			}
			else
			{
				document.f1.t5a.value= Vin.toPrecision(5); document.f1.t5b.value= Io.toPrecision(5); document.f1.t5c.value= Pin.toPrecision(5);
				document.f1.t5d.value= V2o.toPrecision(5); 
			}
			changeImage1(); 
		}
}

function change_led1() 
{
	var fuse = document.getElementById('led1');
	fuse.src = "./images/led_on.png"; 
}
var ccc=0;
function execute_ckt2()
		{
		//document.f1.A1.value=0;
		//var R=[], v=[], r4=[], v1=[], l1=[], c3=[], f1,m1=[];
		//var  z=[], z2=[], z1=[], i=[], i2=[], i1=[], dv=[], dvv;
		f2=parseFloat(document.getElementById('f2').value);
		w2= 2*3.141*f2;
		v=parseFloat(document.getElementById('v2').value);
	    p9=parseFloat(document.getElementById('p2').value);
		x=0.477;
		y=0.8783;
		I4=6.8;
		R1=0.562;
		R2=0.562;
		X1=1.032651;
		X2=1.036521;
		Vin2= v*p9;
		Z=(R1+R2)/x;
		I4=Vin2/Z;
		I2=I4*2;
		Pin2=Vin2*I4*x;
		r1=(Z*x)/2;
		r2=r1;
		x1=(Z*y)/2;
		x2=x1;
		re=r1+r2;
		xe=x1+x2;
		
	   if(document.getElementById('myImage2').src.match("s4"))
		{
		    if ( I4 > 10 ||isNaN(I4))
		    {
			var fuse = document.getElementById('led2');
			fuse.src = "./images/led_off.png";
			fuse.style["cursor"] = "pointer";
			Alert.render('Click on the fuse indicator to repair it and increase the resistance value.');
			changeImage2();
		    }
		    else
		    {
			document.f1.V12.value = Vin2.toPrecision(6);
			document.f1.A12.value = I4.toPrecision(6);
			document.f1.W12.value = Pin2.toPrecision(6); 
			document.f1.A22.value = I2.toPrecision(6);
			perform_meter11(); perform_meter12(); perform_meter13(); 
			perform_meter14();
		    }
		}
		else
		{
			document.f1.V12.value = 0; document.f1.A12.value = 0; document.f1.W12.value = 0;
			document.f1.A22.value = 0;
			perform_meter11(); perform_meter12(); perform_meter13(); perform_meter14();
		}	
	    
}	

function changeImage2() {

		var image = document.getElementById('myImage2');
		var im12= document.getElementById('v2');
		var im22= document.getElementById('f2');
		var fuse2 = document.getElementById('led2');
		
		if (image.src.match("s3")) {
			 image.src = "./images/s4.png"; 
			 document.getElementById("cktdiagram2").src = "./images/tx_shortckt_swch_close.jpg";
			 fuse2.src = "./images/led_on.png"; 
			 im12.setAttribute('readonly', 'readonly'); im22.setAttribute('readonly', 'readonly'); 
			 execute_ckt2(); 
		} else {
			image.src = "./images/s3.png"; 
			document.getElementById('cktdiagram2').src = "./images/tx_shortckt_swch_open.jpg";
			im12.removeAttribute('readonly'); im22.removeAttribute('readonly'); 
			document.f1.A12.value = 0; document.f1.W12.value = 0; document.f1.V12.value = 0;
			document.f1.A22.value = 0; document.f1.Re.value = 0; document.f1.Xe.value = 0;
			perform_meter11(); perform_meter12(); perform_meter13(); perform_meter14();
	    }
	}
	
	
function xyz2() {	

        if(document.getElementById('myImage2').src.match("s4"))
		{
		    document.f1.Re.value = re;
		    document.f1.Xe.value = xe.toPrecision(6);
		}
		else 
		{
			Alert.render("Please switch on the supply first to get the readings.");
			document.f1.Re.value = 0;
			document.f1.Xe.value = 0;
		}
		
        
}
	
function simulate_rc2() {
		var image = document.getElementById('myImage2');
		if(image.src.match("s3")){
			Alert.render("Please switch on the supply first to get the readings.");
			return;
		}
		else
		{
			ccc = ccc+1;
			if(ccc==1)
			{
				document.f1.c1a.value= Vin2; document.f1.c1b.value= I4; document.f1.c1c.value= Pin2;
				document.f1.c1d.value= I2; 
			}
			else if(ccc==2)
			{
				document.f1.c2a.value= Vin2; document.f1.c2b.value= I4; document.f1.c2c.value= Pin2;
				document.f1.c2d.value= I2; 
			}
			else if(ccc==3)
			{
				document.f1.c3a.value= Vin2; document.f1.c3b.value= I4; document.f1.c3c.value= Pin2;
				document.f1.c3d.value= I2; 
			}	
			else if(ccc==4)
			{
				document.f1.c4a.value= Vin2; document.f1.c4b.value= I4; document.f1.c4c.value= Pin2;
				document.f1.c4d.value= I2; 
			}
			else
			{
				document.f1.c5a.value= Vin2; document.f1.c5b.value= I4; document.f1.c5c.value= Pin2;
				document.f1.c5d.value= I2; 
			}
			changeImage2(); 
		}
}

function change_led2() 
{
	var fuse = document.getElementById('led2');
	fuse.src = "./images/led_on.png"; 
}
/*var cccc=0;
function execute_ckt3()
		{
			
		//document.f1.A1.value=0;
		//var R=[], v=[], r4=[], v1=[], l1=[], c3=[], f1,m1=[];
		//var  z=[], z2=[], z1=[], i=[], i2=[], i1=[], dv=[], dvv;
		f3=parseFloat(document.getElementById('f3').value);
		Vin3=parseFloat(document.getElementById('v3').value);
	    p8=parseFloat(document.getElementById('p6').value);
		ReL=parseFloat(document.getElementById('Re').value);
		XeL=parseFloat(document.getElementById('Xe').value);
		Pin31=parseFloat(document.getElementById('W1').value);
		//I2=19.94572;
		V3=Vin3*p8; 
		Ro1=parseFloat(document.getElementById('Ro').value);
        Xm1=parseFloat(document.getElementById('Xm').value);		
		w=2*3.14*(f3);
		XL=w*parseFloat(document.getElementById('L').value);
		//if (document.getElementById('C').value > 0)
		//{
		XC=(-1/(w*parseFloat(document.getElementById('C').value)));
		//}
		//else
		//{
		//XC=0;
		//}
		R3=parseFloat(document.getElementById('R').value);
		ZL=Math.sqrt((R3*R3)+((XL+XC)*(XL+XC)));
		t=Math.atan((XL+XC)/R3);
		pf2=Math.cos(t);
	    Z2=Math.sqrt((ReL*ReL)+(XeL*XeL));
		Z1=(Ro1*Xm1)/(Math.sqrt((Ro1*Ro1)+(Xm1*Xm1)));
		Zeq=((Z2+ZL)*Z1)/(Z2+ZL+Z1);
		I3=V3/Zeq;
		I1=I3*(Z1/(Z1+Z2+ZL));
		VL=I1*ZL;
		ipt=V3*I3*pf2;
		h=Pin31+(((I1*I1)*(ReL+XeL)));
		n=(1-(h/ipt))*100;
		//re3=((Ro*Xm*Xm)/((Xm*Xm)+(Ro*Ro)));
		//Qp=Math.atan((XC+XeL+XL)/(R3+ReL));
		//Qs=Math.atan((XC+XeL+XL+((Xm*Ro*Ro)/((Ro*Ro)+(Xm*Xm))))/(R3+ReL+re3));
		//x=t+Qp-Qs;
		//pf1=Math.cos(x);
		a=t*57.3;
		//d=x*57.3;
	    //Pi3=V3*I3*pf1;
		
		//h=(I1*I1*(Req+Xeq)+Pin);
		//VL=I1*ZL;
		//n=(1-(h/Pi3))*100;
		//s=I1*Req*pf1+I1*Xeq*Math.sin(x);
		//reg=s/VL;
		reg=(((I1*ReL*pf2)+(I1*XeL*Math.sin(t)))/VL);
		
	   if(document.getElementById('myImage3').src.match("s5"))
		{
		    if (I3 > 15) //|| isNaN(I3))
		    {
			var fuse = document.getElementById('led3');
			fuse.src = "./images/led_off.png";
			fuse.style["cursor"] = "pointer";
			Alert.render('Click on the fuse indicator to repair it and increase the resistance value.');
			changeImage3();
		    }
		    else
		    {
			document.f1.V13.value = Z2.toPrecision(6);
			document.f1.A13.value = I3.toPrecision(6);
			document.f1.A23.value = I1.toPrecision(6); 
			document.f1.PH2.value = a.toPrecision(6);
			document.f1.PF2.value = pf2;
			perform_meter2(); perform_meter18(); perform_meter15(); perform_meter16(); 
		    }
		}
		else
		{
			document.f1.V13.value = 0; document.f1.PH2.value = 0; document.f1.A13.value = 0;  document.f1.PF2.value = 0; document.f1.A23.value = 0;
			perform_meter2(); perform_meter18(); perform_meter15(); perform_meter16(); 
		}	
	    
}	

function changeImage3() {

		var image = document.getElementById('myImage3');
		var im13= document.getElementById('v3');
		var im23= document.getElementById('f3');
		var fuse3 = document.getElementById('led3');
		
	
		if (image.src.match("s6.png")) {
			image.src = "images/s5.png"; 
			document.getElementById("cktdiagram3").src = "images/tx_loadckt_swch_close.jpg";
			fuse3.src = "images/led_on.png";
			im13.setAttribute('readonly', 'readonly'); im23.setAttribute('readonly', 'readonly'); 
			execute_ckt3(); 
		} else {
			image.src = "images/s6.png"; 
			document.getElementById('cktdiagram3').src = "images/tx_loadckt_swch_open.jpg";
			im13.removeAttribute('readonly'); im23.removeAttribute('readonly'); 
			document.f1.V13.value = 0; document.f1.PH2.value = 0;  document.f1.PF2.value = 0; document.f1.A13.value = 0; document.f1.N.value = 0; document.f1.A23.value = 0; document.f1.REG.value = 0;
			perform_meter2(); perform_meter18(); perform_meter15(); perform_meter16(); 
			
		}
	}
	
	
function xyz3() {	

        if(document.getElementById('myImage3').src.match("s5"))
		{
		    document.f1.N.value = n.toPrecision(6);
			document.f1.REG.value = reg.toPrecision(6);
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
}*/
	




