export interface Pada {
  navamsaSign: string;
  expression: string;
  motivation: string;
}

export interface Nakshatra {
  name: string;
  symbols: string[];
  deity: string;
  planetaryRuler: string;
  elementalThemes: string;
  coreTraits: {
    strengths: string[];
    shadows: string[];
    relational: string;
    workLife: string;
  };
  padas: [Pada, Pada, Pada, Pada];
}

export const nakshatras: Nakshatra[] = [
  {
    name: 'Ashwini',
    symbols: ['Horse head', 'Twin horsemen'],
    deity: 'Ashwini Kumaras (Divine physicians)',
    planetaryRuler: 'Ketu',
    elementalThemes: 'Swift action, healing energy, pioneering spirit, and spontaneous vitality',
    coreTraits: {
      strengths: ['Quick thinking', 'Natural healing ability', 'Pioneering courage', 'Youthful enthusiasm'],
      shadows: ['Impulsiveness', 'Restlessness', 'Impatience', 'Scattered energy'],
      relational: 'Direct and spontaneous in relationships, values independence and freedom',
      workLife: 'Excels in fast-paced environments, healing professions, and innovative ventures',
    },
    padas: [
      {
        navamsaSign: 'Aries',
        expression: 'Most dynamic and action-oriented, pure pioneering energy',
        motivation: 'Driven by immediate action and self-assertion',
      },
      {
        navamsaSign: 'Taurus',
        expression: 'Grounded and practical, channels energy into tangible results',
        motivation: 'Seeks stability and material manifestation',
      },
      {
        navamsaSign: 'Gemini',
        expression: 'Communicative and versatile, intellectual curiosity',
        motivation: 'Driven by learning and sharing information',
      },
      {
        navamsaSign: 'Cancer',
        expression: 'Nurturing and protective, emotional sensitivity',
        motivation: 'Seeks emotional security and caring connections',
      },
    ],
  },
  {
    name: 'Bharani',
    symbols: ['Yoni (womb)', 'Boat'],
    deity: 'Yama (God of death and dharma)',
    planetaryRuler: 'Venus',
    elementalThemes: 'Transformation, restraint, creative power, and the cycle of life and death',
    coreTraits: {
      strengths: ['Deep creativity', 'Strong willpower', 'Ability to transform', 'Loyalty'],
      shadows: ['Possessiveness', 'Jealousy', 'Intensity', 'Difficulty letting go'],
      relational: 'Deeply passionate and committed, can be possessive but fiercely loyal',
      workLife: 'Thrives in creative fields, transformation work, and roles requiring endurance',
    },
    padas: [
      {
        navamsaSign: 'Leo',
        expression: 'Creative and expressive, strong sense of self',
        motivation: 'Driven by creative self-expression and recognition',
      },
      {
        navamsaSign: 'Virgo',
        expression: 'Analytical and service-oriented, practical creativity',
        motivation: 'Seeks perfection through detailed work',
      },
      {
        navamsaSign: 'Libra',
        expression: 'Balanced and harmonious, diplomatic approach',
        motivation: 'Driven by partnership and aesthetic beauty',
      },
      {
        navamsaSign: 'Scorpio',
        expression: 'Intense and transformative, deep emotional power',
        motivation: 'Seeks profound transformation and hidden truths',
      },
    ],
  },
  {
    name: 'Krittika',
    symbols: ['Razor', 'Flame', 'Axe'],
    deity: 'Agni (God of fire)',
    planetaryRuler: 'Sun',
    elementalThemes: 'Purification, cutting through illusion, sharp discernment, and transformative fire',
    coreTraits: {
      strengths: ['Sharp intellect', 'Courage', 'Purifying presence', 'Leadership'],
      shadows: ['Harshness', 'Critical nature', 'Aggression', 'Burning bridges'],
      relational: 'Direct and honest, can be blunt but values truth above comfort',
      workLife: 'Excels in roles requiring precision, leadership, and transformative change',
    },
    padas: [
      {
        navamsaSign: 'Sagittarius',
        expression: 'Philosophical and expansive, seeks higher truth',
        motivation: 'Driven by wisdom and spiritual growth',
      },
      {
        navamsaSign: 'Capricorn',
        expression: 'Disciplined and ambitious, practical application',
        motivation: 'Seeks achievement and social recognition',
      },
      {
        navamsaSign: 'Aquarius',
        expression: 'Innovative and humanitarian, progressive thinking',
        motivation: 'Driven by social reform and unique vision',
      },
      {
        navamsaSign: 'Pisces',
        expression: 'Compassionate and intuitive, spiritual sensitivity',
        motivation: 'Seeks transcendence and universal connection',
      },
    ],
  },
  {
    name: 'Rohini',
    symbols: ['Chariot', 'Ox cart', 'Temple'],
    deity: 'Brahma (Creator god)',
    planetaryRuler: 'Moon',
    elementalThemes: 'Growth, fertility, beauty, material abundance, and creative manifestation',
    coreTraits: {
      strengths: ['Natural charm', 'Creative talent', 'Nurturing nature', 'Material success'],
      shadows: ['Materialism', 'Stubbornness', 'Possessiveness', 'Overindulgence'],
      relational: 'Warm and affectionate, seeks stability and comfort in relationships',
      workLife: 'Thrives in creative arts, agriculture, beauty industries, and nurturing professions',
    },
    padas: [
      {
        navamsaSign: 'Aries',
        expression: 'Dynamic creativity, pioneering artistic expression',
        motivation: 'Driven by self-initiated creative projects',
      },
      {
        navamsaSign: 'Taurus',
        expression: 'Most grounded and sensual, peak material manifestation',
        motivation: 'Seeks comfort, beauty, and tangible wealth',
      },
      {
        navamsaSign: 'Gemini',
        expression: 'Communicative and versatile, intellectual creativity',
        motivation: 'Driven by learning and sharing creative ideas',
      },
      {
        navamsaSign: 'Cancer',
        expression: 'Deeply nurturing, emotional creativity',
        motivation: 'Seeks emotional fulfillment and family harmony',
      },
    ],
  },
  {
    name: 'Mrigashirsha',
    symbols: ['Deer head', 'Searching'],
    deity: 'Soma (Moon god)',
    planetaryRuler: 'Mars',
    elementalThemes: 'Seeking, curiosity, gentleness, and the eternal search for fulfillment',
    coreTraits: {
      strengths: ['Curiosity', 'Gentleness', 'Adaptability', 'Quick learning'],
      shadows: ['Restlessness', 'Fickleness', 'Suspicion', 'Never satisfied'],
      relational: 'Playful and curious, needs variety and mental stimulation',
      workLife: 'Excels in research, exploration, communication, and fields requiring adaptability',
    },
    padas: [
      {
        navamsaSign: 'Leo',
        expression: 'Creative seeking, dramatic exploration',
        motivation: 'Driven by recognition and creative discovery',
      },
      {
        navamsaSign: 'Virgo',
        expression: 'Analytical searching, practical investigation',
        motivation: 'Seeks perfection through detailed analysis',
      },
      {
        navamsaSign: 'Libra',
        expression: 'Harmonious exploration, diplomatic inquiry',
        motivation: 'Driven by balanced understanding and partnership',
      },
      {
        navamsaSign: 'Scorpio',
        expression: 'Deep investigation, intense curiosity',
        motivation: 'Seeks hidden truths and transformative knowledge',
      },
    ],
  },
  {
    name: 'Ardra',
    symbols: ['Teardrop', 'Diamond', 'Human head'],
    deity: 'Rudra (Storm god)',
    planetaryRuler: 'Rahu',
    elementalThemes: 'Destruction and renewal, emotional storms, transformation through crisis',
    coreTraits: {
      strengths: ['Intellectual power', 'Transformative ability', 'Emotional depth', 'Resilience'],
      shadows: ['Destructiveness', 'Emotional turbulence', 'Harshness', 'Chaos'],
      relational: 'Intense and transformative, relationships go through cycles of death and rebirth',
      workLife: 'Thrives in crisis management, research, technology, and transformative fields',
    },
    padas: [
      {
        navamsaSign: 'Sagittarius',
        expression: 'Philosophical transformation, seeking meaning in chaos',
        motivation: 'Driven by wisdom gained through suffering',
      },
      {
        navamsaSign: 'Capricorn',
        expression: 'Structured transformation, disciplined change',
        motivation: 'Seeks achievement through overcoming obstacles',
      },
      {
        navamsaSign: 'Aquarius',
        expression: 'Revolutionary change, innovative destruction',
        motivation: 'Driven by social transformation and progress',
      },
      {
        navamsaSign: 'Pisces',
        expression: 'Spiritual dissolution, compassionate transformation',
        motivation: 'Seeks transcendence through surrender',
      },
    ],
  },
  {
    name: 'Punarvasu',
    symbols: ['Quiver of arrows', 'House'],
    deity: 'Aditi (Mother of gods)',
    planetaryRuler: 'Jupiter',
    elementalThemes: 'Return, renewal, restoration, and the ability to bounce back',
    coreTraits: {
      strengths: ['Optimism', 'Resilience', 'Generosity', 'Philosophical wisdom'],
      shadows: ['Repetition of patterns', 'Overextension', 'Naivety', 'Lack of boundaries'],
      relational: 'Forgiving and nurturing, believes in second chances',
      workLife: 'Excels in teaching, counseling, restoration work, and nurturing professions',
    },
    padas: [
      {
        navamsaSign: 'Aries',
        expression: 'Dynamic renewal, pioneering restoration',
        motivation: 'Driven by fresh starts and new beginnings',
      },
      {
        navamsaSign: 'Taurus',
        expression: 'Material restoration, practical rebuilding',
        motivation: 'Seeks stability and tangible security',
      },
      {
        navamsaSign: 'Gemini',
        expression: 'Intellectual renewal, communicative restoration',
        motivation: 'Driven by learning and sharing wisdom',
      },
      {
        navamsaSign: 'Cancer',
        expression: 'Emotional healing, nurturing return',
        motivation: 'Seeks emotional security and family harmony',
      },
    ],
  },
  {
    name: 'Pushya',
    symbols: ['Cow udder', 'Lotus', 'Arrow'],
    deity: 'Brihaspati (Jupiter)',
    planetaryRuler: 'Saturn',
    elementalThemes: 'Nourishment, spiritual growth, discipline, and benevolent authority',
    coreTraits: {
      strengths: ['Nurturing nature', 'Discipline', 'Spiritual wisdom', 'Protective instinct'],
      shadows: ['Rigidity', 'Controlling behavior', 'Stubbornness', 'Excessive caution'],
      relational: 'Protective and nurturing, takes responsibility seriously',
      workLife: 'Thrives in teaching, counseling, spiritual guidance, and caretaking roles',
    },
    padas: [
      {
        navamsaSign: 'Leo',
        expression: 'Authoritative nourishment, regal care',
        motivation: 'Driven by recognition as a provider',
      },
      {
        navamsaSign: 'Virgo',
        expression: 'Practical service, detailed care',
        motivation: 'Seeks perfection in nurturing',
      },
      {
        navamsaSign: 'Libra',
        expression: 'Balanced support, harmonious care',
        motivation: 'Driven by fair and equal nourishment',
      },
      {
        navamsaSign: 'Scorpio',
        expression: 'Deep transformation through care, intense protection',
        motivation: 'Seeks profound emotional bonds',
      },
    ],
  },
  {
    name: 'Ashlesha',
    symbols: ['Coiled serpent', 'Embrace'],
    deity: 'Nagas (Serpent deities)',
    planetaryRuler: 'Mercury',
    elementalThemes: 'Kundalini energy, hypnotic power, wisdom, and the mysteries of the unconscious',
    coreTraits: {
      strengths: ['Intuitive wisdom', 'Hypnotic charm', 'Strategic thinking', 'Psychological insight'],
      shadows: ['Manipulation', 'Secretiveness', 'Possessiveness', 'Vengefulness'],
      relational: 'Intense and binding, forms deep but complex attachments',
      workLife: 'Excels in psychology, occult sciences, strategy, and fields requiring penetrating insight',
    },
    padas: [
      {
        navamsaSign: 'Sagittarius',
        expression: 'Philosophical depth, seeking higher wisdom',
        motivation: 'Driven by spiritual and intellectual expansion',
      },
      {
        navamsaSign: 'Capricorn',
        expression: 'Strategic ambition, disciplined power',
        motivation: 'Seeks control and worldly achievement',
      },
      {
        navamsaSign: 'Aquarius',
        expression: 'Unconventional wisdom, innovative insight',
        motivation: 'Driven by unique vision and social impact',
      },
      {
        navamsaSign: 'Pisces',
        expression: 'Mystical depth, spiritual intuition',
        motivation: 'Seeks transcendence and universal connection',
      },
    ],
  },
  {
    name: 'Magha',
    symbols: ['Royal throne', 'Palanquin'],
    deity: 'Pitris (Ancestral spirits)',
    planetaryRuler: 'Ketu',
    elementalThemes: 'Ancestral power, royal authority, tradition, and connection to lineage',
    coreTraits: {
      strengths: ['Natural authority', 'Respect for tradition', 'Generosity', 'Leadership'],
      shadows: ['Arrogance', 'Attachment to status', 'Domineering nature', 'Living in the past'],
      relational: 'Dignified and generous, expects respect and loyalty',
      workLife: 'Thrives in leadership roles, government, traditional institutions, and ancestral work',
    },
    padas: [
      {
        navamsaSign: 'Aries',
        expression: 'Dynamic leadership, pioneering authority',
        motivation: 'Driven by self-assertion and bold action',
      },
      {
        navamsaSign: 'Taurus',
        expression: 'Stable authority, material legacy',
        motivation: 'Seeks lasting wealth and comfort',
      },
      {
        navamsaSign: 'Gemini',
        expression: 'Communicative leadership, intellectual authority',
        motivation: 'Driven by sharing knowledge and ideas',
      },
      {
        navamsaSign: 'Cancer',
        expression: 'Nurturing authority, protective leadership',
        motivation: 'Seeks emotional security and family honor',
      },
    ],
  },
  {
    name: 'Purva Phalguni',
    symbols: ['Front legs of bed', 'Hammock', 'Fig tree'],
    deity: 'Bhaga (God of fortune)',
    planetaryRuler: 'Venus',
    elementalThemes: 'Pleasure, creativity, procreation, and the enjoyment of life',
    coreTraits: {
      strengths: ['Creativity', 'Charm', 'Generosity', 'Love of beauty'],
      shadows: ['Hedonism', 'Vanity', 'Laziness', 'Overindulgence'],
      relational: 'Romantic and affectionate, seeks pleasure and harmony in relationships',
      workLife: 'Excels in arts, entertainment, hospitality, and fields involving beauty and pleasure',
    },
    padas: [
      {
        navamsaSign: 'Leo',
        expression: 'Creative self-expression, dramatic pleasure',
        motivation: 'Driven by recognition and creative joy',
      },
      {
        navamsaSign: 'Virgo',
        expression: 'Refined pleasure, practical creativity',
        motivation: 'Seeks perfection in artistic expression',
      },
      {
        navamsaSign: 'Libra',
        expression: 'Harmonious beauty, balanced pleasure',
        motivation: 'Driven by partnership and aesthetic harmony',
      },
      {
        navamsaSign: 'Scorpio',
        expression: 'Intense passion, transformative creativity',
        motivation: 'Seeks deep emotional and creative fulfillment',
      },
    ],
  },
  {
    name: 'Uttara Phalguni',
    symbols: ['Back legs of bed', 'Fig tree'],
    deity: 'Aryaman (God of contracts and partnerships)',
    planetaryRuler: 'Sun',
    elementalThemes: 'Stability, commitment, patronage, and the fruits of effort',
    coreTraits: {
      strengths: ['Reliability', 'Generosity', 'Leadership', 'Commitment to agreements'],
      shadows: ['Stubbornness', 'Pride', 'Difficulty with change', 'Overcommitment'],
      relational: 'Loyal and committed, values long-term partnerships and mutual support',
      workLife: 'Thrives in leadership, counseling, contract work, and roles requiring stability',
    },
    padas: [
      {
        navamsaSign: 'Sagittarius',
        expression: 'Philosophical commitment, principled partnerships',
        motivation: 'Driven by higher ideals and wisdom',
      },
      {
        navamsaSign: 'Capricorn',
        expression: 'Practical stability, disciplined commitment',
        motivation: 'Seeks achievement and lasting structures',
      },
      {
        navamsaSign: 'Aquarius',
        expression: 'Progressive partnerships, innovative stability',
        motivation: 'Driven by social contribution and unique vision',
      },
      {
        navamsaSign: 'Pisces',
        expression: 'Compassionate commitment, spiritual partnership',
        motivation: 'Seeks transcendent connection and service',
      },
    ],
  },
  {
    name: 'Hasta',
    symbols: ['Hand', 'Fist'],
    deity: 'Savitar (Sun god of skill)',
    planetaryRuler: 'Moon',
    elementalThemes: 'Skill, dexterity, manifestation, and the power of the hand',
    coreTraits: {
      strengths: ['Manual skill', 'Cleverness', 'Humor', 'Ability to manifest'],
      shadows: ['Trickery', 'Manipulation', 'Restlessness', 'Superficiality'],
      relational: 'Playful and adaptable, enjoys light-hearted connections',
      workLife: 'Excels in crafts, healing arts, comedy, and any work requiring manual dexterity',
    },
    padas: [
      {
        navamsaSign: 'Aries',
        expression: 'Dynamic skill, pioneering craftsmanship',
        motivation: 'Driven by immediate action and self-expression',
      },
      {
        navamsaSign: 'Taurus',
        expression: 'Practical skill, material manifestation',
        motivation: 'Seeks tangible results and comfort',
      },
      {
        navamsaSign: 'Gemini',
        expression: 'Communicative skill, intellectual dexterity',
        motivation: 'Driven by learning and sharing techniques',
      },
      {
        navamsaSign: 'Cancer',
        expression: 'Nurturing skill, emotional craftsmanship',
        motivation: 'Seeks emotional fulfillment through creation',
      },
    ],
  },
  {
    name: 'Chitra',
    symbols: ['Bright jewel', 'Pearl'],
    deity: 'Tvashtar (Divine architect)',
    planetaryRuler: 'Mars',
    elementalThemes: 'Beauty, craftsmanship, illusion, and the creation of form',
    coreTraits: {
      strengths: ['Artistic talent', 'Charisma', 'Vision', 'Attention to detail'],
      shadows: ['Vanity', 'Superficiality', 'Perfectionism', 'Illusion'],
      relational: 'Charming and attractive, seeks beauty and admiration in relationships',
      workLife: 'Thrives in design, architecture, fashion, and any field requiring aesthetic vision',
    },
    padas: [
      {
        navamsaSign: 'Leo',
        expression: 'Creative brilliance, dramatic beauty',
        motivation: 'Driven by recognition and self-expression',
      },
      {
        navamsaSign: 'Virgo',
        expression: 'Refined craftsmanship, practical perfection',
        motivation: 'Seeks flawless execution and service',
      },
      {
        navamsaSign: 'Libra',
        expression: 'Harmonious design, balanced beauty',
        motivation: 'Driven by aesthetic harmony and partnership',
      },
      {
        navamsaSign: 'Scorpio',
        expression: 'Intense creativity, transformative art',
        motivation: 'Seeks depth and profound expression',
      },
    ],
  },
  {
    name: 'Swati',
    symbols: ['Young shoot blown by wind', 'Coral', 'Sword'],
    deity: 'Vayu (Wind god)',
    planetaryRuler: 'Rahu',
    elementalThemes: 'Independence, flexibility, movement, and the power of dispersion',
    coreTraits: {
      strengths: ['Independence', 'Adaptability', 'Diplomacy', 'Business acumen'],
      shadows: ['Restlessness', 'Indecisiveness', 'Scattered energy', 'Lack of roots'],
      relational: 'Values freedom and independence, needs space in relationships',
      workLife: 'Excels in business, trade, diplomacy, and fields requiring flexibility',
    },
    padas: [
      {
        navamsaSign: 'Sagittarius',
        expression: 'Philosophical independence, seeking freedom',
        motivation: 'Driven by wisdom and expansion',
      },
      {
        navamsaSign: 'Capricorn',
        expression: 'Structured flexibility, disciplined independence',
        motivation: 'Seeks achievement through adaptability',
      },
      {
        navamsaSign: 'Aquarius',
        expression: 'Innovative freedom, progressive independence',
        motivation: 'Driven by unique vision and social change',
      },
      {
        navamsaSign: 'Pisces',
        expression: 'Spiritual freedom, compassionate flexibility',
        motivation: 'Seeks transcendence and universal connection',
      },
    ],
  },
  {
    name: 'Vishakha',
    symbols: ['Triumphal arch', 'Potter\'s wheel'],
    deity: 'Indra-Agni (Gods of power and transformation)',
    planetaryRuler: 'Jupiter',
    elementalThemes: 'Goal-oriented focus, transformation, ambition, and the power of determination',
    coreTraits: {
      strengths: ['Determination', 'Focus', 'Ambition', 'Transformative power'],
      shadows: ['Ruthlessness', 'Jealousy', 'Obsession', 'Burnout'],
      relational: 'Intense and goal-oriented, relationships serve larger purposes',
      workLife: 'Thrives in competitive fields, politics, transformation work, and leadership',
    },
    padas: [
      {
        navamsaSign: 'Aries',
        expression: 'Dynamic ambition, pioneering determination',
        motivation: 'Driven by conquest and self-assertion',
      },
      {
        navamsaSign: 'Taurus',
        expression: 'Material ambition, practical determination',
        motivation: 'Seeks wealth and tangible success',
      },
      {
        navamsaSign: 'Gemini',
        expression: 'Intellectual ambition, communicative determination',
        motivation: 'Driven by knowledge and influence',
      },
      {
        navamsaSign: 'Cancer',
        expression: 'Emotional ambition, protective determination',
        motivation: 'Seeks security and family success',
      },
    ],
  },
  {
    name: 'Anuradha',
    symbols: ['Lotus', 'Staff', 'Triumphal archway'],
    deity: 'Mitra (God of friendship)',
    planetaryRuler: 'Saturn',
    elementalThemes: 'Devotion, friendship, balance, and the power of cooperation',
    coreTraits: {
      strengths: ['Loyalty', 'Devotion', 'Organizational ability', 'Balance'],
      shadows: ['Codependency', 'Manipulation', 'Hidden agendas', 'Martyrdom'],
      relational: 'Deeply loyal and devoted, values friendship and cooperation',
      workLife: 'Excels in organizational roles, counseling, diplomacy, and collaborative work',
    },
    padas: [
      {
        navamsaSign: 'Leo',
        expression: 'Devoted leadership, loyal authority',
        motivation: 'Driven by recognition through service',
      },
      {
        navamsaSign: 'Virgo',
        expression: 'Practical devotion, detailed service',
        motivation: 'Seeks perfection in helping others',
      },
      {
        navamsaSign: 'Libra',
        expression: 'Harmonious cooperation, balanced friendship',
        motivation: 'Driven by partnership and fairness',
      },
      {
        navamsaSign: 'Scorpio',
        expression: 'Deep loyalty, transformative devotion',
        motivation: 'Seeks profound bonds and hidden truths',
      },
    ],
  },
  {
    name: 'Jyeshtha',
    symbols: ['Circular amulet', 'Umbrella', 'Earring'],
    deity: 'Indra (King of gods)',
    planetaryRuler: 'Mercury',
    elementalThemes: 'Seniority, protection, responsibility, and the burden of power',
    coreTraits: {
      strengths: ['Leadership', 'Protective nature', 'Responsibility', 'Strategic thinking'],
      shadows: ['Arrogance', 'Isolation', 'Controlling behavior', 'Suspicion'],
      relational: 'Protective and responsible, but can be controlling and isolated',
      workLife: 'Thrives in senior positions, protective roles, strategy, and positions of authority',
    },
    padas: [
      {
        navamsaSign: 'Sagittarius',
        expression: 'Philosophical authority, wise protection',
        motivation: 'Driven by higher principles and wisdom',
      },
      {
        navamsaSign: 'Capricorn',
        expression: 'Disciplined leadership, structured authority',
        motivation: 'Seeks achievement and lasting power',
      },
      {
        navamsaSign: 'Aquarius',
        expression: 'Progressive leadership, innovative protection',
        motivation: 'Driven by social reform and unique vision',
      },
      {
        navamsaSign: 'Pisces',
        expression: 'Compassionate authority, spiritual protection',
        motivation: 'Seeks transcendent service and universal care',
      },
    ],
  },
  {
    name: 'Mula',
    symbols: ['Roots', 'Tied bunch of roots'],
    deity: 'Nirriti (Goddess of dissolution)',
    planetaryRuler: 'Ketu',
    elementalThemes: 'Root investigation, destruction of foundations, and the search for truth',
    coreTraits: {
      strengths: ['Deep investigation', 'Courage', 'Transformative power', 'Truth-seeking'],
      shadows: ['Destructiveness', 'Rootlessness', 'Extremism', 'Chaos'],
      relational: 'Intense and transformative, relationships undergo deep changes',
      workLife: 'Excels in research, occult sciences, medicine, and fields requiring root-level investigation',
    },
    padas: [
      {
        navamsaSign: 'Aries',
        expression: 'Dynamic destruction, pioneering investigation',
        motivation: 'Driven by bold action and self-discovery',
      },
      {
        navamsaSign: 'Taurus',
        expression: 'Material investigation, practical uprooting',
        motivation: 'Seeks stability after transformation',
      },
      {
        navamsaSign: 'Gemini',
        expression: 'Intellectual investigation, communicative exploration',
        motivation: 'Driven by knowledge and sharing insights',
      },
      {
        navamsaSign: 'Cancer',
        expression: 'Emotional investigation, nurturing transformation',
        motivation: 'Seeks emotional truth and security',
      },
    ],
  },
  {
    name: 'Purva Ashadha',
    symbols: ['Elephant tusk', 'Fan', 'Winnowing basket'],
    deity: 'Apas (Water goddess)',
    planetaryRuler: 'Venus',
    elementalThemes: 'Invincibility, purification, early victory, and the power of conviction',
    coreTraits: {
      strengths: ['Confidence', 'Invincibility', 'Purifying presence', 'Conviction'],
      shadows: ['Arrogance', 'Stubbornness', 'Overconfidence', 'Inflexibility'],
      relational: 'Confident and inspiring, but can be domineering',
      workLife: 'Thrives in competitive fields, purification work, and roles requiring conviction',
    },
    padas: [
      {
        navamsaSign: 'Leo',
        expression: 'Confident leadership, invincible authority',
        motivation: 'Driven by recognition and victory',
      },
      {
        navamsaSign: 'Virgo',
        expression: 'Practical purification, detailed conviction',
        motivation: 'Seeks perfection through service',
      },
      {
        navamsaSign: 'Libra',
        expression: 'Harmonious conviction, balanced victory',
        motivation: 'Driven by fair partnerships',
      },
      {
        navamsaSign: 'Scorpio',
        expression: 'Intense conviction, transformative victory',
        motivation: 'Seeks profound truth and power',
      },
    ],
  },
  {
    name: 'Uttara Ashadha',
    symbols: ['Elephant tusk', 'Small bed'],
    deity: 'Vishvadevas (Universal gods)',
    planetaryRuler: 'Sun',
    elementalThemes: 'Final victory, universal principles, lasting achievement, and righteous action',
    coreTraits: {
      strengths: ['Integrity', 'Leadership', 'Universal vision', 'Lasting achievement'],
      shadows: ['Rigidity', 'Aloofness', 'Excessive idealism', 'Loneliness'],
      relational: 'Principled and honorable, values integrity over convenience',
      workLife: 'Excels in leadership, law, universal causes, and roles requiring high principles',
    },
    padas: [
      {
        navamsaSign: 'Sagittarius',
        expression: 'Philosophical victory, principled achievement',
        motivation: 'Driven by higher wisdom and truth',
      },
      {
        navamsaSign: 'Capricorn',
        expression: 'Disciplined achievement, structured victory',
        motivation: 'Seeks lasting success and authority',
      },
      {
        navamsaSign: 'Aquarius',
        expression: 'Universal vision, progressive achievement',
        motivation: 'Driven by social contribution and innovation',
      },
      {
        navamsaSign: 'Pisces',
        expression: 'Spiritual victory, compassionate achievement',
        motivation: 'Seeks transcendent service and unity',
      },
    ],
  },
  {
    name: 'Shravana',
    symbols: ['Ear', 'Three footprints'],
    deity: 'Vishnu (Preserver god)',
    planetaryRuler: 'Moon',
    elementalThemes: 'Listening, learning, connection, and the power of receptivity',
    coreTraits: {
      strengths: ['Listening ability', 'Learning capacity', 'Connection', 'Wisdom'],
      shadows: ['Gossip', 'Eavesdropping', 'Passivity', 'Overreliance on others'],
      relational: 'Attentive and receptive, values communication and connection',
      workLife: 'Thrives in education, counseling, media, and fields requiring listening and learning',
    },
    padas: [
      {
        navamsaSign: 'Aries',
        expression: 'Active listening, pioneering learning',
        motivation: 'Driven by self-directed education',
      },
      {
        navamsaSign: 'Taurus',
        expression: 'Practical learning, material wisdom',
        motivation: 'Seeks tangible knowledge and comfort',
      },
      {
        navamsaSign: 'Gemini',
        expression: 'Communicative learning, intellectual connection',
        motivation: 'Driven by sharing and exchanging ideas',
      },
      {
        navamsaSign: 'Cancer',
        expression: 'Emotional listening, nurturing wisdom',
        motivation: 'Seeks emotional understanding and security',
      },
    ],
  },
  {
    name: 'Dhanishta',
    symbols: ['Drum', 'Flute'],
    deity: 'Eight Vasus (Gods of abundance)',
    planetaryRuler: 'Mars',
    elementalThemes: 'Rhythm, wealth, fame, and the power of synchronization',
    coreTraits: {
      strengths: ['Rhythm', 'Wealth creation', 'Fame', 'Adaptability'],
      shadows: ['Materialism', 'Superficiality', 'Restlessness', 'Showing off'],
      relational: 'Social and adaptable, enjoys group activities and recognition',
      workLife: 'Excels in music, performance, business, and fields requiring timing and rhythm',
    },
    padas: [
      {
        navamsaSign: 'Leo',
        expression: 'Creative rhythm, dramatic performance',
        motivation: 'Driven by recognition and self-expression',
      },
      {
        navamsaSign: 'Virgo',
        expression: 'Practical rhythm, detailed performance',
        motivation: 'Seeks perfection in execution',
      },
      {
        navamsaSign: 'Libra',
        expression: 'Harmonious rhythm, balanced performance',
        motivation: 'Driven by aesthetic beauty and partnership',
      },
      {
        navamsaSign: 'Scorpio',
        expression: 'Intense rhythm, transformative performance',
        motivation: 'Seeks depth and profound expression',
      },
    ],
  },
  {
    name: 'Shatabhisha',
    symbols: ['Empty circle', 'Hundred flowers', 'Hundred physicians'],
    deity: 'Varuna (God of cosmic waters)',
    planetaryRuler: 'Rahu',
    elementalThemes: 'Healing, mystery, solitude, and the power of concealment',
    coreTraits: {
      strengths: ['Healing ability', 'Mystery', 'Independence', 'Unconventional thinking'],
      shadows: ['Isolation', 'Secretiveness', 'Cynicism', 'Difficulty trusting'],
      relational: 'Independent and mysterious, needs solitude and space',
      workLife: 'Thrives in healing professions, research, technology, and unconventional fields',
    },
    padas: [
      {
        navamsaSign: 'Sagittarius',
        expression: 'Philosophical healing, seeking universal truth',
        motivation: 'Driven by wisdom and expansion',
      },
      {
        navamsaSign: 'Capricorn',
        expression: 'Structured healing, disciplined mystery',
        motivation: 'Seeks achievement through unconventional means',
      },
      {
        navamsaSign: 'Aquarius',
        expression: 'Innovative healing, progressive mystery',
        motivation: 'Driven by unique vision and social reform',
      },
      {
        navamsaSign: 'Pisces',
        expression: 'Spiritual healing, mystical depth',
        motivation: 'Seeks transcendence and universal connection',
      },
    ],
  },
  {
    name: 'Purva Bhadrapada',
    symbols: ['Front legs of funeral cot', 'Two-faced man', 'Sword'],
    deity: 'Aja Ekapada (One-footed goat)',
    planetaryRuler: 'Jupiter',
    elementalThemes: 'Transformation, duality, intensity, and the bridge between worlds',
    coreTraits: {
      strengths: ['Intensity', 'Transformative power', 'Spiritual depth', 'Courage'],
      shadows: ['Extremism', 'Cynicism', 'Harshness', 'Self-destructiveness'],
      relational: 'Intense and transformative, relationships are profound but challenging',
      workLife: 'Excels in occult sciences, transformation work, and fields requiring intensity',
    },
    padas: [
      {
        navamsaSign: 'Aries',
        expression: 'Dynamic transformation, pioneering intensity',
        motivation: 'Driven by bold action and self-discovery',
      },
      {
        navamsaSign: 'Taurus',
        expression: 'Material transformation, practical intensity',
        motivation: 'Seeks stability after profound change',
      },
      {
        navamsaSign: 'Gemini',
        expression: 'Intellectual transformation, communicative intensity',
        motivation: 'Driven by knowledge and sharing insights',
      },
      {
        navamsaSign: 'Cancer',
        expression: 'Emotional transformation, nurturing intensity',
        motivation: 'Seeks emotional depth and security',
      },
    ],
  },
  {
    name: 'Uttara Bhadrapada',
    symbols: ['Back legs of funeral cot', 'Twins', 'Snake in water'],
    deity: 'Ahir Budhnya (Serpent of the deep)',
    planetaryRuler: 'Saturn',
    elementalThemes: 'Depth, wisdom, kundalini, and the power of the unconscious',
    coreTraits: {
      strengths: ['Deep wisdom', 'Patience', 'Spiritual depth', 'Stability'],
      shadows: ['Laziness', 'Withdrawal', 'Depression', 'Stagnation'],
      relational: 'Deep and stable, values profound connections over superficial ones',
      workLife: 'Thrives in spiritual work, depth psychology, research, and contemplative fields',
    },
    padas: [
      {
        navamsaSign: 'Leo',
        expression: 'Creative depth, authoritative wisdom',
        motivation: 'Driven by recognition of inner truth',
      },
      {
        navamsaSign: 'Virgo',
        expression: 'Practical wisdom, detailed depth',
        motivation: 'Seeks perfection through service',
      },
      {
        navamsaSign: 'Libra',
        expression: 'Harmonious depth, balanced wisdom',
        motivation: 'Driven by fair partnerships and beauty',
      },
      {
        navamsaSign: 'Scorpio',
        expression: 'Profound depth, transformative wisdom',
        motivation: 'Seeks ultimate truth and power',
      },
    ],
  },
  {
    name: 'Revati',
    symbols: ['Fish', 'Drum'],
    deity: 'Pushan (Nourisher and protector)',
    planetaryRuler: 'Mercury',
    elementalThemes: 'Nourishment, completion, transcendence, and the journey\'s end',
    coreTraits: {
      strengths: ['Compassion', 'Nourishing nature', 'Spiritual wisdom', 'Completion'],
      shadows: ['Codependency', 'Martyrdom', 'Escapism', 'Lack of boundaries'],
      relational: 'Compassionate and nurturing, can be overly giving',
      workLife: 'Excels in healing, spiritual guidance, travel, and completion-oriented work',
    },
    padas: [
      {
        navamsaSign: 'Sagittarius',
        expression: 'Philosophical nourishment, spiritual completion',
        motivation: 'Driven by wisdom and transcendence',
      },
      {
        navamsaSign: 'Capricorn',
        expression: 'Practical completion, structured nourishment',
        motivation: 'Seeks achievement and lasting legacy',
      },
      {
        navamsaSign: 'Aquarius',
        expression: 'Universal nourishment, progressive completion',
        motivation: 'Driven by social service and innovation',
      },
      {
        navamsaSign: 'Pisces',
        expression: 'Spiritual transcendence, mystical nourishment',
        motivation: 'Seeks ultimate unity and dissolution',
      },
    ],
  },
];
