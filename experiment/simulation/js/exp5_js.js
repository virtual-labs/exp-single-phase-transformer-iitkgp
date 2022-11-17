1
/////////////////////////////// The code starts from here/////////////////////////////////////
var cccc=0;
var V3,p8,XL,XC,R3,ZL,Z1,Z2,Zeq,Re3,w,reg,I3,I1,pf1,pf2,Pi3,a,b,t,h,VL,n,s,x,Pin,Req,Xeq,Vin3,f3,Qp,Qs;

function execute_ckt3()
		{
		//document.f1.A1.value=0;
		//var R=[], v=[], r4=[], v1=[], l1=[], c3=[], f1,m1=[];
		//var  z=[], z2=[], z1=[], i=[], i2=[], i1=[], dv=[], dvv;
		f3=parseFloat(document.getElementById('f3').value);
		Vin3=parseFloat(document.getElementById('v3').value);
	    p8=parseFloat(document.getElementById('p6').value);
		R1=0.562;
		R2=0.562;
		X1=1.03481;
		X2=1.03481;
		Lm=0.30891719;
		Ro=623.711;
		Req=R1+R2;
		Xeq=X1+X2;
		V3=Vin3 * p8;
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
		Z2=Math.sqrt(((R1+R2)*(R1+R2))+((X1+X2)*(X1+X2)));
		Re3=(Lm*Lm*w*w*Ro)/((Ro*Ro)+(Lm*Lm*w*w));
		Z1=Math.sqrt((Re3*Re3)+((w*Lm*Ro*Ro)/((Ro*Ro)+(Lm*Lm*w*w))));
		Zeq=((Z2+ZL)*Z1)/(Z2+ZL+Z1);
		I3=V3/Zeq;
		I1=I3*(Z1/(Z1+Z2+ZL));
		t=Math.atan((XL+XC)/R3);
		Qp=Math.atan((XC+X1+X2+XL)/(R3+(R1+R2)));
		Qs=Math.atan((XC+X1+X2+XL+((w*Lm*Ro*Ro)/((Ro*Ro)+(Lm*Lm*w*w))))/(R3+(R1+R2)+Re3));
		x=(t+Qp)-Qs;
		pf1=Math.cos(x);
		pf2=Math.cos(t);
		a=t*57.3;
		b=x*57.3;
	    Pi3=V3*I3*pf1;
		Pin=36.2767;
		h=(I1*I1*(Req+Xeq)+Pin);
		VL=I1*ZL;
		n=(1-(h/Pi3))*100;
		s=I1*Req*pf1+I1*Xeq*Math.sin(pf1);
		reg=s/VL;
		
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
			document.f1.V13.value = VL;
			document.f1.A13.value = I3;
			document.f1.A23.value = I1; 
			document.f1.PH1.value = b;
			document.f1.PH2.value = a;
			document.f1.PF1.value = pf1;
			document.f1.PF2.value = pf2;
			perform_meter2(); perform_meter15(); perform_meter16(); perform_meter17(); perform_meter18();
		    }
		}
		else
		{
			document.f1.V13.value = 0; document.f1.A13.value = 0; document.f1.A23.value = 0;
			document.f1.PH1.value = 0; document.f1.PH2.value = 0; document.f1.PF1.value = 0; document.f1.PF2.value = 0;
			perform_meter2(); perform_meter15(); perform_meter16(); perform_meter17(); perform_meter18();
		}	
	    
}	

function changeImage3() {

		var image3 = document.getElementById('myImage3');
		var im1= document.getElementById('v3');
		var im2= document.getElementById('f3');
		
	
		if (image3.src.match("s1")) {
			image3.src = "./images/s5.png"; 
			im1.setAttribute('readonly', 'readonly'); im2.setAttribute('readonly', 'readonly'); 
			execute_ckt3(); 
		} else {
			image3.src = "./images/s1.png"; 
			im1.removeAttribute('readonly'); im2.removeAttribute('readonly'); 
			document.f1.V13.value = 0; document.f1.A13.value = 0; document.f1.A23.value = 0;
			document.f1.PH1.value = 0; document.f1.PH2.value = 0; document.f1.PF1.value = 0; document.f1.PF2.value = 0; document.f1.N.value = 0; document.f1.S.value = 0;
			perform_meter2(); perform_meter15(); perform_meter16(); perform_meter17(); perform_meter18();
		}
	}
	
	
function xyz3() {	

        if(document.getElementById('myImage3').src.match("s5"))
		{
		    document.f1.N.value = n;
		    document.f1.S.value = s;
		}
		else 
		{
			document.f1.N.value = 0;
			document.f1.N.value = 0;
		}
		
        
}
	

function change_led3() 
{
	var fuse = document.getElementById('led3');
	fuse.src = "./images/led_on.png"; 
}


	




