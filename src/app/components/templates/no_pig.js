
const noPigTemplate = model => {

  var noPigClass = "hidden";
  if(model.hasPig===false){
      noPigClass = "visible";
  }
  return `<section class="${noPigClass}">
     Nie masz jeszczze świnki? <a class="badge badge-primary" href="#/bank">Stwórz Nową!</a>
    </section>`;
}

export default noPigTemplate;