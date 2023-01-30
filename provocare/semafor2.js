function startTrafficSignal () {
    let green=document.getElementById("greenn");
    let red=document.getElementById("redd");
    let yellow=document.getElementById("yelloww");
  
    green.style.opacity=1;
    setTimeout(function () {
        greenn.style.opacity=.3;
        redd.style.opacity=.3;
        yelloww.style.opacity=1;
    },12000);
  
    setTimeout(function () {
        greenn.style.opacity=.3;
        redd.style.opacity=1;
        yelloww.style.opacity=.3;
    },7000);
  
    setTimeout(function () {
        greenn.style.opacity=1;
        redd.style.opacity=.3;
        yelloww.style.opacity=.3;
    },5000);
  }
  
  let timer=setInterval(function () {
    startTrafficSignal();
  },12000);
  
  startTrafficSignal();