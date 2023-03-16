let params = new URL(document.location).searchParams;
let size = params.get("size");
size = parseInt(size)

const cel = e => document.createElement(e)

t = cel("table")
let trh = cel("tr")
for (let i=0; i<size; i++) {
    let td = cel("td")
    td.innerText += i+1
    trh.appendChild(td)
}

t.appendChild(trh)

for (let i = 0; i < size; i++) {
    let tr = cel("tr")
    th = cel("th")
    th.innerText += i+1
    tr.appendChild(th)
    for (let j = 0; j < size; j++) {
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
