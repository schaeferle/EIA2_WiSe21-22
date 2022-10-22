/*
Aufgabe: <L02_EventInspector>
Name: <Elias Schäfer>
Matrikel: <268512>
Datum: <20.10.2022>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/

namespace ScriptRandomPoem {
    window.addEventListener("load", handleLoad);
 
    let span: HTMLElement;
    let button: HTMLElement;
    
    function handleLoad(_event: Event): void {
      let div0: HTMLElement = document.createElement("div");
      div0.classList.add("div0");
      document.body.appendChild(div0);

      let div1: HTMLElement = document.createElement("div");
      div1.classList.add("div1");
      document.body.appendChild(div1);

      span = document.querySelector(".span");

      document.addEventListener("mousemove", setInfoBox);

      div0.addEventListener("click", logInfo);
      div1.addEventListener("click", logInfo);
      document.addEventListener("click", logInfo);
      document.body.addEventListener("click", logInfo);

      div0.addEventListener("keyup", logInfo);
      div1.addEventListener("keyup", logInfo);
      document.addEventListener("keyup", logInfo);
      document.body.addEventListener("keyup", logInfo);
  }
  
    function setInfoBox(_event: MouseEvent): void {

      let x: number = _event.clientX;
      let y: number = _event.clientY; 

      let target: EventTarget = _event.target; 
      span.style.left = x + "px";
      span.style.top = y + "px";
      span.innerHTML = "X-Position: " + x + "px" + "<br>" + "Y-Position: " + y + "px" + "<br>" +  target;
    
}

    function logInfo (_event: Event): void {
    console.log(_event.target);
    console.log(_event.currentTarget);

  }

}