export interface QuickWin {
  title: string;
  description: string;
  timeToImplement: string;
  impact: string;
  sourceEpisode: string;
  episodeTimestamp: string;
}

export interface RelatedEpisode {
  id: string;
  title: string;
  relevance: string;
  url: string;
}

export interface MockResult {
  stage: string;
  stageLabel: string;
  pillar: string;
  headline: string;
  severity: 'low' | 'medium' | 'high';
  severityLabel: string;
  diagnosis: string;
  benchmarkData: string;
  quickWins: QuickWin[];
  relatedEpisodes: RelatedEpisode[];
}

export const MOCK_RESULT: MockResult = {
  stage: 'medium',
  stageLabel: 'Rostoucí e-shop (5-30M Kč/rok)',
  pillar: 'finance-marze',
  headline: 'Hlavní riziko: Finance a marže',
  severity: 'high',
  severityLabel: 'Vysoká',
  
  diagnosis: `Rostete, ale marže klesá. Typický problém této fáze: Neznáte marketing profit 1.

Benchmark pro retail: 10-15% PNO
Vaše pravděpodobné PNO: 25-35%
→ Krvácení: ~300k Kč/měsíc

Problém často spočívá v tom, že sledujete špatné metriky. PNO vám řekne, kolik platíte za objednávku, ale marketing profit vám řekne, kolik vám skutečně zbude.`,
  
  benchmarkData: `68% e-shopů v této fázi má PNO nad 20%. 
Nejúspěšnější drží pod 15% a aktivně kategorizují produkty podle ziskovosti.`,
  
  quickWins: [
    {
      title: 'Spočítejte marketing profit 1',
      description: 'Formula: Obrat - Variabilní náklady - Marketing = Profit. Toto je číslo, které skutečně vám zbude. Začněte sledovat tuto metriku týdně a zjistíte, kde reálně prodělává váš marketing.',
      timeToImplement: '2 hodiny',
      impact: 'Vysoký',
      sourceEpisode: 'E91',
      episodeTimestamp: '09:00'
    },
    {
      title: 'Kategorizujte produkty A/B/C/D',
      description: 'Rozdělte produkty podle marže (vysoká/nízká) a objemu prodeje (vysoký/nízký). Kategorie D (low margin + low volume) vyřaďte z reklamy. Potenciální úspora: 15-20% ad spend.',
      timeToImplement: '4 hodiny',
      impact: 'Vysoký',
      sourceEpisode: 'E63',
      episodeTimestamp: '16:00'
    },
    {
      title: 'Stanovte PNO podle typu businessu',
      description: 'Retail s přeprodejovou marží 20-30%: max PNO 10-15%. Výrobce s marží 60-80%: můžete jít až na 30-40% PNO. Upravte očekávání podle vaší reality.',
      timeToImplement: '1 hodina',
      impact: 'Střední',
      sourceEpisode: 'E76',
      episodeTimestamp: '12:30'
    }
  ],
  
  relatedEpisodes: [
    {
      id: 'E76',
      title: 'Jak si stanovit rozpočet pro Meta Ads',
      relevance: 'Řeší PNO a marže podle typu businessu',
      url: '#'
    },
    {
      id: 'E91',
      title: 'Sokol - Účetnictví pro e-shopy',
      relevance: 'Marketing profit vs PNO - klíčová metrika',
      url: '#'
    },
    {
      id: 'E63',
      title: 'Proč nechodí kvalitní poptávky',
      relevance: 'A/B/C/D kategorizace produktů',
      url: '#'
    }
  ]
};
