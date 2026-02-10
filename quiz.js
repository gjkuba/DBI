let punkty = 0;


const pytania = [
  {
    tresc: "Czy powinno się używać tego samego hasła wszędzie?",
    poprawna: false
  },
  {
    tresc: "Czy warto używać menedżera haseł?",
    poprawna: true
  },
  {
    tresc: "Czy hasło '123456' jest bezpieczne?",
    poprawna: false
  },
  {
  tresc: "Czy dwuskładnikowe uwierzytelnianie (2FA) zwiększa bezpieczeństwo konta?",
  poprawna: true
},
{
  tresc: "Czy zapisywanie haseł na kartce przy komputerze jest bezpieczne?",
  poprawna: false
}

];

let index = 0;

const pytanieEl = document.getElementById("pytanie");
const wynikEl = document.getElementById("wynik");

function pokazPytanie() {
  pytanieEl.innerText = pytania[index].tresc;
  wynikEl.innerText = "";
}

function odpowiedz(wybor) {
  if (wybor === pytania[index].poprawna) {
    wynikEl.innerHTML = "Brawo! To poprawna odpowiedź 🎉";
    punkty++;
  } else {
    wynikEl.innerHTML = "Niestety, to błędna odpowiedź ❌";
  }

  index++;

  if (index < pytania.length) {
    setTimeout(pokazPytanie, 1200);
  } else {
    setTimeout(pokazWynik, 1200);
  }
}
function pokazWynik() {
  pytanieEl.innerHTML = "🎯 Koniec quizu!";
  wynikEl.innerHTML = `Twój wynik: <strong>${punkty} / ${pytania.length}</strong>`;
}


pokazPytanie();
