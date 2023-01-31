const cel = document.createElement

t = cel("table")
let trh = cel("tr")
for (let i=0; i<9999; i++) {
    let td = cel("td")
    td.innerText += i+1
    trh.appendChild(td)
}

t.appendChild(trh)

for (let i = 0; i < 9999; i++) {
    let tr = cel("tr")
    th = cel("th")
    th.innerText += i+1
    tr.appendChild(th)
    for (let j = 0; j < 9999; j++) {
        let td = cel("td")
        let ip = cel("input")
        ip.id = "c" + j + "r" + i
        ip.type = "text"
        ip.style.height = "100%"
        ip.style.width = "100%"
        td.appendChild(ip)
    }
    t.appendChild(tr)
}
document.body.appendChild(t)
document.write(t)