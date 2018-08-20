//config:
function configPro(idContainer,quantity,linkConfig,product_id,product_price,idConfigSelected){
  $.get(linkConfig, function(data, status){
    var data = JSON.parse(data);
    var product_config = data;
    var configAttribute = [];
    var arrConfig = [];
    var currentID = [];
    var currentCheckID = [];
    var arrEnable = [];
    var currentParent = "";
    var htmlTableConfig = "";
    var htmlVersion = "";
    var proID = product_id;
    var color_code = "mau_sac_config";
    var proPrice = product_price;
    var hasAddon = false;
    
    //Tạo mảng configAttribute chứa các config_attribute
    Object.keys(product_config.config_list).forEach(function(key, keyIndex) {
      configAttribute.push(product_config.config_list[key].config_attribute);
    });
    
    /*Tạo giao diện chọn thuộc tính
    for (var i = 0; i < product_config.filter.length; i++) {
      var filter = product_config.filter[i];
      var value_list = product_config.filter[i].value_list;
      if (filter.code.indexOf('color') > -1 || filter.code.indexOf('mau_sac') > -1) {
        htmlTableConfig += "<div class='item-config'>";
        htmlTableConfig += "<p class='title'>Màu sắc</p>";
        htmlTableConfig += "<p class='mau_sac_config'>";
        for (var j = 0; j < value_list.length; j++) {
          var name_c = value_list[j].name;
          var color = name_c.substring(0, 7);
          var text = name_c.substr(9);
          
          htmlTableConfig += "<b style='background-color:"+color+"' id='" + value_list[j].id + "' class='item-attribute-config'><i class='text'>" + text + "</i></b>"
          
        }
        htmlTableConfig += "</p></div>";
      }else {
        htmlTableConfig += "<div class='item-config'>";
        htmlTableConfig += "<p class='title'>" + filter.name + "</p>";
        htmlTableConfig += "<p>";
        for (var j = 0; j < value_list.length; j++) {
          var name = value_list[j].name;
          
          htmlTableConfig += "<b id='" + value_list[j].id + "' class='item-attribute-config'><span class='bg-selected'></span>" + name + "</b>"
        }
        htmlTableConfig += "</p></div>";
      }
    }
   	*/
    
    //Tạo giao diện chọn thuộc tính
    for (var i = 0; i < product_config.filter.length; i++) {
      var filter = product_config.filter[i];
      var value_list = product_config.filter[i].value_list;
      if (filter.code.indexOf('color') > -1 || filter.code.indexOf('mau_sac') > -1) {
        htmlTableConfig += "<div class='item-config'>";
        htmlTableConfig += "<p class='title'>Màu sắc</p>";
        htmlTableConfig += "<p class='mau_sac_config'><span class='config-selected'></span><span class='content'>";
        for (var j = 0; j < value_list.length; j++) {
          var name_c = value_list[j].name.split("|");
          var color = name_c[0].trim();
          var text = name_c[1].trim();
          
          htmlTableConfig += "<b id='" + value_list[j].id + "' class='item-attribute-config'><i class='text'>" + text + "</i></b>";
          
        }
        htmlTableConfig += "</span></p></div>";
      }else {
        htmlTableConfig += "<div class='item-config'>";
        htmlTableConfig += "<p class='title'>" + filter.name + "</p>";
        htmlTableConfig += "<p>";
        for (var j = 0; j < value_list.length; j++) {
          var name = value_list[j].name;
          
          htmlTableConfig += "<b id='" + value_list[j].id + "' class='item-attribute-config'><span class='bg-selected'></span>" + name + "</b>"
        }
        htmlTableConfig += "</p></div>";
      }
    }
   	
    
    //Chọn lại
    function resetConfigSelected(a) {
      $("." + a).removeClass("selected");
      $("." + a).removeClass("disable");
      $("." + a).find("span").remove();
      currentID = [];
      
      resetAll();
    }
    
    //Kiểm tra mảng con có thuộc mảng cha hay không
    function isItemInArray(array, item) {
      var r = true;
      for (var i = 0; i < item.length; i++) {
        if (array.indexOf(item[i]) == -1) r = false;
      }
      return r;
    }
    
    //Format giá tiền
    function formatCurrency(a) {
      var b = parseFloat(a).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1.").toString();
      var len = b.length;
      b = b.substring(0, len - 3);
      return b;
    }
    
    //So sánh 2 mảng bằng nhau
    function compareArrays(arr1, arr2) {
      return $(arr1).not(arr2).length == 0 && $(arr2).not(arr1).length == 0
    };
    
    //Tảo mảng các thuộc tính đã được chọn theo ID
    function getCurrentId(a) {
      var item_attribute = $(a);
      b = [];
      item_attribute.each(function() {
        if ($(this).hasClass("selected")) {
          b.push($(this).attr("id"));
        }
      });
      return b;
    }
    
    
    
    for (var i = 0; i < configAttribute.length; i++) {
      var temp = configAttribute[i].split("-");
      arrConfig.push(temp);
    }
    $("#"+idContainer).html(htmlTableConfig);
    $("#"+idContainer+" .item-attribute-config").click(function() {
      
      if ($(this).hasClass("disable")) {
        return false;
      }
      if ($(this).hasClass("selected")) {
        	return false;
      } else {
        $("#"+idContainer+" .config-selected").text($(this).find("i").text());
        $(this).parent().find(".item-attribute-config").removeClass("selected");
        $(this).addClass("selected");
        $(this).addClass("enabled");
      }
      
      currentID = getCurrentId("#"+idContainer+" .item-attribute-config");
      
      $("#"+idContainer+" .item-attribute-config").removeClass("disable");
      $("#"+idContainer+" .item-attribute-config").removeClass("enabled");
      $("#"+idContainer+" .item-attribute-config.selected").addClass("enabled");
      currentCheckID = [];
      
      $("#"+idContainer+" .item-attribute-config").each(function() {
        currentCheckID = [];
        var id = $(this).attr("id");
        
        $(this).parent().find(".item-attribute-config").removeClass("enabled");
        $(this).addClass("enabled");
        
        $("#"+idContainer+" .item-attribute-config").each(function() {
          if ($(this).hasClass("enabled")) currentCheckID.push($(this).attr("id"))
        });
        
        var disable = true;
        for (var i = 0; i < arrConfig.length; i++) {
          var arrTemp = arrConfig[i];
          if (isItemInArray(arrTemp, currentCheckID)) disable = false;
        }
        if (disable == true) $(this).addClass("disable");
        
        $("#"+idContainer+" .item-attribute-config").removeClass("enabled");
        $("#"+idContainer+" .item-attribute-config.selected").addClass("enabled");
        currentCheckID = [];
      });
      
      for (var i = 0; i < arrConfig.length; i++) {
        var arrTemp = arrConfig[i];
        
        if (compareArrays(currentID, arrTemp)) {
          var key = "";
          for (var n = 0; n < arrTemp.length; n++) {
            if (n > 0) key += "_" + arrTemp[n];
            else key += arrTemp[n];
          }
          key = "a" + key;
          var priceConfig = product_config.config_list[key].price;
          var idConfig = product_config.config_list[key].id;
          var nameConfig = product_config.config_list[key].name;
          
          $("#"+idContainer).attr("data-id",idConfig);
          $("#"+idContainer).attr("data-name",nameConfig);
          $("#"+idContainer).attr("data-price",priceConfig);
          $("#"+idContainer).attr("data-product-id",product_id);
        }
        
        if (isItemInArray(arrTemp, currentID)) {
          for (var j = 0; j < arrTemp.length; j++) {
            if (currentID.indexOf(arrTemp[j]) == -1) $("#" + arrTemp[j]).removeClass("disable");
          }
        }
      }//for
    });
    
    
    if(idConfigSelected!=''){

      Object.keys(product_config.config_list).forEach(function(key, keyIndex) {
        var config_attribute = "";
        var arr_id = [];
        if(product_config.config_list[key].id == idConfigSelected){
          config_attribute = product_config.config_list[key].config_attribute;
          arr_id = config_attribute.split("-");
        }
        
        arr_id.forEach(function(item,index){
          $("#"+idContainer+" #"+arr_id[index]).click();   
        });
      });
    }else{
      //Chọn cấu hình đầu tiên
      for(var i=0; i < arrConfig[0].length; i++){
        $("#"+idContainer+" #"+arrConfig[0][i]).click();
      }                                           
    }
    
    
    
    //Hiển thị ảnh cho thuộc tính màu sắc
    /*
    $("#"+idContainer+" ."+color_code+" b").each(function(){
      var colorId = $(this).attr("id");
      
      
      for (var i = 0; i < arrConfig.length; i++) {
        var key = "";
        var arrTemp = arrConfig[i];
        if($.inArray(colorId,arrTemp) > -1){
          for (var n = 0; n < arrTemp.length; n++) {
            if (n > 0) key += "_" + arrTemp[n];
            else key += arrTemp[n];
          }
          key = "a" + key;
          var img = product_config.config_list[key].image;
          if(img!=''){$(this).html("<span class='bg-selected'></span><img src='/media/product/"+img+"' />"); break;}
        }
        
      }
      
    });
    
    */
    
  });
}
