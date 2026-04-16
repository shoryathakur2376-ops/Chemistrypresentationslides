import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './components/ui/button';

interface Slide {
  id: number;
  type: 'title' | 'content' | 'image-content' | 'interactive' | 'question';
  title?: string;
  subtitle?: string;
  bullets?: string[];
  image?: string;
  imagePosition?: 'left' | 'right' | 'background';
  notes?: string;
  question?: string;
  options?: string[];
}

const slides: Slide[] = [
  {
    id: 1,
    type: 'title',
    title: 'Chemistry in Daily Life',
    subtitle: 'Dry Cleaning: Chemical Agents and Environmental Significance',
    image: 'https://images.unsplash.com/photo-1761095596584-34731de3e568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaXN0cnklMjBsYWJvcmF0b3J5JTIwYmVha2Vyc3xlbnwxfHx8fDE3NzYyNjUyNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imagePosition: 'background',
    notes: 'Presented by: Shorya Singh | Roll Number: 2501660041 | KR Mangalam University'
  },
  {
    id: 2,
    type: 'question',
    title: 'Prior Knowledge Activation',
    question: '🤔 What happens to oil stains on clothes when you wash them with water?',
    bullets: [
      'Why doesn\'t water remove grease?',
      'What alternatives might exist?',
      'Ever noticed "dry clean only" labels?'
    ],
    notes: 'This activates students\' understanding of polar vs non-polar substances. Water is polar and cannot dissolve non-polar oil/grease stains. This fundamental concept is key to understanding why dry cleaning uses different solvents.'
  },
  {
    id: 3,
    type: 'image-content',
    title: 'Common Misconceptions',
    image: 'https://images.unsplash.com/photo-1582479429421-321775166674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnklMjBjbGVhbmluZyUyMGNsb3RoZXMlMjBoYW5naW5nfGVufDF8fHx8MTc3NjMyMTc2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    imagePosition: 'left',
    bullets: [
      '❌ Dry cleaning uses NO water at all',
      '❌ All chemicals are equally safe',
      '❌ Process leaves clothes completely "dry"',
      '✅ Uses liquid solvents, not water'
    ],
    notes: 'Dry cleaning is actually "wet" but uses organic solvents instead of water. The term "dry" refers to the absence of water, not the absence of liquid. Small amounts of water may be added. Not all solvents have the same environmental or health impacts.'
  },
  {
    id: 4,
    type: 'content',
    title: 'What is Dry Cleaning?',
    bullets: [
      'Cleaning process using non-aqueous solvents',
      'Dissolves grease, oils, and organic stains',
      'Preserves delicate fabrics',
      'Invented in 1855 by Jean Baptiste Jolly'
    ],
    notes: 'Dry cleaning removes stains that water-based cleaning cannot. The process uses organic solvents that are effective on non-polar substances like oils, greases, and certain stains. It\'s essential for garments that would be damaged by water or traditional washing methods.'
  },
  {
    id: 5,
    type: 'image-content',
    title: 'Chemistry Principle: Like Dissolves Like',
    image: 'https://images.unsplash.com/photo-1758685848663-784d2f7051d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2xlY3VsYXIlMjBzdHJ1Y3R1cmUlMjBjaGVtaXN0cnklMjBkaWFncmFtfGVufDF8fHx8MTc3NjMyMjEwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    imagePosition: 'right',
    bullets: [
      'Polar solvents dissolve polar substances',
      'Non-polar solvents dissolve non-polar substances',
      'Water (polar) ≠ Oil/Grease (non-polar)',
      'Organic solvents (non-polar) ✓ Oil/Grease'
    ],
    notes: 'The fundamental chemistry principle is polarity. Water molecules are polar (have positive and negative ends due to O-H bonds). Oils and greases are non-polar hydrocarbons. Polar and non-polar substances don\'t mix. Dry cleaning solvents are non-polar or have low polarity, making them effective at dissolving non-polar stains that water cannot remove.'
  },
  {
    id: 6,
    type: 'image-content',
    title: 'Chemical Agent: Perchloroethylene',
    image: 'https://images.unsplash.com/photo-1707135719639-409915fbc68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMG1vbGVjdWxlcyUyMHN0cnVjdHVyZXxlbnwxfHx8fDE3NzYzMjE3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imagePosition: 'right',
    bullets: [
      'Formula: C₂Cl₄ (PERC/PCE)',
      'Most common solvent (70% usage)',
      'Excellent cleaning power',
      'Non-flammable and stable'
    ],
    notes: 'Perchloroethylene (tetrachloroethylene) has been the industry standard since the 1930s. It effectively dissolves oils and greases without damaging most fabrics. Its chemical stability and non-flammability made it ideal for commercial use, though environmental concerns have grown.'
  },
  {
    id: 7,
    type: 'content',
    title: 'PERC Properties & Mechanism',
    bullets: [
      'Boiling point: 121°C - easy recovery',
      'High density: 1.62 g/cm³',
      'Low surface tension - penetrates fibers',
      'Chlorinated hydrocarbon structure',
      'Recycles in closed-loop systems'
    ],
    notes: 'PERC\'s physical properties make it ideal for dry cleaning: its boiling point allows easy distillation and recovery, low surface tension enables deep penetration into fabric fibers, and its density helps separate from water and debris. Modern machines use closed-loop systems that recycle 99% of the solvent, reducing emissions and costs.'
  },
  {
    id: 8,
    type: 'content',
    title: 'Chemical Agent: Hydrocarbons',
    bullets: [
      'Petroleum-based solvents (DF-2000, EcoSolv)',
      'Less aggressive than PERC',
      'Mild odor, gentler on fabrics',
      'Flammable - requires special equipment'
    ],
    notes: 'Hydrocarbon solvents are derived from petroleum. They are less toxic than PERC but have flammability concerns requiring special machinery. Popular brands include Stoddard solvent and newer refined hydrocarbons like EcoSolv, which have better environmental profiles.'
  },
  {
    id: 9,
    type: 'image-content',
    title: 'Modern Alternatives',
    image: 'https://images.unsplash.com/photo-1687517133266-7d952efc3362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHN1c3RhaW5hYmxlJTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzc2MzIxNzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imagePosition: 'left',
    bullets: [
      'Liquid CO₂ (Green Earth)',
      'Silicone-based (GreenEarth - D5)',
      'Wet cleaning (water + detergents)',
      'Biodegradable alternatives emerging'
    ],
    notes: 'Modern "green" dry cleaning methods include: 1) Liquid CO₂ systems that use pressurized carbon dioxide; 2) Silicone-based solvents (cyclic siloxanes like D5) that break down to sand, water, and CO₂; 3) Professional wet cleaning using computer-controlled water-based processes with specialized detergents.'
  },
  {
    id: 10,
    type: 'content',
    title: 'Liquid CO₂ Technology',
    bullets: [
      'Uses recycled CO₂ under pressure',
      'Non-toxic and non-flammable',
      'Zero ozone depletion potential',
      'Effective at 1000 PSI pressure',
      'Energy-intensive process'
    ],
    notes: 'Liquid CO₂ cleaning uses carbon dioxide in its liquid state (achieved under high pressure). The CO₂ is typically captured from industrial processes, making it environmentally friendly. It\'s non-toxic, leaves no residue, and the CO₂ can be recycled indefinitely. However, the equipment is expensive and requires significant energy to maintain pressure.'
  },
  {
    id: 11,
    type: 'image-content',
    title: 'Solvent Comparison Chart',
    image: 'https://images.unsplash.com/photo-1630917937606-bf5b60331d69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYXJpc29uJTIwdmVyc3VzJTIwY2hvaWNlfGVufDF8fHx8MTc3NjMyMjEwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    imagePosition: 'left',
    bullets: [
      'PERC: Best cleaning, high toxicity',
      'Hydrocarbons: Moderate clean, flammable',
      'Silicone: Good clean, biodegradable',
      'CO₂: Gentle clean, eco-friendly'
    ],
    notes: 'Each solvent has trade-offs: PERC offers superior cleaning but poses health/environmental risks; hydrocarbons are safer but flammable; silicone-based solvents provide good cleaning with better environmental profiles; CO₂ is the most eco-friendly but requires expensive equipment and may not clean as effectively for heavy stains.'
  },
  {
    id: 12,
    type: 'image-content',
    title: 'Environmental Impact: Air Pollution',
    image: 'https://images.unsplash.com/photo-1759384628232-134f0d2f154d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwcG9sbHV0aW9uJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzYzMjE3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imagePosition: 'right',
    bullets: [
      'VOC emissions contribute to smog',
      'PERC: Photochemical oxidant precursor',
      'Greenhouse gas contributions',
      'Indoor air quality concerns'
    ],
    notes: 'Dry cleaning solvents, especially PERC, are volatile organic compounds (VOCs) that evaporate into the atmosphere. They contribute to ground-level ozone and smog formation. PERC has a global warming potential 10 times that of CO₂. Residual solvents on clothing can off-gas in homes, affecting indoor air quality, particularly for workers and residents near facilities.'
  },
  {
    id: 13,
    type: 'image-content',
    title: 'Environmental Impact: Water & Soil',
    image: 'https://images.unsplash.com/photo-1606214554672-6d2b0dcea9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGRyb3BsZXRzJTIwY2xlYW58ZW58MXx8fHwxNzc2MzIxNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imagePosition: 'left',
    bullets: [
      'Groundwater contamination from spills',
      'Soil contamination at disposal sites',
      'Persistent in environment (years)',
      'Bioaccumulates in food chain'
    ],
    notes: 'PERC is denser than water and can sink through aquifers, contaminating drinking water supplies. It persists in the environment for years, resisting natural breakdown. Improper disposal or leaks from underground storage tanks have created numerous contaminated sites. PERC bioaccumulates in fatty tissues of organisms, moving up the food chain and potentially affecting human health through consumption.'
  },
  {
    id: 14,
    type: 'image-content',
    title: 'Health Risks & Toxicity',
    image: 'https://images.unsplash.com/photo-1758691462615-beafbf50bf3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBtZWRpY2FsJTIwc2FmZXR5fGVufDF8fHx8MTc3NjMyMjEwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    imagePosition: 'right',
    bullets: [
      'Carcinogen - Group 2A (IARC)',
      'Neurological effects: dizziness, headaches',
      'Liver and kidney damage',
      'Worker exposure risks highest'
    ],
    notes: 'PERC is classified as "probably carcinogenic to humans" by the International Agency for Research on Cancer. Short-term exposure causes dizziness, headaches, and respiratory irritation. Chronic exposure is linked to liver damage, kidney dysfunction, and increased cancer risk (especially bladder, esophageal, and cervical cancers). Dry cleaning workers face the highest exposure levels.'
  },
  {
    id: 15,
    type: 'image-content',
    title: 'Regulatory Framework',
    image: 'https://images.unsplash.com/photo-1772695674685-f471e5e95511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWd1bGF0aW9uJTIwZ292ZXJubWVudCUyMHBvbGljeXxlbnwxfHx8fDE3NzYzMjIxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imagePosition: 'left',
    bullets: [
      'EPA regulations (USA) - phasing out',
      'California: PERC banned by 2023',
      'EU: Strict emission limits',
      'India: Growing awareness, limited rules'
    ],
    notes: 'The US EPA has implemented regulations requiring dry cleaners to phase out PERC machines and install vapor recovery systems. California completely banned PERC in dry cleaning by 2023. The European Union has strict emission limits under REACH regulations. In India, environmental regulations are developing, but enforcement remains a challenge. Many countries are moving toward safer alternatives.'
  },
  {
    id: 16,
    type: 'interactive',
    title: 'Think-Pair-Share Activity',
    question: 'Discuss: Should PERC be completely banned? Consider both sides.',
    bullets: [
      '💭 Think: 2 minutes individually',
      '👥 Pair: Discuss with partner (3 min)',
      '🗣️ Share: Present to class'
    ],
    notes: 'Encourage students to consider: Economic impacts on dry cleaning businesses, availability and cost of alternatives, environmental health benefits, timeline for transition, regulatory approaches. This develops critical thinking about balancing economic, environmental, and social factors in policy decisions.'
  },
  {
    id: 17,
    type: 'image-content',
    title: 'Real-Life Application',
    image: 'https://images.unsplash.com/photo-1766698664091-69e5d1c8fd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXVuZHJ5JTIwc2VydmljZXxlbnwxfHx8fDE3NzYzMjE3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imagePosition: 'left',
    bullets: [
      'Industry transition to eco-friendly solvents',
      'Consumer choices impact environment',
      'Career: Environmental chemist',
      'Regulations: EPA & state guidelines'
    ],
    notes: 'The dry cleaning industry is actively transitioning. California banned PERC by 2023. Consumers can choose "green" dry cleaners. Career opportunities exist in developing safer alternatives, environmental monitoring, and regulatory compliance. This topic connects chemistry to environmental science, public policy, and business.'
  },
  {
    id: 18,
    type: 'image-content',
    title: 'Future Innovations',
    image: 'https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMGZ1dHVyZXxlbnwxfHx8fDE3NzYzMTkyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imagePosition: 'right',
    bullets: [
      'Enzymatic cleaning technology',
      'Supercritical CO₂ advancements',
      'Bio-based solvents from plants',
      'Nanotechnology fabric treatments'
    ],
    notes: 'Emerging technologies include: enzymatic cleaners that use biological catalysts to break down stains; improved supercritical CO₂ systems with better efficiency; bio-based solvents derived from renewable resources like corn or soybeans; and nanotechnology coatings that make fabrics stain-resistant, reducing cleaning frequency. Research continues into safer, more sustainable cleaning methods.'
  },
  {
    id: 19,
    type: 'question',
    title: 'Check for Understanding',
    question: 'Quick Quiz: Match the solvent to its characteristic',
    options: [
      'A. PERC - Most common, carcinogen',
      'B. Hydrocarbons - Flammable, mild',
      'C. Liquid CO₂ - Environmentally friendly',
      'D. All of the above'
    ],
    notes: 'Correct answer: D. All of the above. PERC (perchloroethylene) is the most widely used but is a probable carcinogen. Hydrocarbons are petroleum-based, flammable, and gentler. Liquid CO₂ is a green alternative that uses pressurized carbon dioxide. Each has distinct properties and environmental profiles.'
  },
  {
    id: 20,
    type: 'content',
    title: 'Key Takeaways',
    bullets: [
      'Dry cleaning uses organic solvents, not water',
      'PERC effective but environmentally harmful',
      'Green alternatives exist and are growing',
      'Chemistry impacts daily choices & environment',
      'Industry evolving toward sustainability'
    ],
    notes: 'Students should understand: 1) The chemistry principle of "like dissolves like" (non-polar solvents for non-polar stains), 2) Trade-offs between effectiveness and environmental impact, 3) How scientific knowledge influences industry practices and regulations, 4) Personal responsibility in making informed consumer choices.'
  },
  {
    id: 21,
    type: 'question',
    title: 'Exit Question',
    question: 'How can YOU as a consumer support environmentally responsible dry cleaning practices?',
    bullets: [
      'Think about fabric choices',
      'Research eco-friendly cleaners',
      'Reduce dry cleaning frequency',
      'Share one idea you\'ll implement'
    ],
    notes: 'This exit question encourages personal application and agency. Students should consider: choosing washable fabrics when possible, using eco-friendly dry cleaners, spot-cleaning at home, extending time between cleanings, and advocating for green alternatives. Collect responses to assess understanding and engagement.'
  },
  {
    id: 22,
    type: 'title',
    title: 'Thank You!',
    subtitle: 'Questions & Discussion',
    image: 'https://images.unsplash.com/photo-1606214554672-6d2b0dcea9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGRyb3BsZXRzJTIwY2xlYW58ZW58MXx8fHwxNzc2MzIxNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imagePosition: 'background',
    notes: 'Shorya Singh | Roll: 2501660041 | KR Mangalam University | Chemistry in Daily Life'
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'n' || e.key === 'N') setShowNotes(!showNotes);
  };

  useState(() => {
    window.addEventListener('keydown', handleKeyDown as any);
    return () => window.removeEventListener('keydown', handleKeyDown as any);
  });

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Main Slide Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl aspect-[16/9] bg-white rounded-lg shadow-2xl overflow-hidden relative">
          {/* Slide Content */}
          {slide.type === 'title' && (
            <div className="h-full relative flex flex-col items-center justify-center p-16 text-center">
              {slide.imagePosition === 'background' && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              )}
              <div className="relative z-10">
                <h1 className="text-6xl font-bold text-blue-900 mb-6">{slide.title}</h1>
                <p className="text-3xl text-gray-700 mb-12">{slide.subtitle}</p>
                {currentSlide === 0 && (
                  <div className="text-xl text-gray-600 space-y-2">
                    <p>Presented by: <span className="font-semibold">Shorya Singh</span></p>
                    <p>Roll Number: <span className="font-semibold">2501660041</span></p>
                    <p className="text-lg">KR Mangalam University</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {slide.type === 'content' && (
            <div className="h-full flex flex-col p-16">
              <h2 className="text-5xl font-bold text-blue-900 mb-12">{slide.title}</h2>
              <ul className="space-y-6 text-2xl">
                {slide.bullets?.map((bullet, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-4 text-3xl">•</span>
                    <span className="text-gray-800">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {slide.type === 'image-content' && (
            <div className="h-full flex">
              {slide.imagePosition === 'left' ? (
                <>
                  <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
                  <div className="w-1/2 flex flex-col p-12">
                    <h2 className="text-4xl font-bold text-blue-900 mb-8">{slide.title}</h2>
                    <ul className="space-y-5 text-xl">
                      {slide.bullets?.map((bullet, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-3 text-2xl">•</span>
                          <span className="text-gray-800">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-1/2 flex flex-col p-12">
                    <h2 className="text-4xl font-bold text-blue-900 mb-8">{slide.title}</h2>
                    <ul className="space-y-5 text-xl">
                      {slide.bullets?.map((bullet, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-3 text-2xl">•</span>
                          <span className="text-gray-800">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
                </>
              )}
            </div>
          )}

          {slide.type === 'question' && (
            <div className="h-full flex flex-col p-16 bg-gradient-to-br from-blue-50 to-purple-50">
              <h2 className="text-5xl font-bold text-blue-900 mb-8">{slide.title}</h2>
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-3xl font-semibold text-purple-800 mb-10">{slide.question}</p>
                <ul className="space-y-5 text-2xl">
                  {slide.bullets?.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-purple-600 mr-4 text-3xl">→</span>
                      <span className="text-gray-800">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {slide.type === 'interactive' && (
            <div className="h-full flex flex-col p-16 bg-gradient-to-br from-green-50 to-teal-50">
              <h2 className="text-5xl font-bold text-green-900 mb-8">{slide.title}</h2>
              <div className="flex-1 flex flex-col justify-center items-center">
                <div className="bg-white rounded-lg p-10 shadow-lg mb-10 w-full">
                  <p className="text-3xl font-semibold text-teal-800 text-center">{slide.question}</p>
                </div>
                <ul className="space-y-6 text-2xl w-full">
                  {slide.bullets?.map((bullet, idx) => (
                    <li key={idx} className="flex items-center bg-white rounded-lg p-6 shadow">
                      <span className="text-3xl mr-4">{bullet.split(':')[0]}</span>
                      <span className="text-gray-800">{bullet.split(':')[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Slide Number */}
          <div className="absolute bottom-4 right-6 text-gray-500 text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Notes Section */}
      {showNotes && slide.notes && (
        <div className="bg-gray-800 text-white p-6 max-w-6xl mx-auto w-full rounded-lg mb-4">
          <h3 className="font-bold text-lg mb-2">Speaker Notes:</h3>
          <p className="text-sm leading-relaxed">{slide.notes}</p>
        </div>
      )}

      {/* Navigation Controls */}
      <div className="bg-gray-800 p-4 flex items-center justify-between max-w-6xl mx-auto w-full rounded-lg mb-8">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          variant="outline"
          size="lg"
          className="text-white border-white hover:bg-gray-700"
        >
          <ChevronLeft className="mr-2" />
          Previous
        </Button>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => setShowNotes(!showNotes)}
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-gray-700"
          >
            {showNotes ? 'Hide Notes' : 'Show Notes'} (N)
          </Button>
          <span className="text-white font-medium">
            Slide {currentSlide + 1} of {slides.length}
          </span>
        </div>

        <Button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          variant="outline"
          size="lg"
          className="text-white border-white hover:bg-gray-700"
        >
          Next
          <ChevronRight className="ml-2" />
        </Button>
      </div>

      {/* Keyboard Shortcuts Info */}
      <div className="text-center text-gray-400 text-sm pb-4">
        Use arrow keys ← → to navigate • Press 'N' to toggle notes
      </div>
    </div>
  );
}