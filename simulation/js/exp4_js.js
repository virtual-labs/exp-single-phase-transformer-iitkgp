1
/////////////////////////////// The code starts from here/////////////////////////////////////
var ccc=0;
var v,Vin2,p3,Z,I2,Pin,re,xe,w,f,r1,r2,x1,x2;

function execute_ckt2()
		{
		//document.f1.A1.value=0;
		//var R=[], v=[], r4=[], v1=[], l1=[], c3=[], f1,m1=[];
		//var  z=[], z2=[], z1=[], i=[], i2=[], i1=[], dv=[], dvv;
		f=parseFloat(document.getElementById('f2').value);
		w= 2*3.141*f;
		v=parseFloat(document.getElementById('v2').value);
	    p3=parseFloat(document.getElementById('p2').value);
		x=0.477;
		y=0.8783;
		I1=6.8;
		R1=0.562;
		R2=0.562;
		X1=1.032651;
		X2=1.036521;
		Vin2= v*p3;
		Z=(R1+R2)/x;
		I1=Vin2/Z;
		I2=I1*2;
		Pin=Vin2*I1*x;
		r1=(Z*x)/2;
		r2=r1;
		x1=(Z*y)/2;
		x2=x1;
		re=r1+r2;
		xe=x1+x2;
		
	   if(document.getElementById('myImage2').src.match("s4"))
		{
		    if (I1 > 10 || isNaN(I1))
		    {
			var fuse = document.getElementById('led2');
			fuse.src = "./images/led_off.png";
			fuse.style["cursor"] = "pointer";
			Alert.render('Click on the fuse indicator to repair it and increase the resistance value.');
			changeImage2();
		    }
		    else
		    {
			document.f1.V12.value = Vin2;
			document.f1.A12.value = I1;
			document.f1.W12.value = Pin; 
			document.f1.A22.value = I2;
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

		var image1 = document.getElementById('myImage2');
		var im1= document.getElementById('v2');
		var im2= document.getElementById('f2');
		
	
		if (image1.src.match("s1")) {
			image1.src = "./images/s4.png"; 
			im1.setAttribute('readonly', 'readonly'); im2.setAttribute('readonly', 'readonly'); 
			execute_ckt2(); 
		} else {
			image1.src = "./images/s1.png"; 
			im1.removeAttribute('readonly'); im2.removeAttribute('readonly'); 
			document.f1.A12.value = 0; document.f1.W12.value = 0; document.f1.V12.value = 0;
			document.f1.A22.value = 0; document.f1.Re.value = 0; document.f1.Xe.value = 0;
			perform_meter11(); perform_meter12(); perform_meter13(); perform_meter14();
		}
	}
	
	
function xyz2() {	

        if(document.getElementById('myImage2').src.match("s4"))
		{
		    document.f1.Re.value = re;
		    document.f1.Xe.value = xe;
		}
		else 
		{
			document.f1.Re.value = 0;
			document.f1.Xe.value = 0;
		}
		
        
}
	
function simulate_rc2() {
		var image = document.getElementById('myImage2');
		if(image.src.match("s1")){
			Alert.render("Please switch on the supply first to get the readings.");
			return;
		}
		else
		{
			ccc = ccc+1;
			if(ccc==1)
			{
				document.f1.c1a.value= Vin; document.f1.c1b.value= I1; document.f1.c1c.value= Pin;
				document.f1.c1d.value= I2; 
			}
			else if(ccc==2)
			{
				document.f1.c2a.value= Vin; document.f1.c2b.value= I1; document.f1.c2c.value= Pin;
				document.f1.c2d.value= I2; 
			}
			else if(ccc==3)
			{
				document.f1.c3a.value= Vin; document.f1.c3b.value= I1; document.f1.c3c.value= Pin;
				document.f1.c3d.value= I2; 
			}	
			else if(ccc==4)
			{
				document.f1.c4a.value= Vin; document.f1.c4b.value= I1; document.f1.c4c.value= Pin;
				document.f1.c4d.value= I2; 
			}
			else
			{
				document.f1.c5a.value= Vin; document.f1.c5b.value= I1; document.f1.c5c.value= Pin;
				document.f1.c5d.value= I2; 
			}
			changeImage2(); xyz2();
		}
}

function change_led2() 
{
	var fuse = document.getElementById('led2');
	fuse.src = "./images/led_on.png"; 
}


	




