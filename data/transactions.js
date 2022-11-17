const offerExamples = [
  "Gebruik van Spotify family",
  "Gebruik van Netflix account",
  "Maandelijks gras maaien",
  "Wekelijks boodschappen bezorgen",
  "2 maaltijden per week",
  "3 maaltijden per week",
  "Wekelijks planten wateren",
  "Hond uitlaten",
  "Wekelijks bladeren vegen",
  "Kat voeren tijdens de vakantie",
  "Wekelijkse hulp in het huishouden",
  "Dagelijks carpoolen",
];

export default function getRandomTransaction() {
  const index = Math.round((offerExamples.length - 1) * Math.random());

  const offer = offerExamples[index];

  const filteredOffers = offerExamples.filter((ex) => ex !== offer);

  const index2 = Math.round((filteredOffers.length - 1) * Math.random());

  const offer2 = filteredOffers[index2];

  return { offer: offer, counter: offer2 };
}
