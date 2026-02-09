export interface DailyContent {
  whatTodayFeelsLike: {
    emotionalClimate: string;
    mentalFocus: string;
    socialTone: string;
    productivityRest: string;
    commonThemes: string;
  };
  aDayInTheLife: string;
}

export const nakshatraDailyContent: Record<string, DailyContent> = {
  Ashwini: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Quick, energetic, and spontaneous. There\'s an urge to start fresh and move fast.',
      mentalFocus: 'Sharp and action-oriented. Ideas come quickly and the mind wants immediate implementation.',
      socialTone: 'Direct and enthusiastic. People are more willing to take initiative and help others.',
      productivityRest: 'High energy for new beginnings, but may burn out quickly. Short bursts work best.',
      commonThemes: 'Healing, swift action, pioneering spirit, and the courage to begin.',
    },
    aDayInTheLife:
      'You wake up with unusual energy, ready to tackle something new. There\'s less patience for delays and more willingness to jump in. Conversations are brief but energizing. Even mundane tasks feel like fresh starts.',
  },
  Bharani: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Intense and creative. Emotions run deep with a sense of holding and containing power.',
      mentalFocus: 'Focused on transformation and creation. The mind contemplates cycles of life and death.',
      socialTone: 'Passionate and loyal. Relationships feel more binding and commitments are taken seriously.',
      productivityRest: 'Sustained effort is favored. This is a day for endurance rather than quick wins.',
      commonThemes: 'Creativity, restraint, transformation, and the power of gestation.',
    },
    aDayInTheLife:
      'You feel a quiet intensity beneath the surface. There\'s a pull toward creative work or deep commitments. Interactions carry weight, and you\'re more aware of what you\'re holding onto—or what needs to be released.',
  },
  Krittika: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Sharp and purifying. There\'s a sense of cutting through illusions and getting to the truth.',
      mentalFocus: 'Discerning and critical. The mind seeks clarity and isn\'t afraid to be direct.',
      socialTone: 'Honest and sometimes blunt. People value truth over comfort today.',
      productivityRest: 'High productivity for tasks requiring precision and courage. Rest may feel like weakness.',
      commonThemes: 'Purification, courage, sharp discernment, and transformative fire.',
    },
    aDayInTheLife:
      'You wake up with clarity about what needs to change. There\'s less tolerance for vagueness or half-truths. Conversations may be more direct than usual. You feel empowered to cut away what no longer serves.',
  },
  Rohini: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Warm, nurturing, and sensual. There\'s a desire for comfort and beauty.',
      mentalFocus: 'Creative and growth-oriented. The mind is drawn to building and manifesting.',
      socialTone: 'Affectionate and generous. People are more inclined to share and create together.',
      productivityRest: 'Steady productivity with an emphasis on tangible results. Rest feels earned and pleasurable.',
      commonThemes: 'Growth, fertility, beauty, material abundance, and creative manifestation.',
    },
    aDayInTheLife:
      'You wake up feeling grounded and content. There\'s a pull toward creating something beautiful or nurturing what you already have. Interactions are warm, and you notice the sensory details of life more acutely.',
  },
  Mrigashirsha: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Curious and restless. There\'s a sense of searching for something just out of reach.',
      mentalFocus: 'Quick and adaptable. The mind jumps from topic to topic, seeking novelty.',
      socialTone: 'Playful and light. People are more open to exploration and less committed to outcomes.',
      productivityRest: 'Productivity comes in bursts. Rest is difficult as the mind keeps wandering.',
      commonThemes: 'Seeking, curiosity, gentleness, and the eternal search for fulfillment.',
    },
    aDayInTheLife:
      'You wake up with a sense of anticipation, though you\'re not sure what for. The day feels like a treasure hunt. Conversations meander pleasantly. You\'re drawn to new experiences but may struggle to settle on one thing.',
  },
  Ardra: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Intense and stormy. Emotions may feel overwhelming or cathartic.',
      mentalFocus: 'Penetrating and transformative. The mind seeks to understand through crisis or breakthrough.',
      socialTone: 'Raw and honest. Interactions may bring up difficult truths or emotional releases.',
      productivityRest: 'Productivity is chaotic but potentially transformative. Rest comes after the storm.',
      commonThemes: 'Destruction and renewal, emotional storms, transformation through crisis.',
    },
    aDayInTheLife:
      'You wake up feeling unsettled, as if something needs to break open. The day may bring unexpected challenges or emotional releases. Conversations go deeper than expected. By evening, there\'s a sense of having cleared something important.',
  },
  Punarvasu: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Optimistic and forgiving. There\'s a sense of renewal and second chances.',
      mentalFocus: 'Philosophical and hopeful. The mind seeks meaning and believes in restoration.',
      socialTone: 'Generous and nurturing. People are more willing to forgive and start fresh.',
      productivityRest: 'Productivity is steady and sustainable. Rest is restorative and guilt-free.',
      commonThemes: 'Return, renewal, restoration, and the ability to bounce back.',
    },
    aDayInTheLife:
      'You wake up feeling lighter, as if yesterday\'s troubles have faded. There\'s a sense of returning to yourself. Conversations feel healing, and you\'re more willing to give others (and yourself) another chance.',
  },
  Pushya: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Nurturing and protective. There\'s a desire to care for and support others.',
      mentalFocus: 'Disciplined and spiritual. The mind is drawn to wisdom and long-term growth.',
      socialTone: 'Responsible and supportive. People take their commitments seriously.',
      productivityRest: 'High productivity for nurturing and building. Rest is seen as necessary for sustainability.',
      commonThemes: 'Nourishment, spiritual growth, discipline, and benevolent authority.',
    },
    aDayInTheLife:
      'You wake up with a sense of responsibility and care. There\'s a pull toward supporting others or tending to what needs nurturing. Conversations are earnest and supportive. You feel the weight of your commitments, but also their meaning.',
  },
  Ashlesha: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Intense and mysterious. Emotions are deep and may be hidden beneath the surface.',
      mentalFocus: 'Strategic and intuitive. The mind seeks to understand hidden motives and patterns.',
      socialTone: 'Complex and binding. Relationships feel more intense and potentially manipulative.',
      productivityRest: 'Productivity is strategic and focused. Rest may be elusive as the mind stays active.',
      commonThemes: 'Kundalini energy, hypnotic power, wisdom, and the mysteries of the unconscious.',
    },
    aDayInTheLife:
      'You wake up sensing undercurrents in everything. There\'s a heightened awareness of what\'s not being said. Interactions feel charged, and you\'re more attuned to psychological dynamics. Trust your intuition but watch for paranoia.',
  },
  Magha: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Dignified and proud. There\'s a sense of connection to lineage and tradition.',
      mentalFocus: 'Authoritative and respectful of hierarchy. The mind values legacy and honor.',
      socialTone: 'Formal and generous. People expect respect but are also willing to give it.',
      productivityRest: 'Productivity is regal and purposeful. Rest is earned through honorable effort.',
      commonThemes: 'Ancestral power, royal authority, tradition, and connection to lineage.',
    },
    aDayInTheLife:
      'You wake up with a sense of dignity and purpose. There\'s an awareness of your place in a larger story. Interactions are more formal, and you feel the weight of responsibility. Generosity comes naturally, but so does the expectation of respect.',
  },
  'Purva Phalguni': {
    whatTodayFeelsLike: {
      emotionalClimate: 'Joyful and pleasure-seeking. There\'s a desire for enjoyment and relaxation.',
      mentalFocus: 'Creative and romantic. The mind is drawn to beauty and artistic expression.',
      socialTone: 'Warm and affectionate. People are more inclined toward romance and celebration.',
      productivityRest: 'Productivity is creative but may be interrupted by the desire for pleasure. Rest is indulgent.',
      commonThemes: 'Pleasure, creativity, procreation, and the enjoyment of life.',
    },
    aDayInTheLife:
      'You wake up wanting to enjoy the day rather than conquer it. There\'s a pull toward beauty, comfort, and connection. Work feels less urgent, and you\'re more drawn to creative or social activities. The day invites you to savor rather than strive.',
  },
  'Uttara Phalguni': {
    whatTodayFeelsLike: {
      emotionalClimate: 'Quietly confident and stable. There\'s a sense of commitment and earned rest.',
      mentalFocus: 'Focused on long-term thinking and mutual support. The mind values reliability.',
      socialTone: 'Earnest and loyal. Interactions drift toward shared goals and unspoken agreements.',
      productivityRest: 'Effort made today tends to endure. Rest feels earned rather than avoidant.',
      commonThemes: 'Stability, commitment, patronage, and the fruits of effort.',
    },
    aDayInTheLife:
      'You wake up feeling quietly purposeful. There\'s less urge to chase novelty and more desire to finish something meaningful. Conversations drift toward shared goals, mutual support, or unspoken agreements. Even rest feels earned rather than avoidant.',
  },
  Hasta: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Playful and skillful. There\'s a sense of being able to handle whatever comes.',
      mentalFocus: 'Clever and adaptable. The mind is quick and enjoys problem-solving.',
      socialTone: 'Light-hearted and humorous. People are more playful and less serious.',
      productivityRest: 'High productivity for hands-on work. Rest comes through playful activities.',
      commonThemes: 'Skill, dexterity, manifestation, and the power of the hand.',
    },
    aDayInTheLife:
      'You wake up feeling capable and light. There\'s a sense that you can handle whatever the day brings. Work that involves your hands or quick thinking feels satisfying. Interactions are playful, and humor comes easily.',
  },
  Chitra: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Inspired and aesthetic. There\'s a desire to create something beautiful.',
      mentalFocus: 'Visionary and detail-oriented. The mind sees both the big picture and the fine points.',
      socialTone: 'Charming and attractive. People are drawn to beauty and admiration.',
      productivityRest: 'High productivity for creative and design work. Rest may feel like wasted time.',
      commonThemes: 'Beauty, craftsmanship, illusion, and the creation of form.',
    },
    aDayInTheLife:
      'You wake up with a vision of something beautiful you want to create. The day feels like an opportunity to manifest your aesthetic sense. Interactions are charming, and you\'re more aware of appearances—both yours and others\'.',
  },
  Swati: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Independent and flexible. There\'s a desire for freedom and movement.',
      mentalFocus: 'Adaptable and diplomatic. The mind seeks balance and avoids being pinned down.',
      socialTone: 'Friendly but non-committal. People value their independence today.',
      productivityRest: 'Productivity is flexible and opportunistic. Rest comes through movement and change.',
      commonThemes: 'Independence, flexibility, movement, and the power of dispersion.',
    },
    aDayInTheLife:
      'You wake up wanting space and freedom. There\'s less desire to commit to anything too rigid. The day feels best when you can move between activities and people. Interactions are pleasant but you resist being tied down.',
  },
  Vishakha: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Determined and focused. There\'s a sense of working toward a specific goal.',
      mentalFocus: 'Ambitious and strategic. The mind is fixed on achievement and transformation.',
      socialTone: 'Intense and goal-oriented. Relationships serve larger purposes today.',
      productivityRest: 'High productivity for goal-oriented work. Rest may feel like giving up.',
      commonThemes: 'Goal-oriented focus, transformation, ambition, and the power of determination.',
    },
    aDayInTheLife:
      'You wake up with a clear target in mind. The day feels like a campaign toward a specific goal. Interactions are purposeful, and you have little patience for distractions. There\'s a sense of building toward something important.',
  },
  Anuradha: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Devoted and loyal. There\'s a sense of deep commitment to people or causes.',
      mentalFocus: 'Balanced and cooperative. The mind seeks harmony and mutual benefit.',
      socialTone: 'Loyal and supportive. People value friendship and cooperation today.',
      productivityRest: 'Productivity is collaborative and sustainable. Rest is shared with others.',
      commonThemes: 'Devotion, friendship, balance, and the power of cooperation.',
    },
    aDayInTheLife:
      'You wake up feeling connected to others and committed to shared goals. There\'s a pull toward cooperation and mutual support. Interactions feel meaningful, and you\'re willing to put in effort for the sake of relationships.',
  },
  Jyeshtha: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Protective and responsible. There\'s a sense of being the elder or guardian.',
      mentalFocus: 'Strategic and cautious. The mind is aware of potential threats and responsibilities.',
      socialTone: 'Authoritative but isolated. People may feel the weight of leadership today.',
      productivityRest: 'Productivity is strategic and protective. Rest may be difficult due to vigilance.',
      commonThemes: 'Seniority, protection, responsibility, and the burden of power.',
    },
    aDayInTheLife:
      'You wake up feeling the weight of responsibility. There\'s a sense that you need to protect or manage something important. Interactions may feel more formal, and you\'re aware of hierarchies. Leadership comes naturally but can feel isolating.',
  },
  Mula: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Intense and investigative. There\'s a desire to get to the root of things.',
      mentalFocus: 'Deep and transformative. The mind seeks fundamental truths, even if uncomfortable.',
      socialTone: 'Raw and potentially destructive. Interactions may uproot foundations.',
      productivityRest: 'Productivity is transformative but chaotic. Rest comes after deep work.',
      commonThemes: 'Root investigation, destruction of foundations, and the search for truth.',
    },
    aDayInTheLife:
      'You wake up with a sense that something needs to be uprooted or investigated deeply. The day may bring uncomfortable truths or necessary endings. Conversations go to the core. There\'s courage for facing what\'s been avoided.',
  },
  'Purva Ashadha': {
    whatTodayFeelsLike: {
      emotionalClimate: 'Confident and invincible. There\'s a sense of early victory and purification.',
      mentalFocus: 'Convinced and unwavering. The mind is certain of its path.',
      socialTone: 'Inspiring but potentially domineering. People are confident in their convictions.',
      productivityRest: 'High productivity driven by conviction. Rest may feel unnecessary.',
      commonThemes: 'Invincibility, purification, early victory, and the power of conviction.',
    },
    aDayInTheLife:
      'You wake up feeling invincible and clear about your direction. There\'s little doubt or hesitation. Interactions are confident, and you inspire others with your certainty. The day favors bold action and standing by your principles.',
  },
  'Uttara Ashadha': {
    whatTodayFeelsLike: {
      emotionalClimate: 'Principled and honorable. There\'s a sense of final victory and lasting achievement.',
      mentalFocus: 'Universal and idealistic. The mind is drawn to higher principles and righteous action.',
      socialTone: 'Honorable and somewhat aloof. People value integrity over convenience.',
      productivityRest: 'Productivity is principled and enduring. Rest is earned through righteous effort.',
      commonThemes: 'Final victory, universal principles, lasting achievement, and righteous action.',
    },
    aDayInTheLife:
      'You wake up with a sense of purpose aligned with higher principles. There\'s less concern for immediate gains and more focus on lasting impact. Interactions are honorable, and you feel the weight of doing what\'s right, even if it\'s difficult.',
  },
  Shravana: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Receptive and attentive. There\'s a desire to listen and learn.',
      mentalFocus: 'Learning-oriented and connected. The mind is open to new information.',
      socialTone: 'Communicative and attentive. People value listening and connection today.',
      productivityRest: 'Productivity comes through learning and collaboration. Rest involves reflection.',
      commonThemes: 'Listening, learning, connection, and the power of receptivity.',
    },
    aDayInTheLife:
      'You wake up wanting to listen more than speak. There\'s a pull toward learning and connecting with others. Conversations feel meaningful, and you\'re more receptive to new ideas. The day favors collaboration and shared wisdom.',
  },
  Dhanishta: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Rhythmic and social. There\'s a sense of being in sync with others.',
      mentalFocus: 'Timing-oriented and adaptable. The mind is aware of rhythms and patterns.',
      socialTone: 'Social and performance-oriented. People enjoy group activities and recognition.',
      productivityRest: 'Productivity is rhythmic and collaborative. Rest involves social activities.',
      commonThemes: 'Rhythm, wealth, fame, and the power of synchronization.',
    },
    aDayInTheLife:
      'You wake up feeling in sync with the world around you. There\'s a pull toward group activities and social recognition. Work that involves timing or rhythm feels natural. Interactions are lively, and you enjoy being seen and appreciated.',
  },
  Shatabhisha: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Independent and mysterious. There\'s a desire for solitude and healing.',
      mentalFocus: 'Unconventional and investigative. The mind seeks hidden truths and alternative approaches.',
      socialTone: 'Distant and independent. People need space and may be secretive.',
      productivityRest: 'Productivity is solitary and healing-oriented. Rest is essential and restorative.',
      commonThemes: 'Healing, mystery, solitude, and the power of concealment.',
    },
    aDayInTheLife:
      'You wake up wanting solitude and space. There\'s a pull toward healing work or unconventional approaches. Interactions may feel draining, and you prefer to work independently. The day favors introspection and alternative thinking.',
  },
  'Purva Bhadrapada': {
    whatTodayFeelsLike: {
      emotionalClimate: 'Intense and dualistic. Emotions swing between extremes.',
      mentalFocus: 'Transformative and philosophical. The mind contemplates life\'s deeper mysteries.',
      socialTone: 'Profound but challenging. Interactions may be intense or confrontational.',
      productivityRest: 'Productivity is intense and transformative. Rest may be difficult to achieve.',
      commonThemes: 'Transformation, duality, intensity, and the bridge between worlds.',
    },
    aDayInTheLife:
      'You wake up feeling the tension between opposites. The day may bring intense experiences or philosophical insights. Conversations go deep, sometimes uncomfortably so. There\'s a sense of being between worlds or states of being.',
  },
  'Uttara Bhadrapada': {
    whatTodayFeelsLike: {
      emotionalClimate: 'Deep and stable. There\'s a sense of profound wisdom and patience.',
      mentalFocus: 'Contemplative and spiritual. The mind is drawn to depth and the unconscious.',
      socialTone: 'Stable and profound. People value depth over superficiality.',
      productivityRest: 'Productivity is deep and sustained. Rest is contemplative and restorative.',
      commonThemes: 'Depth, wisdom, kundalini, and the power of the unconscious.',
    },
    aDayInTheLife:
      'You wake up feeling grounded in something deeper than the surface of life. There\'s less urgency and more patience. Interactions are meaningful when they happen, but solitude is equally valuable. The day favors contemplation and inner work.',
  },
  Revati: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Compassionate and transcendent. There\'s a sense of completion and letting go.',
      mentalFocus: 'Spiritual and nourishing. The mind is drawn to endings and new beginnings.',
      socialTone: 'Nurturing and compassionate. People are more willing to give and forgive.',
      productivityRest: 'Productivity is completion-oriented. Rest is essential and guilt-free.',
      commonThemes: 'Nourishment, completion, transcendence, and the journey\'s end.',
    },
    aDayInTheLife:
      'You wake up with a sense of completion, as if a cycle is ending. There\'s compassion for yourself and others. Interactions are gentle and forgiving. The day favors wrapping up loose ends and preparing for what comes next.',
  },
};
