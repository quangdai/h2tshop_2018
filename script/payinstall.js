function hura_payinstall_show_upfront(c,b,e){var a="<select id='rate_upfront_"+b+"' onchange=\"re_calculate_installment('"+b+"')\">";a+="<option value='0'>Chọn</option>";var d=installment_setup[c].pay_upfront;for(i=0;i<d.length;i++){if(i==0){a+="<option value='"+d[i].rate+"' selected>"+d[i].name+"</option>"}else{a+="<option value='"+d[i].rate+"'>"+d[i].name+"</option>"}}a+="</select>";document.getElementById(e).innerHTML=a}function hura_payinstall_show_period(c,b,e){var a="<select id='select_period_"+b+"' onchange=\"re_calculate_installment('"+b+"')\">";a+="<option value='0'>Chọn</option>";var d=installment_setup[c].pay_period;for(i=0;i<d.length;i++){if(i==0){a+="<option value='"+d[i].period+"' selected>"+d[i].name+"</option>"}else{a+="<option value='"+d[i].period+"'>"+d[i].name+"</option>"}}a+="</select>";document.getElementById(e).innerHTML=a}function hura_payinstall_show_provider(e,d,c,b,f){var a="<select id='select_provider_"+e+"' onchange=\"hura_payinstall_pick_provider(this.value, '"+e+"', '"+d+"', '"+c+"', '"+b+"', '"+f+"'  )\">";a+="<option value='0'>Chọn</option>";for(i=0;i<installment_setup.company.length;i++){a+="<option value='"+installment_setup.company[i].index+"'>"+installment_setup.company[i].company_name+"</option>"}a+="</select>";return a}function hura_payinstall_pick_provider(e,d,c,b,a,f){hura_payinstall_show_period(e,d,b);hura_payinstall_show_upfront(e,d,c);document.getElementById("select_provider_"+d).value=e;calculate_installment(d,a,f)}function re_calculate_installment(b){var d=document.getElementById("current_section_id_"+b).value;var c=document.getElementById("current_pay_holder_"+b).value;var a=document.getElementById("current_holder_upfront_"+b).value;calculate_installment(d,c,a)}function writeStringToPrice(f){var e=f.substr(0,f.length%3);var b=f.replace(e,"");var d=b.length/3;var a="";for(var c=0;c<d;c++){group_of_three=b.substr(c*3,3);if(c==d-1){group_of_three="000"}a+=group_of_three;if(c!=(d-1)){a+="."}}if(e.length>0){if(a!=""){return e+"."+a}else{return e}}else{if(a!=""){return a}else{return""}}}function calculate_installment(g,e,c){var b=document.getElementById("select_provider_"+g).value;var d=document.getElementById("rate_upfront_"+g).value;var h=document.getElementById("product_price_"+g).value;var f=document.getElementById("select_period_"+g).value;while(h.indexOf(".")>0){h=h.replace(".","")}h=parseInt(h);var k=h*d;var j=h-k;var a=0;a=j*installment_setup[b].period_rate[f]+j/f;document.getElementById(e).innerHTML=writeStringToPrice(Math.round(a)+"")+" VND";document.getElementById(c).innerHTML=writeStringToPrice(Math.round(k)+"")+" VND";if(document.getElementById("period_payment_"+g)){document.getElementById("period_payment_"+g).innerHTML=f+" tháng"}document.getElementById("current_section_id_"+g).value=g;document.getElementById("current_pay_holder_"+g).value=e;document.getElementById("current_holder_upfront_"+g).value=c};