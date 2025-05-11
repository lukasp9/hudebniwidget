(function () {
  // Kontrola, zda widget již existuje, nespouštěj znovu
  if (document.getElementById("persistent-music-widget")) return;

  const container = document.createElement("div");
  container.id = "persistent-music-widget";
  container.style.position = "fixed";
  container.style.bottom = "20px";
  container.style.right = "20px";
  container.style.zIndex = "999999";

  // Lze později upravit nebo skrýt přes CSS
  container.style.pointerEvents = "auto";

  // Vložení widgetu
  const script = document.createElement("script");
  script.src = "https://wdg.fouita.com/widgets/0x24748c.js";
  script.async = true;

  container.appendChild(script);
  document.body.appendChild(container);

  // Volitelně: reaguj na Crisp, pokud chceš skrývat widget (použij později)
})();
