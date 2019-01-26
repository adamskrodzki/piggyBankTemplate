
const savingsPigTemplate = model => {

  var noPigClass = "hidden";
  var pigImageUrl = "/assets/happypig.gif";
  var feedButtonClass = "btn-primary";
  var feedButtonClass = "btn-primary";
  var additionalText = "Wpłać ether - nakarm Świnię.";
  console.log('savingsPigTemplate',model.weeksSinceLastPayment);
  if(model.hasPig){
      noPigClass = "visible";
  }
  if(model.weeksSinceLastPayment == 0){
      feedButtonClass = "btn-disabled";
      additionalText = "Świna syta ";
  }
  if(model.weeksSinceLastPayment >1){
      pigImageUrl = "/assets/sadpig.jpg";
      additionalText = "To niedobrze głodzić świnkę."+additionalText;
  }
  if(model.weeksSinceLastPayment == 0){
      feedButtonClass = "btn-disabled";
  }
  return `<section class="${noPigClass}">
<div class="card" style="width: 18rem;">
  <img src="${pigImageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Twoja Świnia (${model.sumCollected})</h5>
    <p class="card-text">Ostatnio wrzuciłeś coś do świnki ${model.weeksSinceLastPayment} tygodni temu. ${additionalText}</p>
    <div class="btn ${feedButtonClass}" onclick="App.currentComponent.actions.feedPig()">Nakarm</div>
  </div>
</div>
    </section>`;
}

export default savingsPigTemplate;