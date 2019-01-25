const createPigTemplate = model => {

  var noPigClass = "visible";
  if(model.hasPig){
      noPigClass = "hidden";
  }
  return `<section class="${noPigClass}">
     <p>Nie masz jeszcze świnki skarbonki, stwórz nową! Wybierz liczbę tygodni,
     przez którą będziesz oszczędzać i tygodniową kwotę. Świnka dopilnuje byś
     dotrzymał słowa, za każdy opuszczony tydzień liczba wpłat do wypłaty rośnie o jeden.
     Gdy wpłacisz ostatnią transzę świnka zwróci Ci całość i trafi do nieba :).
     Bądź sumienny.</p>
     <form >
        <div class="form-group">
            <label for="numOfWeeks">liczba tygodni</label>
            <input type="number" value="${model.pig.numberOfWeeks}" class="form-control" id="numOfWeeks" aria-describedby="emailHelp" placeholder="podaj liczbę tygodni">
            <small id="numOfWeeksHelp" class="form-text text-muted">Liczba wpłat w tygodniowych odstępach, do których ssię zobowiązujesz</small>
        </div>
        <div class="form-group">
            <label for="sumToSave">Kwota</label>
            <input type="number" value="${model.pig.payPerWeek}" class="form-control" id="sumToSave" placeholder="liczba Finney">
            <small id="sumToSaveHelp" class="form-text text-muted">Podaj kwotę wpłaty tygodniowej w 1/1000 części ETH np. 5 oznacza 0,005 ETH</small>
       </div>
        <div onclick="App.currentComponent.actions.addPig()" class="btn btn-primary">Stwórz nową świnkę</div>
     </form>
    </section>`;
}

export default createPigTemplate;