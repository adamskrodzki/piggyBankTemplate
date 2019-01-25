
const createPigTemplate = model => {

  var noPigClass = "visible";
  if(model.hasPig){
      noPigClass = "hidden";
  }
  return `<section class="${noPigClass}">
     Nie masz jeszcze świnki skarbonki, stwórz jedną
    </section>`;
}

export default createPigTemplate;