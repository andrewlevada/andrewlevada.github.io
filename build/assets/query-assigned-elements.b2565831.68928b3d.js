/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=(t,i)=>i.kind==="method"&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(r){r.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){typeof i.initializer=="function"&&(this[i.key]=i.initializer.call(this))},finisher(r){r.createProperty(i.key,t)}};function d(t){return(i,r)=>r!==void 0?((n,o,l)=>{o.constructor.createProperty(l,n)})(t,i,r):c(t,i)}/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var e;((e=window.HTMLSlotElement)===null||e===void 0?void 0:e.prototype.assignedElements)!=null;export{d};
