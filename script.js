
myJSON = `[["machine_name","machine_id","current","voltage","power_factor","active_power","apparent_power",
"reactive_power","daily_energy","monthly_energy","yearly_energy","idle_daily","idle_monthly","idle_yearly"],
["Auto Winding Machine", "machine001", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0],
["Boiler Machine", "machine004", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0]]`;
myArray = JSON.parse(myJSON);
let t = document.getElementById("table");
let htm = ``;
for(let i of myArray){
    row = `<tr>`
    for(let j of i){
        row+=`<td>${j}</td>`
    }
    htm+=row+`</tr>`

}
t.innerHTML = htm