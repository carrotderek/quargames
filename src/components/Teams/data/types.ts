export enum Teams {
  LifeSupport = 1,
  IceClimbers = 2,
  MasterLeague = 3
}

export const TeamConfigs = {
  [Teams.IceClimbers]: {
    name: 'Ice Climbers',
    icon: 'team-ice-climbers',
    background: 'team-ice-climbers-bg'
  },
  [Teams.LifeSupport]: {
    name: 'Life Support',
    icon: 'team-life-support',
    background: 'team-life-support-bg'
  },
  [Teams.MasterLeague]: {
    name: 'Masters League',
    icon: 'team-masters-league',
    background: 'team-masters-league-bg'
  }
}

export const StatNames = {
  0: 'Game Sense',
  1: 'Mental',
  2: 'Analytics',
  3: 'Mechanics',
  4: 'Stamina',
  5: 'Focus'
}

export enum Perks {
  Captain = 1,
  ChimpanzeeBrain = 2,
  ConcealedCarry = 3,
  ConfidenceEx = 4,
  DefiesExpectations = 5,
  DogParent = 6,
  FinalBoss = 7,
  FlashesBrilliance = 8,
  LightningRod = 9,
  MarriedMan = 10,
  MatchFit = 11,
  NothingToLose = 12,
  OpenCarry = 13,
  PurpleParse = 14,
  Sharpshooter = 15,
  ShotCaller = 16,
  SolidPlayer = 17,
  Sports = 18,
  Tranquilo = 19,
  Trickster = 20,
  WonderTwin = 21,
  YoungHands = 22
}

export const PerkConfig = {
  [Perks.Captain]: {
    text: 'Look at me, I\'m the captain now',
    asset: 'captain.svg'
  },
  [Perks.ChimpanzeeBrain]: {
    text: 'Chimpanzee Brain',
    asset: 'chimpanzee-brain.svg',
  },
  [Perks.ConcealedCarry]: {
    text: 'Concealed Carry',
    asset: 'concealed-carry.svg'
  } ,
  [Perks.ConfidenceEx]: {
    text: 'Confidence Ex',
    asset: 'confidence-ex.svg'
  } ,
  [Perks.DefiesExpectations]: {
    text: 'Defies Expectations',
    asset: 'defies-expectations.svg'
  } ,
  [Perks.DogParent]: {
    text: 'Dog Parent',
    asset: 'dog-parent.svg'
  } ,
  [Perks.FinalBoss]: {
    text: 'Final Boss',
    asset: 'final-boss.svg'
  },
  [Perks.FlashesBrilliance]: {
    text: 'Flashes of Brilliance',
    asset: 'flashes.svg'
  },
  [Perks.LightningRod]: {
    text: 'Lightning Rod',
    asset: 'lightning-rod.svg'
  } ,
  [Perks.MarriedMan]: {
    text: 'Married Man Meta',
    asset: 'married-man.svg'
  },
  [Perks.MatchFit]: {
    text: 'Always Match Fit',
    asset: 'always-match-fit.svg'
  },
  [Perks.NothingToLose]: {
    text: 'Nothing to Lose',
    asset: 'nothing-to-lose.svg'
  },
  [Perks.OpenCarry]: {
    text: 'Open Carry',
    asset: 'open-carry.svg'
  },
  [Perks.PurpleParse]: {
    text: 'Purple Parse',
    asset: 'purple-parse.svg'
  },
  [Perks.Sharpshooter]: {
    text: 'Sharpshooter',
    asset: 'sharpshooter.svg'
  },
  [Perks.ShotCaller]: {
    text: 'Shot Caller',
    asset: 'shotcaller.svg'
  },
  [Perks.SolidPlayer]: {
    text: 'Solid Player',
    asset: 'solid-player.svg'
  },
  [Perks.Sports]: {
    text: 'I like sports',
    asset: 'sports.svg'
  },
  [Perks.Tranquilo]: {
    text: 'Tranquilo',
    asset: 'tranquilo.svg'
  },
  [Perks.Trickster]: {
    text: 'Trickster',
    asset: 'trickster.svg'
  },
  [Perks.WonderTwin]: {
    text: 'Wonder Twin Power',
    asset: 'wonder-twin-power.svg'
  },
  [Perks.YoungHands]: {
    text: 'Young Hands',
    asset: 'young-hands.svg'
  }
}

export enum GameTypes {
  SeriesOne = '1v1',
  SeriesTwo = '2v2',
  SeriesThree = '4v4'
}

export const GamesMapping = {
  [GameTypes.SeriesOne]: [
    {
      asset: 'speedrunners.jpg',
      description: "Cuz Speed’s my name and Speed’s my game. It's SPEEDRUNNERs, The game where, much like in real life, running away from your problems is the best solution.",
      rules: [
        'Best of 3 maps',
        'Fourth map to be played in the event of a tie'
      ]
    },
    {
      asset: 'tetris.jpg',
      description: "A game made for people who like to skip class. It's not Tetris With Friends it's more like Tetris Against Enemies.",
      rules: [
        'Can play either Tetris or Puyo Puyo',
        'First to 3 wins'
      ]
    },
    {
      asset: 'overwatch.jpg',
      description: "All the time we've spent not playing Overwatch will finally be rewarded. Introducing Widow 1v1v1s, the FFA Deathmatch edition.",
      rules: [
        'SMGs will be disabled (cuz fuck you Thomas)',
        'First to 10 kills',
        'Map: Castillo'
      ]
    },
    {
      asset: 'ultimate-chicken-horse.jpg',
      description: "Are you that guy in 4 Player Mario who likes to throw people off for no reason. Then this is the game for youuuu.",
      rules: [
        'Random map selection',
        '1 round winner talks all'
      ]
    }
  ],
  [GameTypes.SeriesTwo]: [
    {
      asset: 'gang-beasts.jpg',
      description: "Are you that guy in 4 Player Mario who likes to throw people off for no reason? Then this is the event for you. Team up with a Friend to commit literal murder.",
      rules: [
        'Round robin 2v2s',
        'First to 3 wins',
        'Gang mode',
        'In the event of a tie, an additional 2v2 game will be played, or a 1v1v1'
      ]
    },
    {
      asset: 'rocket-league.jpg',
      description: "It’s car soccer, IT’S CAR SOCCER. Some people are good at driving, some other people are good at soccer. Rarely is someone good at both.",
      rules: [
        'Round robin 2v2s',
        '5 minutes matches',
        'DFH Stadium',
        'Tiebreaker: goal differential',
        'If still tied, points will be evenly distributed'
      ]
    }
  ],
  [GameTypes.SeriesThree]: [

    {
      asset: 'overcooked.jpg',
      description: "As per Ski Trip tradition,, Cam, Jason and Derek will do all the work and the rest of us just like... watch, maybe like peel a potato. and do some dishes. But mostly just watch.",
      rules: [
        'Best out of 3 maps',
        'Peachy Parade, Festive Forest, Ravenous Rapids',
        'In the event of a tie, a 4th map will be played'
      ]
    },
    {
      asset: 'l4d.jpg',
      description: "The game where you find out where you really stand with your friends. Are you going to be a team player or a Team Player? Can you really trust your team to watch your back or will they be using a shitass hunting rifle?",
      rules: [
        'No Mecy on normal',
        'Fastest time wins',
        '3 minutes will be added to your time if someone dies during the finale',
        'In the event of a tie, TOTAL DEATHS will be the tiebreaker. If it is still tied, points will be evenly distributed'
      ]
    }
  ]
}