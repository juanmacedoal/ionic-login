(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{Zb87:function(e,n,o){"use strict";o.r(n),o.d(n,"mdTransitionAnimation",function(){return i});const i=(e,n,o)=>{const i="back"===o.direction,t=o.leavingEl,r=a(o.enteringEl),s=r.querySelector("ion-toolbar"),c=new e;if(c.addElement(r).beforeRemoveClass("ion-page-invisible"),i?c.duration(o.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):c.duration(o.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("translateY","40px","0px",!0).fromTo("opacity",.01,1,!0),s){const n=new e;n.addElement(s),c.add(n)}if(t&&i){c.duration(o.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const n=new e;n.addElement(a(t)).fromTo("translateY","0px","40px").fromTo("opacity",1,0),c.add(n)}return Promise.resolve(c)},a=e=>e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}}]);