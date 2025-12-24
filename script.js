
document.getElementById("workshopForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const theme = document.getElementById("theme").value;
  const participants = document.getElementById("participants").value;
  const duration = document.getElementById("duration").value;
  const playful = document.getElementById("playful").value;

  const prompt = `Erstelle einen Workshopplan zum Thema "${theme}" für ${participants} Personen mit einer Dauer von ${duration} Stunden. Soll spielerisch sein: ${playful}.`;

  document.getElementById("output").innerText = "Generiere Vorschlag...";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "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",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  const result = data.choices?.[0]?.message?.content || "Fehler bei der Antwort.";
  document.getElementById("output").innerText = result;
});
