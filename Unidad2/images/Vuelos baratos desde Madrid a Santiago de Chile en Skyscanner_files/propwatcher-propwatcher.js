(window.jsTagManagerJsonpCallback=window.jsTagManagerJsonpCallback||[]).push([[64,63],{110:function(n){n.exports={home:[],news:[],"flights-from":["origin","originIata","destination","destinationIata","outboundDate","inboundDate","currency","adultsV2","childrenV2","cabinClass"],"flights-to":["origin","originIata","destination","destinationIata","outboundDate","inboundDate","currency","adultsV2","childrenV2","cabinClass"],"routes-from":["origin","originIata","destination","destinationIata","outboundDate","inboundDate","currency","adultsV2","childrenV2","cabinClass"],"routes-to":["origin","originIata","destination","destinationIata","outboundDate","inboundDate","currency","adultsV2","childrenV2","cabinClass"],"flights-airline":["origin","originIata","destination","destinationIata","outboundDate","inboundDate","currency","adultsV2","childrenV2","cabinClass"],"flights-browse-view":["originId","originIata","destinationId","destinationIata","outboundDate","inboundDate","cabinClass","search_string","currency","adultsV2","childrenV2"],"flights-month-view":["originId","originIata","destinationId","destinationIata","outboundDate","inboundDate","cabinClass","passengers","search_string","currency","adultsV2","childrenV2"],dayview:["origin","destination","outboundDate","inboundDate","cabinClass","search_string","currency","adultsV2","childrenV2"],skippy:["origin","originIata","destination","destinationIata","outboundDate","inboundDate","cabinClass","carrier","currency","items","adultsV2","childrenV2","price"]}},132:function(n,t,a){"use strict";a.r(t);var i=a(312),e=a(49),r=a(110),o=new e.default("public","js-tag-manager");t.default=function(n){var t=n.pagetype.toLowerCase(),a=Object.keys(r).filter(function(n){return-1!==t.indexOf(n)});if(0!==a.length){var e=Object(i.a)(a,1)[0],s=r[e],u=Object.keys(n),d=s.every(function(n){return-1!==u.indexOf(n)});o.track("sandbox.TagManagerPropStatus",{page:n.pagetype,has_correct_props:d}),d||s.filter(function(n){return-1===u.indexOf(n)}).forEach(function(t){return o.track("sandbox.TagManagerMissingProp",{page:n.pagetype,missing_prop:t})})}}},312:function(n,t,a){"use strict";function i(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var a=[],i=!0,e=!1,r=void 0;try{for(var o,s=n[Symbol.iterator]();!(i=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(u){e=!0,r=u}finally{try{i||null==s.return||s.return()}finally{if(e)throw r}}return a}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return i})}}]);
//# sourceMappingURL=propwatcher-propwatcher.9fae1cf2.chunk.js.map