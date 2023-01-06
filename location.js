$(function () {
  const bodyArea = $("body");
  var location_change = function () {
    location.href = "index.html";
  };
  var tm = 3 * 60 * 1000; //3分間で一覧に戻る（画面放置対策）
  timer = setTimeout(location_change, tm);
  //クリック動作があればタイマーリセットして再度移動操作を行う
  bodyArea.mousemove(function () {
    clearTimeout(timer);
    timer = setTimeout(location_change, tm);
  });
});
