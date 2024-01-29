### Theory
<p>The physical basis of the transformer is mutual induction between two circuits  linked by a common magnetic field . Transformer is required to pass electrical energy from one circuit to another, via the medium of the pulsating magnetic field, as efficiently and economically as possible. This could be achieved using either iron or steel which serves as a good permeable path for the mutual magnetic flux.</p><br>
<p><b><span style="background-color: rgb(255, 255, 0);">Elementary Transformer:&nbsp;&nbsp;</span> </b></p>
<p style="text-align: center;">
<img src="images/transformer elementary 16.jpg" style="height: 50%; width: 70%;">
<br>[Figure 1]</p>
<p>&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;Let an alternating voltage V<sub>1</sub> be applied to primary coil of N<sub>1</sub> turns linking a suitable iron core. A current flows in the coil , establishing a flux
 <b> &phi; </b> in the core.  This flux induces an emf e<sub>1</sub> in the coil to counter balance the applied voltage V<sub>1</sub>. This emf is</p>
<p style="text-align: center;"> <b> $$e_1=N_1 \frac{d \Phi_p}{dt}$$</b></p>
<p>&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;Assuming sinusoidal time variation of the flux , let &nbsp;&nbsp;&nbsp; &nbsp; 
&nbsp;&nbsp; Then, </p><br><br>
<p style="text-align: center;"> <b> $$\Phi_p=\Phi_msin({\omega}t)$$ </b> </p> 

<p style="text-align: center;"> <b> $$e_1=N_1\omega\Phi_mcos(\omega t)$$ </b> </p>

<p style="text-align: center;"> <b> $$\omega=2 \pi f$$ </b> </p>

<p style="text-align: justify;"><br>The r.m.s value of this voltage is given by :</p>

<p style="text-align: center;"> <b> $$E_1=4.44fN_1\Phi_m$$ </b>
 
<p>&nbsp;<br>Now if there is a secondary coil of N<sub>2</sub> turns, wound on the same core, then by mutual induction an emf e<sub>2</sub> is developed therein. The r.m.s value of this voltage is given by :</p>
<br><p style="text-align: center;"> <b> $$E_2=4.44fN_2\Phi'_m$$ </b></p>
<br><P>Where &Phi;<sub>m</sub><sup>'</sup> is the maximum value of the (sinusoidal) flux linking the secondary coil  &Phi;<sub>s</sub><sup>'</sup> </p>

<p>If it is assumed that $$\Phi_p=\Phi_s$$ then the primary and secondary emf bear the following ratio:</p>
<br><p style="text-align: center;"> <b> $$\frac{e_1}{e_2} = \frac{E_1}{E_2} = {N_1}{N_2}$$ </b></p>
<br>
<p>Note that in actual practice, $$\Phi_p=\Phi_s$$ since some of the flux paths linking the primary coil do not link the secondary coil and similarly some of the flux paths linking the secondary coil do not link the primary coil. The fluxes which do not link both the coils are called "Leakage Fluxes" of the primary and secondary coil.&nbsp;
<p>Although the iron core is highly permeable, it is not possible to generate a magnetic field in it without the application of a small m.m.f (magneto motive force, denoted by mmf . 
<br><br> 
<p style="text-align: center;"> <b>$$P_h=K_hB_(max)^xf$$ </b></p> 
<p style="text-align: center;"> <b>$$P_e=K_eB_(max)^2f^2$$ </b></p> 
<p style="text-align: center;"> <b> $$P_c=P_h+P_e$$ </b> </p></p>
<br><p> where P<sub>h</sub>,P<sub>e</sub>,P<sub>c</sub> are hysteresis, eddy current and core losses respectively, K<sub>h</sub> and K<sub>e</sub> are constants which depend upon on the magnetic material, and B<sub>max</sub> is the maximum flux density in the core.</p>
<br><p><b><span style="background-color: rgb(255, 255, 0);">Equivalent Circuit of a Practical Transformer:&nbsp;&nbsp;</span> </b></p>
<br>
<p style="text-align: center;">
<img src="images/ideal transformer.JPG" style="height: 55%; width: 70%;">
<br>[Figure 2(a)]</p>
<br><br><p><b><span style="background-color: rgb(255, 255, 0);">Development of Transformer Equivalent Circuit:&nbsp;&nbsp;</span> </b></p>
<br><p style="text-align: center;">
<img src="images/ssssss.JPG" style="height: 55%; width: 65%;">
<br>[Figure 2(b)]</p>
<br><p>The practical transforme has coils of finite resistance. Though this resistance is actually distributed uniformly, it can be conceived as concentrated. Also, all the flux produced by the primary current cannot confined into a desired path completely as an eletric current.On account of the leakage flux, both the windings have a voltage drop which is due to 'leakage reactance' . The transformer shown in the figure 1 can be resolved into an equivalent circuit as shown in figure 2(a) in which the resistance and leakage reactance of primary and secondary respectively are represented by lumped R<sub>1</sub>, X<sub>1</sub>, R<sub>2</sub> and X<sub>2</sub>.This equivalent circuit can be simplified by referring all quantitiesin the secondary side of the transformer to primary side and is shown in figure 2(b).</p>
<br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $$R_2'=R_2 (\frac{N_1}{N_2})^2$$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $$X_2'= X_2 (\frac{N_1}{N_2})^2$$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $$I_2'= I_2 \frac{N_2}{N_1}$$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
$$V_2'= V_2 \frac{N_1}{N_2}$$ </p>
<br>
<br><p><b><span style="background-color: rgb(255, 255, 0);">Approximate Equivalent Circuit of Transformer:&nbsp;&nbsp;</span> </b></p>
<br><p style="text-align: center;">
<img src="images/bd 3.JPG" style="height: 55%; width: 70%;">
<p>&nbsp;</p>
<br>
<br>
<br>
<br>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
