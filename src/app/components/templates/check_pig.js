
const checkPigTemplate = model => {

  var noPigClass = "hidden";
  if(model.hasPig){
      noPigClass = "visible";
  }
  return `<section class="${noPigClass}">
     Sprawdź co tam słychać u <a class="badge badge-primary" href="#/mypiggy">Twojej świnki</a>
    </section>`;
}

export default checkPigTemplate;