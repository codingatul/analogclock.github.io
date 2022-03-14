setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    let Hrotation = 30*htime + mtime/2;
    let Mrotation = 6*mtime;
    let Srotation = 6*stime;
    
    hour.style.transform = `rotate(${Hrotation}deg)`;
    minute.style.transform = `rotate(${Mrotation}deg)`;
    second.style.transform = `rotate(${Srotation}deg)`;
}, 1000);