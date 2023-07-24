let color = 0;
for (let i = 0; i < 10; i++) {
    color = 100 + Math.floor(Math.random() * 899)
    console.log("%c nguyenduchiep", `color: #${color}`)
}