
document.write('<body style="display: flex;width: 100%;flex-wrap: wrap;gap: 2rem;">')
for (let t = 0; t < 100; t++) {
    for (let i = 0; i < 3; i++) {

        document.write('<section style="width:450px; border:2px solid  black; display:flex; justify-content:space-between;">');

        // --------------------left----------------------
        document.write('<div style="width:40%;display:flex; padding:10px;gap:1rem;flex-wrap:wrap;  ">')
        document.write('<div style="width:100%; background-color:green"></div>')
        document.write('<div style="width:100%; background-color:green"></div>')
        document.write('<div style="width:100%; background-color:green"></div>')
        document.write('<div style="width:100%; background-color:green"></div>')
        document.write('<div style="width:100%; background-color:green"></div>')
        document.write('<div style="width:100%; background-color:green"></div>')
        document.write('</div>')
        // --------------CNETER ----------------------
        document.write('<div style=" width:20%;display:flex; ;flex-wrap:wrap">')

        document.write('<h1 style="  text-align: center; width:100%;">Z</h1>')
        document.write('<h1 style="  text-align: center; width:100%;">Z</h1>')
        document.write('<h1 style="  text-align: center; width:100%;">Z</h1>')
        document.write('</div>')
        // ----------------------------right-------------------
        document.write('<div style="   width:40%;display:flex; padding:10px;gap:1rem;flex-wrap:wrap;   ">')
        document.write('<div style=" height: 15%;width:100%; background-color:green"></div>')
        document.write('<div style=" height: 15%;  width:100%;color:white;text-align: center; font-size:50px;   background-color:black">item</div>')
        document.write('<div style=" height: 15%;  width:100%; background-color:green"></div>')
        document.write('<div style=" height: 15%;  width:100%;color:white;text-align: center; font-size:50px;  background-color:black">item</div>')
        document.write('<div style=" height: 15%;  width:100%; background-color:green"></div>')
        document.write('<div style=" height: 15%;  width:100%;color:white;text-align: center;  font-size:50px; background-color:black">item</div>')
        document.write('</div>')
        document.write('</section>')
    }
}
document.write('</body>')