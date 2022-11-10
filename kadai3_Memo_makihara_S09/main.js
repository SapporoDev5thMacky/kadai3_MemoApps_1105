// カレンダー

$(function() {
  $('#duedate').datepicker({
 
    changeMonth: true,
    duration: 300,
    showAnim: 'show'
 
});

});
//1.Save クリックイベント
$("#save").on("click",function(){
    const key = $("#key").val();
    const value = $("#memo").val();
    const date = $("#duedate").val();
    var obj = {
        value : value,
        date : date
      };
  var obj = JSON.stringify(obj);
  localStorage.setItem(key, obj);

    const html = '<tr><th>'+date+'</th><td>'+key+'</td><td>'+value+'</td><td><button class="remove">DONE</button></td></tr>';
    $("#list").append(html);
    $("input").val("");
    $("textarea").val("");

});
//Local Storageも消去
$("#clear").on("click",function(){
    localStorage.clear();
    $("#list").empty();
});

//ページ読み込み：保存データ取得表示
for(let i=0; i<localStorage.length; i++){
    const key   = localStorage.key(i);
    var jsonObj = localStorage.getItem(key);
    var jsObj = JSON.parse(jsonObj);
    const value = jsObj.value;
    const date = jsObj.date;
    const html = '<tr><th>'+date+'</th><td>'+key+'</td><td>'+value+'</td><td><button class="remove">DONE</button></td></tr>';
    $("#list").append(html);
   
   
}

 // やるべきことが完了しDoneボタンを押したときの処理
$(document).on('click', '.remove', function() {
    $(this).parents('tr').remove();
    


   

});