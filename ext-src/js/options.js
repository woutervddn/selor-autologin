                //var bg;
                //var req;
                
                document.onload = init();
                        
                        function init(){
                                //bg = chrome.extension.getBackgroundPage();
                                restoreOptions();          
                        }
                        
                        function restoreOptions() {
                                var login = localStorage["login"];
                                var pass = localStorage["pass"];
                                if(login != null && pass != null){
                                        document.getElementById("name").value = login;
                                        document.getElementById("password").value = pass;
                                }
                        }
                        document.querySelector('#submit').addEventListener('click', saveOptions);
                        
                        function saveOptions() {
                          var login = document.getElementById("name").value;
                          var pass = document.getElementById("password").value;
                          
                          localStorage["login"] = login;
                          localStorage["pass"] = pass;
                          document.getElementById("status").innerHTML = "Saved!";
                          
                          //self.close();
                        }
                        
                        //function blur_autoupdate(){
                        //        var update = document.getElementById("autoupdate").value;
                        //        update = parseInt(update);
                        //        if(update != null && update != "" && update >= 1){
                        //                update = Math.floor(update);
                        //                document.getElementById("autoupdate").value = update;
                        //                localStorage["fetchFreq"] = update;
                        //                bg.fetchFreq = update;
                        //        }else{
                        //                document.getElementById("autoupdate").value = 60;
                        //        }
                        //}
                        
                        //function blur_clickupdate(){
                        //        var update = document.getElementById("clickupdate").value;
                        //        update = parseInt(update);
                        //        if(update != null && update != "" && update >= 1){
                        //                update = Math.floor(update);
                        //                document.getElementById("clickupdate").value = update;
                        //                localStorage["fetchFreqClick"] = update;
                        //                bg.fetchFreqClick = update;
                        //        }else{
                        //                document.getElementById("clickupdate").value = 10;
                        //        }
                        //}
                        
                        //function blur_remdays(){
                        //        var update = document.getElementById("remdays").checked;
                        //        //document.getElementById("remdays").checked = update;
                        //        localStorage["displayDaysRemain"] = update;
                        //        bg.displayDaysRemain = update;
                        //}
                        /*function blur_multi(){
                                var update = document.getElementById("multi").checked;
                                localStorage["displayMulti"] = update;
                                bg.displayMulti = update;
                        }*/
                        //function blur_PhoneNr(){
                        //        var update = document.getElementById("PhoneNr").checked;
                        //        localStorage["hidePhoneNr"] = update;
                        //        bg.hidePhoneNr = update;
                        //}
                        
                        //function saveCheckbox(evt){
                        //        //alert(evt.toElement.checked);
                        //        bg.simlist[evt.toElement.value][1] = evt.toElement.checked;
                        //        localStorage["simlist"] = JSON.stringify(bg.simlist);
                        //}
                        
                        //function updateSims(){
                        //        document.getElementById("UpdateSims").disabled = true;
                        //        bg.updateSimList();
                        //        document.getElementById("UpdateSims").disabled = false;
                        //}