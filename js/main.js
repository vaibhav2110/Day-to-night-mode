document.addEventListener("DOMContentLoaded", () => {
  let firstSection = document.getElementsByClassName("wrapper_night")[0];
  let division = document.getElementById("division");
  firstSection.style.width = 0;

  dragElement(division);

  function dragElement(elmnt){
    let pos1 = 0, pos2 = 0;

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e.preventDefault();

      pos2 = e.clientX;

      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e.preventDefault();

      pos1 = pos2 - e.clientX; // calculate the delta
      console.log(pos1, pos2);
      pos2 = e.clientX;

      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      firstSection.style.width = elmnt.style.left;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
});