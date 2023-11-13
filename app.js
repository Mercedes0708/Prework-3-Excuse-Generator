window.onLoad = function (){
let who = ["My dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying","yesterday"];

function excuseGenerator(who, action, what, when) { 
  who = Math.floor(Math.random() * who.length);
  action = Math.floor(Math.random() * action.length);
  what = Math.floor(Math.random() * what.length);
  when = Math.floor(Math.random() * when.length);
  return "${who[who]} ${action[action]} my homework ${when[when]}";
}

  function onLoad(){
  var excusa = document.getElementById("#excuse");
  excusa.innerHTML = excuseGenerator(who, action, what, when);
}
};