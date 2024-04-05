// find elements
var button = $("button")
var text = $("input")
var area = $("textarea")

// handle click and add class
button.on("click", () => {
  var pr = text.val();

  console.log("PR: " + pr)

  var list_1 = pr * 0.75;
  var list_2 = pr * 0.80;
  var list_3 = pr * 0.85;
  var list_4 = pr * 0.90;
  var list_5 = pr * 0.95;

  area.val("1x 6x " + list_1 + "\n" + "2x 5x " + list_2 + "\n" + "3x 3x " + list_3 + "\n" + "2x 2x " + list_4 + "\n" + "2x 1x " + list_5 + "\n");
})
