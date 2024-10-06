function toggleMode() {
  //seletor de função(), para que quando apertar o botão: (lua e sol), fazer a mudança.

  const html = document.documentElement;

  // pode ser o código abaixo!

  // if (html.classList.contains("light")); {   (se na classe lista do  html contém (light))
  // html.classList.remove("light");    (remova o (light), da classe lista do html).
  // } else {   (senão contém).
  // html.classList.add("light");  (adcione na classe lista do html o (light)).
  //}
  //         ou esse código abaixo!

  html.classList.toggle("light"); //código (toggle),simplificado para, se tiver o (light), ele tira se não tiver ele coloca)

  const img = document.querySelector("#profile img"); //código para pegar a imagem, quando clicar em (lua e sol).

  //código para substituir a imagem.
  if (html.classList.contains("light")) {
    //se tiver sem light mode, manter a imagem normal conforme abaixo:
    img.setAttribute("src", "./imagem/avatar.png");
  } else {
    //se tiver light mode, adicione a imagem light conforme abaixo:
    img.setAttribute("src", "./imagem/avatar-light.png");
  }
}
