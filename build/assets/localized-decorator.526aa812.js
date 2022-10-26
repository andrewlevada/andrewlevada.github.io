import{L as o}from"./index.dd84ea55.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a{constructor(t){this.__litLocalizeEventHandler=n=>{n.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(o,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(o,this.__litLocalizeEventHandler)}}const d=e=>e.addController(new a(e)),i=d;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=()=>e=>typeof e=="function"?c(e):s(e),h=l,s=({kind:e,elements:t})=>({kind:e,elements:t,finisher(n){n.addInitializer(i)}}),c=e=>(e.addInitializer(i),e);export{h as l};
