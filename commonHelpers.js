import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as u}from"./assets/vendor-77e16229.js";const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=e[0],a<new Date?(u.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):n.disabled=!1}};function t(e){return e<10?"0"+e:e}function D(e){const r=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:s,minutes:m,seconds:f}}const n=document.querySelector("[data-start]"),i=document.getElementById("datetime-picker");let a;h("#datetime-picker",y);n.addEventListener("click",function(){this.disabled=!0,i.disabled=!0;const e=setInterval(function(){const o=a-new Date;if(o<=0){clearInterval(e),u.success({title:"Success",message:"Countdown finished!"}),n.disabled=!1,i.disabled=!1;return}const{days:c,hours:d,minutes:r,seconds:s}=D(o);document.querySelector("[data-days]").innerText=t(c),document.querySelector("[data-hours]").innerText=t(d),document.querySelector("[data-minutes]").innerText=t(r),document.querySelector("[data-seconds]").innerText=t(s)},1e3)});
//# sourceMappingURL=commonHelpers.js.map