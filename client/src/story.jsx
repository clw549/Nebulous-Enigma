const story = [
  {
    id: 0,
    text: `You approach a dark, unfamiliar planet, lowering your spacecraft closer to its surface. You're unsure, yet, if you want to land here. As you descend through you clouds, you quickly notice the heavy fog that drapes over the planet. No rain dots your windshield, but you can see (and soon hear) lightning in the distance, striking every so often. Below you, the mountainous, tree-covered terrain might be obscuring what truly inhabits this place. Or perhaps it really is just wilderness.`,
    background: ``,
    choice: [
      { id: 0, text: `Continue.`, goTo: 1 }
    ]
  },
  {
    id: 1,
    text: `Maybe you shouldn't stop here. You cruise through the sky, checking your radar for another nearby planet to scope out. You glance up occasionally and realize the lightning has increased in frequency by a frightening rate, and with each strike, they seem to be getting closer to you.`,
    background: ``,
    choice: [
      { id: 0, text: `Leave this planet.`, goTo: 2 }
    ]
  },
  {
    id: 2,
    text: `You can pick your next destination later. As you pull your spacecraft up, it's as if the storm knows your intentions. You hardly have time to process it as lightning directly hits your ship, sending you careening off course towards the ground. Try as you may to regain control, you realize you can do nothing when you look at your HUD and see your right wing is severely damaged.`,
    background: ``,
    choice: [
      { id: 0, text: `Prepare for a crash-landing.`, goTo: 4 },
      { id: 1, text: `Accept your fate.`, goTo: 3 }
    ]
  },
  {
    id: 3,
    text: `Well, this is it. What can you do? You close your eyes and try to block out the blaring of the alarms and recall your best memories. Like that one time you... No... What about that moment where... Not that either. Hm. What are your best memories? You ponder that question up until you reach your fiery demise on the surface of this unknown planet, all by yourself. Maybe it was too soon for you to give up.`,
    background: ``,
    choice: [
      { id: 0, text: `Start from the beginning.`, goTo: 0 }
    ]
  },
  {
    id: 4,
    text: `There's only so much you can do, but you do it anyways. You pull up as best you can with only one decent wing and straighten yourself out. Your speed is still far too high to feel comfortable, and you are quickly approaching the ground. You soon reach the canopy of trees, and flying through branches doesn't slow you down as much as it makes your ship shake and take even more damage. The trees are much taller than you imagined from above, and you can only hope that you don't slam directly into any of them. With your hands frozen on the steering controls, you close your eyes and brace yourself for impact, the sounds of metal scraping and alarms blaring ringing through your head.`,
    background: ``,
    choice: [
      { id: 0, text: `Continue.`, goTo: 5 }
    ]
  },
  {
    id: 5,
    text: `End of the demo.`,
    background: ``,
    choice: [
      { id: 0, text: `Start from the beginning.`, goTo: 0 }
    ]
  }
]

export default story;
