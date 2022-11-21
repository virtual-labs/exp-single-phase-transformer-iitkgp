                                                                                                                     
/////////////////////////////// The code starts from here/////////////////////////////////////

var V,Vin,p3,t1,Ic,ro,xm,Io,Pin,V2o,Im,w1,f1,v,Vin2,p9,Z,I2,Pin2,re,xe,w2,f2,r1,r2,x1,x2,f3,Vin3,p8,V3,w,XL,XC,R3,t,pf2,VL,ipt,h,n,a,ZL,Z2,Z1,Zeq,I3,I1,reg,ReL,XeL,Ro1,Xm1,Pin31;


		    document.f1.Ro.value =623.711;
		    document.f1.Xm.value = 96.688;
		


		    document.f1.Re.value = 1.124;
		    document.f1.Xe.value = 2.06962;
		
	

var cccc=0;
function execute_ckt3()
		{
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
		if (document.getElementById('C').value > 0)
		{
		XC=(-1/(w*parseFloat(document.getElementById('C').value)));
		}
		else
		{
		XC=0;
		}
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
		    if (I3 > 15 || isNaN(I3))
		    {
			var fuse = document.getElementById('led3');
			fuse.src = "./images/led_off.png";
			fuse.style["cursor"] = "pointer";
			Alert.render('Click on the fuse indicator to repair it and increase the resistance value.');
			changeImage3();
		    }
		    else
		    {
			document.f1.V13.value = VL.toPrecision(6);
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

		var image= document.getElementById('myImage3');
		var im13= document.getElementById('v3');
		var im23= document.getElementById('f3');
		var fuse3 = document.getElementById('led3');
		
	
		if (image.src.match("s6")) {
			image.src = "./images/s5.png"; 
			document.getElementById("cktdiagram3").src = "./images/tx_loadckt_swch_close.jpg";
			fuse3.src = "./images/led_on.png";
			im13.setAttribute('readonly', 'readonly'); im23.setAttribute('readonly', 'readonly'); 
			execute_ckt3(); 
		} else {
			image.src = "./images/s6.png"; 
			document.getElementById('cktdiagram3').src = "./images/tx_loadckt_swch_open.jpg";
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
}
	




