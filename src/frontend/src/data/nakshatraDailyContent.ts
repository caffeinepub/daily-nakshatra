export interface DailyContent {
  whatTodayFeelsLike: {
    emotionalClimate: string;
    mentalFocus: string;
    socialTone: string;
    productivityRest: string;
    commonThemes: string;
  };
  aDayInTheLife: string;
  toneShiftSummary: string;
  embodiedAwareness?: string;
  sleepDreamThemes?: string;
  socialClimate?: string;
  creativeWorkFlow?: string;
  ritualSuggestions?: string;
}

export const nakshatraDailyContent: Record<string, DailyContent> = {
  Ashwini: {
    whatTodayFeelsLike: {
      emotionalClimate: "Quick, energetic, and spontaneous. There's an urge to start fresh and move fast.",
      mentalFocus: 'Sharp and action-oriented. Ideas come quickly and the mind wants immediate implementation.',
      socialTone: 'Direct and enthusiastic. People are more willing to take initiative and help others.',
      productivityRest: 'High energy for new beginnings, but may burn out quickly. Short bursts work best.',
      commonThemes: 'Healing, swift action, pioneering spirit, and the courage to begin.',
    },
    aDayInTheLife:
      "You wake up with unusual energy, ready to tackle something new. There's less patience for delays and more willingness to jump in. Conversations are brief but energizing. Even mundane tasks feel like fresh starts.",
    toneShiftSummary: 'The emotional tone just shifted toward swift action and fresh beginnings',
    embodiedAwareness:
      'Notice the impulse to move quickly. Check in with your body: Is this energy sustainable, or are you rushing? Take three deep breaths before starting something new.',
    sleepDreamThemes:
      'Dreams may feature movement, travel, or healing. You might wake feeling restless or ready to act. Sleep may be lighter than usual.',
    socialClimate:
      'Communication is direct and fast-paced. Boundaries may feel less important as enthusiasm takes over. Emotional availability is high but brief.',
    creativeWorkFlow:
      'This is a day for initiation rather than refinement. Start new projects, brainstorm, or take the first step. Collaboration works if everyone moves quickly.',
    ritualSuggestions:
      'Try a quick morning walk or a 5-minute journaling prompt: "What wants to begin today?" Focus on forward momentum.',
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
      "You feel a quiet intensity beneath the surface. There's a pull toward creative work or deep commitments. Interactions carry weight, and you're more aware of what you're holding onto—or what needs to be released.",
    toneShiftSummary: 'The emotional tone just shifted toward depth, creativity, and transformation',
    embodiedAwareness:
      'Notice what you are holding—physically and emotionally. Check in: Where is tension stored? What needs to be released? Practice gentle stretching or breathwork.',
    sleepDreamThemes:
      'Dreams may involve themes of birth, death, or transformation. Sleep can be deep and restorative, or heavy with processing.',
    socialClimate:
      'Communication is intense and meaningful. Boundaries are important—respect what others are holding. Emotional availability is deep but selective.',
    creativeWorkFlow:
      'This is a day for sustained creative effort. Work on projects that require patience and depth. Solitary work is favored over collaboration.',
    ritualSuggestions:
      'Try a creative ritual: painting, writing, or crafting. Journal on: "What am I gestating?" Focus on containment and patience.',
  },
  Krittika: {
    whatTodayFeelsLike: {
      emotionalClimate: "Sharp and purifying. There's a sense of cutting through illusions and getting to the truth.",
      mentalFocus: "Discerning and critical. The mind seeks clarity and isn't afraid to be direct.",
      socialTone: 'Honest and sometimes blunt. People value truth over comfort today.',
      productivityRest: 'High productivity for tasks requiring precision and courage. Rest may feel like weakness.',
      commonThemes: 'Purification, courage, sharp discernment, and transformative fire.',
    },
    aDayInTheLife:
      "You wake up with clarity about what needs to change. There's less tolerance for vagueness or half-truths. Conversations may be more direct than usual. You feel empowered to cut away what no longer serves.",
    toneShiftSummary: 'The emotional tone just shifted toward clarity, discernment, and purification',
    embodiedAwareness:
      'Notice where you feel sharp or tense. Check in: Is this clarity or harshness? Practice softening your gaze and jaw. Breathe into any tightness.',
    sleepDreamThemes:
      'Dreams may involve fire, cutting, or purification. Sleep may be restless as the mind processes what needs to be released.',
    socialClimate:
      'Communication is direct and honest. Boundaries are clear and firm. Emotional availability is selective—truth is prioritized over comfort.',
    creativeWorkFlow:
      'This is a day for precision and refinement. Edit, revise, or cut away what doesn\'t serve. Solitary work is favored, but collaboration works if everyone is direct.',
    ritualSuggestions:
      'Try a purification ritual: decluttering, burning old papers, or a cleansing bath. Journal on: "What needs to be cut away?" Focus on clarity.',
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
    toneShiftSummary: 'The emotional tone just shifted toward warmth, beauty, and creative growth',
    embodiedAwareness:
      'Notice what feels nourishing to your body. Check in: What do you need to feel grounded? Practice slow, mindful movement or enjoy a nourishing meal.',
    sleepDreamThemes:
      'Dreams may involve gardens, abundance, or sensual experiences. Sleep is likely deep and restorative.',
    socialClimate:
      'Communication is warm and affectionate. Boundaries are soft but present. Emotional availability is high and generous.',
    creativeWorkFlow:
      'This is a day for building and manifesting. Work on projects that create tangible results. Collaboration is favored, especially in creative or nurturing contexts.',
    ritualSuggestions:
      'Try a sensory ritual: cooking, gardening, or creating art. Journal on: "What am I growing?" Focus on beauty and abundance.',
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
    toneShiftSummary: 'The emotional tone just shifted toward curiosity, seeking, and gentle exploration',
    embodiedAwareness:
      'Notice the restlessness in your body. Check in: Is this curiosity or avoidance? Practice grounding through your feet. Take a mindful walk.',
    sleepDreamThemes:
      'Dreams may involve searching, travel, or elusive goals. Sleep may be light and interrupted by mental activity.',
    socialClimate:
      'Communication is playful and exploratory. Boundaries are flexible. Emotional availability is light and non-committal.',
    creativeWorkFlow:
      'This is a day for exploration rather than completion. Brainstorm, research, or try new approaches. Collaboration works if everyone is open to wandering.',
    ritualSuggestions:
      'Try a walking meditation or explore a new place. Journal on: "What am I seeking?" Focus on curiosity without attachment.',
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
    toneShiftSummary: 'The emotional tone just shifted toward intensity, release, and transformation',
    embodiedAwareness:
      'Notice where emotions are stored in your body. Check in: What needs to be released? Practice deep breathing or allow yourself to cry if needed.',
    sleepDreamThemes:
      'Dreams may involve storms, destruction, or catharsis. Sleep may be disrupted by emotional processing.',
    socialClimate:
      'Communication is raw and honest. Boundaries may dissolve in the intensity. Emotional availability is high but potentially overwhelming.',
    creativeWorkFlow:
      'This is a day for breakthrough rather than steady progress. Allow chaos to clear the way for new insights. Solitary work is favored.',
    ritualSuggestions:
      'Try a release ritual: journaling, screaming into a pillow, or vigorous movement. Journal on: "What needs to break open?" Focus on catharsis.',
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
    toneShiftSummary: 'The emotional tone just shifted toward renewal, hope, and restoration',
    embodiedAwareness:
      'Notice the lightness in your body. Check in: What feels renewed? Practice gentle stretching or a restorative yoga pose.',
    sleepDreamThemes:
      'Dreams may involve returning home, reunions, or healing. Sleep is likely restorative and peaceful.',
    socialClimate:
      'Communication is generous and forgiving. Boundaries are flexible and compassionate. Emotional availability is high and nurturing.',
    creativeWorkFlow:
      'This is a day for returning to projects or refining existing work. Collaboration is favored, especially in supportive contexts.',
    ritualSuggestions:
      'Try a renewal ritual: revisiting an old hobby, reconnecting with a friend, or journaling on: "What am I returning to?" Focus on restoration.',
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
    toneShiftSummary: 'The emotional tone just shifted toward nurturing, responsibility, and spiritual growth',
    embodiedAwareness:
      'Notice where you feel called to care for others or yourself. Check in: Are you nourishing or depleting yourself? Practice self-care rituals.',
    sleepDreamThemes:
      'Dreams may involve nurturing, teaching, or spiritual themes. Sleep is likely deep and restorative.',
    socialClimate:
      'Communication is supportive and responsible. Boundaries are clear but compassionate. Emotional availability is high and steady.',
    creativeWorkFlow:
      'This is a day for nurturing projects and building for the long term. Collaboration is favored, especially in supportive or teaching contexts.',
    ritualSuggestions:
      'Try a nurturing ritual: cooking for others, tending plants, or journaling on: "What am I nourishing?" Focus on care and sustainability.',
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
    toneShiftSummary: 'The emotional tone just shifted toward introspection, depth, and hidden currents',
    embodiedAwareness:
      'Notice where you feel coiled or tense. Check in: What is hidden beneath the surface? Practice gentle spinal movements or kundalini breathwork.',
    sleepDreamThemes:
      'Dreams may involve serpents, hidden knowledge, or psychological depth. Sleep may be intense and filled with symbolic imagery.',
    socialClimate:
      'Communication is complex and layered. Boundaries are important—watch for manipulation. Emotional availability is selective and strategic.',
    creativeWorkFlow:
      'This is a day for strategic planning and deep work. Focus on understanding hidden patterns. Solitary work is favored.',
    ritualSuggestions:
      'Try a depth ritual: meditation, shadow journaling, or exploring your dreams. Journal on: "What is hidden?" Focus on intuition.',
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
    toneShiftSummary: 'The emotional tone just shifted toward dignity, tradition, and ancestral connection',
    embodiedAwareness:
      'Notice your posture and bearing. Check in: Are you standing in your power? Practice standing tall or a regal meditation.',
    sleepDreamThemes:
      'Dreams may involve ancestors, royalty, or themes of legacy. Sleep may be deep and connected to lineage.',
    socialClimate:
      'Communication is formal and respectful. Boundaries are clear and hierarchical. Emotional availability is generous but expects reciprocity.',
    creativeWorkFlow:
      'This is a day for purposeful work that honors tradition. Focus on legacy projects. Collaboration works if roles are clear.',
    ritualSuggestions:
      'Try an ancestral ritual: honoring your lineage, visiting a family place, or journaling on: "What is my legacy?" Focus on dignity.',
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
    toneShiftSummary: 'The emotional tone just shifted toward pleasure, creativity, and joyful connection',
    embodiedAwareness:
      'Notice what brings you pleasure. Check in: What does your body crave? Practice indulging in sensory experiences mindfully.',
    sleepDreamThemes:
      'Dreams may involve romance, beauty, or creative expression. Sleep is likely pleasurable and restorative.',
    socialClimate:
      'Communication is warm and romantic. Boundaries are soft and inviting. Emotional availability is high and affectionate.',
    creativeWorkFlow:
      'This is a day for creative expression and enjoyment. Work on projects that bring pleasure. Collaboration is favored, especially in creative or social contexts.',
    ritualSuggestions:
      'Try a pleasure ritual: creating art, enjoying music, or spending time with loved ones. Journal on: "What brings me joy?" Focus on savoring.',
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
    toneShiftSummary: 'The emotional tone just shifted toward stability, commitment, and quiet confidence',
    embodiedAwareness:
      'Notice the steadiness in your body. Check in: What feels stable? Practice grounding exercises or a steady yoga flow.',
    sleepDreamThemes:
      'Dreams may involve partnerships, commitments, or long-term goals. Sleep is likely steady and restorative.',
    socialClimate:
      'Communication is earnest and loyal. Boundaries are clear and respectful. Emotional availability is steady and reliable.',
    creativeWorkFlow:
      'This is a day for finishing projects and honoring commitments. Focus on long-term goals. Collaboration is favored, especially in partnerships.',
    ritualSuggestions:
      'Try a commitment ritual: finishing a project, honoring a partnership, or journaling on: "What am I building?" Focus on stability.',
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
      'You wake up feeling capable and playful. There\'s a sense that you can handle whatever comes your way. Work feels like play, and you\'re drawn to hands-on activities. Conversations are light and humorous.',
    toneShiftSummary: 'The emotional tone just shifted toward playfulness, skill, and adaptability',
    embodiedAwareness:
      'Notice the dexterity in your hands. Check in: What can you create or fix? Practice hand movements, crafts, or playing an instrument.',
    sleepDreamThemes:
      'Dreams may involve hands, crafts, or problem-solving. Sleep is likely light and playful.',
    socialClimate:
      'Communication is playful and clever. Boundaries are flexible and humorous. Emotional availability is light and adaptable.',
    creativeWorkFlow:
      'This is a day for hands-on work and problem-solving. Focus on practical tasks. Collaboration works if everyone is playful and adaptable.',
    ritualSuggestions:
      'Try a hands-on ritual: crafting, cooking, or fixing something. Journal on: "What can I create?" Focus on skill and play.',
  },
  Chitra: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Vibrant and creative. There\'s a desire to create something beautiful and unique.',
      mentalFocus: 'Artistic and detail-oriented. The mind is drawn to aesthetics and perfection.',
      socialTone: 'Charismatic and expressive. People are more inclined to showcase their talents.',
      productivityRest: 'High productivity for creative work. Rest may feel like a waste of time.',
      commonThemes: 'Beauty, creativity, craftsmanship, and the desire to shine.',
    },
    aDayInTheLife:
      'You wake up with a vision of something beautiful. There\'s a pull toward creating, designing, or perfecting. Interactions are vibrant, and you\'re more aware of aesthetics. The day invites you to express your unique gifts.',
    toneShiftSummary: 'The emotional tone just shifted toward creativity, beauty, and self-expression',
    embodiedAwareness:
      'Notice the creative energy in your body. Check in: What wants to be expressed? Practice creative movement or dance.',
    sleepDreamThemes:
      'Dreams may involve art, beauty, or creative visions. Sleep may be light as the mind stays active with ideas.',
    socialClimate:
      'Communication is expressive and charismatic. Boundaries are flexible and artistic. Emotional availability is high and vibrant.',
    creativeWorkFlow:
      'This is a day for creative expression and perfecting your craft. Focus on aesthetics. Collaboration works if everyone appreciates beauty.',
    ritualSuggestions:
      'Try a creative ritual: painting, designing, or beautifying your space. Journal on: "What wants to shine?" Focus on expression.',
  },
  Swati: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Independent and free-spirited. There\'s a desire for autonomy and movement.',
      mentalFocus: 'Flexible and adaptable. The mind seeks freedom and resists constraint.',
      socialTone: 'Diplomatic and balanced. People value independence but also connection.',
      productivityRest: 'Productivity is flexible and adaptable. Rest comes through movement and change.',
      commonThemes: 'Independence, flexibility, balance, and the power of the wind.',
    },
    aDayInTheLife:
      'You wake up with a desire for freedom and movement. There\'s less tolerance for constraint and more willingness to adapt. Conversations are diplomatic, and you\'re drawn to activities that allow independence.',
    toneShiftSummary: 'The emotional tone just shifted toward independence, flexibility, and freedom',
    embodiedAwareness:
      'Notice the desire for movement in your body. Check in: What needs to flow? Practice gentle swaying or a flowing yoga sequence.',
    sleepDreamThemes:
      'Dreams may involve flying, wind, or freedom. Sleep may be light and restless as the mind seeks movement.',
    socialClimate:
      'Communication is diplomatic and balanced. Boundaries are flexible and respectful. Emotional availability is independent but open.',
    creativeWorkFlow:
      'This is a day for flexible work and adapting to change. Focus on projects that allow autonomy. Collaboration works if everyone respects independence.',
    ritualSuggestions:
      'Try a movement ritual: dancing, walking in nature, or journaling on: "What needs to be free?" Focus on flow.',
  },
  Vishakha: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Ambitious and determined. There\'s a sense of striving toward a goal.',
      mentalFocus: 'Focused and goal-oriented. The mind is driven and strategic.',
      socialTone: 'Competitive and passionate. People are more inclined to pursue their desires.',
      productivityRest: 'High productivity for goal-oriented work. Rest may feel like giving up.',
      commonThemes: 'Ambition, determination, transformation, and the pursuit of goals.',
    },
    aDayInTheLife:
      'You wake up with a clear goal in mind. There\'s a sense of determination and focus. Conversations are passionate, and you\'re drawn to activities that move you toward your desires. The day invites you to pursue what you want.',
    toneShiftSummary: 'The emotional tone just shifted toward ambition, focus, and determined pursuit',
    embodiedAwareness:
      'Notice the drive in your body. Check in: Is this determination or obsession? Practice grounding exercises to balance ambition.',
    sleepDreamThemes:
      'Dreams may involve goals, competition, or transformation. Sleep may be restless as the mind stays focused on desires.',
    socialClimate:
      'Communication is passionate and competitive. Boundaries may blur in the pursuit of goals. Emotional availability is high but focused.',
    creativeWorkFlow:
      'This is a day for goal-oriented work and strategic planning. Focus on achieving milestones. Collaboration works if everyone is aligned on goals.',
    ritualSuggestions:
      'Try a goal-setting ritual: creating a vision board, planning next steps, or journaling on: "What am I pursuing?" Focus on determination.',
  },
  Anuradha: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Devoted and loyal. There\'s a sense of deep commitment and friendship.',
      mentalFocus: 'Focused on relationships and collaboration. The mind values loyalty and trust.',
      socialTone: 'Supportive and devoted. People are more inclined to honor commitments.',
      productivityRest: 'Productivity is steady and collaborative. Rest comes through connection.',
      commonThemes: 'Devotion, friendship, loyalty, and the power of collaboration.',
    },
    aDayInTheLife:
      'You wake up with a sense of devotion to your commitments. There\'s a pull toward supporting others and honoring relationships. Conversations are deep and loyal, and you\'re drawn to collaborative activities.',
    toneShiftSummary: 'The emotional tone just shifted toward devotion, loyalty, and deep connection',
    embodiedAwareness:
      'Notice the warmth of connection in your body. Check in: Who or what are you devoted to? Practice heart-opening exercises.',
    sleepDreamThemes:
      'Dreams may involve friendships, loyalty, or deep connections. Sleep is likely restorative and connected.',
    socialClimate:
      'Communication is supportive and devoted. Boundaries are clear but compassionate. Emotional availability is high and loyal.',
    creativeWorkFlow:
      'This is a day for collaborative work and honoring commitments. Focus on teamwork. Collaboration is favored in all contexts.',
    ritualSuggestions:
      'Try a connection ritual: reaching out to a friend, honoring a commitment, or journaling on: "Who am I devoted to?" Focus on loyalty.',
  },
  Jyeshtha: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Intense and protective. There\'s a sense of guarding what is important.',
      mentalFocus: 'Strategic and powerful. The mind seeks control and mastery.',
      socialTone: 'Authoritative and protective. People are more inclined to take charge.',
      productivityRest: 'High productivity for leadership and protection. Rest may feel like vulnerability.',
      commonThemes: 'Power, protection, mastery, and the burden of responsibility.',
    },
    aDayInTheLife:
      'You wake up with a sense of responsibility and power. There\'s a pull toward protecting what matters and taking charge. Conversations are authoritative, and you\'re drawn to activities that require mastery.',
    toneShiftSummary: 'The emotional tone just shifted toward power, protection, and responsibility',
    embodiedAwareness:
      'Notice where you feel protective or tense. Check in: What are you guarding? Practice releasing tension through breathwork.',
    sleepDreamThemes:
      'Dreams may involve power, protection, or responsibility. Sleep may be restless as the mind stays vigilant.',
    socialClimate:
      'Communication is authoritative and protective. Boundaries are firm and clear. Emotional availability is selective and strategic.',
    creativeWorkFlow:
      'This is a day for leadership and taking charge. Focus on projects that require mastery. Collaboration works if roles are clear.',
    ritualSuggestions:
      'Try a protection ritual: setting boundaries, clearing your space, or journaling on: "What am I protecting?" Focus on power.',
  },
  Mula: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Deep and transformative. There\'s a sense of getting to the root of things.',
      mentalFocus: 'Penetrating and philosophical. The mind seeks truth and understanding.',
      socialTone: 'Raw and honest. People are more inclined to dig deep and question.',
      productivityRest: 'Productivity is transformative but potentially destructive. Rest comes after upheaval.',
      commonThemes: 'Roots, destruction, transformation, and the search for truth.',
    },
    aDayInTheLife:
      'You wake up with a sense that something needs to be uprooted. There\'s a pull toward questioning and digging deep. Conversations are raw and honest, and you\'re drawn to activities that get to the root of things.',
    toneShiftSummary: 'The emotional tone just shifted toward depth, questioning, and transformation',
    embodiedAwareness:
      'Notice where you feel uprooted or unstable. Check in: What needs to be released at the root? Practice grounding exercises.',
    sleepDreamThemes:
      'Dreams may involve roots, destruction, or deep questioning. Sleep may be disrupted by transformative processing.',
    socialClimate:
      'Communication is raw and honest. Boundaries may dissolve in the search for truth. Emotional availability is deep but potentially overwhelming.',
    creativeWorkFlow:
      'This is a day for deep work and questioning assumptions. Focus on getting to the root of problems. Solitary work is favored.',
    ritualSuggestions:
      'Try a root ritual: journaling on deep questions, meditating on truth, or releasing old beliefs. Focus on transformation.',
  },
  'Purva Ashadha': {
    whatTodayFeelsLike: {
      emotionalClimate: 'Optimistic and invincible. There\'s a sense of confidence and victory.',
      mentalFocus: 'Focused on success and achievement. The mind is driven and optimistic.',
      socialTone: 'Confident and inspiring. People are more inclined to pursue victory.',
      productivityRest: 'High productivity for ambitious projects. Rest may feel like giving up.',
      commonThemes: 'Victory, invincibility, purification, and the pursuit of success.',
    },
    aDayInTheLife:
      'You wake up with a sense of invincibility. There\'s a pull toward pursuing success and achieving goals. Conversations are inspiring, and you\'re drawn to activities that lead to victory.',
    toneShiftSummary: 'The emotional tone just shifted toward confidence, optimism, and the pursuit of victory',
    embodiedAwareness:
      'Notice the confidence in your body. Check in: Is this invincibility or overconfidence? Practice balancing confidence with humility.',
    sleepDreamThemes:
      'Dreams may involve victory, success, or purification. Sleep may be restless as the mind stays focused on goals.',
    socialClimate:
      'Communication is confident and inspiring. Boundaries may blur in the pursuit of success. Emotional availability is high but focused.',
    creativeWorkFlow:
      'This is a day for ambitious projects and pursuing success. Focus on achieving goals. Collaboration works if everyone is aligned on victory.',
    ritualSuggestions:
      'Try a victory ritual: celebrating achievements, setting ambitious goals, or journaling on: "What am I conquering?" Focus on success.',
  },
  'Uttara Ashadha': {
    whatTodayFeelsLike: {
      emotionalClimate: 'Steady and principled. There\'s a sense of integrity and long-term vision.',
      mentalFocus: 'Focused on principles and ethics. The mind values righteousness and duty.',
      socialTone: 'Respectful and principled. People are more inclined to honor commitments.',
      productivityRest: 'Productivity is steady and principled. Rest is earned through honorable effort.',
      commonThemes: 'Integrity, principles, long-term vision, and the power of righteousness.',
    },
    aDayInTheLife:
      'You wake up with a sense of integrity and purpose. There\'s a pull toward honoring principles and long-term goals. Conversations are respectful, and you\'re drawn to activities that align with your values.',
    toneShiftSummary: 'The emotional tone just shifted toward integrity, principles, and long-term vision',
    embodiedAwareness:
      'Notice the steadiness in your body. Check in: Are you aligned with your principles? Practice standing in your integrity.',
    sleepDreamThemes:
      'Dreams may involve principles, duty, or long-term goals. Sleep is likely steady and restorative.',
    socialClimate:
      'Communication is respectful and principled. Boundaries are clear and ethical. Emotional availability is steady and reliable.',
    creativeWorkFlow:
      'This is a day for principled work and honoring long-term goals. Focus on integrity. Collaboration works if everyone shares values.',
    ritualSuggestions:
      'Try a principles ritual: reflecting on your values, honoring commitments, or journaling on: "What are my principles?" Focus on integrity.',
  },
  Shravana: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Attentive and receptive. There\'s a sense of listening and learning.',
      mentalFocus: 'Focused on listening and understanding. The mind is receptive and open.',
      socialTone: 'Attentive and respectful. People are more inclined to listen and learn.',
      productivityRest: 'Productivity comes through listening and learning. Rest is receptive and restorative.',
      commonThemes: 'Listening, learning, receptivity, and the power of attention.',
    },
    aDayInTheLife:
      'You wake up with a sense of receptivity. There\'s a pull toward listening and learning. Conversations are attentive, and you\'re drawn to activities that require focus and understanding.',
    toneShiftSummary: 'The emotional tone just shifted toward listening, receptivity, and learning',
    embodiedAwareness:
      'Notice the receptivity in your body. Check in: What are you listening to? Practice deep listening or sound meditation.',
    sleepDreamThemes:
      'Dreams may involve listening, learning, or receiving messages. Sleep is likely restorative and receptive.',
    socialClimate:
      'Communication is attentive and respectful. Boundaries are clear and receptive. Emotional availability is high and listening.',
    creativeWorkFlow:
      'This is a day for listening and learning. Focus on understanding. Collaboration works if everyone is attentive and respectful.',
    ritualSuggestions:
      'Try a listening ritual: sound meditation, listening to music, or journaling on: "What am I hearing?" Focus on receptivity.',
  },
  Dhanishta: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Rhythmic and celebratory. There\'s a sense of music and movement.',
      mentalFocus: 'Focused on rhythm and timing. The mind is drawn to patterns and cycles.',
      socialTone: 'Celebratory and rhythmic. People are more inclined to celebrate and move together.',
      productivityRest: 'Productivity is rhythmic and celebratory. Rest comes through music and movement.',
      commonThemes: 'Rhythm, music, celebration, and the power of timing.',
    },
    aDayInTheLife:
      'You wake up with a sense of rhythm. There\'s a pull toward music, movement, and celebration. Conversations are rhythmic, and you\'re drawn to activities that involve timing and patterns.',
    toneShiftSummary: 'The emotional tone just shifted toward rhythm, celebration, and joyful movement',
    embodiedAwareness:
      'Notice the rhythm in your body. Check in: What is your natural rhythm? Practice moving to music or drumming.',
    sleepDreamThemes:
      'Dreams may involve music, rhythm, or celebration. Sleep may be light and rhythmic.',
    socialClimate:
      'Communication is celebratory and rhythmic. Boundaries are flexible and musical. Emotional availability is high and joyful.',
    creativeWorkFlow:
      'This is a day for rhythmic work and celebration. Focus on timing and patterns. Collaboration works if everyone moves together.',
    ritualSuggestions:
      'Try a rhythm ritual: dancing, drumming, or listening to music. Journal on: "What is my rhythm?" Focus on celebration.',
  },
  Shatabhisha: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Mysterious and healing. There\'s a sense of hidden knowledge and transformation.',
      mentalFocus: 'Focused on healing and hidden truths. The mind seeks to understand mysteries.',
      socialTone: 'Private and healing. People are more inclined to withdraw and heal.',
      productivityRest: 'Productivity is healing and transformative. Rest is necessary for integration.',
      commonThemes: 'Healing, mystery, hidden knowledge, and the power of solitude.',
    },
    aDayInTheLife:
      'You wake up with a sense of mystery. There\'s a pull toward healing and understanding hidden truths. Conversations are private, and you\'re drawn to activities that involve solitude and transformation.',
    toneShiftSummary: 'The emotional tone just shifted toward healing, mystery, and solitary transformation',
    embodiedAwareness:
      'Notice where you need healing in your body. Check in: What is hidden? Practice healing breathwork or energy work.',
    sleepDreamThemes:
      'Dreams may involve healing, mystery, or hidden knowledge. Sleep may be deep and transformative.',
    socialClimate:
      'Communication is private and healing. Boundaries are firm and protective. Emotional availability is selective and healing.',
    creativeWorkFlow:
      'This is a day for healing work and solitary transformation. Focus on hidden truths. Solitary work is favored.',
    ritualSuggestions:
      'Try a healing ritual: energy work, meditation, or journaling on: "What needs healing?" Focus on mystery.',
  },
  'Purva Bhadrapada': {
    whatTodayFeelsLike: {
      emotionalClimate: 'Intense and transformative. There\'s a sense of facing the shadow.',
      mentalFocus: 'Focused on transformation and facing fears. The mind is drawn to the dark side.',
      socialTone: 'Raw and intense. People are more inclined to face difficult truths.',
      productivityRest: 'Productivity is transformative but potentially destructive. Rest comes after facing the shadow.',
      commonThemes: 'Transformation, shadow work, intensity, and the power of facing fears.',
    },
    aDayInTheLife:
      'You wake up with a sense that something intense is coming. There\'s a pull toward facing your shadow and transforming. Conversations are raw, and you\'re drawn to activities that require courage.',
    toneShiftSummary: 'The emotional tone just shifted toward intensity, shadow work, and transformation',
    embodiedAwareness:
      'Notice where you feel fear or intensity in your body. Check in: What shadow needs to be faced? Practice grounding and courage.',
    sleepDreamThemes:
      'Dreams may involve shadow, fear, or transformation. Sleep may be intense and filled with symbolic imagery.',
    socialClimate:
      'Communication is raw and intense. Boundaries may dissolve in the face of truth. Emotional availability is deep but potentially overwhelming.',
    creativeWorkFlow:
      'This is a day for shadow work and transformation. Focus on facing fears. Solitary work is favored.',
    ritualSuggestions:
      'Try a shadow ritual: journaling on fears, facing difficult truths, or meditating on transformation. Focus on courage.',
  },
  'Uttara Bhadrapada': {
    whatTodayFeelsLike: {
      emotionalClimate: 'Deep and wise. There\'s a sense of spiritual depth and understanding.',
      mentalFocus: 'Focused on wisdom and spiritual understanding. The mind is drawn to the depths.',
      socialTone: 'Wise and compassionate. People are more inclined to offer deep understanding.',
      productivityRest: 'Productivity is deep and spiritual. Rest is necessary for integration.',
      commonThemes: 'Wisdom, spiritual depth, compassion, and the power of understanding.',
    },
    aDayInTheLife:
      'You wake up with a sense of deep wisdom. There\'s a pull toward spiritual understanding and compassion. Conversations are deep, and you\'re drawn to activities that involve wisdom and integration.',
    toneShiftSummary: 'The emotional tone just shifted toward wisdom, spiritual depth, and compassionate understanding',
    embodiedAwareness:
      'Notice the depth in your body. Check in: What wisdom is emerging? Practice deep meditation or contemplation.',
    sleepDreamThemes:
      'Dreams may involve wisdom, spiritual themes, or deep understanding. Sleep is likely deep and integrative.',
    socialClimate:
      'Communication is wise and compassionate. Boundaries are clear but compassionate. Emotional availability is deep and understanding.',
    creativeWorkFlow:
      'This is a day for deep work and spiritual integration. Focus on wisdom. Solitary work is favored.',
    ritualSuggestions:
      'Try a wisdom ritual: meditation, contemplation, or journaling on: "What wisdom is emerging?" Focus on depth.',
  },
  Revati: {
    whatTodayFeelsLike: {
      emotionalClimate: 'Gentle and compassionate. There\'s a sense of completion and transcendence.',
      mentalFocus: 'Focused on compassion and transcendence. The mind is drawn to the spiritual.',
      socialTone: 'Compassionate and nurturing. People are more inclined to offer care and support.',
      productivityRest: 'Productivity is gentle and compassionate. Rest is restorative and transcendent.',
      commonThemes: 'Compassion, completion, transcendence, and the power of gentleness.',
    },
    aDayInTheLife:
      'You wake up with a sense of gentleness and completion. There\'s a pull toward compassion and transcendence. Conversations are nurturing, and you\'re drawn to activities that involve care and spiritual connection.',
    toneShiftSummary: 'The emotional tone just shifted toward gentleness, compassion, and transcendence',
    embodiedAwareness:
      'Notice the gentleness in your body. Check in: What is complete? Practice gentle movement or compassionate breathwork.',
    sleepDreamThemes:
      'Dreams may involve compassion, completion, or spiritual themes. Sleep is likely restorative and transcendent.',
    socialClimate:
      'Communication is compassionate and nurturing. Boundaries are soft but present. Emotional availability is high and caring.',
    creativeWorkFlow:
      'This is a day for gentle work and completion. Focus on compassion. Collaboration is favored in nurturing contexts.',
    ritualSuggestions:
      'Try a compassion ritual: offering care, completing a project, or journaling on: "What is complete?" Focus on gentleness.',
  },
};
