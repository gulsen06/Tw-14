const zaman = () => {
  const clock = document.querySelector("#saat");
  let bugun = new Date();
  console.log(bugun);
  let sa = bugun.getHours();
  console.log(sa);
  let dk = bugun.getMinutes();
  let sn = bugun.getSeconds();

  let pm = sa < 12 ? `<span>AM</span>` : `<span>PM</span>`;
  sa = sa > 12 ? sa - 12 : sa;
  //   zamanin sayisi 10 dan kücük olursa -------------------
  sa = ondanKucuk(sa);
  dk = ondanKucuk(dk);
  sn = ondanKucuk(sn);

  clock.innerHTML = `${sa}:${dk}:${sn} ${pm}`;
  setTimeout(function () {
    zaman();
  }, 500);
};
const ondanKucuk = (i) => {
  i < 10 ? (i = "0" + i) : null;
  return i;
};
zaman();
