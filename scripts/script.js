
        var listAdded=[];
        
        var pos="pos";
        var value="value";
        var isSelected="isSelected";
        var i=0;
    $(document).ready(function(){
        /*Event for Adding To List:Add Button*/
        $("button.add").click(function(){
            var listObj={};
            // console.log($("input.txt").val());
            // $("input.txtarea").val($("input.txt").val());
            // $("input.txt").val("");
            
            $("#txtList ul").append("<li> <input type='checkbox' class='chkbox'></input>"+$("input.txt").val()+"<button class='remove'>remove</button></li>");
            listObj[pos]=i++; listObj[isSelected]=false; listObj[value]=$("input.txt").val();
             listAdded.push(listObj);
            
            $("input.txt").val("");

            // console.log(listObj);
            console.log("Data ADDED in List:- ")
             console.log(listAdded);

        })

        /*Event For Removing From List:Remove Button*/
        $("#txtList ul").on("click","button.remove",function(){
 
            //console.log(listAdded.filter((val,index)=>(index!==$(this).parent().index())));
            listAdded=listAdded.filter((val,index)=>index!==$(this).parent().index());
            $(this).parent().remove();

            console.log("Data REMOVED from List:- ")
            console.log(listAdded);

            
        })

        /*Event For CheckBox Selection:CheckBox*/
        $("#txtList ul").on("change","input.chkbox",function(){

            // console.log($(this).is(":checked"));
            // console.log($(this).parent().index())
            
            // console.log(listAdded.reduce((acc,curr,index,arr)=>{
            //     // console.log('acc');
            //     // console.log(acc);
            //     // console.log('curr');
            //     // console.log(curr);
            //     // console.log('index');
            //     // console.log(index);
            //     // console.log('arr');
            //     // console.log(arr);
               
            //     if($(this).parent().index()===index && $(this).is(":checked"))
            //     arr[$(this).parent().index()].isSelected=true;

            //     return arr;

            // },0))

            listAdded=listAdded.reduce((acc,curr,index,arr)=>{

                if($(this).parent().index()===index && $(this).is(":checked"))
                    arr[index].isSelected=true;
                    else if($(this).parent().index()===index && !$(this).is(":checked"))
                    arr[index].isSelected=false;

                    return arr;
            },0)

            console.log("Selected CHECKBOX in List:- ")
            console.log(listAdded);
        })

    });
 
