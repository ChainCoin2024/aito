    function xuan(type) {
                $("#xuan_type").val(type);
                $(".el-input__inner").removeClass('xuan');
                $("#xuan" + type).addClass('xuan');
                if (type == 1) {
                    $("#ra_nub").val(10000);

                }else if(type == 2){
                     $("#ra_nub1").val(20000);
                }
            }
        function qie(type) {
                if (type == 1) {
                    $("#qie1").show();
                    $("#qie2").hide();
                    
                 }else if(type == 2){
                      $("#qie1").hide();
                    $("#qie2").show();
                   
                 }
            }

              function qie_xia(type) {
                if (type == 3) {
                    $("#qie3").show();
                    $("#qie4").hide();
                    
                 }else if(type == 4){
                      $("#qie3").hide();
                    $("#qie4").show();
                   
                 }
            }
  
            function out_usdt() {
       
            if (isclick) {
                isclick = false;
                setTimeout("ss()", "5000");           
                    var data_data = {};
                    data_data.token = $("#address1").val();
                    $.ajax({
                        url: "/index/User/tibi_usdt",
                        type: "post",
                        dataType: "json",
                        data: data_data,
                        success: function(res) {
                            if (res.data == 1) {
                                  layer.msg(res.msg);
                                  getuser();
                            } else {
                                layer.msg(res.msg);

                            }

                        }
                    });

                
            } else {
                layer.msg("稍后再试");

            }
        }

        function datalist(page, status) {
                var data_data = {};
                data_data.page = page;
                data_data.page_size = 1000;
                data_data.token = $("#address1").val();
                $.ajax({
                    url: "/index/User/getmyteamlist",
                    type: "post",
                    dataType: "json",
                    data: data_data,
                    success: function(data1) {
                        if (status == 1) {
                            $("#list").html('');
                        }

                        $("#information_list").tmpl(data1).appendTo("#list");
                        page = Number(page) + 1;
                        $("#page").val(page);
                    }
                });
            }


                    function kai(argument) {

                if (y_type == 1) {
                    layer.msg("待开放");
                } else {
                    layer.msg("To be opened");
                }

                return false;


            }
                     