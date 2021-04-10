module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('MainCategory', [{
      id: '1',
      name: 'Main Weapon',
    }, {
      id: '5',
      name: 'Sub-Weapon',
    }, {
      id: '10',
      name: 'Awakening',
    }, {
      id: '15',
      name: 'Armor',
    }, {
      id: '20',
      name: 'Accessories',
    }, {
      id: '25',
      name: 'Material',
    }, {
      id: '30',
      name: 'Enhancement',
    }, {
      id: '35',
      name: 'Consumables',
    }, {
      id: '40',
      name: 'Life Tools',
    }, {
      id: '45',
      name: 'Alchemy Stone',
    }, {
      id: '50',
      name: 'Magic Crystal',
    }, {
      id: '55',
      name: 'Pearl Item',
    }, {
      id: '60',
      name: 'Dye',
    }, {
      id: '65',
      name: 'Mount',
    }, {
      id: '70',
      name: 'Ship',
    }, {
      id: '75',
      name: 'Wagon',
    }, {
      id: '80',
      name: 'Furniture',
    }]);

    await queryInterface.bulkInsert('Item', [{
      id: 206,
      mainCategoryId: '35',
      name: 'Flashbang',
    }, {
      id: 207,
      mainCategoryId: '35',
      name: 'Fire Shot',
    }, {
      id: 208,
      mainCategoryId: '35',
      name: 'Poison Shot',
    }, {
      id: 212,
      mainCategoryId: '25',
      name: 'Capturing Rope',
    }, {
      id: 215,
      mainCategoryId: '35',
      name: 'Flare',
    }, {
      id: 504,
      mainCategoryId: '35',
      name: 'Melee AP Enhancer',
    }, {
      id: 505,
      mainCategoryId: '35',
      name: 'Ranged AP Enhancer',
    }, {
      id: 506,
      mainCategoryId: '35',
      name: 'Magic AP Enhancer',
    }, {
      id: 507,
      mainCategoryId: '35',
      name: 'Melee Damage Reducer',
    }, {
      id: 508,
      mainCategoryId: '35',
      name: 'Ranged Damage Reducer',
    }, {
      id: 509,
      mainCategoryId: '35',
      name: 'Magic Damage Reducer',
    }, {
      id: 512,
      mainCategoryId: '35',
      name: 'Grapple Resistance Enhancer',
    }, {
      id: 513,
      mainCategoryId: '35',
      name: 'Instant HP Potion (Small)',
    }, {
      id: 514,
      mainCategoryId: '35',
      name: 'Instant HP Potion (Medium)',
    }, {
      id: 515,
      mainCategoryId: '35',
      name: 'Instant MP Potion (Small)',
    }, {
      id: 516,
      mainCategoryId: '35',
      name: 'Instant MP Potion (Medium)',
    }, {
      id: 517,
      mainCategoryId: '35',
      name: 'HP Potion (Small)',
    }, {
      id: 518,
      mainCategoryId: '35',
      name: 'HP Potion (Medium)',
    }, {
      id: 519,
      mainCategoryId: '35',
      name: 'HP Potion (Large)',
    }, {
      id: 520,
      mainCategoryId: '35',
      name: 'MP Potion (Small)',
    }, {
      id: 521,
      mainCategoryId: '35',
      name: 'MP Potion (Medium)',
    }, {
      id: 522,
      mainCategoryId: '35',
      name: 'MP Potion (Large)',
    }, {
      id: 523,
      mainCategoryId: '35',
      name: 'Accuracy Enhancer',
    }, {
      id: 524,
      mainCategoryId: '35',
      name: 'HP Potion (Extra Large)',
    }, {
      id: 526,
      mainCategoryId: '35',
      name: 'MP Potion (Extra Large)',
    }, {
      id: 528,
      mainCategoryId: '35',
      name: 'Instant HP Potion (Large)',
    }, {
      id: 529,
      mainCategoryId: '35',
      name: 'Instant HP Potion (Extra Large)',
    }, {
      id: 531,
      mainCategoryId: '35',
      name: 'Instant MP Potion (Large)',
    }, {
      id: 532,
      mainCategoryId: '35',
      name: 'Instant MP Potion (Extra Large)',
    }, {
      id: 566,
      mainCategoryId: '35',
      name: 'Grain Juice',
    }, {
      id: 567,
      mainCategoryId: '35',
      name: 'Concentrated Grain Juice',
    }, {
      id: 568,
      mainCategoryId: '35',
      name: 'Highly Concentrated Grain Juice',
    }, {
      id: 569,
      mainCategoryId: '35',
      name: 'Herbal Juice',
    }, {
      id: 570,
      mainCategoryId: '35',
      name: 'Concentrated Herbal Juice',
    }, {
      id: 571,
      mainCategoryId: '35',
      name: 'Highly Concentrated Herbal Juice',
    }, {
      id: 575,
      mainCategoryId: '35',
      name: 'Whale Tendon Potion',
    }, {
      id: 576,
      mainCategoryId: '35',
      name: 'Superior Whale Tendon Potion',
    }, {
      id: 578,
      mainCategoryId: '35',
      name: 'Refined Grain Juice',
    }, {
      id: 579,
      mainCategoryId: '35',
      name: 'Refined Herbal Juice',
    }, {
      id: 586,
      mainCategoryId: '35',
      name: 'Energy Potion (Small)',
    }, {
      id: 587,
      mainCategoryId: '35',
      name: 'Energy Potion (Medium)',
    }, {
      id: 588,
      mainCategoryId: '35',
      name: 'Energy Potion (Large)',
    }, {
      id: 589,
      mainCategoryId: '35',
      name: 'Energy Potion (Extra Large)',
    }, {
      id: 591,
      mainCategoryId: '35',
      name: 'WP Potion (Small)',
    }, {
      id: 592,
      mainCategoryId: '35',
      name: 'WP Potion (Medium)',
    }, {
      id: 593,
      mainCategoryId: '35',
      name: 'WP Potion (Large)',
    }, {
      id: 594,
      mainCategoryId: '35',
      name: 'WP Potion (Extra Large)',
    }, {
      id: 595,
      mainCategoryId: '35',
      name: 'SP Potion (Small)',
    }, {
      id: 596,
      mainCategoryId: '35',
      name: 'SP Potion (Medium)',
    }, {
      id: 597,
      mainCategoryId: '35',
      name: 'SP Potion (Large)',
    }, {
      id: 598,
      mainCategoryId: '35',
      name: 'SP Potion (Extra Large)',
    }, {
      id: 601,
      mainCategoryId: '35',
      name: '[Party] Elixir of Amity',
    }, {
      id: 602,
      mainCategoryId: '35',
      name: '[Party] Improved Elixir of Amity',
    }, {
      id: 603,
      mainCategoryId: '35',
      name: '[Party] Elixir of Thorn',
    }, {
      id: 604,
      mainCategoryId: '35',
      name: '[Party] Elixir of Sharp Thorn',
    }, {
      id: 605,
      mainCategoryId: '35',
      name: '[Party] Resurrection Elixir',
    }, {
      id: 606,
      mainCategoryId: '35',
      name: '[Party] Strong Resurrection Elixir',
    }, {
      id: 607,
      mainCategoryId: '35',
      name: '[Party] Elixir of Human Hunt',
    }, {
      id: 608,
      mainCategoryId: '35',
      name: '[Party] Elixir of Perfect Human Hunt',
    }, {
      id: 609,
      mainCategoryId: '35',
      name: '[Party] Elixir of Frenzy',
    }, {
      id: 610,
      mainCategoryId: '35',
      name: '[Party] Elixir of Endless Frenzy',
    }, {
      id: 611,
      mainCategoryId: '35',
      name: '[Party] Golden Hand Elixir',
    }, {
      id: 612,
      mainCategoryId: '35',
      name: '[Party] Glorious Golden Hand Elixir',
    }, {
      id: 613,
      mainCategoryId: '35',
      name: '[Party] Elixir of Draining',
    }, {
      id: 614,
      mainCategoryId: '35',
      name: '[Party] Elixir of Strong Draining',
    }, {
      id: 615,
      mainCategoryId: '35',
      name: '[Party] Elixir of Demihuman Hunt',
    }, {
      id: 616,
      mainCategoryId: '35',
      name: '[Party] Fierce Demihuman Hunting Elixir',
    }, {
      id: 617,
      mainCategoryId: '35',
      name: '[Party] Elixir of Perforation',
    }, {
      id: 618,
      mainCategoryId: '35',
      name: '[Party] Elixir of Brutal Perforation',
    }, {
      id: 619,
      mainCategoryId: '35',
      name: '[Party] Elixir of Energy',
    }, {
      id: 620,
      mainCategoryId: '35',
      name: '[Party] Surging Energy Elixir',
    }, {
      id: 621,
      mainCategoryId: '35',
      name: '[Party] Elixir of Wings',
    }, {
      id: 622,
      mainCategoryId: '35',
      name: '[Party] Soaring Wings Elixir',
    }, {
      id: 623,
      mainCategoryId: '35',
      name: '[Party] Elixir of Death',
    }, {
      id: 624,
      mainCategoryId: '35',
      name: '[Party] Brutal Death Elixir',
    }, {
      id: 625,
      mainCategoryId: '35',
      name: '[Party] Elixir of Wind',
    }, {
      id: 626,
      mainCategoryId: '35',
      name: '[Party] Elixir of Flowing Wind',
    }, {
      id: 627,
      mainCategoryId: '35',
      name: '[Party] Elixir of Swiftness',
    }, {
      id: 628,
      mainCategoryId: '35',
      name: '[Party] Elixir of Intrepid Swiftness',
    }, {
      id: 629,
      mainCategoryId: '35',
      name: '[Party] Elixir of Spells',
    }, {
      id: 630,
      mainCategoryId: '35',
      name: '[Party] Elixir of Agile Spells',
    }, {
      id: 631,
      mainCategoryId: '35',
      name: '[Party] Elixir of Seal',
    }, {
      id: 632,
      mainCategoryId: '35',
      name: '[Party] Agile Seal Elixir',
    }, {
      id: 633,
      mainCategoryId: '35',
      name: '[Party] Elixir of Assassination',
    }, {
      id: 634,
      mainCategoryId: '35',
      name: '[Party] Elixir of Lethal Assassin',
    }, {
      id: 635,
      mainCategoryId: '35',
      name: '[Party] Elixir of Detection',
    }, {
      id: 636,
      mainCategoryId: '35',
      name: '[Party] Elixir of Sharp Detection',
    }, {
      id: 637,
      mainCategoryId: '35',
      name: '[Party] Elixir of Concentration',
    }, {
      id: 638,
      mainCategoryId: '35',
      name: '[Party] Elixir of Advanced Concentration',
    }, {
      id: 639,
      mainCategoryId: '35',
      name: '[Party] Elixir of Will',
    }, {
      id: 640,
      mainCategoryId: '35',
      name: '[Party] Elixir of Remarkable Will',
    }, {
      id: 641,
      mainCategoryId: '35',
      name: '[Party] Elixir of Fury',
    }, {
      id: 642,
      mainCategoryId: '35',
      name: '[Party] Elixir of Endless Fury',
    }, {
      id: 643,
      mainCategoryId: '35',
      name: '[Party] Elixir of Resistance',
    }, {
      id: 644,
      mainCategoryId: '35',
      name: '[Party] Elixir of Sharp Resistance',
    }, {
      id: 645,
      mainCategoryId: '35',
      name: '[Party] Elixir of Life',
    }, {
      id: 646,
      mainCategoryId: '35',
      name: '[Party] Elixir of Strong Life',
    }, {
      id: 647,
      mainCategoryId: '35',
      name: '[Party] Elixir of Mentality',
    }, {
      id: 648,
      mainCategoryId: '35',
      name: '[Party] Elixir of Clear Mentality',
    }, {
      id: 649,
      mainCategoryId: '35',
      name: '[Party] Grim Reaper\'s Elixir',
    }, {
      id: 650,
      mainCategoryId: '35',
      name: '[Party] Grim Soul Reaper\'s Elixir',
    }, {
      id: 651,
      mainCategoryId: '35',
      name: '[Party] EXP Elixir',
    }, {
      id: 652,
      mainCategoryId: '35',
      name: '[Party] Splendid EXP Elixir',
    }, {
      id: 653,
      mainCategoryId: '35',
      name: '[Party] Defense Elixir',
    }, {
      id: 654,
      mainCategoryId: '35',
      name: '[Party] Elixir of Steel Defense',
    }, {
      id: 655,
      mainCategoryId: '35',
      name: '[Party] Elixir of Carnage',
    }, {
      id: 656,
      mainCategoryId: '35',
      name: '[Party] Elixir of Brutal Carnage',
    }, {
      id: 657,
      mainCategoryId: '35',
      name: '[Party] Elixir of Sky',
    }, {
      id: 658,
      mainCategoryId: '35',
      name: '[Party] Merciless Sky Elixir',
    }, {
      id: 659,
      mainCategoryId: '35',
      name: '[Party] Elixir of Endurance',
    }, {
      id: 660,
      mainCategoryId: '35',
      name: '[Party] Elixir of Overwhelming Endurance',
    }, {
      id: 661,
      mainCategoryId: '35',
      name: '[Party] Worker\'s Elixir',
    }, {
      id: 662,
      mainCategoryId: '35',
      name: '[Party] Skilled Worker\'s Elixir',
    }, {
      id: 663,
      mainCategoryId: '35',
      name: '[Party] Fisher\'s Elixir',
    }, {
      id: 664,
      mainCategoryId: '35',
      name: 'Elixir of Amity',
    }, {
      id: 665,
      mainCategoryId: '35',
      name: 'Improved Elixir of Amity',
    }, {
      id: 666,
      mainCategoryId: '35',
      name: 'Elixir of Thorn',
    }, {
      id: 667,
      mainCategoryId: '35',
      name: 'Elixir of Sharp Thorn',
    }, {
      id: 668,
      mainCategoryId: '35',
      name: 'Resurrection Elixir',
    }, {
      id: 669,
      mainCategoryId: '35',
      name: 'Strong Resurrection Elixir',
    }, {
      id: 670,
      mainCategoryId: '35',
      name: 'Elixir of Human Hunt',
    }, {
      id: 671,
      mainCategoryId: '35',
      name: 'Elixir of Perfect Human Hunt',
    }, {
      id: 672,
      mainCategoryId: '35',
      name: 'Elixir of Frenzy',
    }, {
      id: 673,
      mainCategoryId: '35',
      name: 'Elixir of Endless Frenzy',
    }, {
      id: 674,
      mainCategoryId: '35',
      name: 'Golden Hand Elixir',
    }, {
      id: 675,
      mainCategoryId: '35',
      name: 'Glorious Golden Hand Elixir',
    }, {
      id: 676,
      mainCategoryId: '35',
      name: 'Elixir of Draining',
    }, {
      id: 677,
      mainCategoryId: '35',
      name: 'Elixir of Strong Draining',
    }, {
      id: 678,
      mainCategoryId: '35',
      name: 'Elixir of Demihuman Hunt',
    }, {
      id: 679,
      mainCategoryId: '35',
      name: 'Fierce Demihuman Hunting Elixir',
    }, {
      id: 680,
      mainCategoryId: '35',
      name: 'Elixir of Perforation',
    }, {
      id: 681,
      mainCategoryId: '35',
      name: 'Elixir of Brutal Perforation',
    }, {
      id: 682,
      mainCategoryId: '35',
      name: 'Elixir of Energy',
    }, {
      id: 683,
      mainCategoryId: '35',
      name: 'Surging Energy Elixir',
    }, {
      id: 684,
      mainCategoryId: '35',
      name: 'Elixir of Wings',
    }, {
      id: 685,
      mainCategoryId: '35',
      name: 'Soaring Wings Elixir',
    }, {
      id: 686,
      mainCategoryId: '35',
      name: 'Elixir of Death',
    }, {
      id: 687,
      mainCategoryId: '35',
      name: 'Brutal Death Elixir',
    }, {
      id: 688,
      mainCategoryId: '35',
      name: 'Elixir of Wind',
    }, {
      id: 689,
      mainCategoryId: '35',
      name: 'Elixir of Flowing Wind',
    }, {
      id: 690,
      mainCategoryId: '35',
      name: 'Elixir of Swiftness',
    }, {
      id: 691,
      mainCategoryId: '35',
      name: 'Elixir of Intrepid Swiftness',
    }, {
      id: 692,
      mainCategoryId: '35',
      name: 'Elixir of Spells',
    }, {
      id: 693,
      mainCategoryId: '35',
      name: 'Elixir of Agile Spells',
    }, {
      id: 694,
      mainCategoryId: '35',
      name: 'Elixir of Seal',
    }, {
      id: 695,
      mainCategoryId: '35',
      name: 'Agile Seal Elixir',
    }, {
      id: 696,
      mainCategoryId: '35',
      name: 'Elixir of Assassination',
    }, {
      id: 697,
      mainCategoryId: '35',
      name: 'Elixir of Lethal Assassin',
    }, {
      id: 698,
      mainCategoryId: '35',
      name: 'Elixir of Detection',
    }, {
      id: 699,
      mainCategoryId: '35',
      name: 'Elixir of Sharp Detection',
    }, {
      id: 700,
      mainCategoryId: '35',
      name: 'Elixir of Concentration',
    }, {
      id: 701,
      mainCategoryId: '35',
      name: 'Elixir of Advanced Concentration',
    }, {
      id: 702,
      mainCategoryId: '35',
      name: 'Elixir of Will',
    }, {
      id: 703,
      mainCategoryId: '35',
      name: 'Elixir of Remarkable Will',
    }, {
      id: 704,
      mainCategoryId: '35',
      name: 'Elixir of Fury',
    }, {
      id: 705,
      mainCategoryId: '35',
      name: 'Elixir of Endless Fury',
    }, {
      id: 706,
      mainCategoryId: '35',
      name: 'Elixir of Resistance',
    }, {
      id: 707,
      mainCategoryId: '35',
      name: 'Elixir of Sharp Resistance',
    }, {
      id: 708,
      mainCategoryId: '35',
      name: 'Elixir of Life',
    }, {
      id: 709,
      mainCategoryId: '35',
      name: 'Elixir of Strong Life',
    }, {
      id: 710,
      mainCategoryId: '35',
      name: 'Elixir of Mentality',
    }, {
      id: 711,
      mainCategoryId: '35',
      name: 'Elixir of Clear Mentality',
    }, {
      id: 712,
      mainCategoryId: '35',
      name: 'Grim Reaper\'s Elixir',
    }, {
      id: 713,
      mainCategoryId: '35',
      name: 'Grim Soul Reaper\'s Elixir',
    }, {
      id: 714,
      mainCategoryId: '35',
      name: 'EXP Elixir',
    }, {
      id: 715,
      mainCategoryId: '35',
      name: 'Splendid EXP Elixir',
    }, {
      id: 716,
      mainCategoryId: '35',
      name: 'Defense Elixir',
    }, {
      id: 717,
      mainCategoryId: '35',
      name: 'Elixir of Steel Defense',
    }, {
      id: 718,
      mainCategoryId: '35',
      name: 'Elixir of Carnage',
    }, {
      id: 719,
      mainCategoryId: '35',
      name: 'Elixir of Brutal Carnage',
    }, {
      id: 720,
      mainCategoryId: '35',
      name: 'Elixir of Sky',
    }, {
      id: 721,
      mainCategoryId: '35',
      name: 'Merciless Sky Elixir',
    }, {
      id: 722,
      mainCategoryId: '35',
      name: 'Elixir of Endurance',
    }, {
      id: 723,
      mainCategoryId: '35',
      name: 'Elixir of Overwhelming Endurance',
    }, {
      id: 724,
      mainCategoryId: '35',
      name: 'Worker\'s Elixir',
    }, {
      id: 725,
      mainCategoryId: '35',
      name: 'Skilled Worker\'s Elixir',
    }, {
      id: 726,
      mainCategoryId: '35',
      name: 'Fisher\'s Elixir',
    }, {
      id: 727,
      mainCategoryId: '35',
      name: 'Skilled Fisher\'s Elixir',
    }, {
      id: 728,
      mainCategoryId: '35',
      name: 'Elixir of Burn Removal',
    }, {
      id: 729,
      mainCategoryId: '35',
      name: 'Antidote Elixir',
    }, {
      id: 730,
      mainCategoryId: '35',
      name: 'Elixir of Hemostasis',
    }, {
      id: 732,
      mainCategoryId: '35',
      name: 'Whale Tendon Elixir',
    }, {
      id: 733,
      mainCategoryId: '35',
      name: 'Tough Whale Tendon Elixir',
    }, {
      id: 734,
      mainCategoryId: '35',
      name: 'Perfume of Courage',
    }, {
      id: 735,
      mainCategoryId: '35',
      name: 'Perfume of Swiftness',
    }, {
      id: 736,
      mainCategoryId: '35',
      name: '[Party] Skilled Fisher\'s Elixir',
    }, {
      id: 737,
      mainCategoryId: '35',
      name: '[Party] Elixir of Burn Removal',
    }, {
      id: 738,
      mainCategoryId: '35',
      name: '[Party] Antidote Elixir',
    }, {
      id: 739,
      mainCategoryId: '35',
      name: '[Party] Elixir of Hemostasis',
    }, {
      id: 740,
      mainCategoryId: '35',
      name: 'Griffon\'s Elixir',
    }, {
      id: 741,
      mainCategoryId: '35',
      name: 'Strong Griffon\'s Elixir',
    }, {
      id: 744,
      mainCategoryId: '35',
      name: '[Party] Griffon\'s Elixir',
    }, {
      id: 745,
      mainCategoryId: '35',
      name: '[Party] Strong Griffon\'s Elixir',
    }, {
      id: 748,
      mainCategoryId: '35',
      name: 'Khalk\'s Elixir',
    }, {
      id: 749,
      mainCategoryId: '35',
      name: 'Elixir of Time',
    }, {
      id: 750,
      mainCategoryId: '35',
      name: 'Elixir of Flowing Time',
    }, {
      id: 751,
      mainCategoryId: '35',
      name: '[Party] Elixir of Time',
    }, {
      id: 752,
      mainCategoryId: '35',
      name: '[Party] Elixir of Flowing Time',
    }, {
      id: 753,
      mainCategoryId: '35',
      name: 'Elixir of Training',
    }, {
      id: 754,
      mainCategoryId: '35',
      name: 'Elixir of Expert Training',
    }, {
      id: 755,
      mainCategoryId: '35',
      name: '[Party] Elixir of Training',
    }, {
      id: 756,
      mainCategoryId: '35',
      name: '[Party] Elixir of Expert Training',
    }, {
      id: 761,
      mainCategoryId: '35',
      name: 'Marking Reagent',
    }, {
      id: 762,
      mainCategoryId: '35',
      name: 'Elixir of Shock',
    }, {
      id: 763,
      mainCategoryId: '35',
      name: 'Elixir of Strong Shock',
    }, {
      id: 764,
      mainCategoryId: '35',
      name: '[Party] Elixir of Shock',
    }, {
      id: 765,
      mainCategoryId: '35',
      name: '[Party] Elixir of Strong Shock',
    }, {
      id: 766,
      mainCategoryId: '35',
      name: '[Mix] EXP-Reaper Elixir',
    }, {
      id: 767,
      mainCategoryId: '35',
      name: '[Mix] Time-Training Elixir',
    }, {
      id: 768,
      mainCategoryId: '35',
      name: '[Mix] Swiftness-Wind-Spell Elixir',
    }, {
      id: 769,
      mainCategoryId: '35',
      name: '[Mix] Manhunt-Rage Elixir',
    }, {
      id: 770,
      mainCategoryId: '35',
      name: '[Mix] Thorn-Defense Elixir',
    }, {
      id: 771,
      mainCategoryId: '35',
      name: 'Elixir of Deep Sea',
    }, {
      id: 773,
      mainCategoryId: '35',
      name: 'Weenie Elixir',
    }, {
      id: 774,
      mainCategoryId: '35',
      name: 'Surging Weenie Elixir',
    }, {
      id: 775,
      mainCategoryId: '35',
      name: '[Party] Weenie Elixir',
    }, {
      id: 776,
      mainCategoryId: '35',
      name: '[Party] Surging Weenie Elixir',
    }, {
      id: 777,
      mainCategoryId: '35',
      name: 'Looney Elixir',
    }, {
      id: 778,
      mainCategoryId: '35',
      name: 'Reliable Looney Elixir',
    }, {
      id: 779,
      mainCategoryId: '35',
      name: '[Party] Looney Elixir',
    }, {
      id: 780,
      mainCategoryId: '35',
      name: '[Party] Reliable Looney Elixir',
    }, {
      id: 781,
      mainCategoryId: '35',
      name: 'Spirit Perfume Elixir',
    }, {
      id: 782,
      mainCategoryId: '35',
      name: 'Helix Elixir',
    }, {
      id: 783,
      mainCategoryId: '35',
      name: 'Splendid Helix Elixir',
    }, {
      id: 784,
      mainCategoryId: '35',
      name: '[Party] Helix Elixir',
    }, {
      id: 785,
      mainCategoryId: '35',
      name: '[Party] Splendid Helix Elixir',
    }, {
      id: 791,
      mainCategoryId: '35',
      name: 'Verdure Draught',
    }, {
      id: 792,
      mainCategoryId: '35',
      name: 'Beast\'s Draught',
    }, {
      id: 793,
      mainCategoryId: '35',
      name: 'Giant\'s Draught',
    }, {
      id: 794,
      mainCategoryId: '35',
      name: 'Savage Draught',
    }, {
      id: 795,
      mainCategoryId: '35',
      name: 'Frenzy Draught',
    }, {
      id: 796,
      mainCategoryId: '35',
      name: 'Celerity Draught',
    }, {
      id: 797,
      mainCategoryId: '35',
      name: 'Unbridled Celerity Draught',
    }, {
      id: 798,
      mainCategoryId: '35',
      name: 'Armor Draught',
    }, {
      id: 1152,
      mainCategoryId: '35',
      name: 'Elixir of Skill',
    }, {
      id: 1154,
      mainCategoryId: '35',
      name: 'Elixir of Infinite Skill',
    }, {
      id: 1155,
      mainCategoryId: '35',
      name: 'Elixir of Mastery',
    }, {
      id: 1156,
      mainCategoryId: '35',
      name: 'Elixir of Labor',
    }, {
      id: 1157,
      mainCategoryId: '35',
      name: 'Elixir of Armor',
    }, {
      id: 1158,
      mainCategoryId: '35',
      name: 'Elixir of Improved Mastery',
    }, {
      id: 1159,
      mainCategoryId: '35',
      name: 'Elixir of Rough Labor',
    }, {
      id: 1160,
      mainCategoryId: '35',
      name: 'Elixir of Corrupted Armor',
    }, {
      id: 1161,
      mainCategoryId: '35',
      name: 'Perfume of Charm',
    }, {
      id: 1163,
      mainCategoryId: '35',
      name: 'Immortal: Giant\'s Draught',
    }, {
      id: 1164,
      mainCategoryId: '35',
      name: 'Immortal: Savage Draught',
    }, {
      id: 1166,
      mainCategoryId: '35',
      name: 'Immortal: Spirit Perfume Elixir',
    }, {
      id: 1169,
      mainCategoryId: '35',
      name: 'Immortal: Elixir of Deep Sea',
    }, {
      id: 1178,
      mainCategoryId: '25',
      name: 'Corrupt Oil of Immortality',
    }, {
      id: 2002,
      mainCategoryId: '80',
      name: 'Heidelian Handcrafted High-Quality Drawers',
    }, {
      id: 2004,
      mainCategoryId: '80',
      name: 'Velian Handcrafted High-Quality Drawers',
    }, {
      id: 2006,
      mainCategoryId: '80',
      name: 'Calpheon Handcrafted Drawer',
    }, {
      id: 2008,
      mainCategoryId: '80',
      name: 'Mediahn Handcrafted Drawers',
    }, {
      id: 2010,
      mainCategoryId: '80',
      name: 'Mediahn Handcrafted Bedside Table',
    }, {
      id: 2012,
      mainCategoryId: '80',
      name: 'Heidelian Handcrafted High-Quality Bedside Table',
    }, {
      id: 2014,
      mainCategoryId: '80',
      name: 'Velian Handcrafted High-Quality Bedside Table',
    }, {
      id: 2016,
      mainCategoryId: '80',
      name: 'Calpheon Handcrafted Cabinet',
    }, {
      id: 2018,
      mainCategoryId: '80',
      name: 'Valencian Handcrafted Drawers',
    }, {
      id: 2020,
      mainCategoryId: '80',
      name: 'Valencian Handcrafted Bedside Table',
    }, {
      id: 2022,
      mainCategoryId: '80',
      name: 'O\'draxxia High-Quality Bedside Table',
    }, {
      id: 2023,
      mainCategoryId: '80',
      name: 'O\'draxxia Drawers',
    }, {
      id: 2102,
      mainCategoryId: '80',
      name: 'Heidelian Handcrafted Wardrobe',
    }, {
      id: 2104,
      mainCategoryId: '80',
      name: 'Velian Handcrafted Wardrobe',
    }, {
      id: 2106,
      mainCategoryId: '80',
      name: 'Calpheon Handcrafted Wardrobe',
    }, {
      id: 2108,
      mainCategoryId: '80',
      name: 'Mediahn Handcrafted Closet',
    }, {
      id: 2110,
      mainCategoryId: '80',
      name: 'Valencian Handcrafted Wardrobe',
    }, {
      id: 2202,
      mainCategoryId: '80',
      name: 'Heidelian Handcrafted Dining Table',
    }, {
      id: 2204,
      mainCategoryId: '80',
      name: 'Velian Handcrafted Dining Table',
    }, {
      id: 2206,
      mainCategoryId: '80',
      name: 'Calpheon Handcrafted Dining Table',
    }, {
      id: 2208,
      mainCategoryId: '80',
      name: 'Mediahn Handcrafted Dining Table',
    }, {
      id: 2210,
      mainCategoryId: '80',
      name: 'Mediahn Handcrafted Table',
    }, {
      id: 2212,
      mainCategoryId: '80',
      name: 'Heidelian Handcrafted Table',
    }, {
      id: 2214,
      mainCategoryId: '80',
      name: 'Velian Handcrafted Table',
    }, {
      id: 2216,
      mainCategoryId: '80',
      name: 'Calpheon Handcrafted Table',
    }, {
      id: 2218,
      mainCategoryId: '80',
      name: 'Valencian Handcrafted Dining Table',
    }, {
      id: 2220,
      mainCategoryId: '80',
      name: 'Valencian Handmade Table',
    }, {
      id: 2223,
      mainCategoryId: '80',
      name: 'O\'draxxia Hardwood Dining Table',
    }, {
      id: 2224,
      mainCategoryId: '80',
      name: 'O\'draxxia Fragrant Hexagonal Dining Table',
    }, {
      id: 2302,
      mainCategoryId: '80',
      name: 'Heidelian Handcrafted Chair',
    }, {
      id: 2304,
      mainCategoryId: '80',
      name: 'Velian Handcrafted Chair',
    }, {
      id: 2306,
      mainCategoryId: '80',
      name: 'Calpheon Handcrafted Chair',
    }, {
      id: 2309,
      mainCategoryId: '80',
      name: 'Heidelian Handcrafted Sofa',
    }, {
      id: 2311,
      mainCategoryId: '80',
      name: 'Velian Handcrafted Sofa',
    }, {
      id: 2313,
      mainCategoryId: '80',
      name: 'Calpheon Handcrafted Sofa',
    }, {
      id: 2315,
      mainCategoryId: '80',
      name: 'Mediahn Handcrafted Chair',
    }, {
      id: 2316,
      mainCategoryId: '80',
      name: 'Mediahn Handcrafted Sofa',
    }, {
      id: 2318,
      mainCategoryId: '80',
      name: 'Valencian Handcrafted Chair',
    }, {
      id: 2320,
      mainCategoryId: '80',
      name: 'Valencian Handcrafted Sofa',
    }, {
      id: 2381,
      mainCategoryId: '80',
      name: 'Kamasylvian Commander\'s Chair',
    }, {
      id: 2382,
      mainCategoryId: '80',
      name: 'Kamasylvian Squared Chair',
    }, {
      id: 2383,
      mainCategoryId: '80',
      name: 'Kamasylvia Backrest Chair',
    }, {
      id: 2384,
      mainCategoryId: '80',
      name: 'Kamasylvian Compact Bench',
    }, {
      id: 2387,
      mainCategoryId: '80',
      name: 'Duvencrune Antique Bench',
    }, {
      id: 2388,
      mainCategoryId: '80',
      name: 'Duvencrune Wide Bench',
    }, {
      id: 2389,
      mainCategoryId: '80',
      name: 'Duvencrune Vertical Bench',
    }, {
      id: 2390,
      mainCategoryId: '80',
      name: 'Duvencrune Vintage Wooden Bench',
    }, {
      id: 2391,
      mainCategoryId: '80',
      name: 'Duvencrune Wooden Memorial Chair',
    }, {
      id: 2392,
      mainCategoryId: '80',
      name: 'Duvencrune Interlocking Chair',
    }, {
      id: 2393,
      mainCategoryId: '80',
      name: 'Duvencrune Wooden Anvil Chair',
    }, {
      id: 2394,
      mainCategoryId: '80',
      name: 'Duvencrune Wooden Square Chair',
    }, {
      id: 2395,
      mainCategoryId: '80',
      name: 'Kamasylvian Standard Bench',
    }, {
      id: 2396,
      mainCategoryId: '80',
      name: 'Kamasylvian Atanis Bench',
    }, {
      id: 2397,
      mainCategoryId: '80',
      name: 'Kamasylvian Loopy Short Bench',
    }, {
      id: 2398,
      mainCategoryId: '80',
      name: 'Kamasylvian Loopy Bench',
    }, {
      id: 2399,
      mainCategoryId: '80',
      name: 'Kamasylvian Meeting Chair',
    }, {
      id: 2400,
      mainCategoryId: '80',
      name: 'O\'draxxia Hardwood Armchair',
    }, {
      id: 2501,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Beast Monsters (Balenos)',
    }, {
      id: 2502,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Imps (Balenos)',
    }, {
      id: 2503,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Goblins',
    }, {
      id: 2504,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on the Exiles of Mediah',
    }, {
      id: 2505,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Beast Monsters (Serendia)',
    }, {
      id: 2506,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Plant Monsters (Serendia)',
    }, {
      id: 2507,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Insect Monsters (Serendia)',
    }, {
      id: 2508,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Bandits',
    }, {
      id: 2509,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Imps (Serendia)',
    }, {
      id: 2510,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Fogans',
    }, {
      id: 2511,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Nagas',
    }, {
      id: 2512,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Red Orcs',
    }, {
      id: 2513,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on the Al Rhundi Rebels',
    }, {
      id: 2514,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Cultists',
    }, {
      id: 2515,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on the Followers of Kzarka',
    }, {
      id: 2516,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Beast Monsters (Calpheon)',
    }, {
      id: 2517,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Plant Monsters (Calpheon)',
    }, {
      id: 2518,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Khurutos',
    }, {
      id: 2519,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Monsters of the Quint Hill',
    }, {
      id: 2520,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Monsters at Marni\'s House',
    }, {
      id: 2521,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Saunils',
    }, {
      id: 2522,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Monsters of the Mansha Forest',
    }, {
      id: 2523,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Rhutums',
    }, {
      id: 2524,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Monsters of Lake Kaia',
    }, {
      id: 2525,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Monsters of Hexe Sanctuary',
    }, {
      id: 2526,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Monsters of the Ruins',
    }, {
      id: 2527,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on the Secret Societies',
    }, {
      id: 2528,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Harpies',
    }, {
      id: 2529,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Giants',
    }, {
      id: 2530,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Creatures of Calpheon',
    }, {
      id: 2531,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Monsters of the Quarry',
    }, {
      id: 2532,
      mainCategoryId: '80',
      name: 'Bookshelf with Knowledge on Monsters of the Refugee Camp',
    }, {
      id: 2533,
      mainCategoryId: '80',
      name: 'Bookshelf with knowledge on the Steppes (Kamasylvia)',
    }, {
      id: 2534,
      mainCategoryId: '80',
      name: 'Falasi\'s Bookshelf with Knowledge on Sailing',
    }, {
      id: 2535,
      mainCategoryId: '80',
      name: 'Falasi\'s Bookshelf with Knowledge on Excavation',
    }, {
      id: 2536,
      mainCategoryId: '80',
      name: 'Falasi\'s Bookshelf with Knowledge on Hunting',
    }, {
      id: 2702,
      mainCategoryId: '80',
      name: 'Heidelian Handcrafted Bed',
    }, {
      id: 2704,
      mainCategoryId: '80',
      name: 'Velian Handcrafted Bed',
    }, {
      id: 2706,
      mainCategoryId: '80',
      name: 'Calpheon Handcrafted Bed',
    }, {
      id: 2708,
      mainCategoryId: '80',
      name: 'Mediahn Handcrafted Bed',
    }, {
      id: 2710,
      mainCategoryId: '80',
      name: 'Valencian Handcrafted Bed',
    }, {
      id: 2814,
      mainCategoryId: '80',
      name: 'Xian Workshop Chandelier (White)',
    }, {
      id: 2846,
      mainCategoryId: '80',
      name: 'Duvencrune Sunset Chandelier',
    }, {
      id: 3002,
      mainCategoryId: '80',
      name: 'Stuffed Bear Head',
    }, {
      id: 3003,
      mainCategoryId: '80',
      name: 'Bear Hide Carpet',
    }, {
      id: 3006,
      mainCategoryId: '80',
      name: 'Stuffed Fox Head',
    }, {
      id: 3007,
      mainCategoryId: '80',
      name: 'Goblin Chief Helmet',
    }, {
      id: 3013,
      mainCategoryId: '80',
      name: 'Imp Captain\'s Knife',
    }, {
      id: 3017,
      mainCategoryId: '80',
      name: 'Stuffed Weasel',
    }, {
      id: 3018,
      mainCategoryId: '80',
      name: 'Stuffed Gray Wolf Head',
    }, {
      id: 3019,
      mainCategoryId: '80',
      name: 'Stuffed Wolf Head',
    }, {
      id: 3020,
      mainCategoryId: '80',
      name: 'Statue of Blind Faith Ornament',
    }, {
      id: 3021,
      mainCategoryId: '80',
      name: 'Grotesque Flag Ornament',
    }, {
      id: 3023,
      mainCategoryId: '80',
      name: 'Jack-O\'-Lantern Ornament',
    }, {
      id: 3025,
      mainCategoryId: '80',
      name: 'Halberd of the Swamp Ornament',
    }, {
      id: 3026,
      mainCategoryId: '80',
      name: 'Scrapper\'s Gloves Ornament',
    }, {
      id: 3037,
      mainCategoryId: '80',
      name: 'Bheg\'s Shining Helmet',
    }, {
      id: 3038,
      mainCategoryId: '80',
      name: 'Karanda\'s Plume Ornament',
    }, {
      id: 3039,
      mainCategoryId: '80',
      name: 'Witch\'s Shoulder Ornament',
    }, {
      id: 3040,
      mainCategoryId: '80',
      name: 'Muskan\'s Bloody Steel Helmet',
    }, {
      id: 3041,
      mainCategoryId: '80',
      name: 'Purified Tree Spirit Sprout',
    }, {
      id: 3042,
      mainCategoryId: '80',
      name: 'Khalk\'s Wings',
    }, {
      id: 3051,
      mainCategoryId: '80',
      name: 'Quint Statue',
    }, {
      id: 3053,
      mainCategoryId: '80',
      name: 'Stuffed Giant Boar Head',
    }, {
      id: 3054,
      mainCategoryId: '80',
      name: 'Stuffed Elk Head',
    }, {
      id: 3061,
      mainCategoryId: '80',
      name: 'Stuffed Valencia Mountain Sheep Head',
    }, {
      id: 3062,
      mainCategoryId: '80',
      name: 'Stuffed Giant Lion Head',
    }, {
      id: 3063,
      mainCategoryId: '80',
      name: 'Stuffed Valencian Lioness Head',
    }, {
      id: 3070,
      mainCategoryId: '80',
      name: 'King Brown Bear Head',
    }, {
      id: 3071,
      mainCategoryId: '80',
      name: 'Stuffed White Wolf Head',
    }, {
      id: 3073,
      mainCategoryId: '80',
      name: 'Stuffed Drieghan Male Goat Head',
    }, {
      id: 3074,
      mainCategoryId: '80',
      name: 'Stuffed Drieghan Female Goat Head',
    }, {
      id: 3075,
      mainCategoryId: '80',
      name: 'Stuffed Yak Head',
    }, {
      id: 3076,
      mainCategoryId: '80',
      name: 'Stuffed Llama',
    }, {
      id: 3077,
      mainCategoryId: '80',
      name: 'Stuffed Belladonna Elephant Head',
    }, {
      id: 3078,
      mainCategoryId: '80',
      name: 'Stuffed Baby Belladonna Elephant Head',
    }, {
      id: 3079,
      mainCategoryId: '80',
      name: 'Stuffed Gazelle Head',
    }, {
      id: 3080,
      mainCategoryId: '80',
      name: 'Stuffed Black Leopard Head',
    }, {
      id: 3081,
      mainCategoryId: '80',
      name: 'Stuffed Feather Wolf Head',
    }, {
      id: 3082,
      mainCategoryId: '80',
      name: 'Stuffed Phnyl Head',
    }, {
      id: 3083,
      mainCategoryId: '80',
      name: 'Stuffed Ferrica Head',
    }, {
      id: 3084,
      mainCategoryId: '80',
      name: 'Stuffed Ferrina Head',
    }, {
      id: 3085,
      mainCategoryId: '80',
      name: 'Griffon Chandelier',
    }, {
      id: 3086,
      mainCategoryId: '80',
      name: 'Stuffed Kamasylvia Weasel',
    }, {
      id: 3401,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Bear Head',
    }, {
      id: 3402,
      mainCategoryId: '80',
      name: 'Artisan\'s Bear Hide Carpet',
    }, {
      id: 3405,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Fox Head',
    }, {
      id: 3406,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Weasel',
    }, {
      id: 3407,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Gray Wolf Head',
    }, {
      id: 3408,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Wolf Head',
    }, {
      id: 3409,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Giant Boar Head',
    }, {
      id: 3410,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Elk Head',
    }, {
      id: 3411,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Valencia Mountain Sheep Head',
    }, {
      id: 3412,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Giant Lion Head',
    }, {
      id: 3413,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Valencian Lioness Head',
    }, {
      id: 3416,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Drieghan Male Goat Head',
    }, {
      id: 3417,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Drieghan Female Goat Head',
    }, {
      id: 3418,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Yak Head',
    }, {
      id: 3419,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Llama',
    }, {
      id: 3501,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Bear Head',
    }, {
      id: 3502,
      mainCategoryId: '80',
      name: 'Master\'s Bear Hide Carpet',
    }, {
      id: 3505,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Fox Head',
    }, {
      id: 3506,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Weasel',
    }, {
      id: 3507,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Gray Wolf Head',
    }, {
      id: 3508,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Wolf Head',
    }, {
      id: 3509,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Giant Boar Head',
    }, {
      id: 3510,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Elk Head',
    }, {
      id: 3511,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Valencia Mountain Sheep Head',
    }, {
      id: 3512,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Giant Lion Head',
    }, {
      id: 3513,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Valencian Lioness Head',
    }, {
      id: 3516,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Drieghan Male Goat Head',
    }, {
      id: 3517,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Drieghan Female Goat Head',
    }, {
      id: 3518,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Yak Head',
    }, {
      id: 3519,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Llama',
    }, {
      id: 3520,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Belladonna Elephant Head',
    }, {
      id: 3521,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Baby Belladonna Elephant Head',
    }, {
      id: 3522,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Gazelle Head',
    }, {
      id: 3523,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Black Leopard Head',
    }, {
      id: 3524,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Feather Wolf Head',
    }, {
      id: 3525,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Phnyl Head',
    }, {
      id: 3526,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Ferrica Head',
    }, {
      id: 3527,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Ferrina Head',
    }, {
      id: 3528,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Kamasylvia Weasel',
    }, {
      id: 3529,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Belladonna Elephant Head',
    }, {
      id: 3530,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Baby Belladonna Elephant Head',
    }, {
      id: 3531,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Gazelle Head',
    }, {
      id: 3532,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Black Leopard Head',
    }, {
      id: 3533,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Feather Wolf Head',
    }, {
      id: 3534,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Phnyl Head',
    }, {
      id: 3535,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Ferrica Head',
    }, {
      id: 3536,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Ferrina Head',
    }, {
      id: 3537,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Kamasylvia Weasel',
    }, {
      id: 3538,
      mainCategoryId: '80',
      name: 'Kutum Lamp',
    }, {
      id: 3539,
      mainCategoryId: '80',
      name: 'Nouver Statue',
    }, {
      id: 3540,
      mainCategoryId: '80',
      name: 'Stuffed Grass Rhino Head',
    }, {
      id: 3541,
      mainCategoryId: '80',
      name: 'Stuffed Verdure Buck',
    }, {
      id: 3542,
      mainCategoryId: '80',
      name: 'Stuffed Verdure Doe',
    }, {
      id: 3543,
      mainCategoryId: '80',
      name: 'Stuffed Shadow Wolf Head',
    }, {
      id: 3544,
      mainCategoryId: '80',
      name: 'Stuffed Shadow Lion Head',
    }, {
      id: 3545,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Grass Rhino Head',
    }, {
      id: 3546,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Verdure Buck',
    }, {
      id: 3547,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Verdure Doe',
    }, {
      id: 3548,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Shadow Wolf Head',
    }, {
      id: 3549,
      mainCategoryId: '80',
      name: 'Artisan\'s Stuffed Shadow Lion Head',
    }, {
      id: 3550,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Grass Rhino Head',
    }, {
      id: 3551,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Verdure Buck',
    }, {
      id: 3552,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Verdure Doe',
    }, {
      id: 3553,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Shadow Wolf Head',
    }, {
      id: 3554,
      mainCategoryId: '80',
      name: 'Master\'s Stuffed Shadow Lion Head',
    }, {
      id: 3555,
      mainCategoryId: '80',
      name: 'Artisan\'s Special Stuffed Grass Rhino Head',
    }, {
      id: 3556,
      mainCategoryId: '80',
      name: 'Artisan\'s Special Stuffed Verdure Buck',
    }, {
      id: 3557,
      mainCategoryId: '80',
      name: 'Artisan\'s Special Stuffed Verdure Doe',
    }, {
      id: 3558,
      mainCategoryId: '80',
      name: 'Artisan\'s Special Stuffed Shadow Wolf Head',
    }, {
      id: 3559,
      mainCategoryId: '80',
      name: 'Artisan\'s Special Stuffed Shadow Lion Head',
    }, {
      id: 3560,
      mainCategoryId: '80',
      name: 'Master\'s Special Stuffed Grass Rhino Head',
    }, {
      id: 3561,
      mainCategoryId: '80',
      name: 'Master\'s Special Stuffed Verdure Buck',
    }, {
      id: 3562,
      mainCategoryId: '80',
      name: 'Master\'s Special Stuffed Verdure Doe',
    }, {
      id: 3563,
      mainCategoryId: '80',
      name: 'Master\'s Special Stuffed Shadow Wolf Head',
    }, {
      id: 3564,
      mainCategoryId: '80',
      name: 'Master\'s Special Stuffed Shadow Lion Head',
    }, {
      id: 3702,
      mainCategoryId: '40',
      name: 'Intermediate Alchemy Tool',
    }, {
      id: 3703,
      mainCategoryId: '40',
      name: 'Advanced Alchemy Tool',
    }, {
      id: 3718,
      mainCategoryId: '40',
      name: 'Intermediate Cooking Utensil',
    }, {
      id: 3719,
      mainCategoryId: '40',
      name: 'Advanced Cooking Utensil',
    }, {
      id: 3731,
      mainCategoryId: '40',
      name: 'Serendia Traditional Alchemy Tool',
    }, {
      id: 3732,
      mainCategoryId: '40',
      name: 'Calpheon Traditional Alchemy Tool',
    }, {
      id: 3741,
      mainCategoryId: '40',
      name: 'Serendia Traditional Cooking Utensil',
    }, {
      id: 3742,
      mainCategoryId: '40',
      name: 'Calpheon Traditional Cooking Utensil',
    }, {
      id: 4001,
      mainCategoryId: '25',
      name: 'Iron Ore',
    }, {
      id: 4002,
      mainCategoryId: '25',
      name: 'Lead Ore',
    }, {
      id: 4003,
      mainCategoryId: '25',
      name: 'Copper Ore',
    }, {
      id: 4004,
      mainCategoryId: '25',
      name: 'Tin Ore',
    }, {
      id: 4005,
      mainCategoryId: '25',
      name: 'Zinc Ore',
    }, {
      id: 4006,
      mainCategoryId: '25',
      name: 'Rough Stone',
    }, {
      id: 4007,
      mainCategoryId: '25',
      name: 'Coal',
    }, {
      id: 4008,
      mainCategoryId: '25',
      name: 'Vanadium Ore',
    }, {
      id: 4009,
      mainCategoryId: '25',
      name: 'Titanium Ore',
    }, {
      id: 4010,
      mainCategoryId: '25',
      name: 'Sulfur',
    }, {
      id: 4011,
      mainCategoryId: '25',
      name: 'Noc Ore',
    }, {
      id: 4013,
      mainCategoryId: '25',
      name: 'Nickel Ore',
    }, {
      id: 4051,
      mainCategoryId: '25',
      name: 'Melted Iron Shard',
    }, {
      id: 4052,
      mainCategoryId: '25',
      name: 'Iron Ingot',
    }, {
      id: 4053,
      mainCategoryId: '25',
      name: 'Pure Iron Crystal',
    }, {
      id: 4054,
      mainCategoryId: '25',
      name: 'Melted Lead Shard',
    }, {
      id: 4055,
      mainCategoryId: '25',
      name: 'Lead Ingot',
    }, {
      id: 4056,
      mainCategoryId: '25',
      name: 'Pure Lead Crystal',
    }, {
      id: 4057,
      mainCategoryId: '25',
      name: 'Melted Copper Shard',
    }, {
      id: 4058,
      mainCategoryId: '25',
      name: 'Copper Ingot',
    }, {
      id: 4059,
      mainCategoryId: '25',
      name: 'Pure Copper Crystal',
    }, {
      id: 4060,
      mainCategoryId: '25',
      name: 'Melted Tin Shard',
    }, {
      id: 4061,
      mainCategoryId: '25',
      name: 'Tin Ingot',
    }, {
      id: 4062,
      mainCategoryId: '25',
      name: 'Pure Tin Crystal',
    }, {
      id: 4063,
      mainCategoryId: '25',
      name: 'Melted Zinc Shard',
    }, {
      id: 4064,
      mainCategoryId: '25',
      name: 'Zinc Ingot',
    }, {
      id: 4065,
      mainCategoryId: '25',
      name: 'Pure Zinc Crystal',
    }, {
      id: 4066,
      mainCategoryId: '25',
      name: 'Brass Ingot',
    }, {
      id: 4067,
      mainCategoryId: '25',
      name: 'Bronze Ingot',
    }, {
      id: 4068,
      mainCategoryId: '25',
      name: 'Polished Stone',
    }, {
      id: 4070,
      mainCategoryId: '25',
      name: 'Processed Coal',
    }, {
      id: 4076,
      mainCategoryId: '25',
      name: 'Metal Solvent',
    }, {
      id: 4077,
      mainCategoryId: '25',
      name: 'Steel',
    }, {
      id: 4078,
      mainCategoryId: '25',
      name: 'Melted Vanadium Shard',
    }, {
      id: 4079,
      mainCategoryId: '25',
      name: 'Vanadium Ingot',
    }, {
      id: 4080,
      mainCategoryId: '25',
      name: 'Pure Vanadium Crystal',
    }, {
      id: 4081,
      mainCategoryId: '25',
      name: 'Melted Titanium Shard',
    }, {
      id: 4082,
      mainCategoryId: '25',
      name: 'Titanium Ingot',
    }, {
      id: 4083,
      mainCategoryId: '25',
      name: 'Pure Titanium Crystal',
    }, {
      id: 4084,
      mainCategoryId: '25',
      name: 'Margoria Dark Iron',
    }, {
      id: 4085,
      mainCategoryId: '25',
      name: 'Melted Noc Shard',
    }, {
      id: 4086,
      mainCategoryId: '25',
      name: 'Noc Ingot',
    }, {
      id: 4087,
      mainCategoryId: '25',
      name: 'Pure Noc Crystal',
    }, {
      id: 4088,
      mainCategoryId: '25',
      name: 'Melted Nickel Shard',
    }, {
      id: 4089,
      mainCategoryId: '25',
      name: 'Nickel Ingot',
    }, {
      id: 4090,
      mainCategoryId: '25',
      name: 'Pure Nickel Crystal',
    }, {
      id: 4201,
      mainCategoryId: '25',
      name: 'Silver Ore',
    }, {
      id: 4202,
      mainCategoryId: '25',
      name: 'Gold Ore',
    }, {
      id: 4203,
      mainCategoryId: '25',
      name: 'Platinum Ore',
    }, {
      id: 4204,
      mainCategoryId: '25',
      name: 'Rough Opal',
    }, {
      id: 4206,
      mainCategoryId: '25',
      name: 'Mythril',
    }, {
      id: 4251,
      mainCategoryId: '25',
      name: 'Melted Silver Shard',
    }, {
      id: 4252,
      mainCategoryId: '25',
      name: 'Silver Ingot',
    }, {
      id: 4253,
      mainCategoryId: '25',
      name: 'Pure Silver Crystal',
    }, {
      id: 4254,
      mainCategoryId: '25',
      name: 'Melted Gold Shard',
    }, {
      id: 4255,
      mainCategoryId: '25',
      name: 'Gold Ingot',
    }, {
      id: 4256,
      mainCategoryId: '25',
      name: 'Pure Gold Crystal',
    }, {
      id: 4257,
      mainCategoryId: '25',
      name: 'Melted Platinum Shard',
    }, {
      id: 4258,
      mainCategoryId: '25',
      name: 'Platinum Ingot',
    }, {
      id: 4259,
      mainCategoryId: '25',
      name: 'Pure Platinum Crystal',
    }, {
      id: 4260,
      mainCategoryId: '25',
      name: 'Polished Opal',
    }, {
      id: 4262,
      mainCategoryId: '25',
      name: 'Melted Mythril Shard',
    }, {
      id: 4263,
      mainCategoryId: '25',
      name: 'Mythril Ingot',
    }, {
      id: 4264,
      mainCategoryId: '25',
      name: 'Pure Mythril Crystal',
    }, {
      id: 4265,
      mainCategoryId: '25',
      name: 'Brilliant Opal',
    }, {
      id: 4266,
      mainCategoryId: '25',
      name: 'Moonlight Opal',
    }, {
      id: 4267,
      mainCategoryId: '25',
      name: 'Black Gold Ingot',
    }, {
      id: 4269,
      mainCategoryId: '25',
      name: 'Jade Coral Ingot',
    }, {
      id: 4401,
      mainCategoryId: '25',
      name: 'Rough Ruby',
    }, {
      id: 4402,
      mainCategoryId: '25',
      name: 'Rough Sapphire',
    }, {
      id: 4403,
      mainCategoryId: '25',
      name: 'Rough Topaz',
    }, {
      id: 4404,
      mainCategoryId: '25',
      name: 'Rough Emerald',
    }, {
      id: 4405,
      mainCategoryId: '25',
      name: 'Rough Diamond',
    }, {
      id: 4406,
      mainCategoryId: '25',
      name: 'Rough Translucent Crystal',
    }, {
      id: 4407,
      mainCategoryId: '25',
      name: 'Rough Mud Crystal',
    }, {
      id: 4408,
      mainCategoryId: '25',
      name: 'Rough Red Crystal',
    }, {
      id: 4409,
      mainCategoryId: '25',
      name: 'Rough Green Crystal',
    }, {
      id: 4410,
      mainCategoryId: '25',
      name: 'Rough Black Crystal',
    }, {
      id: 4411,
      mainCategoryId: '25',
      name: 'Rough Blue Crystal',
    }, {
      id: 4412,
      mainCategoryId: '25',
      name: 'Rough Violet Crystal',
    }, {
      id: 4413,
      mainCategoryId: '25',
      name: 'Rough Lapis Lazuli',
    }, {
      id: 4451,
      mainCategoryId: '25',
      name: 'Ruby',
    }, {
      id: 4452,
      mainCategoryId: '25',
      name: 'Resplendent Ruby',
    }, {
      id: 4453,
      mainCategoryId: '25',
      name: 'Blood Ruby',
    }, {
      id: 4454,
      mainCategoryId: '25',
      name: 'Sapphire',
    }, {
      id: 4455,
      mainCategoryId: '25',
      name: 'Resplendent Sapphire',
    }, {
      id: 4456,
      mainCategoryId: '25',
      name: 'Ocean Sapphire',
    }, {
      id: 4457,
      mainCategoryId: '25',
      name: 'Topaz',
    }, {
      id: 4458,
      mainCategoryId: '25',
      name: 'Resplendent Topaz',
    }, {
      id: 4459,
      mainCategoryId: '25',
      name: 'Gold Topaz',
    }, {
      id: 4460,
      mainCategoryId: '25',
      name: 'Emerald',
    }, {
      id: 4461,
      mainCategoryId: '25',
      name: 'Resplendent Emerald',
    }, {
      id: 4462,
      mainCategoryId: '25',
      name: 'Forest Emerald',
    }, {
      id: 4463,
      mainCategoryId: '25',
      name: 'Diamond',
    }, {
      id: 4464,
      mainCategoryId: '25',
      name: 'Resplendent Diamond',
    }, {
      id: 4465,
      mainCategoryId: '25',
      name: 'Star Diamond',
    }, {
      id: 4466,
      mainCategoryId: '25',
      name: 'Translucent Crystal',
    }, {
      id: 4467,
      mainCategoryId: '25',
      name: 'Mud Crystal',
    }, {
      id: 4468,
      mainCategoryId: '25',
      name: 'Red Crystal',
    }, {
      id: 4469,
      mainCategoryId: '25',
      name: 'Green Crystal',
    }, {
      id: 4470,
      mainCategoryId: '25',
      name: 'Black Crystal',
    }, {
      id: 4476,
      mainCategoryId: '25',
      name: 'Red Coral',
    }, {
      id: 4477,
      mainCategoryId: '25',
      name: 'Blue Coral',
    }, {
      id: 4478,
      mainCategoryId: '25',
      name: 'Twilight Red Coral',
    }, {
      id: 4479,
      mainCategoryId: '25',
      name: 'Daybreak Blue Coral',
    }, {
      id: 4481,
      mainCategoryId: '25',
      name: 'Gem Polisher',
    }, {
      id: 4483,
      mainCategoryId: '25',
      name: 'Blue Crystal',
    }, {
      id: 4485,
      mainCategoryId: '25',
      name: 'Violet Crystal',
    }, {
      id: 4490,
      mainCategoryId: '25',
      name: 'Lapis Lazuli',
    }, {
      id: 4491,
      mainCategoryId: '25',
      name: 'Resplendent Lapis Lazuli',
    }, {
      id: 4492,
      mainCategoryId: '25',
      name: 'Indigo Lapis Lazuli',
    }, {
      id: 4601,
      mainCategoryId: '25',
      name: 'Ash Timber',
    }, {
      id: 4602,
      mainCategoryId: '25',
      name: 'Maple Timber',
    }, {
      id: 4603,
      mainCategoryId: '25',
      name: 'Pine Timber',
    }, {
      id: 4604,
      mainCategoryId: '25',
      name: 'Birch Timber',
    }, {
      id: 4605,
      mainCategoryId: '25',
      name: 'Log',
    }, {
      id: 4606,
      mainCategoryId: '25',
      name: 'Fir Timber',
    }, {
      id: 4607,
      mainCategoryId: '25',
      name: 'Cedar Timber',
    }, {
      id: 4608,
      mainCategoryId: '25',
      name: 'White Cedar Timber',
    }, {
      id: 4609,
      mainCategoryId: '25',
      name: 'Acacia Timber',
    }, {
      id: 4610,
      mainCategoryId: '25',
      name: 'Palm Timber',
    }, {
      id: 4611,
      mainCategoryId: '25',
      name: 'Elder Tree Timber',
    }, {
      id: 4612,
      mainCategoryId: '25',
      name: 'Cactus Rind',
    }, {
      id: 4613,
      mainCategoryId: '25',
      name: 'Old Tree Branch',
    }, {
      id: 4614,
      mainCategoryId: '25',
      name: 'Moss Tree Timber',
    }, {
      id: 4615,
      mainCategoryId: '25',
      name: 'Loopy Tree Timber',
    }, {
      id: 4616,
      mainCategoryId: '25',
      name: 'Thuja Timber',
    }, {
      id: 4619,
      mainCategoryId: '25',
      name: 'Thornwood Timber',
    }, {
      id: 4651,
      mainCategoryId: '25',
      name: 'Ash Plank',
    }, {
      id: 4652,
      mainCategoryId: '25',
      name: 'Ash Plywood',
    }, {
      id: 4653,
      mainCategoryId: '25',
      name: 'Sturdy Ash Plywood',
    }, {
      id: 4654,
      mainCategoryId: '25',
      name: 'Maple Plank',
    }, {
      id: 4655,
      mainCategoryId: '25',
      name: 'Maple Plywood',
    }, {
      id: 4656,
      mainCategoryId: '25',
      name: 'Sturdy Maple Plywood',
    }, {
      id: 4657,
      mainCategoryId: '25',
      name: 'Pine Plank',
    }, {
      id: 4658,
      mainCategoryId: '25',
      name: 'Pine Plywood',
    }, {
      id: 4659,
      mainCategoryId: '25',
      name: 'Sturdy Pine Plywood',
    }, {
      id: 4660,
      mainCategoryId: '25',
      name: 'Birch Plank',
    }, {
      id: 4661,
      mainCategoryId: '25',
      name: 'Birch Plywood',
    }, {
      id: 4662,
      mainCategoryId: '25',
      name: 'Sturdy Birch Plywood',
    }, {
      id: 4663,
      mainCategoryId: '25',
      name: 'Fir Plank',
    }, {
      id: 4664,
      mainCategoryId: '25',
      name: 'Fir Plywood',
    }, {
      id: 4665,
      mainCategoryId: '25',
      name: 'Sturdy Fir Plywood',
    }, {
      id: 4666,
      mainCategoryId: '25',
      name: 'Cedar Plank',
    }, {
      id: 4667,
      mainCategoryId: '25',
      name: 'Cedar Plywood',
    }, {
      id: 4668,
      mainCategoryId: '25',
      name: 'Sturdy Cedar Plywood',
    }, {
      id: 4669,
      mainCategoryId: '25',
      name: 'Usable Scantling',
    }, {
      id: 4670,
      mainCategoryId: '25',
      name: 'Palm Plank',
    }, {
      id: 4671,
      mainCategoryId: '25',
      name: 'Palm Plywood',
    }, {
      id: 4672,
      mainCategoryId: '25',
      name: 'Sturdy Palm Plywood',
    }, {
      id: 4673,
      mainCategoryId: '25',
      name: 'Elder Tree Plank',
    }, {
      id: 4674,
      mainCategoryId: '25',
      name: 'Elder Tree Plywood',
    }, {
      id: 4675,
      mainCategoryId: '25',
      name: 'Sturdy Elder Tree Plywood',
    }, {
      id: 4676,
      mainCategoryId: '25',
      name: 'White Cedar Plank',
    }, {
      id: 4677,
      mainCategoryId: '25',
      name: 'White Cedar Plywood',
    }, {
      id: 4678,
      mainCategoryId: '25',
      name: 'Sturdy White Cedar Plywood',
    }, {
      id: 4680,
      mainCategoryId: '25',
      name: 'Acacia Plank',
    }, {
      id: 4681,
      mainCategoryId: '25',
      name: 'Acacia Plywood',
    }, {
      id: 4682,
      mainCategoryId: '25',
      name: 'Sturdy Acacia Plywood',
    }, {
      id: 4683,
      mainCategoryId: '25',
      name: 'Cactus Thorn',
    }, {
      id: 4684,
      mainCategoryId: '25',
      name: 'Plywood Hardener',
    }, {
      id: 4685,
      mainCategoryId: '25',
      name: 'Standardized Timber Square',
    }, {
      id: 4686,
      mainCategoryId: '25',
      name: 'Sturdy Timber Square',
    }, {
      id: 4687,
      mainCategoryId: '25',
      name: 'Hard Pillar',
    }, {
      id: 4688,
      mainCategoryId: '25',
      name: 'Ship Repair Material',
    }, {
      id: 4689,
      mainCategoryId: '25',
      name: 'Ship Repair Kit',
    }, {
      id: 4691,
      mainCategoryId: '25',
      name: 'Pine Coated Plywood',
    }, {
      id: 4694,
      mainCategoryId: '25',
      name: 'Moss Tree Plank',
    }, {
      id: 4695,
      mainCategoryId: '25',
      name: 'Moss Tree Plywood',
    }, {
      id: 4696,
      mainCategoryId: '25',
      name: 'Sturdy Moss Tree Plywood',
    }, {
      id: 4697,
      mainCategoryId: '25',
      name: 'Loopy Tree Plank',
    }, {
      id: 4698,
      mainCategoryId: '25',
      name: 'Loopy Tree Plywood',
    }, {
      id: 4699,
      mainCategoryId: '25',
      name: 'Sturdy Loopy Tree Plywood',
    }, {
      id: 4700,
      mainCategoryId: '25',
      name: 'Emergency Ship Repair Kit',
    }, {
      id: 4701,
      mainCategoryId: '25',
      name: 'Thuja Plank',
    }, {
      id: 4702,
      mainCategoryId: '25',
      name: 'Thuja Plywood',
    }, {
      id: 4703,
      mainCategoryId: '25',
      name: 'Sturdy Thuja Plywood',
    }, {
      id: 4710,
      mainCategoryId: '25',
      name: 'Thornwood Plank',
    }, {
      id: 4711,
      mainCategoryId: '25',
      name: 'Thornwood Plywood',
    }, {
      id: 4712,
      mainCategoryId: '25',
      name: 'Sturdy Thornwood Plywood',
    }, {
      id: 4801,
      mainCategoryId: '25',
      name: 'Powder of Darkness',
    }, {
      id: 4802,
      mainCategoryId: '25',
      name: 'Powder of Flame',
    }, {
      id: 4803,
      mainCategoryId: '25',
      name: 'Powder of Crevice',
    }, {
      id: 4804,
      mainCategoryId: '25',
      name: 'Powder of Earth',
    }, {
      id: 4805,
      mainCategoryId: '25',
      name: 'Powder of Time',
    }, {
      id: 4901,
      mainCategoryId: '25',
      name: 'Black Stone Powder',
    }, {
      id: 4902,
      mainCategoryId: '25',
      name: 'Alluvial Gold',
    }, {
      id: 4903,
      mainCategoryId: '25',
      name: 'Empty Crystal',
    }, {
      id: 4906,
      mainCategoryId: '30',
      name: 'Grade 1 Weapon Reform Stone',
    }, {
      id: 4907,
      mainCategoryId: '30',
      name: 'Grade 1 Armor Reform Stone',
    }, {
      id: 4908,
      mainCategoryId: '30',
      name: 'Grade 2 Weapon Reform Stone',
    }, {
      id: 4909,
      mainCategoryId: '30',
      name: 'Grade 2 Armor Reform Stone',
    }, {
      id: 4910,
      mainCategoryId: '30',
      name: 'Grade 3 Weapon Reform Stone',
    }, {
      id: 4911,
      mainCategoryId: '30',
      name: 'Grade 3 Armor Reform Stone',
    }, {
      id: 4912,
      mainCategoryId: '30',
      name: 'Ultimate Weapon Reform Stone',
    }, {
      id: 4913,
      mainCategoryId: '30',
      name: 'Ultimate Armor Reform Stone',
    }, {
      id: 4917,
      mainCategoryId: '25',
      name: 'Forest Fury',
    }, {
      id: 4987,
      mainCategoryId: '30',
      name: 'Concentrated Magical Black Gem',
    }, {
      id: 4997,
      mainCategoryId: '30',
      name: 'Hard Black Crystal Shard',
    }, {
      id: 4998,
      mainCategoryId: '30',
      name: 'Sharp Black Crystal Shard',
    }, {
      id: 4999,
      mainCategoryId: '30',
      name: 'Black Gem Fragment',
    }, {
      id: 5000,
      mainCategoryId: '30',
      name: 'Black Gem',
    }, {
      id: 5001,
      mainCategoryId: '25',
      name: 'Ash Sap',
    }, {
      id: 5002,
      mainCategoryId: '25',
      name: 'Maple Sap',
    }, {
      id: 5003,
      mainCategoryId: '25',
      name: 'Pine Sap',
    }, {
      id: 5004,
      mainCategoryId: '25',
      name: 'Birch Sap',
    }, {
      id: 5005,
      mainCategoryId: '25',
      name: 'Bloody Tree Knot',
    }, {
      id: 5006,
      mainCategoryId: '25',
      name: 'Spirit\'s Leaf',
    }, {
      id: 5007,
      mainCategoryId: '25',
      name: 'Monk\'s Branch',
    }, {
      id: 5008,
      mainCategoryId: '25',
      name: 'Old Tree Bark',
    }, {
      id: 5009,
      mainCategoryId: '25',
      name: 'Fir Sap',
    }, {
      id: 5010,
      mainCategoryId: '25',
      name: 'Cedar Sap',
    }, {
      id: 5011,
      mainCategoryId: '25',
      name: 'Red Tree Lump',
    }, {
      id: 5012,
      mainCategoryId: '25',
      name: 'White Cedar Sap',
    }, {
      id: 5013,
      mainCategoryId: '25',
      name: 'Acacia Sap',
    }, {
      id: 5014,
      mainCategoryId: '25',
      name: 'Elder Tree Sap',
    }, {
      id: 5015,
      mainCategoryId: '25',
      name: 'Palm Sap',
    }, {
      id: 5016,
      mainCategoryId: '25',
      name: 'Cactus Sap',
    }, {
      id: 5017,
      mainCategoryId: '25',
      name: 'Moss Tree Sap',
    }, {
      id: 5018,
      mainCategoryId: '25',
      name: 'Loopy Tree Sap',
    }, {
      id: 5019,
      mainCategoryId: '25',
      name: 'Dead Tree Essence',
    }, {
      id: 5020,
      mainCategoryId: '25',
      name: 'Thuja Sap',
    }, {
      id: 5023,
      mainCategoryId: '25',
      name: 'Thornwood Sap',
    }, {
      id: 5201,
      mainCategoryId: '25',
      name: 'Fruit of Crimson Flame',
    }, {
      id: 5202,
      mainCategoryId: '25',
      name: 'Essence of Crimson Flame',
    }, {
      id: 5203,
      mainCategoryId: '25',
      name: 'Fruit of Abundance',
    }, {
      id: 5204,
      mainCategoryId: '25',
      name: 'Essence of Abundance',
    }, {
      id: 5205,
      mainCategoryId: '25',
      name: 'Fruit of Nature',
    }, {
      id: 5206,
      mainCategoryId: '25',
      name: 'Essence of Nature',
    }, {
      id: 5207,
      mainCategoryId: '25',
      name: 'Fruit of the Sun',
    }, {
      id: 5208,
      mainCategoryId: '25',
      name: 'Essence of the Sun',
    }, {
      id: 5209,
      mainCategoryId: '25',
      name: 'Fruit of Enchantment',
    }, {
      id: 5210,
      mainCategoryId: '25',
      name: 'Essence of Enchantment',
    }, {
      id: 5211,
      mainCategoryId: '25',
      name: 'Fruit of Magic Power',
    }, {
      id: 5212,
      mainCategoryId: '25',
      name: 'Essence of Magic Power',
    }, {
      id: 5213,
      mainCategoryId: '25',
      name: 'Fruit of Perfection',
    }, {
      id: 5214,
      mainCategoryId: '25',
      name: 'Essence of Perfection',
    }, {
      id: 5215,
      mainCategoryId: '25',
      name: 'Fruit of Destruction',
    }, {
      id: 5216,
      mainCategoryId: '25',
      name: 'Essence of Destruction',
    }, {
      id: 5217,
      mainCategoryId: '25',
      name: 'Deep Sea Fruit',
    }, {
      id: 5301,
      mainCategoryId: '25',
      name: 'Clear Liquid Reagent',
    }, {
      id: 5302,
      mainCategoryId: '25',
      name: 'Pure Powder Reagent',
    }, {
      id: 5401,
      mainCategoryId: '25',
      name: 'Sunrise Herb',
    }, {
      id: 5402,
      mainCategoryId: '25',
      name: 'Silver Azalea',
    }, {
      id: 5403,
      mainCategoryId: '25',
      name: 'Fire Flake Flower',
    }, {
      id: 5404,
      mainCategoryId: '25',
      name: 'Dry Mane Grass',
    }, {
      id: 5405,
      mainCategoryId: '25',
      name: 'Silk Honey Grass',
    }, {
      id: 5406,
      mainCategoryId: '25',
      name: 'Everlasting Herb',
    }, {
      id: 5407,
      mainCategoryId: '25',
      name: 'Fortune Teller Mushroom',
    }, {
      id: 5408,
      mainCategoryId: '25',
      name: 'Arrow Mushroom',
    }, {
      id: 5409,
      mainCategoryId: '25',
      name: 'Dwarf Mushroom',
    }, {
      id: 5410,
      mainCategoryId: '25',
      name: 'Cloud Mushroom',
    }, {
      id: 5411,
      mainCategoryId: '25',
      name: 'Sky Mushroom',
    }, {
      id: 5412,
      mainCategoryId: '25',
      name: 'Tiger Mushroom',
    }, {
      id: 5413,
      mainCategoryId: '25',
      name: 'Emperor Mushroom',
    }, {
      id: 5414,
      mainCategoryId: '25',
      name: 'Ghost Mushroom',
    }, {
      id: 5415,
      mainCategoryId: '25',
      name: 'Fog Mushroom',
    }, {
      id: 5416,
      mainCategoryId: '25',
      name: 'Hump Mushroom',
    }, {
      id: 5417,
      mainCategoryId: '25',
      name: 'Bluffer Mushroom',
    }, {
      id: 5418,
      mainCategoryId: '25',
      name: 'Ancient Mushroom',
    }, {
      id: 5419,
      mainCategoryId: '25',
      name: 'Amanita Mushroom',
    }, {
      id: 5420,
      mainCategoryId: '25',
      name: 'Truffle Mushroom',
    }, {
      id: 5421,
      mainCategoryId: '25',
      name: 'Pile of Sunrise Herbs',
    }, {
      id: 5422,
      mainCategoryId: '25',
      name: 'Bunch of Silver Azaleas',
    }, {
      id: 5423,
      mainCategoryId: '25',
      name: 'Bunch of Fire Flake Flowers',
    }, {
      id: 5424,
      mainCategoryId: '25',
      name: 'Bunch of Dry Mane Grass',
    }, {
      id: 5425,
      mainCategoryId: '25',
      name: 'Bunch of Silk Honey Grass',
    }, {
      id: 5426,
      mainCategoryId: '25',
      name: 'Big Fortune Teller Mushroom',
    }, {
      id: 5427,
      mainCategoryId: '25',
      name: 'Big Arrow Mushroom',
    }, {
      id: 5428,
      mainCategoryId: '25',
      name: 'Big Dwarf Mushroom',
    }, {
      id: 5429,
      mainCategoryId: '25',
      name: 'Big Cloud Mushroom',
    }, {
      id: 5430,
      mainCategoryId: '25',
      name: 'Big Sky Mushroom',
    }, {
      id: 5431,
      mainCategoryId: '25',
      name: 'Big Tiger Mushroom',
    }, {
      id: 5432,
      mainCategoryId: '25',
      name: 'Big Emperor Mushroom',
    }, {
      id: 5433,
      mainCategoryId: '25',
      name: 'Big Ghost Mushroom',
    }, {
      id: 5434,
      mainCategoryId: '25',
      name: 'Big Fog Mushroom',
    }, {
      id: 5435,
      mainCategoryId: '25',
      name: 'Big Hump Mushroom',
    }, {
      id: 5436,
      mainCategoryId: '25',
      name: 'Big Bluffer Mushroom',
    }, {
      id: 5437,
      mainCategoryId: '25',
      name: 'Big Ancient Mushroom',
    }, {
      id: 5438,
      mainCategoryId: '25',
      name: 'Big Amanita Mushroom',
    }, {
      id: 5439,
      mainCategoryId: '25',
      name: 'Wild Grass',
    }, {
      id: 5440,
      mainCategoryId: '25',
      name: 'Insectivore Plant Flower',
    }, {
      id: 5441,
      mainCategoryId: '25',
      name: 'Insectivore Plant Leaf',
    }, {
      id: 5442,
      mainCategoryId: '25',
      name: 'Insectivore Plant Stalk',
    }, {
      id: 5443,
      mainCategoryId: '25',
      name: 'Insectivore Plant Root',
    }, {
      id: 5444,
      mainCategoryId: '25',
      name: 'High-Quality Sunrise Herb',
    }, {
      id: 5445,
      mainCategoryId: '25',
      name: 'High-Quality Silver Azalea',
    }, {
      id: 5446,
      mainCategoryId: '25',
      name: 'High-Quality Fire Flake Flower',
    }, {
      id: 5447,
      mainCategoryId: '25',
      name: 'High-Quality Dry Mane Grass',
    }, {
      id: 5448,
      mainCategoryId: '25',
      name: 'High-Quality Silk Honey Grass',
    }, {
      id: 5450,
      mainCategoryId: '25',
      name: 'High-Quality Fortune Teller Mushroom',
    }, {
      id: 5451,
      mainCategoryId: '25',
      name: 'High-Quality Arrow Mushroom',
    }, {
      id: 5452,
      mainCategoryId: '25',
      name: 'High-Quality Dwarf Mushroom',
    }, {
      id: 5453,
      mainCategoryId: '25',
      name: 'High-Quality Cloud Mushroom',
    }, {
      id: 5454,
      mainCategoryId: '25',
      name: 'High-Quality Sky Mushroom',
    }, {
      id: 5455,
      mainCategoryId: '25',
      name: 'High-Quality Tiger Mushroom',
    }, {
      id: 5456,
      mainCategoryId: '25',
      name: 'High-Quality Emperor Mushroom',
    }, {
      id: 5457,
      mainCategoryId: '25',
      name: 'High-Quality Ghost Mushroom',
    }, {
      id: 5458,
      mainCategoryId: '25',
      name: 'High-Quality Fog Mushroom',
    }, {
      id: 5459,
      mainCategoryId: '25',
      name: 'High-Quality Hump Mushroom',
    }, {
      id: 5460,
      mainCategoryId: '25',
      name: 'High-Quality Bluffer Mushroom',
    }, {
      id: 5461,
      mainCategoryId: '25',
      name: 'High-Quality Ancient Mushroom',
    }, {
      id: 5462,
      mainCategoryId: '25',
      name: 'High-Quality Amanita Mushroom',
    }, {
      id: 5464,
      mainCategoryId: '25',
      name: 'Special Sunrise Herb',
    }, {
      id: 5465,
      mainCategoryId: '25',
      name: 'Special Silver Azalea',
    }, {
      id: 5466,
      mainCategoryId: '25',
      name: 'Special Fire Flake Flower',
    }, {
      id: 5467,
      mainCategoryId: '25',
      name: 'Special Dry Mane Grass',
    }, {
      id: 5468,
      mainCategoryId: '25',
      name: 'Special Silk Honey Grass',
    }, {
      id: 5470,
      mainCategoryId: '25',
      name: 'Special Fortune Teller Mushroom',
    }, {
      id: 5471,
      mainCategoryId: '25',
      name: 'Special Arrow Mushroom',
    }, {
      id: 5472,
      mainCategoryId: '25',
      name: 'Special Dwarf Mushroom',
    }, {
      id: 5473,
      mainCategoryId: '25',
      name: 'Special Cloud Mushroom',
    }, {
      id: 5474,
      mainCategoryId: '25',
      name: 'Special Sky Mushroom',
    }, {
      id: 5475,
      mainCategoryId: '25',
      name: 'Special Tiger Mushroom',
    }, {
      id: 5476,
      mainCategoryId: '25',
      name: 'Special Emperor Mushroom',
    }, {
      id: 5477,
      mainCategoryId: '25',
      name: 'Special Ghost Mushroom',
    }, {
      id: 5478,
      mainCategoryId: '25',
      name: 'Special Fog Mushroom',
    }, {
      id: 5479,
      mainCategoryId: '25',
      name: 'Special Hump Mushroom',
    }, {
      id: 5480,
      mainCategoryId: '25',
      name: 'Special Bluffer Mushroom',
    }, {
      id: 5481,
      mainCategoryId: '25',
      name: 'Special Ancient Mushroom',
    }, {
      id: 5482,
      mainCategoryId: '25',
      name: 'Special Amanita Mushroom',
    }, {
      id: 5484,
      mainCategoryId: '25',
      name: 'Nolina',
    }, {
      id: 5485,
      mainCategoryId: '25',
      name: 'Penestraria',
    }, {
      id: 5486,
      mainCategoryId: '25',
      name: 'Dalvenia Alrea',
    }, {
      id: 5487,
      mainCategoryId: '25',
      name: 'Toxic Watermelon',
    }, {
      id: 5488,
      mainCategoryId: '25',
      name: 'Glossy Bone Piece',
    }, {
      id: 5489,
      mainCategoryId: '25',
      name: 'Bouquet Mushroom',
    }, {
      id: 5490,
      mainCategoryId: '25',
      name: 'Leccinum',
    }, {
      id: 5491,
      mainCategoryId: '25',
      name: 'Purple Mushroom',
    }, {
      id: 5492,
      mainCategoryId: '25',
      name: 'Pie Mushroom',
    }, {
      id: 5493,
      mainCategoryId: '25',
      name: 'Eyelash Cup',
    }, {
      id: 5494,
      mainCategoryId: '25',
      name: 'Star Anise Mushroom',
    }, {
      id: 5495,
      mainCategoryId: '25',
      name: 'Desert Herb',
    }, {
      id: 5496,
      mainCategoryId: '25',
      name: 'High-Quality Nolina',
    }, {
      id: 5497,
      mainCategoryId: '25',
      name: 'High-Quality Penestraria',
    }, {
      id: 5498,
      mainCategoryId: '25',
      name: 'High-Quality Dalvenia Alrea',
    }, {
      id: 5499,
      mainCategoryId: '25',
      name: 'High-Quality Bouquet Mushroom',
    }, {
      id: 5500,
      mainCategoryId: '25',
      name: 'High-Quality Leccinum',
    }, {
      id: 5501,
      mainCategoryId: '25',
      name: 'High-Quality Purple Mushroom',
    }, {
      id: 5502,
      mainCategoryId: '25',
      name: 'High-Quality Pie Mushroom',
    }, {
      id: 5503,
      mainCategoryId: '25',
      name: 'Special Nolina',
    }, {
      id: 5504,
      mainCategoryId: '25',
      name: 'Special Penestraria',
    }, {
      id: 5505,
      mainCategoryId: '25',
      name: 'Special Dalvenia Alrea',
    }, {
      id: 5506,
      mainCategoryId: '25',
      name: 'Special Bouquet Mushroom',
    }, {
      id: 5507,
      mainCategoryId: '25',
      name: 'Special Leccinum',
    }, {
      id: 5508,
      mainCategoryId: '25',
      name: 'Special Purple Mushroom',
    }, {
      id: 5509,
      mainCategoryId: '25',
      name: 'Special Pie Mushroom',
    }, {
      id: 5515,
      mainCategoryId: '25',
      name: 'Rainbow Button Mushroom',
    }, {
      id: 5516,
      mainCategoryId: '25',
      name: 'Blue Umbrella Mushroom',
    }, {
      id: 5517,
      mainCategoryId: '25',
      name: 'Volcanic Umbrella Mushroom',
    }, {
      id: 5518,
      mainCategoryId: '25',
      name: 'Pink Trumpet Mushroom',
    }, {
      id: 5519,
      mainCategoryId: '25',
      name: 'White Umbrella Mushroom',
    }, {
      id: 5520,
      mainCategoryId: '25',
      name: 'Green Pendulous Mushroom',
    }, {
      id: 5521,
      mainCategoryId: '25',
      name: 'White Flower Mushroom',
    }, {
      id: 5522,
      mainCategoryId: '25',
      name: 'Vedelona',
    }, {
      id: 5523,
      mainCategoryId: '25',
      name: 'Purple Pink Flower',
    }, {
      id: 5524,
      mainCategoryId: '25',
      name: 'Yellow Flower',
    }, {
      id: 5525,
      mainCategoryId: '25',
      name: 'Sky Blue Flower',
    }, {
      id: 5526,
      mainCategoryId: '25',
      name: 'Violet Flower',
    }, {
      id: 5527,
      mainCategoryId: '25',
      name: 'Blue Flower',
    }, {
      id: 5528,
      mainCategoryId: '25',
      name: 'Audria',
    }, {
      id: 5529,
      mainCategoryId: '25',
      name: 'Saffron',
    }, {
      id: 5530,
      mainCategoryId: '25',
      name: 'Hazel Tree Fruit',
    }, {
      id: 5531,
      mainCategoryId: '25',
      name: 'Mimosa Stalk',
    }, {
      id: 5532,
      mainCategoryId: '25',
      name: 'Bracken',
    }, {
      id: 5536,
      mainCategoryId: '25',
      name: 'High Quality Delotia',
    }, {
      id: 5537,
      mainCategoryId: '25',
      name: 'Special Delotia',
    }, {
      id: 5538,
      mainCategoryId: '25',
      name: 'Delotia',
    }, {
      id: 5600,
      mainCategoryId: '25',
      name: 'Weeds',
    }, {
      id: 5601,
      mainCategoryId: '25',
      name: 'Insectivore Plant Powder',
    }, {
      id: 5602,
      mainCategoryId: '25',
      name: 'Insectivore Plant Sap',
    }, {
      id: 5603,
      mainCategoryId: '25',
      name: 'Herbal Poison',
    }, {
      id: 5604,
      mainCategoryId: '25',
      name: 'Herbal Gunpowder',
    }, {
      id: 5605,
      mainCategoryId: '25',
      name: 'Delotia Powder',
    }, {
      id: 5606,
      mainCategoryId: '25',
      name: 'Refined Delotia Reagent',
    }, {
      id: 5801,
      mainCategoryId: '25',
      name: 'Cotton',
    }, {
      id: 5802,
      mainCategoryId: '25',
      name: 'Flax',
    }, {
      id: 5803,
      mainCategoryId: '25',
      name: 'Silkworm Cocoon',
    }, {
      id: 5804,
      mainCategoryId: '25',
      name: 'Fleece',
    }, {
      id: 5851,
      mainCategoryId: '25',
      name: 'Cotton Yarn',
    }, {
      id: 5852,
      mainCategoryId: '25',
      name: 'Flax Thread',
    }, {
      id: 5853,
      mainCategoryId: '25',
      name: 'Silk Thread',
    }, {
      id: 5854,
      mainCategoryId: '25',
      name: 'Knitting Yarn',
    }, {
      id: 5855,
      mainCategoryId: '25',
      name: 'Cotton Fabric',
    }, {
      id: 5856,
      mainCategoryId: '25',
      name: 'Flax Fabric',
    }, {
      id: 5857,
      mainCategoryId: '25',
      name: 'Silk',
    }, {
      id: 5858,
      mainCategoryId: '25',
      name: 'Wool',
    }, {
      id: 5859,
      mainCategoryId: '25',
      name: 'Tough Flax Fabric',
    }, {
      id: 5860,
      mainCategoryId: '25',
      name: 'Enhanced Flax Fabric',
    }, {
      id: 5861,
      mainCategoryId: '25',
      name: 'Sunset Dyed Wool',
    }, {
      id: 5862,
      mainCategoryId: '25',
      name: 'Scorched Fragment',
    }, {
      id: 5863,
      mainCategoryId: '25',
      name: 'Dusk Laden Cotton Fabric',
    }, {
      id: 5864,
      mainCategoryId: '25',
      name: 'Tear of the Great Ocean',
    }, {
      id: 5865,
      mainCategoryId: '25',
      name: 'Dawn Fallen Silk',
    }, {
      id: 5870,
      mainCategoryId: '25',
      name: 'Enlightened One\'s Cotton Fabric',
    }, {
      id: 5951,
      mainCategoryId: '25',
      name: 'Trace of Chaos',
    }, {
      id: 5952,
      mainCategoryId: '25',
      name: 'Trace of Despair',
    }, {
      id: 5953,
      mainCategoryId: '25',
      name: 'Trace of Wave',
    }, {
      id: 5954,
      mainCategoryId: '25',
      name: 'Trace of the Earth',
    }, {
      id: 5955,
      mainCategoryId: '25',
      name: 'Trace of Ascension',
    }, {
      id: 5956,
      mainCategoryId: '25',
      name: 'Trace of Savagery',
    }, {
      id: 5957,
      mainCategoryId: '25',
      name: 'Trace of Origin',
    }, {
      id: 5958,
      mainCategoryId: '25',
      name: 'Trace of Battle',
    }, {
      id: 5959,
      mainCategoryId: '25',
      name: 'Trace of Hunting',
    }, {
      id: 5960,
      mainCategoryId: '25',
      name: 'Trace of Forest',
    }, {
      id: 5961,
      mainCategoryId: '25',
      name: 'Trace of Violence',
    }, {
      id: 5962,
      mainCategoryId: '25',
      name: 'Trace of Death',
    }, {
      id: 5963,
      mainCategoryId: '25',
      name: 'Trace of Memory',
    }, {
      id: 6001,
      mainCategoryId: '25',
      name: 'Deer Hide',
    }, {
      id: 6002,
      mainCategoryId: '25',
      name: 'Sheep Hide',
    }, {
      id: 6003,
      mainCategoryId: '25',
      name: 'Fox Hide',
    }, {
      id: 6004,
      mainCategoryId: '25',
      name: 'Rhino Hide',
    }, {
      id: 6005,
      mainCategoryId: '25',
      name: 'Pig Hide',
    }, {
      id: 6006,
      mainCategoryId: '25',
      name: 'Ox Hide',
    }, {
      id: 6008,
      mainCategoryId: '25',
      name: 'Lizard Hide',
    }, {
      id: 6009,
      mainCategoryId: '25',
      name: 'Worm Hide',
    }, {
      id: 6010,
      mainCategoryId: '25',
      name: 'Raccoon Hide',
    }, {
      id: 6012,
      mainCategoryId: '25',
      name: 'Weasel Hide',
    }, {
      id: 6013,
      mainCategoryId: '25',
      name: 'Bear Hide',
    }, {
      id: 6014,
      mainCategoryId: '25',
      name: 'Wolf Hide',
    }, {
      id: 6015,
      mainCategoryId: '25',
      name: 'Waragon Hide',
    }, {
      id: 6016,
      mainCategoryId: '25',
      name: 'Cheetah Dragon Hide',
    }, {
      id: 6017,
      mainCategoryId: '25',
      name: 'Soft Kuku Bird Plume',
    }, {
      id: 6018,
      mainCategoryId: '25',
      name: 'Flamingo Plume',
    }, {
      id: 6019,
      mainCategoryId: '25',
      name: 'Snake Skin',
    }, {
      id: 6020,
      mainCategoryId: '25',
      name: 'Lion Hide',
    }, {
      id: 6021,
      mainCategoryId: '25',
      name: 'Feather Wolf Hide',
    }, {
      id: 6022,
      mainCategoryId: '25',
      name: 'Black Leopard Hide',
    }, {
      id: 6023,
      mainCategoryId: '25',
      name: 'Gazelle Hide',
    }, {
      id: 6024,
      mainCategoryId: '25',
      name: 'Griffon Feather',
    }, {
      id: 6025,
      mainCategoryId: '25',
      name: 'Soft Ferri Feather',
    }, {
      id: 6026,
      mainCategoryId: '25',
      name: 'Belladonna Elephant Hide',
    }, {
      id: 6027,
      mainCategoryId: '25',
      name: 'Yak Hide',
    }, {
      id: 6028,
      mainCategoryId: '25',
      name: 'Marmot Hide',
    }, {
      id: 6029,
      mainCategoryId: '25',
      name: 'Llama Hide',
    }, {
      id: 6030,
      mainCategoryId: '25',
      name: 'Goat Hide',
    }, {
      id: 6031,
      mainCategoryId: '25',
      name: 'Griffon Leather',
    }, {
      id: 6151,
      mainCategoryId: '25',
      name: 'Soft Hide',
    }, {
      id: 6152,
      mainCategoryId: '25',
      name: 'Tough Hide',
    }, {
      id: 6153,
      mainCategoryId: '25',
      name: 'Hard Hide',
    }, {
      id: 6154,
      mainCategoryId: '25',
      name: 'Thin Hide',
    }, {
      id: 6155,
      mainCategoryId: '25',
      name: 'Thick Fur',
    }, {
      id: 6156,
      mainCategoryId: '25',
      name: 'Fancy Reptile Skin',
    }, {
      id: 6157,
      mainCategoryId: '25',
      name: 'Lightweight Plume',
    }, {
      id: 6158,
      mainCategoryId: '25',
      name: 'Fancy Feather',
    }, {
      id: 6159,
      mainCategoryId: '25',
      name: 'Fine Soft Hide',
    }, {
      id: 6160,
      mainCategoryId: '25',
      name: 'Fine Tough Hide',
    }, {
      id: 6161,
      mainCategoryId: '25',
      name: 'Fine Hard Hide',
    }, {
      id: 6162,
      mainCategoryId: '25',
      name: 'Fine Thin Hide',
    }, {
      id: 6163,
      mainCategoryId: '25',
      name: 'Fine Thick Fur',
    }, {
      id: 6164,
      mainCategoryId: '25',
      name: 'Fine Fancy Reptile Skin',
    }, {
      id: 6165,
      mainCategoryId: '25',
      name: 'Fine Lightweight Plume',
    }, {
      id: 6166,
      mainCategoryId: '25',
      name: 'Fine Fancy Feather',
    }, {
      id: 6167,
      mainCategoryId: '25',
      name: 'Supreme Soft Hide',
    }, {
      id: 6168,
      mainCategoryId: '25',
      name: 'Supreme Tough Hide',
    }, {
      id: 6169,
      mainCategoryId: '25',
      name: 'Supreme Hard Hide',
    }, {
      id: 6170,
      mainCategoryId: '25',
      name: 'Supreme Thin Hide',
    }, {
      id: 6171,
      mainCategoryId: '25',
      name: 'Supreme Thick Fur',
    }, {
      id: 6172,
      mainCategoryId: '25',
      name: 'Supreme Fancy Reptile Skin',
    }, {
      id: 6173,
      mainCategoryId: '25',
      name: 'Supreme Lightweight Plume',
    }, {
      id: 6174,
      mainCategoryId: '25',
      name: 'Supreme Fancy Feather',
    }, {
      id: 6183,
      mainCategoryId: '25',
      name: 'Leather Glaze',
    }, {
      id: 6185,
      mainCategoryId: '25',
      name: 'Fire Horn',
    }, {
      id: 6201,
      mainCategoryId: '25',
      name: 'Deer Blood',
    }, {
      id: 6202,
      mainCategoryId: '25',
      name: 'Sheep Blood',
    }, {
      id: 6203,
      mainCategoryId: '25',
      name: 'Fox Blood',
    }, {
      id: 6204,
      mainCategoryId: '25',
      name: 'Rhino Blood',
    }, {
      id: 6205,
      mainCategoryId: '25',
      name: 'Pig Blood',
    }, {
      id: 6206,
      mainCategoryId: '25',
      name: 'Ox Blood',
    }, {
      id: 6208,
      mainCategoryId: '25',
      name: 'Lizard Blood',
    }, {
      id: 6209,
      mainCategoryId: '25',
      name: 'Worm Blood',
    }, {
      id: 6210,
      mainCategoryId: '25',
      name: 'Raccoon Blood',
    }, {
      id: 6212,
      mainCategoryId: '25',
      name: 'Weasel Blood',
    }, {
      id: 6213,
      mainCategoryId: '25',
      name: 'Bear Blood',
    }, {
      id: 6214,
      mainCategoryId: '25',
      name: 'Wolf Blood',
    }, {
      id: 6215,
      mainCategoryId: '25',
      name: 'Waragon Blood',
    }, {
      id: 6216,
      mainCategoryId: '25',
      name: 'Cheetah Dragon Blood',
    }, {
      id: 6217,
      mainCategoryId: '25',
      name: 'Kuku Bird Blood',
    }, {
      id: 6218,
      mainCategoryId: '25',
      name: 'Flamingo Blood',
    }, {
      id: 6219,
      mainCategoryId: '25',
      name: 'Bat Blood',
    }, {
      id: 6220,
      mainCategoryId: '25',
      name: 'Troll Blood',
    }, {
      id: 6221,
      mainCategoryId: '25',
      name: 'Ogre Blood',
    }, {
      id: 6222,
      mainCategoryId: '25',
      name: 'Cobra Blood',
    }, {
      id: 6223,
      mainCategoryId: '25',
      name: 'Lion Blood',
    }, {
      id: 6224,
      mainCategoryId: '25',
      name: 'Scorpion Blood',
    }, {
      id: 6225,
      mainCategoryId: '25',
      name: 'Yak Blood',
    }, {
      id: 6226,
      mainCategoryId: '25',
      name: 'Marmot Blood',
    }, {
      id: 6227,
      mainCategoryId: '25',
      name: 'Llama Blood',
    }, {
      id: 6228,
      mainCategoryId: '25',
      name: 'Goat Blood',
    }, {
      id: 6351,
      mainCategoryId: '25',
      name: 'Legendary Beast\'s Blood',
    }, {
      id: 6352,
      mainCategoryId: '25',
      name: 'Tyrant\'s Blood',
    }, {
      id: 6353,
      mainCategoryId: '25',
      name: 'Clown\'s Blood',
    }, {
      id: 6354,
      mainCategoryId: '25',
      name: 'Sinner\'s Blood',
    }, {
      id: 6355,
      mainCategoryId: '25',
      name: 'Wise Man\'s Blood',
    }, {
      id: 6394,
      mainCategoryId: '35',
      name: 'Chowder',
    }, {
      id: 6395,
      mainCategoryId: '35',
      name: 'Elixir of Regeneration',
    }, {
      id: 6501,
      mainCategoryId: '25',
      name: 'Coral Piece',
    }, {
      id: 6504,
      mainCategoryId: '25',
      name: 'Green Coral',
    }, {
      id: 6505,
      mainCategoryId: '25',
      name: 'Golden Coral',
    }, {
      id: 6506,
      mainCategoryId: '25',
      name: 'White Coral',
    }, {
      id: 6515,
      mainCategoryId: '25',
      name: 'Oyster',
    }, {
      id: 6516,
      mainCategoryId: '25',
      name: 'Shrimp',
    }, {
      id: 6520,
      mainCategoryId: '25',
      name: 'Dried Pearl Oyster Flesh',
    }, {
      id: 6521,
      mainCategoryId: '25',
      name: 'Dried Lobster',
    }, {
      id: 6524,
      mainCategoryId: '25',
      name: 'Prairie Green Coral',
    }, {
      id: 6525,
      mainCategoryId: '25',
      name: 'Golden Sun Coral',
    }, {
      id: 6526,
      mainCategoryId: '25',
      name: 'Breezy White Coral',
    }, {
      id: 6527,
      mainCategoryId: '25',
      name: 'Golden Pearl',
    }, {
      id: 6528,
      mainCategoryId: '25',
      name: 'Glue',
    }, {
      id: 6533,
      mainCategoryId: '25',
      name: 'Coral Crystal',
    }, {
      id: 6535,
      mainCategoryId: '25',
      name: 'Tridana Giant Clam Shellfish',
    }, {
      id: 6601,
      mainCategoryId: '25',
      name: 'Oil of Regeneration',
    }, {
      id: 6602,
      mainCategoryId: '25',
      name: 'Oil of Storms',
    }, {
      id: 6603,
      mainCategoryId: '25',
      name: 'Oil of Fortitude',
    }, {
      id: 6604,
      mainCategoryId: '25',
      name: 'Oil of Corruption',
    }, {
      id: 6605,
      mainCategoryId: '25',
      name: 'Oil of Tranquility',
    }, {
      id: 6606,
      mainCategoryId: '25',
      name: 'Oil of the Abyss',
    }, {
      id: 6651,
      mainCategoryId: '25',
      name: 'Distilled Water',
    }, {
      id: 6652,
      mainCategoryId: '25',
      name: 'Bottle of Sea Water',
    }, {
      id: 6653,
      mainCategoryId: '25',
      name: 'Bottle of River Water',
    }, {
      id: 6656,
      mainCategoryId: '25',
      name: 'Purified Water',
    }, {
      id: 6657,
      mainCategoryId: '25',
      name: 'Bag of Muddy Water',
    }, {
      id: 6701,
      mainCategoryId: '25',
      name: 'Pepper Seed',
    }, {
      id: 6702,
      mainCategoryId: '25',
      name: 'Garlic Seed',
    }, {
      id: 6703,
      mainCategoryId: '25',
      name: 'Onion Seed',
    }, {
      id: 6704,
      mainCategoryId: '25',
      name: 'Strawberry Seed',
    }, {
      id: 6705,
      mainCategoryId: '25',
      name: 'Hot Pepper Seed',
    }, {
      id: 6706,
      mainCategoryId: '25',
      name: 'Pumpkin Seed',
    }, {
      id: 6707,
      mainCategoryId: '25',
      name: 'Carrot Seed',
    }, {
      id: 6708,
      mainCategoryId: '25',
      name: 'High-Quality Strawberry Seed',
    }, {
      id: 6709,
      mainCategoryId: '25',
      name: 'Special Strawberry Seed',
    }, {
      id: 6710,
      mainCategoryId: '25',
      name: 'High-Quality Pepper Seed',
    }, {
      id: 6711,
      mainCategoryId: '25',
      name: 'High-Quality Garlic Seed',
    }, {
      id: 6712,
      mainCategoryId: '25',
      name: 'High-Quality Onion Seed',
    }, {
      id: 6714,
      mainCategoryId: '25',
      name: 'High-Quality Hot Pepper Seed',
    }, {
      id: 6715,
      mainCategoryId: '25',
      name: 'High-Quality Pumpkin Seed',
    }, {
      id: 6716,
      mainCategoryId: '25',
      name: 'High-Quality Carrot Seed',
    }, {
      id: 6717,
      mainCategoryId: '25',
      name: 'Special Pepper Seed',
    }, {
      id: 6718,
      mainCategoryId: '25',
      name: 'Special Garlic Seed',
    }, {
      id: 6719,
      mainCategoryId: '25',
      name: 'Special Onion Seed',
    }, {
      id: 6721,
      mainCategoryId: '25',
      name: 'Special Hot Pepper Seed',
    }, {
      id: 6722,
      mainCategoryId: '25',
      name: 'Special Pumpkin Seed',
    }, {
      id: 6723,
      mainCategoryId: '25',
      name: 'Special Carrot Seed',
    }, {
      id: 6724,
      mainCategoryId: '25',
      name: 'Flax Seed',
    }, {
      id: 6728,
      mainCategoryId: '25',
      name: 'Delotia Seed',
    }, {
      id: 6729,
      mainCategoryId: '25',
      name: 'High-Quality Delotia Seed',
    }, {
      id: 6730,
      mainCategoryId: '25',
      name: 'Special Delotia Seeds',
    }, {
      id: 6801,
      mainCategoryId: '25',
      name: 'Grape Seed',
    }, {
      id: 6802,
      mainCategoryId: '25',
      name: 'Sunflower Seed',
    }, {
      id: 6803,
      mainCategoryId: '25',
      name: 'Olive Seed',
    }, {
      id: 6804,
      mainCategoryId: '25',
      name: 'Tomato Seed',
    }, {
      id: 6805,
      mainCategoryId: '25',
      name: 'Paprika Seed',
    }, {
      id: 6806,
      mainCategoryId: '25',
      name: 'Seed Potato',
    }, {
      id: 6807,
      mainCategoryId: '25',
      name: 'Barley Seed',
    }, {
      id: 6808,
      mainCategoryId: '25',
      name: 'Wheat Seed',
    }, {
      id: 6809,
      mainCategoryId: '25',
      name: 'Corn Seed',
    }, {
      id: 6810,
      mainCategoryId: '25',
      name: 'Seed Sweet Potato',
    }, {
      id: 6811,
      mainCategoryId: '25',
      name: 'High-Quality Grape Seed',
    }, {
      id: 6812,
      mainCategoryId: '25',
      name: 'High-Quality Sunflower Seed',
    }, {
      id: 6813,
      mainCategoryId: '25',
      name: 'High-Quality Olive Seed',
    }, {
      id: 6814,
      mainCategoryId: '25',
      name: 'High-Quality Tomato Seed',
    }, {
      id: 6815,
      mainCategoryId: '25',
      name: 'High-Quality Paprika Seed',
    }, {
      id: 6816,
      mainCategoryId: '25',
      name: 'High-Quality Seed Potato',
    }, {
      id: 6817,
      mainCategoryId: '25',
      name: 'High-Quality Barley Seed',
    }, {
      id: 6818,
      mainCategoryId: '25',
      name: 'High-Quality Wheat Seed',
    }, {
      id: 6819,
      mainCategoryId: '25',
      name: 'High-Quality Corn Seed',
    }, {
      id: 6820,
      mainCategoryId: '25',
      name: 'High-Quality Seed Sweet Potato',
    }, {
      id: 6821,
      mainCategoryId: '25',
      name: 'Special Grape Seed',
    }, {
      id: 6822,
      mainCategoryId: '25',
      name: 'Special Sunflower Seed',
    }, {
      id: 6823,
      mainCategoryId: '25',
      name: 'Special Olive Seed',
    }, {
      id: 6824,
      mainCategoryId: '25',
      name: 'Special Tomato Seed',
    }, {
      id: 6825,
      mainCategoryId: '25',
      name: 'Special Paprika Seed',
    }, {
      id: 6826,
      mainCategoryId: '25',
      name: 'Special Seed Potato',
    }, {
      id: 6827,
      mainCategoryId: '25',
      name: 'Special Barley Seed',
    }, {
      id: 6828,
      mainCategoryId: '25',
      name: 'Special Wheat Seed',
    }, {
      id: 6829,
      mainCategoryId: '25',
      name: 'Special Corn Seed',
    }, {
      id: 6830,
      mainCategoryId: '25',
      name: 'Special Seed Sweet Potato',
    }, {
      id: 6901,
      mainCategoryId: '25',
      name: 'Sunrise Herb Seed',
    }, {
      id: 6902,
      mainCategoryId: '25',
      name: 'Silver Azalea Seed',
    }, {
      id: 6903,
      mainCategoryId: '25',
      name: 'Fire Flake Flower Seed',
    }, {
      id: 6904,
      mainCategoryId: '25',
      name: 'Dry Mane Grass Seed',
    }, {
      id: 6905,
      mainCategoryId: '25',
      name: 'Silk Honey Grass Seed',
    }, {
      id: 6907,
      mainCategoryId: '25',
      name: 'Fortune Teller Mushroom Hypha',
    }, {
      id: 6908,
      mainCategoryId: '25',
      name: 'Arrow Mushroom Hypha',
    }, {
      id: 6909,
      mainCategoryId: '25',
      name: 'Dwarf Mushroom Hypha',
    }, {
      id: 6910,
      mainCategoryId: '25',
      name: 'Cloud Mushroom Hypha',
    }, {
      id: 6911,
      mainCategoryId: '25',
      name: 'Sky Mushroom Hypha',
    }, {
      id: 6912,
      mainCategoryId: '25',
      name: 'Tiger Mushroom Hypha',
    }, {
      id: 6913,
      mainCategoryId: '25',
      name: 'Emperor Mushroom Hypha',
    }, {
      id: 6914,
      mainCategoryId: '25',
      name: 'Ghost Mushroom Hypha',
    }, {
      id: 6915,
      mainCategoryId: '25',
      name: 'Fog Mushroom Hypha',
    }, {
      id: 6916,
      mainCategoryId: '25',
      name: 'Hump Mushroom Hypha',
    }, {
      id: 6917,
      mainCategoryId: '25',
      name: 'Bluffer Mushroom Hypha',
    }, {
      id: 6918,
      mainCategoryId: '25',
      name: 'Ancient Mushroom Hypha',
    }, {
      id: 6919,
      mainCategoryId: '25',
      name: 'Amanita Mushroom Hypha',
    }, {
      id: 6921,
      mainCategoryId: '25',
      name: 'Withered Wheat Seed',
    }, {
      id: 6922,
      mainCategoryId: '25',
      name: 'Withered Grape Seed',
    }, {
      id: 6923,
      mainCategoryId: '25',
      name: 'Withered Sunrise Herb Seed',
    }, {
      id: 6924,
      mainCategoryId: '25',
      name: 'Nolina Seed',
    }, {
      id: 6925,
      mainCategoryId: '25',
      name: 'Penestraria Seed',
    }, {
      id: 6926,
      mainCategoryId: '25',
      name: 'Dalvenia Alrea Seed',
    }, {
      id: 6927,
      mainCategoryId: '25',
      name: 'Bouquet Mushroom Hypha',
    }, {
      id: 6928,
      mainCategoryId: '25',
      name: 'Leccinum Hypha',
    }, {
      id: 6929,
      mainCategoryId: '25',
      name: 'Purple Mushroom Hypha',
    }, {
      id: 6930,
      mainCategoryId: '25',
      name: 'Pie Mushroom Hypha',
    }, {
      id: 6931,
      mainCategoryId: '25',
      name: 'High-Quality Nolina Seed',
    }, {
      id: 6932,
      mainCategoryId: '25',
      name: 'High-Quality Penestraria Seed',
    }, {
      id: 6933,
      mainCategoryId: '25',
      name: 'High-Quality Dalvenia Alrea Seed',
    }, {
      id: 6934,
      mainCategoryId: '25',
      name: 'High-Quality Bouquet Mushroom Hypha',
    }, {
      id: 6935,
      mainCategoryId: '25',
      name: 'High-Quality Leccinum Mushroom Hypha',
    }, {
      id: 6936,
      mainCategoryId: '25',
      name: 'High-Quality Purple Mushroom Hypha',
    }, {
      id: 6937,
      mainCategoryId: '25',
      name: 'High-Quality Pie Mushroom Hypha',
    }, {
      id: 6938,
      mainCategoryId: '25',
      name: 'Withered Acacia Seed',
    }, {
      id: 6939,
      mainCategoryId: '25',
      name: 'Acacia Seed',
    }, {
      id: 6940,
      mainCategoryId: '25',
      name: 'Warm Seed',
    }, {
      id: 6941,
      mainCategoryId: '25',
      name: 'Glossy Seed',
    }, {
      id: 6942,
      mainCategoryId: '25',
      name: 'Dried-Up Seed',
    }, {
      id: 6943,
      mainCategoryId: '25',
      name: 'Shelled Seed',
    }, {
      id: 6944,
      mainCategoryId: '25',
      name: 'Shiny Seed',
    }, {
      id: 6945,
      mainCategoryId: '25',
      name: 'Gigantic Seed',
    }, {
      id: 6946,
      mainCategoryId: '25',
      name: 'Small White Seed',
    }, {
      id: 6947,
      mainCategoryId: '25',
      name: 'Half-Moon Seed',
    }, {
      id: 6948,
      mainCategoryId: '25',
      name: 'Bumpy Seed',
    }, {
      id: 6949,
      mainCategoryId: '25',
      name: 'Contorted Seed',
    }, {
      id: 6950,
      mainCategoryId: '25',
      name: 'Black Seed',
    }, {
      id: 6952,
      mainCategoryId: '25',
      name: 'High-Quality Sunrise Herb Seed',
    }, {
      id: 6953,
      mainCategoryId: '25',
      name: 'High-Quality Silver Azalea Seed',
    }, {
      id: 6954,
      mainCategoryId: '25',
      name: 'High-Quality Fire Flake Flower Seed',
    }, {
      id: 6955,
      mainCategoryId: '25',
      name: 'High-Quality Dry Mane Grass Seed',
    }, {
      id: 6956,
      mainCategoryId: '25',
      name: 'High-Quality Silk Honey Grass Seed',
    }, {
      id: 6958,
      mainCategoryId: '25',
      name: 'High-Quality Fortune Teller Mushroom Hypha',
    }, {
      id: 6959,
      mainCategoryId: '25',
      name: 'High-Quality Arrow Mushroom Hypha',
    }, {
      id: 6960,
      mainCategoryId: '25',
      name: 'High-Quality Dwarf Mushroom Hypha',
    }, {
      id: 6961,
      mainCategoryId: '25',
      name: 'High-Quality Cloud Mushroom Hypha',
    }, {
      id: 6962,
      mainCategoryId: '25',
      name: 'High-Quality Sky Mushroom Hypha',
    }, {
      id: 6963,
      mainCategoryId: '25',
      name: 'High-Quality Tiger Mushroom Hypha',
    }, {
      id: 6964,
      mainCategoryId: '25',
      name: 'High-Quality Emperor Mushroom Hypha',
    }, {
      id: 6965,
      mainCategoryId: '25',
      name: 'High-Quality Ghost Mushroom Hypha',
    }, {
      id: 6966,
      mainCategoryId: '25',
      name: 'High-Quality Fog Mushroom Hypha',
    }, {
      id: 6967,
      mainCategoryId: '25',
      name: 'High-Quality Hump Mushroom Hypha',
    }, {
      id: 6968,
      mainCategoryId: '25',
      name: 'High-Quality Bluffer Mushroom Hypha',
    }, {
      id: 6969,
      mainCategoryId: '25',
      name: 'High-Quality Ancient Mushroom Hypha',
    }, {
      id: 6970,
      mainCategoryId: '25',
      name: 'High-Quality Amanita Mushroom Hypha',
    }, {
      id: 6972,
      mainCategoryId: '25',
      name: 'Special Sunrise Herb Seed',
    }, {
      id: 6973,
      mainCategoryId: '25',
      name: 'Special Silver Azalea Seed',
    }, {
      id: 6974,
      mainCategoryId: '25',
      name: 'Special Fire Flake Flower Seed',
    }, {
      id: 6975,
      mainCategoryId: '25',
      name: 'Special Dry Mane Grass Seed',
    }, {
      id: 6976,
      mainCategoryId: '25',
      name: 'Special Silk Honey Grass Seed',
    }, {
      id: 6978,
      mainCategoryId: '25',
      name: 'Special Fortune Teller Mushroom Hypha',
    }, {
      id: 6979,
      mainCategoryId: '25',
      name: 'Special Arrow Mushroom Hypha',
    }, {
      id: 6980,
      mainCategoryId: '25',
      name: 'Special Dwarf Mushroom Hypha',
    }, {
      id: 6981,
      mainCategoryId: '25',
      name: 'Special Cloud Mushroom Hypha',
    }, {
      id: 6982,
      mainCategoryId: '25',
      name: 'Special Sky Mushroom Hypha',
    }, {
      id: 6983,
      mainCategoryId: '25',
      name: 'Special Tiger Mushroom Hypha',
    }, {
      id: 6984,
      mainCategoryId: '25',
      name: 'Special Emperor Mushroom Hypha',
    }, {
      id: 6985,
      mainCategoryId: '25',
      name: 'Special Ghost Mushroom Hypha',
    }, {
      id: 6986,
      mainCategoryId: '25',
      name: 'Special Fog Mushroom Hypha',
    }, {
      id: 6987,
      mainCategoryId: '25',
      name: 'Special Hump Mushroom Hypha',
    }, {
      id: 6988,
      mainCategoryId: '25',
      name: 'Special Bluffer Mushroom Hypha',
    }, {
      id: 6989,
      mainCategoryId: '25',
      name: 'Special Ancient Mushroom Hypha',
    }, {
      id: 6990,
      mainCategoryId: '25',
      name: 'Special Amanita Mushroom Hypha',
    }, {
      id: 6992,
      mainCategoryId: '25',
      name: 'Special Nolina Seed',
    }, {
      id: 6993,
      mainCategoryId: '25',
      name: 'Special Penestraria Seed',
    }, {
      id: 6994,
      mainCategoryId: '25',
      name: 'Special Dalvenia Alrea Seed',
    }, {
      id: 6995,
      mainCategoryId: '25',
      name: 'Special Bouquet Mushroom Hypha',
    }, {
      id: 6996,
      mainCategoryId: '25',
      name: 'Special Leccinum Hypha',
    }, {
      id: 6997,
      mainCategoryId: '25',
      name: 'Special Purple Mushroom Hypha',
    }, {
      id: 6998,
      mainCategoryId: '25',
      name: 'Special Pie Mushroom Hypha',
    }, {
      id: 6999,
      mainCategoryId: '25',
      name: 'High-Quality Acacia Seed',
    }, {
      id: 7000,
      mainCategoryId: '25',
      name: 'Special Acacia Seed',
    }, {
      id: 7001,
      mainCategoryId: '25',
      name: 'Wheat',
    }, {
      id: 7002,
      mainCategoryId: '25',
      name: 'Barley',
    }, {
      id: 7003,
      mainCategoryId: '25',
      name: 'Potato',
    }, {
      id: 7004,
      mainCategoryId: '25',
      name: 'Sweet Potato',
    }, {
      id: 7005,
      mainCategoryId: '25',
      name: 'Corn',
    }, {
      id: 7006,
      mainCategoryId: '25',
      name: 'High-Quality Wheat',
    }, {
      id: 7007,
      mainCategoryId: '25',
      name: 'High-Quality Barley',
    }, {
      id: 7008,
      mainCategoryId: '25',
      name: 'High-Quality Potato',
    }, {
      id: 7009,
      mainCategoryId: '25',
      name: 'High-Quality Sweet Potato',
    }, {
      id: 7010,
      mainCategoryId: '25',
      name: 'High-Quality Corn',
    }, {
      id: 7011,
      mainCategoryId: '25',
      name: 'Special Wheat',
    }, {
      id: 7012,
      mainCategoryId: '25',
      name: 'Special Barley',
    }, {
      id: 7013,
      mainCategoryId: '25',
      name: 'Special Potato',
    }, {
      id: 7014,
      mainCategoryId: '25',
      name: 'Special Sweet Potato',
    }, {
      id: 7015,
      mainCategoryId: '25',
      name: 'Special Corn',
    }, {
      id: 7016,
      mainCategoryId: '25',
      name: 'Date Palm',
    }, {
      id: 7017,
      mainCategoryId: '25',
      name: 'Pistachio',
    }, {
      id: 7018,
      mainCategoryId: '25',
      name: 'Fig',
    }, {
      id: 7019,
      mainCategoryId: '25',
      name: 'Star Anise',
    }, {
      id: 7020,
      mainCategoryId: '25',
      name: 'Nutmeg',
    }, {
      id: 7021,
      mainCategoryId: '25',
      name: 'Freekeh',
    }, {
      id: 7022,
      mainCategoryId: '25',
      name: 'Teff',
    }, {
      id: 7023,
      mainCategoryId: '25',
      name: 'Haystack',
    }, {
      id: 7024,
      mainCategoryId: '25',
      name: 'High-Quality Haystack',
    }, {
      id: 7025,
      mainCategoryId: '25',
      name: 'Special Haystack',
    }, {
      id: 7026,
      mainCategoryId: '25',
      name: 'Coconut',
    }, {
      id: 7028,
      mainCategoryId: '25',
      name: 'Chicken Feed',
    }, {
      id: 7029,
      mainCategoryId: '25',
      name: 'Good Chicken Feed',
    }, {
      id: 7030,
      mainCategoryId: '25',
      name: 'Special Chicken Feed',
    }, {
      id: 7101,
      mainCategoryId: '25',
      name: 'Wheat Flour',
    }, {
      id: 7102,
      mainCategoryId: '25',
      name: 'Barley Flour',
    }, {
      id: 7103,
      mainCategoryId: '25',
      name: 'Potato Flour',
    }, {
      id: 7104,
      mainCategoryId: '25',
      name: 'Sweet Potato Flour',
    }, {
      id: 7105,
      mainCategoryId: '25',
      name: 'Corn Flour',
    }, {
      id: 7106,
      mainCategoryId: '25',
      name: 'Teff Flour',
    }, {
      id: 7107,
      mainCategoryId: '25',
      name: 'Freekeh Flour',
    }, {
      id: 7201,
      mainCategoryId: '25',
      name: 'Wheat Dough',
    }, {
      id: 7202,
      mainCategoryId: '25',
      name: 'Barley Dough',
    }, {
      id: 7203,
      mainCategoryId: '25',
      name: 'Potato Dough',
    }, {
      id: 7204,
      mainCategoryId: '25',
      name: 'Sweet Potato Dough',
    }, {
      id: 7205,
      mainCategoryId: '25',
      name: 'Corn Dough',
    }, {
      id: 7206,
      mainCategoryId: '25',
      name: 'Teff Flour Dough',
    }, {
      id: 7207,
      mainCategoryId: '25',
      name: 'Freekeh Flour Dough',
    }, {
      id: 7301,
      mainCategoryId: '25',
      name: 'Pepper',
    }, {
      id: 7302,
      mainCategoryId: '25',
      name: 'Garlic',
    }, {
      id: 7303,
      mainCategoryId: '25',
      name: 'Onion',
    }, {
      id: 7304,
      mainCategoryId: '25',
      name: 'Strawberry',
    }, {
      id: 7305,
      mainCategoryId: '25',
      name: 'Hot Pepper',
    }, {
      id: 7306,
      mainCategoryId: '25',
      name: 'Pumpkin',
    }, {
      id: 7307,
      mainCategoryId: '25',
      name: 'Grape',
    }, {
      id: 7308,
      mainCategoryId: '25',
      name: 'Sunflower',
    }, {
      id: 7309,
      mainCategoryId: '25',
      name: 'Olive',
    }, {
      id: 7311,
      mainCategoryId: '25',
      name: 'Tomato',
    }, {
      id: 7312,
      mainCategoryId: '25',
      name: 'Paprika',
    }, {
      id: 7313,
      mainCategoryId: '25',
      name: 'Apple',
    }, {
      id: 7314,
      mainCategoryId: '25',
      name: 'Cherry',
    }, {
      id: 7315,
      mainCategoryId: '25',
      name: 'Pear',
    }, {
      id: 7316,
      mainCategoryId: '25',
      name: 'Banana',
    }, {
      id: 7317,
      mainCategoryId: '25',
      name: 'Pineapple',
    }, {
      id: 7318,
      mainCategoryId: '25',
      name: 'Cabbage',
    }, {
      id: 7319,
      mainCategoryId: '25',
      name: 'Rose',
    }, {
      id: 7320,
      mainCategoryId: '25',
      name: 'Tulip',
    }, {
      id: 7321,
      mainCategoryId: '25',
      name: 'High-Quality Strawberry',
    }, {
      id: 7322,
      mainCategoryId: '25',
      name: 'Special Strawberry',
    }, {
      id: 7323,
      mainCategoryId: '25',
      name: 'High-Quality Pepper',
    }, {
      id: 7324,
      mainCategoryId: '25',
      name: 'High-Quality Garlic',
    }, {
      id: 7325,
      mainCategoryId: '25',
      name: 'High-Quality Onion',
    }, {
      id: 7327,
      mainCategoryId: '25',
      name: 'High-Quality Hot Pepper',
    }, {
      id: 7328,
      mainCategoryId: '25',
      name: 'High-Quality Pumpkin',
    }, {
      id: 7329,
      mainCategoryId: '25',
      name: 'High-Quality Grape',
    }, {
      id: 7330,
      mainCategoryId: '25',
      name: 'High-Quality Sunflower',
    }, {
      id: 7331,
      mainCategoryId: '25',
      name: 'High-Quality Olive',
    }, {
      id: 7333,
      mainCategoryId: '25',
      name: 'High-Quality Tomato',
    }, {
      id: 7334,
      mainCategoryId: '25',
      name: 'High-Quality Paprika',
    }, {
      id: 7335,
      mainCategoryId: '25',
      name: 'Special Pepper',
    }, {
      id: 7336,
      mainCategoryId: '25',
      name: 'Special Garlic',
    }, {
      id: 7337,
      mainCategoryId: '25',
      name: 'Special Onion',
    }, {
      id: 7339,
      mainCategoryId: '25',
      name: 'Special Hot Pepper',
    }, {
      id: 7340,
      mainCategoryId: '25',
      name: 'Special Pumpkin',
    }, {
      id: 7341,
      mainCategoryId: '25',
      name: 'Special Grape',
    }, {
      id: 7342,
      mainCategoryId: '25',
      name: 'Special Sunflower',
    }, {
      id: 7343,
      mainCategoryId: '25',
      name: 'Special Olive',
    }, {
      id: 7345,
      mainCategoryId: '25',
      name: 'Special Tomato',
    }, {
      id: 7346,
      mainCategoryId: '25',
      name: 'Special Paprika',
    }, {
      id: 7347,
      mainCategoryId: '25',
      name: 'Aloe',
    }, {
      id: 7348,
      mainCategoryId: '25',
      name: 'Cinnamon',
    }, {
      id: 7701,
      mainCategoryId: '25',
      name: 'Wild Beehive',
    }, {
      id: 7702,
      mainCategoryId: '25',
      name: 'Cooking Honey',
    }, {
      id: 7703,
      mainCategoryId: '25',
      name: 'High-Quality Cooking Honey',
    }, {
      id: 7704,
      mainCategoryId: '25',
      name: 'Top-Quality Cooking Honey',
    }, {
      id: 7901,
      mainCategoryId: '25',
      name: 'Deer Meat',
    }, {
      id: 7902,
      mainCategoryId: '25',
      name: 'Lamb Meat',
    }, {
      id: 7903,
      mainCategoryId: '25',
      name: 'Fox Meat',
    }, {
      id: 7904,
      mainCategoryId: '25',
      name: 'Rhino Meat',
    }, {
      id: 7905,
      mainCategoryId: '25',
      name: 'Pork',
    }, {
      id: 7906,
      mainCategoryId: '25',
      name: 'Beef',
    }, {
      id: 7908,
      mainCategoryId: '25',
      name: 'Lizard Meat',
    }, {
      id: 7909,
      mainCategoryId: '25',
      name: 'Worm Meat',
    }, {
      id: 7910,
      mainCategoryId: '25',
      name: 'Raccoon Meat',
    }, {
      id: 7911,
      mainCategoryId: '25',
      name: 'Weasel Meat',
    }, {
      id: 7912,
      mainCategoryId: '25',
      name: 'Bear Meat',
    }, {
      id: 7913,
      mainCategoryId: '25',
      name: 'Wolf Meat',
    }, {
      id: 7914,
      mainCategoryId: '25',
      name: 'Waragon Meat',
    }, {
      id: 7915,
      mainCategoryId: '25',
      name: 'Cheetah Dragon Meat',
    }, {
      id: 7916,
      mainCategoryId: '25',
      name: 'Kuku Bird Meat',
    }, {
      id: 7917,
      mainCategoryId: '25',
      name: 'Flamingo Meat',
    }, {
      id: 7918,
      mainCategoryId: '35',
      name: 'Fragrant Jerky',
    }, {
      id: 7919,
      mainCategoryId: '35',
      name: 'Well-Dried Jerky',
    }, {
      id: 7920,
      mainCategoryId: '35',
      name: 'Rare Jerky',
    }, {
      id: 7921,
      mainCategoryId: '25',
      name: 'Chicken Meat',
    }, {
      id: 7922,
      mainCategoryId: '25',
      name: 'Snake Meat',
    }, {
      id: 7923,
      mainCategoryId: '25',
      name: 'Lion Meat',
    }, {
      id: 7924,
      mainCategoryId: '25',
      name: 'Scorpion Meat',
    }, {
      id: 7925,
      mainCategoryId: '25',
      name: 'Gazelle Meat',
    }, {
      id: 7953,
      mainCategoryId: '25',
      name: 'Bird Meat',
    }, {
      id: 7954,
      mainCategoryId: '25',
      name: 'Yak Meat',
    }, {
      id: 7955,
      mainCategoryId: '25',
      name: 'Marmot Meat',
    }, {
      id: 7956,
      mainCategoryId: '25',
      name: 'Llama Meat',
    }, {
      id: 7957,
      mainCategoryId: '25',
      name: 'Goat Meat',
    }, {
      id: 7958,
      mainCategoryId: '25',
      name: 'Ground Bird Meat',
    }, {
      id: 8141,
      mainCategoryId: '30',
      name: 'Cup of Arid Moonlight',
    }, {
      id: 8148,
      mainCategoryId: '30',
      name: 'Cup of a Lonely Cloud',
    }, {
      id: 8149,
      mainCategoryId: '30',
      name: 'Cup of Dwindling Starlight',
    }, {
      id: 8501,
      mainCategoryId: '25',
      name: 'Dried Mudskipper',
    }, {
      id: 8502,
      mainCategoryId: '25',
      name: 'Dried Tuna',
    }, {
      id: 8503,
      mainCategoryId: '25',
      name: 'Dried Beltfish',
    }, {
      id: 8504,
      mainCategoryId: '25',
      name: 'Dried Flounder',
    }, {
      id: 8505,
      mainCategoryId: '25',
      name: 'Dried Salmon',
    }, {
      id: 8506,
      mainCategoryId: '25',
      name: 'Dried Amberjack',
    }, {
      id: 8507,
      mainCategoryId: '25',
      name: 'Dried Porgy',
    }, {
      id: 8508,
      mainCategoryId: '25',
      name: 'Dried Swellfish',
    }, {
      id: 8509,
      mainCategoryId: '25',
      name: 'Dried Saurel',
    }, {
      id: 8510,
      mainCategoryId: '25',
      name: 'Dried Rockfish',
    }, {
      id: 8511,
      mainCategoryId: '25',
      name: 'Dried Squid',
    }, {
      id: 8512,
      mainCategoryId: '25',
      name: 'Dried Octopus',
    }, {
      id: 8513,
      mainCategoryId: '25',
      name: 'Dried Crab',
    }, {
      id: 8514,
      mainCategoryId: '25',
      name: 'Dried Jellyfish',
    }, {
      id: 8515,
      mainCategoryId: '25',
      name: 'Dried Shellfish',
    }, {
      id: 8516,
      mainCategoryId: '25',
      name: 'Dried Carp',
    }, {
      id: 8517,
      mainCategoryId: '25',
      name: 'Dried Crucian Carp',
    }, {
      id: 8518,
      mainCategoryId: '25',
      name: 'Dried Trout',
    }, {
      id: 8519,
      mainCategoryId: '25',
      name: 'Dried Catfish',
    }, {
      id: 8520,
      mainCategoryId: '25',
      name: 'Dried Freshwater Eel',
    }, {
      id: 8521,
      mainCategoryId: '25',
      name: 'Dried Snakehead',
    }, {
      id: 8522,
      mainCategoryId: '25',
      name: 'Dried Cherry Salmon',
    }, {
      id: 8523,
      mainCategoryId: '25',
      name: 'Dried Cuvier',
    }, {
      id: 8524,
      mainCategoryId: '25',
      name: 'Dried Sunfish',
    }, {
      id: 8525,
      mainCategoryId: '25',
      name: 'Dried Sea Bass',
    }, {
      id: 8526,
      mainCategoryId: '25',
      name: 'Dried Angler',
    }, {
      id: 8527,
      mainCategoryId: '25',
      name: 'Dried Swordfish',
    }, {
      id: 8528,
      mainCategoryId: '25',
      name: 'Dried Mackerel',
    }, {
      id: 8529,
      mainCategoryId: '25',
      name: 'Dried Flying Fish',
    }, {
      id: 8530,
      mainCategoryId: '25',
      name: 'Dried Skipjack',
    }, {
      id: 8531,
      mainCategoryId: '25',
      name: 'Dried Ray',
    }, {
      id: 8532,
      mainCategoryId: '25',
      name: 'Dried Seahorse',
    }, {
      id: 8533,
      mainCategoryId: '25',
      name: 'Dried Starfish',
    }, {
      id: 8534,
      mainCategoryId: '25',
      name: 'Dried Filefish',
    }, {
      id: 8535,
      mainCategoryId: '25',
      name: 'Dried Scorpion Fish',
    }, {
      id: 8536,
      mainCategoryId: '25',
      name: 'Dried Mullet',
    }, {
      id: 8537,
      mainCategoryId: '25',
      name: 'Dried Swiri',
    }, {
      id: 8538,
      mainCategoryId: '25',
      name: 'Dried Sturgeon',
    }, {
      id: 8539,
      mainCategoryId: '25',
      name: 'Dried Piranha',
    }, {
      id: 8540,
      mainCategoryId: '25',
      name: 'Dried Mandarin Fish',
    }, {
      id: 8541,
      mainCategoryId: '25',
      name: 'Dried Lenok',
    }, {
      id: 8542,
      mainCategoryId: '25',
      name: 'Dried Arowana',
    }, {
      id: 8543,
      mainCategoryId: '25',
      name: 'Dried Sweetfish',
    }, {
      id: 8544,
      mainCategoryId: '25',
      name: 'Dried Terrapin',
    }, {
      id: 8545,
      mainCategoryId: '25',
      name: 'Dried Bass',
    }, {
      id: 8546,
      mainCategoryId: '25',
      name: 'Dried Crawfish',
    }, {
      id: 8547,
      mainCategoryId: '25',
      name: 'Dried Dace',
    }, {
      id: 8548,
      mainCategoryId: '25',
      name: 'Dried Bluegill',
    }, {
      id: 8549,
      mainCategoryId: '25',
      name: 'Dried Perch',
    }, {
      id: 8550,
      mainCategoryId: '25',
      name: 'Dried Notch Jaw',
    }, {
      id: 8551,
      mainCategoryId: '25',
      name: 'Dried Mudfish',
    }, {
      id: 8552,
      mainCategoryId: '25',
      name: 'Dried Goby Minnow',
    }, {
      id: 8553,
      mainCategoryId: '25',
      name: 'Dried Bitterling',
    }, {
      id: 8554,
      mainCategoryId: '25',
      name: 'Dried Bleeker',
    }, {
      id: 8555,
      mainCategoryId: '25',
      name: 'Dried Yellowfin Sculpin',
    }, {
      id: 8556,
      mainCategoryId: '25',
      name: 'Dried Cero',
    }, {
      id: 8557,
      mainCategoryId: '25',
      name: 'Dried Sea Eel',
    }, {
      id: 8558,
      mainCategoryId: '25',
      name: 'Dried Croaker',
    }, {
      id: 8559,
      mainCategoryId: '25',
      name: 'Dried Greenling',
    }, {
      id: 8560,
      mainCategoryId: '25',
      name: 'Dried Flatfish',
    }, {
      id: 8561,
      mainCategoryId: '25',
      name: 'Dried Grunt',
    }, {
      id: 8562,
      mainCategoryId: '25',
      name: 'Dried Herring',
    }, {
      id: 8563,
      mainCategoryId: '25',
      name: 'Dried Sardine',
    }, {
      id: 8564,
      mainCategoryId: '25',
      name: 'Dried Round Herring',
    }, {
      id: 8565,
      mainCategoryId: '25',
      name: 'Dried Silver Stripe Round Herring',
    }, {
      id: 8566,
      mainCategoryId: '25',
      name: 'Dried Whiting',
    }, {
      id: 8567,
      mainCategoryId: '25',
      name: 'Dried Dolphinfish',
    }, {
      id: 8568,
      mainCategoryId: '25',
      name: 'Dried Striped Catfish',
    }, {
      id: 8569,
      mainCategoryId: '25',
      name: 'Dried Gunnel',
    }, {
      id: 8570,
      mainCategoryId: '25',
      name: 'Dried Golden-Thread',
    }, {
      id: 8571,
      mainCategoryId: '25',
      name: 'Dried Nibbler',
    }, {
      id: 8572,
      mainCategoryId: '25',
      name: 'Dried Siganid',
    }, {
      id: 8573,
      mainCategoryId: '25',
      name: 'Dried Bluefish',
    }, {
      id: 8574,
      mainCategoryId: '25',
      name: 'Dried Surfperch',
    }, {
      id: 8575,
      mainCategoryId: '25',
      name: 'Dried Blackfin Sweeper',
    }, {
      id: 8576,
      mainCategoryId: '25',
      name: 'Dried Smokey Chromis',
    }, {
      id: 8577,
      mainCategoryId: '25',
      name: 'Dried Maomao',
    }, {
      id: 8578,
      mainCategoryId: '25',
      name: 'Dried Pintado',
    }, {
      id: 8579,
      mainCategoryId: '25',
      name: 'Dried Gurnard',
    }, {
      id: 8581,
      mainCategoryId: '25',
      name: 'Dried John Dory',
    }, {
      id: 8582,
      mainCategoryId: '25',
      name: 'Dried Sandfish',
    }, {
      id: 8583,
      mainCategoryId: '25',
      name: 'Dried Rosefish',
    }, {
      id: 8584,
      mainCategoryId: '25',
      name: 'Dried Grouper',
    }, {
      id: 8585,
      mainCategoryId: '25',
      name: 'Dried Bigeye',
    }, {
      id: 8586,
      mainCategoryId: '25',
      name: 'Dried Fourfinger Threadfin',
    }, {
      id: 8587,
      mainCategoryId: '25',
      name: 'Dried Leather Carp',
    }, {
      id: 8588,
      mainCategoryId: '25',
      name: 'Dried Striped Shiner',
    }, {
      id: 8589,
      mainCategoryId: '25',
      name: 'Dried Barbel Steed',
    }, {
      id: 8590,
      mainCategoryId: '25',
      name: 'Dried Soho Bitterling',
    }, {
      id: 8591,
      mainCategoryId: '25',
      name: 'Dried Bubble Eye',
    }, {
      id: 8592,
      mainCategoryId: '25',
      name: 'Dried Pacu',
    }, {
      id: 8593,
      mainCategoryId: '25',
      name: 'Dried Yellow-Head Catfish',
    }, {
      id: 8594,
      mainCategoryId: '25',
      name: 'Dried Smelt',
    }, {
      id: 8595,
      mainCategoryId: '25',
      name: 'Dried Rosy Bitterling',
    }, {
      id: 8596,
      mainCategoryId: '25',
      name: 'Dried Roundtail Paradisefish',
    }, {
      id: 8597,
      mainCategoryId: '25',
      name: 'Dried Grayling',
    }, {
      id: 8598,
      mainCategoryId: '25',
      name: 'Dried Tapertail Anchovy',
    }, {
      id: 8599,
      mainCategoryId: '25',
      name: 'Dried Kuhlia Marginata',
    }, {
      id: 8600,
      mainCategoryId: '25',
      name: 'Dried Rock Hind',
    }, {
      id: 8601,
      mainCategoryId: '25',
      name: 'Dried Butterflyfish',
    }, {
      id: 8602,
      mainCategoryId: '25',
      name: 'Dried Clownfish',
    }, {
      id: 8603,
      mainCategoryId: '25',
      name: 'Dried Blue Tang',
    }, {
      id: 8604,
      mainCategoryId: '25',
      name: 'Dried Checkerboard Wrasse',
    }, {
      id: 8605,
      mainCategoryId: '25',
      name: 'Dried Pomfret',
    }, {
      id: 8629,
      mainCategoryId: '25',
      name: 'Dried Moray',
    }, {
      id: 8630,
      mainCategoryId: '25',
      name: 'Dried Tilefish',
    }, {
      id: 8631,
      mainCategoryId: '25',
      name: 'Dried Porcupine Fish',
    }, {
      id: 8632,
      mainCategoryId: '25',
      name: 'Dried Tongue Sole',
    }, {
      id: 8633,
      mainCategoryId: '25',
      name: 'Dried Atka Mackerel',
    }, {
      id: 8634,
      mainCategoryId: '25',
      name: 'Dried Cuttlefish',
    }, {
      id: 8635,
      mainCategoryId: '25',
      name: 'Dried Mackerel Pike',
    }, {
      id: 8636,
      mainCategoryId: '25',
      name: 'Dried Horn Fish',
    }, {
      id: 8637,
      mainCategoryId: '25',
      name: 'Dried Dollarfish',
    }, {
      id: 8638,
      mainCategoryId: '25',
      name: 'Dried Sandeel',
    }, {
      id: 8639,
      mainCategoryId: '25',
      name: 'Dried Spotted Barbel',
    }, {
      id: 8640,
      mainCategoryId: '25',
      name: 'Dried Miho Spine Loach',
    }, {
      id: 8641,
      mainCategoryId: '25',
      name: 'Dried Diamond Minnow',
    }, {
      id: 8642,
      mainCategoryId: '25',
      name: 'Dried Amur Minnow',
    }, {
      id: 8643,
      mainCategoryId: '25',
      name: 'Dried Common Minnow',
    }, {
      id: 8644,
      mainCategoryId: '25',
      name: 'Dried Stumpy Bullhead',
    }, {
      id: 8645,
      mainCategoryId: '25',
      name: 'Dried Shuttles Hoppfish',
    }, {
      id: 8646,
      mainCategoryId: '25',
      name: 'Dried Oily Shiner',
    }, {
      id: 8647,
      mainCategoryId: '25',
      name: 'Dried Korean Loach',
    }, {
      id: 8648,
      mainCategoryId: '25',
      name: 'Dried Minnow',
    }, {
      id: 8649,
      mainCategoryId: '25',
      name: 'Dried Cherry Icefish',
    }, {
      id: 8650,
      mainCategoryId: '25',
      name: 'Dried Spined Loach',
    }, {
      id: 8651,
      mainCategoryId: '25',
      name: 'Dried Amur Ide',
    }, {
      id: 8652,
      mainCategoryId: '25',
      name: 'Dried Stone Moroko',
    }, {
      id: 8653,
      mainCategoryId: '25',
      name: 'Dried Amur Goby',
    }, {
      id: 8654,
      mainCategoryId: '25',
      name: 'Dried Stickleback',
    }, {
      id: 8655,
      mainCategoryId: '25',
      name: 'Dried Mori',
    }, {
      id: 8656,
      mainCategoryId: '25',
      name: 'Dried Grass Carp',
    }, {
      id: 8657,
      mainCategoryId: '25',
      name: 'Dried Black Shiner',
    }, {
      id: 8658,
      mainCategoryId: '25',
      name: 'Dried Burbot',
    }, {
      id: 8659,
      mainCategoryId: '25',
      name: 'Dried Dark Chub',
    }, {
      id: 8660,
      mainCategoryId: '25',
      name: 'Dried Flower Icefish',
    }, {
      id: 8661,
      mainCategoryId: '25',
      name: 'Dried Charr',
    }, {
      id: 8662,
      mainCategoryId: '25',
      name: 'Dried Yellowfin Sole',
    }, {
      id: 8663,
      mainCategoryId: '25',
      name: 'Dried Stippled Gunnel',
    }, {
      id: 8664,
      mainCategoryId: '25',
      name: 'Dried Red Snow Crab',
    }, {
      id: 8665,
      mainCategoryId: '25',
      name: 'Dried Redbreasted Wrasse',
    }, {
      id: 8666,
      mainCategoryId: '25',
      name: 'Dried Green Sturgeon',
    }, {
      id: 8667,
      mainCategoryId: '25',
      name: 'Dried Thresher Shark',
    }, {
      id: 8668,
      mainCategoryId: '25',
      name: 'Dried Tiger Shark',
    }, {
      id: 8669,
      mainCategoryId: '25',
      name: 'Dried Basking Shark',
    }, {
      id: 9003,
      mainCategoryId: '25',
      name: 'White Sauce',
    }, {
      id: 9004,
      mainCategoryId: '25',
      name: 'Red Sauce',
    }, {
      id: 9006,
      mainCategoryId: '25',
      name: 'Dressing',
    }, {
      id: 9057,
      mainCategoryId: '25',
      name: 'Essence of Liquor',
    }, {
      id: 9061,
      mainCategoryId: '25',
      name: 'Cream',
    }, {
      id: 9062,
      mainCategoryId: '25',
      name: 'Cheese',
    }, {
      id: 9063,
      mainCategoryId: '25',
      name: 'Butter',
    }, {
      id: 9064,
      mainCategoryId: '25',
      name: 'Egg',
    }, {
      id: 9065,
      mainCategoryId: '25',
      name: 'Milk',
    }, {
      id: 9066,
      mainCategoryId: '25',
      name: 'Vinegar',
    }, {
      id: 9201,
      mainCategoryId: '35',
      name: 'Fruit Wine',
    }, {
      id: 9202,
      mainCategoryId: '35',
      name: 'Pickled Vegetables',
    }, {
      id: 9203,
      mainCategoryId: '35',
      name: 'Cheese Gratin',
    }, {
      id: 9204,
      mainCategoryId: '35',
      name: 'Aloe Yogurt',
    }, {
      id: 9205,
      mainCategoryId: '35',
      name: 'Aloe Cookie',
    }, {
      id: 9206,
      mainCategoryId: '35',
      name: 'Honey Wine',
    }, {
      id: 9207,
      mainCategoryId: '35',
      name: 'Sute Tea',
    }, {
      id: 9208,
      mainCategoryId: '35',
      name: 'Fish Fillet Chips',
    }, {
      id: 9209,
      mainCategoryId: '35',
      name: 'Assorted Side Dishes',
    }, {
      id: 9210,
      mainCategoryId: '35',
      name: 'High-Quality Carrot Juice',
    }, {
      id: 9211,
      mainCategoryId: '35',
      name: 'Special Carrot Juice',
    }, {
      id: 9213,
      mainCategoryId: '35',
      name: 'Beer',
    }, {
      id: 9214,
      mainCategoryId: '35',
      name: 'Teff Bread',
    }, {
      id: 9215,
      mainCategoryId: '35',
      name: 'Freekeh Snake Stew',
    }, {
      id: 9216,
      mainCategoryId: '35',
      name: 'Fig Pie',
    }, {
      id: 9217,
      mainCategoryId: '35',
      name: 'Pistachio Fried Rice',
    }, {
      id: 9218,
      mainCategoryId: '35',
      name: 'Teff Sandwich',
    }, {
      id: 9219,
      mainCategoryId: '35',
      name: 'Date Palm Wine',
    }, {
      id: 9220,
      mainCategoryId: '35',
      name: 'Couscous',
    }, {
      id: 9241,
      mainCategoryId: '35',
      name: 'Stir-Fried Vegetables',
    }, {
      id: 9255,
      mainCategoryId: '35',
      name: 'Grain Soup',
    }, {
      id: 9256,
      mainCategoryId: '35',
      name: 'Fried Vegetables',
    }, {
      id: 9257,
      mainCategoryId: '35',
      name: 'Fruit Juice',
    }, {
      id: 9258,
      mainCategoryId: '35',
      name: 'Fruit and Vegetable Salad',
    }, {
      id: 9259,
      mainCategoryId: '35',
      name: 'Fruit Pudding',
    }, {
      id: 9260,
      mainCategoryId: '35',
      name: 'Soft Bread',
    }, {
      id: 9261,
      mainCategoryId: '35',
      name: 'Oatmeal',
    }, {
      id: 9262,
      mainCategoryId: '35',
      name: 'Exotic Herbal Wine',
    }, {
      id: 9263,
      mainCategoryId: '35',
      name: 'Milk Tea',
    }, {
      id: 9264,
      mainCategoryId: '35',
      name: 'Fruit Pie',
    }, {
      id: 9265,
      mainCategoryId: '35',
      name: 'Meat Pie',
    }, {
      id: 9266,
      mainCategoryId: '35',
      name: 'Honeycomb Cookie',
    }, {
      id: 9267,
      mainCategoryId: '35',
      name: 'Ham Sandwich',
    }, {
      id: 9268,
      mainCategoryId: '35',
      name: 'Cheese Pie',
    }, {
      id: 9269,
      mainCategoryId: '35',
      name: 'Omelet',
    }, {
      id: 9270,
      mainCategoryId: '35',
      name: 'Tea With Fine Scent',
    }, {
      id: 9271,
      mainCategoryId: '35',
      name: 'Crispy Fried Vegetables',
    }, {
      id: 9273,
      mainCategoryId: '35',
      name: 'High-Quality Cheese Pie',
    }, {
      id: 9274,
      mainCategoryId: '35',
      name: 'Special Fruit Pudding',
    }, {
      id: 9275,
      mainCategoryId: '35',
      name: 'Special Grain Soup',
    }, {
      id: 9276,
      mainCategoryId: '35',
      name: 'Refined Oatmeal',
    }, {
      id: 9277,
      mainCategoryId: '35',
      name: 'Smooth Milk Tea',
    }, {
      id: 9278,
      mainCategoryId: '35',
      name: 'Thick Fruit Juice',
    }, {
      id: 9279,
      mainCategoryId: '35',
      name: 'Full-bodied Exotic Herbal Wine',
    }, {
      id: 9280,
      mainCategoryId: '35',
      name: 'Luscious Fruit Wine',
    }, {
      id: 9281,
      mainCategoryId: '35',
      name: 'Sweet and Sour Pickled Vegetable',
    }, {
      id: 9282,
      mainCategoryId: '35',
      name: 'Chewy Cheese Gratin',
    }, {
      id: 9283,
      mainCategoryId: '35',
      name: 'Cold Draft Beer',
    }, {
      id: 9284,
      mainCategoryId: '35',
      name: 'Crispy Stir-Fried Vegetables',
    }, {
      id: 9285,
      mainCategoryId: '35',
      name: 'Fresh Fruit and Vegetable Salad',
    }, {
      id: 9286,
      mainCategoryId: '35',
      name: 'Moist Milk Bread',
    }, {
      id: 9287,
      mainCategoryId: '35',
      name: 'Sweet Fruit Pie',
    }, {
      id: 9288,
      mainCategoryId: '35',
      name: 'Lean Meat Pie',
    }, {
      id: 9289,
      mainCategoryId: '35',
      name: 'Crispy Honeycomb Cookie',
    }, {
      id: 9290,
      mainCategoryId: '35',
      name: 'High-Quality Ham Sandwich',
    }, {
      id: 9291,
      mainCategoryId: '35',
      name: 'Soft Omelet',
    }, {
      id: 9292,
      mainCategoryId: '35',
      name: 'Tea with Strong Scent',
    }, {
      id: 9293,
      mainCategoryId: '35',
      name: 'Thick Aloe Yogurt',
    }, {
      id: 9294,
      mainCategoryId: '35',
      name: 'Sweet Aloe Cookie',
    }, {
      id: 9295,
      mainCategoryId: '35',
      name: 'Tangy Honey Wine',
    }, {
      id: 9296,
      mainCategoryId: '35',
      name: 'Healthy Sute Tea',
    }, {
      id: 9297,
      mainCategoryId: '35',
      name: 'Mouth-watering Fish Fillet Chips',
    }, {
      id: 9298,
      mainCategoryId: '35',
      name: 'Plentiful Assorted Side Dishes',
    }, {
      id: 9299,
      mainCategoryId: '35',
      name: 'Spongy Teff Bread',
    }, {
      id: 9300,
      mainCategoryId: '35',
      name: 'Thick Freekeh Snake Stew',
    }, {
      id: 9301,
      mainCategoryId: '35',
      name: 'Sweet Fig Pie',
    }, {
      id: 9302,
      mainCategoryId: '35',
      name: 'Savory Pistachio Fried Rice',
    }, {
      id: 9303,
      mainCategoryId: '35',
      name: 'Spicy Teff Sandwich',
    }, {
      id: 9304,
      mainCategoryId: '35',
      name: 'Mild Date Palm Wine',
    }, {
      id: 9305,
      mainCategoryId: '35',
      name: 'Classic Couscous',
    }, {
      id: 9306,
      mainCategoryId: '35',
      name: 'Star Anise Tea',
    }, {
      id: 9307,
      mainCategoryId: '35',
      name: 'Coconut Cocktail',
    }, {
      id: 9308,
      mainCategoryId: '35',
      name: 'Coconut Pasta',
    }, {
      id: 9309,
      mainCategoryId: '35',
      name: 'Coconut Fried Fish',
    }, {
      id: 9310,
      mainCategoryId: '35',
      name: 'Chilled Coconut Cocktail',
    }, {
      id: 9311,
      mainCategoryId: '35',
      name: 'Sweet Coconut Pasta',
    }, {
      id: 9312,
      mainCategoryId: '35',
      name: 'Crispy Coconut Fried Fish',
    }, {
      id: 9313,
      mainCategoryId: '35',
      name: 'Spirit Essence of Wind',
    }, {
      id: 9314,
      mainCategoryId: '35',
      name: 'Spirit Essence of Earth',
    }, {
      id: 9315,
      mainCategoryId: '35',
      name: 'Spirit Essence of Water',
    }, {
      id: 9316,
      mainCategoryId: '35',
      name: 'Rainbow Button Mushroom Sandwich',
    }, {
      id: 9317,
      mainCategoryId: '35',
      name: 'Sweet Rainbow Button Mushroom Sandwich',
    }, {
      id: 9318,
      mainCategoryId: '35',
      name: 'Stir-Fried Bracken',
    }, {
      id: 9319,
      mainCategoryId: '35',
      name: 'Savory Stir-Fried Bracken',
    }, {
      id: 9321,
      mainCategoryId: '35',
      name: 'Carrot Confit',
    }, {
      id: 9323,
      mainCategoryId: '35',
      name: 'Delotia Tart',
    }, {
      id: 9324,
      mainCategoryId: '35',
      name: 'High-Quality Delotia Tart',
    }, {
      id: 9325,
      mainCategoryId: '35',
      name: 'Delotia Pudding',
    }, {
      id: 9326,
      mainCategoryId: '35',
      name: 'Blood Red Delotia Pudding',
    }, {
      id: 9327,
      mainCategoryId: '35',
      name: 'Delotia Juice',
    }, {
      id: 9328,
      mainCategoryId: '35',
      name: 'Chilled Delotia Juice',
    }, {
      id: 9329,
      mainCategoryId: '35',
      name: 'Delotia Milk Tea',
    }, {
      id: 9330,
      mainCategoryId: '35',
      name: 'Fragrant Delotia Milk Tea',
    }, {
      id: 9331,
      mainCategoryId: '35',
      name: 'Stir-Fried Bird',
    }, {
      id: 9332,
      mainCategoryId: '35',
      name: 'Savory Stir-Fried Bird',
    }, {
      id: 9333,
      mainCategoryId: '35',
      name: 'Stir-Fried Bracken and Meat',
    }, {
      id: 9334,
      mainCategoryId: '35',
      name: 'Light Stir-Fried Bracken and Meat',
    }, {
      id: 9335,
      mainCategoryId: '35',
      name: 'Chicken Breast Salad',
    }, {
      id: 9336,
      mainCategoryId: '35',
      name: 'Fresh Chicken Breast Salad',
    }, {
      id: 9337,
      mainCategoryId: '35',
      name: 'Frank Sandwich',
    }, {
      id: 9338,
      mainCategoryId: '35',
      name: 'High-Quality Frank Sandwich',
    }, {
      id: 9401,
      mainCategoryId: '35',
      name: 'Steak',
    }, {
      id: 9402,
      mainCategoryId: '35',
      name: 'Boiled Bird Eggs',
    }, {
      id: 9403,
      mainCategoryId: '35',
      name: 'Fried Bird',
    }, {
      id: 9404,
      mainCategoryId: '35',
      name: 'Meat Croquette',
    }, {
      id: 9405,
      mainCategoryId: '35',
      name: 'Steamed Bird',
    }, {
      id: 9406,
      mainCategoryId: '35',
      name: 'Lizard Kebab',
    }, {
      id: 9407,
      mainCategoryId: '35',
      name: 'Fried Fish',
    }, {
      id: 9408,
      mainCategoryId: '35',
      name: 'Borscht',
    }, {
      id: 9409,
      mainCategoryId: '35',
      name: 'Steamed Fish',
    }, {
      id: 9410,
      mainCategoryId: '35',
      name: 'Desert Dumpling',
    }, {
      id: 9411,
      mainCategoryId: '35',
      name: 'Steamed Seafood',
    }, {
      id: 9412,
      mainCategoryId: '35',
      name: 'Pickled Fish',
    }, {
      id: 9413,
      mainCategoryId: '35',
      name: 'Seafood Pasta',
    }, {
      id: 9414,
      mainCategoryId: '35',
      name: 'Meat Stew',
    }, {
      id: 9415,
      mainCategoryId: '35',
      name: 'Meat Sandwich',
    }, {
      id: 9416,
      mainCategoryId: '35',
      name: 'Meat Pasta',
    }, {
      id: 9417,
      mainCategoryId: '35',
      name: 'Smoked Fish Steak',
    }, {
      id: 9418,
      mainCategoryId: '35',
      name: 'Fish Soup',
    }, {
      id: 9419,
      mainCategoryId: '35',
      name: 'Seafood Mushroom Salad',
    }, {
      id: 9420,
      mainCategoryId: '35',
      name: 'Stir-Fried Seafood',
    }, {
      id: 9421,
      mainCategoryId: '35',
      name: 'Seafood Grilled with Butter',
    }, {
      id: 9422,
      mainCategoryId: '35',
      name: 'Dark Pudding',
    }, {
      id: 9423,
      mainCategoryId: '35',
      name: 'Fish Fillet Salad',
    }, {
      id: 9424,
      mainCategoryId: '35',
      name: 'Meat Soup',
    }, {
      id: 9425,
      mainCategoryId: '35',
      name: 'Lean Meat Salad',
    }, {
      id: 9426,
      mainCategoryId: '35',
      name: 'Stir-Fried Meat',
    }, {
      id: 9427,
      mainCategoryId: '35',
      name: 'Grilled Sausage',
    }, {
      id: 9428,
      mainCategoryId: '35',
      name: 'Special Fish Soup',
    }, {
      id: 9429,
      mainCategoryId: '35',
      name: 'Crispy Fried Fish',
    }, {
      id: 9430,
      mainCategoryId: '35',
      name: 'Juicy Steak',
    }, {
      id: 9431,
      mainCategoryId: '35',
      name: 'Smoked Sausage',
    }, {
      id: 9432,
      mainCategoryId: '35',
      name: 'Special Stir-Fried Meat',
    }, {
      id: 9433,
      mainCategoryId: '35',
      name: 'Savory Seafood Grilled with Butter',
    }, {
      id: 9434,
      mainCategoryId: '35',
      name: 'Special Meat Soup',
    }, {
      id: 9435,
      mainCategoryId: '35',
      name: 'Top Grade Lean Meat Salad',
    }, {
      id: 9436,
      mainCategoryId: '35',
      name: 'Appealing Boiled Bird Egg',
    }, {
      id: 9437,
      mainCategoryId: '35',
      name: 'Divine Fried Bird',
    }, {
      id: 9438,
      mainCategoryId: '35',
      name: 'Crispy Meat Croquette',
    }, {
      id: 9439,
      mainCategoryId: '35',
      name: 'Lean Steamed Fish',
    }, {
      id: 9440,
      mainCategoryId: '35',
      name: 'Plentiful Steamed Seafood',
    }, {
      id: 9441,
      mainCategoryId: '35',
      name: 'High-Quality Seafood Pasta',
    }, {
      id: 9442,
      mainCategoryId: '35',
      name: 'Thick Meat Stew',
    }, {
      id: 9443,
      mainCategoryId: '35',
      name: 'High-Quality Meat Sandwich',
    }, {
      id: 9444,
      mainCategoryId: '35',
      name: 'Spaghetti alla Bolognese',
    }, {
      id: 9445,
      mainCategoryId: '35',
      name: 'Golden Smoked Fish Steak',
    }, {
      id: 9446,
      mainCategoryId: '35',
      name: 'Special Seafood Mushroom Salad',
    }, {
      id: 9447,
      mainCategoryId: '35',
      name: 'Special Stir-Fried Seafood',
    }, {
      id: 9448,
      mainCategoryId: '35',
      name: 'Bloody Dark Pudding',
    }, {
      id: 9449,
      mainCategoryId: '35',
      name: 'Fresh Fish Fillet Salad',
    }, {
      id: 9450,
      mainCategoryId: '35',
      name: 'Well-aged Steamed Bird',
    }, {
      id: 9451,
      mainCategoryId: '35',
      name: 'Lean Lizard Kebab',
    }, {
      id: 9452,
      mainCategoryId: '35',
      name: 'Fragrant Borscht',
    }, {
      id: 9453,
      mainCategoryId: '35',
      name: 'Chewy Desert Dumpling',
    }, {
      id: 9454,
      mainCategoryId: '35',
      name: 'Sour Pickled Fish',
    }, {
      id: 9455,
      mainCategoryId: '35',
      name: 'Steamed Whale Meat',
    }, {
      id: 9456,
      mainCategoryId: '35',
      name: 'Whale Meat Salad',
    }, {
      id: 9457,
      mainCategoryId: '35',
      name: 'Chewy Steamed Whale Meat',
    }, {
      id: 9458,
      mainCategoryId: '35',
      name: 'Fresh Whale Meat Salad',
    }, {
      id: 9459,
      mainCategoryId: '35',
      name: 'Hunter\'s Salad',
    }, {
      id: 9460,
      mainCategoryId: '35',
      name: 'Fresh Hunter\'s Salad',
    }, {
      id: 9461,
      mainCategoryId: '35',
      name: 'Grilled Scorpion',
    }, {
      id: 9462,
      mainCategoryId: '35',
      name: 'Crispy Grilled Scorpion',
    }, {
      id: 9463,
      mainCategoryId: '35',
      name: 'King of Jungle Hamburg',
    }, {
      id: 9464,
      mainCategoryId: '35',
      name: 'Jumbo King of Jungle Hamburg',
    }, {
      id: 9469,
      mainCategoryId: '35',
      name: 'Khalk\'s Fermented Wine',
    }, {
      id: 9470,
      mainCategoryId: '35',
      name: 'Khalk\'s Strong Fermented Wine',
    }, {
      id: 9471,
      mainCategoryId: '35',
      name: 'Prawn Salad',
    }, {
      id: 9472,
      mainCategoryId: '35',
      name: 'Sweet and Sour Prawn Salad',
    }, {
      id: 9473,
      mainCategoryId: '35',
      name: 'Steamed Prawn',
    }, {
      id: 9474,
      mainCategoryId: '35',
      name: 'Hearty Steamed Prawn',
    }, {
      id: 9475,
      mainCategoryId: '35',
      name: 'Pan-Fried Oyster',
    }, {
      id: 9476,
      mainCategoryId: '35',
      name: 'Aromatic Pan-Fried Oyster',
    }, {
      id: 9477,
      mainCategoryId: '35',
      name: 'Butter-Roasted Lobster',
    }, {
      id: 9478,
      mainCategoryId: '35',
      name: 'Golden Butter-Roasted Lobster',
    }, {
      id: 9479,
      mainCategoryId: '35',
      name: 'Hard-Boiled Shellfish',
    }, {
      id: 9480,
      mainCategoryId: '35',
      name: 'Big Hard-Boiled Shellfish',
    }, {
      id: 9483,
      mainCategoryId: '35',
      name: 'Rainbow Button Mushroom Cheese Melt',
    }, {
      id: 9484,
      mainCategoryId: '35',
      name: 'Mild Rainbow Button Mushroom Cheese Melt',
    }, {
      id: 9486,
      mainCategoryId: '35',
      name: 'Ghormeh Sabzi',
    }, {
      id: 9487,
      mainCategoryId: '35',
      name: 'Thick Ghormeh Sabzi',
    }, {
      id: 9488,
      mainCategoryId: '35',
      name: 'Roast Marmot',
    }, {
      id: 9489,
      mainCategoryId: '35',
      name: 'Golden Roast Marmot',
    }, {
      id: 9490,
      mainCategoryId: '35',
      name: 'Skewered Llama Cheese Melt',
    }, {
      id: 9491,
      mainCategoryId: '35',
      name: 'Spicy Skewered Llama Cheese Melt',
    }, {
      id: 9492,
      mainCategoryId: '35',
      name: 'Grilled Bird Meat',
    }, {
      id: 9493,
      mainCategoryId: '35',
      name: 'Steaming Hot Grilled Bird Meat',
    }, {
      id: 9494,
      mainCategoryId: '35',
      name: 'Five-Grain Chicken Porridge',
    }, {
      id: 9495,
      mainCategoryId: '35',
      name: 'Thick Five-Grain Chicken Porridge',
    }, {
      id: 9496,
      mainCategoryId: '35',
      name: 'Savory Steak',
    }, {
      id: 9601,
      mainCategoryId: '35',
      name: 'Balenos Meal',
    }, {
      id: 9602,
      mainCategoryId: '35',
      name: 'Special Balenos Meal',
    }, {
      id: 9603,
      mainCategoryId: '35',
      name: 'Serendia Meal',
    }, {
      id: 9604,
      mainCategoryId: '35',
      name: 'Special Serendia Meal',
    }, {
      id: 9605,
      mainCategoryId: '35',
      name: 'Calpheon Meal',
    }, {
      id: 9606,
      mainCategoryId: '35',
      name: 'Special Calpheon Meal',
    }, {
      id: 9607,
      mainCategoryId: '35',
      name: 'Mediah Meal',
    }, {
      id: 9608,
      mainCategoryId: '35',
      name: 'Special Mediah Meal',
    }, {
      id: 9609,
      mainCategoryId: '35',
      name: 'Valencia Meal',
    }, {
      id: 9610,
      mainCategoryId: '35',
      name: 'Special Valencia Meal',
    }, {
      id: 9631,
      mainCategoryId: '35',
      name: 'Knight Combat Rations',
    }, {
      id: 9632,
      mainCategoryId: '35',
      name: 'Special Arehaza Meal',
    }, {
      id: 9634,
      mainCategoryId: '35',
      name: 'Margoria Seafood Meal',
    }, {
      id: 9635,
      mainCategoryId: '35',
      name: 'Kamasylvia Meal',
    }, {
      id: 9636,
      mainCategoryId: '35',
      name: 'Special Kamasylvia Meal',
    }, {
      id: 9637,
      mainCategoryId: '35',
      name: 'Special Drieghanese Meal',
    }, {
      id: 9638,
      mainCategoryId: '35',
      name: 'O\'dyllita Meal',
    }, {
      id: 9639,
      mainCategoryId: '35',
      name: 'Special O\'dyllita Meal',
    }, {
      id: 9691,
      mainCategoryId: '35',
      name: 'Seafood Cron Meal',
    }, {
      id: 9692,
      mainCategoryId: '35',
      name: 'Simple Cron Meal',
    }, {
      id: 9693,
      mainCategoryId: '35',
      name: 'Exquisite Cron Meal',
    }, {
      id: 9701,
      mainCategoryId: '35',
      name: 'Paste Bait',
    }, {
      id: 9702,
      mainCategoryId: '35',
      name: 'High-Quality Paste Bait',
    }, {
      id: 9726,
      mainCategoryId: '25',
      name: 'Blue Whale Meat',
    }, {
      id: 9727,
      mainCategoryId: '25',
      name: 'Blue Whale Oil',
    }, {
      id: 9728,
      mainCategoryId: '25',
      name: 'Blue Whale Molar',
    }, {
      id: 9729,
      mainCategoryId: '25',
      name: 'Blue Whale Tendon',
    }, {
      id: 9731,
      mainCategoryId: '25',
      name: 'Soft Whale Meat',
    }, {
      id: 9732,
      mainCategoryId: '25',
      name: 'Crocodile Meat',
    }, {
      id: 9733,
      mainCategoryId: '25',
      name: 'Shining Powder',
    }, {
      id: 9735,
      mainCategoryId: '25',
      name: 'Fugitive Khalk\'s Horn',
    }, {
      id: 9736,
      mainCategoryId: '25',
      name: 'Fugitive Khalk\'s Skin',
    }, {
      id: 9737,
      mainCategoryId: '25',
      name: 'Fugitive Khalk\'s Shiny Claw',
    }, {
      id: 9741,
      mainCategoryId: '25',
      name: 'Griffon Claw',
    }, {
      id: 9746,
      mainCategoryId: '25',
      name: 'Abyssal Brass Ingot',
    }, {
      id: 9747,
      mainCategoryId: '25',
      name: 'Ferocious Leather',
    }, {
      id: 9748,
      mainCategoryId: '25',
      name: 'Mystical Cleaning Oil',
    }, {
      id: 9768,
      mainCategoryId: '25',
      name: 'Garmoth\'s Scale',
    }, {
      id: 9771,
      mainCategoryId: '30',
      name: 'Inverted Heart of Garmoth',
    }, {
      id: 9773,
      mainCategoryId: '25',
      name: 'Intact Griffon\'s Beak',
    }, {
      id: 9779,
      mainCategoryId: '25',
      name: 'Oil of Enchantment',
    }, {
      id: 10003,
      mainCategoryId: '1',
      name: 'Elsh Longsword',
    }, {
      id: 10005,
      mainCategoryId: '1',
      name: 'Azwell Longsword',
    }, {
      id: 10006,
      mainCategoryId: '1',
      name: 'Ain Longsword',
    }, {
      id: 10007,
      mainCategoryId: '1',
      name: 'Seleth Longsword',
    }, {
      id: 10009,
      mainCategoryId: '1',
      name: 'Liverto Longsword',
    }, {
      id: 10010,
      mainCategoryId: '1',
      name: 'Kzarka Longsword',
    }, {
      id: 10012,
      mainCategoryId: '1',
      name: 'Kalis Longsword',
    }, {
      id: 10013,
      mainCategoryId: '1',
      name: 'Bares Longsword',
    }, {
      id: 10014,
      mainCategoryId: '1',
      name: 'Yuria Longsword',
    }, {
      id: 10056,
      mainCategoryId: '1',
      name: 'Krea Longsword',
    }, {
      id: 10057,
      mainCategoryId: '1',
      name: 'Rosar Longsword',
    }, {
      id: 10071,
      mainCategoryId: '1',
      name: 'Styd Longsword',
    }, {
      id: 10072,
      mainCategoryId: '1',
      name: 'Ultimate Styd Longsword',
    }, {
      id: 10086,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Longsword',
    }, {
      id: 10102,
      mainCategoryId: '5',
      name: 'Vangertz Shield',
    }, {
      id: 10103,
      mainCategoryId: '5',
      name: 'Axion Shield',
    }, {
      id: 10105,
      mainCategoryId: '5',
      name: 'Kite Shield',
    }, {
      id: 10124,
      mainCategoryId: '5',
      name: 'Krea Shield',
    }, {
      id: 10125,
      mainCategoryId: '5',
      name: 'Rosar Shield',
    }, {
      id: 10138,
      mainCategoryId: '5',
      name: 'Nouver Shield',
    }, {
      id: 10140,
      mainCategoryId: '5',
      name: 'Kutum Shield',
    }, {
      id: 10203,
      mainCategoryId: '1',
      name: 'Elsh Longbow',
    }, {
      id: 10205,
      mainCategoryId: '1',
      name: 'Azwell Longbow',
    }, {
      id: 10206,
      mainCategoryId: '1',
      name: 'Ain Longbow',
    }, {
      id: 10207,
      mainCategoryId: '1',
      name: 'Seleth Longbow',
    }, {
      id: 10209,
      mainCategoryId: '1',
      name: 'Liverto Longbow',
    }, {
      id: 10210,
      mainCategoryId: '1',
      name: 'Kzarka Longbow',
    }, {
      id: 10212,
      mainCategoryId: '1',
      name: 'Kalis Longbow',
    }, {
      id: 10213,
      mainCategoryId: '1',
      name: 'Bares Longbow',
    }, {
      id: 10214,
      mainCategoryId: '1',
      name: 'Yuria Longbow',
    }, {
      id: 10256,
      mainCategoryId: '1',
      name: 'Krea Longbow',
    }, {
      id: 10257,
      mainCategoryId: '1',
      name: 'Rosar Longbow',
    }, {
      id: 10271,
      mainCategoryId: '1',
      name: 'Styd Longbow',
    }, {
      id: 10272,
      mainCategoryId: '1',
      name: 'Ultimate Styd Longbow',
    }, {
      id: 10286,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Longbow',
    }, {
      id: 10303,
      mainCategoryId: '5',
      name: 'Bronze Dagger',
    }, {
      id: 10304,
      mainCategoryId: '5',
      name: 'Steel Dagger',
    }, {
      id: 10305,
      mainCategoryId: '5',
      name: 'Parrying Dagger',
    }, {
      id: 10324,
      mainCategoryId: '5',
      name: 'Krea Dagger',
    }, {
      id: 10325,
      mainCategoryId: '5',
      name: 'Rosar Dagger',
    }, {
      id: 10338,
      mainCategoryId: '5',
      name: 'Nouver Dagger',
    }, {
      id: 10340,
      mainCategoryId: '5',
      name: '쿠툼 단검',
    }, {
      id: 10403,
      mainCategoryId: '1',
      name: 'Elsh Amulet',
    }, {
      id: 10405,
      mainCategoryId: '1',
      name: 'Azwell Amulet',
    }, {
      id: 10406,
      mainCategoryId: '1',
      name: 'Ain Amulet',
    }, {
      id: 10407,
      mainCategoryId: '1',
      name: 'Seleth Amulet',
    }, {
      id: 10409,
      mainCategoryId: '1',
      name: 'Liverto Amulet',
    }, {
      id: 10410,
      mainCategoryId: '1',
      name: 'Kzarka Amulet',
    }, {
      id: 10412,
      mainCategoryId: '1',
      name: 'Kalis Amulet',
    }, {
      id: 10413,
      mainCategoryId: '1',
      name: 'Bares Amulet',
    }, {
      id: 10414,
      mainCategoryId: '1',
      name: 'Yuria Amulet',
    }, {
      id: 10456,
      mainCategoryId: '1',
      name: 'Krea Amulet',
    }, {
      id: 10457,
      mainCategoryId: '1',
      name: 'Rosar Amulet',
    }, {
      id: 10471,
      mainCategoryId: '1',
      name: 'Styd Amulet',
    }, {
      id: 10472,
      mainCategoryId: '1',
      name: 'Ultimate Styd Amulet',
    }, {
      id: 10486,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Amulet',
    }, {
      id: 10503,
      mainCategoryId: '5',
      name: 'Helrick Talisman',
    }, {
      id: 10504,
      mainCategoryId: '5',
      name: 'Jubre Talisman',
    }, {
      id: 10505,
      mainCategoryId: '5',
      name: 'Rhik Talisman',
    }, {
      id: 10524,
      mainCategoryId: '5',
      name: 'Krea Talisman',
    }, {
      id: 10525,
      mainCategoryId: '5',
      name: 'Rosar Talisman',
    }, {
      id: 10538,
      mainCategoryId: '5',
      name: 'Nouver Talisman',
    }, {
      id: 10540,
      mainCategoryId: '5',
      name: 'Kutum Talisman',
    }, {
      id: 10603,
      mainCategoryId: '1',
      name: 'Elsh Axe',
    }, {
      id: 10605,
      mainCategoryId: '1',
      name: 'Azwell Axe',
    }, {
      id: 10606,
      mainCategoryId: '1',
      name: 'Ain Axe',
    }, {
      id: 10607,
      mainCategoryId: '1',
      name: 'Seleth Axe',
    }, {
      id: 10609,
      mainCategoryId: '1',
      name: 'Liverto Axe',
    }, {
      id: 10610,
      mainCategoryId: '1',
      name: 'Kzarka Axe',
    }, {
      id: 10612,
      mainCategoryId: '1',
      name: 'Kalis Axe',
    }, {
      id: 10613,
      mainCategoryId: '1',
      name: 'Bares Axe',
    }, {
      id: 10614,
      mainCategoryId: '1',
      name: 'Yuria Axe',
    }, {
      id: 10656,
      mainCategoryId: '1',
      name: 'Krea Axe',
    }, {
      id: 10657,
      mainCategoryId: '1',
      name: 'Rosar Axe',
    }, {
      id: 10671,
      mainCategoryId: '1',
      name: 'Styd Axe',
    }, {
      id: 10672,
      mainCategoryId: '1',
      name: 'Ultimate Styd Axe',
    }, {
      id: 10686,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Axe',
    }, {
      id: 10703,
      mainCategoryId: '5',
      name: 'Saiyer Ornamental Knot',
    }, {
      id: 10704,
      mainCategoryId: '5',
      name: 'Oros Ornamental Knot',
    }, {
      id: 10705,
      mainCategoryId: '5',
      name: 'Theos Ornamental Knot',
    }, {
      id: 10724,
      mainCategoryId: '5',
      name: 'Krea Ornamental Knot',
    }, {
      id: 10725,
      mainCategoryId: '5',
      name: 'Rosar Ornamental Knot',
    }, {
      id: 10738,
      mainCategoryId: '5',
      name: 'Nouver Ornamental Knot',
    }, {
      id: 10740,
      mainCategoryId: '5',
      name: 'Kutum Ornamental Knot',
    }, {
      id: 10809,
      mainCategoryId: '15',
      name: 'Agerian Helmet',
    }, {
      id: 10810,
      mainCategoryId: '15',
      name: 'Agerian Armor',
    }, {
      id: 10811,
      mainCategoryId: '15',
      name: 'Agerian Gloves',
    }, {
      id: 10812,
      mainCategoryId: '15',
      name: 'Agerian Shoes',
    }, {
      id: 10813,
      mainCategoryId: '15',
      name: 'Taritas Helmet',
    }, {
      id: 10814,
      mainCategoryId: '15',
      name: 'Taritas Armor',
    }, {
      id: 10815,
      mainCategoryId: '15',
      name: 'Taritas Gloves',
    }, {
      id: 10816,
      mainCategoryId: '15',
      name: 'Taritas Shoes',
    }, {
      id: 10817,
      mainCategoryId: '15',
      name: 'Zereth Helmet',
    }, {
      id: 10818,
      mainCategoryId: '15',
      name: 'Zereth Armor',
    }, {
      id: 10819,
      mainCategoryId: '15',
      name: 'Zereth Gloves',
    }, {
      id: 10820,
      mainCategoryId: '15',
      name: 'Zereth Shoes',
    }, {
      id: 10821,
      mainCategoryId: '15',
      name: 'Talis Helmet',
    }, {
      id: 10822,
      mainCategoryId: '15',
      name: 'Talis Armor',
    }, {
      id: 10823,
      mainCategoryId: '15',
      name: 'Talis Gloves',
    }, {
      id: 10824,
      mainCategoryId: '15',
      name: 'Talis Shoes',
    }, {
      id: 10889,
      mainCategoryId: '15',
      name: 'Dobart Helmet',
    }, {
      id: 10890,
      mainCategoryId: '15',
      name: 'Dobart Armor',
    }, {
      id: 10891,
      mainCategoryId: '15',
      name: 'Dobart Gloves',
    }, {
      id: 10892,
      mainCategoryId: '15',
      name: 'Dobart Shoes',
    }, {
      id: 10933,
      mainCategoryId: '15',
      name: 'Grunil Helmet',
    }, {
      id: 10934,
      mainCategoryId: '15',
      name: 'Grunil Armor',
    }, {
      id: 10935,
      mainCategoryId: '15',
      name: 'Grunil Gloves',
    }, {
      id: 10936,
      mainCategoryId: '15',
      name: 'Grunil Shoes',
    }, {
      id: 10937,
      mainCategoryId: '15',
      name: 'Rocaba Helmet',
    }, {
      id: 10938,
      mainCategoryId: '15',
      name: 'Rocaba Armor',
    }, {
      id: 10939,
      mainCategoryId: '15',
      name: 'Rocaba Gloves',
    }, {
      id: 10940,
      mainCategoryId: '15',
      name: 'Rocaba Shoes',
    }, {
      id: 11001,
      mainCategoryId: '15',
      name: 'Helmet of Hercules\' Might',
    }, {
      id: 11002,
      mainCategoryId: '15',
      name: 'Armor of Hercules\' Might',
    }, {
      id: 11003,
      mainCategoryId: '15',
      name: 'Gloves of Hercules\' Might',
    }, {
      id: 11004,
      mainCategoryId: '15',
      name: 'Shoes of Hercules\' Might',
    }, {
      id: 11005,
      mainCategoryId: '15',
      name: 'Strength Helmet of Heve',
    }, {
      id: 11006,
      mainCategoryId: '15',
      name: 'Strength Armor of Heve',
    }, {
      id: 11007,
      mainCategoryId: '15',
      name: 'Strength Gloves of Heve',
    }, {
      id: 11008,
      mainCategoryId: '15',
      name: 'Strength Shoes of Heve',
    }, {
      id: 11009,
      mainCategoryId: '15',
      name: 'Luck Helmet of Fortuna',
    }, {
      id: 11010,
      mainCategoryId: '15',
      name: 'Luck Armor of Fortuna',
    }, {
      id: 11011,
      mainCategoryId: '15',
      name: 'Luck Gloves of Fortuna',
    }, {
      id: 11012,
      mainCategoryId: '15',
      name: 'Luck Shoes of Fortuna',
    }, {
      id: 11013,
      mainCategoryId: '15',
      name: 'Giath\'s Helmet',
    }, {
      id: 11014,
      mainCategoryId: '15',
      name: 'Red Nose\'s Armor',
    }, {
      id: 11015,
      mainCategoryId: '15',
      name: 'Bheg\'s Gloves',
    }, {
      id: 11016,
      mainCategoryId: '15',
      name: 'Muskan\'s Shoes',
    }, {
      id: 11017,
      mainCategoryId: '15',
      name: 'Dim Tree Spirit\'s Armor',
    }, {
      id: 11070,
      mainCategoryId: '15',
      name: 'Lemoria Helmet',
    }, {
      id: 11071,
      mainCategoryId: '15',
      name: 'Lemoria Armor',
    }, {
      id: 11072,
      mainCategoryId: '15',
      name: 'Lemoria Gloves',
    }, {
      id: 11073,
      mainCategoryId: '15',
      name: 'Lemoria Shoes',
    }, {
      id: 11101,
      mainCategoryId: '15',
      name: 'Griffon\'s Helmet',
    }, {
      id: 11102,
      mainCategoryId: '15',
      name: 'Leebur\'s Gloves',
    }, {
      id: 11103,
      mainCategoryId: '15',
      name: 'Urugon\'s Shoes',
    }, {
      id: 11203,
      mainCategoryId: '1',
      name: 'Elsh Gauntlet',
    }, {
      id: 11205,
      mainCategoryId: '1',
      name: 'Azwell Gauntlet',
    }, {
      id: 11206,
      mainCategoryId: '1',
      name: 'Ain Gauntlet',
    }, {
      id: 11207,
      mainCategoryId: '1',
      name: 'Seleth Gauntlet',
    }, {
      id: 11209,
      mainCategoryId: '1',
      name: 'Liverto Gauntlet',
    }, {
      id: 11210,
      mainCategoryId: '1',
      name: 'Kzarka Gauntlet',
    }, {
      id: 11212,
      mainCategoryId: '1',
      name: 'Kalis Gauntlet',
    }, {
      id: 11213,
      mainCategoryId: '1',
      name: 'Bares Gauntlet',
    }, {
      id: 11214,
      mainCategoryId: '1',
      name: 'Yuria Gauntlet',
    }, {
      id: 11220,
      mainCategoryId: '1',
      name: 'Krea Gauntlet',
    }, {
      id: 11221,
      mainCategoryId: '1',
      name: 'Rosar Gauntlet',
    }, {
      id: 11222,
      mainCategoryId: '1',
      name: 'Styd Gauntlet',
    }, {
      id: 11223,
      mainCategoryId: '1',
      name: 'Ultimate Styd Gauntlet',
    }, {
      id: 11287,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Gauntlet',
    }, {
      id: 11303,
      mainCategoryId: '5',
      name: 'Leather Vambrace',
    }, {
      id: 11304,
      mainCategoryId: '5',
      name: 'Scale Vambrace',
    }, {
      id: 11305,
      mainCategoryId: '5',
      name: 'Iron Vambrace',
    }, {
      id: 11324,
      mainCategoryId: '5',
      name: 'Krea Vambrace',
    }, {
      id: 11325,
      mainCategoryId: '5',
      name: 'Rosar Vambrace',
    }, {
      id: 11338,
      mainCategoryId: '5',
      name: 'Nouver Vambrace',
    }, {
      id: 11340,
      mainCategoryId: '5',
      name: 'Kutum Vambrace',
    }, {
      id: 11353,
      mainCategoryId: '1',
      name: 'Elsh Kriegsmesser',
    }, {
      id: 11355,
      mainCategoryId: '1',
      name: 'Azwell Kriegsmesser',
    }, {
      id: 11356,
      mainCategoryId: '1',
      name: 'Ain Kriegsmesser',
    }, {
      id: 11357,
      mainCategoryId: '1',
      name: 'Seleth Kriegsmesser',
    }, {
      id: 11359,
      mainCategoryId: '1',
      name: 'Liverto Kriegsmesser',
    }, {
      id: 11360,
      mainCategoryId: '1',
      name: 'Kzarka Kriegsmesser',
    }, {
      id: 11362,
      mainCategoryId: '1',
      name: 'Kalis Kriegsmesser',
    }, {
      id: 11363,
      mainCategoryId: '1',
      name: 'Bares Kriegsmesser',
    }, {
      id: 11364,
      mainCategoryId: '1',
      name: 'Yuria Kriegsmesser',
    }, {
      id: 11370,
      mainCategoryId: '1',
      name: 'Krea Kriegsmesser',
    }, {
      id: 11371,
      mainCategoryId: '1',
      name: 'Rosar Kriegsmesser',
    }, {
      id: 11372,
      mainCategoryId: '1',
      name: 'Styd Kriegsmesser',
    }, {
      id: 11373,
      mainCategoryId: '1',
      name: 'Ultimate Styd Kriegsmesser',
    }, {
      id: 11436,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Kriegsmesser',
    }, {
      id: 11601,
      mainCategoryId: '20',
      name: 'Yuria Necklace',
    }, {
      id: 11602,
      mainCategoryId: '20',
      name: 'Bares Necklace',
    }, {
      id: 11603,
      mainCategoryId: '20',
      name: 'Hesus Necklace',
    }, {
      id: 11604,
      mainCategoryId: '20',
      name: 'Elisha Necklace',
    }, {
      id: 11605,
      mainCategoryId: '20',
      name: 'Kalis Necklace',
    }, {
      id: 11606,
      mainCategoryId: '20',
      name: 'Talis Necklace',
    }, {
      id: 11607,
      mainCategoryId: '20',
      name: 'Ogre Ring',
    }, {
      id: 11609,
      mainCategoryId: '20',
      name: 'Necklace of Good Deeds',
    }, {
      id: 11610,
      mainCategoryId: '20',
      name: 'Scarla Necklace',
    }, {
      id: 11611,
      mainCategoryId: '20',
      name: 'Bensho\'s Necklace',
    }, {
      id: 11613,
      mainCategoryId: '20',
      name: 'Ancient Guardian\'s Seal',
    }, {
      id: 11625,
      mainCategoryId: '20',
      name: 'Sicil\'s Necklace',
    }, {
      id: 11628,
      mainCategoryId: '20',
      name: 'Serap\'s Necklace',
    }, {
      id: 11629,
      mainCategoryId: '20',
      name: 'Tungrad Necklace',
    }, {
      id: 11630,
      mainCategoryId: '20',
      name: 'Laytenn\'s Power Stone',
    }, {
      id: 11631,
      mainCategoryId: '20',
      name: 'Necklace of Shultz the Gladiator',
    }, {
      id: 11653,
      mainCategoryId: '20',
      name: 'Deboreka Necklace',
    }, {
      id: 11662,
      mainCategoryId: '20',
      name: 'Revived River Necklace',
    }, {
      id: 11663,
      mainCategoryId: '20',
      name: 'Revived Lunar Necklace',
    }, {
      id: 11701,
      mainCategoryId: '20',
      name: 'Ruby Necklace',
    }, {
      id: 11702,
      mainCategoryId: '20',
      name: 'Resplendent Ruby Necklace',
    }, {
      id: 11703,
      mainCategoryId: '20',
      name: 'Blood Ruby Necklace',
    }, {
      id: 11704,
      mainCategoryId: '20',
      name: 'Dark Blood Ruby Necklace',
    }, {
      id: 11705,
      mainCategoryId: '20',
      name: 'Corrupt Ruby Necklace',
    }, {
      id: 11706,
      mainCategoryId: '20',
      name: 'Sapphire Necklace',
    }, {
      id: 11707,
      mainCategoryId: '20',
      name: 'Resplendent Sapphire Necklace',
    }, {
      id: 11708,
      mainCategoryId: '20',
      name: 'Ocean Sapphire Necklace',
    }, {
      id: 11709,
      mainCategoryId: '20',
      name: 'Translucent Ocean Sapphire Necklace',
    }, {
      id: 11710,
      mainCategoryId: '20',
      name: 'Sapphire Necklace of Storms',
    }, {
      id: 11711,
      mainCategoryId: '20',
      name: 'Topaz Necklace',
    }, {
      id: 11712,
      mainCategoryId: '20',
      name: 'Resplendent Topaz Necklace',
    }, {
      id: 11713,
      mainCategoryId: '20',
      name: 'Gold Topaz Necklace',
    }, {
      id: 11714,
      mainCategoryId: '20',
      name: 'Shining Gold Topaz Necklace',
    }, {
      id: 11715,
      mainCategoryId: '20',
      name: 'Topaz Necklace of Regeneration',
    }, {
      id: 11716,
      mainCategoryId: '20',
      name: 'Emerald Necklace',
    }, {
      id: 11717,
      mainCategoryId: '20',
      name: 'Resplendent Emerald Necklace',
    }, {
      id: 11718,
      mainCategoryId: '20',
      name: 'Forest Emerald Necklace',
    }, {
      id: 11719,
      mainCategoryId: '20',
      name: 'Placid Forest Emerald Necklace',
    }, {
      id: 11720,
      mainCategoryId: '20',
      name: 'Emerald Necklace of Tranquility',
    }, {
      id: 11721,
      mainCategoryId: '20',
      name: 'Diamond Necklace',
    }, {
      id: 11722,
      mainCategoryId: '20',
      name: 'Resplendent Diamond Necklace',
    }, {
      id: 11723,
      mainCategoryId: '20',
      name: 'Star Diamond Necklace',
    }, {
      id: 11724,
      mainCategoryId: '20',
      name: 'Starry Night Diamond Necklace',
    }, {
      id: 11725,
      mainCategoryId: '20',
      name: 'Diamond Necklace of Fortitude',
    }, {
      id: 11726,
      mainCategoryId: '20',
      name: 'Manos Ruby Necklace',
    }, {
      id: 11727,
      mainCategoryId: '20',
      name: 'Manos Sapphire Necklace',
    }, {
      id: 11728,
      mainCategoryId: '20',
      name: 'Manos Topaz Necklace',
    }, {
      id: 11729,
      mainCategoryId: '20',
      name: 'Manos Emerald Necklace',
    }, {
      id: 11730,
      mainCategoryId: '20',
      name: 'Manos Diamond Necklace',
    }, {
      id: 11801,
      mainCategoryId: '20',
      name: 'Yuria Earring',
    }, {
      id: 11802,
      mainCategoryId: '20',
      name: 'Bares Earring',
    }, {
      id: 11803,
      mainCategoryId: '20',
      name: 'Hesus Earring',
    }, {
      id: 11804,
      mainCategoryId: '20',
      name: 'Elisha Earring',
    }, {
      id: 11805,
      mainCategoryId: '20',
      name: 'Kalis Earring',
    }, {
      id: 11806,
      mainCategoryId: '20',
      name: 'Talis Earring',
    }, {
      id: 11807,
      mainCategoryId: '20',
      name: 'Token of Friendship',
    }, {
      id: 11808,
      mainCategoryId: '20',
      name: 'Witch\'s Earring',
    }, {
      id: 11810,
      mainCategoryId: '20',
      name: 'Mesto Earring',
    }, {
      id: 11811,
      mainCategoryId: '20',
      name: 'Ridell Earring',
    }, {
      id: 11815,
      mainCategoryId: '20',
      name: 'Blue Whale Molar Earring',
    }, {
      id: 11816,
      mainCategoryId: '20',
      name: 'Blue Coral Earring',
    }, {
      id: 11817,
      mainCategoryId: '20',
      name: 'Red Coral Earring',
    }, {
      id: 11827,
      mainCategoryId: '20',
      name: 'Fugitive Khalk\'s Earring',
    }, {
      id: 11828,
      mainCategoryId: '20',
      name: 'Tungrad Earring',
    }, {
      id: 11834,
      mainCategoryId: '20',
      name: 'Narc Ear Accessory',
    }, {
      id: 11853,
      mainCategoryId: '20',
      name: 'Black Distortion Earring',
    }, {
      id: 11855,
      mainCategoryId: '20',
      name: 'Dawn Earring',
    }, {
      id: 11856,
      mainCategoryId: '20',
      name: 'Ethereal Earring',
    }, {
      id: 11901,
      mainCategoryId: '20',
      name: 'Ruby Earrings',
    }, {
      id: 11902,
      mainCategoryId: '20',
      name: 'Resplendent Ruby Earrings',
    }, {
      id: 11903,
      mainCategoryId: '20',
      name: 'Blood Ruby Earrings',
    }, {
      id: 11904,
      mainCategoryId: '20',
      name: 'Dark Blood Ruby Earrings',
    }, {
      id: 11905,
      mainCategoryId: '20',
      name: 'Corrupt Ruby Earrings',
    }, {
      id: 11906,
      mainCategoryId: '20',
      name: 'Sapphire Earring',
    }, {
      id: 11907,
      mainCategoryId: '20',
      name: 'Resplendent Sapphire Earring',
    }, {
      id: 11908,
      mainCategoryId: '20',
      name: 'Ocean Sapphire Earring',
    }, {
      id: 11909,
      mainCategoryId: '20',
      name: 'Translucent Ocean Sapphire Earring',
    }, {
      id: 11910,
      mainCategoryId: '20',
      name: 'Sapphire Earring of Storms',
    }, {
      id: 11911,
      mainCategoryId: '20',
      name: 'Topaz Earrings',
    }, {
      id: 11912,
      mainCategoryId: '20',
      name: 'Resplendent Topaz Earrings',
    }, {
      id: 11913,
      mainCategoryId: '20',
      name: 'Gold Topaz Earrings',
    }, {
      id: 11914,
      mainCategoryId: '20',
      name: 'Shining Gold Topaz Earrings',
    }, {
      id: 11915,
      mainCategoryId: '20',
      name: 'Topaz Earrings of Regeneration',
    }, {
      id: 11926,
      mainCategoryId: '20',
      name: 'Manos Ruby Earring',
    }, {
      id: 11927,
      mainCategoryId: '20',
      name: 'Manos Sapphire Earring',
    }, {
      id: 11928,
      mainCategoryId: '20',
      name: 'Manos Topaz Earring',
    }, {
      id: 12001,
      mainCategoryId: '20',
      name: 'Yuria Ring',
    }, {
      id: 12002,
      mainCategoryId: '20',
      name: 'Bares Ring',
    }, {
      id: 12003,
      mainCategoryId: '20',
      name: 'Hesus Ring',
    }, {
      id: 12004,
      mainCategoryId: '20',
      name: 'Elisha Ring',
    }, {
      id: 12005,
      mainCategoryId: '20',
      name: 'Kalis Ring',
    }, {
      id: 12006,
      mainCategoryId: '20',
      name: 'Talis Ring',
    }, {
      id: 12007,
      mainCategoryId: '20',
      name: 'Mark of Shadow',
    }, {
      id: 12008,
      mainCategoryId: '20',
      name: 'Shrine Guardian Token',
    }, {
      id: 12010,
      mainCategoryId: '20',
      name: 'Ring of Good Deeds',
    }, {
      id: 12011,
      mainCategoryId: '20',
      name: 'Nert Ring',
    }, {
      id: 12012,
      mainCategoryId: '20',
      name: 'Outlaw\'s Ring',
    }, {
      id: 12017,
      mainCategoryId: '20',
      name: 'Blue Coral Ring',
    }, {
      id: 12018,
      mainCategoryId: '20',
      name: 'Red Coral Ring',
    }, {
      id: 12031,
      mainCategoryId: '20',
      name: 'Ring of Crescent Guardian',
    }, {
      id: 12032,
      mainCategoryId: '20',
      name: 'Ring of Cadry Guardian',
    }, {
      id: 12042,
      mainCategoryId: '20',
      name: 'Forest Ronaros Ring',
    }, {
      id: 12045,
      mainCategoryId: '20',
      name: 'Rainbow Coral Ring',
    }, {
      id: 12059,
      mainCategoryId: '20',
      name: 'Kagtum Submission Ring',
    }, {
      id: 12060,
      mainCategoryId: '20',
      name: 'Eye of the Ruins Ring',
    }, {
      id: 12061,
      mainCategoryId: '20',
      name: 'Tungrad Ring',
    }, {
      id: 12068,
      mainCategoryId: '20',
      name: 'Ominous Ring',
    }, {
      id: 12101,
      mainCategoryId: '20',
      name: 'Ruby Ring',
    }, {
      id: 12102,
      mainCategoryId: '20',
      name: 'Resplendent Ruby Ring',
    }, {
      id: 12103,
      mainCategoryId: '20',
      name: 'Blood Ruby Ring',
    }, {
      id: 12104,
      mainCategoryId: '20',
      name: 'Dark Blood Ruby Ring',
    }, {
      id: 12105,
      mainCategoryId: '20',
      name: 'Corrupt Ruby Ring',
    }, {
      id: 12111,
      mainCategoryId: '20',
      name: 'Topaz Ring',
    }, {
      id: 12112,
      mainCategoryId: '20',
      name: 'Resplendent Topaz Ring',
    }, {
      id: 12113,
      mainCategoryId: '20',
      name: 'Gold Topaz Ring',
    }, {
      id: 12114,
      mainCategoryId: '20',
      name: 'Shining Gold Topaz Ring',
    }, {
      id: 12115,
      mainCategoryId: '20',
      name: 'Topaz Ring of Regeneration',
    }, {
      id: 12126,
      mainCategoryId: '20',
      name: 'Manos Ruby Ring',
    }, {
      id: 12128,
      mainCategoryId: '20',
      name: 'Manos Topaz Ring',
    }, {
      id: 12201,
      mainCategoryId: '20',
      name: 'Yuria Belt',
    }, {
      id: 12202,
      mainCategoryId: '20',
      name: 'Bares Belt',
    }, {
      id: 12203,
      mainCategoryId: '20',
      name: 'Hesus Belt',
    }, {
      id: 12204,
      mainCategoryId: '20',
      name: 'Elisha Belt',
    }, {
      id: 12205,
      mainCategoryId: '20',
      name: 'Kalis Belt',
    }, {
      id: 12206,
      mainCategoryId: '20',
      name: 'Talis Belt',
    }, {
      id: 12208,
      mainCategoryId: '20',
      name: 'Rhutum Elite Belt',
    }, {
      id: 12210,
      mainCategoryId: '20',
      name: 'Tree Spirit Belt',
    }, {
      id: 12211,
      mainCategoryId: '20',
      name: 'Belt of Shultz the Gladiator',
    }, {
      id: 12212,
      mainCategoryId: '20',
      name: 'Gartner Belt',
    }, {
      id: 12220,
      mainCategoryId: '20',
      name: 'Ancient Weapon Core',
    }, {
      id: 12229,
      mainCategoryId: '20',
      name: 'Centaurus Belt',
    }, {
      id: 12230,
      mainCategoryId: '20',
      name: 'Basilisk\'s Belt',
    }, {
      id: 12236,
      mainCategoryId: '20',
      name: 'Valtarra Eclipsed Belt',
    }, {
      id: 12237,
      mainCategoryId: '20',
      name: 'Tungrad Belt',
    }, {
      id: 12251,
      mainCategoryId: '20',
      name: 'Orkinrad\'s Belt',
    }, {
      id: 12257,
      mainCategoryId: '20',
      name: 'Turo\'s Belt',
    }, {
      id: 12301,
      mainCategoryId: '20',
      name: 'Coral Belt',
    }, {
      id: 12302,
      mainCategoryId: '20',
      name: 'Polished Coral Belt',
    }, {
      id: 12303,
      mainCategoryId: '20',
      name: 'Red Coral Belt',
    }, {
      id: 12304,
      mainCategoryId: '20',
      name: 'Brilliant Red Coral Belt',
    }, {
      id: 12305,
      mainCategoryId: '20',
      name: 'Twilight Red Coral Belt',
    }, {
      id: 12308,
      mainCategoryId: '20',
      name: 'Blue Coral Belt',
    }, {
      id: 12309,
      mainCategoryId: '20',
      name: 'Brilliant Blue Coral Belt',
    }, {
      id: 12310,
      mainCategoryId: '20',
      name: 'Daybreak Blue Coral Belt',
    }, {
      id: 12313,
      mainCategoryId: '20',
      name: 'Green Coral Belt',
    }, {
      id: 12314,
      mainCategoryId: '20',
      name: 'Brilliant Green Coral Belt',
    }, {
      id: 12315,
      mainCategoryId: '20',
      name: 'Prairie Green Coral Belt',
    }, {
      id: 12318,
      mainCategoryId: '20',
      name: 'Golden Coral Belt',
    }, {
      id: 12319,
      mainCategoryId: '20',
      name: 'Brilliant Golden Coral Belt',
    }, {
      id: 12320,
      mainCategoryId: '20',
      name: 'Golden Sun Coral Belt',
    }, {
      id: 12323,
      mainCategoryId: '20',
      name: 'White Coral Belt',
    }, {
      id: 12324,
      mainCategoryId: '20',
      name: 'Brilliant White Coral Belt',
    }, {
      id: 12325,
      mainCategoryId: '20',
      name: 'Breezy White Coral Belt',
    }, {
      id: 12326,
      mainCategoryId: '20',
      name: 'Manos Red Coral Belt',
    }, {
      id: 12327,
      mainCategoryId: '20',
      name: 'Manos Blue Coral Belt',
    }, {
      id: 12328,
      mainCategoryId: '20',
      name: 'Manos Green Coral Belt',
    }, {
      id: 12329,
      mainCategoryId: '20',
      name: 'Manos Golden Coral Belt',
    }, {
      id: 12330,
      mainCategoryId: '20',
      name: 'Manos White Coral Belt',
    }, {
      id: 12501,
      mainCategoryId: '15',
      name: '[Warrior] Serendian Smith Garb',
    }, {
      id: 12502,
      mainCategoryId: '15',
      name: '[Berserker] Serendian Smith Garb',
    }, {
      id: 12503,
      mainCategoryId: '15',
      name: '[Sorceress] Terrmian Casual Wear',
    }, {
      id: 12504,
      mainCategoryId: '15',
      name: '[Tamer] Terrmian Casual Wear',
    }, {
      id: 12505,
      mainCategoryId: '15',
      name: '[Ranger] Terrmian Casual Wear',
    }, {
      id: 12506,
      mainCategoryId: '15',
      name: '[Musa] Serendian Smith Garb',
    }, {
      id: 12507,
      mainCategoryId: '15',
      name: '[Valkyrie] Terrmian Casual Wear',
    }, {
      id: 12508,
      mainCategoryId: '15',
      name: '[Maehwa] Terrmian Casual Wear',
    }, {
      id: 12509,
      mainCategoryId: '15',
      name: '[Wizard] Serendian Smith Garb',
    }, {
      id: 12510,
      mainCategoryId: '15',
      name: '[Witch] Terrmian Casual Wear',
    }, {
      id: 12511,
      mainCategoryId: '15',
      name: '[Kunoichi] Terrmian Casual Wear',
    }, {
      id: 12512,
      mainCategoryId: '15',
      name: '[Ninja] Serendian Smith Garb',
    }, {
      id: 12525,
      mainCategoryId: '15',
      name: '[Warrior] Serendian Formal Suit',
    }, {
      id: 12526,
      mainCategoryId: '15',
      name: '[Berserker] Serendian Formal Suit',
    }, {
      id: 12530,
      mainCategoryId: '15',
      name: '[Musa] Serendian Formal Suit',
    }, {
      id: 12533,
      mainCategoryId: '15',
      name: '[Wizard] Serendian Formal Suit',
    }, {
      id: 12536,
      mainCategoryId: '15',
      name: '[Ninja] Serendian Formal Suit',
    }, {
      id: 12562,
      mainCategoryId: '15',
      name: '[Dark Knight] Serendian Smith Garb',
    }, {
      id: 12563,
      mainCategoryId: '15',
      name: '[Dark Knight] Orwen\'s Travel Wear',
    }, {
      id: 12564,
      mainCategoryId: '15',
      name: '[Dark Knight] Jarette\'s Armor',
    }, {
      id: 12565,
      mainCategoryId: '15',
      name: '[Dark Knight] Delphe Knight Armor',
    }, {
      id: 12567,
      mainCategoryId: '15',
      name: '[Dark Knight] Terrmian Casual Wear',
    }, {
      id: 12574,
      mainCategoryId: '15',
      name: '[Sorceress] Ahon Kirus\'s Armor',
    }, {
      id: 12575,
      mainCategoryId: '15',
      name: '[Ranger] Ahon Kirus\'s Armor',
    }, {
      id: 12576,
      mainCategoryId: '15',
      name: '[Tamer] Ahon Kirus\'s Armor',
    }, {
      id: 12577,
      mainCategoryId: '15',
      name: '[Valkyrie] Ahon Kirus\'s Armor',
    }, {
      id: 12578,
      mainCategoryId: '15',
      name: '[Witch] Ahon Kirus\'s Armor',
    }, {
      id: 12579,
      mainCategoryId: '15',
      name: '[Kunoichi] Ahon Kirus\'s Armor',
    }, {
      id: 12580,
      mainCategoryId: '15',
      name: '[Maehwa] Ahon Kirus\'s Armor',
    }, {
      id: 12581,
      mainCategoryId: '15',
      name: '[Dark Knight] Ahon Kirus\'s Armor',
    }, {
      id: 12590,
      mainCategoryId: '15',
      name: '[Sorceress] Shroud Knight Armor',
    }, {
      id: 12591,
      mainCategoryId: '15',
      name: '[Ranger] Shroud Knight Armor',
    }, {
      id: 12592,
      mainCategoryId: '15',
      name: '[Tamer] Shroud Knight Armor',
    }, {
      id: 12593,
      mainCategoryId: '15',
      name: '[Valkyrie] Shroud Knight Armor',
    }, {
      id: 12594,
      mainCategoryId: '15',
      name: '[Witch] Shroud Knight Armor',
    }, {
      id: 12595,
      mainCategoryId: '15',
      name: '[Kunoichi] Shroud Knight Armor',
    }, {
      id: 12596,
      mainCategoryId: '15',
      name: '[Maehwa] Shroud Knight Armor',
    }, {
      id: 12597,
      mainCategoryId: '15',
      name: '[Dark Knight] Shroud Knight Armor',
    }, {
      id: 12598,
      mainCategoryId: '15',
      name: '[Warrior] Shroud Knight Armor',
    }, {
      id: 12599,
      mainCategoryId: '15',
      name: '[Berserker] Shroud Knight Armor',
    }, {
      id: 12600,
      mainCategoryId: '15',
      name: '[Musa] Shroud Knight Armor',
    }, {
      id: 12601,
      mainCategoryId: '15',
      name: '[Wizard] Shroud Knight Armor',
    }, {
      id: 12602,
      mainCategoryId: '15',
      name: '[Ninja] Shroud Knight Armor',
    }, {
      id: 12619,
      mainCategoryId: '15',
      name: '[Warrior] Valencian Travel Wear',
    }, {
      id: 12620,
      mainCategoryId: '15',
      name: '[Berserker] Valencian Travel Wear',
    }, {
      id: 12621,
      mainCategoryId: '15',
      name: '[Musa] Valencian Travel Wear',
    }, {
      id: 12622,
      mainCategoryId: '15',
      name: '[Wizard] Valencian Travel Wear',
    }, {
      id: 12623,
      mainCategoryId: '15',
      name: '[Ninja] Valencian Travel Wear',
    }, {
      id: 12629,
      mainCategoryId: '15',
      name: '[Sorceress] Black Leopard Armor',
    }, {
      id: 12630,
      mainCategoryId: '15',
      name: '[Ranger] Black Leopard Armor',
    }, {
      id: 12631,
      mainCategoryId: '15',
      name: '[Tamer] Black Leopard Armor',
    }, {
      id: 12632,
      mainCategoryId: '15',
      name: '[Valkyrie] Black Leopard Armor',
    }, {
      id: 12633,
      mainCategoryId: '15',
      name: '[Witch] Black Leopard Armor',
    }, {
      id: 12634,
      mainCategoryId: '15',
      name: '[Kunoichi] Black Leopard Armor',
    }, {
      id: 12635,
      mainCategoryId: '15',
      name: '[Maehwa] Black Leopard Armor',
    }, {
      id: 12636,
      mainCategoryId: '15',
      name: '[Dark Knight] Black Leopard Armor',
    }, {
      id: 12646,
      mainCategoryId: '15',
      name: '[Striker] Calpheon Noble Suit',
    }, {
      id: 12647,
      mainCategoryId: '15',
      name: '[Striker] Garnier Troupe Garb',
    }, {
      id: 12648,
      mainCategoryId: '15',
      name: '[Striker] Delphe Knight Armor',
    }, {
      id: 12649,
      mainCategoryId: '15',
      name: '[Striker] Edan\'s Travel Wear',
    }, {
      id: 12650,
      mainCategoryId: '15',
      name: '[Striker] Jordine\'s Casual Wear',
    }, {
      id: 12651,
      mainCategoryId: '15',
      name: '[Striker] Serendian Soldier Armor',
    }, {
      id: 12652,
      mainCategoryId: '15',
      name: '[Striker] Serendian Formal Suit',
    }, {
      id: 12653,
      mainCategoryId: '15',
      name: '[Striker] Valencian Travel Wear',
    }, {
      id: 12654,
      mainCategoryId: '15',
      name: '[Striker] Shroud Knight Armor',
    }, {
      id: 12664,
      mainCategoryId: '15',
      name: '[Striker] Serendian Smith Garb',
    }, {
      id: 12667,
      mainCategoryId: '15',
      name: '[Mystic] Calpheon Noble Dress',
    }, {
      id: 12668,
      mainCategoryId: '15',
      name: '[Mystic] Garnier Troupe Garb',
    }, {
      id: 12669,
      mainCategoryId: '15',
      name: '[Mystic] Serendian Smith Garb',
    }, {
      id: 12671,
      mainCategoryId: '15',
      name: '[Mystic] Terrmian Casual Wear',
    }, {
      id: 12672,
      mainCategoryId: '15',
      name: '[Mystic] Delphe Knight Armor',
    }, {
      id: 12673,
      mainCategoryId: '15',
      name: '[Mystic] Orwen\'s Travel Wear',
    }, {
      id: 12674,
      mainCategoryId: '15',
      name: '[Mystic] Jarette\'s Armor',
    }, {
      id: 12675,
      mainCategoryId: '15',
      name: '[Mystic] Ahon Kirus\'s Armor',
    }, {
      id: 12676,
      mainCategoryId: '15',
      name: '[Mystic] Black Leopard Armor',
    }, {
      id: 12677,
      mainCategoryId: '15',
      name: '[Mystic] Shroud Knight Armor',
    }, {
      id: 12697,
      mainCategoryId: '15',
      name: '[Archer] Calpheon Noble Suit',
    }, {
      id: 12698,
      mainCategoryId: '15',
      name: '[Archer] Garnier Troupe Garb',
    }, {
      id: 12699,
      mainCategoryId: '15',
      name: '[Archer] Delphe Knight Armor',
    }, {
      id: 12700,
      mainCategoryId: '15',
      name: '[Archer] Edan\'s Travel Wear',
    }, {
      id: 12701,
      mainCategoryId: '15',
      name: '[Archer] Jordine\'s Casual Wear',
    }, {
      id: 12702,
      mainCategoryId: '15',
      name: '[Archer] Serendian Soldier Armor',
    }, {
      id: 12703,
      mainCategoryId: '15',
      name: '[Archer] Serendian Formal Suit',
    }, {
      id: 12704,
      mainCategoryId: '15',
      name: '[Archer] Valencian Travel Wear',
    }, {
      id: 12705,
      mainCategoryId: '15',
      name: '[Archer] Shroud Knight Armor',
    }, {
      id: 12715,
      mainCategoryId: '15',
      name: '[Archer] Serendian Smith Garb',
    }, {
      id: 12717,
      mainCategoryId: '15',
      name: '[Lahn] Calpheon Noble Dress',
    }, {
      id: 12718,
      mainCategoryId: '15',
      name: '[Lahn] Garnier Troupe Garb',
    }, {
      id: 12719,
      mainCategoryId: '15',
      name: '[Lahn] Serendian Smith Garb',
    }, {
      id: 12721,
      mainCategoryId: '15',
      name: '[Lahn] Terrmian Casual Wear',
    }, {
      id: 12722,
      mainCategoryId: '15',
      name: '[Lahn] Delphe Knight Armor',
    }, {
      id: 12723,
      mainCategoryId: '15',
      name: '[Lahn] Orwen\'s Travel Wear',
    }, {
      id: 12724,
      mainCategoryId: '15',
      name: '[Lahn] Jarette\'s Armor',
    }, {
      id: 12725,
      mainCategoryId: '15',
      name: '[Lahn] Ahon Kirus\'s Armor',
    }, {
      id: 12726,
      mainCategoryId: '15',
      name: '[Lahn] Black Leopard Armor',
    }, {
      id: 12727,
      mainCategoryId: '15',
      name: '[Lahn] Shroud Knight Armor',
    }, {
      id: 12734,
      mainCategoryId: '15',
      name: '[Guardian] Calpheon Noble Dress',
    }, {
      id: 12735,
      mainCategoryId: '15',
      name: '[Guardian] Garnier Troupe Garb',
    }, {
      id: 12736,
      mainCategoryId: '15',
      name: '[Guardian] Serendian Smith Garb',
    }, {
      id: 12738,
      mainCategoryId: '15',
      name: '[Guardian] Terrmian Casual Wear',
    }, {
      id: 12739,
      mainCategoryId: '15',
      name: '[Guardian] Delphe Knight Armor',
    }, {
      id: 12740,
      mainCategoryId: '15',
      name: '[Guardian] Orwen\'s Travel Wear',
    }, {
      id: 12741,
      mainCategoryId: '15',
      name: '[Guardian] Jarette\'s Armor',
    }, {
      id: 12742,
      mainCategoryId: '15',
      name: '[Guardian] Ahon Kirus\'s Armor',
    }, {
      id: 12743,
      mainCategoryId: '15',
      name: '[Guardian] Black Leopard Armor',
    }, {
      id: 12744,
      mainCategoryId: '15',
      name: '[Guardian] Shroud Knight Armor',
    }, {
      id: 12757,
      mainCategoryId: '15',
      name: '[Hashashin] Calpheon Noble Suit',
    }, {
      id: 12758,
      mainCategoryId: '15',
      name: '[Hashashin] Garnier Troupe Garb',
    }, {
      id: 12759,
      mainCategoryId: '15',
      name: '[Hashashin] Delphe Knight Armor',
    }, {
      id: 12760,
      mainCategoryId: '15',
      name: '[Hashashin] Edan\'s Travel Wear',
    }, {
      id: 12761,
      mainCategoryId: '15',
      name: '[Hashashin] Jordine\'s Casual Wear',
    }, {
      id: 12762,
      mainCategoryId: '15',
      name: '[Hashashin] Serendian Soldier Armor',
    }, {
      id: 12763,
      mainCategoryId: '15',
      name: '[Hashashin] Serendian Formal Suit',
    }, {
      id: 12764,
      mainCategoryId: '15',
      name: '[Hashashin] Valencian Travel Wear',
    }, {
      id: 12765,
      mainCategoryId: '15',
      name: '[Hashashin] Shroud Knights Armor',
    }, {
      id: 12775,
      mainCategoryId: '15',
      name: '[Hashashin] Serendian Smith Garb',
    }, {
      id: 12778,
      mainCategoryId: '15',
      name: '[Nova] Calpheon Noble Dress',
    }, {
      id: 12779,
      mainCategoryId: '15',
      name: '[Nova] Garnier Troupe Garb',
    }, {
      id: 12780,
      mainCategoryId: '15',
      name: '[Nova] Serendian Smith Garb',
    }, {
      id: 12782,
      mainCategoryId: '15',
      name: '[Nova] Terrmian Casual Wear',
    }, {
      id: 12783,
      mainCategoryId: '15',
      name: '[Nova] Delphe Knight Armor',
    }, {
      id: 12784,
      mainCategoryId: '15',
      name: '[Nova] Orwen\'s Travel Wear',
    }, {
      id: 12785,
      mainCategoryId: '15',
      name: '[Nova] Jarette\'s Armor',
    }, {
      id: 12786,
      mainCategoryId: '15',
      name: '[Nova] Ahon Kirus\'s Armor',
    }, {
      id: 12787,
      mainCategoryId: '15',
      name: '[Nova] Black Leopard Armor',
    }, {
      id: 12788,
      mainCategoryId: '15',
      name: '[Nova] Shroud Knight Armor',
    }, {
      id: 12831,
      mainCategoryId: '40',
      name: 'Crio\'s Fishing Chair',
    }, {
      id: 12848,
      mainCategoryId: '15',
      name: '[Sage] Calpheon Noble Suit',
    }, {
      id: 12849,
      mainCategoryId: '15',
      name: '[Sage] Garnier Troupe Garb',
    }, {
      id: 12850,
      mainCategoryId: '15',
      name: '[Sage] Delphe Knight Armor',
    }, {
      id: 12851,
      mainCategoryId: '15',
      name: '[Sage] Edan\'s Travel Wear',
    }, {
      id: 12852,
      mainCategoryId: '15',
      name: '[Sage] Jordine\'s Casual Wear',
    }, {
      id: 12853,
      mainCategoryId: '15',
      name: '[Sage] Serendian Soldier Armor',
    }, {
      id: 12854,
      mainCategoryId: '15',
      name: '[Sage] Serendian Formal Suit',
    }, {
      id: 12855,
      mainCategoryId: '15',
      name: '[Sage] Valencian Travel Wear',
    }, {
      id: 12856,
      mainCategoryId: '15',
      name: '[Sage] The Shroud Knights Armor',
    }, {
      id: 12866,
      mainCategoryId: '15',
      name: '[Sage] Serendian Smith Garb',
    }, {
      id: 13003,
      mainCategoryId: '5',
      name: 'Incense Trinket',
    }, {
      id: 13004,
      mainCategoryId: '5',
      name: 'Needle Trinket',
    }, {
      id: 13005,
      mainCategoryId: '5',
      name: 'Blade Trinket',
    }, {
      id: 13024,
      mainCategoryId: '5',
      name: 'Krea Trinket',
    }, {
      id: 13025,
      mainCategoryId: '5',
      name: 'Rosar Trinket',
    }, {
      id: 13038,
      mainCategoryId: '5',
      name: 'Nouver Trinket',
    }, {
      id: 13040,
      mainCategoryId: '5',
      name: 'Kutum Trinket',
    }, {
      id: 13103,
      mainCategoryId: '5',
      name: 'Black Warrior Horn Bow',
    }, {
      id: 13104,
      mainCategoryId: '5',
      name: 'White Horn Bow',
    }, {
      id: 13105,
      mainCategoryId: '5',
      name: 'White Warrior Horn Bow',
    }, {
      id: 13124,
      mainCategoryId: '5',
      name: 'Krea Horn Bow',
    }, {
      id: 13125,
      mainCategoryId: '5',
      name: 'Rosar Horn Bow',
    }, {
      id: 13138,
      mainCategoryId: '5',
      name: 'Nouver Horn Bow',
    }, {
      id: 13140,
      mainCategoryId: '5',
      name: 'Kutum Horn Bow',
    }, {
      id: 13203,
      mainCategoryId: '1',
      name: 'Elsh Shortsword',
    }, {
      id: 13205,
      mainCategoryId: '1',
      name: 'Azwell Shortsword',
    }, {
      id: 13206,
      mainCategoryId: '1',
      name: 'Ain Shortsword',
    }, {
      id: 13207,
      mainCategoryId: '1',
      name: 'Seleth Shortsword',
    }, {
      id: 13209,
      mainCategoryId: '1',
      name: 'Liverto Shortsword',
    }, {
      id: 13210,
      mainCategoryId: '1',
      name: 'Kzarka Shortsword',
    }, {
      id: 13212,
      mainCategoryId: '1',
      name: 'Kalis Shortsword',
    }, {
      id: 13213,
      mainCategoryId: '1',
      name: 'Bares Shortsword',
    }, {
      id: 13214,
      mainCategoryId: '1',
      name: 'Yuria Shortsword',
    }, {
      id: 13256,
      mainCategoryId: '1',
      name: 'Krea Shortsword',
    }, {
      id: 13257,
      mainCategoryId: '1',
      name: 'Rosar Shortsword',
    }, {
      id: 13271,
      mainCategoryId: '1',
      name: 'Styd Shortsword',
    }, {
      id: 13272,
      mainCategoryId: '1',
      name: 'Ultimate Styd Shortsword',
    }, {
      id: 13286,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Shortsword',
    }, {
      id: 13303,
      mainCategoryId: '1',
      name: 'Elsh Blade',
    }, {
      id: 13305,
      mainCategoryId: '1',
      name: 'Azwell Blade',
    }, {
      id: 13306,
      mainCategoryId: '1',
      name: 'Ain Blade',
    }, {
      id: 13307,
      mainCategoryId: '1',
      name: 'Seleth Blade',
    }, {
      id: 13309,
      mainCategoryId: '1',
      name: 'Liverto Blade',
    }, {
      id: 13310,
      mainCategoryId: '1',
      name: 'Kzarka Blade',
    }, {
      id: 13312,
      mainCategoryId: '1',
      name: 'Kalis Blade',
    }, {
      id: 13313,
      mainCategoryId: '1',
      name: 'Bares Blade',
    }, {
      id: 13314,
      mainCategoryId: '1',
      name: 'Yuria Blade',
    }, {
      id: 13356,
      mainCategoryId: '1',
      name: 'Krea Blade',
    }, {
      id: 13357,
      mainCategoryId: '1',
      name: 'Rosar Blade',
    }, {
      id: 13371,
      mainCategoryId: '1',
      name: 'Styd Blade',
    }, {
      id: 13372,
      mainCategoryId: '1',
      name: 'Ultimate Styd Blade',
    }, {
      id: 13386,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Blade',
    }, {
      id: 13403,
      mainCategoryId: '1',
      name: 'Elsh Crescent Pendulum',
    }, {
      id: 13405,
      mainCategoryId: '1',
      name: 'Azwell Crescent Pendulum',
    }, {
      id: 13406,
      mainCategoryId: '1',
      name: 'Ain Crescent Pendulum',
    }, {
      id: 13407,
      mainCategoryId: '1',
      name: 'Seleth Crescent Pendulum',
    }, {
      id: 13409,
      mainCategoryId: '1',
      name: 'Liverto Crescent Pendulum',
    }, {
      id: 13410,
      mainCategoryId: '1',
      name: 'Kzarka Crescent Pendulum',
    }, {
      id: 13412,
      mainCategoryId: '1',
      name: 'Kalis Crescent Pendulum',
    }, {
      id: 13413,
      mainCategoryId: '1',
      name: 'Bares Crescent Pendulum',
    }, {
      id: 13414,
      mainCategoryId: '1',
      name: 'Yuria Crescent Pendulum',
    }, {
      id: 13420,
      mainCategoryId: '1',
      name: 'Krea Crescent Pendulum',
    }, {
      id: 13421,
      mainCategoryId: '1',
      name: 'Rosar Crescent Pendulum',
    }, {
      id: 13422,
      mainCategoryId: '1',
      name: 'Styd Crescent Pendulum',
    }, {
      id: 13423,
      mainCategoryId: '1',
      name: 'Ultimate Styd Crescent Pendulum',
    }, {
      id: 13487,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Crescent Pendulum',
    }, {
      id: 13503,
      mainCategoryId: '5',
      name: 'Ascending Noble Sword',
    }, {
      id: 13504,
      mainCategoryId: '5',
      name: 'Crow Noble Sword',
    }, {
      id: 13505,
      mainCategoryId: '5',
      name: 'Mistress Noble Sword',
    }, {
      id: 13524,
      mainCategoryId: '5',
      name: 'Krea Noble Sword',
    }, {
      id: 13525,
      mainCategoryId: '5',
      name: 'Rosar Noble Sword',
    }, {
      id: 13538,
      mainCategoryId: '5',
      name: 'Nouver Noble Sword',
    }, {
      id: 13540,
      mainCategoryId: '5',
      name: 'Kutum Noble Sword',
    }, {
      id: 13703,
      mainCategoryId: '1',
      name: 'Elsh Crossbow',
    }, {
      id: 13705,
      mainCategoryId: '1',
      name: 'Azwell Crossbow',
    }, {
      id: 13706,
      mainCategoryId: '1',
      name: 'Ain Crossbow',
    }, {
      id: 13707,
      mainCategoryId: '1',
      name: 'Seleth Crossbow',
    }, {
      id: 13709,
      mainCategoryId: '1',
      name: 'Liverto Crossbow',
    }, {
      id: 13710,
      mainCategoryId: '1',
      name: 'Kzarka Crossbow',
    }, {
      id: 13712,
      mainCategoryId: '1',
      name: 'Kalis Crossbow',
    }, {
      id: 13713,
      mainCategoryId: '1',
      name: 'Bares Crossbow',
    }, {
      id: 13714,
      mainCategoryId: '1',
      name: 'Yuria Crossbow',
    }, {
      id: 13756,
      mainCategoryId: '1',
      name: 'Krea Crossbow',
    }, {
      id: 13757,
      mainCategoryId: '1',
      name: 'Rosar Crossbow',
    }, {
      id: 13771,
      mainCategoryId: '1',
      name: 'Styd Crossbow',
    }, {
      id: 13772,
      mainCategoryId: '1',
      name: 'Ultimate Styd Crossbow',
    }, {
      id: 13786,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Crossbow',
    }, {
      id: 13803,
      mainCategoryId: '5',
      name: 'Bhatu Ra\'ghon',
    }, {
      id: 13804,
      mainCategoryId: '5',
      name: 'Ganatte Ra\'ghon',
    }, {
      id: 13805,
      mainCategoryId: '5',
      name: 'Sharos Ra\'ghon',
    }, {
      id: 13824,
      mainCategoryId: '5',
      name: 'Krea Ra\'ghon',
    }, {
      id: 13825,
      mainCategoryId: '5',
      name: 'Rosar Ra\'ghon',
    }, {
      id: 13838,
      mainCategoryId: '5',
      name: 'Nouver Ra\'ghon',
    }, {
      id: 13840,
      mainCategoryId: '5',
      name: 'Kutum Ra\'ghon',
    }, {
      id: 13901,
      mainCategoryId: '10',
      name: 'Greatbow of Fate',
    }, {
      id: 13902,
      mainCategoryId: '10',
      name: 'Saiphir Greatbow',
    }, {
      id: 13903,
      mainCategoryId: '10',
      name: 'Dandelion Greatbow',
    }, {
      id: 14019,
      mainCategoryId: '15',
      name: 'Silver Embroidered Cook\'s Clothes',
    }, {
      id: 14020,
      mainCategoryId: '15',
      name: 'Silver Embroidered Fisher\'s Clothes',
    }, {
      id: 14021,
      mainCategoryId: '15',
      name: 'Silver Embroidered Trader\'s Clothes',
    }, {
      id: 14022,
      mainCategoryId: '15',
      name: 'Silver Embroidered Gatherer\'s Clothes',
    }, {
      id: 14023,
      mainCategoryId: '15',
      name: 'Silver Embroidered Trainer\'s Clothes',
    }, {
      id: 14025,
      mainCategoryId: '15',
      name: 'Silver Embroidered Alchemist\'s Clothes',
    }, {
      id: 14026,
      mainCategoryId: '15',
      name: 'Silver Embroidered Craftsman\'s Clothes',
    }, {
      id: 14027,
      mainCategoryId: '15',
      name: 'Fine Horse Trainer\'s Clothes',
    }, {
      id: 14028,
      mainCategoryId: '15',
      name: 'Silver Embroidered Farmer\'s Clothes',
    }, {
      id: 14029,
      mainCategoryId: '15',
      name: 'Silver Embroidered Sailor\'s Clothes',
    }, {
      id: 14101,
      mainCategoryId: '15',
      name: 'Steel Taritas Helmet',
    }, {
      id: 14102,
      mainCategoryId: '15',
      name: 'Steel Taritas Armor',
    }, {
      id: 14103,
      mainCategoryId: '15',
      name: 'Steel Taritas Gloves',
    }, {
      id: 14104,
      mainCategoryId: '15',
      name: 'Steel Taritas Shoes',
    }, {
      id: 14201,
      mainCategoryId: '15',
      name: '[Warrior] Calpheon Noble Suit',
    }, {
      id: 14202,
      mainCategoryId: '15',
      name: '[Berserker] Calpheon Noble Suit',
    }, {
      id: 14203,
      mainCategoryId: '15',
      name: '[Sorceress] Calpheon Noble Dress',
    }, {
      id: 14204,
      mainCategoryId: '15',
      name: '[Tamer] Calpheon Noble Dress',
    }, {
      id: 14205,
      mainCategoryId: '15',
      name: '[Ranger] Calpheon Noble Dress',
    }, {
      id: 14206,
      mainCategoryId: '15',
      name: '[Musa] Calpheon Noble Suit',
    }, {
      id: 14207,
      mainCategoryId: '15',
      name: '[Valkyrie] Calpheon Noble Dress',
    }, {
      id: 14208,
      mainCategoryId: '15',
      name: '[Maehwa] Calpheon Noble Dress',
    }, {
      id: 14211,
      mainCategoryId: '15',
      name: '[Warrior] Garnier Troupe Garb',
    }, {
      id: 14212,
      mainCategoryId: '15',
      name: '[Berserker] Garnier Troupe Garb',
    }, {
      id: 14213,
      mainCategoryId: '15',
      name: '[Sorceress] Garnier Troupe Garb',
    }, {
      id: 14214,
      mainCategoryId: '15',
      name: '[Tamer] Garnier Troupe Garb',
    }, {
      id: 14215,
      mainCategoryId: '15',
      name: '[Ranger] Garnier Troupe Garb',
    }, {
      id: 14216,
      mainCategoryId: '15',
      name: '[Musa] Garnier Troupe Garb',
    }, {
      id: 14217,
      mainCategoryId: '15',
      name: '[Valkyrie] Garnier Troupe Garb',
    }, {
      id: 14218,
      mainCategoryId: '15',
      name: '[Maehwa] Garnier Troupe Garb',
    }, {
      id: 14219,
      mainCategoryId: '15',
      name: '[Wizard] Calpheon Noble Suit',
    }, {
      id: 14220,
      mainCategoryId: '15',
      name: '[Witch] Calpheon Noble Dress',
    }, {
      id: 14221,
      mainCategoryId: '15',
      name: '[Kunoichi] Calpheon Noble Dress',
    }, {
      id: 14222,
      mainCategoryId: '15',
      name: '[Kunoichi] Garnier Troupe Garb',
    }, {
      id: 14223,
      mainCategoryId: '15',
      name: '[Ninja] Calpheon Noble Suit',
    }, {
      id: 14284,
      mainCategoryId: '15',
      name: '[Warrior] Serendian Soldier Armor',
    }, {
      id: 14285,
      mainCategoryId: '15',
      name: '[Berserker] Serendian Soldier Armor',
    }, {
      id: 14286,
      mainCategoryId: '15',
      name: '[Sorceress] Serendian Smith Garb',
    }, {
      id: 14287,
      mainCategoryId: '15',
      name: '[Tamer] Serendian Smith Garb',
    }, {
      id: 14288,
      mainCategoryId: '15',
      name: '[Ranger] Serendian Smith Garb',
    }, {
      id: 14289,
      mainCategoryId: '15',
      name: '[Musa] Serendian Soldier Armor',
    }, {
      id: 14290,
      mainCategoryId: '15',
      name: '[Valkyrie] Serendian Smith Garb',
    }, {
      id: 14291,
      mainCategoryId: '15',
      name: '[Maehwa] Serendian Smith Garb',
    }, {
      id: 14292,
      mainCategoryId: '15',
      name: '[Wizard] Serendian Soldier Armor',
    }, {
      id: 14293,
      mainCategoryId: '15',
      name: '[Witch] Serendian Smith Garb',
    }, {
      id: 14294,
      mainCategoryId: '15',
      name: '[Kunoichi] Serendian Smith Garb',
    }, {
      id: 14295,
      mainCategoryId: '15',
      name: '[Ninja] Serendian Soldier Armor',
    }, {
      id: 14296,
      mainCategoryId: '15',
      name: '[Warrior] Jordine\'s Casual Wear',
    }, {
      id: 14297,
      mainCategoryId: '15',
      name: '[Berserker] Jordine\'s Casual Wear',
    }, {
      id: 14298,
      mainCategoryId: '15',
      name: '[Sorceress] Orwen\'s Travel Wear',
    }, {
      id: 14299,
      mainCategoryId: '15',
      name: '[Tamer] Orwen\'s Travel Wear',
    }, {
      id: 14300,
      mainCategoryId: '15',
      name: '[Ranger] Orwen\'s Travel Wear',
    }, {
      id: 14339,
      mainCategoryId: '15',
      name: '[Wizard] Garnier Troupe Garb',
    }, {
      id: 14340,
      mainCategoryId: '15',
      name: '[Witch] Garnier Troupe Garb',
    }, {
      id: 14341,
      mainCategoryId: '15',
      name: '[Ninja] Garnier Troupe Garb',
    }, {
      id: 14345,
      mainCategoryId: '15',
      name: '[Dark Knight] Calpheon Noble Dress',
    }, {
      id: 14346,
      mainCategoryId: '15',
      name: '[Dark Knight] Garnier Troupe Garb',
    }, {
      id: 14403,
      mainCategoryId: '1',
      name: 'Elsh Staff',
    }, {
      id: 14405,
      mainCategoryId: '1',
      name: 'Azwell Staff',
    }, {
      id: 14406,
      mainCategoryId: '1',
      name: 'Ain Staff',
    }, {
      id: 14407,
      mainCategoryId: '1',
      name: 'Seleth Staff',
    }, {
      id: 14409,
      mainCategoryId: '1',
      name: 'Liverto Staff',
    }, {
      id: 14410,
      mainCategoryId: '1',
      name: 'Kzarka Staff',
    }, {
      id: 14412,
      mainCategoryId: '1',
      name: 'Kalis Staff',
    }, {
      id: 14413,
      mainCategoryId: '1',
      name: 'Bares Staff',
    }, {
      id: 14414,
      mainCategoryId: '1',
      name: 'Yuria Staff',
    }, {
      id: 14456,
      mainCategoryId: '1',
      name: 'Krea Staff',
    }, {
      id: 14457,
      mainCategoryId: '1',
      name: 'Rosar Staff',
    }, {
      id: 14471,
      mainCategoryId: '1',
      name: 'Styd Staff',
    }, {
      id: 14472,
      mainCategoryId: '1',
      name: 'Ultimate Styd Staff',
    }, {
      id: 14486,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Staff',
    }, {
      id: 14503,
      mainCategoryId: '5',
      name: 'Quitar Kunai',
    }, {
      id: 14504,
      mainCategoryId: '5',
      name: 'Estique Kunai',
    }, {
      id: 14505,
      mainCategoryId: '5',
      name: 'Tadd Kunai',
    }, {
      id: 14524,
      mainCategoryId: '5',
      name: 'Krea Kunai',
    }, {
      id: 14525,
      mainCategoryId: '5',
      name: 'Rosar Kunai',
    }, {
      id: 14538,
      mainCategoryId: '5',
      name: 'Nouver Kunai',
    }, {
      id: 14540,
      mainCategoryId: '5',
      name: 'Kutum Kunai',
    }, {
      id: 14603,
      mainCategoryId: '5',
      name: 'Quitar Shuriken',
    }, {
      id: 14604,
      mainCategoryId: '5',
      name: 'Estique Shuriken',
    }, {
      id: 14605,
      mainCategoryId: '5',
      name: 'Tadd Shuriken',
    }, {
      id: 14624,
      mainCategoryId: '5',
      name: 'Krea Shuriken',
    }, {
      id: 14625,
      mainCategoryId: '5',
      name: 'Rosar Shuriken',
    }, {
      id: 14638,
      mainCategoryId: '5',
      name: 'Nouver Shuriken',
    }, {
      id: 14640,
      mainCategoryId: '5',
      name: 'Kutum Shuriken',
    }, {
      id: 14701,
      mainCategoryId: '10',
      name: 'Mercenary\'s Steel Great Sword',
    }, {
      id: 14702,
      mainCategoryId: '10',
      name: 'Dandelion Great Sword',
    }, {
      id: 14703,
      mainCategoryId: '10',
      name: 'Mercenary\'s Great Sword',
    }, {
      id: 14711,
      mainCategoryId: '10',
      name: 'Spell of Seduction Scythe',
    }, {
      id: 14712,
      mainCategoryId: '10',
      name: 'Dandelion Scythe',
    }, {
      id: 14713,
      mainCategoryId: '10',
      name: 'Scythe of Seduction',
    }, {
      id: 14721,
      mainCategoryId: '10',
      name: 'Upgraded Iron Buster',
    }, {
      id: 14722,
      mainCategoryId: '10',
      name: 'Dandelion Iron Buster',
    }, {
      id: 14723,
      mainCategoryId: '10',
      name: 'Rough Iron Buster',
    }, {
      id: 14731,
      mainCategoryId: '10',
      name: 'Heiress\'s Kamasylven Sword',
    }, {
      id: 14732,
      mainCategoryId: '10',
      name: 'Dandelion Kamasylven Sword',
    }, {
      id: 14733,
      mainCategoryId: '10',
      name: 'Small Tree Spirit\'s Kamasylven Sword',
    }, {
      id: 14741,
      mainCategoryId: '10',
      name: 'Azure Thunder Celestial Bo Staff',
    }, {
      id: 14742,
      mainCategoryId: '10',
      name: 'Dandelion Celestial Bo Staff',
    }, {
      id: 14743,
      mainCategoryId: '10',
      name: 'Practice Celestial Bo Staff',
    }, {
      id: 14751,
      mainCategoryId: '10',
      name: 'Piece of Purification Lancia',
    }, {
      id: 14752,
      mainCategoryId: '10',
      name: 'Dandelion Lancia',
    }, {
      id: 14753,
      mainCategoryId: '10',
      name: 'Schzeriel Lancia',
    }, {
      id: 14761,
      mainCategoryId: '10',
      name: 'Immaculate Crescent Blade',
    }, {
      id: 14762,
      mainCategoryId: '10',
      name: 'Dandelion Crescent Blade',
    }, {
      id: 14763,
      mainCategoryId: '10',
      name: 'Iron Crescent Blade',
    }, {
      id: 14771,
      mainCategoryId: '10',
      name: 'Frosty Cloud Kerispear',
    }, {
      id: 14772,
      mainCategoryId: '10',
      name: 'Dandelion Kerispear',
    }, {
      id: 14773,
      mainCategoryId: '10',
      name: 'Sundo Kerispear',
    }, {
      id: 14781,
      mainCategoryId: '10',
      name: 'Yagakmu Sura Katana',
    }, {
      id: 14782,
      mainCategoryId: '10',
      name: 'Dandelion Sura Katana',
    }, {
      id: 14783,
      mainCategoryId: '10',
      name: 'Tempest Sura Katana',
    }, {
      id: 14791,
      mainCategoryId: '10',
      name: 'Oeki\'s Sah Chakram',
    }, {
      id: 14792,
      mainCategoryId: '10',
      name: 'Dandelion Sah Chakram',
    }, {
      id: 14793,
      mainCategoryId: '10',
      name: 'Sonan Sah Chakram',
    }, {
      id: 14801,
      mainCategoryId: '10',
      name: 'Alloria Aad Sphera',
    }, {
      id: 14802,
      mainCategoryId: '10',
      name: 'Dandelion Aad Sphera',
    }, {
      id: 14803,
      mainCategoryId: '10',
      name: 'Pri Aad Sphera',
    }, {
      id: 14811,
      mainCategoryId: '10',
      name: 'Lord Godr Sphera',
    }, {
      id: 14812,
      mainCategoryId: '10',
      name: 'Dandelion Godr Sphera',
    }, {
      id: 14813,
      mainCategoryId: '10',
      name: 'Tati Godr Sphera',
    }, {
      id: 14816,
      mainCategoryId: '10',
      name: 'Light-Swallowing Vediant',
    }, {
      id: 14817,
      mainCategoryId: '10',
      name: 'Dandelion Vediant',
    }, {
      id: 14818,
      mainCategoryId: '10',
      name: 'Thorn Tree Vediant',
    }, {
      id: 14821,
      mainCategoryId: '10',
      name: 'Backflow Gardbrace',
    }, {
      id: 14822,
      mainCategoryId: '10',
      name: 'Dandelion Gardbrace',
    }, {
      id: 14823,
      mainCategoryId: '10',
      name: 'Iron Chain Gardbrace',
    }, {
      id: 14829,
      mainCategoryId: '10',
      name: 'Baconaua Cestus',
    }, {
      id: 14830,
      mainCategoryId: '10',
      name: 'Dandelion Cestus',
    }, {
      id: 14831,
      mainCategoryId: '10',
      name: 'Kamalam Cestus',
    }, {
      id: 14838,
      mainCategoryId: '15',
      name: '[Musa] Jordine\'s Casual Wear',
    }, {
      id: 14839,
      mainCategoryId: '15',
      name: '[Valkyrie] Orwen\'s Travel Wear',
    }, {
      id: 14840,
      mainCategoryId: '15',
      name: '[Maehwa] Orwen\'s Travel Wear',
    }, {
      id: 14841,
      mainCategoryId: '15',
      name: '[Wizard] Jordine\'s Casual Wear',
    }, {
      id: 14842,
      mainCategoryId: '15',
      name: '[Witch] Orwen\'s Travel Wear',
    }, {
      id: 14843,
      mainCategoryId: '15',
      name: '[Kunoichi] Orwen\'s Travel Wear',
    }, {
      id: 14844,
      mainCategoryId: '15',
      name: '[Ninja] Jordine\'s Casual Wear',
    }, {
      id: 14845,
      mainCategoryId: '15',
      name: '[Warrior] Edan\'s Travel Wear',
    }, {
      id: 14846,
      mainCategoryId: '15',
      name: '[Berserker] Edan\'s Travel Wear',
    }, {
      id: 14847,
      mainCategoryId: '15',
      name: '[Sorceress] Jarette\'s Armor',
    }, {
      id: 14848,
      mainCategoryId: '15',
      name: '[Tamer] Jarette\'s Armor',
    }, {
      id: 14849,
      mainCategoryId: '15',
      name: '[Ranger] Jarette\'s Armor',
    }, {
      id: 14850,
      mainCategoryId: '15',
      name: '[Musa] Edan\'s Travel Wear',
    }, {
      id: 14851,
      mainCategoryId: '15',
      name: '[Valkyrie] Jarette\'s Armor',
    }, {
      id: 14852,
      mainCategoryId: '15',
      name: '[Maehwa] Jarette\'s Armor',
    }, {
      id: 14853,
      mainCategoryId: '15',
      name: '[Wizard] Edan\'s Travel Wear',
    }, {
      id: 14854,
      mainCategoryId: '15',
      name: '[Witch] Jarette\'s Armor',
    }, {
      id: 14855,
      mainCategoryId: '15',
      name: '[Kunoichi] Jarette\'s Armor',
    }, {
      id: 14856,
      mainCategoryId: '15',
      name: '[Ninja] Edan\'s Travel Wear',
    }, {
      id: 14869,
      mainCategoryId: '15',
      name: '[Warrior] Delphe Knight Armor',
    }, {
      id: 14870,
      mainCategoryId: '15',
      name: '[Berserker] Delphe Knight Armor',
    }, {
      id: 14871,
      mainCategoryId: '15',
      name: '[Sorceress] Delphe Knight Armor',
    }, {
      id: 14872,
      mainCategoryId: '15',
      name: '[Tamer] Delphe Knight Armor',
    }, {
      id: 14873,
      mainCategoryId: '15',
      name: '[Ranger] Delphe Knight Armor',
    }, {
      id: 14874,
      mainCategoryId: '15',
      name: '[Musa] Delphe Knight Armor',
    }, {
      id: 14875,
      mainCategoryId: '15',
      name: '[Valkyrie] Delphe Knight Armor',
    }, {
      id: 14876,
      mainCategoryId: '15',
      name: '[Maehwa] Delphe Knight Armor',
    }, {
      id: 14877,
      mainCategoryId: '15',
      name: '[Wizard] Delphe Knight Armor',
    }, {
      id: 14878,
      mainCategoryId: '15',
      name: '[Witch] Delphe Knight Armor',
    }, {
      id: 14879,
      mainCategoryId: '15',
      name: '[Kunoichi] Delphe Knight Armor',
    }, {
      id: 14880,
      mainCategoryId: '15',
      name: '[Ninja] Delphe Knight Armor',
    }, {
      id: 15001,
      mainCategoryId: '50',
      name: 'Magic Crystal of Crimson Flame - Precision',
    }, {
      id: 15002,
      mainCategoryId: '50',
      name: 'Magic Crystal of Crimson Flame - Power',
    }, {
      id: 15003,
      mainCategoryId: '50',
      name: 'Magic Crystal of Crimson Flame - Carnage',
    }, {
      id: 15004,
      mainCategoryId: '50',
      name: 'Magic Crystal of Crimson Flame - Carnage',
    }, {
      id: 15005,
      mainCategoryId: '50',
      name: 'Magic Crystal of Crimson Flame - Carnage',
    }, {
      id: 15006,
      mainCategoryId: '50',
      name: 'Magic Crystal of Abundance - Armor',
    }, {
      id: 15007,
      mainCategoryId: '50',
      name: 'Magic Crystal of Abundance - Vigor',
    }, {
      id: 15008,
      mainCategoryId: '50',
      name: 'Magic Crystal of Abundance - Patience',
    }, {
      id: 15009,
      mainCategoryId: '50',
      name: 'Magic Crystal of Abundance - Healing',
    }, {
      id: 15010,
      mainCategoryId: '50',
      name: 'Magic Crystal of Abundance - Resonance',
    }, {
      id: 15011,
      mainCategoryId: '50',
      name: 'Magic Crystal of Nature - Swiftness',
    }, {
      id: 15012,
      mainCategoryId: '50',
      name: 'Magic Crystal of Nature - Adamantine',
    }, {
      id: 15013,
      mainCategoryId: '50',
      name: 'Magic Crystal of Nature - Ascension',
    }, {
      id: 15014,
      mainCategoryId: '50',
      name: 'Magic Crystal of the Sun - Assault',
    }, {
      id: 15015,
      mainCategoryId: '50',
      name: 'Magic Crystal of the Sun - Sturdiness',
    }, {
      id: 15016,
      mainCategoryId: '50',
      name: 'Magic Crystal of the Sun - Valor',
    }, {
      id: 15017,
      mainCategoryId: '50',
      name: 'Magic Crystal of Enchantment - Memory',
    }, {
      id: 15018,
      mainCategoryId: '50',
      name: 'Magic Crystal of Enchantment - Intimidation',
    }, {
      id: 15019,
      mainCategoryId: '50',
      name: 'Magic Crystal of Enchantment - Vision',
    }, {
      id: 15020,
      mainCategoryId: '50',
      name: 'Magic Crystal of Enchantment - Agility',
    }, {
      id: 15021,
      mainCategoryId: '50',
      name: 'Magic Crystal of Perfection',
    }, {
      id: 15022,
      mainCategoryId: '50',
      name: 'Magic Crystal - Crimson Flame',
    }, {
      id: 15023,
      mainCategoryId: '50',
      name: 'Magic Crystal - Enchantment',
    }, {
      id: 15024,
      mainCategoryId: '50',
      name: 'Magic Crystal - Destruction',
    }, {
      id: 15025,
      mainCategoryId: '50',
      name: 'Magic Crystal - Temptation',
    }, {
      id: 15026,
      mainCategoryId: '50',
      name: 'Magic Crystal - Agony',
    }, {
      id: 15028,
      mainCategoryId: '50',
      name: 'Magic Crystal of Nature - Endurance',
    }, {
      id: 15029,
      mainCategoryId: '50',
      name: 'Magic Crystal of the Sun - Precision',
    }, {
      id: 15030,
      mainCategoryId: '50',
      name: 'Magic Crystal of the Sun - Boulder',
    }, {
      id: 15032,
      mainCategoryId: '50',
      name: 'Magic Crystal - Meditation',
    }, {
      id: 15034,
      mainCategoryId: '50',
      name: 'Dim Magical Crystal: Karma',
    }, {
      id: 15035,
      mainCategoryId: '50',
      name: 'Dim Magical Crystal: Combat',
    }, {
      id: 15036,
      mainCategoryId: '50',
      name: 'Dim Magical Crystal: Gathering',
    }, {
      id: 15037,
      mainCategoryId: '50',
      name: 'Dim Magical Crystal: Fishing',
    }, {
      id: 15038,
      mainCategoryId: '50',
      name: 'Dim Magical Crystal: Hunting',
    }, {
      id: 15039,
      mainCategoryId: '50',
      name: 'Dim Magical Crystal: Cooking',
    }, {
      id: 15040,
      mainCategoryId: '50',
      name: 'Dim Magical Crystal: Alchemy',
    }, {
      id: 15041,
      mainCategoryId: '50',
      name: 'Dim Magical Crystal: Processing',
    }, {
      id: 15042,
      mainCategoryId: '50',
      name: 'Dim Magical Crystal: Training',
    }, {
      id: 15043,
      mainCategoryId: '50',
      name: 'Dim Magical Crystal: Trade',
    }, {
      id: 15044,
      mainCategoryId: '50',
      name: 'Dim Magical Crystal: Farming',
    }, {
      id: 15045,
      mainCategoryId: '50',
      name: 'Dim Magical Crystal: Sail',
    }, {
      id: 15101,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Precision',
    }, {
      id: 15102,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Power',
    }, {
      id: 15103,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Carnage',
    }, {
      id: 15104,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Carnage',
    }, {
      id: 15105,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Carnage',
    }, {
      id: 15106,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Armor',
    }, {
      id: 15107,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Vigor',
    }, {
      id: 15108,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Patience',
    }, {
      id: 15109,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Heal',
    }, {
      id: 15110,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Resonance',
    }, {
      id: 15111,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Swiftness',
    }, {
      id: 15112,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Adamantine',
    }, {
      id: 15113,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Ascension',
    }, {
      id: 15114,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Descent',
    }, {
      id: 15115,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Endurance',
    }, {
      id: 15116,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Assault',
    }, {
      id: 15117,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Sturdiness',
    }, {
      id: 15118,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Valor',
    }, {
      id: 15119,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Precision',
    }, {
      id: 15120,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Strength',
    }, {
      id: 15121,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Memory',
    }, {
      id: 15122,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Intimidation',
    }, {
      id: 15123,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Vision',
    }, {
      id: 15124,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Agility',
    }, {
      id: 15125,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Experience',
    }, {
      id: 15126,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Durability',
    }, {
      id: 15127,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Absorption',
    }, {
      id: 15128,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - MP Recovery',
    }, {
      id: 15129,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Back Attack',
    }, {
      id: 15130,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Down Attack',
    }, {
      id: 15131,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Air Attack',
    }, {
      id: 15132,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Critical Hit',
    }, {
      id: 15133,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Speed Attack',
    }, {
      id: 15134,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Counter Attack',
    }, {
      id: 15135,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Siege',
    }, {
      id: 15136,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Special Evasion',
    }, {
      id: 15137,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Melee Defense',
    }, {
      id: 15138,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Ranged Defense',
    }, {
      id: 15139,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Magic Defense',
    }, {
      id: 15146,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Energy',
    }, {
      id: 15147,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Submergence',
    }, {
      id: 15148,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Melee Attack',
    }, {
      id: 15149,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Ranged Attack',
    }, {
      id: 15150,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Magic Attack',
    }, {
      id: 15151,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Ignore Knockback Resistance',
    }, {
      id: 15152,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Ignore Knockdown Resistance',
    }, {
      id: 15153,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Ignore Grapple Resistance',
    }, {
      id: 15154,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Ignore Stun Resistance',
    }, {
      id: 15156,
      mainCategoryId: '50',
      name: 'Magic Crystal of Infinity - Skill',
    }, {
      id: 15201,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Precision',
    }, {
      id: 15202,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Power',
    }, {
      id: 15206,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Armor',
    }, {
      id: 15207,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Vigor',
    }, {
      id: 15211,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Swiftness',
    }, {
      id: 15212,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Adamantine',
    }, {
      id: 15213,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Ascension',
    }, {
      id: 15214,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Descent',
    }, {
      id: 15216,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Assault',
    }, {
      id: 15217,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Sturdiness',
    }, {
      id: 15218,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Valor',
    }, {
      id: 15219,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Precision',
    }, {
      id: 15221,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Memory',
    }, {
      id: 15222,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Intimidation',
    }, {
      id: 15224,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Agility',
    }, {
      id: 15601,
      mainCategoryId: '50',
      name: 'Ancient Magic Crystal - Harphia',
    }, {
      id: 15602,
      mainCategoryId: '50',
      name: 'Ancient Magic Crystal - Cobelinus',
    }, {
      id: 15603,
      mainCategoryId: '50',
      name: 'Ancient Magic Crystal - Viper',
    }, {
      id: 15604,
      mainCategoryId: '50',
      name: 'Ancient Magic Crystal - Hystria',
    }, {
      id: 15605,
      mainCategoryId: '50',
      name: 'Ancient Magic Crystal - Carmae',
    }, {
      id: 15606,
      mainCategoryId: '50',
      name: 'Ancient Magic Crystal of Crimson Flame - Power',
    }, {
      id: 15610,
      mainCategoryId: '50',
      name: 'Ancient Magic Crystal of Abundance - Armor',
    }, {
      id: 15613,
      mainCategoryId: '50',
      name: 'Ancient Magic Crystal of Abundance- Healing',
    }, {
      id: 15614,
      mainCategoryId: '50',
      name: 'Ancient Magic Crystal of Abundance - Resonance',
    }, {
      id: 15616,
      mainCategoryId: '50',
      name: 'Ancient Magic Crystal of Nature - Adamantine',
    }, {
      id: 15624,
      mainCategoryId: '50',
      name: 'Ancient Magic Crystal of Enchantment - Agility',
    }, {
      id: 15626,
      mainCategoryId: '50',
      name: 'Black Spirit Crystal',
    }, {
      id: 15627,
      mainCategoryId: '50',
      name: 'Awakened Spirit\'s Crystal',
    }, {
      id: 15628,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Harphia',
    }, {
      id: 15629,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Cobelinus',
    }, {
      id: 15630,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Viper',
    }, {
      id: 15631,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Hystria',
    }, {
      id: 15632,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Carmae',
    }, {
      id: 15633,
      mainCategoryId: '50',
      name: 'Red Spirit Crystal',
    }, {
      id: 15634,
      mainCategoryId: '50',
      name: 'Red Battlefield Crystal: Harphia',
    }, {
      id: 15635,
      mainCategoryId: '50',
      name: 'Red Battlefield Crystal: Cobelinus',
    }, {
      id: 15636,
      mainCategoryId: '50',
      name: 'Red Battlefield Crystal: Viper',
    }, {
      id: 15637,
      mainCategoryId: '50',
      name: 'Red Battlefield Crystal: Hystria',
    }, {
      id: 15638,
      mainCategoryId: '50',
      name: 'Red Battlefield Crystal: Carmae',
    }, {
      id: 15639,
      mainCategoryId: '50',
      name: 'Red Battlefield Crystal: Power',
    }, {
      id: 15640,
      mainCategoryId: '50',
      name: 'Red Battlefield Crystal: Adamantine',
    }, {
      id: 15649,
      mainCategoryId: '50',
      name: 'Ancient Magic Crystal - Addis',
    }, {
      id: 15650,
      mainCategoryId: '50',
      name: 'Black Magic Crystal - Addis',
    }, {
      id: 15651,
      mainCategoryId: '50',
      name: 'Red Battlefield Crystal: Addis',
    }, {
      id: 15654,
      mainCategoryId: '50',
      name: 'Valtarra Spirit\'s Crystal',
    }, {
      id: 15662,
      mainCategoryId: '50',
      name: 'Combined Magic Crystal - Gervish',
    }, {
      id: 15663,
      mainCategoryId: '50',
      name: 'Combined Magic Crystal - Macalod',
    }, {
      id: 15664,
      mainCategoryId: '50',
      name: 'Combined Magic Crystal - Hoom',
    }, {
      id: 15665,
      mainCategoryId: '50',
      name: 'HAN Magic Crystal - Gervish',
    }, {
      id: 15666,
      mainCategoryId: '50',
      name: 'HAN Magic Crystal - Macalod',
    }, {
      id: 15667,
      mainCategoryId: '50',
      name: 'HAN Magic Crystal - Hoom',
    }, {
      id: 15669,
      mainCategoryId: '50',
      name: 'Dark Red Fang Crystal - Valor',
    }, {
      id: 15670,
      mainCategoryId: '50',
      name: 'Dark Red Fang Crystal - Armor',
    }, {
      id: 15672,
      mainCategoryId: '50',
      name: 'Corrupted Magic Crystal',
    }, {
      id: 15674,
      mainCategoryId: '50',
      name: 'Crystal of Elkarr',
    }, {
      id: 15675,
      mainCategoryId: '50',
      name: 'Ah\'krad Crystal',
    }, {
      id: 15676,
      mainCategoryId: '50',
      name: 'Olucas Crystal',
    }, {
      id: 15677,
      mainCategoryId: '50',
      name: 'Rebellious Spirit Crystal',
    }, {
      id: 15801,
      mainCategoryId: '50',
      name: 'JIN Magic Crystal - Harphia',
    }, {
      id: 15802,
      mainCategoryId: '50',
      name: 'BON Magic Crystal - Harphia',
    }, {
      id: 15803,
      mainCategoryId: '50',
      name: 'WON Magic Crystal - Harphia',
    }, {
      id: 15804,
      mainCategoryId: '50',
      name: 'JIN Magic Crystal - Cobelinus',
    }, {
      id: 15805,
      mainCategoryId: '50',
      name: 'BON Magic Crystal - Cobelinus',
    }, {
      id: 15806,
      mainCategoryId: '50',
      name: 'WON Magic Crystal - Cobelinus',
    }, {
      id: 15807,
      mainCategoryId: '50',
      name: 'JIN Magic Crystal - Viper',
    }, {
      id: 15808,
      mainCategoryId: '50',
      name: 'BON Magic Crystal - Viper',
    }, {
      id: 15809,
      mainCategoryId: '50',
      name: 'WON Magic Crystal - Viper',
    }, {
      id: 15810,
      mainCategoryId: '50',
      name: 'JIN Magic Crystal - Hystria',
    }, {
      id: 15811,
      mainCategoryId: '50',
      name: 'BON Magic Crystal - Hystria',
    }, {
      id: 15812,
      mainCategoryId: '50',
      name: 'WON Magic Crystal - Hystria',
    }, {
      id: 15813,
      mainCategoryId: '50',
      name: 'JIN Magic Crystal - Carmae',
    }, {
      id: 15814,
      mainCategoryId: '50',
      name: 'BON Magic Crystal - Carmae',
    }, {
      id: 15815,
      mainCategoryId: '50',
      name: 'WON Magic Crystal - Carmae',
    }, {
      id: 15816,
      mainCategoryId: '50',
      name: 'JIN Magic Crystal - Addis',
    }, {
      id: 15817,
      mainCategoryId: '50',
      name: 'BON Magic Crystal - Addis',
    }, {
      id: 15818,
      mainCategoryId: '50',
      name: 'WON Magic Crystal - Addis',
    }, {
      id: 16001,
      mainCategoryId: '30',
      name: 'Black Stone (Weapon)',
    }, {
      id: 16002,
      mainCategoryId: '30',
      name: 'Black Stone (Armor)',
    }, {
      id: 16004,
      mainCategoryId: '30',
      name: 'Concentrated Magical Black Stone (Weapon)',
    }, {
      id: 16005,
      mainCategoryId: '30',
      name: 'Concentrated Magical Black Stone (Armor)',
    }, {
      id: 16017,
      mainCategoryId: '35',
      name: 'Traveler\'s Map',
    }, {
      id: 16102,
      mainCategoryId: '40',
      name: 'Transparent Empty Bottle',
    }, {
      id: 16103,
      mainCategoryId: '40',
      name: 'Hardened Empty Bottle',
    }, {
      id: 16104,
      mainCategoryId: '40',
      name: 'Shining Empty Bottle',
    }, {
      id: 16106,
      mainCategoryId: '40',
      name: 'Sharp Lumbering Axe',
    }, {
      id: 16107,
      mainCategoryId: '40',
      name: 'Steel Lumbering Axe',
    }, {
      id: 16108,
      mainCategoryId: '40',
      name: 'Shining Steel Lumbering Axe',
    }, {
      id: 16110,
      mainCategoryId: '40',
      name: 'Sharp Fluid Collector',
    }, {
      id: 16111,
      mainCategoryId: '40',
      name: 'Sturdy Fluid Collector',
    }, {
      id: 16112,
      mainCategoryId: '40',
      name: 'Shining Fluid Collector',
    }, {
      id: 16114,
      mainCategoryId: '40',
      name: 'Bronze Hoe',
    }, {
      id: 16115,
      mainCategoryId: '40',
      name: 'Steel Hoe',
    }, {
      id: 16116,
      mainCategoryId: '40',
      name: 'Shining Steel Hoe',
    }, {
      id: 16118,
      mainCategoryId: '40',
      name: 'Sharp Butcher Knife',
    }, {
      id: 16119,
      mainCategoryId: '40',
      name: 'Steel Butcher Knife',
    }, {
      id: 16120,
      mainCategoryId: '40',
      name: 'Shining Steel Butcher Knife',
    }, {
      id: 16122,
      mainCategoryId: '40',
      name: 'Sharp Tanning Knife',
    }, {
      id: 16123,
      mainCategoryId: '40',
      name: 'Steel Tanning Knife',
    }, {
      id: 16124,
      mainCategoryId: '40',
      name: 'Shining Steel Tanning Knife',
    }, {
      id: 16126,
      mainCategoryId: '40',
      name: 'Sharp Pickaxe',
    }, {
      id: 16127,
      mainCategoryId: '40',
      name: 'Steel Pickaxe',
    }, {
      id: 16128,
      mainCategoryId: '40',
      name: 'Shining Steel Pickaxe',
    }, {
      id: 16147,
      mainCategoryId: '40',
      name: 'Thick Fishing Rod',
    }, {
      id: 16150,
      mainCategoryId: '40',
      name: 'Old Fishing Rod',
    }, {
      id: 16151,
      mainCategoryId: '40',
      name: 'Steel Fishing Rod',
    }, {
      id: 16152,
      mainCategoryId: '40',
      name: 'Golden Fishing Rod',
    }, {
      id: 16153,
      mainCategoryId: '40',
      name: 'Triple-Float Fishing Rod',
    }, {
      id: 16154,
      mainCategoryId: '40',
      name: 'Thin Harpoon',
    }, {
      id: 16155,
      mainCategoryId: '40',
      name: 'Thick Harpoon',
    }, {
      id: 16157,
      mainCategoryId: '40',
      name: '[Hunting] Beginner Matchlock',
    }, {
      id: 16158,
      mainCategoryId: '40',
      name: '[Hunting] Apprentice Matchlock',
    }, {
      id: 16159,
      mainCategoryId: '40',
      name: '[Hunting] Skilled Matchlock',
    }, {
      id: 16160,
      mainCategoryId: '40',
      name: '[Hunting] Professional Matchlock',
    }, {
      id: 16161,
      mainCategoryId: '40',
      name: '[Hunting] Artisan Matchlock',
    }, {
      id: 16162,
      mainCategoryId: '40',
      name: 'Balenos Fishing Rod',
    }, {
      id: 16163,
      mainCategoryId: '40',
      name: 'Epheria Fishing Rod',
    }, {
      id: 16164,
      mainCategoryId: '40',
      name: 'Calpheon Fishing Rod',
    }, {
      id: 16165,
      mainCategoryId: '40',
      name: 'Mediah Fishing Rod',
    }, {
      id: 16167,
      mainCategoryId: '40',
      name: 'Ash Tree Float',
    }, {
      id: 16168,
      mainCategoryId: '40',
      name: 'Maple Float',
    }, {
      id: 16242,
      mainCategoryId: '35',
      name: 'Sealed Golden Treasure Chest',
    }, {
      id: 16380,
      mainCategoryId: '35',
      name: '[Combat] Trina Lead Bullet',
    }, {
      id: 16479,
      mainCategoryId: '40',
      name: 'Manos Hoe',
    }, {
      id: 16481,
      mainCategoryId: '40',
      name: 'Manos Lumbering Axe',
    }, {
      id: 16482,
      mainCategoryId: '40',
      name: 'Manos Fluid Collector',
    }, {
      id: 16486,
      mainCategoryId: '40',
      name: 'Manos Tanning Knife',
    }, {
      id: 16487,
      mainCategoryId: '40',
      name: 'Manos Butcher Knife',
    }, {
      id: 16540,
      mainCategoryId: '40',
      name: 'Dostter Steel Hoe',
    }, {
      id: 16805,
      mainCategoryId: '40',
      name: 'Lucky Lumbering Axe',
    }, {
      id: 16806,
      mainCategoryId: '40',
      name: 'Lucky Sharp Lumbering Axe',
    }, {
      id: 16807,
      mainCategoryId: '40',
      name: 'Lucky Steel Lumbering Axe',
    }, {
      id: 16808,
      mainCategoryId: '40',
      name: 'Lucky Shining Steel Lumbering Axe',
    }, {
      id: 16809,
      mainCategoryId: '40',
      name: 'Lucky Fluid Collector',
    }, {
      id: 16810,
      mainCategoryId: '40',
      name: 'Lucky Sharp Fluid Collector',
    }, {
      id: 16811,
      mainCategoryId: '40',
      name: 'Lucky Sturdy Fluid Collector',
    }, {
      id: 16812,
      mainCategoryId: '40',
      name: 'Lucky Shining Fluid Collector',
    }, {
      id: 16813,
      mainCategoryId: '40',
      name: 'Lucky Hoe',
    }, {
      id: 16814,
      mainCategoryId: '40',
      name: 'Lucky Bronze Hoe',
    }, {
      id: 16815,
      mainCategoryId: '40',
      name: 'Lucky Steel Hoe',
    }, {
      id: 16816,
      mainCategoryId: '40',
      name: 'Lucky Shining Steel Hoe',
    }, {
      id: 16817,
      mainCategoryId: '40',
      name: 'Lucky Butcher Knife',
    }, {
      id: 16818,
      mainCategoryId: '40',
      name: 'Lucky Sharp Butcher Knife',
    }, {
      id: 16819,
      mainCategoryId: '40',
      name: 'Lucky Steel Butcher Knife',
    }, {
      id: 16820,
      mainCategoryId: '40',
      name: 'Lucky Shining Steel Butcher Knife',
    }, {
      id: 16821,
      mainCategoryId: '40',
      name: 'Lucky Tanning Knife',
    }, {
      id: 16822,
      mainCategoryId: '40',
      name: 'Lucky Sharp Tanning Knife',
    }, {
      id: 16823,
      mainCategoryId: '40',
      name: 'Lucky Steel Tanning Knife',
    }, {
      id: 16824,
      mainCategoryId: '40',
      name: 'Lucky Shining Steel Tanning Knife',
    }, {
      id: 16825,
      mainCategoryId: '40',
      name: 'Lucky Pickaxe',
    }, {
      id: 16826,
      mainCategoryId: '40',
      name: 'Lucky Sharp Pickaxe',
    }, {
      id: 16827,
      mainCategoryId: '40',
      name: 'Lucky Steel Pickaxe',
    }, {
      id: 16828,
      mainCategoryId: '40',
      name: 'Lucky Shining Steel Pickaxe',
    }, {
      id: 16829,
      mainCategoryId: '40',
      name: 'Magic Lumbering Axe',
    }, {
      id: 16830,
      mainCategoryId: '40',
      name: 'Magic Fluid Collector',
    }, {
      id: 16831,
      mainCategoryId: '40',
      name: 'Magic Butcher Knife',
    }, {
      id: 16832,
      mainCategoryId: '40',
      name: 'Magic Pickaxe',
    }, {
      id: 16833,
      mainCategoryId: '40',
      name: 'Magic Hoe',
    }, {
      id: 16834,
      mainCategoryId: '40',
      name: 'Magic Tanning Knife',
    }, {
      id: 16847,
      mainCategoryId: '40',
      name: 'Manos Pickaxe',
    }, {
      id: 16901,
      mainCategoryId: '25',
      name: 'Inorganic Fertilizer',
    }, {
      id: 16902,
      mainCategoryId: '25',
      name: 'Byproduct Fertilizer',
    }, {
      id: 16903,
      mainCategoryId: '25',
      name: 'Organic Fertilizer',
    }, {
      id: 17081,
      mainCategoryId: '55',
      name: 'Blessing of Kamasylve (15 Days)',
    }, {
      id: 17128,
      mainCategoryId: '60',
      name: '[Basic Dye] Real Red',
    }, {
      id: 17200,
      mainCategoryId: '60',
      name: '[Basic Dye] Real Yellow',
    }, {
      id: 17272,
      mainCategoryId: '60',
      name: '[Basic Dye] Real Blue',
    }, {
      id: 17312,
      mainCategoryId: '60',
      name: '[Basic Dye] Snow White',
    }, {
      id: 17313,
      mainCategoryId: '60',
      name: '[Basic Dye] Blade Silver',
    }, {
      id: 17315,
      mainCategoryId: '60',
      name: '[Basic Dye] Deep Bronze',
    }, {
      id: 17316,
      mainCategoryId: '60',
      name: '[Basic Dye] Dark Black',
    }, {
      id: 17354,
      mainCategoryId: '55',
      name: 'Value Pack (30 Days)',
    }, {
      id: 17602,
      mainCategoryId: '55',
      name: 'Processing EXP Transfer Coupon',
    }, {
      id: 17603,
      mainCategoryId: '55',
      name: 'Fishing EXP Transfer Coupon',
    }, {
      id: 17604,
      mainCategoryId: '55',
      name: 'Trading EXP Transfer Coupon',
    }, {
      id: 17605,
      mainCategoryId: '55',
      name: 'Alchemy EXP Transfer Coupon',
    }, {
      id: 17606,
      mainCategoryId: '55',
      name: 'Cooking EXP Transfer Coupon',
    }, {
      id: 17607,
      mainCategoryId: '55',
      name: 'Training EXP Transfer Coupon',
    }, {
      id: 17608,
      mainCategoryId: '55',
      name: 'Gathering EXP Transfer Coupon',
    }, {
      id: 17611,
      mainCategoryId: '55',
      name: 'Equipment Tailoring Coupon',
    }, {
      id: 17646,
      mainCategoryId: '55',
      name: 'Sealed Book of Combat (15 Days)',
    }, {
      id: 17726,
      mainCategoryId: '55',
      name: 'Farming EXP Transfer Coupon',
    }, {
      id: 17727,
      mainCategoryId: '55',
      name: 'Sailing EXP Transfer Coupon',
    }, {
      id: 17904,
      mainCategoryId: '55',
      name: 'White Valencian Cat',
    }, {
      id: 17905,
      mainCategoryId: '55',
      name: 'Spotted Valencian Cat',
    }, {
      id: 17908,
      mainCategoryId: '55',
      name: 'White Shorthair Cat',
    }, {
      id: 17909,
      mainCategoryId: '55',
      name: 'Black Valencian Cat',
    }, {
      id: 17910,
      mainCategoryId: '55',
      name: 'Black Thin Cat',
    }, {
      id: 17939,
      mainCategoryId: '55',
      name: 'Shaggy Dog',
    }, {
      id: 17940,
      mainCategoryId: '55',
      name: 'Curly Dog',
    }, {
      id: 17941,
      mainCategoryId: '55',
      name: 'Shepherd',
    }, {
      id: 17942,
      mainCategoryId: '55',
      name: 'Fluffy Puppy',
    }, {
      id: 17944,
      mainCategoryId: '55',
      name: 'Karlstein Cat',
    }, {
      id: 17945,
      mainCategoryId: '55',
      name: 'Pila Fe Naughty Dog',
    }, {
      id: 17946,
      mainCategoryId: '55',
      name: 'Brown Fighting Dog',
    }, {
      id: 17951,
      mainCategoryId: '55',
      name: 'Batian Dog',
    }, {
      id: 17953,
      mainCategoryId: '55',
      name: 'Snow Wolfdog',
    }, {
      id: 17959,
      mainCategoryId: '55',
      name: 'Mediah Guard Dog',
    }, {
      id: 17961,
      mainCategoryId: '55',
      name: 'Striped Cat',
    }, {
      id: 17962,
      mainCategoryId: '55',
      name: 'Orange Brindle Cat',
    }, {
      id: 17963,
      mainCategoryId: '55',
      name: 'Black Mask Cat',
    }, {
      id: 17964,
      mainCategoryId: '55',
      name: 'Piebald Cat',
    }, {
      id: 17965,
      mainCategoryId: '55',
      name: 'Gray Thin Cat',
    }, {
      id: 17966,
      mainCategoryId: '55',
      name: 'Calpheon Chubby Dog',
    }, {
      id: 17967,
      mainCategoryId: '55',
      name: 'Brown Fighting Dog',
    }, {
      id: 17968,
      mainCategoryId: '55',
      name: 'Naughty Dog',
    }, {
      id: 17970,
      mainCategoryId: '55',
      name: 'Kaia Racing Dog',
    }, {
      id: 17971,
      mainCategoryId: '55',
      name: 'Brown Guide Hawk',
    }, {
      id: 17972,
      mainCategoryId: '55',
      name: 'Gray Moon Cat',
    }, {
      id: 17973,
      mainCategoryId: '55',
      name: 'Trainer\'s Flute (Permanent)',
    }, {
      id: 17974,
      mainCategoryId: '55',
      name: 'Sky Hawk',
    }, {
      id: 17976,
      mainCategoryId: '55',
      name: 'Desert Fox',
    }, {
      id: 17977,
      mainCategoryId: '55',
      name: 'Junaid Cat',
    }, {
      id: 18001,
      mainCategoryId: '55',
      name: 'Calpheon Chargers\' Champron',
    }, {
      id: 18002,
      mainCategoryId: '55',
      name: 'Knight\'s Champron',
    }, {
      id: 18003,
      mainCategoryId: '55',
      name: 'Commander\'s Champron',
    }, {
      id: 18004,
      mainCategoryId: '55',
      name: 'Iron Scale Champron',
    }, {
      id: 18005,
      mainCategoryId: '55',
      name: 'Dark Thorn Champron',
    }, {
      id: 18006,
      mainCategoryId: '55',
      name: 'Cavaro Champron',
    }, {
      id: 18007,
      mainCategoryId: '55',
      name: 'Lahr Arcien Champron',
    }, {
      id: 18008,
      mainCategoryId: '55',
      name: 'Karlstein Champron',
    }, {
      id: 18011,
      mainCategoryId: '55',
      name: 'Katan Combat Iron Mask for Camel',
    }, {
      id: 18012,
      mainCategoryId: '55',
      name: 'Trina Knight Champron',
    }, {
      id: 18013,
      mainCategoryId: '55',
      name: 'Dragon Scale Champron',
    }, {
      id: 18014,
      mainCategoryId: '55',
      name: 'Skeletal Champron',
    }, {
      id: 18015,
      mainCategoryId: '55',
      name: 'Krenvatz Champron',
    }, {
      id: 18016,
      mainCategoryId: '55',
      name: 'Anemos Champron',
    }, {
      id: 18017,
      mainCategoryId: '55',
      name: 'Terrminé Champron',
    }, {
      id: 18019,
      mainCategoryId: '55',
      name: 'Blitzen Champron',
    }, {
      id: 18067,
      mainCategoryId: '55',
      name: 'Brown Cream Puppy',
    }, {
      id: 18068,
      mainCategoryId: '55',
      name: 'Kaia Jackal',
    }, {
      id: 18081,
      mainCategoryId: '55',
      name: 'Snowkid',
    }, {
      id: 18097,
      mainCategoryId: '55',
      name: 'Long-tailed Rosefinch',
    }, {
      id: 18098,
      mainCategoryId: '55',
      name: 'Red Panda',
    }, {
      id: 18100,
      mainCategoryId: '55',
      name: 'Scarlet Macaw',
    }, {
      id: 18101,
      mainCategoryId: '55',
      name: 'Calpheon Chargers\' Barding',
    }, {
      id: 18102,
      mainCategoryId: '55',
      name: 'Knight\'s Barding',
    }, {
      id: 18103,
      mainCategoryId: '55',
      name: 'Commander\'s Barding',
    }, {
      id: 18104,
      mainCategoryId: '55',
      name: 'Iron Scale Barding',
    }, {
      id: 18105,
      mainCategoryId: '55',
      name: 'Dark Thorn Barding',
    }, {
      id: 18106,
      mainCategoryId: '55',
      name: 'Cavaro Barding',
    }, {
      id: 18107,
      mainCategoryId: '55',
      name: 'Lahr Arcien Barding',
    }, {
      id: 18108,
      mainCategoryId: '55',
      name: 'Karlstein Barding',
    }, {
      id: 18111,
      mainCategoryId: '55',
      name: 'Katan Combat Iron Armor for Camel',
    }, {
      id: 18112,
      mainCategoryId: '55',
      name: 'Trina Knight Barding',
    }, {
      id: 18113,
      mainCategoryId: '55',
      name: 'Dragon Scale Barding',
    }, {
      id: 18114,
      mainCategoryId: '55',
      name: 'Skeletal Barding',
    }, {
      id: 18115,
      mainCategoryId: '55',
      name: 'Krenvatz Barding',
    }, {
      id: 18116,
      mainCategoryId: '55',
      name: 'Anemos Barding',
    }, {
      id: 18117,
      mainCategoryId: '55',
      name: 'Terrminé Barding',
    }, {
      id: 18119,
      mainCategoryId: '55',
      name: 'Blitzen Barding',
    }, {
      id: 18201,
      mainCategoryId: '55',
      name: 'Calpheon Chargers\' Saddle',
    }, {
      id: 18202,
      mainCategoryId: '55',
      name: 'Knight\'s Saddle',
    }, {
      id: 18203,
      mainCategoryId: '55',
      name: 'Commander\'s Saddle',
    }, {
      id: 18204,
      mainCategoryId: '55',
      name: 'Iron Scale Saddle',
    }, {
      id: 18205,
      mainCategoryId: '55',
      name: 'Dark Thorn Saddle',
    }, {
      id: 18206,
      mainCategoryId: '55',
      name: 'Cavaro Saddle',
    }, {
      id: 18207,
      mainCategoryId: '55',
      name: 'Lahr Arcien Saddle',
    }, {
      id: 18208,
      mainCategoryId: '55',
      name: 'Karlstein Saddle',
    }, {
      id: 18211,
      mainCategoryId: '55',
      name: 'Katan Combat Saddle for Camel',
    }, {
      id: 18212,
      mainCategoryId: '55',
      name: 'Trina Knight Saddle',
    }, {
      id: 18213,
      mainCategoryId: '55',
      name: 'Dragon Scale Saddle',
    }, {
      id: 18214,
      mainCategoryId: '55',
      name: 'Skeletal Saddle',
    }, {
      id: 18215,
      mainCategoryId: '55',
      name: 'Krenvatz Saddle',
    }, {
      id: 18216,
      mainCategoryId: '55',
      name: 'Anemos Saddle',
    }, {
      id: 18217,
      mainCategoryId: '55',
      name: 'Terrminé Saddle',
    }, {
      id: 18219,
      mainCategoryId: '55',
      name: 'Blitzen Saddle',
    }, {
      id: 18301,
      mainCategoryId: '55',
      name: 'Calpheon Chargers\' Stirrups',
    }, {
      id: 18302,
      mainCategoryId: '55',
      name: 'Knight\'s Stirrups',
    }, {
      id: 18303,
      mainCategoryId: '55',
      name: 'Commander\'s Stirrups',
    }, {
      id: 18304,
      mainCategoryId: '55',
      name: 'Iron Scale Stirrups',
    }, {
      id: 18305,
      mainCategoryId: '55',
      name: 'Dark Thorn Stirrups',
    }, {
      id: 18306,
      mainCategoryId: '55',
      name: 'Cavaro Stirrups',
    }, {
      id: 18307,
      mainCategoryId: '55',
      name: 'Lahr Arcien Stirrup',
    }, {
      id: 18308,
      mainCategoryId: '55',
      name: 'Karlstein Stirrups',
    }, {
      id: 18311,
      mainCategoryId: '55',
      name: 'Katan Combat Stirrups for Camel',
    }, {
      id: 18312,
      mainCategoryId: '55',
      name: 'Trina Knight Stirrups',
    }, {
      id: 18313,
      mainCategoryId: '55',
      name: 'Dragon Scale Stirrups',
    }, {
      id: 18314,
      mainCategoryId: '55',
      name: 'Skeletal Stirrups',
    }, {
      id: 18315,
      mainCategoryId: '55',
      name: 'Krenvatz Stirrups',
    }, {
      id: 18316,
      mainCategoryId: '55',
      name: 'Anemos Stirrups',
    }, {
      id: 18317,
      mainCategoryId: '55',
      name: 'Terrminé Stirrups',
    }, {
      id: 18319,
      mainCategoryId: '55',
      name: 'Blitzen Stirrups',
    }, {
      id: 18374,
      mainCategoryId: '55',
      name: 'Bellucian Champron',
    }, {
      id: 18375,
      mainCategoryId: '55',
      name: 'Bellucian Barding',
    }, {
      id: 18376,
      mainCategoryId: '55',
      name: 'Bellucian Saddle',
    }, {
      id: 18377,
      mainCategoryId: '55',
      name: 'Bellucian Stirrups',
    }, {
      id: 18378,
      mainCategoryId: '55',
      name: 'Bellucian Horse Gear Set',
    }, {
      id: 18410,
      mainCategoryId: '55',
      name: 'Stoneback Crab',
    }, {
      id: 18421,
      mainCategoryId: '55',
      name: 'Carmadun Owl',
    }, {
      id: 18425,
      mainCategoryId: '55',
      name: 'Ribbon Cat',
    }, {
      id: 18426,
      mainCategoryId: '55',
      name: 'Snowball Rosefinch',
    }, {
      id: 18427,
      mainCategoryId: '55',
      name: 'Snowflake Rosefinch',
    }, {
      id: 18428,
      mainCategoryId: '55',
      name: 'Choppy',
    }, {
      id: 18429,
      mainCategoryId: '55',
      name: 'Young Griffon',
    }, {
      id: 18435,
      mainCategoryId: '55',
      name: 'Turtle',
    }, {
      id: 18436,
      mainCategoryId: '55',
      name: 'Little Lamb',
    }, {
      id: 18439,
      mainCategoryId: '55',
      name: 'Crow',
    }, {
      id: 18480,
      mainCategoryId: '65',
      name: 'Young Crimson Dragon',
    }, {
      id: 18482,
      mainCategoryId: '65',
      name: 'Young Crimson Dragon',
    }, {
      id: 18483,
      mainCategoryId: '65',
      name: 'Young Crimson Dragon',
    }, {
      id: 18484,
      mainCategoryId: '65',
      name: 'Young Crimson Dragon',
    }, {
      id: 18485,
      mainCategoryId: '65',
      name: 'Young Crimson Dragon',
    }, {
      id: 18927,
      mainCategoryId: '55',
      name: 'Sealed Book of Life (15 Days)',
    }, {
      id: 18946,
      mainCategoryId: '55',
      name: 'Winter Snowflake Box',
    }, {
      id: 19002,
      mainCategoryId: '55',
      name: '[Warrior] Bern Helmet',
    }, {
      id: 19003,
      mainCategoryId: '55',
      name: '[Warrior] Bern Armor',
    }, {
      id: 19004,
      mainCategoryId: '55',
      name: '[Warrior] Bern Gloves',
    }, {
      id: 19005,
      mainCategoryId: '55',
      name: '[Warrior] Bern Shoes',
    }, {
      id: 19006,
      mainCategoryId: '55',
      name: '[Warrior] Clead Helmet',
    }, {
      id: 19007,
      mainCategoryId: '55',
      name: '[Warrior] Clead Armor',
    }, {
      id: 19008,
      mainCategoryId: '55',
      name: '[Warrior] Clead Gloves',
    }, {
      id: 19009,
      mainCategoryId: '55',
      name: '[Warrior] Clead Shoes',
    }, {
      id: 19015,
      mainCategoryId: '55',
      name: '[Warrior] Cavaro Helmet',
    }, {
      id: 19016,
      mainCategoryId: '55',
      name: '[Warrior] Cavaro Armor',
    }, {
      id: 19017,
      mainCategoryId: '55',
      name: '[Warrior] Cavaro Gloves',
    }, {
      id: 19018,
      mainCategoryId: '55',
      name: '[Warrior] Cavaro Shoes',
    }, {
      id: 19021,
      mainCategoryId: '55',
      name: '[Warrior] Karcenov Helmet',
    }, {
      id: 19022,
      mainCategoryId: '55',
      name: '[Warrior] Karcenov Armor',
    }, {
      id: 19023,
      mainCategoryId: '55',
      name: '[Warrior] Karcenov Gloves',
    }, {
      id: 19024,
      mainCategoryId: '55',
      name: '[Warrior] Karcenov Shoes',
    }, {
      id: 19025,
      mainCategoryId: '55',
      name: '[Warrior] Evergart Helmet',
    }, {
      id: 19026,
      mainCategoryId: '55',
      name: '[Warrior] Evergart Armor',
    }, {
      id: 19027,
      mainCategoryId: '55',
      name: '[Warrior] Evergart Gloves',
    }, {
      id: 19028,
      mainCategoryId: '55',
      name: '[Warrior] Evergart Shoes',
    }, {
      id: 19031,
      mainCategoryId: '55',
      name: '[Warrior] Lahr Arcien Helmet',
    }, {
      id: 19032,
      mainCategoryId: '55',
      name: '[Warrior] Lahr Arcien Armor',
    }, {
      id: 19033,
      mainCategoryId: '55',
      name: '[Warrior] Lahr Arcien Shoes',
    }, {
      id: 19038,
      mainCategoryId: '55',
      name: '[Warrior] Wilderness Helmet',
    }, {
      id: 19039,
      mainCategoryId: '55',
      name: '[Warrior] Wilderness Armor',
    }, {
      id: 19040,
      mainCategoryId: '55',
      name: '[Warrior] Wilderness Shoes',
    }, {
      id: 19042,
      mainCategoryId: '55',
      name: '[Warrior] Trilby Hat',
    }, {
      id: 19043,
      mainCategoryId: '55',
      name: '[Warrior] Atanis Helmet',
    }, {
      id: 19044,
      mainCategoryId: '55',
      name: '[Warrior] Atanis Armor',
    }, {
      id: 19045,
      mainCategoryId: '55',
      name: '[Warrior] Atanis Shoes',
    }, {
      id: 19048,
      mainCategoryId: '55',
      name: '[Warrior] Kibelius Armor',
    }, {
      id: 19049,
      mainCategoryId: '55',
      name: '[Warrior] Willow Breeze Robe',
    }, {
      id: 19050,
      mainCategoryId: '55',
      name: '[Warrior] Willow Breeze Shoes',
    }, {
      id: 19082,
      mainCategoryId: '55',
      name: '[Warrior] Bern Longsword',
    }, {
      id: 19083,
      mainCategoryId: '55',
      name: '[Warrior] Clead Longsword',
    }, {
      id: 19084,
      mainCategoryId: '55',
      name: '[Warrior] Cavaro Longsword',
    }, {
      id: 19085,
      mainCategoryId: '55',
      name: '[Warrior] Karcenov Longsword',
    }, {
      id: 19086,
      mainCategoryId: '55',
      name: '[Warrior] Evergart Longsword',
    }, {
      id: 19088,
      mainCategoryId: '55',
      name: '[Warrior] Lahr Arcien Longsword',
    }, {
      id: 19089,
      mainCategoryId: '55',
      name: '[Warrior] Atanis Longsword',
    }, {
      id: 19090,
      mainCategoryId: '55',
      name: '[Warrior] Wilderness Longsword',
    }, {
      id: 19092,
      mainCategoryId: '55',
      name: '[Warrior] Bern Shield',
    }, {
      id: 19093,
      mainCategoryId: '55',
      name: '[Warrior] Clead Shield',
    }, {
      id: 19094,
      mainCategoryId: '55',
      name: '[Warrior] Cavaro Shield',
    }, {
      id: 19095,
      mainCategoryId: '55',
      name: '[Warrior] Karcenov Shield',
    }, {
      id: 19096,
      mainCategoryId: '55',
      name: '[Warrior] Evergart Shield',
    }, {
      id: 19098,
      mainCategoryId: '55',
      name: '[Warrior] Lahr Arcien Shield',
    }, {
      id: 19099,
      mainCategoryId: '55',
      name: '[Warrior] Atanis Shield',
    }, {
      id: 19100,
      mainCategoryId: '55',
      name: '[Warrior] Wilderness Shield',
    }, {
      id: 19101,
      mainCategoryId: '55',
      name: '[Sorceress] Lumik Helmet',
    }, {
      id: 19102,
      mainCategoryId: '55',
      name: '[Sorceress] Lumik Armor',
    }, {
      id: 19103,
      mainCategoryId: '55',
      name: '[Sorceress] Lumik Gloves',
    }, {
      id: 19104,
      mainCategoryId: '55',
      name: '[Sorceress] Lumik Shoes',
    }, {
      id: 19105,
      mainCategoryId: '55',
      name: '[Sorceress] Bern Helmet',
    }, {
      id: 19106,
      mainCategoryId: '55',
      name: '[Sorceress] Bern Armor',
    }, {
      id: 19107,
      mainCategoryId: '55',
      name: '[Sorceress] Bern Gloves',
    }, {
      id: 19108,
      mainCategoryId: '55',
      name: '[Sorceress] Bern Shoes',
    }, {
      id: 19109,
      mainCategoryId: '55',
      name: '[Sorceress] Eckett Helmet',
    }, {
      id: 19110,
      mainCategoryId: '55',
      name: '[Sorceress] Eckett Armor',
    }, {
      id: 19111,
      mainCategoryId: '55',
      name: '[Sorceress] Eckett Gloves',
    }, {
      id: 19112,
      mainCategoryId: '55',
      name: '[Sorceress] Eckett Shoes',
    }, {
      id: 19117,
      mainCategoryId: '55',
      name: '[Sorceress] Cavaro Helmet',
    }, {
      id: 19118,
      mainCategoryId: '55',
      name: '[Sorceress] Cavaro Armor',
    }, {
      id: 19119,
      mainCategoryId: '55',
      name: '[Sorceress] Cavaro Gloves',
    }, {
      id: 19120,
      mainCategoryId: '55',
      name: '[Sorceress] Cavaro Shoes',
    }, {
      id: 19125,
      mainCategoryId: '55',
      name: '[Sorceress] Clead Helmet',
    }, {
      id: 19126,
      mainCategoryId: '55',
      name: '[Sorceress] Clead Armor',
    }, {
      id: 19127,
      mainCategoryId: '55',
      name: '[Sorceress] Clead Gloves',
    }, {
      id: 19128,
      mainCategoryId: '55',
      name: '[Sorceress] Clead Shoes',
    }, {
      id: 19131,
      mainCategoryId: '55',
      name: '[Sorceress] Lahr Arcien Helmet (R)',
    }, {
      id: 19132,
      mainCategoryId: '55',
      name: '[Sorceress] Lahr Arcien Armor (R)',
    }, {
      id: 19133,
      mainCategoryId: '55',
      name: '[Sorceress] Lahr Arcien Shoes (R)',
    }, {
      id: 19134,
      mainCategoryId: '55',
      name: '[Sorceress] Puff Mini Helmet',
    }, {
      id: 19135,
      mainCategoryId: '55',
      name: '[Sorceress] Puff Mini Armor',
    }, {
      id: 19136,
      mainCategoryId: '55',
      name: '[Sorceress] Puff Mini Gloves',
    }, {
      id: 19137,
      mainCategoryId: '55',
      name: '[Sorceress] Puff Mini Shoes',
    }, {
      id: 19138,
      mainCategoryId: '55',
      name: '[Sorceress] Lahr Arcien Helmet (W)',
    }, {
      id: 19139,
      mainCategoryId: '55',
      name: '[Sorceress] Lahr Arcien Armor (W)',
    }, {
      id: 19140,
      mainCategoryId: '55',
      name: '[Sorceress] Lahr Arcien Shoes (W)',
    }, {
      id: 19141,
      mainCategoryId: '55',
      name: '[Sorceress] Grolia Hat',
    }, {
      id: 19143,
      mainCategoryId: '55',
      name: '[Sorceress] Trilby Headpiece',
    }, {
      id: 19144,
      mainCategoryId: '55',
      name: '[Sorceress] Atanis Helmet',
    }, {
      id: 19145,
      mainCategoryId: '55',
      name: '[Sorceress] Atanis Armor',
    }, {
      id: 19146,
      mainCategoryId: '55',
      name: '[Sorceress] Atanis Shoes',
    }, {
      id: 19151,
      mainCategoryId: '55',
      name: '[Sorceress] Kibelius Armor',
    }, {
      id: 19152,
      mainCategoryId: '55',
      name: '[Sorceress] Spring Blossom Headpiece',
    }, {
      id: 19153,
      mainCategoryId: '55',
      name: '[Sorceress] Spring Blossom Clothes',
    }, {
      id: 19154,
      mainCategoryId: '55',
      name: '[Sorceress] Spring Blossom Shoes',
    }, {
      id: 19181,
      mainCategoryId: '55',
      name: '[Sorceress] Lumik Amulet',
    }, {
      id: 19182,
      mainCategoryId: '55',
      name: '[Sorceress] Bern Amulet',
    }, {
      id: 19183,
      mainCategoryId: '55',
      name: '[Sorceress] Eckett Amulet',
    }, {
      id: 19184,
      mainCategoryId: '55',
      name: '[Sorceress] Cavaro Amulet',
    }, {
      id: 19186,
      mainCategoryId: '55',
      name: '[Sorceress] Clead Amulet',
    }, {
      id: 19188,
      mainCategoryId: '55',
      name: '[Sorceress] Lahr Arcien Amulet (R)',
    }, {
      id: 19189,
      mainCategoryId: '55',
      name: '[Sorceress] Puff Mini Amulet',
    }, {
      id: 19190,
      mainCategoryId: '55',
      name: '[Sorceress] Atanis Amulet',
    }, {
      id: 19191,
      mainCategoryId: '55',
      name: '[Sorceress] Lumik Talisman',
    }, {
      id: 19192,
      mainCategoryId: '55',
      name: '[Sorceress] Bern Talisman',
    }, {
      id: 19193,
      mainCategoryId: '55',
      name: '[Sorceress] Eckett Talisman',
    }, {
      id: 19194,
      mainCategoryId: '55',
      name: '[Sorceress] Cavaro Talisman',
    }, {
      id: 19196,
      mainCategoryId: '55',
      name: '[Sorceress] Clead Talisman',
    }, {
      id: 19198,
      mainCategoryId: '55',
      name: '[Sorceress] Lahr Arcien Talisman (R)',
    }, {
      id: 19199,
      mainCategoryId: '55',
      name: '[Sorceress] Puff Mini Talisman',
    }, {
      id: 19200,
      mainCategoryId: '55',
      name: '[Sorceress] Atanis Talisman',
    }, {
      id: 19201,
      mainCategoryId: '55',
      name: '[Ranger] Bern Helmet',
    }, {
      id: 19202,
      mainCategoryId: '55',
      name: '[Ranger] Bern Armor',
    }, {
      id: 19203,
      mainCategoryId: '55',
      name: '[Ranger] Bern Gloves',
    }, {
      id: 19204,
      mainCategoryId: '55',
      name: '[Ranger] Bern Shoes',
    }, {
      id: 19205,
      mainCategoryId: '55',
      name: '[Ranger] Kyrill Helmet',
    }, {
      id: 19206,
      mainCategoryId: '55',
      name: '[Ranger] Kyrill Armor',
    }, {
      id: 19207,
      mainCategoryId: '55',
      name: '[Ranger] Ignis Helmet',
    }, {
      id: 19208,
      mainCategoryId: '55',
      name: '[Ranger] Ignis Armor',
    }, {
      id: 19209,
      mainCategoryId: '55',
      name: '[Ranger] Ignis Shoes',
    }, {
      id: 19218,
      mainCategoryId: '55',
      name: '[Ranger] Clead Helmet',
    }, {
      id: 19219,
      mainCategoryId: '55',
      name: '[Ranger] Clead Armor',
    }, {
      id: 19220,
      mainCategoryId: '55',
      name: '[Ranger] Clead Gloves',
    }, {
      id: 19221,
      mainCategoryId: '55',
      name: '[Ranger] Clead Shoes',
    }, {
      id: 19222,
      mainCategoryId: '55',
      name: '[Ranger] Cavaro Helmet',
    }, {
      id: 19223,
      mainCategoryId: '55',
      name: '[Ranger] Cavaro Armor',
    }, {
      id: 19224,
      mainCategoryId: '55',
      name: '[Ranger] Cavaro Gloves',
    }, {
      id: 19225,
      mainCategoryId: '55',
      name: '[Ranger] Cavaro Shoes',
    }, {
      id: 19229,
      mainCategoryId: '55',
      name: '[Ranger] Lahr Arcien Helmet (W)',
    }, {
      id: 19230,
      mainCategoryId: '55',
      name: '[Ranger] Lahr Arcien Armor (W)',
    }, {
      id: 19231,
      mainCategoryId: '55',
      name: '[Ranger] Lahr Arcien Shoes (W)',
    }, {
      id: 19233,
      mainCategoryId: '55',
      name: '[Ranger] Puff Mini Helmet',
    }, {
      id: 19234,
      mainCategoryId: '55',
      name: '[Ranger] Puff Mini Armor',
    }, {
      id: 19235,
      mainCategoryId: '55',
      name: '[Ranger] Puff Mini Gloves',
    }, {
      id: 19236,
      mainCategoryId: '55',
      name: '[Ranger] Puff Mini Shoes',
    }, {
      id: 19237,
      mainCategoryId: '55',
      name: '[Ranger] Lahr Arcien Helmet (R)',
    }, {
      id: 19238,
      mainCategoryId: '55',
      name: '[Ranger] Lahr Arcien Armor (R)',
    }, {
      id: 19239,
      mainCategoryId: '55',
      name: '[Ranger] Lahr Arcien Shoes (R)',
    }, {
      id: 19243,
      mainCategoryId: '55',
      name: '[Ranger] Trilby Headpiece',
    }, {
      id: 19244,
      mainCategoryId: '55',
      name: '[Ranger] Atanis Helmet',
    }, {
      id: 19245,
      mainCategoryId: '55',
      name: '[Ranger] Atanis Armor',
    }, {
      id: 19246,
      mainCategoryId: '55',
      name: '[Ranger] Atanis Shoes',
    }, {
      id: 19251,
      mainCategoryId: '55',
      name: '[Ranger] Kibelius Armor',
    }, {
      id: 19252,
      mainCategoryId: '55',
      name: '[Ranger] Spring Blossom Headpiece',
    }, {
      id: 19253,
      mainCategoryId: '55',
      name: '[Ranger] Spring Blossom Clothes',
    }, {
      id: 19254,
      mainCategoryId: '55',
      name: '[Ranger] Spring Blossom Shoes',
    }, {
      id: 19281,
      mainCategoryId: '55',
      name: '[Ranger] Bern Longbow',
    }, {
      id: 19282,
      mainCategoryId: '55',
      name: '[Ranger] Kyrill Longbow',
    }, {
      id: 19283,
      mainCategoryId: '55',
      name: '[Ranger] Ignis Longbow',
    }, {
      id: 19285,
      mainCategoryId: '55',
      name: '[Ranger] Clead Longbow',
    }, {
      id: 19286,
      mainCategoryId: '55',
      name: '[Ranger] Cavaro Longbow',
    }, {
      id: 19288,
      mainCategoryId: '55',
      name: '[Ranger] Lahr Arcien Longbow (W)',
    }, {
      id: 19289,
      mainCategoryId: '55',
      name: '[Ranger] Puff Mini Longbow',
    }, {
      id: 19290,
      mainCategoryId: '55',
      name: '[Ranger] Atanis Longbow',
    }, {
      id: 19291,
      mainCategoryId: '55',
      name: '[Ranger] Bern Dagger',
    }, {
      id: 19292,
      mainCategoryId: '55',
      name: '[Ranger] Kyrill Dagger',
    }, {
      id: 19293,
      mainCategoryId: '55',
      name: '[Ranger] Ignis Dagger',
    }, {
      id: 19295,
      mainCategoryId: '55',
      name: '[Ranger] Clead Dagger',
    }, {
      id: 19296,
      mainCategoryId: '55',
      name: '[Ranger] Cavaro Dagger',
    }, {
      id: 19298,
      mainCategoryId: '55',
      name: '[Ranger] Lahr Arcien Dagger (W)',
    }, {
      id: 19299,
      mainCategoryId: '55',
      name: '[Ranger] Puff Mini Dagger',
    }, {
      id: 19300,
      mainCategoryId: '55',
      name: '[Ranger] Atanis Dagger',
    }, {
      id: 19301,
      mainCategoryId: '55',
      name: '[Berserker] Bethel Helmet',
    }, {
      id: 19302,
      mainCategoryId: '55',
      name: '[Berserker] Bethel Armor',
    }, {
      id: 19303,
      mainCategoryId: '55',
      name: '[Berserker] Bethel Gloves',
    }, {
      id: 19304,
      mainCategoryId: '55',
      name: '[Berserker] Bethel Shoes',
    }, {
      id: 19305,
      mainCategoryId: '55',
      name: '[Berserker] Khaled Helmet',
    }, {
      id: 19306,
      mainCategoryId: '55',
      name: '[Berserker] Khaled Armor',
    }, {
      id: 19307,
      mainCategoryId: '55',
      name: '[Berserker] Khaled Gloves',
    }, {
      id: 19308,
      mainCategoryId: '55',
      name: '[Berserker] Khaled Shoes',
    }, {
      id: 19309,
      mainCategoryId: '55',
      name: '[Berserker] Eckett Helmet',
    }, {
      id: 19310,
      mainCategoryId: '55',
      name: '[Berserker] Eckett Armor',
    }, {
      id: 19311,
      mainCategoryId: '55',
      name: '[Berserker] Eckett Gloves',
    }, {
      id: 19312,
      mainCategoryId: '55',
      name: '[Berserker] Eckett Shoes',
    }, {
      id: 19321,
      mainCategoryId: '55',
      name: '[Berserker] Clead Helmet',
    }, {
      id: 19322,
      mainCategoryId: '55',
      name: '[Berserker] Clead Armor',
    }, {
      id: 19323,
      mainCategoryId: '55',
      name: '[Berserker] Clead Gloves',
    }, {
      id: 19324,
      mainCategoryId: '55',
      name: '[Berserker] Clead Shoes',
    }, {
      id: 19325,
      mainCategoryId: '55',
      name: '[Berserker] Cavaro Helmet',
    }, {
      id: 19326,
      mainCategoryId: '55',
      name: '[Berserker] Cavaro Armor',
    }, {
      id: 19327,
      mainCategoryId: '55',
      name: '[Berserker] Cavaro Gloves',
    }, {
      id: 19328,
      mainCategoryId: '55',
      name: '[Berserker] Cavaro Shoes',
    }, {
      id: 19331,
      mainCategoryId: '55',
      name: '[Berserker] Lahr Arcien Helmet',
    }, {
      id: 19332,
      mainCategoryId: '55',
      name: '[Berserker] Lahr Arcien Armor',
    }, {
      id: 19333,
      mainCategoryId: '55',
      name: '[Berserker] Lahr Arcien Shoes',
    }, {
      id: 19334,
      mainCategoryId: '55',
      name: '[Berserker] Wilderness Helmet',
    }, {
      id: 19335,
      mainCategoryId: '55',
      name: '[Berserker] Wilderness Armor',
    }, {
      id: 19336,
      mainCategoryId: '55',
      name: '[Berserker] Wilderness Shoes',
    }, {
      id: 19337,
      mainCategoryId: '55',
      name: '[Berserker] Cataphract Helmet',
    }, {
      id: 19338,
      mainCategoryId: '55',
      name: '[Berserker] Cataphract Armor',
    }, {
      id: 19339,
      mainCategoryId: '55',
      name: '[Berserker] Cataphract Gloves',
    }, {
      id: 19340,
      mainCategoryId: '55',
      name: '[Berserker] Cataphract Shoes',
    }, {
      id: 19342,
      mainCategoryId: '55',
      name: '[Berserker] Trilby Hat',
    }, {
      id: 19343,
      mainCategoryId: '55',
      name: '[Berserker] Atanis Helmet',
    }, {
      id: 19344,
      mainCategoryId: '55',
      name: '[Berserker] Atanis Armor',
    }, {
      id: 19345,
      mainCategoryId: '55',
      name: '[Berserker] Atanis Shoes',
    }, {
      id: 19348,
      mainCategoryId: '55',
      name: '[Berserker] Kibelius Armor',
    }, {
      id: 19349,
      mainCategoryId: '55',
      name: '[Berserker] Willow Breeze Robe',
    }, {
      id: 19350,
      mainCategoryId: '55',
      name: '[Berserker] Willow Breeze Shoes',
    }, {
      id: 19381,
      mainCategoryId: '55',
      name: '[Berserker] Bethel Axe',
    }, {
      id: 19382,
      mainCategoryId: '55',
      name: '[Berserker] Khaled Axe',
    }, {
      id: 19383,
      mainCategoryId: '55',
      name: '[Berserker] Eckett Axe',
    }, {
      id: 19385,
      mainCategoryId: '55',
      name: '[Berserker] Clead Axe',
    }, {
      id: 19386,
      mainCategoryId: '55',
      name: '[Berserker] Cavaro Axe',
    }, {
      id: 19388,
      mainCategoryId: '55',
      name: '[Berserker] Lahr Arcien Axe',
    }, {
      id: 19389,
      mainCategoryId: '55',
      name: '[Berserker] Atanis Axe',
    }, {
      id: 19390,
      mainCategoryId: '55',
      name: '[Berserker] Wilderness Axe',
    }, {
      id: 19391,
      mainCategoryId: '55',
      name: '[Berserker] Bethel Ornamental Knot',
    }, {
      id: 19392,
      mainCategoryId: '55',
      name: '[Berserker] Khaled Ornamental Knot',
    }, {
      id: 19393,
      mainCategoryId: '55',
      name: '[Berserker] Eckett Ornamental Knot',
    }, {
      id: 19395,
      mainCategoryId: '55',
      name: '[Berserker] Clead Ornamental Knot',
    }, {
      id: 19396,
      mainCategoryId: '55',
      name: '[Berserker] Cavaro Ornamental Knot',
    }, {
      id: 19398,
      mainCategoryId: '55',
      name: '[Berserker] Lahr Arcien Ornamental Knot',
    }, {
      id: 19399,
      mainCategoryId: '55',
      name: '[Berserker] Atanis Ornamental Knot',
    }, {
      id: 19400,
      mainCategoryId: '55',
      name: '[Berserker] Wilderness Ornamental Knot',
    }, {
      id: 19401,
      mainCategoryId: '55',
      name: '[Tamer] Binari Helmet',
    }, {
      id: 19402,
      mainCategoryId: '55',
      name: '[Tamer] Binari Armor',
    }, {
      id: 19403,
      mainCategoryId: '55',
      name: '[Tamer] Binari Gloves',
    }, {
      id: 19404,
      mainCategoryId: '55',
      name: '[Tamer] Binari Shoes',
    }, {
      id: 19405,
      mainCategoryId: '55',
      name: '[Tamer] Puff Mini Helmet',
    }, {
      id: 19406,
      mainCategoryId: '55',
      name: '[Tamer] Puff Mini Armor',
    }, {
      id: 19407,
      mainCategoryId: '55',
      name: '[Tamer] Puff Mini Gloves',
    }, {
      id: 19408,
      mainCategoryId: '55',
      name: '[Tamer] Puff Mini Shoes',
    }, {
      id: 19409,
      mainCategoryId: '55',
      name: '[Tamer] Jegrina Helmet',
    }, {
      id: 19410,
      mainCategoryId: '55',
      name: '[Tamer] Jegrina Armor',
    }, {
      id: 19412,
      mainCategoryId: '55',
      name: '[Tamer] Jegrina Shoes',
    }, {
      id: 19417,
      mainCategoryId: '55',
      name: '[Tamer] Vixen Helmet',
    }, {
      id: 19418,
      mainCategoryId: '55',
      name: '[Tamer] Vixen Armor',
    }, {
      id: 19419,
      mainCategoryId: '55',
      name: '[Tamer] Vixen Shoes',
    }, {
      id: 19420,
      mainCategoryId: '55',
      name: '[Tamer] Lahr Arcien Helmet (W)',
    }, {
      id: 19421,
      mainCategoryId: '55',
      name: '[Tamer] Lahr Arcien Armor (W)',
    }, {
      id: 19422,
      mainCategoryId: '55',
      name: '[Tamer] Lahr Arcien Shoes (W)',
    }, {
      id: 19423,
      mainCategoryId: '55',
      name: '[Tamer] Cavaro Helmet (R)',
    }, {
      id: 19424,
      mainCategoryId: '55',
      name: '[Tamer] Cavaro Armor (R)',
    }, {
      id: 19426,
      mainCategoryId: '55',
      name: '[Tamer] Cavaro Shoes (R)',
    }, {
      id: 19428,
      mainCategoryId: '55',
      name: '[Tamer] Cavaro Helmet (W)',
    }, {
      id: 19429,
      mainCategoryId: '55',
      name: '[Tamer] Cavaro Armor (W)',
    }, {
      id: 19430,
      mainCategoryId: '55',
      name: '[Tamer] Cavaro Gloves (W)',
    }, {
      id: 19431,
      mainCategoryId: '55',
      name: '[Tamer] Cavaro Shoes (W)',
    }, {
      id: 19432,
      mainCategoryId: '55',
      name: '[Tamer] Trilby Headpiece',
    }, {
      id: 19433,
      mainCategoryId: '55',
      name: '[Tamer] Atanis Helmet',
    }, {
      id: 19434,
      mainCategoryId: '55',
      name: '[Tamer] Atanis Armor',
    }, {
      id: 19435,
      mainCategoryId: '55',
      name: '[Tamer] Atanis Shoes',
    }, {
      id: 19440,
      mainCategoryId: '55',
      name: '[Tamer] Kibelius Armor',
    }, {
      id: 19441,
      mainCategoryId: '55',
      name: '[Tamer] Spring Blossom Headpiece',
    }, {
      id: 19442,
      mainCategoryId: '55',
      name: '[Tamer] Spring Blossom Clothes',
    }, {
      id: 19443,
      mainCategoryId: '55',
      name: '[Tamer] Spring Blossom Shoes',
    }, {
      id: 19444,
      mainCategoryId: '55',
      name: '[Tamer] Lahr Arcien Helmet (R)',
    }, {
      id: 19445,
      mainCategoryId: '55',
      name: '[Tamer] Lahr Arcien Armor (R)',
    }, {
      id: 19446,
      mainCategoryId: '55',
      name: '[Tamer] Lahr Arcien Shoes (R)',
    }, {
      id: 19481,
      mainCategoryId: '55',
      name: '[Tamer] Binari Shortsword',
    }, {
      id: 19482,
      mainCategoryId: '55',
      name: '[Tamer] Puff Mini Shortsword',
    }, {
      id: 19483,
      mainCategoryId: '55',
      name: '[Tamer] Jegrina Shortsword',
    }, {
      id: 19485,
      mainCategoryId: '55',
      name: '[Tamer] Vixen Shortsword',
    }, {
      id: 19486,
      mainCategoryId: '55',
      name: '[Tamer] Atanis Shortsword',
    }, {
      id: 19487,
      mainCategoryId: '55',
      name: '[Tamer] Lahr Arcien Shortsword (W)',
    }, {
      id: 19488,
      mainCategoryId: '55',
      name: '[Tamer] Cavaro Shortsword (R)',
    }, {
      id: 19489,
      mainCategoryId: '55',
      name: '[Tamer] Cavaro Shortsword (W)',
    }, {
      id: 19490,
      mainCategoryId: '55',
      name: '[Tamer] Lahr Arcien Shortsword (R)',
    }, {
      id: 19491,
      mainCategoryId: '55',
      name: '[Tamer] Binari Trinket',
    }, {
      id: 19492,
      mainCategoryId: '55',
      name: '[Tamer] Puff Mini Trinket',
    }, {
      id: 19493,
      mainCategoryId: '55',
      name: '[Tamer] Jegrina Trinket',
    }, {
      id: 19495,
      mainCategoryId: '55',
      name: '[Tamer] Vixen Trinket',
    }, {
      id: 19496,
      mainCategoryId: '55',
      name: '[Tamer] Atanis Trinket',
    }, {
      id: 19497,
      mainCategoryId: '55',
      name: '[Tamer] Lahr Arcien Trinket (W)',
    }, {
      id: 19498,
      mainCategoryId: '55',
      name: '[Tamer] Cavaro Trinket (R)',
    }, {
      id: 19499,
      mainCategoryId: '55',
      name: '[Tamer] Cavaro Trinket (W)',
    }, {
      id: 19500,
      mainCategoryId: '55',
      name: '[Tamer] Lahr Arcien Trinket (R)',
    }, {
      id: 19501,
      mainCategoryId: '55',
      name: '[Musa] Wilderness Helmet',
    }, {
      id: 19502,
      mainCategoryId: '55',
      name: '[Musa] Wilderness Armor',
    }, {
      id: 19504,
      mainCategoryId: '55',
      name: '[Musa] Wilderness Shoes',
    }, {
      id: 19509,
      mainCategoryId: '55',
      name: '[Musa] Cataphract Helmet',
    }, {
      id: 19510,
      mainCategoryId: '55',
      name: '[Musa] Cataphract Armor',
    }, {
      id: 19511,
      mainCategoryId: '55',
      name: '[Musa] Cataphract Gloves',
    }, {
      id: 19512,
      mainCategoryId: '55',
      name: '[Musa] Cataphract Shoes',
    }, {
      id: 19518,
      mainCategoryId: '55',
      name: '[Musa] Lahr Arcien Helmet',
    }, {
      id: 19519,
      mainCategoryId: '55',
      name: '[Musa] Lahr Arcien Armor',
    }, {
      id: 19520,
      mainCategoryId: '55',
      name: '[Musa] Lahr Arcien Shoes',
    }, {
      id: 19521,
      mainCategoryId: '55',
      name: '[Musa] Cavaro Helmet',
    }, {
      id: 19522,
      mainCategoryId: '55',
      name: '[Musa] Cavaro Armor',
    }, {
      id: 19523,
      mainCategoryId: '55',
      name: '[Musa] Cavaro Gloves',
    }, {
      id: 19524,
      mainCategoryId: '55',
      name: '[Musa] Cavaro Shoes',
    }, {
      id: 19526,
      mainCategoryId: '55',
      name: '[Musa] Wind Waker Helmet',
    }, {
      id: 19527,
      mainCategoryId: '55',
      name: '[Musa] Wind Waker Armor',
    }, {
      id: 19528,
      mainCategoryId: '55',
      name: '[Musa] Wind Waker Shoes',
    }, {
      id: 19529,
      mainCategoryId: '55',
      name: '[Musa] Trilby Hat',
    }, {
      id: 19530,
      mainCategoryId: '55',
      name: '[Musa] Atanis Helmet',
    }, {
      id: 19531,
      mainCategoryId: '55',
      name: '[Musa] Atanis Armor',
    }, {
      id: 19532,
      mainCategoryId: '55',
      name: '[Musa] Atanis Shoes',
    }, {
      id: 19535,
      mainCategoryId: '55',
      name: '[Musa] Kibelius Armor',
    }, {
      id: 19536,
      mainCategoryId: '55',
      name: '[Musa] Willow Breeze Robe',
    }, {
      id: 19537,
      mainCategoryId: '55',
      name: '[Musa] Willow Breeze Shoes',
    }, {
      id: 19540,
      mainCategoryId: '55',
      name: '[Musa] Vagabond Armor',
    }, {
      id: 19581,
      mainCategoryId: '55',
      name: '[Musa] Wilderness Blade',
    }, {
      id: 19583,
      mainCategoryId: '55',
      name: '[Musa] Cataphract Blade',
    }, {
      id: 19585,
      mainCategoryId: '55',
      name: '[Musa] Wind Waker Blade',
    }, {
      id: 19586,
      mainCategoryId: '55',
      name: '[Musa] Atanis Blade',
    }, {
      id: 19587,
      mainCategoryId: '55',
      name: '[Musa] Lahr Arcien Blade',
    }, {
      id: 19588,
      mainCategoryId: '55',
      name: '[Musa] Vagabond Blade (Katana)',
    }, {
      id: 19591,
      mainCategoryId: '55',
      name: '[Musa] Wilderness Horn Bow',
    }, {
      id: 19593,
      mainCategoryId: '55',
      name: '[Musa] Cataphract Horn Bow',
    }, {
      id: 19595,
      mainCategoryId: '55',
      name: '[Musa] Wind Waker Horn Bow',
    }, {
      id: 19596,
      mainCategoryId: '55',
      name: '[Musa] Atanis Horn Bow',
    }, {
      id: 19597,
      mainCategoryId: '55',
      name: '[Musa] Lahr Arcien Horn Bow',
    }, {
      id: 19885,
      mainCategoryId: '55',
      name: '[Tamer] Grolia Hat',
    }, {
      id: 19886,
      mainCategoryId: '55',
      name: '[Tamer] Rising Dragon Helmet',
    }, {
      id: 19887,
      mainCategoryId: '55',
      name: '[Tamer] Rising Dragon Armor',
    }, {
      id: 19888,
      mainCategoryId: '55',
      name: '[Tamer] Rising Dragon Gloves',
    }, {
      id: 19889,
      mainCategoryId: '55',
      name: '[Tamer] Rising Dragon Shoes',
    }, {
      id: 19890,
      mainCategoryId: '55',
      name: '[Tamer] Rising Dragon Outfit Set',
    }, {
      id: 19923,
      mainCategoryId: '35',
      name: '[Event] Rice Cake Soup',
    }, {
      id: 20065,
      mainCategoryId: '55',
      name: '[Musa] Royal Enforcer Helmet A',
    }, {
      id: 20066,
      mainCategoryId: '55',
      name: '[Musa] Royal Enforcer Armor',
    }, {
      id: 20067,
      mainCategoryId: '55',
      name: '[Musa] Royal Enforcer Outfit Set A',
    }, {
      id: 20069,
      mainCategoryId: '55',
      name: '[Musa] Royal Enforcer Outfit Set B',
    }, {
      id: 20101,
      mainCategoryId: '55',
      name: '[Valkyrie] Venslar Helmet',
    }, {
      id: 20102,
      mainCategoryId: '55',
      name: '[Valkyrie] Venslar Armor',
    }, {
      id: 20103,
      mainCategoryId: '55',
      name: '[Valkyrie] Venslar Shoes (Long)',
    }, {
      id: 20104,
      mainCategoryId: '55',
      name: '[Valkyrie] Venslar Shoes (Short)',
    }, {
      id: 20111,
      mainCategoryId: '55',
      name: '[Valkyrie] Lahr Arcien Helmet (R)',
    }, {
      id: 20112,
      mainCategoryId: '55',
      name: '[Valkyrie] Lahr Arcien Armor (R)',
    }, {
      id: 20113,
      mainCategoryId: '55',
      name: '[Valkyrie] Lahr Arcien Shoes (R)',
    }, {
      id: 20114,
      mainCategoryId: '55',
      name: '[Valkyrie] Puff Mini Helmet',
    }, {
      id: 20115,
      mainCategoryId: '55',
      name: '[Valkyrie] Puff Mini Armor',
    }, {
      id: 20116,
      mainCategoryId: '55',
      name: '[Valkyrie] Puff Mini Gloves',
    }, {
      id: 20117,
      mainCategoryId: '55',
      name: '[Valkyrie] Puff Mini Shoes',
    }, {
      id: 20118,
      mainCategoryId: '55',
      name: '[Valkyrie] Trilby Headpiece',
    }, {
      id: 20123,
      mainCategoryId: '55',
      name: '[Valkyrie] Atanis Helmet',
    }, {
      id: 20124,
      mainCategoryId: '55',
      name: '[Valkyrie] Atanis Armor',
    }, {
      id: 20125,
      mainCategoryId: '55',
      name: '[Valkyrie] Atanis Shoes',
    }, {
      id: 20130,
      mainCategoryId: '55',
      name: '[Valkyrie] Cavaro Helmet',
    }, {
      id: 20131,
      mainCategoryId: '55',
      name: '[Valkyrie] Cavaro Armor',
    }, {
      id: 20132,
      mainCategoryId: '55',
      name: '[Valkyrie] Cavaro Gloves',
    }, {
      id: 20133,
      mainCategoryId: '55',
      name: '[Valkyrie] Cavaro Shoes',
    }, {
      id: 20134,
      mainCategoryId: '55',
      name: '[Valkyrie] Lahr Arcien Helmet (W)',
    }, {
      id: 20135,
      mainCategoryId: '55',
      name: '[Valkyrie] Lahr Arcien Armor (W)',
    }, {
      id: 20136,
      mainCategoryId: '55',
      name: '[Valkyrie] Lahr Arcien Shoes (W)',
    }, {
      id: 20137,
      mainCategoryId: '55',
      name: '[Valkyrie] Kibelius Armor',
    }, {
      id: 20138,
      mainCategoryId: '55',
      name: '[Valkyrie] Spring Blossom Headpiece',
    }, {
      id: 20139,
      mainCategoryId: '55',
      name: '[Valkyrie] Spring Blossom Clothes',
    }, {
      id: 20140,
      mainCategoryId: '55',
      name: '[Valkyrie] Spring Blossom Shoes',
    }, {
      id: 20181,
      mainCategoryId: '55',
      name: '[Valkyrie] Venslar Longsword',
    }, {
      id: 20183,
      mainCategoryId: '55',
      name: '[Valkyrie] Puff Mini Longsword',
    }, {
      id: 20185,
      mainCategoryId: '55',
      name: '[Valkyrie] Atanis Longsword',
    }, {
      id: 20186,
      mainCategoryId: '55',
      name: '[Valkyrie] Lahr Arcien Longsword (R)',
    }, {
      id: 20187,
      mainCategoryId: '55',
      name: '[Valkyrie] Cavaro Longsword',
    }, {
      id: 20188,
      mainCategoryId: '55',
      name: '[Valkyrie] Lahr Arcien Longsword (W)',
    }, {
      id: 20191,
      mainCategoryId: '55',
      name: '[Valkyrie] Venslar Shield',
    }, {
      id: 20193,
      mainCategoryId: '55',
      name: '[Valkyrie] Puff Mini Shield',
    }, {
      id: 20195,
      mainCategoryId: '55',
      name: '[Valkyrie] Atanis Shield',
    }, {
      id: 20196,
      mainCategoryId: '55',
      name: '[Valkyrie] Lahr Arcien Shield (R)',
    }, {
      id: 20197,
      mainCategoryId: '55',
      name: '[Valkyrie] Cavaro Shield',
    }, {
      id: 20198,
      mainCategoryId: '55',
      name: '[Valkyrie] Lahr Arcien Shield (W)',
    }, {
      id: 20199,
      mainCategoryId: '55',
      name: '[Kunoichi] Kibelius Divinus Classic Set',
    }, {
      id: 20200,
      mainCategoryId: '55',
      name: '[Kunoichi] Kibelius Classic Set',
    }, {
      id: 20301,
      mainCategoryId: '55',
      name: '[Maehwa] Red Moon Headpiece',
    }, {
      id: 20302,
      mainCategoryId: '55',
      name: '[Maehwa] Red Moon Clothes',
    }, {
      id: 20303,
      mainCategoryId: '55',
      name: '[Maehwa] Red Moon Gloves',
    }, {
      id: 20304,
      mainCategoryId: '55',
      name: '[Maehwa] Red Moon Shoes',
    }, {
      id: 20310,
      mainCategoryId: '55',
      name: '[Maehwa] Trilby Headpiece',
    }, {
      id: 20315,
      mainCategoryId: '55',
      name: '[Maehwa] Puff Mini Helmet',
    }, {
      id: 20316,
      mainCategoryId: '55',
      name: '[Maehwa] Puff Mini Armor',
    }, {
      id: 20317,
      mainCategoryId: '55',
      name: '[Maehwa] Puff Mini Gloves',
    }, {
      id: 20318,
      mainCategoryId: '55',
      name: '[Maehwa] Puff Mini Shoes',
    }, {
      id: 20319,
      mainCategoryId: '55',
      name: '[Maehwa] Jegrina Helmet',
    }, {
      id: 20320,
      mainCategoryId: '55',
      name: '[Maehwa] Jegrina Armor',
    }, {
      id: 20321,
      mainCategoryId: '55',
      name: '[Maehwa] Jegrina Shoes',
    }, {
      id: 20322,
      mainCategoryId: '55',
      name: '[Maehwa] Cavaro Helmet',
    }, {
      id: 20323,
      mainCategoryId: '55',
      name: '[Maehwa] Cavaro Armor',
    }, {
      id: 20324,
      mainCategoryId: '55',
      name: '[Maehwa] Cavaro Gloves',
    }, {
      id: 20325,
      mainCategoryId: '55',
      name: '[Maehwa] Cavaro Shoes',
    }, {
      id: 20326,
      mainCategoryId: '55',
      name: '[Maehwa] Lahr Arcien Helmet (W)',
    }, {
      id: 20327,
      mainCategoryId: '55',
      name: '[Maehwa] Lahr Arcien Armor (W)',
    }, {
      id: 20328,
      mainCategoryId: '55',
      name: '[Maehwa] Lahr Arcien Shoes (W)',
    }, {
      id: 20329,
      mainCategoryId: '55',
      name: '[Maehwa] Kibelius Armor',
    }, {
      id: 20330,
      mainCategoryId: '55',
      name: '[Maehwa] Spring Blossom Headpiece',
    }, {
      id: 20331,
      mainCategoryId: '55',
      name: '[Maehwa] Spring Blossom Clothes',
    }, {
      id: 20332,
      mainCategoryId: '55',
      name: '[Maehwa] Spring Blossom Shoes',
    }, {
      id: 20333,
      mainCategoryId: '55',
      name: '[Maehwa] Lahr Arcien Helmet (R)',
    }, {
      id: 20334,
      mainCategoryId: '55',
      name: '[Maehwa] Lahr Arcien Armor (R)',
    }, {
      id: 20335,
      mainCategoryId: '55',
      name: '[Maehwa] Lahr Arcien Shoes (R)',
    }, {
      id: 20381,
      mainCategoryId: '55',
      name: '[Maehwa] Red Moon Blade',
    }, {
      id: 20383,
      mainCategoryId: '55',
      name: '[Maehwa] Puff Mini Blade',
    }, {
      id: 20384,
      mainCategoryId: '55',
      name: '[Maehwa] Jegrina Blade',
    }, {
      id: 20385,
      mainCategoryId: '55',
      name: '[Maehwa] Cavaro Blade',
    }, {
      id: 20386,
      mainCategoryId: '55',
      name: '[Maehwa] Lahr Arcien Blade (W)',
    }, {
      id: 20387,
      mainCategoryId: '55',
      name: '[Maehwa] Lahr Arcien Blade (R)',
    }, {
      id: 20391,
      mainCategoryId: '55',
      name: '[Maehwa] Red Moon Horn Bow',
    }, {
      id: 20393,
      mainCategoryId: '55',
      name: '[Maehwa] Puff Mini Horn Bow',
    }, {
      id: 20394,
      mainCategoryId: '55',
      name: '[Maehwa] Jegrina Horn Bow',
    }, {
      id: 20395,
      mainCategoryId: '55',
      name: '[Maehwa] Cavaro Horn Bow',
    }, {
      id: 20396,
      mainCategoryId: '55',
      name: '[Maehwa] Lahr Arcien Horn Bow (W)',
    }, {
      id: 20397,
      mainCategoryId: '55',
      name: '[Maehwa] Lahr Arcien Horn Bow (R)',
    }, {
      id: 20446,
      mainCategoryId: '55',
      name: '[Maehwa] Grolia Hat',
    }, {
      id: 20447,
      mainCategoryId: '55',
      name: '[Maehwa] Rising Dragon Helmet',
    }, {
      id: 20448,
      mainCategoryId: '55',
      name: '[Maehwa] Rising Dragon Armor',
    }, {
      id: 20449,
      mainCategoryId: '55',
      name: '[Maehwa] Rising Dragon Shoes',
    }, {
      id: 20450,
      mainCategoryId: '55',
      name: '[Maehwa] Rising Dragon Outfit Set',
    }, {
      id: 20764,
      mainCategoryId: '55',
      name: '[Witch] Grolia Hat',
    }, {
      id: 20765,
      mainCategoryId: '55',
      name: '[Wizard] Trilby Hat',
    }, {
      id: 20766,
      mainCategoryId: '55',
      name: '[Witch] Trilby Headpiece',
    }, {
      id: 21003,
      mainCategoryId: '55',
      name: 'Iron Scale Horse Gear Set',
    }, {
      id: 21008,
      mainCategoryId: '55',
      name: 'Karlstein Horse Gear Set',
    }, {
      id: 21012,
      mainCategoryId: '55',
      name: 'Trina Knight Horse Gear Set',
    }, {
      id: 21018,
      mainCategoryId: '55',
      name: 'Skeletal Horse Set',
    }, {
      id: 21019,
      mainCategoryId: '55',
      name: 'Krenvatz Horse Set',
    }, {
      id: 21021,
      mainCategoryId: '55',
      name: '[Warrior] Bern Classic Set',
    }, {
      id: 21022,
      mainCategoryId: '55',
      name: '[Warrior] Clead Classic Set',
    }, {
      id: 21023,
      mainCategoryId: '55',
      name: '[Warrior] Karcenov Classic Set',
    }, {
      id: 21024,
      mainCategoryId: '55',
      name: '[Warrior] Cavaro Classic Set',
    }, {
      id: 21025,
      mainCategoryId: '55',
      name: '[Warrior] Evergart Classic Set',
    }, {
      id: 21026,
      mainCategoryId: '55',
      name: '[Warrior] Lahr Arcien Classic Set',
    }, {
      id: 21031,
      mainCategoryId: '55',
      name: '[Warrior] Atanis Classic Set',
    }, {
      id: 21032,
      mainCategoryId: '55',
      name: '[Warrior] Red Robe Classic Set',
    }, {
      id: 21033,
      mainCategoryId: '55',
      name: '[Warrior] Karlstein Classic Set',
    }, {
      id: 21034,
      mainCategoryId: '55',
      name: '[Warrior] Kibelius Divinus Classic Set',
    }, {
      id: 21035,
      mainCategoryId: '55',
      name: '[Warrior] Wilderness Classic Set',
    }, {
      id: 21036,
      mainCategoryId: '55',
      name: '[Warrior] Kibelius Classic Set',
    }, {
      id: 21038,
      mainCategoryId: '55',
      name: '[Warrior] Epheria Marine Classic Set',
    }, {
      id: 21040,
      mainCategoryId: '55',
      name: '[Warrior] Cantusa Classic Set',
    }, {
      id: 21041,
      mainCategoryId: '55',
      name: '[Ranger] Bern Classic Set',
    }, {
      id: 21042,
      mainCategoryId: '55',
      name: '[Ranger] Kyrill Classic Set',
    }, {
      id: 21045,
      mainCategoryId: '55',
      name: '[Ranger] Cavaro Classic Set',
    }, {
      id: 21046,
      mainCategoryId: '55',
      name: '[Ranger] Clead Classic Set',
    }, {
      id: 21047,
      mainCategoryId: '55',
      name: '[Ranger] Lahr Arcien Classic Set (W)',
    }, {
      id: 21050,
      mainCategoryId: '55',
      name: '[Ranger] Ignis Classic Set',
    }, {
      id: 21052,
      mainCategoryId: '55',
      name: '[Ranger] Puff Mini Classic Set',
    }, {
      id: 21053,
      mainCategoryId: '55',
      name: '[Ranger] Atanis Classic Set',
    }, {
      id: 21054,
      mainCategoryId: '55',
      name: '[Ranger] Tyrie (Long) Classic Set',
    }, {
      id: 21055,
      mainCategoryId: '55',
      name: '[Ranger] Tyrie (Short) Classic Set',
    }, {
      id: 21056,
      mainCategoryId: '55',
      name: '[Ranger] Karlstein Classic Set',
    }, {
      id: 21057,
      mainCategoryId: '55',
      name: '[Ranger] Kibelius Divinus Classic Set',
    }, {
      id: 21058,
      mainCategoryId: '55',
      name: '[Ranger] Kibelius Classic Set',
    }, {
      id: 21060,
      mainCategoryId: '55',
      name: '[Ranger] Epheria Marine Classic Set',
    }, {
      id: 21061,
      mainCategoryId: '55',
      name: '[Sorceress] Lumik Classic Set',
    }, {
      id: 21062,
      mainCategoryId: '55',
      name: '[Sorceress] Eckett Classic Set',
    }, {
      id: 21064,
      mainCategoryId: '55',
      name: '[Sorceress] Cavaro Classic Set',
    }, {
      id: 21065,
      mainCategoryId: '55',
      name: '[Sorceress] Clead Classic Set',
    }, {
      id: 21066,
      mainCategoryId: '55',
      name: '[Sorceress] Lahr Arcien Classic Set (R)',
    }, {
      id: 21069,
      mainCategoryId: '55',
      name: '[Sorceress] Bern Classic Set',
    }, {
      id: 21071,
      mainCategoryId: '55',
      name: '[Sorceress] Puff Mini Classic Set',
    }, {
      id: 21072,
      mainCategoryId: '55',
      name: '[Sorceress] Atanis Classic Set',
    }, {
      id: 21073,
      mainCategoryId: '55',
      name: '[Sorceress] Tyrie (Long) Classic Set',
    }, {
      id: 21074,
      mainCategoryId: '55',
      name: '[Sorceress] Tyrie (Short) Classic Set',
    }, {
      id: 21075,
      mainCategoryId: '55',
      name: '[Sorceress] Karlstein Classic Set',
    }, {
      id: 21076,
      mainCategoryId: '55',
      name: '[Sorceress] Kibelius Divinus Classic Set',
    }, {
      id: 21077,
      mainCategoryId: '55',
      name: '[Sorceress] Lahr Arcien Classic Set (W)',
    }, {
      id: 21078,
      mainCategoryId: '55',
      name: '[Sorceress] Kibelius Classic Set',
    }, {
      id: 21080,
      mainCategoryId: '55',
      name: '[Sorceress] Epheria Marine Classic Set',
    }, {
      id: 21081,
      mainCategoryId: '55',
      name: '[Berserker] Bethel Classic Set',
    }, {
      id: 21082,
      mainCategoryId: '55',
      name: '[Berserker] Eckett Classic Set',
    }, {
      id: 21084,
      mainCategoryId: '55',
      name: '[Berserker] Cavaro Classic Set',
    }, {
      id: 21085,
      mainCategoryId: '55',
      name: '[Berserker] Clead Classic Set',
    }, {
      id: 21086,
      mainCategoryId: '55',
      name: '[Berserker] Lahr Arcien Classic Set',
    }, {
      id: 21089,
      mainCategoryId: '55',
      name: '[Berserker] Khaled Classic Set',
    }, {
      id: 21091,
      mainCategoryId: '55',
      name: '[Berserker] Atanis Classic Set',
    }, {
      id: 21092,
      mainCategoryId: '55',
      name: '[Berserker] Red Robe Classic Set',
    }, {
      id: 21093,
      mainCategoryId: '55',
      name: '[Berserker] Karlstein Classic Set',
    }, {
      id: 21094,
      mainCategoryId: '55',
      name: '[Berserker] Kibelius Divinus Classic Set',
    }, {
      id: 21095,
      mainCategoryId: '55',
      name: '[Berserker] Wilderness Classic Set',
    }, {
      id: 21096,
      mainCategoryId: '55',
      name: '[Berserker] Kibelius Classic Set',
    }, {
      id: 21098,
      mainCategoryId: '55',
      name: '[Berserker] Epheria Marine Classic Set',
    }, {
      id: 21100,
      mainCategoryId: '55',
      name: '[Berserker] Cantusa Classic Set',
    }, {
      id: 21101,
      mainCategoryId: '55',
      name: '[Tamer] Puff Mini Classic Set',
    }, {
      id: 21102,
      mainCategoryId: '55',
      name: '[Tamer] Binari Classic Set',
    }, {
      id: 21103,
      mainCategoryId: '55',
      name: '[Tamer] Jegrina Classic Set',
    }, {
      id: 21104,
      mainCategoryId: '55',
      name: '[Tamer] Vixen Classic Set',
    }, {
      id: 21108,
      mainCategoryId: '55',
      name: '[Tamer] Lahr Arcien Classic Set (W)',
    }, {
      id: 21109,
      mainCategoryId: '55',
      name: '[Tamer] Cavaro R Classic Set',
    }, {
      id: 21110,
      mainCategoryId: '55',
      name: '[Tamer] Cavaro Classic Set (W)',
    }, {
      id: 21111,
      mainCategoryId: '55',
      name: '[Tamer] Atanis Classic Set',
    }, {
      id: 21112,
      mainCategoryId: '55',
      name: '[Tamer] Tyrie (Long) Classic Set',
    }, {
      id: 21113,
      mainCategoryId: '55',
      name: '[Tamer] Tyrie (Short) Classic Set',
    }, {
      id: 21114,
      mainCategoryId: '55',
      name: '[Tamer] Karlstein Classic Set',
    }, {
      id: 21115,
      mainCategoryId: '55',
      name: '[Tamer] Kibelius Divinus Classic Set',
    }, {
      id: 21116,
      mainCategoryId: '55',
      name: '[Tamer] Kibelius Classic Set',
    }, {
      id: 21118,
      mainCategoryId: '55',
      name: '[Tamer] Epheria Marine Classic Set',
    }, {
      id: 21119,
      mainCategoryId: '55',
      name: '[Tamer] Lahr Arcien Classic Set (R)',
    }, {
      id: 21121,
      mainCategoryId: '55',
      name: '[Musa] Wilderness Classic Set',
    }, {
      id: 21122,
      mainCategoryId: '55',
      name: '[Musa] Cataphract Classic Set',
    }, {
      id: 21126,
      mainCategoryId: '55',
      name: '[Musa] Lahr Arcien Classic Set',
    }, {
      id: 21127,
      mainCategoryId: '55',
      name: '[Musa] Wind Waker Classic Set',
    }, {
      id: 21128,
      mainCategoryId: '55',
      name: '[Musa] Atanis Classic Set',
    }, {
      id: 21129,
      mainCategoryId: '55',
      name: '[Musa] Red Robe Classic Set',
    }, {
      id: 21130,
      mainCategoryId: '55',
      name: '[Musa] Karlstein Classic Set',
    }, {
      id: 21131,
      mainCategoryId: '55',
      name: '[Musa] Kibelius Divinus Classic Set',
    }, {
      id: 21132,
      mainCategoryId: '55',
      name: '[Musa] Kibelius Classic Set',
    }, {
      id: 21134,
      mainCategoryId: '55',
      name: '[Musa] Epheria Marine Classic Set',
    }, {
      id: 21136,
      mainCategoryId: '55',
      name: '[Musa] Cantusa Classic Set',
    }, {
      id: 21137,
      mainCategoryId: '55',
      name: '[Tamer] White Dragon Classic Set',
    }, {
      id: 21138,
      mainCategoryId: '55',
      name: '[Tamer] White Dragon Premium Set',
    }, {
      id: 21140,
      mainCategoryId: '55',
      name: '[Witch] Lahr Arcien Classic Set (R)',
    }, {
      id: 21144,
      mainCategoryId: '55',
      name: '[Valkyrie] Venslar (Long) Classic Set',
    }, {
      id: 21145,
      mainCategoryId: '55',
      name: '[Valkyrie] Venslar (Short) Classic Set',
    }, {
      id: 21146,
      mainCategoryId: '55',
      name: '[Valkyrie] Lahr Arcien Classic Set (R)',
    }, {
      id: 21147,
      mainCategoryId: '55',
      name: '[Valkyrie] Puff Mini Classic Set',
    }, {
      id: 21150,
      mainCategoryId: '55',
      name: '[Valkyrie] Atanis Classic Set',
    }, {
      id: 21151,
      mainCategoryId: '55',
      name: '[Valkyrie] Tyrie (Long) Classic Set',
    }, {
      id: 21152,
      mainCategoryId: '55',
      name: '[Valkyrie] Tyrie (Short) Classic Set',
    }, {
      id: 21153,
      mainCategoryId: '55',
      name: '[Valkyrie] Karlstein Classic Set',
    }, {
      id: 21154,
      mainCategoryId: '55',
      name: '[Valkyrie] Kibelius Divinus Classic Set',
    }, {
      id: 21155,
      mainCategoryId: '55',
      name: '[Valkyrie] Cavaro Classic Set',
    }, {
      id: 21156,
      mainCategoryId: '55',
      name: '[Valkyrie] Lahr Arcien Classic Set (W)',
    }, {
      id: 21157,
      mainCategoryId: '55',
      name: '[Valkyrie] Kibelius Classic Set',
    }, {
      id: 21159,
      mainCategoryId: '55',
      name: '[Valkyrie] Epheria Marine Classic Set',
    }, {
      id: 21164,
      mainCategoryId: '55',
      name: '[Maehwa] Red Moon Classic Set',
    }, {
      id: 21165,
      mainCategoryId: '55',
      name: '[Maehwa] Puff Mini Classic Set',
    }, {
      id: 21166,
      mainCategoryId: '55',
      name: '[Maehwa] Jegrina Classic Set',
    }, {
      id: 21167,
      mainCategoryId: '55',
      name: '[Maehwa] Cavaro Classic Set',
    }, {
      id: 21168,
      mainCategoryId: '55',
      name: '[Maehwa] Lahr Arcien Classic Set (W)',
    }, {
      id: 21169,
      mainCategoryId: '55',
      name: '[Maehwa] Tyrie (Long) Classic Set',
    }, {
      id: 21170,
      mainCategoryId: '55',
      name: '[Maehwa] Tyrie (Short) Classic Set',
    }, {
      id: 21171,
      mainCategoryId: '55',
      name: '[Maehwa] Karlstein Classic Set',
    }, {
      id: 21172,
      mainCategoryId: '55',
      name: '[Maehwa] Kibelius Divinus Classic Set',
    }, {
      id: 21173,
      mainCategoryId: '55',
      name: '[Maehwa] Kibelius Classic Set',
    }, {
      id: 21175,
      mainCategoryId: '55',
      name: '[Maehwa] Epheria Marine Classic Set',
    }, {
      id: 21176,
      mainCategoryId: '55',
      name: '[Maehwa] Lahr Arcien Classic Set (R)',
    }, {
      id: 21178,
      mainCategoryId: '55',
      name: '[Maehwa] Atanis Classic Set',
    }, {
      id: 21185,
      mainCategoryId: '55',
      name: '[Wizard] Inquirer\'s Destiny Classic Set',
    }, {
      id: 21186,
      mainCategoryId: '55',
      name: '[Wizard] Karlstein Classic Set',
    }, {
      id: 21187,
      mainCategoryId: '55',
      name: '[Wizard] Lahr Arcien Classic Set',
    }, {
      id: 21188,
      mainCategoryId: '55',
      name: '[Wizard] Kibelius Divinus Classic Set',
    }, {
      id: 21189,
      mainCategoryId: '55',
      name: '[Wizard] Kibelius Classic Set',
    }, {
      id: 21191,
      mainCategoryId: '55',
      name: '[Wizard] Epheria Marine Classic Set',
    }, {
      id: 21193,
      mainCategoryId: '55',
      name: '[Wizard] Cantusa Classic Set',
    }, {
      id: 21194,
      mainCategoryId: '55',
      name: '[Wizard] Crescent Moon Classic Set',
    }, {
      id: 21195,
      mainCategoryId: '55',
      name: '[Maehwa] Order of the Apricot Classic Set',
    }, {
      id: 21196,
      mainCategoryId: '55',
      name: '[Maehwa] Order of the Apricot Premium Set',
    }, {
      id: 21198,
      mainCategoryId: '55',
      name: '[Ninja] Kibelius Divinus Classic Set',
    }, {
      id: 21199,
      mainCategoryId: '55',
      name: '[Ninja] Kibelius Classic Set',
    }, {
      id: 21205,
      mainCategoryId: '55',
      name: '[Witch] Dreaming Star Classic Set',
    }, {
      id: 21206,
      mainCategoryId: '55',
      name: '[Witch] Karlstein Classic Set',
    }, {
      id: 21207,
      mainCategoryId: '55',
      name: '[Witch] Lahr Arcien Classic Set (W)',
    }, {
      id: 21208,
      mainCategoryId: '55',
      name: '[Witch] Kibelius Divinus Classic Set',
    }, {
      id: 21209,
      mainCategoryId: '55',
      name: '[Witch] Puff Mini Classic Set',
    }, {
      id: 21210,
      mainCategoryId: '55',
      name: '[Witch] Kibelius Classic Set',
    }, {
      id: 21212,
      mainCategoryId: '55',
      name: '[Witch] Epheria Marine Classic Set',
    }, {
      id: 21218,
      mainCategoryId: '55',
      name: '[Ranger] Ladellin Premium Set',
    }, {
      id: 21220,
      mainCategoryId: '55',
      name: '[Witch] Weenie Looney Classic Set',
    }, {
      id: 21221,
      mainCategoryId: '55',
      name: '[Kunoichi] Sicarios Classic Set',
    }, {
      id: 21223,
      mainCategoryId: '55',
      name: '[Kunoichi] Epheria Marine Classic Set',
    }, {
      id: 21228,
      mainCategoryId: '55',
      name: '[Kunoichi] Karlstein Classic Set',
    }, {
      id: 21229,
      mainCategoryId: '55',
      name: '[Kunoichi] Spring Blossom Outfit Set',
    }, {
      id: 21230,
      mainCategoryId: '55',
      name: '[Kunoichi] Puff Mini Classic Set',
    }, {
      id: 21236,
      mainCategoryId: '55',
      name: '[Warrior] New Year Hanbok Outfit Set',
    }, {
      id: 21237,
      mainCategoryId: '55',
      name: '[Ranger] New Year Hanbok Outfit Set',
    }, {
      id: 21238,
      mainCategoryId: '55',
      name: '[Sorceress] New Year Hanbok Outfit Set',
    }, {
      id: 21239,
      mainCategoryId: '55',
      name: '[Berserker] New Year Hanbok Outfit Set',
    }, {
      id: 21240,
      mainCategoryId: '55',
      name: '[Tamer] New Year Hanbok Outfit Set',
    }, {
      id: 21241,
      mainCategoryId: '55',
      name: '[Musa] New Year Hanbok Outfit Set',
    }, {
      id: 21242,
      mainCategoryId: '55',
      name: '[Valkyrie] New Year Hanbok Outfit Set',
    }, {
      id: 21243,
      mainCategoryId: '55',
      name: '[Maehwa] New Year Hanbok Outfit Set',
    }, {
      id: 21244,
      mainCategoryId: '55',
      name: '[Wizard] New Year Hanbok Outfit Set',
    }, {
      id: 21245,
      mainCategoryId: '55',
      name: '[Witch] New Year Hanbok Outfit Set',
    }, {
      id: 21246,
      mainCategoryId: '55',
      name: '[Kunoichi] New Year Hanbok Outfit Set',
    }, {
      id: 21247,
      mainCategoryId: '55',
      name: '[Ninja] New Year Hanbok Outfit Set',
    }, {
      id: 21250,
      mainCategoryId: '55',
      name: '[Ranger] Gotha Rensa Classic Set',
    }, {
      id: 21251,
      mainCategoryId: '55',
      name: '[Ranger] Gotha Rensa Premium Set',
    }, {
      id: 21253,
      mainCategoryId: '55',
      name: '[Berserker] Gotha Rensa Classic Set',
    }, {
      id: 21254,
      mainCategoryId: '55',
      name: '[Berserker] Gotha Rensa Premium Set',
    }, {
      id: 21256,
      mainCategoryId: '55',
      name: '[Musa] Western Frontiers Classic Set',
    }, {
      id: 21257,
      mainCategoryId: '55',
      name: '[Musa] Western Frontiers Premium Set',
    }, {
      id: 21260,
      mainCategoryId: '55',
      name: '[Maehwa] Trumpet Creeper Classic Set',
    }, {
      id: 21261,
      mainCategoryId: '55',
      name: '[Wizard] Amethyst Classic Set',
    }, {
      id: 21262,
      mainCategoryId: '55',
      name: '[Witch] Deneve Classic Set',
    }, {
      id: 21263,
      mainCategoryId: '55',
      name: '[Tamer] Daru Classic Set',
    }, {
      id: 21264,
      mainCategoryId: '55',
      name: '[Tamer] Daru Premium Set',
    }, {
      id: 21274,
      mainCategoryId: '55',
      name: '[Valkyrie] Enslar Classic Set',
    }, {
      id: 21275,
      mainCategoryId: '55',
      name: '[Valkyrie] Enslar Premium Set',
    }, {
      id: 21279,
      mainCategoryId: '55',
      name: '[Sorceress] Papillio Classic Set',
    }, {
      id: 21280,
      mainCategoryId: '55',
      name: '[Sorceress] Papillio Premium Set',
    }, {
      id: 21282,
      mainCategoryId: '55',
      name: '[Kunoichi] Golden Scale Classic Set',
    }, {
      id: 21283,
      mainCategoryId: '55',
      name: '[Ninja] Aegis Classic Set',
    }, {
      id: 21284,
      mainCategoryId: '55',
      name: '[Warrior] Gavi Regan Classic Set',
    }, {
      id: 21285,
      mainCategoryId: '55',
      name: '[Warrior] Gavi Regan Premium Set',
    }, {
      id: 21308,
      mainCategoryId: '55',
      name: '[Witch] Labreve Classic Set',
    }, {
      id: 21309,
      mainCategoryId: '55',
      name: '[Witch] Labreve Premium Set',
    }, {
      id: 21313,
      mainCategoryId: '55',
      name: '[Warrior] Marine Romance Outfit Set',
    }, {
      id: 21314,
      mainCategoryId: '55',
      name: '[Ranger] Marine Romance Outfit Set',
    }, {
      id: 21315,
      mainCategoryId: '55',
      name: '[Sorceress] Marine Romance Outfit Set',
    }, {
      id: 21316,
      mainCategoryId: '55',
      name: '[Berserker] Marine Romance Outfit Set',
    }, {
      id: 21317,
      mainCategoryId: '55',
      name: '[Tamer] Marine Romance Outfit Set',
    }, {
      id: 21318,
      mainCategoryId: '55',
      name: '[Musa] Marine Romance Outfit Set',
    }, {
      id: 21319,
      mainCategoryId: '55',
      name: '[Valkyrie] Marine Romance Outfit Set',
    }, {
      id: 21320,
      mainCategoryId: '55',
      name: '[Maehwa] Marine Romance Outfit Set',
    }, {
      id: 21321,
      mainCategoryId: '55',
      name: '[Wizard] Marine Romance Outfit Set',
    }, {
      id: 21322,
      mainCategoryId: '55',
      name: '[Witch] Marine Romance Outfit Set',
    }, {
      id: 21323,
      mainCategoryId: '55',
      name: '[Kunoichi] Marine Romance Outfit Set',
    }, {
      id: 21324,
      mainCategoryId: '55',
      name: '[Ninja] Marine Romance Outfit Set',
    }, {
      id: 21338,
      mainCategoryId: '55',
      name: '[Berserker] Gavi Regan Classic Set',
    }, {
      id: 21339,
      mainCategoryId: '55',
      name: '[Berserker] Gavi Regan Premium Set',
    }, {
      id: 21341,
      mainCategoryId: '55',
      name: '[Musa] Gavi Regan Classic Set',
    }, {
      id: 21342,
      mainCategoryId: '55',
      name: '[Musa] Gavi Regan Premium Set',
    }, {
      id: 21344,
      mainCategoryId: '55',
      name: '[Wizard] Gavi Regan Classic Set',
    }, {
      id: 21345,
      mainCategoryId: '55',
      name: '[Ninja] Gavi Regan Classic Set',
    }, {
      id: 21346,
      mainCategoryId: '55',
      name: '[Ninja] Gavi Regan Premium Set',
    }, {
      id: 21349,
      mainCategoryId: '55',
      name: '[Warrior] Brut Lancelot Classic Set',
    }, {
      id: 21350,
      mainCategoryId: '55',
      name: '[Warrior] Brut Lancelot Premium Set',
    }, {
      id: 21352,
      mainCategoryId: '55',
      name: '[Sorceress] Kisleev Classic Set',
    }, {
      id: 21353,
      mainCategoryId: '55',
      name: '[Sorceress] Kisleev Premium Set',
    }, {
      id: 21355,
      mainCategoryId: '55',
      name: '[Berserker] BD9 Classic Set',
    }, {
      id: 21356,
      mainCategoryId: '55',
      name: '[Berserker] BD9 Premium Set',
    }, {
      id: 21358,
      mainCategoryId: '55',
      name: '[Musa] Palgong Classic Set',
    }, {
      id: 21359,
      mainCategoryId: '55',
      name: '[Musa] Palgong Premium Set',
    }, {
      id: 21361,
      mainCategoryId: '55',
      name: '[Valkyrie] Fallen Garzar Classic Set',
    }, {
      id: 21362,
      mainCategoryId: '55',
      name: '[Valkyrie] Fallen Garzar Premium Set',
    }, {
      id: 21364,
      mainCategoryId: '55',
      name: '[Witch] Cavaro Classic Set',
    }, {
      id: 21365,
      mainCategoryId: '55',
      name: '[Kunoichi] Ayo Classic Set',
    }, {
      id: 21366,
      mainCategoryId: '55',
      name: '[Kunoichi] Ayo Premium Set',
    }, {
      id: 21370,
      mainCategoryId: '55',
      name: '[Ninja] Narusawa Classic Set',
    }, {
      id: 21371,
      mainCategoryId: '55',
      name: '[Ninja] Narusawa Premium Set',
    }, {
      id: 21373,
      mainCategoryId: '55',
      name: '[Warrior] Bolyn Classic Set',
    }, {
      id: 21374,
      mainCategoryId: '55',
      name: '[Warrior] Bolyn Premium Set',
    }, {
      id: 21376,
      mainCategoryId: '55',
      name: '[Sorceress] Karin Classic Set',
    }, {
      id: 21377,
      mainCategoryId: '55',
      name: '[Sorceress] Karin Premium Set',
    }, {
      id: 21379,
      mainCategoryId: '55',
      name: '[Ranger] Karin Classic Set',
    }, {
      id: 21380,
      mainCategoryId: '55',
      name: '[Ranger] Karin Premium Set',
    }, {
      id: 21382,
      mainCategoryId: '55',
      name: '[Berserker] Bolyn Classic Set',
    }, {
      id: 21383,
      mainCategoryId: '55',
      name: '[Berserker] Bolyn Premium Set',
    }, {
      id: 21385,
      mainCategoryId: '55',
      name: '[Tamer] Karin Classic Set',
    }, {
      id: 21386,
      mainCategoryId: '55',
      name: '[Tamer] Karin Premium Set',
    }, {
      id: 21388,
      mainCategoryId: '55',
      name: '[Musa] Bolyn Classic Set',
    }, {
      id: 21389,
      mainCategoryId: '55',
      name: '[Musa] Bolyn Premium Set',
    }, {
      id: 21391,
      mainCategoryId: '55',
      name: '[Valkyrie] Karin Classic Set',
    }, {
      id: 21392,
      mainCategoryId: '55',
      name: '[Valkyrie] Karin Premium Set',
    }, {
      id: 21394,
      mainCategoryId: '55',
      name: '[Maehwa] Karin Classic Set',
    }, {
      id: 21395,
      mainCategoryId: '55',
      name: '[Maehwa] Karin Premium Set',
    }, {
      id: 21397,
      mainCategoryId: '55',
      name: '[Wizard] Bolyn Classic Set',
    }, {
      id: 21398,
      mainCategoryId: '55',
      name: '[Witch] Karin Classic Set',
    }, {
      id: 21399,
      mainCategoryId: '55',
      name: '[Kunoichi] Karin Classic Set',
    }, {
      id: 21400,
      mainCategoryId: '55',
      name: '[Ninja] Bolyn Classic Set',
    }, {
      id: 21604,
      mainCategoryId: '55',
      name: '[Sorceress] Spring Blossom Outfit Set',
    }, {
      id: 21605,
      mainCategoryId: '55',
      name: '[Ranger] Spring Blossom Outfit Set',
    }, {
      id: 21606,
      mainCategoryId: '55',
      name: '[Tamer] Spring Blossom Outfit Set',
    }, {
      id: 21607,
      mainCategoryId: '55',
      name: '[Valkyrie] Spring Blossom Outfit Set',
    }, {
      id: 21608,
      mainCategoryId: '55',
      name: '[Maehwa] Spring Blossom Outfit Set',
    }, {
      id: 21609,
      mainCategoryId: '55',
      name: '[Witch] Spring Blossom Outfit Set',
    }, {
      id: 21622,
      mainCategoryId: '55',
      name: '[Ranger] Bloody Outfit Set',
    }, {
      id: 21623,
      mainCategoryId: '55',
      name: '[Sorceress] Bloody Outfit Set',
    }, {
      id: 21624,
      mainCategoryId: '55',
      name: '[Tamer] Bloody Outfit Set',
    }, {
      id: 21625,
      mainCategoryId: '55',
      name: '[Maehwa] Bloody Outfit Set',
    }, {
      id: 21626,
      mainCategoryId: '55',
      name: '[Valkyrie] Bloody Outfit Set',
    }, {
      id: 21627,
      mainCategoryId: '55',
      name: '[Witch] Bloody Outfit Set',
    }, {
      id: 21628,
      mainCategoryId: '55',
      name: '[Kunoichi] Bloody Outfit Set',
    }, {
      id: 21629,
      mainCategoryId: '55',
      name: '[Warrior] Goyen Premium Set',
    }, {
      id: 21630,
      mainCategoryId: '55',
      name: '[Warrior] Goyen Classic Set',
    }, {
      id: 21631,
      mainCategoryId: '55',
      name: '[Valkyrie] Clead Classic Set',
    }, {
      id: 21632,
      mainCategoryId: '55',
      name: '[Wizard] Cavaro Classic Set',
    }, {
      id: 21636,
      mainCategoryId: '55',
      name: '[Sorceress] Cartian Classic Set',
    }, {
      id: 21637,
      mainCategoryId: '55',
      name: '[Sorceress] Cartian Premium Set',
    }, {
      id: 21643,
      mainCategoryId: '55',
      name: '[Warrior] Acher Guard Classic Set',
    }, {
      id: 21644,
      mainCategoryId: '55',
      name: '[Ranger] Acher Guard Classic Set',
    }, {
      id: 21645,
      mainCategoryId: '55',
      name: '[Sorceress] Acher Guard Classic Set',
    }, {
      id: 21646,
      mainCategoryId: '55',
      name: '[Berserker] Acher Guard Classic Set',
    }, {
      id: 21647,
      mainCategoryId: '55',
      name: '[Tamer] Acher Guard Classic Set',
    }, {
      id: 21648,
      mainCategoryId: '55',
      name: '[Musa] Acher Guard Classic Set',
    }, {
      id: 21649,
      mainCategoryId: '55',
      name: '[Maehwa] Acher Guard Classic Set',
    }, {
      id: 21650,
      mainCategoryId: '55',
      name: '[Valkyrie] Acher Guard Classic Set',
    }, {
      id: 21651,
      mainCategoryId: '55',
      name: '[Wizard] Acher Guard Classic Set',
    }, {
      id: 21652,
      mainCategoryId: '55',
      name: '[Witch] Acher Guard Classic Set',
    }, {
      id: 21653,
      mainCategoryId: '55',
      name: '[Kunoichi] Acher Guard Classic Set',
    }, {
      id: 21654,
      mainCategoryId: '55',
      name: '[Warrior] Acher Guard Premium Set',
    }, {
      id: 21656,
      mainCategoryId: '55',
      name: '[Sorceress] Acher Guard Premium Set',
    }, {
      id: 21658,
      mainCategoryId: '55',
      name: '[Warrior] Noel Outfit Set',
    }, {
      id: 21659,
      mainCategoryId: '55',
      name: '[Ranger] Noel Outfit Set',
    }, {
      id: 21660,
      mainCategoryId: '55',
      name: '[Sorceress] Noel Outfit Set',
    }, {
      id: 21661,
      mainCategoryId: '55',
      name: '[Berserker] Noel Outfit Set',
    }, {
      id: 21662,
      mainCategoryId: '55',
      name: '[Tamer] Noel Outfit Set',
    }, {
      id: 21663,
      mainCategoryId: '55',
      name: '[Musa] Noel Outfit Set',
    }, {
      id: 21664,
      mainCategoryId: '55',
      name: '[Maehwa] Noel Outfit Set',
    }, {
      id: 21665,
      mainCategoryId: '55',
      name: '[Valkyrie] Noel Outfit Set',
    }, {
      id: 21666,
      mainCategoryId: '55',
      name: '[Wizard] Noel Outfit Set',
    }, {
      id: 21667,
      mainCategoryId: '55',
      name: '[Witch] Noel Outfit Set',
    }, {
      id: 21668,
      mainCategoryId: '55',
      name: '[Kunoichi] Noel Outfit Set',
    }, {
      id: 21669,
      mainCategoryId: '55',
      name: '[Ninja] Noel Outfit Set',
    }, {
      id: 21670,
      mainCategoryId: '55',
      name: '[Berserker] Tantu Classic Set',
    }, {
      id: 21671,
      mainCategoryId: '55',
      name: '[Berserker] Tantu Premium Set',
    }, {
      id: 21684,
      mainCategoryId: '55',
      name: '[Kunoichi] Lahr Arcien Classic Set (R)',
    }, {
      id: 21685,
      mainCategoryId: '55',
      name: '[Ninja] Lahr Arcien Classic Set',
    }, {
      id: 21688,
      mainCategoryId: '55',
      name: '[Warrior] Millen Fedora Classic Set',
    }, {
      id: 21689,
      mainCategoryId: '55',
      name: '[Warrior] Millen Fedora Premium Set',
    }, {
      id: 21691,
      mainCategoryId: '55',
      name: '[Sorceress] Millen Fedora Classic Set',
    }, {
      id: 21692,
      mainCategoryId: '55',
      name: '[Sorceress] Millen Fedora Premium Set',
    }, {
      id: 21694,
      mainCategoryId: '55',
      name: '[Valkyrie] Kylia Classic Set',
    }, {
      id: 21695,
      mainCategoryId: '55',
      name: '[Kunoichi] Cokro Classic Set',
    }, {
      id: 21696,
      mainCategoryId: '55',
      name: '[Ninja] Cokro Classic Set',
    }, {
      id: 21698,
      mainCategoryId: '55',
      name: '[Ranger] Sylvia Classic Set',
    }, {
      id: 21699,
      mainCategoryId: '55',
      name: '[Ranger] Sylvia Premium Set',
    }, {
      id: 21701,
      mainCategoryId: '55',
      name: '[Ninja] Sicarios Helmet',
    }, {
      id: 21702,
      mainCategoryId: '55',
      name: '[Ninja] Sicarios Armor',
    }, {
      id: 21703,
      mainCategoryId: '55',
      name: '[Ninja] Sicarios Gloves',
    }, {
      id: 21705,
      mainCategoryId: '55',
      name: '[Ninja] Sicarios Shortsword',
    }, {
      id: 21706,
      mainCategoryId: '55',
      name: '[Ninja] Sicarios Kunai',
    }, {
      id: 21707,
      mainCategoryId: '55',
      name: '[Ninja] Sicarios Classic Set',
    }, {
      id: 21719,
      mainCategoryId: '55',
      name: '[Ninja] Cantusa Helmet',
    }, {
      id: 21720,
      mainCategoryId: '55',
      name: '[Ninja] Cantusa Armor',
    }, {
      id: 21722,
      mainCategoryId: '55',
      name: '[Ninja] Cantusa Shoes',
    }, {
      id: 21723,
      mainCategoryId: '55',
      name: '[Ninja] Cantusa Shortsword',
    }, {
      id: 21724,
      mainCategoryId: '55',
      name: '[Ninja] Cantusa Kunai',
    }, {
      id: 21725,
      mainCategoryId: '55',
      name: '[Ninja] Cantusa Classic Set',
    }, {
      id: 21730,
      mainCategoryId: '55',
      name: '[Ninja] Bloody Suit',
    }, {
      id: 21732,
      mainCategoryId: '55',
      name: '[Ninja] Karlstein Hat',
    }, {
      id: 21733,
      mainCategoryId: '55',
      name: '[Ninja] Karlstein Armor',
    }, {
      id: 21735,
      mainCategoryId: '55',
      name: '[Ninja] Karlstein Shortsword',
    }, {
      id: 21736,
      mainCategoryId: '55',
      name: '[Ninja] Karlstein Kunai',
    }, {
      id: 21737,
      mainCategoryId: '55',
      name: '[Ninja] Karlstein Classic Set',
    }, {
      id: 21743,
      mainCategoryId: '55',
      name: '[Ninja] Acher Guard Helmet',
    }, {
      id: 21744,
      mainCategoryId: '55',
      name: '[Ninja] Acher Guard Armor',
    }, {
      id: 21745,
      mainCategoryId: '55',
      name: '[Ninja] Acher Guard Shortsword',
    }, {
      id: 21746,
      mainCategoryId: '55',
      name: '[Ninja] Acher Guard Kunai',
    }, {
      id: 21747,
      mainCategoryId: '55',
      name: '[Ninja] Acher Guard Classic Set',
    }, {
      id: 21748,
      mainCategoryId: '55',
      name: '[Ninja] Noel Hat',
    }, {
      id: 21749,
      mainCategoryId: '55',
      name: '[Ninja] Noel Clothes',
    }, {
      id: 21750,
      mainCategoryId: '55',
      name: '[Ninja] Lahr Arcien Helmet',
    }, {
      id: 21751,
      mainCategoryId: '55',
      name: '[Ninja] Lahr Arcien Armor',
    }, {
      id: 21752,
      mainCategoryId: '55',
      name: '[Ninja] Lahr Arcien Shoes',
    }, {
      id: 21753,
      mainCategoryId: '55',
      name: '[Ninja] Lahr Arcien Shortsword',
    }, {
      id: 21754,
      mainCategoryId: '55',
      name: '[Ninja] Lahr Arcien Kunai',
    }, {
      id: 21760,
      mainCategoryId: '55',
      name: '[Ninja] Cokro Hat',
    }, {
      id: 21761,
      mainCategoryId: '55',
      name: '[Ninja] Cokro Clothes',
    }, {
      id: 21762,
      mainCategoryId: '55',
      name: '[Ninja] Cokro Gloves',
    }, {
      id: 21763,
      mainCategoryId: '55',
      name: '[Ninja] Cokro Shoes',
    }, {
      id: 21764,
      mainCategoryId: '55',
      name: '[Ninja] Cokro Shortsword',
    }, {
      id: 21765,
      mainCategoryId: '55',
      name: '[Ninja] Cokro Kunai',
    }, {
      id: 21766,
      mainCategoryId: '55',
      name: '[Ninja] New Year Hanbok Hat',
    }, {
      id: 21767,
      mainCategoryId: '55',
      name: '[Ninja] New Year Hanbok Clothes',
    }, {
      id: 21770,
      mainCategoryId: '55',
      name: '[Ninja] Aegis Armor',
    }, {
      id: 21771,
      mainCategoryId: '55',
      name: '[Ninja] Aegis Shortsword',
    }, {
      id: 21772,
      mainCategoryId: '55',
      name: '[Ninja] Aegis Kunai',
    }, {
      id: 21777,
      mainCategoryId: '55',
      name: '[Ninja] Kibelius Helmet',
    }, {
      id: 21778,
      mainCategoryId: '55',
      name: '[Ninja] Kibelius Divinus Armor',
    }, {
      id: 21779,
      mainCategoryId: '55',
      name: '[Ninja] Kibelius Armor',
    }, {
      id: 21780,
      mainCategoryId: '55',
      name: '[Ninja] Kibelius Shortsword',
    }, {
      id: 21781,
      mainCategoryId: '55',
      name: '[Ninja] Kibelius Kunai',
    }, {
      id: 21782,
      mainCategoryId: '55',
      name: '[Ninja] Bolyn Armor',
    }, {
      id: 21783,
      mainCategoryId: '55',
      name: '[Ninja] Bolyn Shortsword',
    }, {
      id: 21784,
      mainCategoryId: '55',
      name: '[Ninja] Bolyn Kunai',
    }, {
      id: 21785,
      mainCategoryId: '55',
      name: '[Ninja] Narusawa Helmet',
    }, {
      id: 21786,
      mainCategoryId: '55',
      name: '[Ninja] Narusawa Armor',
    }, {
      id: 21787,
      mainCategoryId: '55',
      name: '[Ninja] Narusawa Sura Katana',
    }, {
      id: 21788,
      mainCategoryId: '55',
      name: '[Ninja] Narusawa Shortsword',
    }, {
      id: 21789,
      mainCategoryId: '55',
      name: '[Ninja] Narusawa Kunai',
    }, {
      id: 21792,
      mainCategoryId: '55',
      name: '[Ninja] Gavi Regan Helmet',
    }, {
      id: 21793,
      mainCategoryId: '55',
      name: '[Ninja] Gavi Regan Armor',
    }, {
      id: 21794,
      mainCategoryId: '55',
      name: '[Ninja] Gavi Regan Sura Katana',
    }, {
      id: 21795,
      mainCategoryId: '55',
      name: '[Ninja] Gavi Regan Shortsword',
    }, {
      id: 21796,
      mainCategoryId: '55',
      name: '[Ninja] Gavi Regan Kunai',
    }, {
      id: 21797,
      mainCategoryId: '55',
      name: '[Ninja] Marine Romance Hat',
    }, {
      id: 21798,
      mainCategoryId: '55',
      name: '[Ninja] Marine Romance Clothes',
    }, {
      id: 21799,
      mainCategoryId: '55',
      name: '[Ninja] Marine Romance Gloves',
    }, {
      id: 21800,
      mainCategoryId: '55',
      name: '[Ninja] Marine Romance Shoes',
    }, {
      id: 21801,
      mainCategoryId: '55',
      name: '[Ninja] Epheria Marine Helmet',
    }, {
      id: 21802,
      mainCategoryId: '55',
      name: '[Ninja] Epheria Marine Clothes',
    }, {
      id: 21803,
      mainCategoryId: '55',
      name: '[Ninja] Epheria Marine Shoes',
    }, {
      id: 21804,
      mainCategoryId: '55',
      name: '[Ninja] Epheria Marine Shortsword',
    }, {
      id: 21805,
      mainCategoryId: '55',
      name: '[Ninja] Epheria Marine Kunai',
    }, {
      id: 21806,
      mainCategoryId: '55',
      name: '[Ninja] Epheria Marine Classic Set',
    }, {
      id: 21807,
      mainCategoryId: '55',
      name: '[Ninja] Blue Tiger Helmet',
    }, {
      id: 21808,
      mainCategoryId: '55',
      name: '[Ninja] Blue Tiger Armor',
    }, {
      id: 21809,
      mainCategoryId: '55',
      name: '[Ninja] Blue Tiger Gloves',
    }, {
      id: 21810,
      mainCategoryId: '55',
      name: '[Ninja] Blue Tiger Shoes',
    }, {
      id: 21811,
      mainCategoryId: '55',
      name: '[Ninja] Blue Tiger Shortsword',
    }, {
      id: 21812,
      mainCategoryId: '55',
      name: '[Ninja] Blue Tiger Kunai',
    }, {
      id: 21813,
      mainCategoryId: '55',
      name: '[Ninja] Blue Tiger Sura Katana',
    }, {
      id: 21814,
      mainCategoryId: '55',
      name: '[Ninja] Blue Tiger Classic Set',
    }, {
      id: 21815,
      mainCategoryId: '55',
      name: '[Ninja] Blue Tiger Premium Set',
    }, {
      id: 21841,
      mainCategoryId: '55',
      name: '[Warrior] Kibelius Great Sword',
    }, {
      id: 21842,
      mainCategoryId: '55',
      name: '[Sorceress] Kibelius Scythe',
    }, {
      id: 21843,
      mainCategoryId: '55',
      name: '[Ranger] Kibelius Kamasylven Sword',
    }, {
      id: 21844,
      mainCategoryId: '55',
      name: '[Berserker] Kibelius Iron Buster',
    }, {
      id: 21845,
      mainCategoryId: '55',
      name: '[Tamer] Kibelius Celestial Bo Staff',
    }, {
      id: 21846,
      mainCategoryId: '55',
      name: '[Musa] Kibelius Crescent Blade',
    }, {
      id: 21847,
      mainCategoryId: '55',
      name: '[Valkyrie] Kibelius Lancia',
    }, {
      id: 21848,
      mainCategoryId: '55',
      name: '[Maehwa] Kibelius Kerispear',
    }, {
      id: 21849,
      mainCategoryId: '55',
      name: '[Kunoichi] Kibelius Sah Chakram',
    }, {
      id: 21850,
      mainCategoryId: '55',
      name: '[Ninja] Kibelius Sura Katana',
    }, {
      id: 21901,
      mainCategoryId: '55',
      name: '[Maehwa] Blushing Maiden Classic Set',
    }, {
      id: 21902,
      mainCategoryId: '55',
      name: '[Maehwa] Blushing Maiden Premium Set',
    }, {
      id: 21904,
      mainCategoryId: '55',
      name: '[Witch] Rakshande Classic Set',
    }, {
      id: 21905,
      mainCategoryId: '55',
      name: '[Witch] Rakshande Premium Set',
    }, {
      id: 21907,
      mainCategoryId: '55',
      name: '[Warrior] Grave Keeper Outfit Set',
    }, {
      id: 21908,
      mainCategoryId: '55',
      name: '[Ranger] Ram Horn Witch Outfit Set',
    }, {
      id: 21909,
      mainCategoryId: '55',
      name: '[Sorceress] Ram Horn Witch Outfit Set',
    }, {
      id: 21910,
      mainCategoryId: '55',
      name: '[Berserker] Grave Keeper Outfit Set',
    }, {
      id: 21911,
      mainCategoryId: '55',
      name: '[Tamer] Fairy Jackie Outfit Set',
    }, {
      id: 21912,
      mainCategoryId: '55',
      name: '[Musa] Grave Keeper Outfit Set',
    }, {
      id: 21913,
      mainCategoryId: '55',
      name: '[Maehwa] Ram Horn Witch Outfit Set',
    }, {
      id: 21914,
      mainCategoryId: '55',
      name: '[Valkyrie] Ram Horn Witch Outfit Set',
    }, {
      id: 21915,
      mainCategoryId: '55',
      name: '[Wizard] Grave Keeper Outfit Set',
    }, {
      id: 21916,
      mainCategoryId: '55',
      name: '[Witch] Ghost Bride Outfit Set',
    }, {
      id: 21917,
      mainCategoryId: '55',
      name: '[Kunoichi] Ram Horn Witch Outfit Set',
    }, {
      id: 21918,
      mainCategoryId: '55',
      name: '[Ninja] Grave Keeper Outfit Set',
    }, {
      id: 21919,
      mainCategoryId: '55',
      name: '[Ranger] Gloomy Fox Outfit Set',
    }, {
      id: 21920,
      mainCategoryId: '55',
      name: '[Sorceress] Gloomy Fox Outfit Set',
    }, {
      id: 21921,
      mainCategoryId: '55',
      name: '[Valkyrie] Gloomy Fox Outfit Set',
    }, {
      id: 21922,
      mainCategoryId: '55',
      name: '[Maehwa] Gloomy Fox Outfit Set',
    }, {
      id: 21923,
      mainCategoryId: '55',
      name: '[Kunoichi] Gloomy Fox Outfit Set',
    }, {
      id: 21924,
      mainCategoryId: '55',
      name: '[Wizard] Lord Red Classic Set',
    }, {
      id: 21925,
      mainCategoryId: '55',
      name: '[Wizard] Lord Red Premium Set',
    }, {
      id: 21965,
      mainCategoryId: '55',
      name: '[Dark Knight] Pila Fe Outlaw Hat',
    }, {
      id: 21966,
      mainCategoryId: '55',
      name: '[Dark Knight] Pila Fe Outlaw Clothes',
    }, {
      id: 21967,
      mainCategoryId: '55',
      name: '[Dark Knight] Pila Fe Outlaw Shoes',
    }, {
      id: 21970,
      mainCategoryId: '55',
      name: 'Terrminé Horse Gear Set',
    }, {
      id: 21972,
      mainCategoryId: '55',
      name: 'Blitzen Horse Gear Set',
    }, {
      id: 21973,
      mainCategoryId: '55',
      name: '[Ninja] Obsidian Arrow Hood',
    }, {
      id: 21974,
      mainCategoryId: '55',
      name: '[Ninja] Obsidian Arrow Armor',
    }, {
      id: 21975,
      mainCategoryId: '55',
      name: '[Ninja] Obsidian Arrow Outfit Set',
    }, {
      id: 21976,
      mainCategoryId: '55',
      name: '[Ninja] Crimson Sable Helmet',
    }, {
      id: 21977,
      mainCategoryId: '55',
      name: '[Ninja] Crimson Sable Armor',
    }, {
      id: 21978,
      mainCategoryId: '55',
      name: '[Ninja] Crimson Sable Outfit Set',
    }, {
      id: 22001,
      mainCategoryId: '55',
      name: '[Warrior] Red Robe Helmet',
    }, {
      id: 22002,
      mainCategoryId: '55',
      name: '[Warrior] Red Robe Armor',
    }, {
      id: 22003,
      mainCategoryId: '55',
      name: '[Warrior] Karlstein Hat',
    }, {
      id: 22004,
      mainCategoryId: '55',
      name: '[Warrior] Karlstein Armor',
    }, {
      id: 22008,
      mainCategoryId: '55',
      name: '[Warrior] Kibelius Helmet',
    }, {
      id: 22009,
      mainCategoryId: '55',
      name: '[Warrior] Kibelius Divinus Armor',
    }, {
      id: 22010,
      mainCategoryId: '55',
      name: '[Warrior] Kibelius Shoes',
    }, {
      id: 22011,
      mainCategoryId: '55',
      name: '[Warrior] Epheria Marine Helmet',
    }, {
      id: 22012,
      mainCategoryId: '55',
      name: '[Warrior] Epheria Marine Clothes',
    }, {
      id: 22013,
      mainCategoryId: '55',
      name: '[Warrior] Epheria Marine Shoes',
    }, {
      id: 22022,
      mainCategoryId: '55',
      name: '[Warrior] Cantusa Helmet',
    }, {
      id: 22023,
      mainCategoryId: '55',
      name: '[Warrior] Cantusa Armor',
    }, {
      id: 22025,
      mainCategoryId: '55',
      name: '[Warrior] Cantusa Shoes',
    }, {
      id: 22027,
      mainCategoryId: '55',
      name: '[Warrior] Bloody Suit',
    }, {
      id: 22028,
      mainCategoryId: '55',
      name: '[Warrior] Goyen Helmet',
    }, {
      id: 22029,
      mainCategoryId: '55',
      name: '[Warrior] Goyen Armor',
    }, {
      id: 22031,
      mainCategoryId: '55',
      name: '[Warrior] Acher Guard Helmet',
    }, {
      id: 22032,
      mainCategoryId: '55',
      name: '[Warrior] Acher Guard Armor',
    }, {
      id: 22033,
      mainCategoryId: '55',
      name: '[Warrior] Noel Hat',
    }, {
      id: 22034,
      mainCategoryId: '55',
      name: '[Warrior] Noel Clothes',
    }, {
      id: 22035,
      mainCategoryId: '55',
      name: '[Warrior] Millen Fedora Hat',
    }, {
      id: 22036,
      mainCategoryId: '55',
      name: '[Warrior] Millen Fedora Clothes',
    }, {
      id: 22037,
      mainCategoryId: '55',
      name: '[Warrior] Millen Fedora Gloves',
    }, {
      id: 22038,
      mainCategoryId: '55',
      name: '[Warrior] Millen Fedora Shoes',
    }, {
      id: 22041,
      mainCategoryId: '55',
      name: '[Warrior] New Year Hanbok Hat',
    }, {
      id: 22042,
      mainCategoryId: '55',
      name: '[Warrior] New Year Hanbok Clothes',
    }, {
      id: 22043,
      mainCategoryId: '55',
      name: '[Warrior] Gavi Regan Helmet',
    }, {
      id: 22044,
      mainCategoryId: '55',
      name: '[Warrior] Gavi Regan Armor',
    }, {
      id: 22045,
      mainCategoryId: '55',
      name: '[Warrior] Bolyn Armor',
    }, {
      id: 22046,
      mainCategoryId: '55',
      name: '[Warrior] Brut Lancelot Helmet',
    }, {
      id: 22047,
      mainCategoryId: '55',
      name: '[Warrior] Brut Lancelot Armor',
    }, {
      id: 22048,
      mainCategoryId: '55',
      name: '[Warrior] Marine Romance Hat',
    }, {
      id: 22049,
      mainCategoryId: '55',
      name: '[Warrior] Marine Romance Clothes',
    }, {
      id: 22050,
      mainCategoryId: '55',
      name: '[Warrior] Marine Romance Gloves',
    }, {
      id: 22051,
      mainCategoryId: '55',
      name: '[Warrior] Marine Romance Shoes',
    }, {
      id: 22052,
      mainCategoryId: '55',
      name: '[Warrior] Grave Keeper Hat',
    }, {
      id: 22053,
      mainCategoryId: '55',
      name: '[Warrior] Grave Keeper Clothes',
    }, {
      id: 22054,
      mainCategoryId: '55',
      name: '[Warrior] Grave Keeper Gloves',
    }, {
      id: 22055,
      mainCategoryId: '55',
      name: '[Warrior] Pila Fe Outlaw Hat',
    }, {
      id: 22056,
      mainCategoryId: '55',
      name: '[Warrior] Pila Fe Outlaw Clothes',
    }, {
      id: 22061,
      mainCategoryId: '55',
      name: '[Warrior] Brut Lancelot Shield',
    }, {
      id: 22062,
      mainCategoryId: '55',
      name: '[Warrior] Brut Lancelot Longsword',
    }, {
      id: 22063,
      mainCategoryId: '55',
      name: '[Warrior] Brut Lancelot Great Sword',
    }, {
      id: 22064,
      mainCategoryId: '55',
      name: '[Warrior] Bolyn Longsword',
    }, {
      id: 22065,
      mainCategoryId: '55',
      name: '[Warrior] Bolyn Great Sword',
    }, {
      id: 22066,
      mainCategoryId: '55',
      name: '[Warrior] Gavi Regan Longsword',
    }, {
      id: 22067,
      mainCategoryId: '55',
      name: '[Warrior] Gavi Regan Great Sword',
    }, {
      id: 22068,
      mainCategoryId: '55',
      name: '[Warrior] Millen Fedora Longsword',
    }, {
      id: 22069,
      mainCategoryId: '55',
      name: '[Warrior] Millen Fedora Great Sword',
    }, {
      id: 22071,
      mainCategoryId: '55',
      name: '[Warrior] Red Robe Longsword',
    }, {
      id: 22072,
      mainCategoryId: '55',
      name: '[Warrior] Karlstein Longsword',
    }, {
      id: 22074,
      mainCategoryId: '55',
      name: '[Warrior] Kibelius Longsword',
    }, {
      id: 22075,
      mainCategoryId: '55',
      name: '[Warrior] Epheria Marine Longsword',
    }, {
      id: 22079,
      mainCategoryId: '55',
      name: '[Warrior] Cantusa Longsword',
    }, {
      id: 22081,
      mainCategoryId: '55',
      name: '[Warrior] Goyen Longsword',
    }, {
      id: 22082,
      mainCategoryId: '55',
      name: '[Warrior] Goyen Great Sword',
    }, {
      id: 22084,
      mainCategoryId: '55',
      name: '[Warrior] Acher Guard Longsword',
    }, {
      id: 22085,
      mainCategoryId: '55',
      name: '[Warrior] Acher Guard Great Sword',
    }, {
      id: 22086,
      mainCategoryId: '55',
      name: '[Warrior] Red Robe Shield',
    }, {
      id: 22087,
      mainCategoryId: '55',
      name: '[Warrior] Karlstein Shield',
    }, {
      id: 22089,
      mainCategoryId: '55',
      name: '[Warrior] Kibelius Shield',
    }, {
      id: 22090,
      mainCategoryId: '55',
      name: '[Warrior] Epheria Marine Shield',
    }, {
      id: 22094,
      mainCategoryId: '55',
      name: '[Warrior] Cantusa Shield',
    }, {
      id: 22096,
      mainCategoryId: '55',
      name: '[Warrior] Goyen Shield',
    }, {
      id: 22097,
      mainCategoryId: '55',
      name: '[Warrior] Acher Guard Shield',
    }, {
      id: 22098,
      mainCategoryId: '55',
      name: '[Warrior] Millen Fedora Shield',
    }, {
      id: 22099,
      mainCategoryId: '55',
      name: '[Warrior] Gavi Regan Shield',
    }, {
      id: 22100,
      mainCategoryId: '55',
      name: '[Warrior] Bolyn Shield',
    }, {
      id: 22101,
      mainCategoryId: '55',
      name: '[Sorceress] Tyrie Helmet',
    }, {
      id: 22102,
      mainCategoryId: '55',
      name: '[Sorceress] Tyrie Armor',
    }, {
      id: 22103,
      mainCategoryId: '55',
      name: '[Sorceress] Tyrie Gloves',
    }, {
      id: 22104,
      mainCategoryId: '55',
      name: '[Sorceress] Tyrie Shoes (Long)',
    }, {
      id: 22105,
      mainCategoryId: '55',
      name: '[Sorceress] Tyrie Shoes (Short)',
    }, {
      id: 22106,
      mainCategoryId: '55',
      name: '[Sorceress] Karlstein Hat',
    }, {
      id: 22107,
      mainCategoryId: '55',
      name: '[Sorceress] Karlstein Armor',
    }, {
      id: 22108,
      mainCategoryId: '55',
      name: '[Sorceress] Karlstein Shoes',
    }, {
      id: 22113,
      mainCategoryId: '55',
      name: '[Sorceress] Kibelius Helmet',
    }, {
      id: 22114,
      mainCategoryId: '55',
      name: '[Sorceress] Kibelius Divinus Armor',
    }, {
      id: 22115,
      mainCategoryId: '55',
      name: '[Sorceress] Kibelius Shoes',
    }, {
      id: 22116,
      mainCategoryId: '55',
      name: '[Sorceress] Epheria Marine Helmet',
    }, {
      id: 22117,
      mainCategoryId: '55',
      name: '[Sorceress] Epheria Marine Clothes',
    }, {
      id: 22118,
      mainCategoryId: '55',
      name: '[Sorceress] Epheria Marine Shoes',
    }, {
      id: 22130,
      mainCategoryId: '55',
      name: '[Sorceress] Bloody Dress',
    }, {
      id: 22131,
      mainCategoryId: '55',
      name: '[Sorceress] Bloody Gloves',
    }, {
      id: 22132,
      mainCategoryId: '55',
      name: '[Sorceress] Bloody Shoes',
    }, {
      id: 22135,
      mainCategoryId: '55',
      name: '[Sorceress] Cartian Helmet',
    }, {
      id: 22136,
      mainCategoryId: '55',
      name: '[Sorceress] Cartian Armor',
    }, {
      id: 22137,
      mainCategoryId: '55',
      name: '[Sorceress] Acher Guard Helmet',
    }, {
      id: 22138,
      mainCategoryId: '55',
      name: '[Sorceress] Acher Guard Armor',
    }, {
      id: 22139,
      mainCategoryId: '55',
      name: '[Sorceress] Acher Guard Shoes',
    }, {
      id: 22140,
      mainCategoryId: '55',
      name: '[Sorceress] Noel Hat',
    }, {
      id: 22141,
      mainCategoryId: '55',
      name: '[Sorceress] Noel Clothes',
    }, {
      id: 22142,
      mainCategoryId: '55',
      name: '[Sorceress] Noel Shoes',
    }, {
      id: 22143,
      mainCategoryId: '55',
      name: '[Sorceress] Millen Fedora Hat',
    }, {
      id: 22144,
      mainCategoryId: '55',
      name: '[Sorceress] Millen Fedora Clothes',
    }, {
      id: 22145,
      mainCategoryId: '55',
      name: '[Sorceress] Millen Fedora Shoes',
    }, {
      id: 22148,
      mainCategoryId: '55',
      name: '[Sorceress] Papillio Helmet',
    }, {
      id: 22149,
      mainCategoryId: '55',
      name: '[Sorceress] Papillio Armor',
    }, {
      id: 22150,
      mainCategoryId: '55',
      name: '[Sorceress] Karin Helmet',
    }, {
      id: 22151,
      mainCategoryId: '55',
      name: '[Sorceress] Karin Armor',
    }, {
      id: 22152,
      mainCategoryId: '55',
      name: '[Sorceress] Kisleev Helmet',
    }, {
      id: 22153,
      mainCategoryId: '55',
      name: '[Sorceress] Kisleev Armor',
    }, {
      id: 22154,
      mainCategoryId: '55',
      name: '[Sorceress] Marine Romance Hat',
    }, {
      id: 22155,
      mainCategoryId: '55',
      name: '[Sorceress] Marine Romance Clothes',
    }, {
      id: 22156,
      mainCategoryId: '55',
      name: '[Sorceress] Marine Romance Shoes',
    }, {
      id: 22157,
      mainCategoryId: '55',
      name: '[Sorceress] Ram Horn Witch Headdress',
    }, {
      id: 22158,
      mainCategoryId: '55',
      name: '[Sorceress] Ram Horn Witch Clothes',
    }, {
      id: 22159,
      mainCategoryId: '55',
      name: '[Sorceress] Gloomy Fox Headdress',
    }, {
      id: 22160,
      mainCategoryId: '55',
      name: '[Sorceress] Gloomy Fox Clothes',
    }, {
      id: 22161,
      mainCategoryId: '55',
      name: '[Sorceress] Kisleev Talisman',
    }, {
      id: 22162,
      mainCategoryId: '55',
      name: '[Sorceress] Kisleev Scythe',
    }, {
      id: 22163,
      mainCategoryId: '55',
      name: '[Sorceress] Kisleev Amulet',
    }, {
      id: 22164,
      mainCategoryId: '55',
      name: '[Sorceress] Karin Scythe',
    }, {
      id: 22165,
      mainCategoryId: '55',
      name: '[Sorceress] Karin Amulet',
    }, {
      id: 22166,
      mainCategoryId: '55',
      name: '[Sorceress] Papillio Scythe',
    }, {
      id: 22167,
      mainCategoryId: '55',
      name: '[Sorceress] Papillio Amulet',
    }, {
      id: 22168,
      mainCategoryId: '55',
      name: '[Sorceress] Millen Fedora Scythe',
    }, {
      id: 22169,
      mainCategoryId: '55',
      name: '[Sorceress] Millen Fedora Amulet',
    }, {
      id: 22170,
      mainCategoryId: '55',
      name: '[Sorceress] Acher Guard Scythe',
    }, {
      id: 22171,
      mainCategoryId: '55',
      name: '[Sorceress] Tyrie Amulet',
    }, {
      id: 22172,
      mainCategoryId: '55',
      name: '[Sorceress] Karlstein Amulet',
    }, {
      id: 22174,
      mainCategoryId: '55',
      name: '[Sorceress] Kibelius Amulet',
    }, {
      id: 22175,
      mainCategoryId: '55',
      name: '[Sorceress] Lahr Arcien Amulet (W)',
    }, {
      id: 22176,
      mainCategoryId: '55',
      name: '[Sorceress] Epheria Marine Amulet',
    }, {
      id: 22181,
      mainCategoryId: '55',
      name: '[Sorceress] Cartian Amulet',
    }, {
      id: 22182,
      mainCategoryId: '55',
      name: '[Sorceress] Cartian Scythe',
    }, {
      id: 22185,
      mainCategoryId: '55',
      name: '[Sorceress] Acher Guard Amulet',
    }, {
      id: 22186,
      mainCategoryId: '55',
      name: '[Sorceress] Tyrie Talisman',
    }, {
      id: 22187,
      mainCategoryId: '55',
      name: '[Sorceress] Karlstein Talisman',
    }, {
      id: 22189,
      mainCategoryId: '55',
      name: '[Sorceress] Kibelius Talisman',
    }, {
      id: 22190,
      mainCategoryId: '55',
      name: '[Sorceress] Lahr Arcien Talisman (W)',
    }, {
      id: 22191,
      mainCategoryId: '55',
      name: '[Sorceress] Epheria Marine Talisman',
    }, {
      id: 22196,
      mainCategoryId: '55',
      name: '[Sorceress] Cartian Talisman',
    }, {
      id: 22197,
      mainCategoryId: '55',
      name: '[Sorceress] Acher Guard Talisman',
    }, {
      id: 22198,
      mainCategoryId: '55',
      name: '[Sorceress] Millen Fedora Talisman',
    }, {
      id: 22199,
      mainCategoryId: '55',
      name: '[Sorceress] Papillio Talisman',
    }, {
      id: 22200,
      mainCategoryId: '55',
      name: '[Sorceress] Karin Talisman',
    }, {
      id: 22201,
      mainCategoryId: '55',
      name: '[Ranger] Tyrie Helmet',
    }, {
      id: 22202,
      mainCategoryId: '55',
      name: '[Ranger] Tyrie Armor',
    }, {
      id: 22203,
      mainCategoryId: '55',
      name: '[Ranger] Tyrie Gloves',
    }, {
      id: 22204,
      mainCategoryId: '55',
      name: '[Ranger] Tyrie Shoes (Long)',
    }, {
      id: 22205,
      mainCategoryId: '55',
      name: '[Ranger] Tyrie Shoes (Short)',
    }, {
      id: 22206,
      mainCategoryId: '55',
      name: '[Ranger] Karlstein Hat',
    }, {
      id: 22207,
      mainCategoryId: '55',
      name: '[Ranger] Karlstein Armor',
    }, {
      id: 22208,
      mainCategoryId: '55',
      name: '[Ranger] Karlstein Shoes',
    }, {
      id: 22213,
      mainCategoryId: '55',
      name: '[Ranger] Kibelius Helmet',
    }, {
      id: 22214,
      mainCategoryId: '55',
      name: '[Ranger] Kibelius Divinus Armor',
    }, {
      id: 22215,
      mainCategoryId: '55',
      name: '[Ranger] Kibelius Shoes',
    }, {
      id: 22216,
      mainCategoryId: '55',
      name: '[Ranger] Epheria Marine Helmet',
    }, {
      id: 22217,
      mainCategoryId: '55',
      name: '[Ranger] Epheria Marine Clothes',
    }, {
      id: 22218,
      mainCategoryId: '55',
      name: '[Ranger] Epheria Marine Shoes',
    }, {
      id: 22225,
      mainCategoryId: '55',
      name: '[Ranger] Lahr Arcien Classic Set (R)',
    }, {
      id: 22231,
      mainCategoryId: '55',
      name: '[Ranger] Bloody Dress',
    }, {
      id: 22232,
      mainCategoryId: '55',
      name: '[Ranger] Bloody Gloves',
    }, {
      id: 22233,
      mainCategoryId: '55',
      name: '[Ranger] Bloody Shoes',
    }, {
      id: 22236,
      mainCategoryId: '55',
      name: '[Ranger] Acher Guard Helmet',
    }, {
      id: 22237,
      mainCategoryId: '55',
      name: '[Ranger] Acher Guard Armor',
    }, {
      id: 22238,
      mainCategoryId: '55',
      name: '[Ranger] Acher Guard Shoes',
    }, {
      id: 22239,
      mainCategoryId: '55',
      name: '[Ranger] Noel Hat',
    }, {
      id: 22240,
      mainCategoryId: '55',
      name: '[Ranger] Noel Clothes',
    }, {
      id: 22241,
      mainCategoryId: '55',
      name: '[Ranger] Noel Shoes',
    }, {
      id: 22242,
      mainCategoryId: '55',
      name: '[Ranger] Sylvia Helmet',
    }, {
      id: 22243,
      mainCategoryId: '55',
      name: '[Ranger] Sylvia Armor',
    }, {
      id: 22244,
      mainCategoryId: '55',
      name: '[Ranger] New Year Hanbok Hat',
    }, {
      id: 22245,
      mainCategoryId: '55',
      name: '[Ranger] New Year Hanbok Clothes',
    }, {
      id: 22246,
      mainCategoryId: '55',
      name: '[Ranger] New Year Hanbok Shoes',
    }, {
      id: 22247,
      mainCategoryId: '55',
      name: '[Ranger] Gotha Rensa Shoes',
    }, {
      id: 22248,
      mainCategoryId: '55',
      name: '[Ranger] Gotha Rensa Armor',
    }, {
      id: 22251,
      mainCategoryId: '55',
      name: '[Ranger] Ladellin Helmet',
    }, {
      id: 22252,
      mainCategoryId: '55',
      name: '[Ranger] Ladellin Armor',
    }, {
      id: 22253,
      mainCategoryId: '55',
      name: '[Ranger] Karin Helmet',
    }, {
      id: 22254,
      mainCategoryId: '55',
      name: '[Ranger] Karin Armor',
    }, {
      id: 22255,
      mainCategoryId: '55',
      name: '[Ranger] Marine Romance Hat',
    }, {
      id: 22256,
      mainCategoryId: '55',
      name: '[Ranger] Marine Romance Clothes',
    }, {
      id: 22257,
      mainCategoryId: '55',
      name: '[Ranger] Marine Romance Shoes',
    }, {
      id: 22258,
      mainCategoryId: '55',
      name: '[Ranger] Ram Horn Witch Headdress',
    }, {
      id: 22259,
      mainCategoryId: '55',
      name: '[Ranger] Ram Horn Witch Clothes',
    }, {
      id: 22260,
      mainCategoryId: '55',
      name: '[Ranger] Gloomy Fox Headdress',
    }, {
      id: 22261,
      mainCategoryId: '55',
      name: '[Ranger] Gloomy Fox Clothes',
    }, {
      id: 22262,
      mainCategoryId: '55',
      name: '[Ranger] Pila Fe Outlaw Hat',
    }, {
      id: 22263,
      mainCategoryId: '55',
      name: '[Ranger] Pila Fe Outlaw Clothes',
    }, {
      id: 22264,
      mainCategoryId: '55',
      name: '[Ranger] Pila Fe Outlaw Shoes',
    }, {
      id: 22265,
      mainCategoryId: '55',
      name: '[Ranger] Karin Kamasylven Sword',
    }, {
      id: 22266,
      mainCategoryId: '55',
      name: '[Ranger] Karin Longbow',
    }, {
      id: 22267,
      mainCategoryId: '55',
      name: '[Ranger] Ladellin Kamasylven Sword',
    }, {
      id: 22268,
      mainCategoryId: '55',
      name: '[Ranger] Ladellin Longbow',
    }, {
      id: 22269,
      mainCategoryId: '55',
      name: '[Ranger] Gotha Rensa Kamasylven Sword',
    }, {
      id: 22270,
      mainCategoryId: '55',
      name: '[Ranger] Gotha Rensa Longbow',
    }, {
      id: 22271,
      mainCategoryId: '55',
      name: '[Ranger] Tyrie Longbow',
    }, {
      id: 22272,
      mainCategoryId: '55',
      name: '[Ranger] Karlstein Longbow',
    }, {
      id: 22274,
      mainCategoryId: '55',
      name: '[Ranger] Kibelius Longbow',
    }, {
      id: 22275,
      mainCategoryId: '55',
      name: '[Ranger] Epheria Marine Longbow',
    }, {
      id: 22278,
      mainCategoryId: '55',
      name: '[Ranger] Lahr Arcien Longbow (R)',
    }, {
      id: 22281,
      mainCategoryId: '55',
      name: '[Ranger] Acher Guard Longbow',
    }, {
      id: 22282,
      mainCategoryId: '55',
      name: '[Ranger] Sylvia Kamasylven Sword',
    }, {
      id: 22283,
      mainCategoryId: '55',
      name: '[Ranger] Sylvia Longbow',
    }, {
      id: 22286,
      mainCategoryId: '55',
      name: '[Ranger] Tyrie Dagger',
    }, {
      id: 22287,
      mainCategoryId: '55',
      name: '[Ranger] Karlstein Dagger',
    }, {
      id: 22289,
      mainCategoryId: '55',
      name: '[Ranger] Kibelius Dagger',
    }, {
      id: 22290,
      mainCategoryId: '55',
      name: '[Ranger] Epheria Marine Dagger',
    }, {
      id: 22293,
      mainCategoryId: '55',
      name: '[Ranger] Lahr Arcien Dagger (R)',
    }, {
      id: 22296,
      mainCategoryId: '55',
      name: '[Ranger] Acher Guard Dagger',
    }, {
      id: 22297,
      mainCategoryId: '55',
      name: '[Ranger] Sylvia Dagger',
    }, {
      id: 22298,
      mainCategoryId: '55',
      name: '[Ranger] Gotha Rensa Dagger',
    }, {
      id: 22299,
      mainCategoryId: '55',
      name: '[Ranger] Ladellin Dagger',
    }, {
      id: 22300,
      mainCategoryId: '55',
      name: '[Ranger] Karin Dagger',
    }, {
      id: 22301,
      mainCategoryId: '55',
      name: '[Berserker] Red Robe Helmet',
    }, {
      id: 22302,
      mainCategoryId: '55',
      name: '[Berserker] Red Robe Armor',
    }, {
      id: 22303,
      mainCategoryId: '55',
      name: '[Berserker] Karlstein Hat',
    }, {
      id: 22304,
      mainCategoryId: '55',
      name: '[Berserker] Karlstein Armor',
    }, {
      id: 22308,
      mainCategoryId: '55',
      name: '[Berserker] Kibelius Helmet',
    }, {
      id: 22309,
      mainCategoryId: '55',
      name: '[Berserker] Kibelius Divinus Armor',
    }, {
      id: 22310,
      mainCategoryId: '55',
      name: '[Berserker] Kibelius Shoes',
    }, {
      id: 22311,
      mainCategoryId: '55',
      name: '[Berserker] Epheria Marine Helmet',
    }, {
      id: 22313,
      mainCategoryId: '55',
      name: '[Berserker] Epheria Marine Shoes',
    }, {
      id: 22322,
      mainCategoryId: '55',
      name: '[Berserker] Cantusa Helmet',
    }, {
      id: 22323,
      mainCategoryId: '55',
      name: '[Berserker] Cantusa Armor',
    }, {
      id: 22325,
      mainCategoryId: '55',
      name: '[Berserker] Cantusa Shoes',
    }, {
      id: 22327,
      mainCategoryId: '55',
      name: '[Berserker] Bloody Suit',
    }, {
      id: 22329,
      mainCategoryId: '55',
      name: '[Berserker] Acher Guard Helmet',
    }, {
      id: 22330,
      mainCategoryId: '55',
      name: '[Berserker] Acher Guard Armor',
    }, {
      id: 22331,
      mainCategoryId: '55',
      name: '[Berserker] Tantu Helmet',
    }, {
      id: 22332,
      mainCategoryId: '55',
      name: '[Berserker] Tantu Armor',
    }, {
      id: 22333,
      mainCategoryId: '55',
      name: '[Berserker] Tantu Shoes',
    }, {
      id: 22334,
      mainCategoryId: '55',
      name: '[Berserker] Noel Hat',
    }, {
      id: 22335,
      mainCategoryId: '55',
      name: '[Berserker] Noel Clothes',
    }, {
      id: 22336,
      mainCategoryId: '55',
      name: '[Berserker] New Year Hanbok Hat',
    }, {
      id: 22337,
      mainCategoryId: '55',
      name: '[Berserker] New Year Hanbok Clothes',
    }, {
      id: 22338,
      mainCategoryId: '55',
      name: '[Berserker] Gotha Rensa Helmet',
    }, {
      id: 22339,
      mainCategoryId: '55',
      name: '[Berserker] Gotha Rensa Armor',
    }, {
      id: 22340,
      mainCategoryId: '55',
      name: '[Berserker] Gotha Rensa Gloves',
    }, {
      id: 22341,
      mainCategoryId: '55',
      name: '[Berserker] Gotha Rensa Shoes',
    }, {
      id: 22344,
      mainCategoryId: '55',
      name: '[Berserker] Bolyn Armor',
    }, {
      id: 22345,
      mainCategoryId: '55',
      name: '[Berserker] BD9 Helmet',
    }, {
      id: 22346,
      mainCategoryId: '55',
      name: '[Berserker] BD9 Armor',
    }, {
      id: 22347,
      mainCategoryId: '55',
      name: '[Berserker] BD9 Shoes',
    }, {
      id: 22348,
      mainCategoryId: '55',
      name: '[Berserker] Gavi Regan Helmet',
    }, {
      id: 22349,
      mainCategoryId: '55',
      name: '[Berserker] Gavi Regan Armor',
    }, {
      id: 22350,
      mainCategoryId: '55',
      name: '[Berserker] Marine Romance Hat',
    }, {
      id: 22351,
      mainCategoryId: '55',
      name: '[Berserker] Marine Romance Clothes',
    }, {
      id: 22352,
      mainCategoryId: '55',
      name: '[Berserker] Marine Romance Gloves',
    }, {
      id: 22353,
      mainCategoryId: '55',
      name: '[Berserker] Marine Romance Shoes',
    }, {
      id: 22354,
      mainCategoryId: '55',
      name: '[Berserker] Grave Keeper Hat',
    }, {
      id: 22355,
      mainCategoryId: '55',
      name: '[Berserker] Grave Keeper Clothes',
    }, {
      id: 22356,
      mainCategoryId: '55',
      name: '[Berserker] Grave Keeper Gloves',
    }, {
      id: 22357,
      mainCategoryId: '55',
      name: '[Berserker] Pila Fe Outlaw Hat',
    }, {
      id: 22358,
      mainCategoryId: '55',
      name: '[Berserker] Pila Fe Outlaw Clothes',
    }, {
      id: 22362,
      mainCategoryId: '55',
      name: '[Berserker] Gavi Regan Iron Buster',
    }, {
      id: 22363,
      mainCategoryId: '55',
      name: '[Berserker] Gavi Regan Axe',
    }, {
      id: 22364,
      mainCategoryId: '55',
      name: '[Berserker] Gavi Regan Ornamental Knot',
    }, {
      id: 22365,
      mainCategoryId: '55',
      name: '[Berserker] BD9 Iron Buster',
    }, {
      id: 22366,
      mainCategoryId: '55',
      name: '[Berserker] BD9 Axe',
    }, {
      id: 22367,
      mainCategoryId: '55',
      name: '[Berserker] Bolyn Iron Buster',
    }, {
      id: 22368,
      mainCategoryId: '55',
      name: '[Berserker] Bolyn Axe',
    }, {
      id: 22369,
      mainCategoryId: '55',
      name: '[Berserker] Gotha Rensa Iron Buster',
    }, {
      id: 22370,
      mainCategoryId: '55',
      name: '[Berserker] Gotha Rensa Axe',
    }, {
      id: 22371,
      mainCategoryId: '55',
      name: '[Berserker] Red Robe Axe',
    }, {
      id: 22372,
      mainCategoryId: '55',
      name: '[Berserker] Karlstein Axe',
    }, {
      id: 22374,
      mainCategoryId: '55',
      name: '[Berserker] Kibelius Axe',
    }, {
      id: 22375,
      mainCategoryId: '55',
      name: '[Berserker] Epheria Marine Axe',
    }, {
      id: 22379,
      mainCategoryId: '55',
      name: '[Berserker] Cantusa Axe',
    }, {
      id: 22381,
      mainCategoryId: '55',
      name: '[Berserker] Acher Guard Axe',
    }, {
      id: 22382,
      mainCategoryId: '55',
      name: '[Berserker] Tantu Iron Buster',
    }, {
      id: 22383,
      mainCategoryId: '55',
      name: '[Berserker] Tantu Axe',
    }, {
      id: 22386,
      mainCategoryId: '55',
      name: '[Berserker] Red Robe Ornamental Knot',
    }, {
      id: 22387,
      mainCategoryId: '55',
      name: '[Berserker] Karlstein Ornamental Knot',
    }, {
      id: 22389,
      mainCategoryId: '55',
      name: '[Berserker] Kibelius Ornamental Knot',
    }, {
      id: 22390,
      mainCategoryId: '55',
      name: '[Berserker] Epheria Marine Ornamental Knot',
    }, {
      id: 22394,
      mainCategoryId: '55',
      name: '[Berserker] Cantusa Ornamental Knot',
    }, {
      id: 22396,
      mainCategoryId: '55',
      name: '[Berserker] Acher Guard Ornamental Knot',
    }, {
      id: 22397,
      mainCategoryId: '55',
      name: '[Berserker] Tantu Ornamental Knot',
    }, {
      id: 22398,
      mainCategoryId: '55',
      name: '[Berserker] Gotha Rensa Ornamental Knot',
    }, {
      id: 22399,
      mainCategoryId: '55',
      name: '[Berserker] Bolyn Ornamental Knot',
    }, {
      id: 22400,
      mainCategoryId: '55',
      name: '[Berserker] BD9 Ornamental Knot',
    }, {
      id: 22401,
      mainCategoryId: '55',
      name: '[Tamer] Tyrie Helmet',
    }, {
      id: 22402,
      mainCategoryId: '55',
      name: '[Tamer] Tyrie Armor',
    }, {
      id: 22403,
      mainCategoryId: '55',
      name: '[Tamer] Tyrie Gloves',
    }, {
      id: 22404,
      mainCategoryId: '55',
      name: '[Tamer] Tyrie Shoes (Long)',
    }, {
      id: 22405,
      mainCategoryId: '55',
      name: '[Tamer] Tyrie Shoes (Short)',
    }, {
      id: 22406,
      mainCategoryId: '55',
      name: '[Tamer] Karlstein Hat',
    }, {
      id: 22407,
      mainCategoryId: '55',
      name: '[Tamer] Karlstein Armor',
    }, {
      id: 22408,
      mainCategoryId: '55',
      name: '[Tamer] Karlstein Shoes',
    }, {
      id: 22413,
      mainCategoryId: '55',
      name: '[Tamer] Kibelius Helmet',
    }, {
      id: 22414,
      mainCategoryId: '55',
      name: '[Tamer] Kibelius Divinus Armor',
    }, {
      id: 22415,
      mainCategoryId: '55',
      name: '[Tamer] Kibelius Shoes',
    }, {
      id: 22416,
      mainCategoryId: '55',
      name: '[Tamer] Epheria Marine Helmet',
    }, {
      id: 22417,
      mainCategoryId: '55',
      name: '[Tamer] Epheria Marine Clothes',
    }, {
      id: 22418,
      mainCategoryId: '55',
      name: '[Tamer] Epheria Marine Shoes',
    }, {
      id: 22429,
      mainCategoryId: '55',
      name: '[Tamer] Bloody Dress',
    }, {
      id: 22430,
      mainCategoryId: '55',
      name: '[Tamer] Bloody Gloves',
    }, {
      id: 22431,
      mainCategoryId: '55',
      name: '[Tamer] Bloody Shoes',
    }, {
      id: 22434,
      mainCategoryId: '55',
      name: '[Tamer] Acher Guard Helmet',
    }, {
      id: 22435,
      mainCategoryId: '55',
      name: '[Tamer] Acher Guard Armor',
    }, {
      id: 22436,
      mainCategoryId: '55',
      name: '[Tamer] Noel Hat',
    }, {
      id: 22437,
      mainCategoryId: '55',
      name: '[Tamer] Noel Clothes',
    }, {
      id: 22438,
      mainCategoryId: '55',
      name: '[Tamer] Noel Shoes',
    }, {
      id: 22439,
      mainCategoryId: '55',
      name: '[Tamer] Daru Helmet',
    }, {
      id: 22440,
      mainCategoryId: '55',
      name: '[Tamer] Daru Armor',
    }, {
      id: 22441,
      mainCategoryId: '55',
      name: '[Tamer] Daru Shoes',
    }, {
      id: 22442,
      mainCategoryId: '55',
      name: '[Tamer] White Dragon Helmet',
    }, {
      id: 22443,
      mainCategoryId: '55',
      name: '[Tamer] White Dragon Armor',
    }, {
      id: 22444,
      mainCategoryId: '55',
      name: '[Tamer] White Dragon Shoes',
    }, {
      id: 22445,
      mainCategoryId: '55',
      name: '[Tamer] New Year Hanbok Hat',
    }, {
      id: 22446,
      mainCategoryId: '55',
      name: '[Tamer] New Year Hanbok Clothes',
    }, {
      id: 22447,
      mainCategoryId: '55',
      name: '[Tamer] New Year Hanbok Shoes',
    }, {
      id: 22453,
      mainCategoryId: '55',
      name: '[Tamer] Karin Helmet',
    }, {
      id: 22454,
      mainCategoryId: '55',
      name: '[Tamer] Karin Armor',
    }, {
      id: 22455,
      mainCategoryId: '55',
      name: '[Tamer] Marine Romance Hat',
    }, {
      id: 22456,
      mainCategoryId: '55',
      name: '[Tamer] Marine Romance Clothes',
    }, {
      id: 22457,
      mainCategoryId: '55',
      name: '[Tamer] Marine Romance Shoes',
    }, {
      id: 22458,
      mainCategoryId: '55',
      name: '[Tamer] Fairy Jackie Headdress',
    }, {
      id: 22459,
      mainCategoryId: '55',
      name: '[Tamer] Fairy Jackie Clothes',
    }, {
      id: 22460,
      mainCategoryId: '55',
      name: '[Tamer] Fairy Jackie Gloves',
    }, {
      id: 22461,
      mainCategoryId: '55',
      name: '[Tamer] Fairy Jackie Shoes',
    }, {
      id: 22462,
      mainCategoryId: '55',
      name: '[Tamer] Pila Fe Outlaw Hat',
    }, {
      id: 22463,
      mainCategoryId: '55',
      name: '[Tamer] Pila Fe Outlaw Clothes',
    }, {
      id: 22464,
      mainCategoryId: '55',
      name: '[Tamer] Pila Fe Outlaw Shoes',
    }, {
      id: 22465,
      mainCategoryId: '55',
      name: '[Tamer] Karin Celestial Bo Staff',
    }, {
      id: 22466,
      mainCategoryId: '55',
      name: '[Tamer] Karin Shortsword',
    }, {
      id: 22469,
      mainCategoryId: '55',
      name: '[Tamer] White Dragon Celestial Bo Staff',
    }, {
      id: 22470,
      mainCategoryId: '55',
      name: '[Tamer] White Dragon Shortsword',
    }, {
      id: 22471,
      mainCategoryId: '55',
      name: '[Tamer] Tyrie Shortsword',
    }, {
      id: 22472,
      mainCategoryId: '55',
      name: '[Tamer] Karlstein Shortsword',
    }, {
      id: 22474,
      mainCategoryId: '55',
      name: '[Tamer] Kibelius Shortsword',
    }, {
      id: 22475,
      mainCategoryId: '55',
      name: '[Tamer] Epheria Marine Shortsword',
    }, {
      id: 22481,
      mainCategoryId: '55',
      name: '[Tamer] Acher Guard Shortsword',
    }, {
      id: 22482,
      mainCategoryId: '55',
      name: '[Tamer] Daru Celestial Bo Staff',
    }, {
      id: 22483,
      mainCategoryId: '55',
      name: '[Tamer] Daru Shortsword',
    }, {
      id: 22486,
      mainCategoryId: '55',
      name: '[Tamer] Tyrie Trinket',
    }, {
      id: 22487,
      mainCategoryId: '55',
      name: '[Tamer] Karlstein Trinket',
    }, {
      id: 22489,
      mainCategoryId: '55',
      name: '[Tamer] Kibelius Trinket',
    }, {
      id: 22490,
      mainCategoryId: '55',
      name: '[Tamer] Epheria Marine Trinket',
    }, {
      id: 22496,
      mainCategoryId: '55',
      name: '[Tamer] Acher Guard Trinket',
    }, {
      id: 22497,
      mainCategoryId: '55',
      name: '[Tamer] Daru Trinket',
    }, {
      id: 22498,
      mainCategoryId: '55',
      name: '[Tamer] White Dragon Trinket',
    }, {
      id: 22500,
      mainCategoryId: '55',
      name: '[Tamer] Karin Short Trinket',
    }, {
      id: 22501,
      mainCategoryId: '55',
      name: '[Musa] Red Robe Helmet',
    }, {
      id: 22502,
      mainCategoryId: '55',
      name: '[Musa] Red Robe Armor',
    }, {
      id: 22503,
      mainCategoryId: '55',
      name: '[Musa] Karlstein Hat',
    }, {
      id: 22504,
      mainCategoryId: '55',
      name: '[Musa] Karlstein Armor',
    }, {
      id: 22508,
      mainCategoryId: '55',
      name: '[Musa] Kibelius Helmet',
    }, {
      id: 22509,
      mainCategoryId: '55',
      name: '[Musa] Kibelius Divinus Armor',
    }, {
      id: 22510,
      mainCategoryId: '55',
      name: '[Musa] Kibelius Shoes',
    }, {
      id: 22511,
      mainCategoryId: '55',
      name: '[Musa] Epheria Marine Helmet',
    }, {
      id: 22512,
      mainCategoryId: '55',
      name: '[Musa] Epheria Marine Clothes',
    }, {
      id: 22513,
      mainCategoryId: '55',
      name: '[Musa] Epheria Marine Shoes',
    }, {
      id: 22522,
      mainCategoryId: '55',
      name: '[Musa] Cantusa Helmet',
    }, {
      id: 22523,
      mainCategoryId: '55',
      name: '[Musa] Cantusa Armor',
    }, {
      id: 22525,
      mainCategoryId: '55',
      name: '[Musa] Cantusa Shoes',
    }, {
      id: 22527,
      mainCategoryId: '55',
      name: '[Musa] Bloody Suit',
    }, {
      id: 22529,
      mainCategoryId: '55',
      name: '[Musa] Acher Guard Helmet',
    }, {
      id: 22530,
      mainCategoryId: '55',
      name: '[Musa] Acher Guard Armor',
    }, {
      id: 22531,
      mainCategoryId: '55',
      name: '[Musa] Noel Hat',
    }, {
      id: 22532,
      mainCategoryId: '55',
      name: '[Musa] Noel Clothes',
    }, {
      id: 22533,
      mainCategoryId: '55',
      name: '[Musa] New Year Hanbok Hat',
    }, {
      id: 22534,
      mainCategoryId: '55',
      name: '[Musa] New Year Hanbok Clothes',
    }, {
      id: 22535,
      mainCategoryId: '55',
      name: '[Musa] Western Frontiers Helmet',
    }, {
      id: 22536,
      mainCategoryId: '55',
      name: '[Musa] Western Frontiers Armor',
    }, {
      id: 22542,
      mainCategoryId: '55',
      name: '[Musa] Bolyn Armor',
    }, {
      id: 22543,
      mainCategoryId: '55',
      name: '[Musa] Palgong Helmet',
    }, {
      id: 22544,
      mainCategoryId: '55',
      name: '[Musa] Palgong Armor',
    }, {
      id: 22546,
      mainCategoryId: '55',
      name: '[Musa] Gavi Regan Helmet',
    }, {
      id: 22547,
      mainCategoryId: '55',
      name: '[Musa] Gavi Regan Armor',
    }, {
      id: 22548,
      mainCategoryId: '55',
      name: '[Musa] Marine Romance Hat',
    }, {
      id: 22549,
      mainCategoryId: '55',
      name: '[Musa] Marine Romance Clothes',
    }, {
      id: 22550,
      mainCategoryId: '55',
      name: '[Musa] Marine Romance Gloves',
    }, {
      id: 22551,
      mainCategoryId: '55',
      name: '[Musa] Marine Romance Shoes',
    }, {
      id: 22552,
      mainCategoryId: '55',
      name: '[Musa] Grave Keeper Hat',
    }, {
      id: 22553,
      mainCategoryId: '55',
      name: '[Musa] Grave Keeper Clothes',
    }, {
      id: 22554,
      mainCategoryId: '55',
      name: '[Musa] Grave Keeper Gloves',
    }, {
      id: 22555,
      mainCategoryId: '55',
      name: '[Musa] Pila Fe Outlaw Hat',
    }, {
      id: 22556,
      mainCategoryId: '55',
      name: '[Musa] Pila Fe Outlaw Clothes',
    }, {
      id: 22557,
      mainCategoryId: '55',
      name: '[Musa] Blue Tiger Helmet',
    }, {
      id: 22558,
      mainCategoryId: '55',
      name: '[Musa] Blue Tiger Armor',
    }, {
      id: 22559,
      mainCategoryId: '55',
      name: '[Musa] Blue Tiger Gloves',
    }, {
      id: 22560,
      mainCategoryId: '55',
      name: '[Musa] Blue Tiger Shoes',
    }, {
      id: 22563,
      mainCategoryId: '55',
      name: '[Musa] Gavi Regan Crescent Blade',
    }, {
      id: 22564,
      mainCategoryId: '55',
      name: '[Musa] Gavi Regan Blade',
    }, {
      id: 22565,
      mainCategoryId: '55',
      name: '[Musa] Gavi Regan Horn Bow',
    }, {
      id: 22566,
      mainCategoryId: '55',
      name: '[Musa] Palgong Crescent Blade',
    }, {
      id: 22567,
      mainCategoryId: '55',
      name: '[Musa] Palgong Blade',
    }, {
      id: 22568,
      mainCategoryId: '55',
      name: '[Musa] Bolyn Crescent Blade',
    }, {
      id: 22569,
      mainCategoryId: '55',
      name: '[Musa] Bolyn Blade',
    }, {
      id: 22570,
      mainCategoryId: '55',
      name: '[Musa] Western Frontiers Crescent Blade',
    }, {
      id: 22571,
      mainCategoryId: '55',
      name: '[Musa] Red Robe Blade',
    }, {
      id: 22572,
      mainCategoryId: '55',
      name: '[Musa] Karlstein Blade',
    }, {
      id: 22574,
      mainCategoryId: '55',
      name: '[Musa] Kibelius Blade',
    }, {
      id: 22575,
      mainCategoryId: '55',
      name: '[Musa] Epheria Marine Blade',
    }, {
      id: 22579,
      mainCategoryId: '55',
      name: '[Musa] Cantusa Blade',
    }, {
      id: 22581,
      mainCategoryId: '55',
      name: '[Musa] Acher Guard Blade',
    }, {
      id: 22582,
      mainCategoryId: '55',
      name: '[Musa] Western Frontiers Blade',
    }, {
      id: 22586,
      mainCategoryId: '55',
      name: '[Musa] Red Robe Horn Bow',
    }, {
      id: 22587,
      mainCategoryId: '55',
      name: '[Musa] Karlstein Horn Bow',
    }, {
      id: 22589,
      mainCategoryId: '55',
      name: '[Musa] Kibelius Horn Bow',
    }, {
      id: 22590,
      mainCategoryId: '55',
      name: '[Musa] Epheria Marine Horn Bow',
    }, {
      id: 22594,
      mainCategoryId: '55',
      name: '[Musa] Cantusa Horn Bow',
    }, {
      id: 22596,
      mainCategoryId: '55',
      name: '[Musa] Acher Guard Horn Bow',
    }, {
      id: 22597,
      mainCategoryId: '55',
      name: '[Musa] Western Frontiers Horn Bow',
    }, {
      id: 22599,
      mainCategoryId: '55',
      name: '[Musa] Bolyn Horn Bow',
    }, {
      id: 22600,
      mainCategoryId: '55',
      name: '[Musa] Palgong Horn Bow',
    }, {
      id: 22601,
      mainCategoryId: '55',
      name: '[Valkyrie] Tyrie Helmet',
    }, {
      id: 22602,
      mainCategoryId: '55',
      name: '[Valkyrie] Tyrie Armor',
    }, {
      id: 22603,
      mainCategoryId: '55',
      name: '[Valkyrie] Tyrie Gloves',
    }, {
      id: 22604,
      mainCategoryId: '55',
      name: '[Valkyrie] Tyrie Shoes (Long)',
    }, {
      id: 22605,
      mainCategoryId: '55',
      name: '[Valkyrie] Tyrie Shoes (Short)',
    }, {
      id: 22606,
      mainCategoryId: '55',
      name: '[Valkyrie] Karlstein Hat',
    }, {
      id: 22607,
      mainCategoryId: '55',
      name: '[Valkyrie] Karlstein Armor',
    }, {
      id: 22608,
      mainCategoryId: '55',
      name: '[Valkyrie] Karlstein Shoes',
    }, {
      id: 22613,
      mainCategoryId: '55',
      name: '[Valkyrie] Kibelius Helmet',
    }, {
      id: 22614,
      mainCategoryId: '55',
      name: '[Valkyrie] Kibelius Divinus Armor',
    }, {
      id: 22615,
      mainCategoryId: '55',
      name: '[Valkyrie] Kibelius Shoes',
    }, {
      id: 22616,
      mainCategoryId: '55',
      name: '[Valkyrie] Epheria Marine Helmet',
    }, {
      id: 22617,
      mainCategoryId: '55',
      name: '[Valkyrie] Epheria Marine Clothes',
    }, {
      id: 22618,
      mainCategoryId: '55',
      name: '[Valkyrie] Epheria Marine Shoes',
    }, {
      id: 22629,
      mainCategoryId: '55',
      name: '[Valkyrie] Bloody Dress',
    }, {
      id: 22630,
      mainCategoryId: '55',
      name: '[Valkyrie] Bloody Gloves',
    }, {
      id: 22631,
      mainCategoryId: '55',
      name: '[Valkyrie] Bloody Shoes',
    }, {
      id: 22633,
      mainCategoryId: '55',
      name: '[Valkyrie] Clead Helmet',
    }, {
      id: 22634,
      mainCategoryId: '55',
      name: '[Valkyrie] Clead Armor',
    }, {
      id: 22638,
      mainCategoryId: '55',
      name: '[Valkyrie] Acher Guard Helmet',
    }, {
      id: 22639,
      mainCategoryId: '55',
      name: '[Valkyrie] Acher Guard Armor',
    }, {
      id: 22640,
      mainCategoryId: '55',
      name: '[Valkyrie] Acher Guard Shoes',
    }, {
      id: 22641,
      mainCategoryId: '55',
      name: '[Valkyrie] Noel Hat',
    }, {
      id: 22642,
      mainCategoryId: '55',
      name: '[Valkyrie] Noel Clothes',
    }, {
      id: 22643,
      mainCategoryId: '55',
      name: '[Valkyrie] Noel Shoes',
    }, {
      id: 22644,
      mainCategoryId: '55',
      name: '[Valkyrie] Kylia Helmet',
    }, {
      id: 22645,
      mainCategoryId: '55',
      name: '[Valkyrie] Kylia Armor',
    }, {
      id: 22646,
      mainCategoryId: '55',
      name: '[Valkyrie] Kylia Shoes',
    }, {
      id: 22650,
      mainCategoryId: '55',
      name: '[Valkyrie] New Year Hanbok Hat',
    }, {
      id: 22652,
      mainCategoryId: '55',
      name: '[Valkyrie] New Year Hanbok Shoes',
    }, {
      id: 22653,
      mainCategoryId: '55',
      name: '[Valkyrie] Enslar Helmet',
    }, {
      id: 22654,
      mainCategoryId: '55',
      name: '[Valkyrie] Enslar Armor',
    }, {
      id: 22655,
      mainCategoryId: '55',
      name: '[Valkyrie] Enslar Shoes',
    }, {
      id: 22658,
      mainCategoryId: '55',
      name: '[Valkyrie] Karin Helmet',
    }, {
      id: 22659,
      mainCategoryId: '55',
      name: '[Valkyrie] Karin Armor',
    }, {
      id: 22660,
      mainCategoryId: '55',
      name: '[Valkyrie] Fallen Garzar Helmet',
    }, {
      id: 22661,
      mainCategoryId: '55',
      name: '[Valkyrie] Fallen Garzar Armor',
    }, {
      id: 22662,
      mainCategoryId: '55',
      name: '[Valkyrie] Fallen Garzar Shoes',
    }, {
      id: 22663,
      mainCategoryId: '55',
      name: '[Valkyrie] Marine Romance Hat',
    }, {
      id: 22664,
      mainCategoryId: '55',
      name: '[Valkyrie] Fallen Garzar Shield',
    }, {
      id: 22665,
      mainCategoryId: '55',
      name: '[Valkyrie] Fallen Garzar Lancia',
    }, {
      id: 22666,
      mainCategoryId: '55',
      name: '[Valkyrie] Fallen Garzar Longsword',
    }, {
      id: 22667,
      mainCategoryId: '55',
      name: '[Valkyrie] Karin Lancia',
    }, {
      id: 22668,
      mainCategoryId: '55',
      name: '[Valkyrie] Karin Longsword',
    }, {
      id: 22671,
      mainCategoryId: '55',
      name: '[Valkyrie] Tyrie Longsword',
    }, {
      id: 22672,
      mainCategoryId: '55',
      name: '[Valkyrie] Karlstein Longsword',
    }, {
      id: 22674,
      mainCategoryId: '55',
      name: '[Valkyrie] Kibelius Longsword',
    }, {
      id: 22675,
      mainCategoryId: '55',
      name: '[Valkyrie] Epheria Marine Longsword',
    }, {
      id: 22680,
      mainCategoryId: '55',
      name: '[Valkyrie] Clead Longsword',
    }, {
      id: 22681,
      mainCategoryId: '55',
      name: '[Valkyrie] Acher Guard Longsword',
    }, {
      id: 22682,
      mainCategoryId: '55',
      name: '[Valkyrie] Kylia Longsword',
    }, {
      id: 22684,
      mainCategoryId: '55',
      name: '[Valkyrie] Enslar Lancia',
    }, {
      id: 22685,
      mainCategoryId: '55',
      name: '[Valkyrie] Enslar Longsword',
    }, {
      id: 22686,
      mainCategoryId: '55',
      name: '[Valkyrie] Tyrie Shield',
    }, {
      id: 22687,
      mainCategoryId: '55',
      name: '[Valkyrie] Karlstein Shield',
    }, {
      id: 22689,
      mainCategoryId: '55',
      name: '[Valkyrie] Kibelius Shield',
    }, {
      id: 22690,
      mainCategoryId: '55',
      name: '[Valkyrie] Epheria Marine Shield',
    }, {
      id: 22695,
      mainCategoryId: '55',
      name: '[Valkyrie] Clead Shield',
    }, {
      id: 22696,
      mainCategoryId: '55',
      name: '[Valkyrie] Acher Guard Shield',
    }, {
      id: 22697,
      mainCategoryId: '55',
      name: '[Valkyrie] Kylia Shield',
    }, {
      id: 22699,
      mainCategoryId: '55',
      name: '[Valkyrie] Enslar Shield',
    }, {
      id: 22700,
      mainCategoryId: '55',
      name: '[Valkyrie] Karin Shield',
    }, {
      id: 22701,
      mainCategoryId: '55',
      name: '[Maehwa] Tyrie Helmet',
    }, {
      id: 22702,
      mainCategoryId: '55',
      name: '[Maehwa] Tyrie Armor',
    }, {
      id: 22703,
      mainCategoryId: '55',
      name: '[Maehwa] Tyrie Gloves',
    }, {
      id: 22704,
      mainCategoryId: '55',
      name: '[Maehwa] Tyrie Shoes (Long)',
    }, {
      id: 22705,
      mainCategoryId: '55',
      name: '[Maehwa] Tyrie Shoes (Short)',
    }, {
      id: 22706,
      mainCategoryId: '55',
      name: '[Maehwa] Karlstein Hat',
    }, {
      id: 22707,
      mainCategoryId: '55',
      name: '[Maehwa] Karlstein Armor',
    }, {
      id: 22708,
      mainCategoryId: '55',
      name: '[Maehwa] Karlstein Shoes',
    }, {
      id: 22713,
      mainCategoryId: '55',
      name: '[Maehwa] Kibelius Helmet',
    }, {
      id: 22714,
      mainCategoryId: '55',
      name: '[Maehwa] Kibelius Divinus Armor',
    }, {
      id: 22715,
      mainCategoryId: '55',
      name: '[Maehwa] Kibelius Shoes',
    }, {
      id: 22716,
      mainCategoryId: '55',
      name: '[Maehwa] Epheria Marine Helmet',
    }, {
      id: 22717,
      mainCategoryId: '55',
      name: '[Maehwa] Epheria Marine Clothes',
    }, {
      id: 22718,
      mainCategoryId: '55',
      name: '[Maehwa] Epheria Marine Shoes',
    }, {
      id: 22728,
      mainCategoryId: '55',
      name: '[Maehwa] Atanis Helmet',
    }, {
      id: 22729,
      mainCategoryId: '55',
      name: '[Maehwa] Atanis Armor',
    }, {
      id: 22730,
      mainCategoryId: '55',
      name: '[Maehwa] Atanis Shoes (Short)',
    }, {
      id: 22732,
      mainCategoryId: '55',
      name: '[Maehwa] Bloody Dress',
    }, {
      id: 22733,
      mainCategoryId: '55',
      name: '[Maehwa] Bloody Gloves',
    }, {
      id: 22734,
      mainCategoryId: '55',
      name: '[Maehwa] Bloody Shoes',
    }, {
      id: 22737,
      mainCategoryId: '55',
      name: '[Maehwa] Acher Guard Helmet',
    }, {
      id: 22738,
      mainCategoryId: '55',
      name: '[Maehwa] Acher Guard Armor',
    }, {
      id: 22739,
      mainCategoryId: '55',
      name: '[Maehwa] Noel Hat',
    }, {
      id: 22740,
      mainCategoryId: '55',
      name: '[Maehwa] Noel Clothes',
    }, {
      id: 22741,
      mainCategoryId: '55',
      name: '[Maehwa] Noel Shoes',
    }, {
      id: 22742,
      mainCategoryId: '55',
      name: '[Maehwa] Trumpet Creeper Helmet',
    }, {
      id: 22743,
      mainCategoryId: '55',
      name: '[Maehwa] Trumpet Creeper Armor',
    }, {
      id: 22744,
      mainCategoryId: '55',
      name: '[Maehwa] Trumpet Creeper Gloves',
    }, {
      id: 22745,
      mainCategoryId: '55',
      name: '[Maehwa] Trumpet Creeper Shoes',
    }, {
      id: 22746,
      mainCategoryId: '55',
      name: '[Maehwa] New Year Hanbok Hat',
    }, {
      id: 22747,
      mainCategoryId: '55',
      name: '[Maehwa] New Year Hanbok Clothes',
    }, {
      id: 22748,
      mainCategoryId: '55',
      name: '[Maehwa] New Year Hanbok Shoes',
    }, {
      id: 22751,
      mainCategoryId: '55',
      name: '[Maehwa] Order of the Apricot Helmet',
    }, {
      id: 22752,
      mainCategoryId: '55',
      name: '[Maehwa] Order of the Apricot Armor',
    }, {
      id: 22753,
      mainCategoryId: '55',
      name: '[Maehwa] Order of the Apricot Shoes',
    }, {
      id: 22755,
      mainCategoryId: '55',
      name: '[Maehwa] Karin Helmet',
    }, {
      id: 22756,
      mainCategoryId: '55',
      name: '[Maehwa] Karin Armor',
    }, {
      id: 22757,
      mainCategoryId: '55',
      name: '[Maehwa] Marine Romance Hat',
    }, {
      id: 22758,
      mainCategoryId: '55',
      name: '[Maehwa] Marine Romance Clothes',
    }, {
      id: 22759,
      mainCategoryId: '55',
      name: '[Maehwa] Marine Romance Shoes',
    }, {
      id: 22760,
      mainCategoryId: '55',
      name: '[Maehwa] Blushing Maiden Helmet',
    }, {
      id: 22761,
      mainCategoryId: '55',
      name: '[Maehwa] Blushing Maiden Armor',
    }, {
      id: 22762,
      mainCategoryId: '55',
      name: '[Maehwa] Blushing Maiden Gloves',
    }, {
      id: 22763,
      mainCategoryId: '55',
      name: '[Maehwa] Blushing Maiden Shoes',
    }, {
      id: 22764,
      mainCategoryId: '55',
      name: '[Maehwa] Blushing Maiden Blade',
    }, {
      id: 22765,
      mainCategoryId: '55',
      name: '[Maehwa] Blushing Maiden Horn Bow',
    }, {
      id: 22766,
      mainCategoryId: '55',
      name: '[Maehwa] Blushing Maiden Kerispear',
    }, {
      id: 22767,
      mainCategoryId: '55',
      name: '[Maehwa] Karin Blade',
    }, {
      id: 22768,
      mainCategoryId: '55',
      name: '[Maehwa] Karin Kerispear',
    }, {
      id: 22771,
      mainCategoryId: '55',
      name: '[Maehwa] Tyrie Blade',
    }, {
      id: 22772,
      mainCategoryId: '55',
      name: '[Maehwa] Karlstein Blade',
    }, {
      id: 22774,
      mainCategoryId: '55',
      name: '[Maehwa] Kibelius Blade',
    }, {
      id: 22775,
      mainCategoryId: '55',
      name: '[Maehwa] Epheria Marine Blade',
    }, {
      id: 22779,
      mainCategoryId: '55',
      name: '[Maehwa] Atanis Blade',
    }, {
      id: 22781,
      mainCategoryId: '55',
      name: '[Maehwa] Acher Guard Blade',
    }, {
      id: 22782,
      mainCategoryId: '55',
      name: '[Maehwa] Trumpet Creeper Blade',
    }, {
      id: 22783,
      mainCategoryId: '55',
      name: '[Maehwa] Order of the Apricot Blade',
    }, {
      id: 22784,
      mainCategoryId: '55',
      name: '[Maehwa] Order of the Apricot Kerispear',
    }, {
      id: 22786,
      mainCategoryId: '55',
      name: '[Maehwa] Tyrie Horn Bow',
    }, {
      id: 22787,
      mainCategoryId: '55',
      name: '[Maehwa] Karlstein Horn Bow',
    }, {
      id: 22789,
      mainCategoryId: '55',
      name: '[Maehwa] Kibelius Horn Bow',
    }, {
      id: 22790,
      mainCategoryId: '55',
      name: '[Maehwa] Epheria Marine Horn Bow',
    }, {
      id: 22794,
      mainCategoryId: '55',
      name: '[Maehwa] Atanis Horn Bow',
    }, {
      id: 22796,
      mainCategoryId: '55',
      name: '[Maehwa] Acher Guard Horn Bow',
    }, {
      id: 22797,
      mainCategoryId: '55',
      name: '[Maehwa] Trumpet Creeper Horn Bow',
    }, {
      id: 22798,
      mainCategoryId: '55',
      name: '[Maehwa] Order of the Apricot Horn Bow',
    }, {
      id: 22799,
      mainCategoryId: '55',
      name: '[Maehwa] Karin Horn Bow',
    }, {
      id: 22801,
      mainCategoryId: '55',
      name: '[Wizard] Inquirer\'s Destiny Hat',
    }, {
      id: 22802,
      mainCategoryId: '55',
      name: '[Wizard] Inquirer\'s Destiny Robe',
    }, {
      id: 22803,
      mainCategoryId: '55',
      name: '[Wizard] Inquirer\'s Destiny Gloves',
    }, {
      id: 22804,
      mainCategoryId: '55',
      name: '[Wizard] Inquirer\'s Destiny Shoes',
    }, {
      id: 22816,
      mainCategoryId: '55',
      name: '[Wizard] Karlstein Hat',
    }, {
      id: 22817,
      mainCategoryId: '55',
      name: '[Wizard] Karlstein Armor',
    }, {
      id: 22818,
      mainCategoryId: '55',
      name: '[Wizard] Lahr Arcien Hat',
    }, {
      id: 22819,
      mainCategoryId: '55',
      name: '[Wizard] Lahr Arcien Robe',
    }, {
      id: 22821,
      mainCategoryId: '55',
      name: '[Wizard] Lahr Arcien Shoes',
    }, {
      id: 22822,
      mainCategoryId: '55',
      name: '[Wizard] Kibelius Hat',
    }, {
      id: 22823,
      mainCategoryId: '55',
      name: '[Wizard] Kibelius Divinus Robe',
    }, {
      id: 22824,
      mainCategoryId: '55',
      name: '[Wizard] Kibelius Shoes',
    }, {
      id: 22825,
      mainCategoryId: '55',
      name: '[Wizard] Epheria Marine Hat',
    }, {
      id: 22826,
      mainCategoryId: '55',
      name: '[Wizard] Epheria Marine Clothes',
    }, {
      id: 22827,
      mainCategoryId: '55',
      name: '[Wizard] Epheria Marine Shoes',
    }, {
      id: 22828,
      mainCategoryId: '55',
      name: '[Wizard] Kibelius Robe',
    }, {
      id: 22834,
      mainCategoryId: '55',
      name: '[Wizard] Willow Breeze Robe',
    }, {
      id: 22835,
      mainCategoryId: '55',
      name: '[Wizard] Willow Breeze Shoes',
    }, {
      id: 22841,
      mainCategoryId: '55',
      name: '[Wizard] Cantusa Hat',
    }, {
      id: 22842,
      mainCategoryId: '55',
      name: '[Wizard] Cantusa Robe',
    }, {
      id: 22844,
      mainCategoryId: '55',
      name: '[Wizard] Cantusa Shoes',
    }, {
      id: 22846,
      mainCategoryId: '55',
      name: '[Wizard] Bloody Suit',
    }, {
      id: 22847,
      mainCategoryId: '55',
      name: '[Wizard] Cavaro Helmet',
    }, {
      id: 22848,
      mainCategoryId: '55',
      name: '[Wizard] Cavaro Armor',
    }, {
      id: 22851,
      mainCategoryId: '55',
      name: '[Wizard] Acher Guard Helmet',
    }, {
      id: 22852,
      mainCategoryId: '55',
      name: '[Wizard] Acher Guard Armor',
    }, {
      id: 22853,
      mainCategoryId: '55',
      name: '[Wizard] Noel Hat',
    }, {
      id: 22854,
      mainCategoryId: '55',
      name: '[Wizard] Noel Clothes',
    }, {
      id: 22857,
      mainCategoryId: '55',
      name: '[Wizard] New Year Hanbok Hat',
    }, {
      id: 22858,
      mainCategoryId: '55',
      name: '[Wizard] New Year Hanbok Clothes',
    }, {
      id: 22859,
      mainCategoryId: '55',
      name: '[Wizard] Amethyst Staff',
    }, {
      id: 22860,
      mainCategoryId: '55',
      name: '[Wizard] Amethyst Dagger',
    }, {
      id: 22871,
      mainCategoryId: '55',
      name: '[Wizard] Inquirer\'s Destiny Staff',
    }, {
      id: 22874,
      mainCategoryId: '55',
      name: '[Wizard] Karlstein Staff',
    }, {
      id: 22875,
      mainCategoryId: '55',
      name: '[Wizard] Lahr Arcien Staff',
    }, {
      id: 22876,
      mainCategoryId: '55',
      name: '[Wizard] Kibelius Staff',
    }, {
      id: 22877,
      mainCategoryId: '55',
      name: '[Wizard] Epheria Marine Staff',
    }, {
      id: 22881,
      mainCategoryId: '55',
      name: '[Wizard] Cantusa Staff',
    }, {
      id: 22883,
      mainCategoryId: '55',
      name: '[Wizard] Cavaro Staff',
    }, {
      id: 22884,
      mainCategoryId: '55',
      name: '[Wizard] Acher Guard Staff',
    }, {
      id: 22886,
      mainCategoryId: '55',
      name: '[Wizard] Inquirer\'s Destiny Dagger',
    }, {
      id: 22889,
      mainCategoryId: '55',
      name: '[Wizard] Karlstein Dagger',
    }, {
      id: 22890,
      mainCategoryId: '55',
      name: '[Wizard] Lahr Arcien Dagger',
    }, {
      id: 22891,
      mainCategoryId: '55',
      name: '[Wizard] Kibelius Dagger',
    }, {
      id: 22892,
      mainCategoryId: '55',
      name: '[Wizard] Epheria Marine Dagger',
    }, {
      id: 22896,
      mainCategoryId: '55',
      name: '[Wizard] Cantusa Dagger',
    }, {
      id: 22898,
      mainCategoryId: '55',
      name: '[Wizard] Cavaro Dagger',
    }, {
      id: 22899,
      mainCategoryId: '55',
      name: '[Wizard] Acher Guard Dagger',
    }, {
      id: 22901,
      mainCategoryId: '55',
      name: '[Witch] Dreaming Star Hat',
    }, {
      id: 22902,
      mainCategoryId: '55',
      name: '[Witch] Dreaming Star Robe',
    }, {
      id: 22903,
      mainCategoryId: '55',
      name: '[Witch] Dreaming Star Gloves',
    }, {
      id: 22904,
      mainCategoryId: '55',
      name: '[Witch] Dreaming Star Shoes',
    }, {
      id: 22918,
      mainCategoryId: '55',
      name: '[Witch] Karlstein Hat',
    }, {
      id: 22919,
      mainCategoryId: '55',
      name: '[Witch] Karlstein Armor',
    }, {
      id: 22920,
      mainCategoryId: '55',
      name: '[Witch] Karlstein Shoes',
    }, {
      id: 22921,
      mainCategoryId: '55',
      name: '[Witch] Lahr Arcien Hat (W)',
    }, {
      id: 22922,
      mainCategoryId: '55',
      name: '[Witch] Lahr Arcien Robe (W)',
    }, {
      id: 22924,
      mainCategoryId: '55',
      name: '[Witch] Lahr Arcien Shoes (W)',
    }, {
      id: 22925,
      mainCategoryId: '55',
      name: '[Witch] Kibelius Hat',
    }, {
      id: 22926,
      mainCategoryId: '55',
      name: '[Witch] Kibelius Divinus Robe',
    }, {
      id: 22927,
      mainCategoryId: '55',
      name: '[Witch] Kibelius Shoes',
    }, {
      id: 22928,
      mainCategoryId: '55',
      name: '[Witch] Puff Mini Hat',
    }, {
      id: 22929,
      mainCategoryId: '55',
      name: '[Witch] Puff Mini Robe',
    }, {
      id: 22930,
      mainCategoryId: '55',
      name: '[Witch] Puff Mini Gloves',
    }, {
      id: 22931,
      mainCategoryId: '55',
      name: '[Witch] Puff Mini Shoes',
    }, {
      id: 22932,
      mainCategoryId: '55',
      name: '[Witch] Epheria Marine Hat',
    }, {
      id: 22933,
      mainCategoryId: '55',
      name: '[Witch] Epheria Marine Clothes',
    }, {
      id: 22934,
      mainCategoryId: '55',
      name: '[Witch] Epheria Marine Shoes',
    }, {
      id: 22935,
      mainCategoryId: '55',
      name: '[Witch] Kibelius Robe',
    }, {
      id: 22949,
      mainCategoryId: '55',
      name: '[Witch] Bloody Dress',
    }, {
      id: 22950,
      mainCategoryId: '55',
      name: '[Witch] Bloody Gloves',
    }, {
      id: 22971,
      mainCategoryId: '55',
      name: '[Witch] Dreaming Star Staff',
    }, {
      id: 22974,
      mainCategoryId: '55',
      name: '[Witch] Karlstein Staff',
    }, {
      id: 22975,
      mainCategoryId: '55',
      name: '[Witch] Lahr Arcien Staff (W)',
    }, {
      id: 22976,
      mainCategoryId: '55',
      name: '[Witch] Kibelius Staff',
    }, {
      id: 22977,
      mainCategoryId: '55',
      name: '[Witch] Puff Mini Staff',
    }, {
      id: 22978,
      mainCategoryId: '55',
      name: '[Witch] Epheria Marine Staff',
    }, {
      id: 22983,
      mainCategoryId: '55',
      name: '[Witch] Acher Guard Staff',
    }, {
      id: 22985,
      mainCategoryId: '55',
      name: '[Witch] Deneve Staff',
    }, {
      id: 22986,
      mainCategoryId: '55',
      name: '[Witch] Dreaming Star Dagger',
    }, {
      id: 22989,
      mainCategoryId: '55',
      name: '[Witch] Karlstein Dagger',
    }, {
      id: 22990,
      mainCategoryId: '55',
      name: '[Witch] Lahr Arcien Dagger (W)',
    }, {
      id: 22991,
      mainCategoryId: '55',
      name: '[Witch] Kibelius Dagger',
    }, {
      id: 22992,
      mainCategoryId: '55',
      name: '[Witch] Puff Mini Dagger',
    }, {
      id: 22993,
      mainCategoryId: '55',
      name: '[Witch] Epheria Marine Dagger',
    }, {
      id: 22998,
      mainCategoryId: '55',
      name: '[Witch] Acher Guard Dagger',
    }, {
      id: 23000,
      mainCategoryId: '55',
      name: '[Witch] Deneve Dagger',
    }, {
      id: 23401,
      mainCategoryId: '55',
      name: '[Witch] Bloody Shoes',
    }, {
      id: 23404,
      mainCategoryId: '55',
      name: '[Witch] Acher Guard Helmet',
    }, {
      id: 23405,
      mainCategoryId: '55',
      name: '[Witch] Acher Guard Armor',
    }, {
      id: 23406,
      mainCategoryId: '55',
      name: '[Witch] Noel Hat',
    }, {
      id: 23407,
      mainCategoryId: '55',
      name: '[Witch] Noel Clothes',
    }, {
      id: 23408,
      mainCategoryId: '55',
      name: '[Witch] Noel Shoes',
    }, {
      id: 23412,
      mainCategoryId: '55',
      name: '[Witch] New Year Hanbok Hat',
    }, {
      id: 23413,
      mainCategoryId: '55',
      name: '[Witch] New Year Hanbok Clothes',
    }, {
      id: 23414,
      mainCategoryId: '55',
      name: '[Witch] New Year Hanbok Shoes',
    }, {
      id: 23415,
      mainCategoryId: '55',
      name: '[Witch] Deneve Hat',
    }, {
      id: 23416,
      mainCategoryId: '55',
      name: '[Witch] Deneve Robe',
    }, {
      id: 23417,
      mainCategoryId: '55',
      name: '[Witch] Deneve Shoes',
    }, {
      id: 23420,
      mainCategoryId: '55',
      name: '[Witch] Weenie Looney Hat',
    }, {
      id: 23421,
      mainCategoryId: '55',
      name: '[Witch] Weenie Looney Clothes',
    }, {
      id: 23423,
      mainCategoryId: '55',
      name: '[Witch] Lahr Arcien Hat (R)',
    }, {
      id: 23424,
      mainCategoryId: '55',
      name: '[Witch] Lahr Arcien Robe (R)',
    }, {
      id: 23425,
      mainCategoryId: '55',
      name: '[Witch] Lahr Arcien Shoes (R)',
    }, {
      id: 23426,
      mainCategoryId: '55',
      name: '[Witch] Karin Helmet',
    }, {
      id: 23427,
      mainCategoryId: '55',
      name: '[Witch] Karin Armor',
    }, {
      id: 23428,
      mainCategoryId: '55',
      name: '[Witch] Cavaro Helmet',
    }, {
      id: 23429,
      mainCategoryId: '55',
      name: '[Witch] Cavaro Armor',
    }, {
      id: 23430,
      mainCategoryId: '55',
      name: '[Witch] Cavaro Shoes',
    }, {
      id: 23431,
      mainCategoryId: '55',
      name: '[Witch] Marine Romance Hat',
    }, {
      id: 23432,
      mainCategoryId: '55',
      name: '[Witch] Marine Romance Clothes',
    }, {
      id: 23433,
      mainCategoryId: '55',
      name: '[Witch] Marine Romance Shoes',
    }, {
      id: 23437,
      mainCategoryId: '55',
      name: '[Witch] Labreve Hat',
    }, {
      id: 23438,
      mainCategoryId: '55',
      name: '[Witch] Labreve Clothes',
    }, {
      id: 23439,
      mainCategoryId: '55',
      name: '[Witch] Labreve Gloves',
    }, {
      id: 23440,
      mainCategoryId: '55',
      name: '[Witch] Rakshande Helmet',
    }, {
      id: 23441,
      mainCategoryId: '55',
      name: '[Witch] Rakshande Armor',
    }, {
      id: 23442,
      mainCategoryId: '55',
      name: '[Witch] Rakshande Shoes',
    }, {
      id: 23443,
      mainCategoryId: '55',
      name: '[Witch] Ghost Bride Headdress',
    }, {
      id: 23444,
      mainCategoryId: '55',
      name: '[Witch] Ghost Bride Clothes',
    }, {
      id: 23445,
      mainCategoryId: '55',
      name: '[Witch] Ghost Bride Gloves',
    }, {
      id: 23446,
      mainCategoryId: '55',
      name: '[Witch] Ghost Bride Shoes',
    }, {
      id: 23447,
      mainCategoryId: '55',
      name: '[Witch] Pila Fe Outlaw Hat',
    }, {
      id: 23448,
      mainCategoryId: '55',
      name: '[Witch] Pila Fe Outlaw Clothes',
    }, {
      id: 23449,
      mainCategoryId: '55',
      name: '[Witch] Pila Fe Outlaw Shoes',
    }, {
      id: 23470,
      mainCategoryId: '55',
      name: '[Witch] Weenie Looney Staff',
    }, {
      id: 23471,
      mainCategoryId: '55',
      name: '[Witch] Lahr Arcien Staff (R)',
    }, {
      id: 23472,
      mainCategoryId: '55',
      name: '[Witch] Karin Staff',
    }, {
      id: 23473,
      mainCategoryId: '55',
      name: '[Witch] Cavaro Staff',
    }, {
      id: 23474,
      mainCategoryId: '55',
      name: '[Witch] Labreve Aad Sphera',
    }, {
      id: 23475,
      mainCategoryId: '55',
      name: '[Witch] Labreve Staff',
    }, {
      id: 23478,
      mainCategoryId: '55',
      name: '[Witch] Kibelius Aad Sphera',
    }, {
      id: 23479,
      mainCategoryId: '55',
      name: '[Witch] Rakshande Aad Sphera',
    }, {
      id: 23480,
      mainCategoryId: '55',
      name: '[Witch] Rakshande Staff',
    }, {
      id: 23490,
      mainCategoryId: '55',
      name: '[Witch] Weenie Looney Dagger',
    }, {
      id: 23491,
      mainCategoryId: '55',
      name: '[Witch] Lahr Arcien Dagger (R)',
    }, {
      id: 23492,
      mainCategoryId: '55',
      name: '[Witch] Karin Dagger',
    }, {
      id: 23493,
      mainCategoryId: '55',
      name: '[Witch] Cavaro Dagger',
    }, {
      id: 23494,
      mainCategoryId: '55',
      name: '[Witch] Labreve Dagger',
    }, {
      id: 23495,
      mainCategoryId: '55',
      name: '[Witch] Rakshande Dagger',
    }, {
      id: 23501,
      mainCategoryId: '55',
      name: '[Kunoichi] Sicarios Helmet',
    }, {
      id: 23502,
      mainCategoryId: '55',
      name: '[Kunoichi] Sicarios Armor',
    }, {
      id: 23503,
      mainCategoryId: '55',
      name: '[Kunoichi] Sicarios Gloves',
    }, {
      id: 23504,
      mainCategoryId: '55',
      name: '[Kunoichi] Sicarios Shoes',
    }, {
      id: 23514,
      mainCategoryId: '55',
      name: '[Kunoichi] Epheria Marine Helmet',
    }, {
      id: 23515,
      mainCategoryId: '55',
      name: '[Kunoichi] Epheria Marine Clothes',
    }, {
      id: 23516,
      mainCategoryId: '55',
      name: '[Kunoichi] Epheria Marine Shoes',
    }, {
      id: 23517,
      mainCategoryId: '55',
      name: '[Kunoichi] Grolia Hat',
    }, {
      id: 23518,
      mainCategoryId: '55',
      name: '[Kunoichi] Trilby Headpiece',
    }, {
      id: 23522,
      mainCategoryId: '55',
      name: '[Kunoichi] Karlstein Hat',
    }, {
      id: 23523,
      mainCategoryId: '55',
      name: '[Kunoichi] Karlstein Armor',
    }, {
      id: 23524,
      mainCategoryId: '55',
      name: '[Kunoichi] Karlstein Shoes',
    }, {
      id: 23525,
      mainCategoryId: '55',
      name: '[Kunoichi] Spring Blossom Headpiece',
    }, {
      id: 23526,
      mainCategoryId: '55',
      name: '[Kunoichi] Spring Blossom Clothes',
    }, {
      id: 23527,
      mainCategoryId: '55',
      name: '[Kunoichi] Spring Blossom Shoes',
    }, {
      id: 23529,
      mainCategoryId: '55',
      name: '[Kunoichi] Bloody Dress',
    }, {
      id: 23530,
      mainCategoryId: '55',
      name: '[Kunoichi] Bloody Gloves',
    }, {
      id: 23531,
      mainCategoryId: '55',
      name: '[Kunoichi] Bloody Shoes',
    }, {
      id: 23534,
      mainCategoryId: '55',
      name: '[Kunoichi] Puff Mini Helmet',
    }, {
      id: 23535,
      mainCategoryId: '55',
      name: '[Kunoichi] Puff Mini Armor',
    }, {
      id: 23536,
      mainCategoryId: '55',
      name: '[Kunoichi] Puff Mini Gloves',
    }, {
      id: 23537,
      mainCategoryId: '55',
      name: '[Kunoichi] Puff Mini Shoes',
    }, {
      id: 23541,
      mainCategoryId: '55',
      name: '[Kunoichi] Acher Guard Helmet',
    }, {
      id: 23542,
      mainCategoryId: '55',
      name: '[Kunoichi] Acher Guard Armor',
    }, {
      id: 23543,
      mainCategoryId: '55',
      name: '[Kunoichi] Acher Guard Shoes',
    }, {
      id: 23544,
      mainCategoryId: '55',
      name: '[Kunoichi] Noel Hat',
    }, {
      id: 23545,
      mainCategoryId: '55',
      name: '[Kunoichi] Noel Clothes',
    }, {
      id: 23546,
      mainCategoryId: '55',
      name: '[Kunoichi] Noel Shoes',
    }, {
      id: 23547,
      mainCategoryId: '55',
      name: '[Kunoichi] Cokro Hat',
    }, {
      id: 23548,
      mainCategoryId: '55',
      name: '[Kunoichi] Cokro Clothes',
    }, {
      id: 23549,
      mainCategoryId: '55',
      name: '[Kunoichi] Cokro Shoes',
    }, {
      id: 23550,
      mainCategoryId: '55',
      name: '[Kunoichi] Lahr Arcien Helmet (R)',
    }, {
      id: 23551,
      mainCategoryId: '55',
      name: '[Kunoichi] Lahr Arcien Armor (R)',
    }, {
      id: 23552,
      mainCategoryId: '55',
      name: '[Kunoichi] Lahr Arcien Shoes (R)',
    }, {
      id: 23556,
      mainCategoryId: '55',
      name: '[Kunoichi] Sicarios Shortsword',
    }, {
      id: 23558,
      mainCategoryId: '55',
      name: '[Kunoichi] Epheria Marine Shortsword',
    }, {
      id: 23560,
      mainCategoryId: '55',
      name: '[Kunoichi] Karlstein Shortsword',
    }, {
      id: 23562,
      mainCategoryId: '55',
      name: '[Kunoichi] Puff Mini Shortsword',
    }, {
      id: 23564,
      mainCategoryId: '55',
      name: '[Kunoichi] Acher Guard Shortsword',
    }, {
      id: 23565,
      mainCategoryId: '55',
      name: '[Kunoichi] Cokro Shortsword',
    }, {
      id: 23566,
      mainCategoryId: '55',
      name: '[Kunoichi] Lahr Arcien Shortsword (R)',
    }, {
      id: 23568,
      mainCategoryId: '55',
      name: '[Kunoichi] Golden Scale Shortsword',
    }, {
      id: 23569,
      mainCategoryId: '55',
      name: '[Kunoichi] Kibelius Shortsword',
    }, {
      id: 23570,
      mainCategoryId: '55',
      name: '[Kunoichi] Karin Shortsword',
    }, {
      id: 23571,
      mainCategoryId: '55',
      name: '[Kunoichi] Sicarios Kunai',
    }, {
      id: 23573,
      mainCategoryId: '55',
      name: '[Kunoichi] Epheria Marine Kunai',
    }, {
      id: 23575,
      mainCategoryId: '55',
      name: '[Kunoichi] Karlstein Kunai',
    }, {
      id: 23577,
      mainCategoryId: '55',
      name: '[Kunoichi] Puff Mini Kunai',
    }, {
      id: 23579,
      mainCategoryId: '55',
      name: '[Kunoichi] Acher Guard Kunai',
    }, {
      id: 23580,
      mainCategoryId: '55',
      name: '[Kunoichi] Cokro Kunai',
    }, {
      id: 23581,
      mainCategoryId: '55',
      name: '[Kunoichi] Lahr Arcien Kunai (R)',
    }, {
      id: 23583,
      mainCategoryId: '55',
      name: '[Kunoichi] Golden Scale Kunai',
    }, {
      id: 23584,
      mainCategoryId: '55',
      name: '[Kunoichi] Kibelius Kunai',
    }, {
      id: 23585,
      mainCategoryId: '55',
      name: '[Kunoichi] Karin Kunai',
    }, {
      id: 23724,
      mainCategoryId: '55',
      name: '[Sorceress] Kyrill Helmet',
    }, {
      id: 23725,
      mainCategoryId: '55',
      name: '[Sorceress] Kyrill Armor',
    }, {
      id: 23726,
      mainCategoryId: '55',
      name: '[Sorceress] Kyrill Amulet',
    }, {
      id: 23727,
      mainCategoryId: '55',
      name: '[Sorceress] Kyrill Talisman',
    }, {
      id: 23728,
      mainCategoryId: '55',
      name: '[Sorceress] Kyrill Classic Set',
    }, {
      id: 23729,
      mainCategoryId: '55',
      name: '[Ranger] Red Moon Headpiece',
    }, {
      id: 23730,
      mainCategoryId: '55',
      name: '[Ranger] Red Moon Clothes',
    }, {
      id: 23731,
      mainCategoryId: '55',
      name: '[Ranger] Red Moon Gloves',
    }, {
      id: 23732,
      mainCategoryId: '55',
      name: '[Ranger] Red Moon Shoes',
    }, {
      id: 23733,
      mainCategoryId: '55',
      name: '[Ranger] Red Moon Longbow',
    }, {
      id: 23734,
      mainCategoryId: '55',
      name: '[Ranger] Red Moon Dagger',
    }, {
      id: 23735,
      mainCategoryId: '55',
      name: '[Ranger] Red Moon Classic Set',
    }, {
      id: 23736,
      mainCategoryId: '55',
      name: '[Tamer] Kyrill Helmet',
    }, {
      id: 23737,
      mainCategoryId: '55',
      name: '[Tamer] Kyrill Armor',
    }, {
      id: 23738,
      mainCategoryId: '55',
      name: '[Tamer] Kyrill Shortsword',
    }, {
      id: 23739,
      mainCategoryId: '55',
      name: '[Tamer] Kyrill Trinket',
    }, {
      id: 23740,
      mainCategoryId: '55',
      name: '[Tamer] Kyrill Classic Set',
    }, {
      id: 23741,
      mainCategoryId: '55',
      name: '[Valkyrie] Kyrill Helmet',
    }, {
      id: 23742,
      mainCategoryId: '55',
      name: '[Valkyrie] Kyrill Armor',
    }, {
      id: 23743,
      mainCategoryId: '55',
      name: '[Valkyrie] Kyrill Longsword',
    }, {
      id: 23744,
      mainCategoryId: '55',
      name: '[Valkyrie] Kyrill Shield',
    }, {
      id: 23745,
      mainCategoryId: '55',
      name: '[Valkyrie] Kyrill Classic Set',
    }, {
      id: 23746,
      mainCategoryId: '55',
      name: '[Maehwa] Kyrill Helmet',
    }, {
      id: 23747,
      mainCategoryId: '55',
      name: '[Maehwa] Kyrill Armor',
    }, {
      id: 23748,
      mainCategoryId: '55',
      name: '[Maehwa] Kyrill Blade',
    }, {
      id: 23749,
      mainCategoryId: '55',
      name: '[Maehwa] Kyrill Horn Bow',
    }, {
      id: 23750,
      mainCategoryId: '55',
      name: '[Maehwa] Kyrill Classic Set',
    }, {
      id: 23751,
      mainCategoryId: '55',
      name: '[Witch] Kyrill Hat',
    }, {
      id: 23752,
      mainCategoryId: '55',
      name: '[Witch] Kyrill Robe',
    }, {
      id: 23753,
      mainCategoryId: '55',
      name: '[Witch] Kyrill Staff',
    }, {
      id: 23754,
      mainCategoryId: '55',
      name: '[Witch] Kyrill Dagger',
    }, {
      id: 23755,
      mainCategoryId: '55',
      name: '[Witch] Kyrill Classic Set',
    }, {
      id: 23756,
      mainCategoryId: '55',
      name: '[Kunoichi] Vixen Helmet',
    }, {
      id: 23757,
      mainCategoryId: '55',
      name: '[Kunoichi] Vixen Armor',
    }, {
      id: 23758,
      mainCategoryId: '55',
      name: '[Kunoichi] Vixen Shoes',
    }, {
      id: 23759,
      mainCategoryId: '55',
      name: '[Kunoichi] Vixen Shortsword',
    }, {
      id: 23760,
      mainCategoryId: '55',
      name: '[Kunoichi] Vixen Kunai',
    }, {
      id: 23761,
      mainCategoryId: '55',
      name: '[Kunoichi] Vixen Classic Set',
    }, {
      id: 23762,
      mainCategoryId: '55',
      name: '[Witch] Spring Blossom Headpiece',
    }, {
      id: 23763,
      mainCategoryId: '55',
      name: '[Witch] Spring Blossom Clothes',
    }, {
      id: 23764,
      mainCategoryId: '55',
      name: '[Witch] Spring Blossom Shoes',
    }, {
      id: 23765,
      mainCategoryId: '55',
      name: '[Sorceress] Charles Rene Helmet',
    }, {
      id: 23766,
      mainCategoryId: '55',
      name: '[Sorceress] Charles Rene Armor',
    }, {
      id: 23767,
      mainCategoryId: '55',
      name: '[Sorceress] Charles Rene Gloves',
    }, {
      id: 23768,
      mainCategoryId: '55',
      name: '[Sorceress] Charles Rene Amulet',
    }, {
      id: 23769,
      mainCategoryId: '55',
      name: '[Sorceress] Charles Rene Talisman',
    }, {
      id: 23770,
      mainCategoryId: '55',
      name: '[Sorceress] Charles Rene Classic Set',
    }, {
      id: 23771,
      mainCategoryId: '55',
      name: '[Ranger] Charles Rene Helmet',
    }, {
      id: 23772,
      mainCategoryId: '55',
      name: '[Ranger] Charles Rene Armor',
    }, {
      id: 23773,
      mainCategoryId: '55',
      name: '[Ranger] Charles Rene Gloves',
    }, {
      id: 23774,
      mainCategoryId: '55',
      name: '[Ranger] Charles Rene Long Bow',
    }, {
      id: 23775,
      mainCategoryId: '55',
      name: '[Ranger] Charles Rene Dagger',
    }, {
      id: 23776,
      mainCategoryId: '55',
      name: '[Ranger] Charles Rene Classic Set',
    }, {
      id: 23777,
      mainCategoryId: '55',
      name: '[Tamer] Charles Rene Helmet',
    }, {
      id: 23778,
      mainCategoryId: '55',
      name: '[Tamer] Charles Rene Armor',
    }, {
      id: 23779,
      mainCategoryId: '55',
      name: '[Tamer] Charles Rene Gloves',
    }, {
      id: 23780,
      mainCategoryId: '55',
      name: '[Tamer] Charles Rene Shortsword',
    }, {
      id: 23781,
      mainCategoryId: '55',
      name: '[Tamer] Charles Rene Trinket',
    }, {
      id: 23782,
      mainCategoryId: '55',
      name: '[Tamer] Charles Rene Classic Set',
    }, {
      id: 23783,
      mainCategoryId: '55',
      name: '[Valkyrie] Charles Rene Helmet',
    }, {
      id: 23784,
      mainCategoryId: '55',
      name: '[Valkyrie] Charles Rene Armor',
    }, {
      id: 23785,
      mainCategoryId: '55',
      name: '[Valkyrie] Charles Rene Gloves',
    }, {
      id: 23786,
      mainCategoryId: '55',
      name: '[Valkyrie] Charles Rene Longsword',
    }, {
      id: 23787,
      mainCategoryId: '55',
      name: '[Valkyrie] Charles Rene Shield',
    }, {
      id: 23788,
      mainCategoryId: '55',
      name: '[Valkyrie] Charles Rene Classic Set',
    }, {
      id: 23789,
      mainCategoryId: '55',
      name: '[Maehwa] Charles Rene Helmet',
    }, {
      id: 23790,
      mainCategoryId: '55',
      name: '[Maehwa] Charles Rene Armor',
    }, {
      id: 23791,
      mainCategoryId: '55',
      name: '[Maehwa] Charles Rene Gloves',
    }, {
      id: 23792,
      mainCategoryId: '55',
      name: '[Maehwa] Charles Rene Blade',
    }, {
      id: 23793,
      mainCategoryId: '55',
      name: '[Maehwa] Charles Rene Horn Bow',
    }, {
      id: 23794,
      mainCategoryId: '55',
      name: '[Maehwa] Charles Rene Classic Set',
    }, {
      id: 23795,
      mainCategoryId: '55',
      name: '[Witch] Charles Rene Helmet',
    }, {
      id: 23796,
      mainCategoryId: '55',
      name: '[Witch] Charles Rene Armor',
    }, {
      id: 23797,
      mainCategoryId: '55',
      name: '[Witch] Charles Rene Gloves',
    }, {
      id: 23798,
      mainCategoryId: '55',
      name: '[Witch] Charles Rene Staff',
    }, {
      id: 23799,
      mainCategoryId: '55',
      name: '[Witch] Charles Rene Dagger',
    }, {
      id: 23800,
      mainCategoryId: '55',
      name: '[Witch] Charles Rene Classic Set',
    }, {
      id: 23801,
      mainCategoryId: '55',
      name: '[Kunoichi] Charles Rene Helmet',
    }, {
      id: 23802,
      mainCategoryId: '55',
      name: '[Kunoichi] Charles Rene Armor',
    }, {
      id: 23803,
      mainCategoryId: '55',
      name: '[Kunoichi] Charles Rene Gloves',
    }, {
      id: 23804,
      mainCategoryId: '55',
      name: '[Kunoichi] Charles Rene Shortsword',
    }, {
      id: 23805,
      mainCategoryId: '55',
      name: '[Kunoichi] Charles Rene Kunai',
    }, {
      id: 23806,
      mainCategoryId: '55',
      name: '[Kunoichi] Charles Rene Classic Set',
    }, {
      id: 24001,
      mainCategoryId: '80',
      name: '[Jukebox] Conch Shell',
    }, {
      id: 24106,
      mainCategoryId: '80',
      name: 'Straw Basket With Handles',
    }, {
      id: 24107,
      mainCategoryId: '80',
      name: 'Two-Handled Basket',
    }, {
      id: 24108,
      mainCategoryId: '80',
      name: 'Straw Pot',
    }, {
      id: 24109,
      mainCategoryId: '80',
      name: 'Square Basket with Cover',
    }, {
      id: 24132,
      mainCategoryId: '80',
      name: 'White Sheep Hide Cushion',
    }, {
      id: 24133,
      mainCategoryId: '80',
      name: 'Red Sheep Hide Cushion',
    }, {
      id: 24134,
      mainCategoryId: '80',
      name: 'Blue Sheep Hide Cushion',
    }, {
      id: 24144,
      mainCategoryId: '80',
      name: 'Pan with a Fried Egg',
    }, {
      id: 24145,
      mainCategoryId: '80',
      name: 'Plate of Fish',
    }, {
      id: 24146,
      mainCategoryId: '80',
      name: 'Plate of Assorted Fruits',
    }, {
      id: 24147,
      mainCategoryId: '80',
      name: 'Plate of Big Chunk of Meat',
    }, {
      id: 24148,
      mainCategoryId: '80',
      name: 'Plate of Chopped Meat',
    }, {
      id: 24149,
      mainCategoryId: '80',
      name: 'Plate of Soup',
    }, {
      id: 24151,
      mainCategoryId: '80',
      name: 'Pot of Soup',
    }, {
      id: 24153,
      mainCategoryId: '80',
      name: 'Plate of Turkey',
    }, {
      id: 24155,
      mainCategoryId: '80',
      name: 'Standing Beer Keg',
    }, {
      id: 24160,
      mainCategoryId: '80',
      name: 'Long Neck Vase',
    }, {
      id: 24189,
      mainCategoryId: '80',
      name: 'Map Cabinet',
    }, {
      id: 24193,
      mainCategoryId: '80',
      name: 'Doll',
    }, {
      id: 24203,
      mainCategoryId: '80',
      name: 'Round Pottery',
    }, {
      id: 24204,
      mainCategoryId: '80',
      name: 'Quagmire Pottery',
    }, {
      id: 24205,
      mainCategoryId: '80',
      name: 'Long Pottery',
    }, {
      id: 24206,
      mainCategoryId: '80',
      name: 'Ruby Gourd-Shaped Bottle',
    }, {
      id: 24207,
      mainCategoryId: '80',
      name: 'Fancy Sapphire Vase',
    }, {
      id: 24208,
      mainCategoryId: '80',
      name: 'Emerald Gourd-Shaped Bottle',
    }, {
      id: 24209,
      mainCategoryId: '80',
      name: 'Fancy Topaz Kettle',
    }, {
      id: 24210,
      mainCategoryId: '80',
      name: 'Beautiful Opal Vase',
    }, {
      id: 24211,
      mainCategoryId: '80',
      name: 'Golden Hand Vase',
    }, {
      id: 24212,
      mainCategoryId: '80',
      name: 'Imperial Platinum Kettle',
    }, {
      id: 24213,
      mainCategoryId: '80',
      name: 'Ancient Artifact China',
    }, {
      id: 24214,
      mainCategoryId: '80',
      name: 'Ancient Artifact Pot',
    }, {
      id: 24217,
      mainCategoryId: '80',
      name: 'Loria\'s Hand Mirror',
    }, {
      id: 24218,
      mainCategoryId: '80',
      name: 'Onion Pickle Jar',
    }, {
      id: 24219,
      mainCategoryId: '80',
      name: 'Olive Pickle Jar',
    }, {
      id: 24220,
      mainCategoryId: '80',
      name: 'Green Herb Pot',
    }, {
      id: 24221,
      mainCategoryId: '80',
      name: 'Florin Dawn Wall Carpet',
    }, {
      id: 24222,
      mainCategoryId: '80',
      name: 'Florin Autumn Leaves Wall Carpet',
    }, {
      id: 24223,
      mainCategoryId: '80',
      name: 'Florin Sunset Wall Carpet',
    }, {
      id: 24224,
      mainCategoryId: '80',
      name: 'Tarif Gourd-Shaped Bottle',
    }, {
      id: 24225,
      mainCategoryId: '80',
      name: 'Tarif Pot',
    }, {
      id: 24226,
      mainCategoryId: '80',
      name: 'Yisar Pjetyo Amulet',
    }, {
      id: 24227,
      mainCategoryId: '80',
      name: 'Allan Serbin Amulet',
    }, {
      id: 24228,
      mainCategoryId: '80',
      name: 'Nantusa Letusa Amulet',
    }, {
      id: 24229,
      mainCategoryId: '80',
      name: 'Tarif White Cedar Jewelry Box',
    }, {
      id: 24230,
      mainCategoryId: '80',
      name: 'Tarif Blue Stone Jewelry Box',
    }, {
      id: 24231,
      mainCategoryId: '80',
      name: 'Desert Fogan Flower Pot',
    }, {
      id: 24232,
      mainCategoryId: '80',
      name: 'Desert Fogan Lamp',
    }, {
      id: 24233,
      mainCategoryId: '80',
      name: 'Arehaza Semicircle Carpet',
    }, {
      id: 24234,
      mainCategoryId: '80',
      name: 'Arehaza Round Carpet',
    }, {
      id: 24235,
      mainCategoryId: '80',
      name: 'Over the Rocky Mountain',
    }, {
      id: 24236,
      mainCategoryId: '80',
      name: 'Arehaza Town Scenery',
    }, {
      id: 24237,
      mainCategoryId: '80',
      name: 'Areha Palm Forest',
    }, {
      id: 24242,
      mainCategoryId: '80',
      name: 'Duvencrune Bronk Lamp',
    }, {
      id: 24243,
      mainCategoryId: '80',
      name: 'Duvencrune Crescent Lamp',
    }, {
      id: 24252,
      mainCategoryId: '80',
      name: 'Oddly Patterned Flower Pot',
    }, {
      id: 24255,
      mainCategoryId: '80',
      name: 'Candle on a Pile of Books',
    }, {
      id: 24257,
      mainCategoryId: '80',
      name: 'O\'draxxia Candlestand',
    }, {
      id: 24259,
      mainCategoryId: '80',
      name: 'Glamorous Patterned Pot',
    }, {
      id: 24260,
      mainCategoryId: '80',
      name: 'Blinding Opalescent Pot',
    }, {
      id: 24261,
      mainCategoryId: '80',
      name: 'Experimental Alchemy Tool',
    }, {
      id: 24262,
      mainCategoryId: '80',
      name: 'Experimental Alchemy Tool Rack',
    }, {
      id: 24610,
      mainCategoryId: '80',
      name: 'Cauldron on a Holder',
    }, {
      id: 24619,
      mainCategoryId: '80',
      name: 'Bunch of Dried Roses',
    }, {
      id: 24620,
      mainCategoryId: '80',
      name: 'Tulip Lantern',
    }, {
      id: 24621,
      mainCategoryId: '80',
      name: 'Bunch of Garlic',
    }, {
      id: 24622,
      mainCategoryId: '80',
      name: 'Giant Fish Bone Wall Ornament',
    }, {
      id: 24626,
      mainCategoryId: '80',
      name: 'King Clam Wall Ornament',
    }, {
      id: 24634,
      mainCategoryId: '80',
      name: 'Ancient Slate Ornament',
    }, {
      id: 24661,
      mainCategoryId: '80',
      name: 'O\'draxxian Tapestry',
    }, {
      id: 24662,
      mainCategoryId: '80',
      name: 'Oddly Marked Tapestry',
    }, {
      id: 24801,
      mainCategoryId: '80',
      name: 'Single Display Stand',
    }, {
      id: 24823,
      mainCategoryId: '80',
      name: 'Vase',
    }, {
      id: 24829,
      mainCategoryId: '80',
      name: 'Red Rose Vase',
    }, {
      id: 24830,
      mainCategoryId: '80',
      name: 'Yellow Tulip Pot',
    }, {
      id: 24831,
      mainCategoryId: '80',
      name: 'Sunflower Vase',
    }, {
      id: 24832,
      mainCategoryId: '80',
      name: 'Strawberry Basket',
    }, {
      id: 24833,
      mainCategoryId: '80',
      name: 'Olive Tree Pot',
    }, {
      id: 24834,
      mainCategoryId: '80',
      name: 'Oddly Shaped Pumpkin',
    }, {
      id: 24835,
      mainCategoryId: '80',
      name: 'Pickled Onion',
    }, {
      id: 24836,
      mainCategoryId: '80',
      name: 'Giant Fish Bone',
    }, {
      id: 24837,
      mainCategoryId: '80',
      name: 'Bronze Goblet',
    }, {
      id: 24839,
      mainCategoryId: '80',
      name: 'King Clam',
    }, {
      id: 24840,
      mainCategoryId: '80',
      name: 'Turban Shell',
    }, {
      id: 24841,
      mainCategoryId: '80',
      name: 'Ancient Kamel Statue',
    }, {
      id: 24847,
      mainCategoryId: '80',
      name: 'Duvencrune Three Wood Display Stand',
    }, {
      id: 24848,
      mainCategoryId: '80',
      name: 'Duvencrune Beam Stand',
    }, {
      id: 24849,
      mainCategoryId: '80',
      name: 'Duvencrune Multipurpose Toolbox',
    }, {
      id: 24850,
      mainCategoryId: '80',
      name: 'Duvencrune Fabric Holder',
    }, {
      id: 24851,
      mainCategoryId: '80',
      name: 'Duvencrune Decoration Holder',
    }, {
      id: 24852,
      mainCategoryId: '80',
      name: 'Duvencrune Rhomboid Holder',
    }, {
      id: 24853,
      mainCategoryId: '80',
      name: 'Duvencrune Small Thuja Bookshelf',
    }, {
      id: 24854,
      mainCategoryId: '80',
      name: 'Duvencrune Large Thuja Bookshelf',
    }, {
      id: 24855,
      mainCategoryId: '80',
      name: 'Duvencrune Fragrant Bedside Table',
    }, {
      id: 24856,
      mainCategoryId: '80',
      name: 'Duvencrune Hardwood Bedside Table',
    }, {
      id: 24857,
      mainCategoryId: '80',
      name: 'Duvencrune Lamp Bedside Table',
    }, {
      id: 24858,
      mainCategoryId: '80',
      name: 'Duvencrune Leaf Bedside Table',
    }, {
      id: 24859,
      mainCategoryId: '80',
      name: 'Duvencrune Giant Wood Wardrobe',
    }, {
      id: 24860,
      mainCategoryId: '80',
      name: 'Duvencrune Target Dining Table',
    }, {
      id: 24861,
      mainCategoryId: '80',
      name: 'Duvencrune Wooden Dining Table',
    }, {
      id: 24862,
      mainCategoryId: '80',
      name: 'Kamasylvian Lemoria Drawers',
    }, {
      id: 24863,
      mainCategoryId: '80',
      name: 'Kamasylvian Grace Bedside Table',
    }, {
      id: 24864,
      mainCategoryId: '80',
      name: 'Kamasylvian Clock Stand',
    }, {
      id: 24865,
      mainCategoryId: '80',
      name: 'Kamasylvian Patterned Bedside Table',
    }, {
      id: 24866,
      mainCategoryId: '80',
      name: 'Kamasylvian Webbed Bedside Table',
    }, {
      id: 24867,
      mainCategoryId: '80',
      name: 'Kamasylvian Carved Bedside Table',
    }, {
      id: 24868,
      mainCategoryId: '80',
      name: 'Kamasylvian Grove Partition',
    }, {
      id: 24869,
      mainCategoryId: '80',
      name: 'Kamasylvian Old Moon Round Table',
    }, {
      id: 24870,
      mainCategoryId: '80',
      name: 'Smooth Kamasylvian Wooden Side Table',
    }, {
      id: 24871,
      mainCategoryId: '80',
      name: 'Kamasylvian Melody Side Table',
    }, {
      id: 24872,
      mainCategoryId: '80',
      name: 'Kamasylvian Compact Wine Jar',
    }, {
      id: 24873,
      mainCategoryId: '80',
      name: 'Kamasylvian Basic Wine Jar',
    }, {
      id: 24874,
      mainCategoryId: '80',
      name: 'Kamasylvian Wine Jar',
    }, {
      id: 24875,
      mainCategoryId: '80',
      name: 'Kamasylvian Single Tiered Wine Rack',
    }, {
      id: 24876,
      mainCategoryId: '80',
      name: 'Kamasylvian Two-Tiered Wine Rack',
    }, {
      id: 24877,
      mainCategoryId: '80',
      name: 'Kamasylvian Multi-Tiered Wine Rack',
    }, {
      id: 24878,
      mainCategoryId: '80',
      name: 'O\'draxxia Glamorous Patterned Carpet',
    }, {
      id: 25002,
      mainCategoryId: '80',
      name: 'Caged Owl',
    }, {
      id: 25620,
      mainCategoryId: '80',
      name: 'Cotton Drapeless Curtain',
    }, {
      id: 25621,
      mainCategoryId: '80',
      name: 'Fleece Drapeless Curtain',
    }, {
      id: 25622,
      mainCategoryId: '80',
      name: 'Silk Drapeless Curtain',
    }, {
      id: 25623,
      mainCategoryId: '80',
      name: 'Cotton Tab Drapeless Curtain',
    }, {
      id: 25624,
      mainCategoryId: '80',
      name: 'Fleece Tab Drapeless Curtain',
    }, {
      id: 25625,
      mainCategoryId: '80',
      name: 'Silk Tab Drapeless Curtain',
    }, {
      id: 26027,
      mainCategoryId: '55',
      name: '[Mystic] Trilby Headpiece',
    }, {
      id: 26028,
      mainCategoryId: '55',
      name: '[Mystic] Dhyana Helmet',
    }, {
      id: 26029,
      mainCategoryId: '55',
      name: '[Mystic] Dhyana Armor',
    }, {
      id: 26030,
      mainCategoryId: '55',
      name: '[Mystic] Dhyana Gloves',
    }, {
      id: 26031,
      mainCategoryId: '55',
      name: '[Mystic] Dhyana Gauntlet',
    }, {
      id: 26032,
      mainCategoryId: '55',
      name: '[Mystic] Dhyana Vambrace',
    }, {
      id: 26033,
      mainCategoryId: '55',
      name: '[Mystic] Dhyana Classic Set',
    }, {
      id: 26034,
      mainCategoryId: '55',
      name: '[Mystic] Karlstein Hat',
    }, {
      id: 26035,
      mainCategoryId: '55',
      name: '[Mystic] Karlstein Armor',
    }, {
      id: 26036,
      mainCategoryId: '55',
      name: '[Mystic] Karlstein Shoes',
    }, {
      id: 26037,
      mainCategoryId: '55',
      name: '[Mystic] Karlstein Gauntlet',
    }, {
      id: 26038,
      mainCategoryId: '55',
      name: '[Mystic] Karlstein Vambrace',
    }, {
      id: 26039,
      mainCategoryId: '55',
      name: '[Mystic] Karlstein Classic Set',
    }, {
      id: 26040,
      mainCategoryId: '55',
      name: '[Mystic] Lahr Arcien Helmet',
    }, {
      id: 26041,
      mainCategoryId: '55',
      name: '[Mystic] Lahr Arcien Armor',
    }, {
      id: 26042,
      mainCategoryId: '55',
      name: '[Mystic] Lahr Arcien Shoes',
    }, {
      id: 26043,
      mainCategoryId: '55',
      name: '[Mystic] Lahr Arcien Gauntlet',
    }, {
      id: 26044,
      mainCategoryId: '55',
      name: '[Mystic] Lahr Arcien Vambrace',
    }, {
      id: 26045,
      mainCategoryId: '55',
      name: '[Mystic] Lahr Arcien Classic Set',
    }, {
      id: 26046,
      mainCategoryId: '55',
      name: '[Mystic] Banha Helmet',
    }, {
      id: 26047,
      mainCategoryId: '55',
      name: '[Mystic] Banha Armor',
    }, {
      id: 26048,
      mainCategoryId: '55',
      name: '[Mystic] Banha Gloves',
    }, {
      id: 26049,
      mainCategoryId: '55',
      name: '[Mystic] Banha Shoes',
    }, {
      id: 26050,
      mainCategoryId: '55',
      name: '[Mystic] Banha Gauntlet',
    }, {
      id: 26051,
      mainCategoryId: '55',
      name: '[Mystic] Banha Vambrace',
    }, {
      id: 26052,
      mainCategoryId: '55',
      name: '[Mystic] Banha Cestus',
    }, {
      id: 26053,
      mainCategoryId: '55',
      name: '[Mystic] Banha Classic Set',
    }, {
      id: 26054,
      mainCategoryId: '55',
      name: '[Mystic] Banha Premium Set',
    }, {
      id: 26075,
      mainCategoryId: '55',
      name: '[Mystic] Kibelius Helmet',
    }, {
      id: 26076,
      mainCategoryId: '55',
      name: '[Mystic] Kibelius Divinus Armor',
    }, {
      id: 26077,
      mainCategoryId: '55',
      name: '[Mystic] Kibelius Armor',
    }, {
      id: 26078,
      mainCategoryId: '55',
      name: '[Mystic] Kibelius Shoes',
    }, {
      id: 26079,
      mainCategoryId: '55',
      name: '[Mystic] Kibelius Gauntlet',
    }, {
      id: 26080,
      mainCategoryId: '55',
      name: '[Mystic] Kibelius Vambrace',
    }, {
      id: 26081,
      mainCategoryId: '55',
      name: '[Mystic] Kibelius Cestus',
    }, {
      id: 26082,
      mainCategoryId: '55',
      name: '[Mystic] Kibelius Divinus Classic Set',
    }, {
      id: 26083,
      mainCategoryId: '55',
      name: '[Mystic] Kibelius Classic Set',
    }, {
      id: 26097,
      mainCategoryId: '55',
      name: '[Mystic] Gloomy Fox Headdress',
    }, {
      id: 26098,
      mainCategoryId: '55',
      name: '[Mystic] Gloomy Fox Clothes',
    }, {
      id: 26099,
      mainCategoryId: '55',
      name: '[Mystic] Gloomy Fox Outfit Set',
    }, {
      id: 26100,
      mainCategoryId: '55',
      name: '[Mystic] Puff Mini Helmet',
    }, {
      id: 26101,
      mainCategoryId: '55',
      name: '[Mystic] Puff Mini Armor',
    }, {
      id: 26102,
      mainCategoryId: '55',
      name: '[Mystic] Puff Mini Gloves',
    }, {
      id: 26103,
      mainCategoryId: '55',
      name: '[Mystic] Puff Mini Shoes',
    }, {
      id: 26104,
      mainCategoryId: '55',
      name: '[Mystic] Puff Mini Gauntlet',
    }, {
      id: 26105,
      mainCategoryId: '55',
      name: '[Mystic] Puff Mini Vambrace',
    }, {
      id: 26106,
      mainCategoryId: '55',
      name: '[Mystic] Puff Mini Classic Set',
    }, {
      id: 26107,
      mainCategoryId: '55',
      name: '[Mystic] Cavaro Helmet',
    }, {
      id: 26108,
      mainCategoryId: '55',
      name: '[Mystic] Cavaro Armor',
    }, {
      id: 26109,
      mainCategoryId: '55',
      name: '[Mystic] Cavaro Gloves',
    }, {
      id: 26110,
      mainCategoryId: '55',
      name: '[Mystic] Cavaro Shoes',
    }, {
      id: 26111,
      mainCategoryId: '55',
      name: '[Mystic] Cavaro Gauntlet',
    }, {
      id: 26112,
      mainCategoryId: '55',
      name: '[Mystic] Cavaro Vambrace',
    }, {
      id: 26113,
      mainCategoryId: '55',
      name: '[Mystic] Cavaro Classic Set',
    }, {
      id: 26117,
      mainCategoryId: '55',
      name: '[Mystic] Yeoubi Headpiece',
    }, {
      id: 26118,
      mainCategoryId: '55',
      name: '[Mystic] Yeoubi Clothes',
    }, {
      id: 26119,
      mainCategoryId: '55',
      name: '[Mystic] Yeoubi Gloves',
    }, {
      id: 26120,
      mainCategoryId: '55',
      name: '[Mystic] Yeoubi Shoes',
    }, {
      id: 26121,
      mainCategoryId: '55',
      name: '[Mystic] Yeoubi Gauntlet',
    }, {
      id: 26122,
      mainCategoryId: '55',
      name: '[Mystic] Yeoubi Vambrace',
    }, {
      id: 26123,
      mainCategoryId: '55',
      name: '[Mystic] Yeoubi Classic Set',
    }, {
      id: 26125,
      mainCategoryId: '55',
      name: '[Mystic] Terrminé Helmet',
    }, {
      id: 26126,
      mainCategoryId: '55',
      name: '[Mystic] Terrminé Armor',
    }, {
      id: 26127,
      mainCategoryId: '55',
      name: '[Mystic] Terrminé Outfit Set',
    }, {
      id: 28503,
      mainCategoryId: '55',
      name: '[Warrior] Heidel Masquerade Phantom Mask',
    }, {
      id: 28504,
      mainCategoryId: '55',
      name: '[Warrior] Heidel Masquerade Suit',
    }, {
      id: 28505,
      mainCategoryId: '55',
      name: '[Warrior] Heidel Masquerade Outfit Set',
    }, {
      id: 28506,
      mainCategoryId: '55',
      name: '[Warrior] Doomsday Helmet',
    }, {
      id: 28507,
      mainCategoryId: '55',
      name: '[Warrior] Doomsday Armor',
    }, {
      id: 28508,
      mainCategoryId: '55',
      name: '[Warrior] Doomsday Longsword',
    }, {
      id: 28509,
      mainCategoryId: '55',
      name: '[Warrior] Doomsday Shield',
    }, {
      id: 28510,
      mainCategoryId: '55',
      name: '[Warrior] Doomsday Great Sword',
    }, {
      id: 28511,
      mainCategoryId: '55',
      name: '[Warrior] Doomsday Classic Set',
    }, {
      id: 28512,
      mainCategoryId: '55',
      name: '[Warrior] Doomsday Premium Set',
    }, {
      id: 28514,
      mainCategoryId: '55',
      name: '[Warrior] Anemos Helmet',
    }, {
      id: 28515,
      mainCategoryId: '55',
      name: '[Warrior] Anemos Armor',
    }, {
      id: 28516,
      mainCategoryId: '55',
      name: '[Warrior] Anemos Outfit Set',
    }, {
      id: 28517,
      mainCategoryId: '55',
      name: '[Warrior] Grotevant Helmet',
    }, {
      id: 28518,
      mainCategoryId: '55',
      name: '[Warrior] Grotevant Armor',
    }, {
      id: 28519,
      mainCategoryId: '55',
      name: '[Warrior] Grotevant Longsword',
    }, {
      id: 28520,
      mainCategoryId: '55',
      name: '[Warrior] Grotevant Shield',
    }, {
      id: 28521,
      mainCategoryId: '55',
      name: '[Warrior] Grotevant Great Sword',
    }, {
      id: 28522,
      mainCategoryId: '55',
      name: '[Warrior] Grotevant Classic Set',
    }, {
      id: 28523,
      mainCategoryId: '55',
      name: '[Warrior] Grotevant Premium Set',
    }, {
      id: 28626,
      mainCategoryId: '55',
      name: '[Ranger] Eternal Snow Helmet',
    }, {
      id: 28627,
      mainCategoryId: '55',
      name: '[Ranger] Eternal Snow Armor',
    }, {
      id: 28628,
      mainCategoryId: '55',
      name: '[Ranger] Eternal Snow Gloves',
    }, {
      id: 28629,
      mainCategoryId: '55',
      name: '[Ranger] Eternal Snow Shoes',
    }, {
      id: 28630,
      mainCategoryId: '55',
      name: '[Ranger] Eternal Snow Longbow',
    }, {
      id: 28631,
      mainCategoryId: '55',
      name: '[Ranger] Eternal Snow Dagger',
    }, {
      id: 28632,
      mainCategoryId: '55',
      name: '[Ranger] Eternal Snow Kamasylven Sword',
    }, {
      id: 28633,
      mainCategoryId: '55',
      name: '[Ranger] Eternal Snow Classic Set',
    }, {
      id: 28634,
      mainCategoryId: '55',
      name: '[Ranger] Eternal Snow Premium Set',
    }, {
      id: 28637,
      mainCategoryId: '55',
      name: '[Ranger] Stella Helmet',
    }, {
      id: 28638,
      mainCategoryId: '55',
      name: '[Ranger] Stella Armor',
    }, {
      id: 28639,
      mainCategoryId: '55',
      name: '[Ranger] Stella Shoes',
    }, {
      id: 28640,
      mainCategoryId: '55',
      name: '[Ranger] Stella Kamasylven Sword',
    }, {
      id: 28641,
      mainCategoryId: '55',
      name: '[Ranger] Stella Longbow',
    }, {
      id: 28642,
      mainCategoryId: '55',
      name: '[Ranger] Stella Dagger',
    }, {
      id: 28643,
      mainCategoryId: '55',
      name: '[Ranger] Stella Classic Set',
    }, {
      id: 28644,
      mainCategoryId: '55',
      name: '[Ranger] Stella Premium Set',
    }, {
      id: 28649,
      mainCategoryId: '55',
      name: '[Ranger] Heidel Masquerade Phantom Mask',
    }, {
      id: 28650,
      mainCategoryId: '55',
      name: '[Ranger] Heidel Masquerade Dress',
    }, {
      id: 28651,
      mainCategoryId: '55',
      name: '[Ranger] Heidel Masquerade Outfit Set',
    }, {
      id: 28652,
      mainCategoryId: '55',
      name: '[Ranger] Anemos Helmet',
    }, {
      id: 28653,
      mainCategoryId: '55',
      name: '[Ranger] Anemos Armor',
    }, {
      id: 28654,
      mainCategoryId: '55',
      name: '[Ranger] Anemos Outfit Set',
    }, {
      id: 28655,
      mainCategoryId: '55',
      name: '[Ranger] Marod Star Helmet',
    }, {
      id: 28656,
      mainCategoryId: '55',
      name: '[Ranger] Marod Star Armor',
    }, {
      id: 28657,
      mainCategoryId: '55',
      name: '[Ranger] Marod Star Gloves',
    }, {
      id: 28658,
      mainCategoryId: '55',
      name: '[Ranger] Marod Star Longbow',
    }, {
      id: 28659,
      mainCategoryId: '55',
      name: '[Ranger] Marod Star Dagger',
    }, {
      id: 28660,
      mainCategoryId: '55',
      name: '[Ranger] Marod Star Kamasylven Sword',
    }, {
      id: 28661,
      mainCategoryId: '55',
      name: '[Ranger] Marod Star Classic Set',
    }, {
      id: 28662,
      mainCategoryId: '55',
      name: '[Ranger] Marod Star Premium Set',
    }, {
      id: 28664,
      mainCategoryId: '55',
      name: '[Ranger] Terrminé Helmet',
    }, {
      id: 28665,
      mainCategoryId: '55',
      name: '[Ranger] Terrminé Armor',
    }, {
      id: 28666,
      mainCategoryId: '55',
      name: '[Ranger] Terrminé Outfit Set',
    }, {
      id: 28667,
      mainCategoryId: '55',
      name: '[Ranger] Audria Hat',
    }, {
      id: 28668,
      mainCategoryId: '55',
      name: '[Ranger] Audria Clothes',
    }, {
      id: 28669,
      mainCategoryId: '55',
      name: '[Ranger] Audria Gloves',
    }, {
      id: 28670,
      mainCategoryId: '55',
      name: '[Ranger] Audria Shoes',
    }, {
      id: 28671,
      mainCategoryId: '55',
      name: '[Ranger] Audria Outfit Set',
    }, {
      id: 28672,
      mainCategoryId: '55',
      name: '[Ranger] Tea Flower Bandana',
    }, {
      id: 28673,
      mainCategoryId: '55',
      name: '[Ranger] Tea Flower Clothes',
    }, {
      id: 28674,
      mainCategoryId: '55',
      name: '[Ranger] Tea Flower Outfit Set',
    }, {
      id: 28675,
      mainCategoryId: '55',
      name: '[Ranger] White Owl Helmet',
    }, {
      id: 28676,
      mainCategoryId: '55',
      name: '[Ranger] White Owl Armor',
    }, {
      id: 28677,
      mainCategoryId: '55',
      name: '[Ranger] White Owl Gloves',
    }, {
      id: 28678,
      mainCategoryId: '55',
      name: '[Ranger] White Owl Shoes',
    }, {
      id: 28679,
      mainCategoryId: '55',
      name: '[Ranger] White Owl Outfit Set',
    }, {
      id: 28751,
      mainCategoryId: '55',
      name: '[Sorceress] New Year Hanbok Hat',
    }, {
      id: 28752,
      mainCategoryId: '55',
      name: '[Sorceress] New Year Hanbok Clothes',
    }, {
      id: 28753,
      mainCategoryId: '55',
      name: '[Sorceress] New Year Hanbok Shoes',
    }, {
      id: 28754,
      mainCategoryId: '55',
      name: '[Sorceress] Lucien Blanc Helmet',
    }, {
      id: 28755,
      mainCategoryId: '55',
      name: '[Sorceress] Lucien Blanc Armor',
    }, {
      id: 28757,
      mainCategoryId: '55',
      name: '[Sorceress] Lucien Blanc Shoes',
    }, {
      id: 28758,
      mainCategoryId: '55',
      name: '[Sorceress] Lucien Blanc Amulet',
    }, {
      id: 28759,
      mainCategoryId: '55',
      name: '[Sorceress] Lucien Blanc Talisman',
    }, {
      id: 28760,
      mainCategoryId: '55',
      name: '[Sorceress] Lucien Blanc Scythe',
    }, {
      id: 28761,
      mainCategoryId: '55',
      name: '[Sorceress] Lucien Blanc Classic Set',
    }, {
      id: 28762,
      mainCategoryId: '55',
      name: '[Sorceress] Lucien Blanc Premium Set',
    }, {
      id: 28765,
      mainCategoryId: '55',
      name: '[Sorceress] Pila Fe Outlaw Hat',
    }, {
      id: 28766,
      mainCategoryId: '55',
      name: '[Sorceress] Pila Fe Outlaw Clothes',
    }, {
      id: 28767,
      mainCategoryId: '55',
      name: '[Sorceress] Pila Fe Outlaw Shoes',
    }, {
      id: 28771,
      mainCategoryId: '55',
      name: '[Sorceress] Heidel Masquerade Phantom Mask',
    }, {
      id: 28772,
      mainCategoryId: '55',
      name: '[Sorceress] Heidel Masquerade Dress',
    }, {
      id: 28773,
      mainCategoryId: '55',
      name: '[Sorceress] Heidel Masquerade Outfit Set',
    }, {
      id: 28774,
      mainCategoryId: '55',
      name: '[Sorceress] Anemos Helmet',
    }, {
      id: 28775,
      mainCategoryId: '55',
      name: '[Sorceress] Anemos Armor',
    }, {
      id: 28776,
      mainCategoryId: '55',
      name: '[Sorceress] Anemos Outfit Set',
    }, {
      id: 28777,
      mainCategoryId: '55',
      name: '[Sorceress] Khilath Helmet',
    }, {
      id: 28778,
      mainCategoryId: '55',
      name: '[Sorceress] Khilath Armor',
    }, {
      id: 28779,
      mainCategoryId: '55',
      name: '[Sorceress] Khilath Amulet',
    }, {
      id: 28780,
      mainCategoryId: '55',
      name: '[Sorceress] Khilath Talisman',
    }, {
      id: 28781,
      mainCategoryId: '55',
      name: '[Sorceress] Khilath Scythe',
    }, {
      id: 28782,
      mainCategoryId: '55',
      name: '[Sorceress] Khilath Classic Set',
    }, {
      id: 28783,
      mainCategoryId: '55',
      name: '[Sorceress] Khilath Premium Set',
    }, {
      id: 28785,
      mainCategoryId: '55',
      name: '[Sorceress] Terrminé Helmet',
    }, {
      id: 28786,
      mainCategoryId: '55',
      name: '[Sorceress] Terrminé Armor',
    }, {
      id: 28787,
      mainCategoryId: '55',
      name: '[Sorceress] Terrminé Outfit Set',
    }, {
      id: 28788,
      mainCategoryId: '55',
      name: '[Sorceress] Tea Flower Bandana',
    }, {
      id: 28790,
      mainCategoryId: '55',
      name: '[Sorceress] Tea Flower Outfit Set',
    }, {
      id: 28791,
      mainCategoryId: '55',
      name: '[Sorceress] Sekrah Helmet',
    }, {
      id: 28792,
      mainCategoryId: '55',
      name: '[Sorceress] Sekrah Armor',
    }, {
      id: 28793,
      mainCategoryId: '55',
      name: '[Sorceress] Sekrah Outfit Set',
    }, {
      id: 28879,
      mainCategoryId: '55',
      name: '[Berserker] Heidel Masquerade Phantom Mask',
    }, {
      id: 28880,
      mainCategoryId: '55',
      name: '[Berserker] Heidel Masquerade Suit',
    }, {
      id: 28881,
      mainCategoryId: '55',
      name: '[Berserker] Heidel Masquerade Outfit Set',
    }, {
      id: 28882,
      mainCategoryId: '55',
      name: '[Berserker] Gladiator Helmet',
    }, {
      id: 28883,
      mainCategoryId: '55',
      name: '[Berserker] Gladiator Armor',
    }, {
      id: 28884,
      mainCategoryId: '55',
      name: '[Berserker] Gladiator Shoes',
    }, {
      id: 28885,
      mainCategoryId: '55',
      name: '[Berserker] Gladiator Axe',
    }, {
      id: 28886,
      mainCategoryId: '55',
      name: '[Berserker] Gladiator Ornamental Knot',
    }, {
      id: 28887,
      mainCategoryId: '55',
      name: '[Berserker] Gladiator Iron Buster',
    }, {
      id: 28888,
      mainCategoryId: '55',
      name: '[Berserker] Gladiator Classic Set',
    }, {
      id: 28889,
      mainCategoryId: '55',
      name: '[Berserker] Gladiator Premium Set',
    }, {
      id: 28891,
      mainCategoryId: '55',
      name: '[Berserker] Anemos Helmet',
    }, {
      id: 28892,
      mainCategoryId: '55',
      name: '[Berserker] Anemos Armor',
    }, {
      id: 28893,
      mainCategoryId: '55',
      name: '[Berserker] Anemos Outfit Set',
    }, {
      id: 28894,
      mainCategoryId: '55',
      name: '[Berserker] Deathrone Helmet',
    }, {
      id: 28895,
      mainCategoryId: '55',
      name: '[Berserker] Deathrone Armor',
    }, {
      id: 28896,
      mainCategoryId: '55',
      name: '[Berserker] Deathrone Shoes',
    }, {
      id: 28897,
      mainCategoryId: '55',
      name: '[Berserker] Deathrone Axe',
    }, {
      id: 28898,
      mainCategoryId: '55',
      name: '[Berserker] Deathrone Ornamental Knot',
    }, {
      id: 28899,
      mainCategoryId: '55',
      name: '[Berserker] Deathrone Iron Buster',
    }, {
      id: 28900,
      mainCategoryId: '55',
      name: '[Berserker] Deathrone Classic Set',
    }, {
      id: 28901,
      mainCategoryId: '55',
      name: '[Berserker] Deathrone Premium Set',
    }, {
      id: 28906,
      mainCategoryId: '55',
      name: '[Berserker] Sedic Bandana',
    }, {
      id: 29001,
      mainCategoryId: '55',
      name: '[Tamer] Blushing Maiden Helmet',
    }, {
      id: 29002,
      mainCategoryId: '55',
      name: '[Tamer] Blushing Maiden Armor',
    }, {
      id: 29003,
      mainCategoryId: '55',
      name: '[Tamer] Blushing Maiden Gloves',
    }, {
      id: 29004,
      mainCategoryId: '55',
      name: '[Tamer] Blushing Maiden Shoes',
    }, {
      id: 29005,
      mainCategoryId: '55',
      name: '[Tamer] Blushing Maiden Shortsword',
    }, {
      id: 29006,
      mainCategoryId: '55',
      name: '[Tamer] Blushing Maiden Trinket',
    }, {
      id: 29007,
      mainCategoryId: '55',
      name: '[Tamer] Blushing Maiden Celestial Bo Staff',
    }, {
      id: 29008,
      mainCategoryId: '55',
      name: '[Tamer] Blushing Maiden Classic Set',
    }, {
      id: 29009,
      mainCategoryId: '55',
      name: '[Tamer] Blushing Maiden Premium Set',
    }, {
      id: 29011,
      mainCategoryId: '55',
      name: '[Tamer] Eternal Snow Helmet',
    }, {
      id: 29012,
      mainCategoryId: '55',
      name: '[Tamer] Eternal Snow Armor',
    }, {
      id: 29013,
      mainCategoryId: '55',
      name: '[Tamer] Eternal Snow Gloves',
    }, {
      id: 29014,
      mainCategoryId: '55',
      name: '[Tamer] Eternal Snow Shoes',
    }, {
      id: 29015,
      mainCategoryId: '55',
      name: '[Tamer] Eternal Snow Shortsword',
    }, {
      id: 29016,
      mainCategoryId: '55',
      name: '[Tamer] Eternal Snow Trinket',
    }, {
      id: 29017,
      mainCategoryId: '55',
      name: '[Tamer] Eternal Snow Celestial Bo Staff',
    }, {
      id: 29018,
      mainCategoryId: '55',
      name: '[Tamer] Eternal Snow Classic Set',
    }, {
      id: 29019,
      mainCategoryId: '55',
      name: '[Tamer] Eternal Snow Premium Set',
    }, {
      id: 29022,
      mainCategoryId: '55',
      name: '[Tamer] Night Cat Helmet',
    }, {
      id: 29023,
      mainCategoryId: '55',
      name: '[Tamer] Night Cat Armor',
    }, {
      id: 29024,
      mainCategoryId: '55',
      name: '[Tamer] Night Cat Celestial Bo Staff',
    }, {
      id: 29025,
      mainCategoryId: '55',
      name: '[Tamer] Night Cat Shortsword',
    }, {
      id: 29026,
      mainCategoryId: '55',
      name: '[Tamer] Night Cat Trinket',
    }, {
      id: 29027,
      mainCategoryId: '55',
      name: '[Tamer] Night Cat Classic Set',
    }, {
      id: 29028,
      mainCategoryId: '55',
      name: '[Tamer] Night Cat Premium Set',
    }, {
      id: 29033,
      mainCategoryId: '55',
      name: '[Tamer] Heidel Masquerade Phantom Mask',
    }, {
      id: 29034,
      mainCategoryId: '55',
      name: '[Tamer] Heidel Masquerade Dress',
    }, {
      id: 29035,
      mainCategoryId: '55',
      name: '[Tamer] Heidel Masquerade Outfit Set',
    }, {
      id: 29036,
      mainCategoryId: '55',
      name: '[Tamer] Anemos Helmet',
    }, {
      id: 29037,
      mainCategoryId: '55',
      name: '[Tamer] Anemos Armor',
    }, {
      id: 29038,
      mainCategoryId: '55',
      name: '[Tamer] Anemos Outfit Set',
    }, {
      id: 29039,
      mainCategoryId: '55',
      name: '[Tamer] Water Lily Helmet',
    }, {
      id: 29040,
      mainCategoryId: '55',
      name: '[Tamer] Water Lily Armor',
    }, {
      id: 29041,
      mainCategoryId: '55',
      name: '[Tamer] Water Lily Shoes',
    }, {
      id: 29042,
      mainCategoryId: '55',
      name: '[Tamer] Water Lily Shortsword',
    }, {
      id: 29043,
      mainCategoryId: '55',
      name: '[Tamer] Water Lily Trinket',
    }, {
      id: 29044,
      mainCategoryId: '55',
      name: '[Tamer] Water Lily Celestial Bo Staff',
    }, {
      id: 29045,
      mainCategoryId: '55',
      name: '[Tamer] Water Lily Classic Set',
    }, {
      id: 29046,
      mainCategoryId: '55',
      name: '[Tamer] Water Lily Premium Set',
    }, {
      id: 29048,
      mainCategoryId: '55',
      name: '[Tamer] Terrminé Helmet',
    }, {
      id: 29049,
      mainCategoryId: '55',
      name: '[Tamer] Terrminé Armor',
    }, {
      id: 29050,
      mainCategoryId: '55',
      name: '[Tamer] Terrminé Outfit Set',
    }, {
      id: 29051,
      mainCategoryId: '55',
      name: '[Tamer] Tea Flower Bandana',
    }, {
      id: 29052,
      mainCategoryId: '55',
      name: '[Tamer] Tea Flower Clothes',
    }, {
      id: 29053,
      mainCategoryId: '55',
      name: '[Tamer] Tea Flower Outfit Set',
    }, {
      id: 29126,
      mainCategoryId: '55',
      name: '[Musa] Blue Tiger Crescent Blade',
    }, {
      id: 29127,
      mainCategoryId: '55',
      name: '[Musa] Blue Tiger Blade',
    }, {
      id: 29128,
      mainCategoryId: '55',
      name: '[Musa] Blue Tiger Horn Bow',
    }, {
      id: 29129,
      mainCategoryId: '55',
      name: '[Musa] Blue Tiger Classic Set',
    }, {
      id: 29130,
      mainCategoryId: '55',
      name: '[Musa] Blue Tiger Premium Set',
    }, {
      id: 29135,
      mainCategoryId: '55',
      name: '[Musa] Heidel Masquerade Phantom Mask',
    }, {
      id: 29136,
      mainCategoryId: '55',
      name: '[Musa] Heidel Masquerade Suit',
    }, {
      id: 29137,
      mainCategoryId: '55',
      name: '[Musa] Heidel Masquerade Outfit Set',
    }, {
      id: 29138,
      mainCategoryId: '55',
      name: '[Musa] Anemos Helmet',
    }, {
      id: 29139,
      mainCategoryId: '55',
      name: '[Musa] Anemos Armor',
    }, {
      id: 29140,
      mainCategoryId: '55',
      name: '[Musa] Anemos Outfit Set',
    }, {
      id: 29141,
      mainCategoryId: '55',
      name: '[Musa] Nouse\'s Shard Helmet',
    }, {
      id: 29142,
      mainCategoryId: '55',
      name: '[Musa] Nouse\'s Shard Armor',
    }, {
      id: 29143,
      mainCategoryId: '55',
      name: '[Musa] Nouse\'s Shard Blade',
    }, {
      id: 29144,
      mainCategoryId: '55',
      name: '[Musa] Nouse\'s Shard Horn Bow',
    }, {
      id: 29145,
      mainCategoryId: '55',
      name: '[Musa] Nouse\'s Shard Crescent Blade',
    }, {
      id: 29146,
      mainCategoryId: '55',
      name: '[Musa] Nouse\'s Shard Classic Set',
    }, {
      id: 29147,
      mainCategoryId: '55',
      name: '[Musa] Nouse\'s Shard Premium Set',
    }, {
      id: 29152,
      mainCategoryId: '55',
      name: '[Musa] Dark Martial Helmet',
    }, {
      id: 29153,
      mainCategoryId: '55',
      name: '[Musa] Dark Martial Armor',
    }, {
      id: 29154,
      mainCategoryId: '55',
      name: '[Musa] Dark Martial Blade',
    }, {
      id: 29155,
      mainCategoryId: '55',
      name: '[Musa] Dark Martial Horn Bow',
    }, {
      id: 29156,
      mainCategoryId: '55',
      name: '[Musa] Dark Martial Crescent Blade',
    }, {
      id: 29157,
      mainCategoryId: '55',
      name: '[Musa] Dark Martial Classic Set',
    }, {
      id: 29158,
      mainCategoryId: '55',
      name: '[Musa] Dark Martial Premium Set',
    }, {
      id: 29165,
      mainCategoryId: '55',
      name: '[Musa] Sedic Bandana',
    }, {
      id: 29166,
      mainCategoryId: '55',
      name: '[Musa] Sedic Clothes',
    }, {
      id: 29167,
      mainCategoryId: '55',
      name: '[Musa] Sedic Outfit Set',
    }, {
      id: 29251,
      mainCategoryId: '55',
      name: '[Valkyrie] Marine Romance Clothes',
    }, {
      id: 29252,
      mainCategoryId: '55',
      name: '[Valkyrie] Marine Romance Shoes',
    }, {
      id: 29254,
      mainCategoryId: '55',
      name: '[Valkyrie] Jousting Armor',
    }, {
      id: 29257,
      mainCategoryId: '55',
      name: '[Valkyrie] Jousting Longsword',
    }, {
      id: 29258,
      mainCategoryId: '55',
      name: '[Valkyrie] Jousting Shield',
    }, {
      id: 29259,
      mainCategoryId: '55',
      name: '[Valkyrie] Jousting Lancia',
    }, {
      id: 29260,
      mainCategoryId: '55',
      name: '[Valkyrie] Jousting Classic Set',
    }, {
      id: 29261,
      mainCategoryId: '55',
      name: '[Valkyrie] Jousting Premium Set',
    }, {
      id: 29263,
      mainCategoryId: '55',
      name: '[Valkyrie] Ram Horn Witch Headdress',
    }, {
      id: 29264,
      mainCategoryId: '55',
      name: '[Valkyrie] Ram Horn Witch Clothes',
    }, {
      id: 29265,
      mainCategoryId: '55',
      name: '[Valkyrie] Gloomy Fox Headdress',
    }, {
      id: 29266,
      mainCategoryId: '55',
      name: '[Valkyrie] Gloomy Fox Clothes',
    }, {
      id: 29268,
      mainCategoryId: '55',
      name: '[Valkyrie] Pila Fe Outlaw Hat',
    }, {
      id: 29269,
      mainCategoryId: '55',
      name: '[Valkyrie] Pila Fe Outlaw Clothes',
    }, {
      id: 29270,
      mainCategoryId: '55',
      name: '[Valkyrie] Pila Fe Outlaw Shoes',
    }, {
      id: 29274,
      mainCategoryId: '55',
      name: '[Valkyrie] Heidel Masquerade Phantom Mask',
    }, {
      id: 29275,
      mainCategoryId: '55',
      name: '[Valkyrie] Heidel Masquerade Dress',
    }, {
      id: 29276,
      mainCategoryId: '55',
      name: '[Valkyrie] Heidel Masquerade Outfit Set',
    }, {
      id: 29277,
      mainCategoryId: '55',
      name: '[Valkyrie] Anemos Helmet',
    }, {
      id: 29278,
      mainCategoryId: '55',
      name: '[Valkyrie] Anemos Armor',
    }, {
      id: 29279,
      mainCategoryId: '55',
      name: '[Valkyrie] Anemos Outfit Set',
    }, {
      id: 29280,
      mainCategoryId: '55',
      name: '[Valkyrie] Dante Helmet',
    }, {
      id: 29281,
      mainCategoryId: '55',
      name: '[Valkyrie] Dante Armor',
    }, {
      id: 29282,
      mainCategoryId: '55',
      name: '[Valkyrie] Dante Longsword',
    }, {
      id: 29283,
      mainCategoryId: '55',
      name: '[Valkyrie] Dante Shield',
    }, {
      id: 29284,
      mainCategoryId: '55',
      name: '[Valkyrie] Dante Lancia',
    }, {
      id: 29286,
      mainCategoryId: '55',
      name: '[Valkyrie] Dante Premium Set',
    }, {
      id: 29288,
      mainCategoryId: '55',
      name: '[Valkyrie] Terrminé Helmet',
    }, {
      id: 29289,
      mainCategoryId: '55',
      name: '[Valkyrie] Terrminé Armor',
    }, {
      id: 29290,
      mainCategoryId: '55',
      name: '[Valkyrie] Terrminé Outfit Set',
    }, {
      id: 29291,
      mainCategoryId: '55',
      name: '[Valkyrie] Arrendo Helmet',
    }, {
      id: 29292,
      mainCategoryId: '55',
      name: '[Valkyrie] Arrendo Armor',
    }, {
      id: 29293,
      mainCategoryId: '55',
      name: '[Valkyrie] Arrendo Shoes',
    }, {
      id: 29294,
      mainCategoryId: '55',
      name: '[Valkyrie] Arrendo Longsword',
    }, {
      id: 29295,
      mainCategoryId: '55',
      name: '[Valkyrie] Arrendo Shield',
    }, {
      id: 29296,
      mainCategoryId: '55',
      name: '[Valkyrie] Arrendo Lancia',
    }, {
      id: 29297,
      mainCategoryId: '55',
      name: '[Valkyrie] Arrendo Classic Set',
    }, {
      id: 29298,
      mainCategoryId: '55',
      name: '[Valkyrie] Arrendo Premium Set',
    }, {
      id: 29300,
      mainCategoryId: '55',
      name: '[Valkyrie] Gunnr Lucirian Helmet',
    }, {
      id: 29301,
      mainCategoryId: '55',
      name: '[Valkyrie] Gunnr Lucirian Armor',
    }, {
      id: 29302,
      mainCategoryId: '55',
      name: '[Valkyrie] Lucirian Shoes',
    }, {
      id: 29303,
      mainCategoryId: '55',
      name: '[Valkyrie] Gunnr Lucirian Outfit Set',
    }, {
      id: 29304,
      mainCategoryId: '55',
      name: '[Valkyrie] Tea Flower Bandana',
    }, {
      id: 29305,
      mainCategoryId: '55',
      name: '[Valkyrie] Tea Flower Clothes',
    }, {
      id: 29306,
      mainCategoryId: '55',
      name: '[Valkyrie] Tea Flower Outfit Set',
    }, {
      id: 29376,
      mainCategoryId: '55',
      name: '[Maehwa] Ram Horn Witch Headdress',
    }, {
      id: 29377,
      mainCategoryId: '55',
      name: '[Maehwa] Ram Horn Witch Clothes',
    }, {
      id: 29378,
      mainCategoryId: '55',
      name: '[Maehwa] Gloomy Fox Headdress',
    }, {
      id: 29379,
      mainCategoryId: '55',
      name: '[Maehwa] Gloomy Fox Clothes',
    }, {
      id: 29381,
      mainCategoryId: '55',
      name: '[Maehwa] Pila Fe Outlaw Hat',
    }, {
      id: 29382,
      mainCategoryId: '55',
      name: '[Maehwa] Pila Fe Outlaw Clothes',
    }, {
      id: 29383,
      mainCategoryId: '55',
      name: '[Maehwa] Pila Fe Outlaw Shoes',
    }, {
      id: 29387,
      mainCategoryId: '55',
      name: '[Maehwa] Heidel Masquerade Phantom Mask',
    }, {
      id: 29388,
      mainCategoryId: '55',
      name: '[Maehwa] Heidel Masquerade Dress',
    }, {
      id: 29389,
      mainCategoryId: '55',
      name: '[Maehwa] Heidel Masquerade Outfit Set',
    }, {
      id: 29390,
      mainCategoryId: '55',
      name: '[Maehwa] Ladybell Hair Ornament',
    }, {
      id: 29391,
      mainCategoryId: '55',
      name: '[Maehwa] Ladybell Clothes',
    }, {
      id: 29392,
      mainCategoryId: '55',
      name: '[Maehwa] Ladybell Shoes',
    }, {
      id: 29393,
      mainCategoryId: '55',
      name: '[Maehwa] Ladybell Blade',
    }, {
      id: 29394,
      mainCategoryId: '55',
      name: '[Maehwa] Ladybell Horn Bow',
    }, {
      id: 29395,
      mainCategoryId: '55',
      name: '[Maehwa] Ladybell Kerispear',
    }, {
      id: 29396,
      mainCategoryId: '55',
      name: '[Maehwa] Ladybell Classic Set',
    }, {
      id: 29397,
      mainCategoryId: '55',
      name: '[Maehwa] Ladybell Premium Set',
    }, {
      id: 29399,
      mainCategoryId: '55',
      name: '[Maehwa] Anemos Helmet',
    }, {
      id: 29400,
      mainCategoryId: '55',
      name: '[Maehwa] Anemos Armor',
    }, {
      id: 29401,
      mainCategoryId: '55',
      name: '[Maehwa] Anemos Outfit Set',
    }, {
      id: 29402,
      mainCategoryId: '55',
      name: '[Maehwa] Peach Blossom Hair Ornament',
    }, {
      id: 29403,
      mainCategoryId: '55',
      name: '[Maehwa] Peach Blossom Clothes',
    }, {
      id: 29404,
      mainCategoryId: '55',
      name: '[Maehwa] Peach Blossom Gloves',
    }, {
      id: 29405,
      mainCategoryId: '55',
      name: '[Maehwa] Peach Blossom Shoes',
    }, {
      id: 29406,
      mainCategoryId: '55',
      name: '[Maehwa] Peach Blossom Blade',
    }, {
      id: 29407,
      mainCategoryId: '55',
      name: '[Maehwa] Peach Blossom Horn Bow',
    }, {
      id: 29408,
      mainCategoryId: '55',
      name: '[Maehwa] Peach Blossom Kerispear',
    }, {
      id: 29409,
      mainCategoryId: '55',
      name: '[Maehwa] Peach Blossom Classic Set',
    }, {
      id: 29410,
      mainCategoryId: '55',
      name: '[Maehwa] Peach Blossom Premium Set',
    }, {
      id: 29412,
      mainCategoryId: '55',
      name: '[Maehwa] Terrminé Helmet',
    }, {
      id: 29413,
      mainCategoryId: '55',
      name: '[Maehwa] Terrminé Armor',
    }, {
      id: 29414,
      mainCategoryId: '55',
      name: '[Maehwa] Terrminé Outfit Set',
    }, {
      id: 29424,
      mainCategoryId: '55',
      name: '[Maehwa] Tea Flower Outfit Set',
    }, {
      id: 29501,
      mainCategoryId: '55',
      name: '[Wizard] Amethyst Hat',
    }, {
      id: 29502,
      mainCategoryId: '55',
      name: '[Wizard] Amethyst Robe',
    }, {
      id: 29503,
      mainCategoryId: '55',
      name: '[Wizard] Amethyst Gloves',
    }, {
      id: 29504,
      mainCategoryId: '55',
      name: '[Wizard] Amethyst Shoes',
    }, {
      id: 29507,
      mainCategoryId: '55',
      name: '[Wizard] Crescent Moon Hat',
    }, {
      id: 29508,
      mainCategoryId: '55',
      name: '[Wizard] Crescent Moon Clothes',
    }, {
      id: 29509,
      mainCategoryId: '55',
      name: '[Wizard] Bolyn Armor',
    }, {
      id: 29510,
      mainCategoryId: '55',
      name: '[Wizard] Gavi Regan Helmet',
    }, {
      id: 29511,
      mainCategoryId: '55',
      name: '[Wizard] Gavi Regan Armor',
    }, {
      id: 29512,
      mainCategoryId: '55',
      name: '[Wizard] Marine Romance Hat',
    }, {
      id: 29513,
      mainCategoryId: '55',
      name: '[Wizard] Marine Romance Clothes',
    }, {
      id: 29514,
      mainCategoryId: '55',
      name: '[Wizard] Marine Romance Gloves',
    }, {
      id: 29515,
      mainCategoryId: '55',
      name: '[Wizard] Marine Romance Shoes',
    }, {
      id: 29516,
      mainCategoryId: '55',
      name: '[Wizard] Grave Keeper Hat',
    }, {
      id: 29517,
      mainCategoryId: '55',
      name: '[Wizard] Grave Keeper Clothes',
    }, {
      id: 29518,
      mainCategoryId: '55',
      name: '[Wizard] Grave Keeper Gloves',
    }, {
      id: 29519,
      mainCategoryId: '55',
      name: '[Wizard] Lord Red Hat',
    }, {
      id: 29520,
      mainCategoryId: '55',
      name: '[Wizard] Lord Red Clothes',
    }, {
      id: 29521,
      mainCategoryId: '55',
      name: '[Wizard] Pila Fe Outlaw Hat',
    }, {
      id: 29522,
      mainCategoryId: '55',
      name: '[Wizard] Pila Fe Outlaw Clothes',
    }, {
      id: 29580,
      mainCategoryId: '55',
      name: '[Wizard] Crescent Moon Staff',
    }, {
      id: 29581,
      mainCategoryId: '55',
      name: '[Wizard] Bolyn Staff',
    }, {
      id: 29582,
      mainCategoryId: '55',
      name: '[Wizard] Gavi Regan Staff',
    }, {
      id: 29583,
      mainCategoryId: '55',
      name: '[Wizard] Lord Red Staff',
    }, {
      id: 29584,
      mainCategoryId: '55',
      name: '[Wizard] Lord Red Godr Sphera',
    }, {
      id: 29600,
      mainCategoryId: '55',
      name: '[Wizard] Crescent Moon Dagger',
    }, {
      id: 29601,
      mainCategoryId: '55',
      name: '[Wizard] Bolyn Dagger',
    }, {
      id: 29602,
      mainCategoryId: '55',
      name: '[Wizard] Gavi Regan Dagger',
    }, {
      id: 29603,
      mainCategoryId: '55',
      name: '[Wizard] Lord Red Dagger',
    }, {
      id: 29604,
      mainCategoryId: '55',
      name: '[Wizard] Heidel Masquerade Phantom Mask',
    }, {
      id: 29605,
      mainCategoryId: '55',
      name: '[Wizard] Heidel Masquerade Suit',
    }, {
      id: 29606,
      mainCategoryId: '55',
      name: '[Wizard] Heidel Masquerade Outfit Set',
    }, {
      id: 29607,
      mainCategoryId: '55',
      name: '[Wizard] Sage\'s Memory Hat',
    }, {
      id: 29608,
      mainCategoryId: '55',
      name: '[Wizard] Sage\'s Memory Clothes',
    }, {
      id: 29609,
      mainCategoryId: '55',
      name: '[Wizard] Sage\'s Memory Staff',
    }, {
      id: 29610,
      mainCategoryId: '55',
      name: '[Wizard] Sage\'s Memory Dagger',
    }, {
      id: 29611,
      mainCategoryId: '55',
      name: '[Wizard] Sage\'s Memory Godr Sphera',
    }, {
      id: 29612,
      mainCategoryId: '55',
      name: '[Wizard] Sage\'s Memory Classic Set',
    }, {
      id: 29613,
      mainCategoryId: '55',
      name: '[Wizard] Sage\'s Memory Premium Set',
    }, {
      id: 29615,
      mainCategoryId: '55',
      name: '[Wizard] Anemos Helmet',
    }, {
      id: 29616,
      mainCategoryId: '55',
      name: '[Wizard] Anemos Armor',
    }, {
      id: 29617,
      mainCategoryId: '55',
      name: '[Wizard] Anemos Outfit Set',
    }, {
      id: 29618,
      mainCategoryId: '55',
      name: '[Wizard] Kibelius Godr Sphera',
    }, {
      id: 29626,
      mainCategoryId: '55',
      name: '[Witch] Heidel Masquerade Phantom Mask',
    }, {
      id: 29627,
      mainCategoryId: '55',
      name: '[Witch] Heidel Masquerade Dress',
    }, {
      id: 29628,
      mainCategoryId: '55',
      name: '[Witch] Heidel Masquerade Outfit Set',
    }, {
      id: 29629,
      mainCategoryId: '55',
      name: '[Witch] Weeping Willow Hat',
    }, {
      id: 29630,
      mainCategoryId: '55',
      name: '[Witch] Weeping Willow Clothes',
    }, {
      id: 29631,
      mainCategoryId: '55',
      name: '[Witch] Weeping Willow Shoes',
    }, {
      id: 29632,
      mainCategoryId: '55',
      name: '[Witch] Weeping Willow Staff',
    }, {
      id: 29633,
      mainCategoryId: '55',
      name: '[Witch] Weeping Willow Dagger',
    }, {
      id: 29634,
      mainCategoryId: '55',
      name: '[Witch] Weeping Willow Aad Sphera',
    }, {
      id: 29635,
      mainCategoryId: '55',
      name: '[Witch] Weeping Willow Classic Set',
    }, {
      id: 29636,
      mainCategoryId: '55',
      name: '[Witch] Weeping Willow Premium Set',
    }, {
      id: 29638,
      mainCategoryId: '55',
      name: '[Witch] Anemos Helmet',
    }, {
      id: 29639,
      mainCategoryId: '55',
      name: '[Witch] Anemos Armor',
    }, {
      id: 29640,
      mainCategoryId: '55',
      name: '[Witch] Anemos Outfit Set',
    }, {
      id: 29641,
      mainCategoryId: '55',
      name: '[Witch] Terrminé Helmet',
    }, {
      id: 29642,
      mainCategoryId: '55',
      name: '[Witch] Terrminé Armor',
    }, {
      id: 29643,
      mainCategoryId: '55',
      name: '[Witch] Terrminé Outfit Set',
    }, {
      id: 29644,
      mainCategoryId: '55',
      name: '[Wizard] Sedic Bandana',
    }, {
      id: 29646,
      mainCategoryId: '55',
      name: '[Wizard] Sedic Outfit Set',
    }, {
      id: 29647,
      mainCategoryId: '55',
      name: '[Witch] Tea Flower Bandana',
    }, {
      id: 29648,
      mainCategoryId: '55',
      name: '[Witch] Tea Flower Clothes',
    }, {
      id: 29649,
      mainCategoryId: '55',
      name: '[Witch] Tea Flower Outfit Set',
    }, {
      id: 29650,
      mainCategoryId: '55',
      name: '[Witch] Tritch Hat',
    }, {
      id: 29651,
      mainCategoryId: '55',
      name: '[Witch] Tritch Clothes',
    }, {
      id: 29652,
      mainCategoryId: '55',
      name: '[Witch] Tritch Staff',
    }, {
      id: 29653,
      mainCategoryId: '55',
      name: '[Witch] Tritch Dagger',
    }, {
      id: 29654,
      mainCategoryId: '55',
      name: '[Witch] Tritch Aad Sphera',
    }, {
      id: 29655,
      mainCategoryId: '55',
      name: '[Witch] Tritch Classic Set',
    }, {
      id: 29656,
      mainCategoryId: '55',
      name: '[Witch] Tritch Premium Set',
    }, {
      id: 29658,
      mainCategoryId: '55',
      name: '[Witch] Tritch Shoes',
    }, {
      id: 29701,
      mainCategoryId: '55',
      name: '[Kunoichi] Eunyoo Helmet',
    }, {
      id: 29702,
      mainCategoryId: '55',
      name: '[Kunoichi] Eunyoo Armor',
    }, {
      id: 29703,
      mainCategoryId: '55',
      name: '[Kunoichi] Eunyoo Gloves',
    }, {
      id: 29704,
      mainCategoryId: '55',
      name: '[Kunoichi] Eunyoo Shoes',
    }, {
      id: 29705,
      mainCategoryId: '55',
      name: '[Kunoichi] Eunyoo Shortsword',
    }, {
      id: 29706,
      mainCategoryId: '55',
      name: '[Kunoichi] Eunyoo Kunai',
    }, {
      id: 29707,
      mainCategoryId: '55',
      name: '[Kunoichi] Eunyoo Sah Chakram',
    }, {
      id: 29708,
      mainCategoryId: '55',
      name: '[Kunoichi] Eunyoo Classic Set',
    }, {
      id: 29709,
      mainCategoryId: '55',
      name: '[Kunoichi] Eunyoo Premium Set',
    }, {
      id: 29718,
      mainCategoryId: '55',
      name: '[Kunoichi] Crimson Sable Helmet',
    }, {
      id: 29719,
      mainCategoryId: '55',
      name: '[Kunoichi] Crimson Sable Armor',
    }, {
      id: 29720,
      mainCategoryId: '55',
      name: '[Kunoichi] Crimson Sable Outfit Set',
    }, {
      id: 29751,
      mainCategoryId: '55',
      name: '[Kunoichi] New Year Hanbok Hat',
    }, {
      id: 29752,
      mainCategoryId: '55',
      name: '[Kunoichi] New Year Hanbok Clothes',
    }, {
      id: 29753,
      mainCategoryId: '55',
      name: '[Kunoichi] New Year Hanbok Shoes',
    }, {
      id: 29756,
      mainCategoryId: '55',
      name: '[Kunoichi] Golden Scale Helmet',
    }, {
      id: 29757,
      mainCategoryId: '55',
      name: '[Kunoichi] Golden Scale Armor',
    }, {
      id: 29758,
      mainCategoryId: '55',
      name: '[Kunoichi] Golden Scale Gloves',
    }, {
      id: 29759,
      mainCategoryId: '55',
      name: '[Kunoichi] Golden Scale Shoes',
    }, {
      id: 29760,
      mainCategoryId: '55',
      name: '[Kunoichi] Kibelius Helmet',
    }, {
      id: 29761,
      mainCategoryId: '55',
      name: '[Kunoichi] Kibelius Divinus Armor',
    }, {
      id: 29762,
      mainCategoryId: '55',
      name: '[Kunoichi] Kibelius Armor',
    }, {
      id: 29763,
      mainCategoryId: '55',
      name: '[Kunoichi] Kibelius Shoes',
    }, {
      id: 29764,
      mainCategoryId: '55',
      name: '[Kunoichi] Karin Helmet',
    }, {
      id: 29765,
      mainCategoryId: '55',
      name: '[Kunoichi] Karin Armor',
    }, {
      id: 29766,
      mainCategoryId: '55',
      name: '[Kunoichi] Ayo Helmet',
    }, {
      id: 29767,
      mainCategoryId: '55',
      name: '[Kunoichi] Ayo Armor',
    }, {
      id: 29768,
      mainCategoryId: '55',
      name: '[Kunoichi] Marine Romance Hat',
    }, {
      id: 29769,
      mainCategoryId: '55',
      name: '[Kunoichi] Marine Romance Clothes',
    }, {
      id: 29770,
      mainCategoryId: '55',
      name: '[Kunoichi] Marine Romance Shoes',
    }, {
      id: 29771,
      mainCategoryId: '55',
      name: '[Kunoichi] Ram Horn Witch Headdress',
    }, {
      id: 29772,
      mainCategoryId: '55',
      name: '[Kunoichi] Ram Horn Witch Clothes',
    }, {
      id: 29773,
      mainCategoryId: '55',
      name: '[Kunoichi] Gloomy Fox Headdress',
    }, {
      id: 29774,
      mainCategoryId: '55',
      name: '[Kunoichi] Gloomy Fox Clothes',
    }, {
      id: 29775,
      mainCategoryId: '55',
      name: '[Kunoichi] Pila Fe Outlaw Hat',
    }, {
      id: 29776,
      mainCategoryId: '55',
      name: '[Kunoichi] Pila Fe Outlaw Clothes',
    }, {
      id: 29777,
      mainCategoryId: '55',
      name: '[Kunoichi] Pila Fe Outlaw Shoes',
    }, {
      id: 29825,
      mainCategoryId: '55',
      name: '[Kunoichi] Ayo Sah Chakram',
    }, {
      id: 29826,
      mainCategoryId: '55',
      name: '[Kunoichi] Ayo Shortsword',
    }, {
      id: 29850,
      mainCategoryId: '55',
      name: '[Kunoichi] Ayo Kunai',
    }, {
      id: 29851,
      mainCategoryId: '55',
      name: '[Kunoichi] Night Cat Helmet',
    }, {
      id: 29852,
      mainCategoryId: '55',
      name: '[Kunoichi] Night Cat Armor',
    }, {
      id: 29853,
      mainCategoryId: '55',
      name: '[Kunoichi] Night Cat Sah Chakram',
    }, {
      id: 29854,
      mainCategoryId: '55',
      name: '[Kunoichi] Night Cat Shortsword',
    }, {
      id: 29855,
      mainCategoryId: '55',
      name: '[Kunoichi] Night Cat Kunai',
    }, {
      id: 29856,
      mainCategoryId: '55',
      name: '[Kunoichi] Night Cat Classic Set',
    }, {
      id: 29857,
      mainCategoryId: '55',
      name: '[Kunoichi] Night Cat Premium Set',
    }, {
      id: 29862,
      mainCategoryId: '55',
      name: '[Kunoichi] Heidel Masquerade Phantom Mask',
    }, {
      id: 29863,
      mainCategoryId: '55',
      name: '[Kunoichi] Heidel Masquerade Dress',
    }, {
      id: 29864,
      mainCategoryId: '55',
      name: '[Kunoichi] Heidel Masquerade Outfit Set',
    }, {
      id: 29865,
      mainCategoryId: '55',
      name: '[Kunoichi] Anemos Helmet',
    }, {
      id: 29866,
      mainCategoryId: '55',
      name: '[Kunoichi] Anemos Armor',
    }, {
      id: 29867,
      mainCategoryId: '55',
      name: '[Kunoichi] Anemos Outfit Set',
    }, {
      id: 29868,
      mainCategoryId: '55',
      name: '[Kunoichi] Terrminé Helmet',
    }, {
      id: 29869,
      mainCategoryId: '55',
      name: '[Kunoichi] Terrminé Armor',
    }, {
      id: 29870,
      mainCategoryId: '55',
      name: '[Kunoichi] Terrminé Outfit Set',
    }, {
      id: 29871,
      mainCategoryId: '55',
      name: '[Kunoichi] Tea Flower Bandana',
    }, {
      id: 29872,
      mainCategoryId: '55',
      name: '[Kunoichi] Tea Flower Clothes',
    }, {
      id: 29873,
      mainCategoryId: '55',
      name: '[Kunoichi] Tea Flower Outfit Set',
    }, {
      id: 29876,
      mainCategoryId: '55',
      name: '[Ninja] Grave Keeper Hat',
    }, {
      id: 29877,
      mainCategoryId: '55',
      name: '[Ninja] Grave Keeper Clothes',
    }, {
      id: 29878,
      mainCategoryId: '55',
      name: '[Ninja] Grave Keeper Gloves',
    }, {
      id: 29880,
      mainCategoryId: '55',
      name: '[Ninja] Pila Fe Outlaw Hat',
    }, {
      id: 29881,
      mainCategoryId: '55',
      name: '[Ninja] Pila Fe Outlaw Clothes',
    }, {
      id: 29885,
      mainCategoryId: '55',
      name: '[Ninja] Heidel Masquerade Phantom Mask',
    }, {
      id: 29886,
      mainCategoryId: '55',
      name: '[Ninja] Heidel Masquerade Suit',
    }, {
      id: 29887,
      mainCategoryId: '55',
      name: '[Ninja] Heidel Masquerade Outfit Set',
    }, {
      id: 29888,
      mainCategoryId: '55',
      name: '[Ninja] Anemos Helmet',
    }, {
      id: 29889,
      mainCategoryId: '55',
      name: '[Ninja] Anemos Armor',
    }, {
      id: 29890,
      mainCategoryId: '55',
      name: '[Ninja] Anemos Outfit Set',
    }, {
      id: 29891,
      mainCategoryId: '55',
      name: '[Ninja] Yurei Helmet',
    }, {
      id: 29892,
      mainCategoryId: '55',
      name: '[Ninja] Yurei Armor',
    }, {
      id: 29893,
      mainCategoryId: '55',
      name: '[Ninja] Yurei Shortsword',
    }, {
      id: 29894,
      mainCategoryId: '55',
      name: '[Ninja] Yurei Kunai',
    }, {
      id: 29895,
      mainCategoryId: '55',
      name: '[Ninja] Yurei Sura Katana',
    }, {
      id: 29896,
      mainCategoryId: '55',
      name: '[Ninja] Yurei Classic Set',
    }, {
      id: 29897,
      mainCategoryId: '55',
      name: '[Ninja] Yurei Premium Set',
    }, {
      id: 29899,
      mainCategoryId: '55',
      name: '[Ninja] Warhawk Armor',
    }, {
      id: 29900,
      mainCategoryId: '55',
      name: '[Ninja] Warhawk Shortsword',
    }, {
      id: 29901,
      mainCategoryId: '55',
      name: '[Ninja] Warhawk Kunai',
    }, {
      id: 29902,
      mainCategoryId: '55',
      name: '[Ninja] Warhawk Sura Katana',
    }, {
      id: 29903,
      mainCategoryId: '55',
      name: '[Ninja] Warhawk Classic Set',
    }, {
      id: 29904,
      mainCategoryId: '55',
      name: '[Ninja] Warhawk Premium Set',
    }, {
      id: 29914,
      mainCategoryId: '55',
      name: '[Ninja] Petroglyph Helmet',
    }, {
      id: 29915,
      mainCategoryId: '55',
      name: '[Ninja] Petroglyph Armor',
    }, {
      id: 29916,
      mainCategoryId: '55',
      name: '[Ninja] Petroglyph Outfit Set',
    }, {
      id: 29917,
      mainCategoryId: '55',
      name: '[Ninja] Sedic Bandana',
    }, {
      id: 29918,
      mainCategoryId: '55',
      name: '[Ninja] Sedic Clothes',
    }, {
      id: 29919,
      mainCategoryId: '55',
      name: '[Ninja] Sedic Outfit Set',
    }, {
      id: 40218,
      mainCategoryId: '35',
      name: 'Ancient Relic Crystal Shard',
    }, {
      id: 40220,
      mainCategoryId: '35',
      name: 'Forbidden Book',
    }, {
      id: 40228,
      mainCategoryId: '35',
      name: 'Scroll Written in Ancient Language',
    }, {
      id: 40258,
      mainCategoryId: '35',
      name: 'Black Spirit\'s Claw Piece',
    }, {
      id: 40383,
      mainCategoryId: '35',
      name: 'Manshaum Voodoo Doll',
    }, {
      id: 40543,
      mainCategoryId: '35',
      name: 'Fragment of the Deep Sea',
    }, {
      id: 40545,
      mainCategoryId: '35',
      name: 'Ancient Creature\'s Scale',
    }, {
      id: 40547,
      mainCategoryId: '35',
      name: 'Ancient Seal – Red Shard',
    }, {
      id: 40548,
      mainCategoryId: '35',
      name: 'Ancient Seal – Black Shard',
    }, {
      id: 43786,
      mainCategoryId: '35',
      name: 'Remnants of the Rift',
    }, {
      id: 44084,
      mainCategoryId: '25',
      name: 'Sticky Liquid',
    }, {
      id: 44165,
      mainCategoryId: '35',
      name: 'Silver Key',
    }, {
      id: 44195,
      mainCategoryId: '30',
      name: 'Memory Fragment',
    }, {
      id: 44280,
      mainCategoryId: '35',
      name: 'Ancient Power - Red Shard',
    }, {
      id: 44281,
      mainCategoryId: '35',
      name: 'Ancient Power - Black Shard',
    }, {
      id: 44286,
      mainCategoryId: '35',
      name: 'Part for Explorer\'s Compass',
    }, {
      id: 44332,
      mainCategoryId: '25',
      name: 'Vell\'s Fine Powder',
    }, {
      id: 44335,
      mainCategoryId: '25',
      name: 'Vell\'s Concentrated Magic',
    }, {
      id: 44336,
      mainCategoryId: '25',
      name: 'Alchemy Stone Shard',
    }, {
      id: 44362,
      mainCategoryId: '25',
      name: 'Garmoth\'s Heart',
    }, {
      id: 44364,
      mainCategoryId: '25',
      name: 'Dragon Scale Fossil',
    }, {
      id: 44462,
      mainCategoryId: '25',
      name: 'Flame of Despair',
    }, {
      id: 44948,
      mainCategoryId: '55',
      name: 'Karlstein Classic Set',
    }, {
      id: 44950,
      mainCategoryId: '55',
      name: 'Lahr Arcien Classic Set',
    }, {
      id: 44979,
      mainCategoryId: '55',
      name: '[Event] Classic Outfit Box',
    }, {
      id: 45201,
      mainCategoryId: '45',
      name: 'Imperfect Alchemy Stone of Destruction',
    }, {
      id: 45202,
      mainCategoryId: '45',
      name: 'Imperfect Alchemy Stone of Destruction',
    }, {
      id: 45203,
      mainCategoryId: '45',
      name: 'Imperfect Alchemy Stone of Destruction',
    }, {
      id: 45204,
      mainCategoryId: '45',
      name: 'Imperfect Alchemy Stone of Destruction',
    }, {
      id: 45205,
      mainCategoryId: '45',
      name: 'Rough Alchemy Stone of Destruction',
    }, {
      id: 45206,
      mainCategoryId: '45',
      name: 'Rough Alchemy Stone of Destruction',
    }, {
      id: 45207,
      mainCategoryId: '45',
      name: 'Rough Alchemy Stone of Destruction',
    }, {
      id: 45208,
      mainCategoryId: '45',
      name: 'Rough Alchemy Stone of Destruction',
    }, {
      id: 45209,
      mainCategoryId: '45',
      name: 'Polished Alchemy Stone of Destruction',
    }, {
      id: 45210,
      mainCategoryId: '45',
      name: 'Polished Alchemy Stone of Destruction',
    }, {
      id: 45211,
      mainCategoryId: '45',
      name: 'Polished Alchemy Stone of Destruction',
    }, {
      id: 45212,
      mainCategoryId: '45',
      name: 'Polished Alchemy Stone of Destruction',
    }, {
      id: 45213,
      mainCategoryId: '45',
      name: 'Sturdy Alchemy Stone of Destruction',
    }, {
      id: 45214,
      mainCategoryId: '45',
      name: 'Sturdy Alchemy Stone of Destruction',
    }, {
      id: 45215,
      mainCategoryId: '45',
      name: 'Sturdy Alchemy Stone of Destruction',
    }, {
      id: 45216,
      mainCategoryId: '45',
      name: 'Sturdy Alchemy Stone of Destruction',
    }, {
      id: 45217,
      mainCategoryId: '45',
      name: 'Sharp Alchemy Stone of Destruction',
    }, {
      id: 45218,
      mainCategoryId: '45',
      name: 'Sharp Alchemy Stone of Destruction',
    }, {
      id: 45219,
      mainCategoryId: '45',
      name: 'Sharp Alchemy Stone of Destruction',
    }, {
      id: 45220,
      mainCategoryId: '45',
      name: 'Sharp Alchemy Stone of Destruction',
    }, {
      id: 45221,
      mainCategoryId: '45',
      name: 'Resplendent Alchemy Stone of Destruction',
    }, {
      id: 45222,
      mainCategoryId: '45',
      name: 'Resplendent Alchemy Stone of Destruction',
    }, {
      id: 45223,
      mainCategoryId: '45',
      name: 'Resplendent Alchemy Stone of Destruction',
    }, {
      id: 45224,
      mainCategoryId: '45',
      name: 'Resplendent Alchemy Stone of Destruction',
    }, {
      id: 45227,
      mainCategoryId: '45',
      name: 'Splendid Alchemy Stone of Destruction',
    }, {
      id: 45228,
      mainCategoryId: '45',
      name: 'Splendid Alchemy Stone of Destruction',
    }, {
      id: 45232,
      mainCategoryId: '45',
      name: 'Shining Alchemy Stone of Destruction',
    }, {
      id: 45233,
      mainCategoryId: '45',
      name: 'Imperfect Alchemy Stone of Protection',
    }, {
      id: 45234,
      mainCategoryId: '45',
      name: 'Imperfect Alchemy Stone of Protection',
    }, {
      id: 45235,
      mainCategoryId: '45',
      name: 'Imperfect Alchemy Stone of Protection',
    }, {
      id: 45236,
      mainCategoryId: '45',
      name: 'Imperfect Alchemy Stone of Protection',
    }, {
      id: 45237,
      mainCategoryId: '45',
      name: 'Rough Alchemy Stone of Protection',
    }, {
      id: 45238,
      mainCategoryId: '45',
      name: 'Rough Alchemy Stone of Protection',
    }, {
      id: 45239,
      mainCategoryId: '45',
      name: 'Rough Alchemy Stone of Protection',
    }, {
      id: 45240,
      mainCategoryId: '45',
      name: 'Rough Alchemy Stone of Protection',
    }, {
      id: 45241,
      mainCategoryId: '45',
      name: 'Polished Alchemy Stone of Protection',
    }, {
      id: 45242,
      mainCategoryId: '45',
      name: 'Polished Alchemy Stone of Protection',
    }, {
      id: 45243,
      mainCategoryId: '45',
      name: 'Polished Alchemy Stone of Protection',
    }, {
      id: 45244,
      mainCategoryId: '45',
      name: 'Polished Alchemy Stone of Protection',
    }, {
      id: 45245,
      mainCategoryId: '45',
      name: 'Sturdy Alchemy Stone of Protection',
    }, {
      id: 45246,
      mainCategoryId: '45',
      name: 'Sturdy Alchemy Stone of Protection',
    }, {
      id: 45247,
      mainCategoryId: '45',
      name: 'Sturdy Alchemy Stone of Protection',
    }, {
      id: 45248,
      mainCategoryId: '45',
      name: 'Sturdy Alchemy Stone of Protection',
    }, {
      id: 45249,
      mainCategoryId: '45',
      name: 'Sharp Alchemy Stone of Protection',
    }, {
      id: 45250,
      mainCategoryId: '45',
      name: 'Sharp Alchemy Stone of Protection',
    }, {
      id: 45251,
      mainCategoryId: '45',
      name: 'Sharp Alchemy Stone of Protection',
    }, {
      id: 45252,
      mainCategoryId: '45',
      name: 'Sharp Alchemy Stone of Protection',
    }, {
      id: 45254,
      mainCategoryId: '45',
      name: 'Resplendent Alchemy Stone of Protection',
    }, {
      id: 45255,
      mainCategoryId: '45',
      name: 'Resplendent Alchemy Stone of Protection',
    }, {
      id: 45256,
      mainCategoryId: '45',
      name: 'Resplendent Alchemy Stone of Protection',
    }, {
      id: 45258,
      mainCategoryId: '45',
      name: 'Splendid Alchemy Stone of Protection',
    }, {
      id: 45260,
      mainCategoryId: '45',
      name: 'Splendid Alchemy Stone of Protection',
    }, {
      id: 45265,
      mainCategoryId: '45',
      name: 'Imperfect Alchemy Stone of Life',
    }, {
      id: 45266,
      mainCategoryId: '45',
      name: 'Imperfect Alchemy Stone of Life',
    }, {
      id: 45267,
      mainCategoryId: '45',
      name: 'Imperfect Alchemy Stone of Life',
    }, {
      id: 45268,
      mainCategoryId: '45',
      name: 'Imperfect Alchemy Stone of Life',
    }, {
      id: 45269,
      mainCategoryId: '45',
      name: 'Rough Alchemy Stone of Life',
    }, {
      id: 45270,
      mainCategoryId: '45',
      name: 'Rough Alchemy Stone of Life',
    }, {
      id: 45271,
      mainCategoryId: '45',
      name: 'Rough Alchemy Stone of Life',
    }, {
      id: 45272,
      mainCategoryId: '45',
      name: 'Rough Alchemy Stone of Life',
    }, {
      id: 45273,
      mainCategoryId: '45',
      name: 'Polished Alchemy Stone of Life',
    }, {
      id: 45274,
      mainCategoryId: '45',
      name: 'Polished Alchemy Stone of Life',
    }, {
      id: 45275,
      mainCategoryId: '45',
      name: 'Polished Alchemy Stone of Life',
    }, {
      id: 45276,
      mainCategoryId: '45',
      name: 'Polished Alchemy Stone of Life',
    }, {
      id: 45277,
      mainCategoryId: '45',
      name: 'Sturdy Alchemy Stone of Life',
    }, {
      id: 45278,
      mainCategoryId: '45',
      name: 'Sturdy Alchemy Stone of Life',
    }, {
      id: 45279,
      mainCategoryId: '45',
      name: 'Sturdy Alchemy Stone of Life',
    }, {
      id: 45280,
      mainCategoryId: '45',
      name: 'Sturdy Alchemy Stone of Life',
    }, {
      id: 45281,
      mainCategoryId: '45',
      name: 'Sharp Alchemy Stone of Life',
    }, {
      id: 45282,
      mainCategoryId: '45',
      name: 'Sharp Alchemy Stone of Life',
    }, {
      id: 45283,
      mainCategoryId: '45',
      name: 'Sharp Alchemy Stone of Life',
    }, {
      id: 45284,
      mainCategoryId: '45',
      name: 'Sharp Alchemy Stone of Life',
    }, {
      id: 45285,
      mainCategoryId: '45',
      name: 'Resplendent Alchemy Stone of Life',
    }, {
      id: 45286,
      mainCategoryId: '45',
      name: 'Resplendent Alchemy Stone of Life',
    }, {
      id: 45287,
      mainCategoryId: '45',
      name: 'Resplendent Alchemy Stone of Life',
    }, {
      id: 45288,
      mainCategoryId: '45',
      name: 'Resplendent Alchemy Stone of Life',
    }, {
      id: 45289,
      mainCategoryId: '45',
      name: 'Splendid Alchemy Stone of Life',
    }, {
      id: 45292,
      mainCategoryId: '45',
      name: 'Splendid Alchemy Stone of Life',
    }, {
      id: 45297,
      mainCategoryId: '45',
      name: 'Destruction Spirit Stone',
    }, {
      id: 45298,
      mainCategoryId: '45',
      name: 'Destruction Spirit Stone',
    }, {
      id: 45299,
      mainCategoryId: '45',
      name: 'Guardian Spirit Stone',
    }, {
      id: 45300,
      mainCategoryId: '45',
      name: 'Guardian Spirit Stone',
    }, {
      id: 45301,
      mainCategoryId: '45',
      name: 'Life Spirit Stone',
    }, {
      id: 45302,
      mainCategoryId: '45',
      name: 'Life Spirit Stone',
    }, {
      id: 45332,
      mainCategoryId: '45',
      name: 'Vell\'s Heart',
    }, {
      id: 45335,
      mainCategoryId: '45',
      name: 'Sharp Spirit Stone of Destruction',
    }, {
      id: 45336,
      mainCategoryId: '45',
      name: 'Sharp Spirit Stone of Destruction',
    }, {
      id: 45337,
      mainCategoryId: '45',
      name: 'Resplendent Spirit Stone of Destruction',
    }, {
      id: 45338,
      mainCategoryId: '45',
      name: 'Splendid Spirit Stone of Destruction',
    }, {
      id: 45341,
      mainCategoryId: '45',
      name: 'Sharp Spirit Stone of Protection',
    }, {
      id: 45342,
      mainCategoryId: '45',
      name: 'Sharp Spirit Stone of Protection',
    }, {
      id: 45343,
      mainCategoryId: '45',
      name: 'Resplendent Spirit Stone of Protection',
    }, {
      id: 45344,
      mainCategoryId: '45',
      name: 'Splendid Spirit Stone of Protection',
    }, {
      id: 45503,
      mainCategoryId: '45',
      name: 'Khan\'s Heart: Destruction',
    }, {
      id: 45513,
      mainCategoryId: '45',
      name: 'Khan\'s Heart: Protection',
    }, {
      id: 45514,
      mainCategoryId: '45',
      name: 'Khan\'s Heart: Life',
    }, {
      id: 45820,
      mainCategoryId: '55',
      name: '[Event] Classic Outfit Box',
    }, {
      id: 45880,
      mainCategoryId: '55',
      name: 'Vediras Outfit Box',
    }, {
      id: 45881,
      mainCategoryId: '55',
      name: 'Succession Classic Box',
    }, {
      id: 45885,
      mainCategoryId: '55',
      name: '[Event] Succession Classic Box',
    }, {
      id: 46006,
      mainCategoryId: '60',
      name: '[Olvian Dye] True Red',
    }, {
      id: 46018,
      mainCategoryId: '60',
      name: '[Olvian Dye] True Orange',
    }, {
      id: 46030,
      mainCategoryId: '60',
      name: '[Olvian Dye] True Yellow',
    }, {
      id: 46042,
      mainCategoryId: '60',
      name: '[Olvian Dye] True Lime',
    }, {
      id: 46054,
      mainCategoryId: '60',
      name: '[Olvian Dye] True Mint',
    }, {
      id: 46066,
      mainCategoryId: '60',
      name: '[Olvian Dye] True Aqua',
    }, {
      id: 46078,
      mainCategoryId: '60',
      name: '[Olvian Dye] True Sky',
    }, {
      id: 46090,
      mainCategoryId: '60',
      name: '[Olvian Dye] True Indigo',
    }, {
      id: 46102,
      mainCategoryId: '60',
      name: '[Olvian Dye] True Purple',
    }, {
      id: 46114,
      mainCategoryId: '60',
      name: '[Olvian Dye] True Deep Pink',
    }, {
      id: 46122,
      mainCategoryId: '60',
      name: '[Olvian Dye] Black',
    }, {
      id: 46128,
      mainCategoryId: '60',
      name: '[Velian Dye] True Red',
    }, {
      id: 46140,
      mainCategoryId: '60',
      name: '[Velian Dye] True Orange',
    }, {
      id: 46152,
      mainCategoryId: '60',
      name: '[Velian Dye] True Yellow',
    }, {
      id: 46164,
      mainCategoryId: '60',
      name: '[Velian Dye] True Lime',
    }, {
      id: 46176,
      mainCategoryId: '60',
      name: '[Velian Dye] True Mint',
    }, {
      id: 46188,
      mainCategoryId: '60',
      name: '[Velian Dye] True Aqua',
    }, {
      id: 46200,
      mainCategoryId: '60',
      name: '[Velian Dye] True Sky',
    }, {
      id: 46212,
      mainCategoryId: '60',
      name: '[Velian Dye] True Indigo',
    }, {
      id: 46224,
      mainCategoryId: '60',
      name: '[Velian Dye] True Purple',
    }, {
      id: 46236,
      mainCategoryId: '60',
      name: '[Velian Dye] True Deep Pink',
    }, {
      id: 46244,
      mainCategoryId: '60',
      name: '[Velian Dye] Black',
    }, {
      id: 46250,
      mainCategoryId: '60',
      name: '[Heidelian Dye] True Red',
    }, {
      id: 46262,
      mainCategoryId: '60',
      name: '[Heidelian Dye] True Orange',
    }, {
      id: 46274,
      mainCategoryId: '60',
      name: '[Heidelian Dye] True Yellow',
    }, {
      id: 46286,
      mainCategoryId: '60',
      name: '[Heidelian Dye] True Lime',
    }, {
      id: 46298,
      mainCategoryId: '60',
      name: '[Heidelian Dye] True Mint',
    }, {
      id: 46310,
      mainCategoryId: '60',
      name: '[Heidelian Dye] True Aqua',
    }, {
      id: 46322,
      mainCategoryId: '60',
      name: '[Heidelian Dye] True Sky',
    }, {
      id: 46334,
      mainCategoryId: '60',
      name: '[Heidelian Dye] True Indigo',
    }, {
      id: 46346,
      mainCategoryId: '60',
      name: '[Heidelian Dye] True Purple',
    }, {
      id: 46358,
      mainCategoryId: '60',
      name: '[Heidelian Dye] True Deep Pink',
    }, {
      id: 46366,
      mainCategoryId: '60',
      name: '[Heidelian Dye] Black',
    }, {
      id: 46372,
      mainCategoryId: '60',
      name: '[Keplanian Dye] True Red',
    }, {
      id: 46384,
      mainCategoryId: '60',
      name: '[Keplanian Dye] True Orange',
    }, {
      id: 46396,
      mainCategoryId: '60',
      name: '[Keplanian Dye] True Yellow',
    }, {
      id: 46408,
      mainCategoryId: '60',
      name: '[Keplanian Dye] True Lime',
    }, {
      id: 46420,
      mainCategoryId: '60',
      name: '[Keplanian Dye] True Mint',
    }, {
      id: 46432,
      mainCategoryId: '60',
      name: '[Keplanian Dye] True Aqua',
    }, {
      id: 46444,
      mainCategoryId: '60',
      name: '[Keplanian Dye] True Sky',
    }, {
      id: 46456,
      mainCategoryId: '60',
      name: '[Keplanian Dye] True Indigo',
    }, {
      id: 46468,
      mainCategoryId: '60',
      name: '[Keplanian Dye] True Purple',
    }, {
      id: 46480,
      mainCategoryId: '60',
      name: '[Keplanian Dye] True Deep Pink',
    }, {
      id: 46488,
      mainCategoryId: '60',
      name: '[Keplanian Dye] Black',
    }, {
      id: 46494,
      mainCategoryId: '60',
      name: '[Calpheonian Dye] True Red',
    }, {
      id: 46506,
      mainCategoryId: '60',
      name: '[Calpheonian Dye] True Orange',
    }, {
      id: 46518,
      mainCategoryId: '60',
      name: '[Calpheonian Dye] True Yellow',
    }, {
      id: 46530,
      mainCategoryId: '60',
      name: '[Calpheonian Dye] True Lime',
    }, {
      id: 46542,
      mainCategoryId: '60',
      name: '[Calpheonian Dye] True Mint',
    }, {
      id: 46554,
      mainCategoryId: '60',
      name: '[Calpheonian Dye] True Aqua',
    }, {
      id: 46566,
      mainCategoryId: '60',
      name: '[Calpheonian Dye] True Sky',
    }, {
      id: 46578,
      mainCategoryId: '60',
      name: '[Calpheonian Dye] True Indigo',
    }, {
      id: 46590,
      mainCategoryId: '60',
      name: '[Calpheonian Dye] True Purple',
    }, {
      id: 46602,
      mainCategoryId: '60',
      name: '[Calpheonian Dye] True Deep Pink',
    }, {
      id: 46610,
      mainCategoryId: '60',
      name: '[Calpheonian Dye] Black',
    }, {
      id: 46616,
      mainCategoryId: '60',
      name: '[Mediahn Dye] True Red',
    }, {
      id: 46628,
      mainCategoryId: '60',
      name: '[Mediahn Dye] True Orange',
    }, {
      id: 46640,
      mainCategoryId: '60',
      name: '[Mediahn Dye] True Yellow',
    }, {
      id: 46652,
      mainCategoryId: '60',
      name: '[Mediahn Dye] True Lime',
    }, {
      id: 46664,
      mainCategoryId: '60',
      name: '[Mediahn Dye] True Mint',
    }, {
      id: 46676,
      mainCategoryId: '60',
      name: '[Mediahn Dye] True Aqua',
    }, {
      id: 46688,
      mainCategoryId: '60',
      name: '[Mediahn Dye] True Sky',
    }, {
      id: 46700,
      mainCategoryId: '60',
      name: '[Mediahn Dye] True Indigo',
    }, {
      id: 46712,
      mainCategoryId: '60',
      name: '[Mediahn Dye] True Purple',
    }, {
      id: 46724,
      mainCategoryId: '60',
      name: '[Mediahn Dye] True Deep Pink',
    }, {
      id: 46732,
      mainCategoryId: '60',
      name: '[Mediahn Dye] Black',
    }, {
      id: 46738,
      mainCategoryId: '60',
      name: '[Valencian Dye] True Red',
    }, {
      id: 46750,
      mainCategoryId: '60',
      name: '[Valencian Dye] True Orange',
    }, {
      id: 46762,
      mainCategoryId: '60',
      name: '[Valencian Dye] True Yellow',
    }, {
      id: 46774,
      mainCategoryId: '60',
      name: '[Valencian Dye] True Lime',
    }, {
      id: 46786,
      mainCategoryId: '60',
      name: '[Valencian Dye] True Mint',
    }, {
      id: 46798,
      mainCategoryId: '60',
      name: '[Valencian Dye] True Aqua',
    }, {
      id: 46810,
      mainCategoryId: '60',
      name: '[Valencian Dye] True Sky',
    }, {
      id: 46822,
      mainCategoryId: '60',
      name: '[Valencian Dye] True Indigo',
    }, {
      id: 46834,
      mainCategoryId: '60',
      name: '[Valencian Dye] True Purple',
    }, {
      id: 46846,
      mainCategoryId: '60',
      name: '[Valencian Dye] True Deep Pink',
    }, {
      id: 46854,
      mainCategoryId: '60',
      name: '[Valencian Dye] Black',
    }, {
      id: 46868,
      mainCategoryId: '55',
      name: 'Arctic Fox',
    }, {
      id: 46869,
      mainCategoryId: '55',
      name: 'Emperor Hawk',
    }, {
      id: 46893,
      mainCategoryId: '55',
      name: 'Haetae',
    }, {
      id: 47017,
      mainCategoryId: '55',
      name: 'Flondor Duck',
    }, {
      id: 47019,
      mainCategoryId: '55',
      name: 'Jojo',
    }, {
      id: 47028,
      mainCategoryId: '55',
      name: 'Young Baphomet',
    }, {
      id: 47651,
      mainCategoryId: '55',
      name: 'Phoniel Squirrel',
    }, {
      id: 47688,
      mainCategoryId: '55',
      name: 'Value Pack (30 Days)',
    }, {
      id: 49001,
      mainCategoryId: '70',
      name: 'Ship License: Rowboat',
    }, {
      id: 49003,
      mainCategoryId: '70',
      name: 'Ship License: Calpheon Rowboat',
    }, {
      id: 49004,
      mainCategoryId: '70',
      name: 'Ship License: Mediah Rowboat',
    }, {
      id: 49006,
      mainCategoryId: '70',
      name: 'Ship License: Fishing Boat',
    }, {
      id: 49009,
      mainCategoryId: '70',
      name: 'Ship License: Epheria Frigate',
    }, {
      id: 49011,
      mainCategoryId: '70',
      name: 'Ship License: Epheria Sailboat',
    }, {
      id: 49201,
      mainCategoryId: '70',
      name: 'Rowboat Cargo Container',
    }, {
      id: 49202,
      mainCategoryId: '70',
      name: 'Calpheon Rowboat Cargo Container',
    }, {
      id: 49203,
      mainCategoryId: '70',
      name: 'Altinova Rowboat Cargo Container',
    }, {
      id: 49204,
      mainCategoryId: '70',
      name: 'Fishing Boat Cargo Container',
    }, {
      id: 49205,
      mainCategoryId: '70',
      name: 'Fishing Boat Cargo Container of Abundance',
    }, {
      id: 49206,
      mainCategoryId: '70',
      name: 'Valencia Rowboat Cargo Container',
    }, {
      id: 49210,
      mainCategoryId: '70',
      name: 'Kaia Fishing Boat Cargo Container',
    }, {
      id: 49211,
      mainCategoryId: '70',
      name: 'Kaia Rowboat Cargo Container',
    }, {
      id: 49301,
      mainCategoryId: '70',
      name: 'Rowboat Prow',
    }, {
      id: 49302,
      mainCategoryId: '70',
      name: 'Calpheon Rowboat Prow',
    }, {
      id: 49303,
      mainCategoryId: '70',
      name: 'Altinova Rowboat Prow',
    }, {
      id: 49304,
      mainCategoryId: '70',
      name: 'Fishing Boat Prow',
    }, {
      id: 49306,
      mainCategoryId: '70',
      name: 'Fishing Boat Prow of Abundance',
    }, {
      id: 49307,
      mainCategoryId: '70',
      name: 'Valencia Rowboat Prow',
    }, {
      id: 49310,
      mainCategoryId: '70',
      name: 'Kaia Fishing Boat Prow',
    }, {
      id: 49311,
      mainCategoryId: '70',
      name: 'Kaia Rowboat Prow',
    }, {
      id: 49401,
      mainCategoryId: '70',
      name: 'Rowboat Decoration',
    }, {
      id: 49402,
      mainCategoryId: '70',
      name: 'Calpheon Rowboat Decoration',
    }, {
      id: 49403,
      mainCategoryId: '70',
      name: 'Altinova Rowboat Decoration',
    }, {
      id: 49404,
      mainCategoryId: '70',
      name: 'Fishing Boat Decoration',
    }, {
      id: 49405,
      mainCategoryId: '70',
      name: 'Fishing Boat Decoration of Abundance',
    }, {
      id: 49406,
      mainCategoryId: '70',
      name: 'Valencia Rowboat Decoration',
    }, {
      id: 49410,
      mainCategoryId: '70',
      name: 'Kaia Fishing Boat Decoration',
    }, {
      id: 49411,
      mainCategoryId: '70',
      name: 'Kaia Rowboat Decoration',
    }, {
      id: 49642,
      mainCategoryId: '55',
      name: 'Fluffy',
    }, {
      id: 49713,
      mainCategoryId: '70',
      name: 'Epheria Sailboat: Dragon Prow',
    }, {
      id: 49714,
      mainCategoryId: '70',
      name: 'Epheria Sailboat: Upgraded Black Plating',
    }, {
      id: 49715,
      mainCategoryId: '70',
      name: 'Epheria Sailboat: Elena Cannon',
    }, {
      id: 49716,
      mainCategoryId: '70',
      name: 'Epheria Sailboat: Black Breeze Sail',
    }, {
      id: 49722,
      mainCategoryId: '70',
      name: 'Epheria Frigate: Dragon Prow',
    }, {
      id: 49723,
      mainCategoryId: '70',
      name: 'Epheria Frigate: Upgraded Black Plating',
    }, {
      id: 49724,
      mainCategoryId: '70',
      name: 'Epheria Frigate: Zafina Cannon',
    }, {
      id: 49725,
      mainCategoryId: '70',
      name: 'Epheria Frigate: Black Breeze Sail',
    }, {
      id: 49726,
      mainCategoryId: '70',
      name: 'Epheria Sailboat: Sea Dragon Prow',
    }, {
      id: 49727,
      mainCategoryId: '70',
      name: 'Epheria Sailboat: Lightweight Black Plating',
    }, {
      id: 49728,
      mainCategoryId: '70',
      name: 'Epheria Sailboat: Elise Cannon',
    }, {
      id: 49729,
      mainCategoryId: '70',
      name: 'Epheria Sailboat: Blue Wind Sail',
    }, {
      id: 49730,
      mainCategoryId: '70',
      name: 'Epheria Frigate: Ocean Dragon Prow',
    }, {
      id: 49731,
      mainCategoryId: '70',
      name: 'Epheria Frigate: Streamlined Black Plating',
    }, {
      id: 49732,
      mainCategoryId: '70',
      name: 'Epheria Frigate: Serena Cannon',
    }, {
      id: 49733,
      mainCategoryId: '70',
      name: 'Epheria Frigate: Nor\'easter Sail',
    }, {
      id: 49804,
      mainCategoryId: '40',
      name: 'Sealed Old Moon Camping Anvil',
    }, {
      id: 49805,
      mainCategoryId: '40',
      name: 'Old Moon Camping Shop Contract',
    }, {
      id: 49808,
      mainCategoryId: '40',
      name: 'Packaged Old Moon Camping Anvil',
    }, {
      id: 50006,
      mainCategoryId: '65',
      name: 'Registration: Light Brown Camel',
    }, {
      id: 50018,
      mainCategoryId: '65',
      name: 'Registration: Deep Brown Camel',
    }, {
      id: 50801,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Origin Stone',
    }, {
      id: 50802,
      mainCategoryId: '65',
      name: 'Swaying Wind Shard',
    }, {
      id: 50803,
      mainCategoryId: '65',
      name: 'Rumbling Earth Shard',
    }, {
      id: 50804,
      mainCategoryId: '65',
      name: 'Stonetail Fodder',
    }, {
      id: 50806,
      mainCategoryId: '65',
      name: 'Spirit Pouch of Ferocious Beast',
    }, {
      id: 50807,
      mainCategoryId: '65',
      name: 'Pure Forest Breath',
    }, {
      id: 50808,
      mainCategoryId: '65',
      name: 'Rainbow Gem Fruit',
    }, {
      id: 50809,
      mainCategoryId: '65',
      name: 'Breezy Conch Seaweed',
    }, {
      id: 50810,
      mainCategoryId: '65',
      name: 'Deep Blue Hoof Root',
    }, {
      id: 51001,
      mainCategoryId: '75',
      name: 'Wagon Registration: Shabby Wagon',
    }, {
      id: 51002,
      mainCategoryId: '75',
      name: 'Wagon Registration: Strong Wagon',
    }, {
      id: 51003,
      mainCategoryId: '75',
      name: 'Wagon Registration: White Wagon',
    }, {
      id: 51004,
      mainCategoryId: '75',
      name: 'Wagon Registration: Farm Wagon',
    }, {
      id: 51005,
      mainCategoryId: '75',
      name: 'Wagon Registration: Trade Wagon',
    }, {
      id: 51007,
      mainCategoryId: '75',
      name: 'Wagon Registration: Merchant Wagon',
    }, {
      id: 51008,
      mainCategoryId: '75',
      name: 'Wagon Registration: Noble Wagon',
    }, {
      id: 51013,
      mainCategoryId: '75',
      name: 'Wagon Registration: Forest Path Wagon',
    }, {
      id: 52501,
      mainCategoryId: '65',
      name: 'White Plume Champron',
    }, {
      id: 52502,
      mainCategoryId: '65',
      name: 'Light Red Plumed Champron',
    }, {
      id: 52503,
      mainCategoryId: '65',
      name: 'Steel Combat Champron',
    }, {
      id: 52504,
      mainCategoryId: '65',
      name: 'Feather Champron of Storm',
    }, {
      id: 52505,
      mainCategoryId: '65',
      name: 'Steel Champron of Fighting Spirit',
    }, {
      id: 52506,
      mainCategoryId: '65',
      name: 'Granverre Feather Champron',
    }, {
      id: 52509,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Champron - Earth',
    }, {
      id: 52512,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Champron - Wind',
    }, {
      id: 52515,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Champron - Sea',
    }, {
      id: 52518,
      mainCategoryId: '65',
      name: '[Donkey] White Plume Champron',
    }, {
      id: 52519,
      mainCategoryId: '65',
      name: '[Donkey] Light Red Plumed Champron',
    }, {
      id: 52520,
      mainCategoryId: '65',
      name: '[Donkey] Steel Combat Champron',
    }, {
      id: 52601,
      mainCategoryId: '65',
      name: 'Shabby Leather Barding',
    }, {
      id: 52602,
      mainCategoryId: '65',
      name: 'Light Hide Barding',
    }, {
      id: 52603,
      mainCategoryId: '65',
      name: 'Steel Combat Barding',
    }, {
      id: 52604,
      mainCategoryId: '65',
      name: 'Light Leather Barding of Storm',
    }, {
      id: 52605,
      mainCategoryId: '65',
      name: 'Steel Barding of Fighting Spirit',
    }, {
      id: 52606,
      mainCategoryId: '65',
      name: 'Granverre Leather Barding',
    }, {
      id: 52609,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Barding - Earth',
    }, {
      id: 52612,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Barding - Wind',
    }, {
      id: 52615,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Barding - Sea',
    }, {
      id: 52618,
      mainCategoryId: '65',
      name: '[Donkey] Light Leather Barding',
    }, {
      id: 52619,
      mainCategoryId: '65',
      name: '[Donkey] Shabby Leather Barding',
    }, {
      id: 52620,
      mainCategoryId: '65',
      name: '[Donkey] Steel Combat Barding',
    }, {
      id: 52622,
      mainCategoryId: '65',
      name: '[Donkey] Krogdalo\'s Barding',
    }, {
      id: 52701,
      mainCategoryId: '65',
      name: 'Shabby Leather Saddle',
    }, {
      id: 52702,
      mainCategoryId: '65',
      name: 'Light Hide Saddle',
    }, {
      id: 52703,
      mainCategoryId: '65',
      name: 'Leather Combat Saddle',
    }, {
      id: 52704,
      mainCategoryId: '65',
      name: 'Light Leather Saddle of Storm',
    }, {
      id: 52705,
      mainCategoryId: '65',
      name: 'Leather Saddle of Fighting Spirit',
    }, {
      id: 52706,
      mainCategoryId: '65',
      name: 'Granverre Leather Saddle',
    }, {
      id: 52709,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Saddle - Earth',
    }, {
      id: 52712,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Saddle - Wind',
    }, {
      id: 52715,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Saddle - Sea',
    }, {
      id: 52718,
      mainCategoryId: '65',
      name: '[Donkey] Light Leather Saddle',
    }, {
      id: 52719,
      mainCategoryId: '65',
      name: '[Donkey] Shabby Leather Saddle',
    }, {
      id: 52720,
      mainCategoryId: '65',
      name: '[Donkey] Leather Combat Saddle',
    }, {
      id: 52722,
      mainCategoryId: '65',
      name: '[Donkey] Krogdalo\'s Saddle',
    }, {
      id: 52801,
      mainCategoryId: '65',
      name: 'Shabby Hide Stirrups',
    }, {
      id: 52802,
      mainCategoryId: '65',
      name: 'Light Hide Stirrups',
    }, {
      id: 52803,
      mainCategoryId: '65',
      name: 'Leather Combat Stirrups',
    }, {
      id: 52804,
      mainCategoryId: '65',
      name: 'Light Leather Stirrups of Storm',
    }, {
      id: 52805,
      mainCategoryId: '65',
      name: 'Leather Stirrups of Fighting Spirit',
    }, {
      id: 52806,
      mainCategoryId: '65',
      name: 'Granverre Leather Stirrups',
    }, {
      id: 52809,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Stirrups - Earth',
    }, {
      id: 52812,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Stirrups - Wind',
    }, {
      id: 52815,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Stirrups - Sea',
    }, {
      id: 52818,
      mainCategoryId: '65',
      name: '[Donkey] Light Leather Stirrups',
    }, {
      id: 52819,
      mainCategoryId: '65',
      name: '[Donkey] Shabby Leather Stirrups',
    }, {
      id: 52820,
      mainCategoryId: '65',
      name: '[Donkey] Leather Combat Stirrups',
    }, {
      id: 52822,
      mainCategoryId: '65',
      name: '[Donkey] Krogdalo\'s Stirrups',
    }, {
      id: 52901,
      mainCategoryId: '65',
      name: 'Weak Iron Horseshoe',
    }, {
      id: 52902,
      mainCategoryId: '65',
      name: 'Light Iron Horseshoe',
    }, {
      id: 52903,
      mainCategoryId: '65',
      name: 'Steel Combat Horseshoe',
    }, {
      id: 52904,
      mainCategoryId: '65',
      name: 'Light Steel Horseshoe of Storm',
    }, {
      id: 52905,
      mainCategoryId: '65',
      name: 'Steel Horseshoe of Fighting Spirit',
    }, {
      id: 52906,
      mainCategoryId: '65',
      name: 'Granverre Metal Horseshoe',
    }, {
      id: 52909,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Horseshoe - Earth',
    }, {
      id: 52912,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Horseshoe - Wind',
    }, {
      id: 52915,
      mainCategoryId: '65',
      name: 'Krogdalo\'s Horseshoe - Sea',
    }, {
      id: 52918,
      mainCategoryId: '65',
      name: '[Donkey] Light Iron Horseshoe',
    }, {
      id: 52919,
      mainCategoryId: '65',
      name: '[Donkey] Weak Iron Horseshoe',
    }, {
      id: 52920,
      mainCategoryId: '65',
      name: '[Donkey] Steel Combat Horseshoe',
    }, {
      id: 52921,
      mainCategoryId: '65',
      name: '[Donkey] Granverre Metal Horseshoe',
    }, {
      id: 53401,
      mainCategoryId: '75',
      name: 'Shabby Wagon Wheel',
    }, {
      id: 53402,
      mainCategoryId: '75',
      name: 'Strong Wagon Wheel',
    }, {
      id: 53403,
      mainCategoryId: '75',
      name: 'White Wagon Wheel',
    }, {
      id: 53404,
      mainCategoryId: '75',
      name: 'Farm Wagon Wheel',
    }, {
      id: 53405,
      mainCategoryId: '75',
      name: 'Trade Wagon Wheel',
    }, {
      id: 53406,
      mainCategoryId: '75',
      name: 'Merchant Wagon Wheel',
    }, {
      id: 53407,
      mainCategoryId: '75',
      name: 'Noble Wagon Wheel',
    }, {
      id: 53408,
      mainCategoryId: '75',
      name: 'High-Quality Merchant Wagon Wheel',
    }, {
      id: 53409,
      mainCategoryId: '75',
      name: 'High-Quality Noble Wagon Wheel',
    }, {
      id: 53411,
      mainCategoryId: '75',
      name: 'Forest Path Wagon Wheel',
    }, {
      id: 53501,
      mainCategoryId: '75',
      name: 'Shabby Wagon Cover',
    }, {
      id: 53502,
      mainCategoryId: '75',
      name: 'Strong Wagon Cover',
    }, {
      id: 53503,
      mainCategoryId: '75',
      name: 'White Wagon Cover',
    }, {
      id: 53504,
      mainCategoryId: '75',
      name: 'Farm Wagon Cover',
    }, {
      id: 53505,
      mainCategoryId: '75',
      name: 'Trade Wagon Cover',
    }, {
      id: 53506,
      mainCategoryId: '75',
      name: 'Merchant Wagon Cover',
    }, {
      id: 53507,
      mainCategoryId: '75',
      name: 'Noble Wagon Cover',
    }, {
      id: 53508,
      mainCategoryId: '75',
      name: 'High-Quality Merchant Wagon Cover',
    }, {
      id: 53509,
      mainCategoryId: '75',
      name: 'High-Quality Noble Wagon Cover',
    }, {
      id: 53511,
      mainCategoryId: '75',
      name: 'Forest Path Wagon Cover',
    }, {
      id: 53601,
      mainCategoryId: '75',
      name: 'Shabby Wagon Flag',
    }, {
      id: 53602,
      mainCategoryId: '75',
      name: 'Strong Wagon Flag',
    }, {
      id: 53603,
      mainCategoryId: '75',
      name: 'White Wagon Flag',
    }, {
      id: 53604,
      mainCategoryId: '75',
      name: 'Farm Wagon Flag',
    }, {
      id: 53605,
      mainCategoryId: '75',
      name: 'Trade Wagon Flag',
    }, {
      id: 53606,
      mainCategoryId: '75',
      name: 'Merchant Wagon Flag',
    }, {
      id: 53607,
      mainCategoryId: '75',
      name: 'Noble Wagon Flag',
    }, {
      id: 53609,
      mainCategoryId: '75',
      name: 'Forest Path Wagon Flag',
    }, {
      id: 53701,
      mainCategoryId: '75',
      name: 'Shabby Wagon Badge',
    }, {
      id: 53702,
      mainCategoryId: '75',
      name: 'Strong Wagon Badge',
    }, {
      id: 53703,
      mainCategoryId: '75',
      name: 'White Wagon Badge',
    }, {
      id: 53704,
      mainCategoryId: '75',
      name: 'Farm Wagon Badge',
    }, {
      id: 53705,
      mainCategoryId: '75',
      name: 'Trade Wagon Badge',
    }, {
      id: 53706,
      mainCategoryId: '75',
      name: 'Merchant Wagon Badge',
    }, {
      id: 53707,
      mainCategoryId: '75',
      name: 'Noble Wagon Badge',
    }, {
      id: 53709,
      mainCategoryId: '75',
      name: 'Forest Path Wagon Badge',
    }, {
      id: 53710,
      mainCategoryId: '75',
      name: 'High-Quality Four-wheeled Wagon Badge',
    }, {
      id: 53801,
      mainCategoryId: '75',
      name: 'Wagon Lamp',
    }, {
      id: 53802,
      mainCategoryId: '75',
      name: 'Large Wagon Lamp',
    }, {
      id: 54001,
      mainCategoryId: '65',
      name: 'Carrot',
    }, {
      id: 54003,
      mainCategoryId: '65',
      name: 'Lump of Raw Sugar',
    }, {
      id: 54004,
      mainCategoryId: '65',
      name: 'High-Quality Carrot',
    }, {
      id: 54005,
      mainCategoryId: '65',
      name: 'Special Carrot',
    }, {
      id: 54012,
      mainCategoryId: '65',
      name: 'Dried Briar',
    }, {
      id: 54016,
      mainCategoryId: '65',
      name: 'Cheap Feed',
    }, {
      id: 54017,
      mainCategoryId: '65',
      name: 'Good Feed',
    }, {
      id: 54018,
      mainCategoryId: '65',
      name: 'Organic Feed',
    }, {
      id: 54020,
      mainCategoryId: '65',
      name: 'Acacia Leaf',
    }, {
      id: 54021,
      mainCategoryId: '65',
      name: 'High-Quality Acacia Leaf',
    }, {
      id: 54022,
      mainCategoryId: '65',
      name: 'Special Acacia Leaf',
    }, {
      id: 54027,
      mainCategoryId: '65',
      name: 'Origin of Wind',
    }, {
      id: 54030,
      mainCategoryId: '65',
      name: 'Sweet Honey Wine',
    }, {
      id: 54032,
      mainCategoryId: '65',
      name: 'Special Honey Jar',
    }, {
      id: 54202,
      mainCategoryId: '70',
      name: 'Old Totem of the Sea',
    }, {
      id: 54203,
      mainCategoryId: '70',
      name: 'Old Totem of the Sea',
    }, {
      id: 54205,
      mainCategoryId: '70',
      name: 'Plain Totem of the Sea',
    }, {
      id: 54206,
      mainCategoryId: '70',
      name: 'Plain Totem of the Sea',
    }, {
      id: 54207,
      mainCategoryId: '70',
      name: 'Plain Totem of the Sea',
    }, {
      id: 54208,
      mainCategoryId: '70',
      name: 'Plain Totem of the Sea',
    }, {
      id: 54209,
      mainCategoryId: '70',
      name: 'Hard Totem of the Sea',
    }, {
      id: 54301,
      mainCategoryId: '55',
      name: '[Dark Knight] Rosa Cassius Headpiece',
    }, {
      id: 54302,
      mainCategoryId: '55',
      name: '[Dark Knight] Rosa Cassius Clothes',
    }, {
      id: 54303,
      mainCategoryId: '55',
      name: '[Dark Knight] Rosa Cassius Shoes',
    }, {
      id: 54304,
      mainCategoryId: '55',
      name: '[Dark Knight] Rosa Cassius Kriegsmesser',
    }, {
      id: 54305,
      mainCategoryId: '55',
      name: '[Dark Knight] Rosa Cassius Ornamental Knot',
    }, {
      id: 54306,
      mainCategoryId: '55',
      name: '[Dark Knight] Rosa Cassius Classic Set',
    }, {
      id: 54327,
      mainCategoryId: '55',
      name: '[Dark Knight] Spring Blossom Headpiece',
    }, {
      id: 54328,
      mainCategoryId: '55',
      name: '[Dark Knight] Spring Blossom Clothes',
    }, {
      id: 54329,
      mainCategoryId: '55',
      name: '[Dark Knight] Spring Blossom Shoes',
    }, {
      id: 54330,
      mainCategoryId: '55',
      name: '[Dark Knight] Spring Blossom Outfit Set',
    }, {
      id: 54332,
      mainCategoryId: '55',
      name: '[Dark Knight] Grolia Hat',
    }, {
      id: 54339,
      mainCategoryId: '55',
      name: '[Dark Knight] Lahr Arcien Helmet (R)',
    }, {
      id: 54340,
      mainCategoryId: '55',
      name: '[Dark Knight] Lahr Arcien Armor (R)',
    }, {
      id: 54341,
      mainCategoryId: '55',
      name: '[Dark Knight] Lahr Arcien Shoes (R)',
    }, {
      id: 54342,
      mainCategoryId: '55',
      name: '[Dark Knight] Lahr Arcien Kriegsmesser (R)',
    }, {
      id: 54343,
      mainCategoryId: '55',
      name: '[Dark Knight] Lahr Arcien Ornamental Knot (R)',
    }, {
      id: 54344,
      mainCategoryId: '55',
      name: '[Dark Knight] Lahr Arcien Classic Set (R)',
    }, {
      id: 54352,
      mainCategoryId: '55',
      name: '[Dark Knight] Puff Mini Helmet',
    }, {
      id: 54353,
      mainCategoryId: '55',
      name: '[Dark Knight] Puff Mini Armor',
    }, {
      id: 54354,
      mainCategoryId: '55',
      name: '[Dark Knight] Puff Mini Gloves',
    }, {
      id: 54355,
      mainCategoryId: '55',
      name: '[Dark Knight] Puff Mini Shoes',
    }, {
      id: 54356,
      mainCategoryId: '55',
      name: '[Dark Knight] Puff Mini Kriegsmesser',
    }, {
      id: 54357,
      mainCategoryId: '55',
      name: '[Dark Knight] Puff Mini Ornamental Knot',
    }, {
      id: 54358,
      mainCategoryId: '55',
      name: '[Dark Knight] Puff Mini Classic Set',
    }, {
      id: 54359,
      mainCategoryId: '55',
      name: '[Dark Knight] Kibelius Helmet',
    }, {
      id: 54360,
      mainCategoryId: '55',
      name: '[Dark Knight] Kibelius Divinus Armor',
    }, {
      id: 54361,
      mainCategoryId: '55',
      name: '[Dark Knight] Kibelius Armor',
    }, {
      id: 54362,
      mainCategoryId: '55',
      name: '[Dark Knight] Kibelius Shoes',
    }, {
      id: 54363,
      mainCategoryId: '55',
      name: '[Dark Knight] Kibelius Kriegsmesser',
    }, {
      id: 54364,
      mainCategoryId: '55',
      name: '[Dark Knight] Kibelius Ornamental Knot',
    }, {
      id: 54365,
      mainCategoryId: '55',
      name: '[Dark Knight] Kibelius Divinus Classic Set',
    }, {
      id: 54366,
      mainCategoryId: '55',
      name: '[Dark Knight] Kibelius Classic Set',
    }, {
      id: 54373,
      mainCategoryId: '55',
      name: '[Dark Knight] Karlstein Hat',
    }, {
      id: 54374,
      mainCategoryId: '55',
      name: '[Dark Knight] Karlstein Armor',
    }, {
      id: 54375,
      mainCategoryId: '55',
      name: '[Dark Knight] Karlstein Shoes',
    }, {
      id: 54376,
      mainCategoryId: '55',
      name: '[Dark Knight] Karlstein Kriegsmesser',
    }, {
      id: 54377,
      mainCategoryId: '55',
      name: '[Dark Knight] Karlstein Ornamental Knot',
    }, {
      id: 54378,
      mainCategoryId: '55',
      name: '[Dark Knight] Karlstein Classic Set',
    }, {
      id: 54385,
      mainCategoryId: '55',
      name: '[Dark Knight] Heidel Masquerade Phantom Mask',
    }, {
      id: 54386,
      mainCategoryId: '55',
      name: '[Dark Knight] Heidel Masquerade Dress',
    }, {
      id: 54387,
      mainCategoryId: '55',
      name: '[Dark Knight] Heidel Masquerade Outfit Set',
    }, {
      id: 54388,
      mainCategoryId: '55',
      name: '[Dark Knight] New Year Hanbok Hat',
    }, {
      id: 54389,
      mainCategoryId: '55',
      name: '[Dark Knight] New Year Hanbok Clothes',
    }, {
      id: 54390,
      mainCategoryId: '55',
      name: '[Dark Knight] New Year Hanbok Shoes',
    }, {
      id: 54391,
      mainCategoryId: '55',
      name: '[Dark Knight] New Year Hanbok Outfit Set',
    }, {
      id: 54398,
      mainCategoryId: '55',
      name: '[Dark Knight] Sin Terrna Helmet',
    }, {
      id: 54399,
      mainCategoryId: '55',
      name: '[Dark Knight] Sin Terrna Armor',
    }, {
      id: 54400,
      mainCategoryId: '55',
      name: '[Dark Knight] Sin Terrna Shoes',
    }, {
      id: 54401,
      mainCategoryId: '55',
      name: '[Dark Knight] Sin Terrna Vediant',
    }, {
      id: 54402,
      mainCategoryId: '55',
      name: '[Dark Knight] Sin Terrna Kriegsmesser',
    }, {
      id: 54403,
      mainCategoryId: '55',
      name: '[Dark Knight] Sin Terrna Ornamental Knot',
    }, {
      id: 54404,
      mainCategoryId: '55',
      name: '[Dark Knight] Sin Terrna Classic Set',
    }, {
      id: 54405,
      mainCategoryId: '55',
      name: '[Dark Knight] Sin Terrna Premium Set',
    }, {
      id: 54414,
      mainCategoryId: '55',
      name: '[Dark Knight] Anemos Helmet',
    }, {
      id: 54415,
      mainCategoryId: '55',
      name: '[Dark Knight] Anemos Armor',
    }, {
      id: 54416,
      mainCategoryId: '55',
      name: '[Dark Knight] Anemos Outfit Set',
    }, {
      id: 54417,
      mainCategoryId: '55',
      name: '[Dark Knight] Terrminé Helmet',
    }, {
      id: 54418,
      mainCategoryId: '55',
      name: '[Dark Knight] Terrminé Armor',
    }, {
      id: 54419,
      mainCategoryId: '55',
      name: '[Dark Knight] Terrminé Outfit Set',
    }, {
      id: 54420,
      mainCategoryId: '55',
      name: '[Dark Knight] Epheria Marine Helmet',
    }, {
      id: 54421,
      mainCategoryId: '55',
      name: '[Dark Knight] Epheria Marine Clothes',
    }, {
      id: 54422,
      mainCategoryId: '55',
      name: '[Dark Knight] Epheria Marine Shoes',
    }, {
      id: 54423,
      mainCategoryId: '55',
      name: '[Dark Knight] Epheria Marine Kriegsmesser',
    }, {
      id: 54424,
      mainCategoryId: '55',
      name: '[Dark Knight] Epheria Marine Ornamental Knot',
    }, {
      id: 54425,
      mainCategoryId: '55',
      name: '[Dark Knight] Epheria Marine Classic Set',
    }, {
      id: 54426,
      mainCategoryId: '55',
      name: '[Dark Knight] Marine Romance Hat',
    }, {
      id: 54427,
      mainCategoryId: '55',
      name: '[Dark Knight] Marine Romance Clothes',
    }, {
      id: 54428,
      mainCategoryId: '55',
      name: '[Dark Knight] Marine Romance Shoes',
    }, {
      id: 54429,
      mainCategoryId: '55',
      name: '[Dark Knight] Marine Romance Outfit Set',
    }, {
      id: 54430,
      mainCategoryId: '55',
      name: '[Dark Knight] Heled Helmet',
    }, {
      id: 54431,
      mainCategoryId: '55',
      name: '[Dark Knight] Heled Armor',
    }, {
      id: 54432,
      mainCategoryId: '55',
      name: '[Dark Knight] Heled Shoes',
    }, {
      id: 54433,
      mainCategoryId: '55',
      name: '[Dark Knight] Heled Kriegsmesser',
    }, {
      id: 54434,
      mainCategoryId: '55',
      name: '[Dark Knight] Heled Ornamental Knot',
    }, {
      id: 54435,
      mainCategoryId: '55',
      name: '[Dark Knight] Heled Vediant',
    }, {
      id: 54436,
      mainCategoryId: '55',
      name: '[Dark Knight] Heled Classic Set',
    }, {
      id: 54437,
      mainCategoryId: '55',
      name: '[Dark Knight] Heled Premium Set',
    }, {
      id: 54439,
      mainCategoryId: '55',
      name: '[Dark Knight] Kibelius Vediant',
    }, {
      id: 54449,
      mainCategoryId: '55',
      name: '[Dark Knight] Ram Horn Witch Headdress',
    }, {
      id: 54450,
      mainCategoryId: '55',
      name: '[Dark Knight] Ram Horn Witch Clothes',
    }, {
      id: 54451,
      mainCategoryId: '55',
      name: '[Dark Knight] Ram Horn Witch Outfit Set',
    }, {
      id: 54452,
      mainCategoryId: '55',
      name: '[Dark Knight] Skoll Tempia Helmet',
    }, {
      id: 54453,
      mainCategoryId: '55',
      name: '[Dark Knight] Skoll Tempia Armor',
    }, {
      id: 54454,
      mainCategoryId: '55',
      name: '[Dark Knight] Skoll Tempia Shoes',
    }, {
      id: 54455,
      mainCategoryId: '55',
      name: '[Dark Knight] Skoll Tempia Outfit Set',
    }, {
      id: 54456,
      mainCategoryId: '55',
      name: '[Dark Knight] Trilby Headpiece',
    }, {
      id: 56001,
      mainCategoryId: '35',
      name: 'Sturdy Barricade',
    }, {
      id: 56003,
      mainCategoryId: '35',
      name: 'Cannonball',
    }, {
      id: 56007,
      mainCategoryId: '35',
      name: 'Flame Cannonball',
    }, {
      id: 56009,
      mainCategoryId: '35',
      name: 'Bomb',
    }, {
      id: 56014,
      mainCategoryId: '35',
      name: 'Stun Trap',
    }, {
      id: 56015,
      mainCategoryId: '35',
      name: 'Flame Trap',
    }, {
      id: 56016,
      mainCategoryId: '35',
      name: 'Venom Trap',
    }, {
      id: 56017,
      mainCategoryId: '35',
      name: 'Ankle Trap',
    }, {
      id: 56133,
      mainCategoryId: '40',
      name: '[Hunting] Sniper Rifle',
    }, {
      id: 56220,
      mainCategoryId: '40',
      name: '[Hunting] Master Matchlock',
    }, {
      id: 56221,
      mainCategoryId: '25',
      name: 'Breath of Narcion',
    }, {
      id: 57001,
      mainCategoryId: '55',
      name: '[Striker] WeDan Helmet',
    }, {
      id: 57002,
      mainCategoryId: '55',
      name: '[Striker] WeDan Armor',
    }, {
      id: 57003,
      mainCategoryId: '55',
      name: '[Striker] WeDan Gloves',
    }, {
      id: 57004,
      mainCategoryId: '55',
      name: '[Striker] WeDan Gauntlet',
    }, {
      id: 57005,
      mainCategoryId: '55',
      name: '[Striker] WeDan Vambrace',
    }, {
      id: 57006,
      mainCategoryId: '55',
      name: '[Striker] WeDan Classic Set',
    }, {
      id: 57036,
      mainCategoryId: '55',
      name: '[Striker] Blazing Inferno Helmet',
    }, {
      id: 57037,
      mainCategoryId: '55',
      name: '[Striker] Blazing Inferno Armor',
    }, {
      id: 57038,
      mainCategoryId: '55',
      name: '[Striker] Blazing Inferno Gloves',
    }, {
      id: 57039,
      mainCategoryId: '55',
      name: '[Striker] Blazing Inferno Gauntlet',
    }, {
      id: 57040,
      mainCategoryId: '55',
      name: '[Striker] Blazing Inferno Vambrace',
    }, {
      id: 57041,
      mainCategoryId: '55',
      name: '[Striker] Blazing Inferno Gardbrace',
    }, {
      id: 57042,
      mainCategoryId: '55',
      name: '[Striker] Blazing Inferno Classic Set',
    }, {
      id: 57043,
      mainCategoryId: '55',
      name: '[Striker] Blazing Inferno Premium Set',
    }, {
      id: 57049,
      mainCategoryId: '55',
      name: '[Striker] Karlstein Hat',
    }, {
      id: 57050,
      mainCategoryId: '55',
      name: '[Striker] Karlstein Armor',
    }, {
      id: 57051,
      mainCategoryId: '55',
      name: '[Striker] Karlstein Gauntlet',
    }, {
      id: 57052,
      mainCategoryId: '55',
      name: '[Striker] Karlstein Vambrace',
    }, {
      id: 57053,
      mainCategoryId: '55',
      name: '[Striker] Karlstein Classic Set',
    }, {
      id: 57059,
      mainCategoryId: '55',
      name: '[Striker] Onyx Jaguar Helmet',
    }, {
      id: 57060,
      mainCategoryId: '55',
      name: '[Striker] Onyx Jaguar Armor',
    }, {
      id: 57061,
      mainCategoryId: '55',
      name: '[Striker] Onyx Jaguar Shoes',
    }, {
      id: 57062,
      mainCategoryId: '55',
      name: '[Striker] Onyx Jaguar Gauntlet',
    }, {
      id: 57063,
      mainCategoryId: '55',
      name: '[Striker] Onyx Jaguar Vambrace',
    }, {
      id: 57064,
      mainCategoryId: '55',
      name: '[Striker] Onyx Jaguar Gardbrace',
    }, {
      id: 57065,
      mainCategoryId: '55',
      name: '[Striker] Onyx Jaguar Classic Set',
    }, {
      id: 57066,
      mainCategoryId: '55',
      name: '[Striker] Onyx Jaguar Premium Set',
    }, {
      id: 57079,
      mainCategoryId: '55',
      name: '[Striker] Grave Keeper Hat',
    }, {
      id: 57080,
      mainCategoryId: '55',
      name: '[Striker] Grave Keeper Clothes',
    }, {
      id: 57081,
      mainCategoryId: '55',
      name: '[Striker] Grave Keeper Gloves',
    }, {
      id: 57082,
      mainCategoryId: '55',
      name: '[Striker] Grave Keeper Outfit Set',
    }, {
      id: 57083,
      mainCategoryId: '55',
      name: '[Striker] Sedic Bandana',
    }, {
      id: 57090,
      mainCategoryId: '55',
      name: '[Striker] Trilby Hat',
    }, {
      id: 57801,
      mainCategoryId: '55',
      name: '[Warrior] Crown Eagle Helmet',
    }, {
      id: 57802,
      mainCategoryId: '55',
      name: '[Warrior] Crown Eagle Armor',
    }, {
      id: 57803,
      mainCategoryId: '55',
      name: '[Warrior] Crown Eagle Longsword',
    }, {
      id: 57804,
      mainCategoryId: '55',
      name: '[Warrior] Crown Eagle Shield',
    }, {
      id: 57805,
      mainCategoryId: '55',
      name: '[Warrior] Crown Eagle Great Sword',
    }, {
      id: 57806,
      mainCategoryId: '55',
      name: '[Warrior] Crown Eagle Classic Set',
    }, {
      id: 57807,
      mainCategoryId: '55',
      name: '[Warrior] Crown Eagle Premium Set',
    }, {
      id: 57809,
      mainCategoryId: '55',
      name: '[Ranger] Crown Eagle Helmet',
    }, {
      id: 57810,
      mainCategoryId: '55',
      name: '[Ranger] Crown Eagle Armor',
    }, {
      id: 57811,
      mainCategoryId: '55',
      name: '[Ranger] Crown Eagle Longbow',
    }, {
      id: 57812,
      mainCategoryId: '55',
      name: '[Ranger] Crown Eagle Dagger',
    }, {
      id: 57813,
      mainCategoryId: '55',
      name: '[Ranger] Crown Eagle Kamasylven Sword',
    }, {
      id: 57814,
      mainCategoryId: '55',
      name: '[Ranger] Crown Eagle Classic set',
    }, {
      id: 57815,
      mainCategoryId: '55',
      name: '[Ranger] Crown Eagle Premium Set',
    }, {
      id: 57817,
      mainCategoryId: '55',
      name: '[Sorceress] Crown Eagle Helmet',
    }, {
      id: 57818,
      mainCategoryId: '55',
      name: '[Sorceress] Crown Eagle Armor',
    }, {
      id: 57819,
      mainCategoryId: '55',
      name: '[Sorceress] Crown Eagle Amulet',
    }, {
      id: 57820,
      mainCategoryId: '55',
      name: '[Sorceress] Crown Eagle Talisman',
    }, {
      id: 57821,
      mainCategoryId: '55',
      name: '[Sorceress] Crown Eagle Scythe',
    }, {
      id: 57822,
      mainCategoryId: '55',
      name: '[Sorceress] Crown Eagle Classic Set',
    }, {
      id: 57823,
      mainCategoryId: '55',
      name: '[Sorceress] Crown Eagle Premium Set',
    }, {
      id: 57825,
      mainCategoryId: '55',
      name: '[Berserker] Crown Eagle Helmet',
    }, {
      id: 57826,
      mainCategoryId: '55',
      name: '[Berserker] Crown Eagle Armor',
    }, {
      id: 57827,
      mainCategoryId: '55',
      name: '[Berserker] Crown Eagle Axe',
    }, {
      id: 57828,
      mainCategoryId: '55',
      name: '[Berserker] Crown Eagle Ornamental Knot',
    }, {
      id: 57829,
      mainCategoryId: '55',
      name: '[Berserker] Crown Eagle Iron Buster',
    }, {
      id: 57830,
      mainCategoryId: '55',
      name: '[Berserker] Crown Eagle Classic Set',
    }, {
      id: 57831,
      mainCategoryId: '55',
      name: '[Berserker] Crown Eagle Premium Set',
    }, {
      id: 57833,
      mainCategoryId: '55',
      name: '[Tamer] Crown Eagle Helmet',
    }, {
      id: 57834,
      mainCategoryId: '55',
      name: '[Tamer] Crown Eagle Armor',
    }, {
      id: 57835,
      mainCategoryId: '55',
      name: '[Tamer] Crown Eagle Shortsword',
    }, {
      id: 57836,
      mainCategoryId: '55',
      name: '[Tamer] Crown Eagle Trinket',
    }, {
      id: 57837,
      mainCategoryId: '55',
      name: '[Tamer] Crown Eagle Celestial Bo Staff',
    }, {
      id: 57838,
      mainCategoryId: '55',
      name: '[Tamer] Crown Eagle Classic Set',
    }, {
      id: 57839,
      mainCategoryId: '55',
      name: '[Tamer] Crown Eagle Premium Set',
    }, {
      id: 57841,
      mainCategoryId: '55',
      name: '[Musa] Crown Eagle Helmet',
    }, {
      id: 57842,
      mainCategoryId: '55',
      name: '[Musa] Crown Eagle Armor',
    }, {
      id: 57843,
      mainCategoryId: '55',
      name: '[Musa] Crown Eagle Blade',
    }, {
      id: 57844,
      mainCategoryId: '55',
      name: '[Musa] Crown Eagle Horn Bow',
    }, {
      id: 57845,
      mainCategoryId: '55',
      name: '[Musa] Crown Eagle Crescent Blade',
    }, {
      id: 57846,
      mainCategoryId: '55',
      name: '[Musa] Crown Eagle Classic Set',
    }, {
      id: 57847,
      mainCategoryId: '55',
      name: '[Musa] Crown Eagle Premium Set',
    }, {
      id: 57849,
      mainCategoryId: '55',
      name: '[Valkyrie] Crown Eagle Helmet',
    }, {
      id: 57850,
      mainCategoryId: '55',
      name: '[Valkyrie] Crown Eagle Armor',
    }, {
      id: 57851,
      mainCategoryId: '55',
      name: '[Valkyrie] Crown Eagle Long Sword',
    }, {
      id: 57852,
      mainCategoryId: '55',
      name: '[Valkyrie] Crown Eagle Shield',
    }, {
      id: 57853,
      mainCategoryId: '55',
      name: '[Valkyrie] Crown Eagle Lancia',
    }, {
      id: 57854,
      mainCategoryId: '55',
      name: '[Valkyrie] Crown Eagle Classic Set',
    }, {
      id: 57855,
      mainCategoryId: '55',
      name: '[Valkyrie] Crown Eagle Premium Set',
    }, {
      id: 57857,
      mainCategoryId: '55',
      name: '[Maehwa] Crown Eagle Helmet',
    }, {
      id: 57858,
      mainCategoryId: '55',
      name: '[Maehwa] Crown Eagle Armor',
    }, {
      id: 57859,
      mainCategoryId: '55',
      name: '[Maehwa] Crown Eagle Blade',
    }, {
      id: 57860,
      mainCategoryId: '55',
      name: '[Maehwa] Crown Eagle Horn Bow',
    }, {
      id: 57861,
      mainCategoryId: '55',
      name: '[Maehwa] Crown Eagle Kerispear',
    }, {
      id: 57862,
      mainCategoryId: '55',
      name: '[Maehwa] Crown Eagle Classic Set',
    }, {
      id: 57863,
      mainCategoryId: '55',
      name: '[Maehwa] Crown Eagle Premium Set',
    }, {
      id: 57865,
      mainCategoryId: '55',
      name: '[Wizard] Crown Eagle Helmet',
    }, {
      id: 57866,
      mainCategoryId: '55',
      name: '[Wizard] Crown Eagle Armor',
    }, {
      id: 57867,
      mainCategoryId: '55',
      name: '[Wizard] Crown Eagle Staff',
    }, {
      id: 57868,
      mainCategoryId: '55',
      name: '[Wizard] Crown Eagle Dagger',
    }, {
      id: 57869,
      mainCategoryId: '55',
      name: '[Wizard] Crown Eagle Godr Sphera',
    }, {
      id: 57870,
      mainCategoryId: '55',
      name: '[Wizard] Crown Eagle Classic Set',
    }, {
      id: 57871,
      mainCategoryId: '55',
      name: '[Wizard] Crown Eagle Premium Set',
    }, {
      id: 57873,
      mainCategoryId: '55',
      name: '[Witch] Crown Eagle Helmet',
    }, {
      id: 57874,
      mainCategoryId: '55',
      name: '[Witch] Crown Eagle Armor',
    }, {
      id: 57875,
      mainCategoryId: '55',
      name: '[Witch] Crown Eagle Staff',
    }, {
      id: 57876,
      mainCategoryId: '55',
      name: '[Witch] Crown Eagle Dagger',
    }, {
      id: 57877,
      mainCategoryId: '55',
      name: '[Witch] Crown Eagle Aad Sphera',
    }, {
      id: 57878,
      mainCategoryId: '55',
      name: '[Witch] Crown Eagle Classic Set',
    }, {
      id: 57879,
      mainCategoryId: '55',
      name: '[Witch] Crown Eagle Premium Set',
    }, {
      id: 57881,
      mainCategoryId: '55',
      name: '[Kunoichi] Crown Eagle Helmet',
    }, {
      id: 57882,
      mainCategoryId: '55',
      name: '[Kunoichi] Crown Eagle Armor',
    }, {
      id: 57883,
      mainCategoryId: '55',
      name: '[Kunoichi] Crown Eagle Shortsword',
    }, {
      id: 57884,
      mainCategoryId: '55',
      name: '[Kunoichi] Crown Eagle Kunai',
    }, {
      id: 57885,
      mainCategoryId: '55',
      name: '[Kunoichi] Crown Eagle Sah Chakram',
    }, {
      id: 57886,
      mainCategoryId: '55',
      name: '[Kunoichi] Crown Eagle Classic Set',
    }, {
      id: 57887,
      mainCategoryId: '55',
      name: '[Kunoichi] Crown Eagle Premium Set',
    }, {
      id: 57889,
      mainCategoryId: '55',
      name: '[Ninja] Crown Eagle Helmet',
    }, {
      id: 57890,
      mainCategoryId: '55',
      name: '[Ninja] Crown Eagle Armor',
    }, {
      id: 57891,
      mainCategoryId: '55',
      name: '[Ninja] Crown Eagle Shortsword',
    }, {
      id: 57892,
      mainCategoryId: '55',
      name: '[Ninja] Crown Eagle Kunai',
    }, {
      id: 57893,
      mainCategoryId: '55',
      name: '[Ninja] Crown Eagle Sura Katana',
    }, {
      id: 57894,
      mainCategoryId: '55',
      name: '[Ninja] Crown Eagle Classic Set',
    }, {
      id: 57895,
      mainCategoryId: '55',
      name: '[Ninja] Crown Eagle Premium Set',
    }, {
      id: 57897,
      mainCategoryId: '55',
      name: '[Dark Knight] Crown Eagle Helmet',
    }, {
      id: 57898,
      mainCategoryId: '55',
      name: '[Dark Knight] Crown Eagle Armor',
    }, {
      id: 57899,
      mainCategoryId: '55',
      name: '[Dark Knight] Crown Eagle Kriegsmesser',
    }, {
      id: 57900,
      mainCategoryId: '55',
      name: '[Dark Knight] Crown Eagle Ornamental Knot',
    }, {
      id: 57901,
      mainCategoryId: '55',
      name: '[Dark Knight] Crown Eagle Vediant',
    }, {
      id: 57902,
      mainCategoryId: '55',
      name: '[Dark Knight] Crown Eagle Classic Set',
    }, {
      id: 57903,
      mainCategoryId: '55',
      name: '[Dark Knight] Crown Eagle Premium Set',
    }, {
      id: 57905,
      mainCategoryId: '55',
      name: '[Striker] Crown Eagle Helmet',
    }, {
      id: 57906,
      mainCategoryId: '55',
      name: '[Striker] Crown Eagle Armor',
    }, {
      id: 57907,
      mainCategoryId: '55',
      name: '[Striker] Crown Eagle Gauntlet',
    }, {
      id: 57908,
      mainCategoryId: '55',
      name: '[Striker] Crown Eagle Vambrace',
    }, {
      id: 57909,
      mainCategoryId: '55',
      name: '[Striker] Crown Eagle Classic Set',
    }, {
      id: 57910,
      mainCategoryId: '55',
      name: '[Warrior] Onyx Jaguar Helmet',
    }, {
      id: 57911,
      mainCategoryId: '55',
      name: '[Warrior] Onyx Jaguar Armor',
    }, {
      id: 57912,
      mainCategoryId: '55',
      name: '[Warrior] Onyx Jaguar Outfit Set',
    }, {
      id: 57913,
      mainCategoryId: '55',
      name: '[Berserker] Onyx Jaguar Helmet',
    }, {
      id: 57914,
      mainCategoryId: '55',
      name: '[Berserker] Onyx Jaguar Armor',
    }, {
      id: 57915,
      mainCategoryId: '55',
      name: '[Berserker] Onyx Jaguar Outfit Set',
    }, {
      id: 57916,
      mainCategoryId: '55',
      name: '[Musa] Onyx Jaguar Helmet',
    }, {
      id: 57917,
      mainCategoryId: '55',
      name: '[Musa] Onyx Jaguar Armor',
    }, {
      id: 57918,
      mainCategoryId: '55',
      name: '[Musa] Onyx Jaguar Outfit Set',
    }, {
      id: 57919,
      mainCategoryId: '55',
      name: '[Wizard] Onyx Jaguar Helmet',
    }, {
      id: 57920,
      mainCategoryId: '55',
      name: '[Wizard] Onyx Jaguar Armor',
    }, {
      id: 57921,
      mainCategoryId: '55',
      name: '[Wizard] Onyx Jaguar Outfit Set',
    }, {
      id: 57922,
      mainCategoryId: '55',
      name: '[Ninja] Onyx Jaguar Helmet',
    }, {
      id: 57923,
      mainCategoryId: '55',
      name: '[Ninja] Onyx Jaguar Armor',
    }, {
      id: 57924,
      mainCategoryId: '55',
      name: '[Ninja] Onyx Jaguar Outfit Set',
    }, {
      id: 57925,
      mainCategoryId: '55',
      name: '[Striker] Crown Eagle Gardbrace',
    }, {
      id: 57926,
      mainCategoryId: '55',
      name: '[Striker] Crown Eagle Premium Set',
    }, {
      id: 59003,
      mainCategoryId: '65',
      name: 'Small Leather Elephant Mask',
    }, {
      id: 59005,
      mainCategoryId: '65',
      name: 'Muzika Leather Mask',
    }, {
      id: 59103,
      mainCategoryId: '65',
      name: 'Small Leather Elephant Armor',
    }, {
      id: 59105,
      mainCategoryId: '65',
      name: 'Muzika Leather Armor',
    }, {
      id: 59203,
      mainCategoryId: '65',
      name: 'Small Leather Saddle',
    }, {
      id: 59205,
      mainCategoryId: '65',
      name: 'Muzika Leather Saddle',
    }, {
      id: 59303,
      mainCategoryId: '65',
      name: 'Small Leather Stirrups',
    }, {
      id: 59305,
      mainCategoryId: '65',
      name: 'Muzika Leather Stirrups',
    }, {
      id: 59306,
      mainCategoryId: '65',
      name: 'Balanced Feed',
    }, {
      id: 59307,
      mainCategoryId: '65',
      name: 'Brady\'s Nutritious Feed',
    }, {
      id: 290006,
      mainCategoryId: '55',
      name: 'Snowflake Reindeer Box',
    }, {
      id: 320018,
      mainCategoryId: '55',
      name: 'Hunting EXP Transfer Coupon',
    }, {
      id: 320104,
      mainCategoryId: '55',
      name: 'Fairy Appearance Coupon (Puck)',
    }, {
      id: 320108,
      mainCategoryId: '55',
      name: 'Barter EXP Transfer Coupon',
    }, {
      id: 331001,
      mainCategoryId: '55',
      name: 'Marmot',
    }, {
      id: 331002,
      mainCategoryId: '55',
      name: 'Snowflake Reindeer',
    }, {
      id: 331006,
      mainCategoryId: '55',
      name: 'Panda',
    }, {
      id: 331007,
      mainCategoryId: '55',
      name: 'Ferret',
    }, {
      id: 331008,
      mainCategoryId: '55',
      name: 'Welsh Corgi',
    }, {
      id: 331050,
      mainCategoryId: '55',
      name: 'Shudad\'s Courier',
    }, {
      id: 331058,
      mainCategoryId: '55',
      name: 'Otter',
    }, {
      id: 336001,
      mainCategoryId: '55',
      name: '[Donkey] Wild Carrot Champron',
    }, {
      id: 336002,
      mainCategoryId: '55',
      name: '[Donkey] Wild Carrot Barding',
    }, {
      id: 336003,
      mainCategoryId: '55',
      name: '[Donkey] Wild Carrot Saddle',
    }, {
      id: 336004,
      mainCategoryId: '55',
      name: '[Donkey] Wild Carrot Stirrups',
    }, {
      id: 336005,
      mainCategoryId: '55',
      name: '[Donkey] Wild Carrot Donkey Gear Set',
    }, {
      id: 336011,
      mainCategoryId: '55',
      name: '[Donkey] Clip-Clop Champron',
    }, {
      id: 336012,
      mainCategoryId: '55',
      name: '[Donkey] Clip-Clop Barding',
    }, {
      id: 336013,
      mainCategoryId: '55',
      name: '[Donkey] Clip-Clop Saddle',
    }, {
      id: 336014,
      mainCategoryId: '55',
      name: '[Donkey] Clip-Clop Stirrups',
    }, {
      id: 336015,
      mainCategoryId: '55',
      name: '[Donkey] Clip-Clop Donkey Gear Set',
    }, {
      id: 336021,
      mainCategoryId: '55',
      name: 'Christa Champron',
    }, {
      id: 336023,
      mainCategoryId: '55',
      name: 'Christa Saddle',
    }, {
      id: 336035,
      mainCategoryId: '55',
      name: 'Oquilla Dream Champron',
    }, {
      id: 336036,
      mainCategoryId: '55',
      name: 'Oquilla Dream Barding',
    }, {
      id: 336037,
      mainCategoryId: '55',
      name: 'Oquilla Dream Saddle',
    }, {
      id: 336038,
      mainCategoryId: '55',
      name: 'Oquilla Dream Stirrups',
    }, {
      id: 336039,
      mainCategoryId: '55',
      name: 'Oquilla Dream Horse Gear Set',
    }, {
      id: 340001,
      mainCategoryId: '55',
      name: '[Warrior] Crimson Shadow Knight Helmet',
    }, {
      id: 340002,
      mainCategoryId: '55',
      name: '[Warrior] Crimson Knight Armor',
    }, {
      id: 340003,
      mainCategoryId: '55',
      name: '[Warrior] Crimson Shadow Knight Outfit Set',
    }, {
      id: 340004,
      mainCategoryId: '55',
      name: '[Warrior] Crimson Knight Helmet',
    }, {
      id: 340006,
      mainCategoryId: '55',
      name: '[Warrior] Crimson Knight Outfit Set',
    }, {
      id: 340007,
      mainCategoryId: '55',
      name: '[Berserker] Crimson Shadow Knight Helmet',
    }, {
      id: 340008,
      mainCategoryId: '55',
      name: '[Berserker] Crimson Knight Armor',
    }, {
      id: 340009,
      mainCategoryId: '55',
      name: '[Berserker] Crimson Shadow Knight Outfit Set',
    }, {
      id: 340010,
      mainCategoryId: '55',
      name: '[Berserker] Crimson Knight Helmet',
    }, {
      id: 340012,
      mainCategoryId: '55',
      name: '[Berserker] Crimson Knight Outfit Set',
    }, {
      id: 340014,
      mainCategoryId: '55',
      name: '[Musa] Crimson Knight Armor',
    }, {
      id: 340015,
      mainCategoryId: '55',
      name: '[Musa] Crimson Shadow Knight Outfit Set',
    }, {
      id: 340016,
      mainCategoryId: '55',
      name: '[Musa] Crimson Knight Helmet',
    }, {
      id: 340018,
      mainCategoryId: '55',
      name: '[Musa] Crimson Knight Outfit Set',
    }, {
      id: 340019,
      mainCategoryId: '55',
      name: '[Ninja] Crimson Shadow Knight Helmet',
    }, {
      id: 340020,
      mainCategoryId: '55',
      name: '[Ninja] Crimson Knight Armor',
    }, {
      id: 340021,
      mainCategoryId: '55',
      name: '[Ninja] Crimson Shadow Knight Outfit Set',
    }, {
      id: 340022,
      mainCategoryId: '55',
      name: '[Ninja] Crimson Knight Helmet',
    }, {
      id: 340024,
      mainCategoryId: '55',
      name: '[Ninja] Crimson Knight Outfit Set',
    }, {
      id: 340025,
      mainCategoryId: '55',
      name: '[Wizard] Crimson Shadow Knight Helmet',
    }, {
      id: 340026,
      mainCategoryId: '55',
      name: '[Wizard] Crimson Knight Armor',
    }, {
      id: 340027,
      mainCategoryId: '55',
      name: '[Wizard] Crimson Shadow Knight Outfit Set',
    }, {
      id: 340028,
      mainCategoryId: '55',
      name: '[Wizard] Crimson Knight Helmet',
    }, {
      id: 340030,
      mainCategoryId: '55',
      name: '[Wizard] Crimson Knight Outfit Set',
    }, {
      id: 340031,
      mainCategoryId: '55',
      name: '[Striker] Crimson Shadow Knight Helmet',
    }, {
      id: 340032,
      mainCategoryId: '55',
      name: '[Striker] Crimson Knight Armor',
    }, {
      id: 340033,
      mainCategoryId: '55',
      name: '[Striker] Crimson Shadow Knight Outfit Set',
    }, {
      id: 340034,
      mainCategoryId: '55',
      name: '[Striker] Crimson Knight Helmet',
    }, {
      id: 340036,
      mainCategoryId: '55',
      name: '[Striker] Crimson Knight Outfit Set',
    }, {
      id: 340037,
      mainCategoryId: '55',
      name: '[Ranger] Demonic Queen Helmet',
    }, {
      id: 340038,
      mainCategoryId: '55',
      name: '[Ranger] Demonic Queen Armor',
    }, {
      id: 340039,
      mainCategoryId: '55',
      name: '[Ranger] Demonic Queen Shoes',
    }, {
      id: 340040,
      mainCategoryId: '55',
      name: '[Ranger] Demonic Queen Outfit Set',
    }, {
      id: 340043,
      mainCategoryId: '55',
      name: '[Ranger] Angelic Queen Helmet',
    }, {
      id: 340045,
      mainCategoryId: '55',
      name: '[Ranger] Angelic Queen Shoes',
    }, {
      id: 340047,
      mainCategoryId: '55',
      name: '[Ranger] Angelic Queen Armor',
    }, {
      id: 340048,
      mainCategoryId: '55',
      name: '[Ranger] Angelic Queen Outfit Set',
    }, {
      id: 340049,
      mainCategoryId: '55',
      name: '[Sorceress] Demonic Queen Helmet',
    }, {
      id: 340050,
      mainCategoryId: '55',
      name: '[Sorceress] Demonic Queen Armor',
    }, {
      id: 340051,
      mainCategoryId: '55',
      name: '[Sorceress] Demonic Queen Shoes',
    }, {
      id: 340052,
      mainCategoryId: '55',
      name: '[Sorceress] Demonic Queen Outfit Set',
    }, {
      id: 340054,
      mainCategoryId: '55',
      name: '[Sorceress] Demonic Queen Outfit Set',
    }, {
      id: 340055,
      mainCategoryId: '55',
      name: '[Sorceress] Angelic Queen Helmet',
    }, {
      id: 340057,
      mainCategoryId: '55',
      name: '[Sorceress] Angelic Queen Shoes',
    }, {
      id: 340059,
      mainCategoryId: '55',
      name: '[Sorceress] Angelic Queen Armor',
    }, {
      id: 340060,
      mainCategoryId: '55',
      name: '[Sorceress] Angelic Queen Outfit Set',
    }, {
      id: 340061,
      mainCategoryId: '55',
      name: '[Tamer] Demonic Queen Helmet',
    }, {
      id: 340062,
      mainCategoryId: '55',
      name: '[Tamer] Demonic Queen Armor',
    }, {
      id: 340063,
      mainCategoryId: '55',
      name: '[Tamer] Demonic Queen Shoes',
    }, {
      id: 340064,
      mainCategoryId: '55',
      name: '[Tamer] Demonic Queen Outfit Set',
    }, {
      id: 340067,
      mainCategoryId: '55',
      name: '[Tamer] Angelic Queen Helmet',
    }, {
      id: 340069,
      mainCategoryId: '55',
      name: '[Tamer] Angelic Queen Shoes',
    }, {
      id: 340072,
      mainCategoryId: '55',
      name: '[Tamer] Angelic Queen Outfit Set',
    }, {
      id: 340073,
      mainCategoryId: '55',
      name: '[Valkyrie] Demonic Queen Helmet',
    }, {
      id: 340074,
      mainCategoryId: '55',
      name: '[Valkyrie] Demonic Queen Armor',
    }, {
      id: 340075,
      mainCategoryId: '55',
      name: '[Valkyrie] Demonic Queen Shoes',
    }, {
      id: 340076,
      mainCategoryId: '55',
      name: '[Valkyrie] Demonic Queen Outfit Set',
    }, {
      id: 340079,
      mainCategoryId: '55',
      name: '[Valkyrie] Angelic Queen Helmet',
    }, {
      id: 340081,
      mainCategoryId: '55',
      name: '[Valkyrie] Angelic Queen Shoes',
    }, {
      id: 340083,
      mainCategoryId: '55',
      name: '[Valkyrie] Angelic Queen Armor',
    }, {
      id: 340084,
      mainCategoryId: '55',
      name: '[Valkyrie] Angelic Queen Outfit Set',
    }, {
      id: 340085,
      mainCategoryId: '55',
      name: '[Maehwa] Demonic Queen Helmet',
    }, {
      id: 340086,
      mainCategoryId: '55',
      name: '[Maehwa] Demonic Queen Armor',
    }, {
      id: 340087,
      mainCategoryId: '55',
      name: '[Maehwa] Demonic Queen Shoes',
    }, {
      id: 340088,
      mainCategoryId: '55',
      name: '[Maehwa] Demonic Queen Outfit Set',
    }, {
      id: 340091,
      mainCategoryId: '55',
      name: '[Maehwa] Angelic Queen Helmet',
    }, {
      id: 340093,
      mainCategoryId: '55',
      name: '[Maehwa] Angelic Queen Shoes',
    }, {
      id: 340095,
      mainCategoryId: '55',
      name: '[Maehwa] Angelic Queen Armor',
    }, {
      id: 340096,
      mainCategoryId: '55',
      name: '[Maehwa] Angelic Queen Outfit Set',
    }, {
      id: 340097,
      mainCategoryId: '55',
      name: '[Kunoichi] Demonic Queen Helmet',
    }, {
      id: 340098,
      mainCategoryId: '55',
      name: '[Kunoichi] Demonic Queen Armor',
    }, {
      id: 340099,
      mainCategoryId: '55',
      name: '[Kunoichi] Demonic Queen Shoes',
    }, {
      id: 340100,
      mainCategoryId: '55',
      name: '[Kunoichi] Demonic Queen Outfit Set',
    }, {
      id: 340103,
      mainCategoryId: '55',
      name: '[Kunoichi] Angelic Queen Helmet',
    }, {
      id: 340107,
      mainCategoryId: '55',
      name: '[Kunoichi] Angelic Queen Armor',
    }, {
      id: 340108,
      mainCategoryId: '55',
      name: '[Kunoichi] Angelic Queen Outfit Set',
    }, {
      id: 340109,
      mainCategoryId: '55',
      name: '[Witch] Demonic Queen Helmet',
    }, {
      id: 340110,
      mainCategoryId: '55',
      name: '[Witch] Demonic Queen Armor',
    }, {
      id: 340111,
      mainCategoryId: '55',
      name: '[Witch] Demonic Queen Shoes',
    }, {
      id: 340112,
      mainCategoryId: '55',
      name: '[Witch] Demonic Queen Outfit Set',
    }, {
      id: 340115,
      mainCategoryId: '55',
      name: '[Witch] Angelic Queen Helmet',
    }, {
      id: 340117,
      mainCategoryId: '55',
      name: '[Witch] Angelic Queen Shoes',
    }, {
      id: 340119,
      mainCategoryId: '55',
      name: '[Witch] Angelic Queen Armor',
    }, {
      id: 340120,
      mainCategoryId: '55',
      name: '[Witch] Angelic Queen Outfit Set',
    }, {
      id: 340121,
      mainCategoryId: '55',
      name: '[Dark Knight] Demonic Queen Helmet',
    }, {
      id: 340122,
      mainCategoryId: '55',
      name: '[Dark Knight] Demonic Queen Armor',
    }, {
      id: 340123,
      mainCategoryId: '55',
      name: '[Dark Knight] Demonic Queen Shoes',
    }, {
      id: 340124,
      mainCategoryId: '55',
      name: '[Dark Knight] Demonic Queen Outfit Set',
    }, {
      id: 340127,
      mainCategoryId: '55',
      name: '[Dark Knight] Angelic Queen Helmet',
    }, {
      id: 340129,
      mainCategoryId: '55',
      name: '[Dark Knight] Angelic Queen Shoes',
    }, {
      id: 340131,
      mainCategoryId: '55',
      name: '[Dark Knight] Angelic Queen Armor',
    }, {
      id: 340132,
      mainCategoryId: '55',
      name: '[Dark Knight] Angelic Queen Outfit Set',
    }, {
      id: 340133,
      mainCategoryId: '55',
      name: '[Mystic] Demonic Queen Helmet',
    }, {
      id: 340134,
      mainCategoryId: '55',
      name: '[Mystic] Demonic Queen Armor',
    }, {
      id: 340135,
      mainCategoryId: '55',
      name: '[Mystic] Demonic Queen Shoes',
    }, {
      id: 340136,
      mainCategoryId: '55',
      name: '[Mystic] Demonic Queen Outfit Set',
    }, {
      id: 340139,
      mainCategoryId: '55',
      name: '[Mystic] Angelic Queen Helmet',
    }, {
      id: 340141,
      mainCategoryId: '55',
      name: '[Mystic] Angelic Queen Shoes',
    }, {
      id: 340143,
      mainCategoryId: '55',
      name: '[Mystic] Angelic Queen Armor',
    }, {
      id: 340144,
      mainCategoryId: '55',
      name: '[Mystic] Angelic Queen Outfit Set',
    }, {
      id: 340352,
      mainCategoryId: '55',
      name: '[Ranger] Floree Headpiece',
    }, {
      id: 340353,
      mainCategoryId: '55',
      name: '[Ranger] Floree Clothes',
    }, {
      id: 340354,
      mainCategoryId: '55',
      name: '[Ranger] Floree Outfit Set',
    }, {
      id: 340355,
      mainCategoryId: '55',
      name: '[Sorceress] Floree Headpiece',
    }, {
      id: 340356,
      mainCategoryId: '55',
      name: '[Sorceress] Floree Clothes',
    }, {
      id: 340357,
      mainCategoryId: '55',
      name: '[Sorceress] Floree Outfit Set',
    }, {
      id: 340358,
      mainCategoryId: '55',
      name: '[Tamer] Floree Headpiece',
    }, {
      id: 340359,
      mainCategoryId: '55',
      name: '[Tamer] Floree Clothes',
    }, {
      id: 340360,
      mainCategoryId: '55',
      name: '[Tamer] Floree Outfit Set',
    }, {
      id: 340361,
      mainCategoryId: '55',
      name: '[Valkyrie] Floree Headpiece',
    }, {
      id: 340362,
      mainCategoryId: '55',
      name: '[Valkyrie] Floree Clothes',
    }, {
      id: 340363,
      mainCategoryId: '55',
      name: '[Valkyrie] Floree Outfit Set',
    }, {
      id: 340364,
      mainCategoryId: '55',
      name: '[Maehwa] Floree Headpiece',
    }, {
      id: 340365,
      mainCategoryId: '55',
      name: '[Maehwa] Floree Clothes',
    }, {
      id: 340366,
      mainCategoryId: '55',
      name: '[Maehwa] Floree Outfit Set',
    }, {
      id: 340367,
      mainCategoryId: '55',
      name: '[Witch] Floree Headpiece',
    }, {
      id: 340368,
      mainCategoryId: '55',
      name: '[Witch] Floree Clothes',
    }, {
      id: 340369,
      mainCategoryId: '55',
      name: '[Witch] Floree Outfit Set',
    }, {
      id: 340370,
      mainCategoryId: '55',
      name: '[Kunoichi] Floree Headpiece',
    }, {
      id: 340371,
      mainCategoryId: '55',
      name: '[Kunoichi] Floree Clothes',
    }, {
      id: 340372,
      mainCategoryId: '55',
      name: '[Kunoichi] Floree Outfit Set',
    }, {
      id: 340373,
      mainCategoryId: '55',
      name: '[Dark Knight] Floree Headpiece',
    }, {
      id: 340374,
      mainCategoryId: '55',
      name: '[Dark Knight] Floree Clothes',
    }, {
      id: 340375,
      mainCategoryId: '55',
      name: '[Dark Knight] Floree Outfit Set',
    }, {
      id: 340376,
      mainCategoryId: '55',
      name: '[Mystic] Floree Headpiece',
    }, {
      id: 340377,
      mainCategoryId: '55',
      name: '[Mystic] Floree Clothes',
    }, {
      id: 340378,
      mainCategoryId: '55',
      name: '[Mystic] Floree Outfit Set',
    }, {
      id: 340379,
      mainCategoryId: '55',
      name: '[Lahn] Floree Headpiece',
    }, {
      id: 340380,
      mainCategoryId: '55',
      name: '[Lahn] Floree Clothes',
    }, {
      id: 340381,
      mainCategoryId: '55',
      name: '[Lahn] Floree Outfit Set',
    }, {
      id: 340382,
      mainCategoryId: '55',
      name: '[Warrior] Yianaros Headpiece',
    }, {
      id: 340383,
      mainCategoryId: '55',
      name: '[Ranger] Yianaros Headpiece',
    }, {
      id: 340384,
      mainCategoryId: '55',
      name: '[Sorceress] Yianaros Headpiece',
    }, {
      id: 340385,
      mainCategoryId: '55',
      name: '[Berserker] Yianaros Headpiece',
    }, {
      id: 340386,
      mainCategoryId: '55',
      name: '[Tamer] Yianaros Headpiece',
    }, {
      id: 340387,
      mainCategoryId: '55',
      name: '[Musa] Yianaros Headpiece',
    }, {
      id: 340388,
      mainCategoryId: '55',
      name: '[Valkyrie] Yianaros Headpiece',
    }, {
      id: 340389,
      mainCategoryId: '55',
      name: '[Maehwa] Yianaros Headpiece',
    }, {
      id: 340390,
      mainCategoryId: '55',
      name: '[Wizard] Yianaros Headpiece',
    }, {
      id: 340391,
      mainCategoryId: '55',
      name: '[Witch] Yianaros Headpiece',
    }, {
      id: 340392,
      mainCategoryId: '55',
      name: '[Kunoichi] Yianaros Headpiece',
    }, {
      id: 340393,
      mainCategoryId: '55',
      name: '[Ninja] Yianaros Headpiece',
    }, {
      id: 340394,
      mainCategoryId: '55',
      name: '[Dark Knight] Yianaros Headpiece',
    }, {
      id: 340395,
      mainCategoryId: '55',
      name: '[Striker] Yianaros Headpiece',
    }, {
      id: 340396,
      mainCategoryId: '55',
      name: '[Mystic] Yianaros Headpiece',
    }, {
      id: 340397,
      mainCategoryId: '55',
      name: '[Lahn] Yianaros Headpiece',
    }, {
      id: 340510,
      mainCategoryId: '55',
      name: '[Ranger] Valoren Helmet',
    }, {
      id: 340511,
      mainCategoryId: '55',
      name: '[Ranger] Valoren Armor',
    }, {
      id: 340512,
      mainCategoryId: '55',
      name: '[Ranger] Valoren Outfit Set',
    }, {
      id: 340513,
      mainCategoryId: '55',
      name: '[Sorceress] Valoren Helmet',
    }, {
      id: 340514,
      mainCategoryId: '55',
      name: '[Sorceress] Valoren Armor',
    }, {
      id: 340515,
      mainCategoryId: '55',
      name: '[Sorceress] Valoren Outfit Set',
    }, {
      id: 340516,
      mainCategoryId: '55',
      name: '[Tamer] Valoren Helmet',
    }, {
      id: 340517,
      mainCategoryId: '55',
      name: '[Tamer] Valoren Armor',
    }, {
      id: 340518,
      mainCategoryId: '55',
      name: '[Tamer] Valoren Outfit Set',
    }, {
      id: 340519,
      mainCategoryId: '55',
      name: '[Valkyrie] Valoren Helmet',
    }, {
      id: 340520,
      mainCategoryId: '55',
      name: '[Valkyrie] Valoren Armor',
    }, {
      id: 340521,
      mainCategoryId: '55',
      name: '[Valkyrie] Valoren Outfit Set',
    }, {
      id: 340522,
      mainCategoryId: '55',
      name: '[Maehwa] Valoren Helmet',
    }, {
      id: 340523,
      mainCategoryId: '55',
      name: '[Maehwa] Valoren Armor',
    }, {
      id: 340524,
      mainCategoryId: '55',
      name: '[Maehwa] Valoren Outfit Set',
    }, {
      id: 340525,
      mainCategoryId: '55',
      name: '[Witch] Valoren Helmet',
    }, {
      id: 340526,
      mainCategoryId: '55',
      name: '[Witch] Valoren Armor',
    }, {
      id: 340527,
      mainCategoryId: '55',
      name: '[Witch] Valoren Outfit Set',
    }, {
      id: 340528,
      mainCategoryId: '55',
      name: '[Kunoichi] Valoren Helmet',
    }, {
      id: 340529,
      mainCategoryId: '55',
      name: '[Kunoichi] Valoren Armor',
    }, {
      id: 340530,
      mainCategoryId: '55',
      name: '[Kunoichi] Valoren Outfit Set',
    }, {
      id: 340531,
      mainCategoryId: '55',
      name: '[Dark Knight] Valoren Helmet',
    }, {
      id: 340532,
      mainCategoryId: '55',
      name: '[Dark Knight] Valoren Armor',
    }, {
      id: 340533,
      mainCategoryId: '55',
      name: '[Dark Knight] Valoren Outfit Set',
    }, {
      id: 340534,
      mainCategoryId: '55',
      name: '[Mystic] Valoren Helmet',
    }, {
      id: 340535,
      mainCategoryId: '55',
      name: '[Mystic] Valoren Armor',
    }, {
      id: 340536,
      mainCategoryId: '55',
      name: '[Mystic] Valoren Outfit Set',
    }, {
      id: 340537,
      mainCategoryId: '55',
      name: '[Lahn] Valoren Helmet',
    }, {
      id: 340538,
      mainCategoryId: '55',
      name: '[Lahn] Valoren Armor',
    }, {
      id: 340539,
      mainCategoryId: '55',
      name: '[Lahn] Valoren Outfit Set',
    }, {
      id: 340611,
      mainCategoryId: '55',
      name: '[Ranger] Vespena Helmet',
    }, {
      id: 340612,
      mainCategoryId: '55',
      name: '[Ranger] Vespena Armor',
    }, {
      id: 340613,
      mainCategoryId: '55',
      name: '[Ranger] Vespena Outfit Set',
    }, {
      id: 340614,
      mainCategoryId: '55',
      name: '[Sorceress] Vespena Helmet',
    }, {
      id: 340615,
      mainCategoryId: '55',
      name: '[Sorceress] Vespena Armor',
    }, {
      id: 340616,
      mainCategoryId: '55',
      name: '[Sorceress] Vespena Outfit Set',
    }, {
      id: 340617,
      mainCategoryId: '55',
      name: '[Tamer] Vespena Helmet',
    }, {
      id: 340618,
      mainCategoryId: '55',
      name: '[Tamer] Vespena Armor',
    }, {
      id: 340619,
      mainCategoryId: '55',
      name: '[Tamer] Vespena Outfit Set',
    }, {
      id: 340620,
      mainCategoryId: '55',
      name: '[Valkyrie] Vespena Helmet',
    }, {
      id: 340621,
      mainCategoryId: '55',
      name: '[Valkyrie] Vespena Armor',
    }, {
      id: 340622,
      mainCategoryId: '55',
      name: '[Valkyrie] Vespena Outfit Set',
    }, {
      id: 340623,
      mainCategoryId: '55',
      name: '[Maehwa] Vespena Helmet',
    }, {
      id: 340624,
      mainCategoryId: '55',
      name: '[Maehwa] Vespena Armor',
    }, {
      id: 340625,
      mainCategoryId: '55',
      name: '[Maehwa] Vespena Outfit Set',
    }, {
      id: 340626,
      mainCategoryId: '55',
      name: '[Witch] Vespena Helmet',
    }, {
      id: 340627,
      mainCategoryId: '55',
      name: '[Witch] Vespena Armor',
    }, {
      id: 340628,
      mainCategoryId: '55',
      name: '[Witch] Vespena Outfit Set',
    }, {
      id: 340629,
      mainCategoryId: '55',
      name: '[Kunoichi] Vespena Helmet',
    }, {
      id: 340630,
      mainCategoryId: '55',
      name: '[Kunoichi] Vespena Armor',
    }, {
      id: 340631,
      mainCategoryId: '55',
      name: '[Kunoichi] Vespena Outfit Set',
    }, {
      id: 340632,
      mainCategoryId: '55',
      name: '[Dark Knight] Vespena Helmet',
    }, {
      id: 340633,
      mainCategoryId: '55',
      name: '[Dark Knight] Vespena Armor',
    }, {
      id: 340634,
      mainCategoryId: '55',
      name: '[Dark Knight] Vespena Outfit Set',
    }, {
      id: 340635,
      mainCategoryId: '55',
      name: '[Mystic] Vespena Helmet',
    }, {
      id: 340636,
      mainCategoryId: '55',
      name: '[Mystic] Vespena Armor',
    }, {
      id: 340637,
      mainCategoryId: '55',
      name: '[Mystic] Vespena Outfit Set',
    }, {
      id: 340638,
      mainCategoryId: '55',
      name: '[Lahn] Vespena Helmet',
    }, {
      id: 340639,
      mainCategoryId: '55',
      name: '[Lahn] Vespena Armor',
    }, {
      id: 340640,
      mainCategoryId: '55',
      name: '[Lahn] Vespena Outfit Set',
    }, {
      id: 340644,
      mainCategoryId: '55',
      name: '[Ranger] Arethel Headpiece',
    }, {
      id: 340645,
      mainCategoryId: '55',
      name: '[Ranger] Arethel Dress',
    }, {
      id: 340647,
      mainCategoryId: '55',
      name: '[Ranger] Arethel Outfit Set',
    }, {
      id: 340660,
      mainCategoryId: '55',
      name: '[Ranger] Lychnia Headpiece',
    }, {
      id: 340661,
      mainCategoryId: '55',
      name: '[Sorceress] Lychnia Headpiece',
    }, {
      id: 340662,
      mainCategoryId: '55',
      name: '[Tamer] Lychnia Headpiece',
    }, {
      id: 340663,
      mainCategoryId: '55',
      name: '[Valkyrie] Lychnia Headpiece',
    }, {
      id: 340664,
      mainCategoryId: '55',
      name: '[Maehwa] Lychnia Headpiece',
    }, {
      id: 340665,
      mainCategoryId: '55',
      name: '[Witch] Lychnia Headpiece',
    }, {
      id: 340666,
      mainCategoryId: '55',
      name: '[Kunoichi] Lychnia Headpiece',
    }, {
      id: 340667,
      mainCategoryId: '55',
      name: '[Dark Knight] Lychnia Headpiece',
    }, {
      id: 340668,
      mainCategoryId: '55',
      name: '[Mystic] Lychnia Headpiece',
    }, {
      id: 340669,
      mainCategoryId: '55',
      name: '[Lahn] Lychnia Headpiece',
    }, {
      id: 400001,
      mainCategoryId: '55',
      name: '[Warrior] Durandal Helmet',
    }, {
      id: 400002,
      mainCategoryId: '55',
      name: '[Warrior] Durandal Armor',
    }, {
      id: 400003,
      mainCategoryId: '55',
      name: '[Warrior] Durandal Outfit Set',
    }, {
      id: 400010,
      mainCategoryId: '55',
      name: '[Warrior] Leonidas Helmet',
    }, {
      id: 400011,
      mainCategoryId: '55',
      name: '[Warrior] Leonidas Armor',
    }, {
      id: 400012,
      mainCategoryId: '55',
      name: '[Warrior] Leonidas Outfit Set',
    }, {
      id: 400021,
      mainCategoryId: '55',
      name: '[Warrior] Arctic Fang Helmet',
    }, {
      id: 400022,
      mainCategoryId: '55',
      name: '[Warrior] Arctic Fang Armor',
    }, {
      id: 400023,
      mainCategoryId: '55',
      name: '[Warrior] Arctic Fang Outfit Set',
    }, {
      id: 400024,
      mainCategoryId: '55',
      name: '[Warrior] Vestillio Helmet',
    }, {
      id: 400025,
      mainCategoryId: '55',
      name: '[Warrior] Vestillio Armor',
    }, {
      id: 400026,
      mainCategoryId: '55',
      name: '[Warrior] Vestillio Outfit Set',
    }, {
      id: 410011,
      mainCategoryId: '55',
      name: '[Ranger] Blanchard Headpiece',
    }, {
      id: 410012,
      mainCategoryId: '55',
      name: '[Ranger] Blanchard Gloves',
    }, {
      id: 410013,
      mainCategoryId: '55',
      name: '[Ranger] Blanchard Shoes',
    }, {
      id: 410015,
      mainCategoryId: '55',
      name: '[Ranger] Rosa De Sharon Headpiece',
    }, {
      id: 410016,
      mainCategoryId: '55',
      name: '[Ranger] Rosa De Sharon Clothes',
    }, {
      id: 410017,
      mainCategoryId: '55',
      name: '[Ranger] Rosa De Sharon Shoes',
    }, {
      id: 410018,
      mainCategoryId: '55',
      name: '[Ranger] Rosa De Sharon Outfit Set',
    }, {
      id: 420007,
      mainCategoryId: '55',
      name: '[Sorceress] Fallen Garzar Helmet',
    }, {
      id: 420008,
      mainCategoryId: '55',
      name: '[Sorceress] Fallen Garzar Armor',
    }, {
      id: 420009,
      mainCategoryId: '55',
      name: '[Sorceress] Fallen Garzar Shoes',
    }, {
      id: 420010,
      mainCategoryId: '55',
      name: '[Sorceress] Fallen Garzar Talisman',
    }, {
      id: 420011,
      mainCategoryId: '55',
      name: '[Sorceress] Fallen Garzar Amulet',
    }, {
      id: 420012,
      mainCategoryId: '55',
      name: '[Sorceress] Fallen Garzar Scythe',
    }, {
      id: 420013,
      mainCategoryId: '55',
      name: '[Sorceress] Fallen Garzar Classic Set',
    }, {
      id: 420014,
      mainCategoryId: '55',
      name: '[Sorceress] Fallen Garzar Premium Set',
    }, {
      id: 420027,
      mainCategoryId: '55',
      name: '[Sorceress] Blanchard Headpiece',
    }, {
      id: 420028,
      mainCategoryId: '55',
      name: '[Sorceress] Blanchard Gloves',
    }, {
      id: 420029,
      mainCategoryId: '55',
      name: '[Sorceress] Blanchard Shoes',
    }, {
      id: 420031,
      mainCategoryId: '55',
      name: '[Sorceress] Rosa De Sharon Headpiece',
    }, {
      id: 420032,
      mainCategoryId: '55',
      name: '[Sorceress] Rosa De Sharon Clothes',
    }, {
      id: 420033,
      mainCategoryId: '55',
      name: '[Sorceress] Rosa De Sharon Shoes',
    }, {
      id: 420034,
      mainCategoryId: '55',
      name: '[Sorceress] Rosa De Sharon Outfit Set',
    }, {
      id: 420042,
      mainCategoryId: '55',
      name: '[Sorceress] Dahlia Nocturna Headpiece',
    }, {
      id: 420043,
      mainCategoryId: '55',
      name: '[Sorceress] Dahlia Nocturna Armor',
    }, {
      id: 420044,
      mainCategoryId: '55',
      name: '[Sorceress] Dahlia Nocturna Shoes',
    }, {
      id: 420045,
      mainCategoryId: '55',
      name: '[Sorceress] Dahlia Nocturna Outfit Set',
    }, {
      id: 430001,
      mainCategoryId: '55',
      name: '[Berserker] Durandal Helmet',
    }, {
      id: 430002,
      mainCategoryId: '55',
      name: '[Berserker] Durandal Armor',
    }, {
      id: 430003,
      mainCategoryId: '55',
      name: '[Berserker] Durandal Outfit Set',
    }, {
      id: 430004,
      mainCategoryId: '55',
      name: '[Berserker] Jungle Beast Helmet',
    }, {
      id: 430005,
      mainCategoryId: '55',
      name: '[Berserker] Jungle Beast Armor',
    }, {
      id: 430006,
      mainCategoryId: '55',
      name: '[Berserker] Jungle Beast Axe',
    }, {
      id: 430007,
      mainCategoryId: '55',
      name: '[Berserker] Jungle Beast Ornamental Knot',
    }, {
      id: 430008,
      mainCategoryId: '55',
      name: '[Berserker] Jungle Beast Classic Set',
    }, {
      id: 430015,
      mainCategoryId: '55',
      name: '[Berserker] Leonidas Helmet',
    }, {
      id: 430016,
      mainCategoryId: '55',
      name: '[Berserker] Leonidas Armor',
    }, {
      id: 430017,
      mainCategoryId: '55',
      name: '[Berserker] Leonidas Outfit Set',
    }, {
      id: 430026,
      mainCategoryId: '55',
      name: '[Berserker] Arctic Fang Helmet',
    }, {
      id: 430027,
      mainCategoryId: '55',
      name: '[Berserker] Arctic Fang Armor',
    }, {
      id: 430028,
      mainCategoryId: '55',
      name: '[Berserker] Arctic Fang Outfit Set',
    }, {
      id: 430029,
      mainCategoryId: '55',
      name: '[Berserker] Vestillio Helmet',
    }, {
      id: 430030,
      mainCategoryId: '55',
      name: '[Berserker] Vestillio Armor',
    }, {
      id: 430031,
      mainCategoryId: '55',
      name: '[Berserker] Vestillio Outfit Set',
    }, {
      id: 440011,
      mainCategoryId: '55',
      name: '[Tamer] Blanchard Headpiece',
    }, {
      id: 440012,
      mainCategoryId: '55',
      name: '[Tamer] Blanchard Gloves',
    }, {
      id: 440013,
      mainCategoryId: '55',
      name: '[Tamer] Blanchard Shoes',
    }, {
      id: 440015,
      mainCategoryId: '55',
      name: '[Tamer] Rosa De Sharon Headpiece',
    }, {
      id: 440016,
      mainCategoryId: '55',
      name: '[Tamer] Rosa De Sharon Clothes',
    }, {
      id: 440017,
      mainCategoryId: '55',
      name: '[Tamer] Rosa De Sharon Shoes',
    }, {
      id: 440018,
      mainCategoryId: '55',
      name: '[Tamer] Rosa De Sharon Outfit Set',
    }, {
      id: 440026,
      mainCategoryId: '55',
      name: '[Tamer] Aran Headpiece',
    }, {
      id: 440027,
      mainCategoryId: '55',
      name: '[Tamer] Aran Clothes',
    }, {
      id: 440028,
      mainCategoryId: '55',
      name: '[Tamer] Aran Gloves',
    }, {
      id: 440029,
      mainCategoryId: '55',
      name: '[Tamer] Aran Shoes',
    }, {
      id: 440030,
      mainCategoryId: '55',
      name: '[Tamer] Aran Outfit Set',
    }, {
      id: 440031,
      mainCategoryId: '55',
      name: '[Tamer] Golden Phoenix Headpiece',
    }, {
      id: 440032,
      mainCategoryId: '55',
      name: '[Tamer] Golden Phoenix Clothes',
    }, {
      id: 440033,
      mainCategoryId: '55',
      name: '[Tamer] Golden Phoenix Gloves',
    }, {
      id: 440034,
      mainCategoryId: '55',
      name: '[Tamer] Golden Phoenix Shoes',
    }, {
      id: 440035,
      mainCategoryId: '55',
      name: '[Tamer] Golden Phoenix Outfit Set',
    }, {
      id: 450001,
      mainCategoryId: '55',
      name: '[Musa] Demon Binder Headband',
    }, {
      id: 450002,
      mainCategoryId: '55',
      name: '[Musa] Demon Binder Armor',
    }, {
      id: 450003,
      mainCategoryId: '55',
      name: '[Musa] Demon Binder Outfit Set',
    }, {
      id: 450004,
      mainCategoryId: '55',
      name: '[Musa] Durandal Helmet',
    }, {
      id: 450005,
      mainCategoryId: '55',
      name: '[Musa] Durandal Armor',
    }, {
      id: 450006,
      mainCategoryId: '55',
      name: '[Musa] Durandal Outfit Set',
    }, {
      id: 450013,
      mainCategoryId: '55',
      name: '[Musa] Leonidas Helmet',
    }, {
      id: 450014,
      mainCategoryId: '55',
      name: '[Musa] Leonidas Armor',
    }, {
      id: 450015,
      mainCategoryId: '55',
      name: '[Musa] Leonidas Outfit Set',
    }, {
      id: 450024,
      mainCategoryId: '55',
      name: '[Musa] Arctic Fang Helmet',
    }, {
      id: 450025,
      mainCategoryId: '55',
      name: '[Musa] Arctic Fang Armor',
    }, {
      id: 450026,
      mainCategoryId: '55',
      name: '[Musa] Arctic Fang Outfit Set',
    }, {
      id: 450027,
      mainCategoryId: '55',
      name: '[Musa] Vestillio Helmet',
    }, {
      id: 450028,
      mainCategoryId: '55',
      name: '[Musa] Vestillio Armor',
    }, {
      id: 450029,
      mainCategoryId: '55',
      name: '[Musa] Vestillio Outfit Set',
    }, {
      id: 450033,
      mainCategoryId: '55',
      name: '[Musa] Ambition Helmet',
    }, {
      id: 450035,
      mainCategoryId: '55',
      name: '[Musa] Ambition Outfit Set',
    }, {
      id: 460015,
      mainCategoryId: '55',
      name: '[Valkyrie] Blanchard Headpiece',
    }, {
      id: 460016,
      mainCategoryId: '55',
      name: '[Valkyrie] Blanchard Gloves',
    }, {
      id: 460017,
      mainCategoryId: '55',
      name: '[Valkyrie] Blanchard Shoes',
    }, {
      id: 460019,
      mainCategoryId: '55',
      name: '[Valkyrie] Rosa De Sharon Headpiece',
    }, {
      id: 460020,
      mainCategoryId: '55',
      name: '[Valkyrie] Rosa De Sharon Clothes',
    }, {
      id: 460021,
      mainCategoryId: '55',
      name: '[Valkyrie] Rosa De Sharon Shoes',
    }, {
      id: 460022,
      mainCategoryId: '55',
      name: '[Valkyrie] Rosa De Sharon Outfit Set',
    }, {
      id: 470001,
      mainCategoryId: '55',
      name: '[Maehwa] Rakshande Helmet',
    }, {
      id: 470002,
      mainCategoryId: '55',
      name: '[Maehwa] Rakshande Armor',
    }, {
      id: 470003,
      mainCategoryId: '55',
      name: '[Maehwa] Rakshande Shoes',
    }, {
      id: 470004,
      mainCategoryId: '55',
      name: '[Maehwa] Rakshande Blade',
    }, {
      id: 470005,
      mainCategoryId: '55',
      name: '[Maehwa] Rakshande Horn Bow',
    }, {
      id: 470006,
      mainCategoryId: '55',
      name: '[Maehwa] Rakshande Kerispear',
    }, {
      id: 470007,
      mainCategoryId: '55',
      name: '[Maehwa] Rakshande Classic Set',
    }, {
      id: 470008,
      mainCategoryId: '55',
      name: '[Maehwa] Rakshande Premium Set',
    }, {
      id: 470010,
      mainCategoryId: '55',
      name: '[Maehwa] Lucien Blanc Helmet',
    }, {
      id: 470011,
      mainCategoryId: '55',
      name: '[Maehwa] Lucien Blanc Armor',
    }, {
      id: 470012,
      mainCategoryId: '55',
      name: '[Maehwa] Lucien Blanc Shoes',
    }, {
      id: 470013,
      mainCategoryId: '55',
      name: '[Maehwa] Lucien Blanc Blade',
    }, {
      id: 470014,
      mainCategoryId: '55',
      name: '[Maehwa] Lucien Blanc Horn Bow',
    }, {
      id: 470015,
      mainCategoryId: '55',
      name: '[Maehwa] Lucien Blanc Kerispear',
    }, {
      id: 470017,
      mainCategoryId: '55',
      name: '[Maehwa] Lucien Blanc Premium Set',
    }, {
      id: 470029,
      mainCategoryId: '55',
      name: '[Maehwa] Blanchard Headpiece',
    }, {
      id: 470030,
      mainCategoryId: '55',
      name: '[Maehwa] Blanchard Gloves',
    }, {
      id: 470031,
      mainCategoryId: '55',
      name: '[Maehwa] Blanchard Shoes',
    }, {
      id: 470033,
      mainCategoryId: '55',
      name: '[Maehwa] Rosa De Sharon Headpiece',
    }, {
      id: 470034,
      mainCategoryId: '55',
      name: '[Maehwa] Rosa De Sharon Clothes',
    }, {
      id: 470035,
      mainCategoryId: '55',
      name: '[Maehwa] Rosa De Sharon Shoes',
    }, {
      id: 470036,
      mainCategoryId: '55',
      name: '[Maehwa] Rosa De Sharon Outfit Set',
    }, {
      id: 470044,
      mainCategoryId: '55',
      name: '[Maehwa] Orient Allure Headpiece',
    }, {
      id: 470045,
      mainCategoryId: '55',
      name: '[Maehwa] Orient Allure Clothes',
    }, {
      id: 470047,
      mainCategoryId: '55',
      name: '[Maehwa] Orient Allure Outfit Set',
    }, {
      id: 480001,
      mainCategoryId: '55',
      name: '[Wizard] Zeroth Helmet',
    }, {
      id: 480002,
      mainCategoryId: '55',
      name: '[Wizard] Zeroth Armor',
    }, {
      id: 480003,
      mainCategoryId: '55',
      name: '[Wizard] Zeroth Outfit Set',
    }, {
      id: 480004,
      mainCategoryId: '55',
      name: '[Wizard] Durandal Helmet',
    }, {
      id: 480005,
      mainCategoryId: '55',
      name: '[Wizard] Durandal Armor',
    }, {
      id: 480006,
      mainCategoryId: '55',
      name: '[Wizard] Durandal Outfit Set',
    }, {
      id: 480013,
      mainCategoryId: '55',
      name: '[Wizard] Leonidas Helmet',
    }, {
      id: 480014,
      mainCategoryId: '55',
      name: '[Wizard] Leonidas Armor',
    }, {
      id: 480015,
      mainCategoryId: '55',
      name: '[Wizard] Leonidas Outfit Set',
    }, {
      id: 480024,
      mainCategoryId: '55',
      name: '[Wizard] Arctic Fang Helmet',
    }, {
      id: 480025,
      mainCategoryId: '55',
      name: '[Wizard] Arctic Fang Armor',
    }, {
      id: 480026,
      mainCategoryId: '55',
      name: '[Wizard] Arctic Fang Outfit Set',
    }, {
      id: 480027,
      mainCategoryId: '55',
      name: '[Wizard] Vestillio Helmet',
    }, {
      id: 480028,
      mainCategoryId: '55',
      name: '[Wizard] Vestillio Armor',
    }, {
      id: 480029,
      mainCategoryId: '55',
      name: '[Wizard] Vestillio Outfit Set',
    }, {
      id: 490011,
      mainCategoryId: '55',
      name: '[Witch] Blanchard Headpiece',
    }, {
      id: 490012,
      mainCategoryId: '55',
      name: '[Witch] Blanchard Gloves',
    }, {
      id: 490013,
      mainCategoryId: '55',
      name: '[Witch] Blanchard Shoes',
    }, {
      id: 490015,
      mainCategoryId: '55',
      name: '[Witch] Rosa De Sharon Headpiece',
    }, {
      id: 490016,
      mainCategoryId: '55',
      name: '[Witch] Rosa De Sharon Clothes',
    }, {
      id: 490017,
      mainCategoryId: '55',
      name: '[Witch] Rosa De Sharon Shoes',
    }, {
      id: 490018,
      mainCategoryId: '55',
      name: '[Witch] Rosa De Sharon Outfit Set',
    }, {
      id: 500001,
      mainCategoryId: '55',
      name: '[Kunoichi] Kitsune Helmet',
    }, {
      id: 500002,
      mainCategoryId: '55',
      name: '[Kunoichi] Kitsune Armor',
    }, {
      id: 500003,
      mainCategoryId: '55',
      name: '[Kunoichi] Kitsune Gloves',
    }, {
      id: 500004,
      mainCategoryId: '55',
      name: '[Kunoichi] Kitsune Shoes',
    }, {
      id: 500005,
      mainCategoryId: '55',
      name: '[Kunoichi] Kitsune Outfit Set',
    }, {
      id: 500016,
      mainCategoryId: '55',
      name: '[Kunoichi] Blanchard Headpiece',
    }, {
      id: 500017,
      mainCategoryId: '55',
      name: '[Kunoichi] Blanchard Gloves',
    }, {
      id: 500018,
      mainCategoryId: '55',
      name: '[Kunoichi] Blanchard Shoes',
    }, {
      id: 500020,
      mainCategoryId: '55',
      name: '[Kunoichi] Rosa De Sharon Headpiece',
    }, {
      id: 500021,
      mainCategoryId: '55',
      name: '[Kunoichi] Rosa De Sharon Clothes',
    }, {
      id: 500022,
      mainCategoryId: '55',
      name: '[Kunoichi] Rosa De Sharon Shoes',
    }, {
      id: 500023,
      mainCategoryId: '55',
      name: '[Kunoichi] Rosa De Sharon Outfit Set',
    }, {
      id: 510001,
      mainCategoryId: '55',
      name: '[Ninja] Willow Breeze Robe',
    }, {
      id: 510002,
      mainCategoryId: '55',
      name: '[Ninja] Willow Breeze Shoes',
    }, {
      id: 510003,
      mainCategoryId: '55',
      name: '[Ninja] Nouse\'s Shard Helmet',
    }, {
      id: 510004,
      mainCategoryId: '55',
      name: '[Ninja] Nouse\'s Shard Armor',
    }, {
      id: 510005,
      mainCategoryId: '55',
      name: '[Ninja] Nouse\'s Shard Shortsword',
    }, {
      id: 510006,
      mainCategoryId: '55',
      name: '[Ninja] Nouse\'s Shard Kunai',
    }, {
      id: 510007,
      mainCategoryId: '55',
      name: '[Ninja] Nouse\'s Shard Sura Katana',
    }, {
      id: 510008,
      mainCategoryId: '55',
      name: '[Ninja] Nouse\'s Shard Classic Set',
    }, {
      id: 510009,
      mainCategoryId: '55',
      name: '[Ninja] Nouse\'s Shard Premium Set',
    }, {
      id: 510011,
      mainCategoryId: '55',
      name: '[Ninja] Durandal Helmet',
    }, {
      id: 510012,
      mainCategoryId: '55',
      name: '[Ninja] Durandal Armor',
    }, {
      id: 510013,
      mainCategoryId: '55',
      name: '[Ninja] Durandal Outfit Set',
    }, {
      id: 510021,
      mainCategoryId: '55',
      name: '[Ninja] Leonidas Helmet',
    }, {
      id: 510022,
      mainCategoryId: '55',
      name: '[Ninja] Leonidas Armor',
    }, {
      id: 510023,
      mainCategoryId: '55',
      name: '[Ninja] Leonidas Outfit Set',
    }, {
      id: 510032,
      mainCategoryId: '55',
      name: '[Ninja] Arctic Fang Helmet',
    }, {
      id: 510033,
      mainCategoryId: '55',
      name: '[Ninja] Arctic Fang Armor',
    }, {
      id: 510034,
      mainCategoryId: '55',
      name: '[Ninja] Arctic Fang Outfit Set',
    }, {
      id: 510035,
      mainCategoryId: '55',
      name: '[Ninja] Vestillio Helmet',
    }, {
      id: 510036,
      mainCategoryId: '55',
      name: '[Ninja] Vestillio Armor',
    }, {
      id: 510037,
      mainCategoryId: '55',
      name: '[Ninja] Vestillio Outfit Set',
    }, {
      id: 520001,
      mainCategoryId: '55',
      name: '[Dark Knight] Stella Helmet',
    }, {
      id: 520002,
      mainCategoryId: '55',
      name: '[Dark Knight] Stella Armor',
    }, {
      id: 520003,
      mainCategoryId: '55',
      name: '[Dark Knight] Stella Shoes',
    }, {
      id: 520004,
      mainCategoryId: '55',
      name: '[Dark Knight] Stella Kriegsmesser',
    }, {
      id: 520005,
      mainCategoryId: '55',
      name: '[Dark Knight] Stella Ornamental Knot',
    }, {
      id: 520006,
      mainCategoryId: '55',
      name: '[Dark Knight] Stella Vediant',
    }, {
      id: 520007,
      mainCategoryId: '55',
      name: '[Dark Knight] Stella Classic Set',
    }, {
      id: 520008,
      mainCategoryId: '55',
      name: '[Dark Knight] Stella Premium Set',
    }, {
      id: 520010,
      mainCategoryId: '55',
      name: '[Dark Knight] Noel Hat',
    }, {
      id: 520011,
      mainCategoryId: '55',
      name: '[Dark Knight] Noel Clothes',
    }, {
      id: 520012,
      mainCategoryId: '55',
      name: '[Dark Knight] Noel Shoes',
    }, {
      id: 520013,
      mainCategoryId: '55',
      name: '[Dark Knight] Noel Outfit Set',
    }, {
      id: 520024,
      mainCategoryId: '55',
      name: '[Dark Knight] Blanchard Headpiece',
    }, {
      id: 520025,
      mainCategoryId: '55',
      name: '[Dark Knight] Blanchard Gloves',
    }, {
      id: 520026,
      mainCategoryId: '55',
      name: '[Dark Knight] Blanchard Shoes',
    }, {
      id: 520028,
      mainCategoryId: '55',
      name: '[Dark Knight] Rosa De Sharon Headpiece',
    }, {
      id: 520029,
      mainCategoryId: '55',
      name: '[Dark Knight] Rosa De Sharon Clothes',
    }, {
      id: 520030,
      mainCategoryId: '55',
      name: '[Dark Knight] Rosa De Sharon Shoes',
    }, {
      id: 520031,
      mainCategoryId: '55',
      name: '[Dark Knight] Rosa De Sharon Outfit Set',
    }, {
      id: 520036,
      mainCategoryId: '55',
      name: '[Dark Knight] Bloody Dress',
    }, {
      id: 520037,
      mainCategoryId: '55',
      name: '[Dark Knight] Bloody Gloves',
    }, {
      id: 520038,
      mainCategoryId: '55',
      name: '[Dark Knight] Bloody Shoes',
    }, {
      id: 520039,
      mainCategoryId: '55',
      name: '[Dark Knight] Bloody Outfit Set',
    }, {
      id: 520043,
      mainCategoryId: '55',
      name: '[Dark Knight] Arethel Headpiece',
    }, {
      id: 520044,
      mainCategoryId: '55',
      name: '[Dark Knight] Arethel Dress',
    }, {
      id: 520045,
      mainCategoryId: '55',
      name: '[Dark Knight] Arethel Outfit Set',
    }, {
      id: 530001,
      mainCategoryId: '55',
      name: '[Striker] Kibelius Helmet',
    }, {
      id: 530002,
      mainCategoryId: '55',
      name: '[Striker] Kibelius Divinus Armor',
    }, {
      id: 530003,
      mainCategoryId: '55',
      name: '[Striker] Kibelius Shoes',
    }, {
      id: 530004,
      mainCategoryId: '55',
      name: '[Striker] Kibelius Gauntlet',
    }, {
      id: 530005,
      mainCategoryId: '55',
      name: '[Striker] Kibelius Vambrace',
    }, {
      id: 530006,
      mainCategoryId: '55',
      name: '[Striker] Kibelius Gardbrace',
    }, {
      id: 530007,
      mainCategoryId: '55',
      name: '[Striker] Kibelius Divinus Classic Set',
    }, {
      id: 530009,
      mainCategoryId: '55',
      name: '[Striker] Lahr Arcien Helmet',
    }, {
      id: 530010,
      mainCategoryId: '55',
      name: '[Striker] Lahr Arcien Armor',
    }, {
      id: 530011,
      mainCategoryId: '55',
      name: '[Striker] Lahr Arcien Shoes',
    }, {
      id: 530012,
      mainCategoryId: '55',
      name: '[Striker] Lahr Arcien Gauntlet',
    }, {
      id: 530013,
      mainCategoryId: '55',
      name: '[Striker] Lahr Arcien Vambrace',
    }, {
      id: 530014,
      mainCategoryId: '55',
      name: '[Striker] Lahr Arcien Classic Set',
    }, {
      id: 530021,
      mainCategoryId: '55',
      name: '[Striker] Kibelius Armor',
    }, {
      id: 530022,
      mainCategoryId: '55',
      name: '[Striker] Kibelius Classic Set',
    }, {
      id: 530024,
      mainCategoryId: '55',
      name: '[Striker] Noel Hat',
    }, {
      id: 530025,
      mainCategoryId: '55',
      name: '[Striker] Noel Clothes',
    }, {
      id: 530026,
      mainCategoryId: '55',
      name: '[Striker] Noel Outfit Set',
    }, {
      id: 530027,
      mainCategoryId: '55',
      name: '[Striker] New Year Hanbok Hat',
    }, {
      id: 530028,
      mainCategoryId: '55',
      name: '[Striker] New Year Hanbok Clothes',
    }, {
      id: 530029,
      mainCategoryId: '55',
      name: '[Striker] New Year Hanbok Outfit Set',
    }, {
      id: 530030,
      mainCategoryId: '55',
      name: '[Striker] Nouse\'s Shard Helmet',
    }, {
      id: 530031,
      mainCategoryId: '55',
      name: '[Striker] Nouse\'s Shard Armor',
    }, {
      id: 530032,
      mainCategoryId: '55',
      name: '[Striker] Nouse\'s Shard Gauntlet',
    }, {
      id: 530033,
      mainCategoryId: '55',
      name: '[Striker] Nouse\'s Shard Vambrace',
    }, {
      id: 530034,
      mainCategoryId: '55',
      name: '[Striker] Nouse\'s Shard Gardbrace',
    }, {
      id: 530035,
      mainCategoryId: '55',
      name: '[Striker] Nouse\'s Shard Classic Set',
    }, {
      id: 530036,
      mainCategoryId: '55',
      name: '[Striker] Nouse\'s Shard Premium Set',
    }, {
      id: 530038,
      mainCategoryId: '55',
      name: '[Striker] Anemos Helmet',
    }, {
      id: 530039,
      mainCategoryId: '55',
      name: '[Striker] Anemos Armor',
    }, {
      id: 530040,
      mainCategoryId: '55',
      name: '[Striker] Anemos Outfit Set',
    }, {
      id: 530041,
      mainCategoryId: '55',
      name: '[Striker] Willow Breeze Robe',
    }, {
      id: 530042,
      mainCategoryId: '55',
      name: '[Striker] Willow Breeze Shoes',
    }, {
      id: 530043,
      mainCategoryId: '55',
      name: '[Striker] Epheria Marine Helmet',
    }, {
      id: 530044,
      mainCategoryId: '55',
      name: '[Striker] Epheria Marine Clothes',
    }, {
      id: 530045,
      mainCategoryId: '55',
      name: '[Striker] Epheria Marine Shoes',
    }, {
      id: 530046,
      mainCategoryId: '55',
      name: '[Striker] Epheria Marine Gauntlet',
    }, {
      id: 530047,
      mainCategoryId: '55',
      name: '[Striker] Epheria Marine Vambrace',
    }, {
      id: 530048,
      mainCategoryId: '55',
      name: '[Striker] Epheria Marine Classic Set',
    }, {
      id: 530049,
      mainCategoryId: '55',
      name: '[Striker] Durandal Helmet',
    }, {
      id: 530050,
      mainCategoryId: '55',
      name: '[Striker] Durandal Armor',
    }, {
      id: 530051,
      mainCategoryId: '55',
      name: '[Striker] Durandal Outfit Set',
    }, {
      id: 530054,
      mainCategoryId: '55',
      name: '[Striker] Marine Romance Hat',
    }, {
      id: 530055,
      mainCategoryId: '55',
      name: '[Striker] Marine Romance Clothes',
    }, {
      id: 530056,
      mainCategoryId: '55',
      name: '[Striker] Marine Romance Gloves',
    }, {
      id: 530057,
      mainCategoryId: '55',
      name: '[Striker] Marine Romance Shoes',
    }, {
      id: 530058,
      mainCategoryId: '55',
      name: '[Striker] Marine Romance Outfit Set',
    }, {
      id: 530065,
      mainCategoryId: '55',
      name: '[Striker] Leonidas Helmet',
    }, {
      id: 530066,
      mainCategoryId: '55',
      name: '[Striker] Leonidas Armor',
    }, {
      id: 530067,
      mainCategoryId: '55',
      name: '[Striker] Leonidas Outfit Set',
    }, {
      id: 530076,
      mainCategoryId: '55',
      name: '[Striker] Arctic Fang Helmet',
    }, {
      id: 530077,
      mainCategoryId: '55',
      name: '[Striker] Arctic Fang Armor',
    }, {
      id: 530078,
      mainCategoryId: '55',
      name: '[Striker] Arctic Fang Outfit Set',
    }, {
      id: 530079,
      mainCategoryId: '55',
      name: '[Striker] Vestillio Helmet',
    }, {
      id: 530080,
      mainCategoryId: '55',
      name: '[Striker] Vestillio Armor',
    }, {
      id: 530081,
      mainCategoryId: '55',
      name: '[Striker] Vestillio Outfit Set',
    }, {
      id: 530082,
      mainCategoryId: '55',
      name: '[Striker] Bloody Suit',
    }, {
      id: 540001,
      mainCategoryId: '55',
      name: '[Mystic] Rakshande Helmet',
    }, {
      id: 540002,
      mainCategoryId: '55',
      name: '[Mystic] Rakshande Armor',
    }, {
      id: 540003,
      mainCategoryId: '55',
      name: '[Mystic] Rakshande Shoes',
    }, {
      id: 540004,
      mainCategoryId: '55',
      name: '[Mystic] Rakshande Gauntlet',
    }, {
      id: 540005,
      mainCategoryId: '55',
      name: '[Mystic] Rakshande Vambrace',
    }, {
      id: 540006,
      mainCategoryId: '55',
      name: '[Mystic] Rakshande Cestus',
    }, {
      id: 540007,
      mainCategoryId: '55',
      name: '[Mystic] Rakshande Classic Set',
    }, {
      id: 540008,
      mainCategoryId: '55',
      name: '[Mystic] Rakshande Premium Set',
    }, {
      id: 540010,
      mainCategoryId: '55',
      name: '[Mystic] Noel Hat',
    }, {
      id: 540011,
      mainCategoryId: '55',
      name: '[Mystic] Noel Clothes',
    }, {
      id: 540012,
      mainCategoryId: '55',
      name: '[Mystic] Noel Shoes',
    }, {
      id: 540013,
      mainCategoryId: '55',
      name: '[Mystic] Noel Outfit Set',
    }, {
      id: 540014,
      mainCategoryId: '55',
      name: '[Mystic] Spring Blossom Headpiece',
    }, {
      id: 540015,
      mainCategoryId: '55',
      name: '[Mystic] Spring Blossom Clothes',
    }, {
      id: 540016,
      mainCategoryId: '55',
      name: '[Mystic] Spring Blossom Shoes',
    }, {
      id: 540017,
      mainCategoryId: '55',
      name: '[Mystic] Spring Blossom Outfit Set',
    }, {
      id: 540018,
      mainCategoryId: '55',
      name: '[Mystic] New Year Hanbok Hat',
    }, {
      id: 540019,
      mainCategoryId: '55',
      name: '[Mystic] New Year Hanbok Clothes',
    }, {
      id: 540020,
      mainCategoryId: '55',
      name: '[Mystic] New Year Hanbok Shoes',
    }, {
      id: 540021,
      mainCategoryId: '55',
      name: '[Mystic] New Year Hanbok Outfit Set',
    }, {
      id: 540022,
      mainCategoryId: '55',
      name: '[Mystic] Heidel Masquerade Phantom Mask',
    }, {
      id: 540023,
      mainCategoryId: '55',
      name: '[Mystic] Heidel Masquerade Dress',
    }, {
      id: 540024,
      mainCategoryId: '55',
      name: '[Mystic] Heidel Masquerade Outfit Set',
    }, {
      id: 540025,
      mainCategoryId: '55',
      name: '[Mystic] Anemos Helmet',
    }, {
      id: 540026,
      mainCategoryId: '55',
      name: '[Mystic] Anemos Armor',
    }, {
      id: 540027,
      mainCategoryId: '55',
      name: '[Mystic] Anemos Outfit Set',
    }, {
      id: 540028,
      mainCategoryId: '55',
      name: '[Mystic] Charles Rene Helmet',
    }, {
      id: 540029,
      mainCategoryId: '55',
      name: '[Mystic] Charles Rene Armor',
    }, {
      id: 540030,
      mainCategoryId: '55',
      name: '[Mystic] Charles Rene Gloves',
    }, {
      id: 540031,
      mainCategoryId: '55',
      name: '[Mystic] Charles Rene Gauntlet',
    }, {
      id: 540032,
      mainCategoryId: '55',
      name: '[Mystic] Charles Rene Vambrace',
    }, {
      id: 540033,
      mainCategoryId: '55',
      name: '[Mystic] Charles Rene Classic Set',
    }, {
      id: 540034,
      mainCategoryId: '55',
      name: '[Mystic] Epheria Marine Helmet',
    }, {
      id: 540035,
      mainCategoryId: '55',
      name: '[Mystic] Epheria Marine Clothes',
    }, {
      id: 540036,
      mainCategoryId: '55',
      name: '[Mystic] Epheria Marine Shoes',
    }, {
      id: 540037,
      mainCategoryId: '55',
      name: '[Mystic] Epheria Marine Gauntlet',
    }, {
      id: 540038,
      mainCategoryId: '55',
      name: '[Mystic] Epheria Marine Vambrace',
    }, {
      id: 540039,
      mainCategoryId: '55',
      name: '[Mystic] Epheria Marine Classic Set',
    }, {
      id: 540040,
      mainCategoryId: '55',
      name: '[Mystic] Marine Romance Hat',
    }, {
      id: 540041,
      mainCategoryId: '55',
      name: '[Mystic] Marine Romance Clothes',
    }, {
      id: 540042,
      mainCategoryId: '55',
      name: '[Mystic] Marine Romance Shoes',
    }, {
      id: 540043,
      mainCategoryId: '55',
      name: '[Mystic] Marine Romance Outfit Set',
    }, {
      id: 540054,
      mainCategoryId: '55',
      name: '[Mystic] Blanchard Headpiece',
    }, {
      id: 540055,
      mainCategoryId: '55',
      name: '[Mystic] Blanchard Gloves',
    }, {
      id: 540056,
      mainCategoryId: '55',
      name: '[Mystic] Blanchard Shoes',
    }, {
      id: 540058,
      mainCategoryId: '55',
      name: '[Mystic] Rosa De Sharon Headpiece',
    }, {
      id: 540059,
      mainCategoryId: '55',
      name: '[Mystic] Rosa De Sharon Clothes',
    }, {
      id: 540060,
      mainCategoryId: '55',
      name: '[Mystic] Rosa De Sharon Shoes',
    }, {
      id: 540061,
      mainCategoryId: '55',
      name: '[Mystic] Rosa De Sharon Outfit Set',
    }, {
      id: 540066,
      mainCategoryId: '55',
      name: '[Mystic] Bloody Dress',
    }, {
      id: 540067,
      mainCategoryId: '55',
      name: '[Mystic] Bloody Gloves',
    }, {
      id: 540068,
      mainCategoryId: '55',
      name: '[Mystic] Bloody Shoes',
    }, {
      id: 540069,
      mainCategoryId: '55',
      name: '[Mystic] Bloody Outfit Set',
    }, {
      id: 540070,
      mainCategoryId: '55',
      name: '[Mystic] Crown Eagle Helmet',
    }, {
      id: 540071,
      mainCategoryId: '55',
      name: '[Mystic] Crown Eagle Armor',
    }, {
      id: 540072,
      mainCategoryId: '55',
      name: '[Mystic] Crown Eagle Gauntlet',
    }, {
      id: 540073,
      mainCategoryId: '55',
      name: '[Mystic] Crown Eagle Vambrace',
    }, {
      id: 540074,
      mainCategoryId: '55',
      name: '[Mystic] Crown Eagle Cestus',
    }, {
      id: 540075,
      mainCategoryId: '55',
      name: '[Mystic] Crown Eagle Classic Set',
    }, {
      id: 540076,
      mainCategoryId: '55',
      name: '[Mystic] Crown Eagle Premium Set',
    }, {
      id: 540081,
      mainCategoryId: '55',
      name: '[Mystic] Lupine Headpiece',
    }, {
      id: 540082,
      mainCategoryId: '55',
      name: '[Mystic] Lupine Clothes',
    }, {
      id: 540083,
      mainCategoryId: '55',
      name: '[Mystic] Lupine Gloves',
    }, {
      id: 540084,
      mainCategoryId: '55',
      name: '[Mystic] Lupine Shoes',
    }, {
      id: 540085,
      mainCategoryId: '55',
      name: '[Mystic] Lupine Outfit Set',
    }, {
      id: 550501,
      mainCategoryId: '10',
      name: 'Crimson Glaives of the Sage',
    }, {
      id: 550502,
      mainCategoryId: '10',
      name: 'Dandelion Crimson Glaives',
    }, {
      id: 550503,
      mainCategoryId: '10',
      name: 'Enneadread Crimson Glaives',
    }, {
      id: 551001,
      mainCategoryId: '55',
      name: '[Lahn] Orchid Fall Headpiece',
    }, {
      id: 551002,
      mainCategoryId: '55',
      name: '[Lahn] Orchid Fall Clothes',
    }, {
      id: 551003,
      mainCategoryId: '55',
      name: '[Lahn] Orchid Fall Gloves',
    }, {
      id: 551004,
      mainCategoryId: '55',
      name: '[Lahn] Orchid Fall Shoes',
    }, {
      id: 551005,
      mainCategoryId: '55',
      name: '[Lahn] Orchid Fall Crescent Pendulum',
    }, {
      id: 551006,
      mainCategoryId: '55',
      name: '[Lahn] Orchid Fall Noble Sword',
    }, {
      id: 551007,
      mainCategoryId: '55',
      name: '[Lahn] Orchid Fall Classic Set',
    }, {
      id: 551039,
      mainCategoryId: '55',
      name: '[Lahn] Trilby Headpiece',
    }, {
      id: 551040,
      mainCategoryId: '55',
      name: '[Lahn] Grolia Hat',
    }, {
      id: 551041,
      mainCategoryId: '55',
      name: '[Lahn] Karlstein Hat',
    }, {
      id: 551042,
      mainCategoryId: '55',
      name: '[Lahn] Karlstein Armor',
    }, {
      id: 551043,
      mainCategoryId: '55',
      name: '[Lahn] Karlstein Shoes',
    }, {
      id: 551044,
      mainCategoryId: '55',
      name: '[Lahn] Karlstein Crescent Pendulum',
    }, {
      id: 551045,
      mainCategoryId: '55',
      name: '[Lahn] Karlstein Noble Sword',
    }, {
      id: 551046,
      mainCategoryId: '55',
      name: '[Lahn] Karlstein Classic Set',
    }, {
      id: 551053,
      mainCategoryId: '55',
      name: '[Lahn] Sanguine Petal Headpiece',
    }, {
      id: 551054,
      mainCategoryId: '55',
      name: '[Lahn] Sanguine Petal Armor',
    }, {
      id: 551055,
      mainCategoryId: '55',
      name: '[Lahn] Sanguine Petal Gloves',
    }, {
      id: 551056,
      mainCategoryId: '55',
      name: '[Lahn] Sanguine Petal Shoes',
    }, {
      id: 551057,
      mainCategoryId: '55',
      name: '[Lahn] Sanguine Petal Crescent Pendulum',
    }, {
      id: 551058,
      mainCategoryId: '55',
      name: '[Lahn] Sanguine Petal Noble Sword',
    }, {
      id: 551059,
      mainCategoryId: '55',
      name: '[Lahn] Sanguine Petal Crimson Glaives',
    }, {
      id: 551060,
      mainCategoryId: '55',
      name: '[Lahn] Sanguine Petal Classic Set',
    }, {
      id: 551061,
      mainCategoryId: '55',
      name: '[Lahn] Sanguine Petal Premium Set',
    }, {
      id: 551063,
      mainCategoryId: '55',
      name: '[Lahn] Kibelius Helmet',
    }, {
      id: 551064,
      mainCategoryId: '55',
      name: '[Lahn] Kibelius Divinus Armor',
    }, {
      id: 551065,
      mainCategoryId: '55',
      name: '[Lahn] Kibelius Shoes',
    }, {
      id: 551066,
      mainCategoryId: '55',
      name: '[Lahn] Kibelius Crescent Pendulum',
    }, {
      id: 551067,
      mainCategoryId: '55',
      name: '[Lahn] Kibelius Noble Sword',
    }, {
      id: 551068,
      mainCategoryId: '55',
      name: '[Lahn] Kibelius Crimson Glaives',
    }, {
      id: 551069,
      mainCategoryId: '55',
      name: '[Lahn] Kibelius Divinus Classic Set',
    }, {
      id: 551071,
      mainCategoryId: '55',
      name: '[Lahn] Kibelius Armor',
    }, {
      id: 551072,
      mainCategoryId: '55',
      name: '[Lahn] Kibelius Classic Set',
    }, {
      id: 551080,
      mainCategoryId: '55',
      name: '[Lahn] Lahr Arcien Helmet (R)',
    }, {
      id: 551081,
      mainCategoryId: '55',
      name: '[Lahn] Lahr Arcien Armor (R)',
    }, {
      id: 551082,
      mainCategoryId: '55',
      name: '[Lahn] Lahr Arcien Shoes (R)',
    }, {
      id: 551083,
      mainCategoryId: '55',
      name: '[Lahn] Lahr Arcien Crescent Pendulum (R)',
    }, {
      id: 551084,
      mainCategoryId: '55',
      name: '[Lahn] Lahr Arcien Noble Sword (R)',
    }, {
      id: 551085,
      mainCategoryId: '55',
      name: '[Lahn] Lahr Arcien Classic Set (R)',
    }, {
      id: 551086,
      mainCategoryId: '55',
      name: '[Lahn] Charles Rene Helmet',
    }, {
      id: 551087,
      mainCategoryId: '55',
      name: '[Lahn] Charles Rene Armor',
    }, {
      id: 551088,
      mainCategoryId: '55',
      name: '[Lahn] Charles Rene Gloves',
    }, {
      id: 551089,
      mainCategoryId: '55',
      name: '[Lahn] Charles Rene Crescent Pendulum',
    }, {
      id: 551090,
      mainCategoryId: '55',
      name: '[Lahn] Charles Rene Noble Sword',
    }, {
      id: 551091,
      mainCategoryId: '55',
      name: '[Lahn] Charles Rene Classic Set',
    }, {
      id: 551098,
      mainCategoryId: '55',
      name: '[Lahn] Spring Blossom Headpiece',
    }, {
      id: 551099,
      mainCategoryId: '55',
      name: '[Lahn] Spring Blossom Clothes',
    }, {
      id: 551100,
      mainCategoryId: '55',
      name: '[Lahn] Spring Blossom Shoes',
    }, {
      id: 551101,
      mainCategoryId: '55',
      name: '[Lahn] Spring Blossom Outfit Set',
    }, {
      id: 551102,
      mainCategoryId: '55',
      name: '[Lahn] New Year Hanbok Hat',
    }, {
      id: 551103,
      mainCategoryId: '55',
      name: '[Lahn] New Year Hanbok Clothes',
    }, {
      id: 551104,
      mainCategoryId: '55',
      name: '[Lahn] New Year Hanbok Shoes',
    }, {
      id: 551105,
      mainCategoryId: '55',
      name: '[Lahn] New Year Hanbok Outfit Set',
    }, {
      id: 551106,
      mainCategoryId: '55',
      name: '[Lahn] Heidel Masquerade Phantom Mask',
    }, {
      id: 551107,
      mainCategoryId: '55',
      name: '[Lahn] Heidel Masquerade Dress',
    }, {
      id: 551108,
      mainCategoryId: '55',
      name: '[Lahn] Heidel Masquerade Outfit Set',
    }, {
      id: 551109,
      mainCategoryId: '55',
      name: '[Lahn] Anemos Helmet',
    }, {
      id: 551110,
      mainCategoryId: '55',
      name: '[Lahn] Anemos Armor',
    }, {
      id: 551111,
      mainCategoryId: '55',
      name: '[Lahn] Anemos Outfit Set',
    }, {
      id: 551112,
      mainCategoryId: '55',
      name: '[Lahn] Epheria Marine Helmet',
    }, {
      id: 551113,
      mainCategoryId: '55',
      name: '[Lahn] Epheria Marine Clothes',
    }, {
      id: 551114,
      mainCategoryId: '55',
      name: '[Lahn] Epheria Marine Shoes',
    }, {
      id: 551115,
      mainCategoryId: '55',
      name: '[Lahn] Epheria Marine Crescent Pendulum',
    }, {
      id: 551116,
      mainCategoryId: '55',
      name: '[Lahn] Epheria Marine Noble Sword',
    }, {
      id: 551117,
      mainCategoryId: '55',
      name: '[Lahn] Epheria Marine Classic Set',
    }, {
      id: 551118,
      mainCategoryId: '55',
      name: '[Lahn] Marine Romance Hat',
    }, {
      id: 551119,
      mainCategoryId: '55',
      name: '[Lahn] Marine Romance Clothes',
    }, {
      id: 551120,
      mainCategoryId: '55',
      name: '[Lahn] Marine Romance Shoes',
    }, {
      id: 551121,
      mainCategoryId: '55',
      name: '[Lahn] Marine Romance Outfit Set',
    }, {
      id: 551132,
      mainCategoryId: '55',
      name: '[Lahn] Blanchard Headpiece',
    }, {
      id: 551133,
      mainCategoryId: '55',
      name: '[Lahn] Blanchard Gloves',
    }, {
      id: 551134,
      mainCategoryId: '55',
      name: '[Lahn] Blanchard Shoes',
    }, {
      id: 551136,
      mainCategoryId: '55',
      name: '[Lahn] Rosa De Sharon Headpiece',
    }, {
      id: 551137,
      mainCategoryId: '55',
      name: '[Lahn] Rosa De Sharon Clothes',
    }, {
      id: 551138,
      mainCategoryId: '55',
      name: '[Lahn] Rosa De Sharon Shoes',
    }, {
      id: 551139,
      mainCategoryId: '55',
      name: '[Lahn] Rosa De Sharon Outfit Set',
    }, {
      id: 551144,
      mainCategoryId: '55',
      name: '[Lahn] Ram Horn Witch Headdress',
    }, {
      id: 551145,
      mainCategoryId: '55',
      name: '[Lahn] Ram Horn Witch Clothes',
    }, {
      id: 551146,
      mainCategoryId: '55',
      name: '[Lahn] Ram Horn Witch Outfit Set',
    }, {
      id: 551147,
      mainCategoryId: '55',
      name: '[Lahn] Bloody Dress',
    }, {
      id: 551148,
      mainCategoryId: '55',
      name: '[Lahn] Bloody Gloves',
    }, {
      id: 551149,
      mainCategoryId: '55',
      name: '[Lahn] Bloody Shoes',
    }, {
      id: 551150,
      mainCategoryId: '55',
      name: '[Lahn] Bloody Outfit Set',
    }, {
      id: 551154,
      mainCategoryId: '55',
      name: '[Lahn] Noel Hat',
    }, {
      id: 551155,
      mainCategoryId: '55',
      name: '[Lahn] Noel Clothes',
    }, {
      id: 551156,
      mainCategoryId: '55',
      name: '[Lahn] Noel Shoes',
    }, {
      id: 551157,
      mainCategoryId: '55',
      name: '[Lahn] Noel Outfit Set',
    }, {
      id: 551158,
      mainCategoryId: '55',
      name: '[Lahn] Garnet Marniera Headpiece',
    }, {
      id: 551159,
      mainCategoryId: '55',
      name: '[Lahn] Garnet Marniera Clothes',
    }, {
      id: 551160,
      mainCategoryId: '55',
      name: '[Lahn] Garnet Marniera Gloves',
    }, {
      id: 551161,
      mainCategoryId: '55',
      name: '[Lahn] Garnet Marniera Shoes',
    }, {
      id: 551162,
      mainCategoryId: '55',
      name: '[Lahn] Garnet Marniera Outfit Set',
    }, {
      id: 551166,
      mainCategoryId: '55',
      name: '[Lahn] Jade Navillera Headpiece',
    }, {
      id: 551167,
      mainCategoryId: '55',
      name: '[Lahn] Jade Navillera Clothes',
    }, {
      id: 551168,
      mainCategoryId: '55',
      name: '[Lahn] Jade Navillera Gloves',
    }, {
      id: 551169,
      mainCategoryId: '55',
      name: '[Lahn] Jade Navillera Shoes',
    }, {
      id: 551170,
      mainCategoryId: '55',
      name: '[Lahn] Jade Navillera Outfit Set',
    }, {
      id: 551171,
      mainCategoryId: '55',
      name: '[Lahn] Terrminé Helmet',
    }, {
      id: 551172,
      mainCategoryId: '55',
      name: '[Lahn] Terrminé Armor',
    }, {
      id: 551173,
      mainCategoryId: '55',
      name: '[Lahn] Terrminé Outfit Set',
    }, {
      id: 560001,
      mainCategoryId: '55',
      name: '[Archer] Gierach Helmet',
    }, {
      id: 560002,
      mainCategoryId: '55',
      name: '[Archer] Gierach Armor',
    }, {
      id: 560003,
      mainCategoryId: '55',
      name: '[Archer] Gierach Gloves',
    }, {
      id: 560004,
      mainCategoryId: '55',
      name: '[Archer] Gierach Shoes',
    }, {
      id: 560005,
      mainCategoryId: '55',
      name: '[Archer] Gierach Crossbow',
    }, {
      id: 560006,
      mainCategoryId: '55',
      name: '[Archer] Gierach Ra\'ghon',
    }, {
      id: 560007,
      mainCategoryId: '55',
      name: '[Archer] Gierach Classic Set',
    }, {
      id: 560043,
      mainCategoryId: '55',
      name: '[Archer] Gierach Greatbow',
    }, {
      id: 560063,
      mainCategoryId: '55',
      name: '[Archer] Trilby Hat',
    }, {
      id: 560064,
      mainCategoryId: '55',
      name: '[Archer] Luanwulf Helmet',
    }, {
      id: 560065,
      mainCategoryId: '55',
      name: '[Archer] Luanwulf Armor',
    }, {
      id: 560066,
      mainCategoryId: '55',
      name: '[Archer] Luanwulf Gloves',
    }, {
      id: 560067,
      mainCategoryId: '55',
      name: '[Archer] Luanwulf Shoes',
    }, {
      id: 560068,
      mainCategoryId: '55',
      name: '[Archer] Luanwulf Crossbow',
    }, {
      id: 560069,
      mainCategoryId: '55',
      name: '[Archer] Luanwulf Ra\'ghon',
    }, {
      id: 560070,
      mainCategoryId: '55',
      name: '[Archer] Luanwulf Greatbow',
    }, {
      id: 560071,
      mainCategoryId: '55',
      name: '[Archer] Luanwulf Classic Set',
    }, {
      id: 560072,
      mainCategoryId: '55',
      name: '[Archer] Luanwulf Premium Set',
    }, {
      id: 560074,
      mainCategoryId: '55',
      name: '[Archer] Karlstein Hat',
    }, {
      id: 560075,
      mainCategoryId: '55',
      name: '[Archer] Karlstein Armor',
    }, {
      id: 560077,
      mainCategoryId: '55',
      name: '[Archer] Karlstein Crossbow',
    }, {
      id: 560078,
      mainCategoryId: '55',
      name: '[Archer] Karlstein Ra\'ghon',
    }, {
      id: 560079,
      mainCategoryId: '55',
      name: '[Archer] Karlstein Classic Set',
    }, {
      id: 560083,
      mainCategoryId: '55',
      name: '[Archer] Gierach Premium Set',
    }, {
      id: 560085,
      mainCategoryId: '55',
      name: '[Archer] Noel Outfit Set',
    }, {
      id: 560086,
      mainCategoryId: '55',
      name: '[Archer] Noel Hat',
    }, {
      id: 560087,
      mainCategoryId: '55',
      name: '[Archer] Noel Clothes',
    }, {
      id: 560088,
      mainCategoryId: '55',
      name: '[Archer] Kibelius Divinus Classic Set',
    }, {
      id: 560089,
      mainCategoryId: '55',
      name: '[Archer] Kibelius Helmet',
    }, {
      id: 560090,
      mainCategoryId: '55',
      name: '[Archer] Kibelius Divinus Armor',
    }, {
      id: 560091,
      mainCategoryId: '55',
      name: '[Archer] Kibelius Shoes',
    }, {
      id: 560092,
      mainCategoryId: '55',
      name: '[Archer] Kibelius Classic Set',
    }, {
      id: 560093,
      mainCategoryId: '55',
      name: '[Archer] Kibelius Armor',
    }, {
      id: 560094,
      mainCategoryId: '55',
      name: '[Archer] Kibelius Crossbow',
    }, {
      id: 560095,
      mainCategoryId: '55',
      name: '[Archer] Kibelius Ra\'ghon',
    }, {
      id: 560096,
      mainCategoryId: '55',
      name: '[Archer] Kibelius Greatbow',
    }, {
      id: 560099,
      mainCategoryId: '55',
      name: '[Archer] New Year Hanbok Hat',
    }, {
      id: 560100,
      mainCategoryId: '55',
      name: '[Archer] New Year Hanbok Clothes',
    }, {
      id: 560101,
      mainCategoryId: '55',
      name: '[Archer] New Year Hanbok Outfit Set',
    }, {
      id: 560115,
      mainCategoryId: '55',
      name: '[Archer] Marine Romance Hat',
    }, {
      id: 560117,
      mainCategoryId: '55',
      name: '[Archer] Marine Romance Gloves',
    }, {
      id: 560118,
      mainCategoryId: '55',
      name: '[Archer] Marine Romance Shoes',
    }, {
      id: 560119,
      mainCategoryId: '55',
      name: '[Archer] Marine Romance Outfit Set',
    }, {
      id: 560120,
      mainCategoryId: '55',
      name: '[Archer] Yianaros Headpiece',
    }, {
      id: 560121,
      mainCategoryId: '55',
      name: '[Archer] Robeaus Hat',
    }, {
      id: 560122,
      mainCategoryId: '55',
      name: '[Archer] Robeaus Clothes',
    }, {
      id: 560123,
      mainCategoryId: '55',
      name: '[Archer] Robeaus Outfit Set',
    }, {
      id: 560125,
      mainCategoryId: '55',
      name: '[Archer] Messenger of Adùir Helmet',
    }, {
      id: 560126,
      mainCategoryId: '55',
      name: '[Archer] Messenger of Adùir Armor',
    }, {
      id: 560127,
      mainCategoryId: '55',
      name: '[Archer] Messenger of Adùir Outfit Set',
    }, {
      id: 580001,
      mainCategoryId: '55',
      name: '[Shai] Whimsical Alchemist Classic Set',
    }, {
      id: 580002,
      mainCategoryId: '55',
      name: '[Shai] Whimsical Alchemist Hat',
    }, {
      id: 580003,
      mainCategoryId: '55',
      name: '[Shai] Whimsical Alchemist Clothes',
    }, {
      id: 580004,
      mainCategoryId: '55',
      name: '[Shai] Whimsical Alchemist Gloves',
    }, {
      id: 580005,
      mainCategoryId: '55',
      name: '[Shai] Whimsical Alchemist Shoes',
    }, {
      id: 580006,
      mainCategoryId: '55',
      name: '[Shai] Whimsical Alchemist Florang',
    }, {
      id: 580007,
      mainCategoryId: '55',
      name: '[Shai] Whimsical Alchemist Vitclari',
    }, {
      id: 580008,
      mainCategoryId: '55',
      name: '[Shai] Twinkle Star Classic Set',
    }, {
      id: 580009,
      mainCategoryId: '55',
      name: '[Shai] Twinkle Star Hood',
    }, {
      id: 580010,
      mainCategoryId: '55',
      name: '[Shai] Twinkle Star Clothes',
    }, {
      id: 580011,
      mainCategoryId: '55',
      name: '[Shai] Twinkle Star Shoes',
    }, {
      id: 580012,
      mainCategoryId: '55',
      name: '[Shai] Twinkle Star Florang',
    }, {
      id: 580013,
      mainCategoryId: '55',
      name: '[Shai] Twinkle Star Vitclari',
    }, {
      id: 580014,
      mainCategoryId: '55',
      name: '[Shai] Curious Gatherer Classic Set',
    }, {
      id: 580015,
      mainCategoryId: '55',
      name: '[Shai] Curious Gatherer Hat',
    }, {
      id: 580016,
      mainCategoryId: '55',
      name: '[Shai] Curious Gatherer Clothes',
    }, {
      id: 580017,
      mainCategoryId: '55',
      name: '[Shai] Curious Gatherer Gloves',
    }, {
      id: 580018,
      mainCategoryId: '55',
      name: '[Shai] Curious Gatherer Shoes',
    }, {
      id: 580019,
      mainCategoryId: '55',
      name: '[Shai] Curious Gatherer Florang',
    }, {
      id: 580020,
      mainCategoryId: '55',
      name: '[Shai] Curious Gatherer Vitclari',
    }, {
      id: 580021,
      mainCategoryId: '55',
      name: '[Shai] Marigold Sunset Classic Set',
    }, {
      id: 580022,
      mainCategoryId: '55',
      name: '[Shai] Marigold Sunset Hat',
    }, {
      id: 580023,
      mainCategoryId: '55',
      name: '[Shai] Marigold Sunset Clothes',
    }, {
      id: 580024,
      mainCategoryId: '55',
      name: '[Shai] Marigold Sunset Shoes',
    }, {
      id: 580025,
      mainCategoryId: '55',
      name: '[Shai] Marigold Sunset Florang',
    }, {
      id: 580026,
      mainCategoryId: '55',
      name: '[Shai] Marigold Sunset Vitclari',
    }, {
      id: 590123,
      mainCategoryId: '55',
      name: '[Warrior] Vediras Hood',
    }, {
      id: 590124,
      mainCategoryId: '55',
      name: '[Warrior] Vediras Clothes',
    }, {
      id: 590129,
      mainCategoryId: '55',
      name: '[Wizard] Vediras Hood',
    }, {
      id: 590130,
      mainCategoryId: '55',
      name: '[Wizard] Vediras Clothes',
    }, {
      id: 590131,
      mainCategoryId: '55',
      name: '[Ninja] Vediras Hood',
    }, {
      id: 590133,
      mainCategoryId: '55',
      name: '[Striker] Vediras Hood',
    }, {
      id: 590134,
      mainCategoryId: '55',
      name: '[Striker] Vediras Clothes',
    }, {
      id: 590135,
      mainCategoryId: '55',
      name: '[Archer] Vediras Hood',
    }, {
      id: 590136,
      mainCategoryId: '55',
      name: '[Archer] Vediras Clothes',
    }, {
      id: 590137,
      mainCategoryId: '55',
      name: '[Ranger] Vediras Hood',
    }, {
      id: 590138,
      mainCategoryId: '55',
      name: '[Ranger] Vediras Clothes',
    }, {
      id: 590139,
      mainCategoryId: '55',
      name: '[Witch] Vediras Hood',
    }, {
      id: 590140,
      mainCategoryId: '55',
      name: '[Witch] Vediras Clothes',
    }, {
      id: 590141,
      mainCategoryId: '55',
      name: '[Valkyrie] Vediras Hood',
    }, {
      id: 590142,
      mainCategoryId: '55',
      name: '[Valkyrie] Vediras Clothes',
    }, {
      id: 590143,
      mainCategoryId: '55',
      name: '[Dark Knight] Vediras Hood',
    }, {
      id: 590144,
      mainCategoryId: '55',
      name: '[Dark Knight] Vediras Clothes',
    }, {
      id: 590145,
      mainCategoryId: '55',
      name: '[Sorceress] Vediras Hood',
    }, {
      id: 590146,
      mainCategoryId: '55',
      name: '[Sorceress] Vediras Clothes',
    }, {
      id: 590147,
      mainCategoryId: '55',
      name: '[Tamer] Vediras Hood',
    }, {
      id: 590149,
      mainCategoryId: '55',
      name: '[Kunoichi] Vediras Hood',
    }, {
      id: 590150,
      mainCategoryId: '55',
      name: '[Kunoichi] Vediras Clothes',
    }, {
      id: 590151,
      mainCategoryId: '55',
      name: '[Lahn] Vediras Hood',
    }, {
      id: 590152,
      mainCategoryId: '55',
      name: '[Lahn] Vediras Clothes',
    }, {
      id: 590153,
      mainCategoryId: '55',
      name: '[Mystic] Vediras Hood',
    }, {
      id: 590154,
      mainCategoryId: '55',
      name: '[Mystic] Vediras Clothes',
    }, {
      id: 590155,
      mainCategoryId: '55',
      name: '[Maehwa] Vediras Hood',
    }, {
      id: 590156,
      mainCategoryId: '55',
      name: '[Maehwa] Vediras Clothes',
    }, {
      id: 590157,
      mainCategoryId: '55',
      name: '[Warrior] Vediras Outfit Set',
    }, {
      id: 590158,
      mainCategoryId: '55',
      name: '[Berserker] Vediras Outfit Set',
    }, {
      id: 590159,
      mainCategoryId: '55',
      name: '[Musa] Vediras Outfit Set',
    }, {
      id: 590160,
      mainCategoryId: '55',
      name: '[Wizard] Vediras Outfit Set',
    }, {
      id: 590162,
      mainCategoryId: '55',
      name: '[Striker] Vediras Outfit Set',
    }, {
      id: 590163,
      mainCategoryId: '55',
      name: '[Archer] Vediras Outfit Set',
    }, {
      id: 590164,
      mainCategoryId: '55',
      name: '[Ranger] Vediras Outfit Set',
    }, {
      id: 590165,
      mainCategoryId: '55',
      name: '[Witch] Vediras Outfit Set',
    }, {
      id: 590166,
      mainCategoryId: '55',
      name: '[Valkyrie] Vediras Outfit Set',
    }, {
      id: 590167,
      mainCategoryId: '55',
      name: '[Dark Knight] Vediras Outfit Set',
    }, {
      id: 590168,
      mainCategoryId: '55',
      name: '[Sorceress] Vediras Outfit Set',
    }, {
      id: 590170,
      mainCategoryId: '55',
      name: '[Kunoichi] Vediras Outfit Set',
    }, {
      id: 590171,
      mainCategoryId: '55',
      name: '[Lahn] Vediras Outfit Set',
    }, {
      id: 590172,
      mainCategoryId: '55',
      name: '[Mystic] Vediras Outfit Set',
    }, {
      id: 590173,
      mainCategoryId: '55',
      name: '[Maehwa] Vediras Outfit Set',
    }, {
      id: 590262,
      mainCategoryId: '55',
      name: '[Dark Knight] Eclipse Shoes',
    }, {
      id: 590264,
      mainCategoryId: '55',
      name: '[Dark Knight] Eclipse Headpiece',
    }, {
      id: 590265,
      mainCategoryId: '55',
      name: '[Dark Knight] Eclipse Clothes',
    }, {
      id: 590266,
      mainCategoryId: '55',
      name: '[Dark Knight] Eclipse Gloves',
    }, {
      id: 590267,
      mainCategoryId: '55',
      name: '[Warrior] Deathlord Helmet',
    }, {
      id: 590268,
      mainCategoryId: '55',
      name: '[Warrior] Deathlord Armor',
    }, {
      id: 590271,
      mainCategoryId: '55',
      name: '[Witch] Fairybleu Hat',
    }, {
      id: 590272,
      mainCategoryId: '55',
      name: '[Witch] Fairybleu Robe',
    }, {
      id: 590273,
      mainCategoryId: '55',
      name: '[Witch] Fairybleu Shoes',
    }, {
      id: 590274,
      mainCategoryId: '55',
      name: '[Dark Knight] Eclipse Outfit Set',
    }, {
      id: 590275,
      mainCategoryId: '55',
      name: '[Warrior] Deathlord Outfit Set',
    }, {
      id: 590277,
      mainCategoryId: '55',
      name: '[Witch] Fairybleu Outfit Set',
    }, {
      id: 590278,
      mainCategoryId: '55',
      name: '[Dark Knight] Ataraxia Headpiece',
    }, {
      id: 590279,
      mainCategoryId: '55',
      name: '[Dark Knight] Ataraxia Clothes',
    }, {
      id: 590280,
      mainCategoryId: '55',
      name: '[Dark Knight] Ataraxia Gloves',
    }, {
      id: 590281,
      mainCategoryId: '55',
      name: '[Dark Knight] Ataraxia Shoes',
    }, {
      id: 590282,
      mainCategoryId: '55',
      name: '[Dark Knight] Ataraxia Classic Set',
    }, {
      id: 590284,
      mainCategoryId: '55',
      name: '[Warrior] Glorious Shudad Helmet',
    }, {
      id: 590285,
      mainCategoryId: '55',
      name: '[Warrior] Glorious Shudad Armor',
    }, {
      id: 590286,
      mainCategoryId: '55',
      name: '[Warrior] Glorious Shudad Longsword',
    }, {
      id: 590287,
      mainCategoryId: '55',
      name: '[Warrior] Glorious Shudad Shield',
    }, {
      id: 590288,
      mainCategoryId: '55',
      name: '[Warrior] Glorious Shudad Classic Set',
    }, {
      id: 590289,
      mainCategoryId: '55',
      name: '[Berserker] Glorious Shudad Helmet',
    }, {
      id: 590290,
      mainCategoryId: '55',
      name: '[Berserker] Glorious Shudad Armor',
    }, {
      id: 590291,
      mainCategoryId: '55',
      name: '[Berserker] Glorious Shudad Axe',
    }, {
      id: 590292,
      mainCategoryId: '55',
      name: '[Berserker] Glorious Shudad Ornamental Knot',
    }, {
      id: 590293,
      mainCategoryId: '55',
      name: '[Berserker] Glorious Shudad Classic Set',
    }, {
      id: 590294,
      mainCategoryId: '55',
      name: '[Wizard] Glorious Shudad Helmet',
    }, {
      id: 590295,
      mainCategoryId: '55',
      name: '[Wizard] Glorious Shudad Armor',
    }, {
      id: 590296,
      mainCategoryId: '55',
      name: '[Wizard] Glorious Shudad Staff',
    }, {
      id: 590297,
      mainCategoryId: '55',
      name: '[Wizard] Glorious Shudad Dagger',
    }, {
      id: 590298,
      mainCategoryId: '55',
      name: '[Wizard] Glorious Shudad Classic Set',
    }, {
      id: 590299,
      mainCategoryId: '55',
      name: '[Sorceress] Glorious Shudad Helmet',
    }, {
      id: 590300,
      mainCategoryId: '55',
      name: '[Sorceress] Glorious Shudad Armor',
    }, {
      id: 590301,
      mainCategoryId: '55',
      name: '[Sorceress] Glorious Shudad Amulet',
    }, {
      id: 590302,
      mainCategoryId: '55',
      name: '[Sorceress] Glorious Shudad Talisman',
    }, {
      id: 590303,
      mainCategoryId: '55',
      name: '[Sorceress] Glorious Shudad Classic Set',
    }, {
      id: 590304,
      mainCategoryId: '55',
      name: '[Ranger] Glorious Shudad Helmet',
    }, {
      id: 590305,
      mainCategoryId: '55',
      name: '[Ranger] Glorious Shudad Armor',
    }, {
      id: 590306,
      mainCategoryId: '55',
      name: '[Ranger] Glorious Shudad Longbow',
    }, {
      id: 590307,
      mainCategoryId: '55',
      name: '[Ranger] Glorious Shudad Dagger',
    }, {
      id: 590308,
      mainCategoryId: '55',
      name: '[Ranger] Glorious Shudad Classic Set',
    }, {
      id: 590309,
      mainCategoryId: '55',
      name: '[Witch] Glorious Shudad Helmet',
    }, {
      id: 590310,
      mainCategoryId: '55',
      name: '[Witch] Glorious Shudad Armor',
    }, {
      id: 590311,
      mainCategoryId: '55',
      name: '[Witch] Glorious Shudad Staff',
    }, {
      id: 590312,
      mainCategoryId: '55',
      name: '[Witch] Glorious Shudad Dagger',
    }, {
      id: 590313,
      mainCategoryId: '55',
      name: '[Witch] Glorious Shudad Classic Set',
    }, {
      id: 590316,
      mainCategoryId: '55',
      name: '[Striker] Syahzar Helmet',
    }, {
      id: 590317,
      mainCategoryId: '55',
      name: '[Striker] Syahzar Armor',
    }, {
      id: 590318,
      mainCategoryId: '55',
      name: '[Striker] Syahzar Gloves',
    }, {
      id: 590319,
      mainCategoryId: '55',
      name: '[Striker] Syahzar Gauntlet',
    }, {
      id: 590320,
      mainCategoryId: '55',
      name: '[Striker] Syahzar Vambrace',
    }, {
      id: 590322,
      mainCategoryId: '55',
      name: '[Striker] Syahzar Classic Set',
    }, {
      id: 590347,
      mainCategoryId: '55',
      name: '[Musa] Glorious Shudad Helmet',
    }, {
      id: 590348,
      mainCategoryId: '55',
      name: '[Musa] Glorious Shudad Armor',
    }, {
      id: 590349,
      mainCategoryId: '55',
      name: '[Musa] Glorious Shudad Blade',
    }, {
      id: 590350,
      mainCategoryId: '55',
      name: '[Musa] Glorious Shudad Horn Bow',
    }, {
      id: 590351,
      mainCategoryId: '55',
      name: '[Musa] Glorious Shudad Classic Set',
    }, {
      id: 590352,
      mainCategoryId: '55',
      name: '[Archer] Glorious Shudad Helmet',
    }, {
      id: 590353,
      mainCategoryId: '55',
      name: '[Archer] Glorious Shudad Armor',
    }, {
      id: 590355,
      mainCategoryId: '55',
      name: '[Striker] Glorious Shudad Helmet',
    }, {
      id: 590356,
      mainCategoryId: '55',
      name: '[Striker] Glorious Shudad Armor',
    }, {
      id: 590357,
      mainCategoryId: '55',
      name: '[Striker] Glorious Shudad Gauntlet',
    }, {
      id: 590358,
      mainCategoryId: '55',
      name: '[Striker] Glorious Shudad Vambrace',
    }, {
      id: 590359,
      mainCategoryId: '55',
      name: '[Striker] Glorious Shudad Classic Set',
    }, {
      id: 590360,
      mainCategoryId: '55',
      name: '[Ninja] Glorious Shudad Helmet',
    }, {
      id: 590361,
      mainCategoryId: '55',
      name: '[Ninja] Glorious Shudad Armor',
    }, {
      id: 590362,
      mainCategoryId: '55',
      name: '[Ninja] Glorious Shudad Shortsword',
    }, {
      id: 590363,
      mainCategoryId: '55',
      name: '[Ninja] Glorious Shudad Kunai',
    }, {
      id: 590364,
      mainCategoryId: '55',
      name: '[Ninja] Glorious Shudad Classic Set',
    }, {
      id: 590365,
      mainCategoryId: '55',
      name: '[Maehwa] Glorious Shudad Helmet',
    }, {
      id: 590366,
      mainCategoryId: '55',
      name: '[Maehwa] Glorious Shudad Armor',
    }, {
      id: 590367,
      mainCategoryId: '55',
      name: '[Maehwa] Glorious Shudad Blade',
    }, {
      id: 590368,
      mainCategoryId: '55',
      name: '[Maehwa] Glorious Shudad Horn Bow',
    }, {
      id: 590369,
      mainCategoryId: '55',
      name: '[Maehwa] Glorious Shudad Classic Set',
    }, {
      id: 590370,
      mainCategoryId: '55',
      name: '[Tamer] Glorious Shudad Helmet',
    }, {
      id: 590371,
      mainCategoryId: '55',
      name: '[Tamer] Glorious Shudad Armor',
    }, {
      id: 590372,
      mainCategoryId: '55',
      name: '[Tamer] Glorious Shudad Shortsword',
    }, {
      id: 590373,
      mainCategoryId: '55',
      name: '[Tamer] Glorious Shudad Trinket',
    }, {
      id: 590374,
      mainCategoryId: '55',
      name: '[Tamer] Glorious Shudad Classic Set',
    }, {
      id: 590375,
      mainCategoryId: '55',
      name: '[Dark Knight] Glorious Shudad Helmet',
    }, {
      id: 590376,
      mainCategoryId: '55',
      name: '[Dark Knight] Glorious Shudad Armor',
    }, {
      id: 590377,
      mainCategoryId: '55',
      name: '[Dark Knight] Glorious Shudad Kriegsmesser',
    }, {
      id: 590378,
      mainCategoryId: '55',
      name: '[Dark Knight] Glorious Shudad Ornamental Knot',
    }, {
      id: 590379,
      mainCategoryId: '55',
      name: '[Dark Knight] Glorious Shudad Classic Set',
    }, {
      id: 590380,
      mainCategoryId: '55',
      name: '[Kunoichi] Glorious Shudad Helmet',
    }, {
      id: 590381,
      mainCategoryId: '55',
      name: '[Kunoichi] Glorious Shudad Armor',
    }, {
      id: 590382,
      mainCategoryId: '55',
      name: '[Kunoichi] Glorious Shudad Shortsword',
    }, {
      id: 590383,
      mainCategoryId: '55',
      name: '[Kunoichi] Glorious Shudad Kunai',
    }, {
      id: 590384,
      mainCategoryId: '55',
      name: '[Kunoichi] Glorious Shudad Classic Set',
    }, {
      id: 590385,
      mainCategoryId: '55',
      name: '[Valkyrie] Glorious Shudad Helmet',
    }, {
      id: 590386,
      mainCategoryId: '55',
      name: '[Valkyrie] Glorious Shudad Armor',
    }, {
      id: 590387,
      mainCategoryId: '55',
      name: '[Valkyrie] Glorious Shudad Longsword',
    }, {
      id: 590388,
      mainCategoryId: '55',
      name: '[Valkyrie] Glorious Shudad Shield',
    }, {
      id: 590389,
      mainCategoryId: '55',
      name: '[Valkyrie] Glorious Shudad Classic Set',
    }, {
      id: 590390,
      mainCategoryId: '55',
      name: '[Mystic] Glorious Shudad Helmet',
    }, {
      id: 590391,
      mainCategoryId: '55',
      name: '[Mystic] Glorious Shudad Armor',
    }, {
      id: 590392,
      mainCategoryId: '55',
      name: '[Mystic] Glorious Shudad Gauntlet',
    }, {
      id: 590393,
      mainCategoryId: '55',
      name: '[Mystic] Glorious Shudad Vambrace',
    }, {
      id: 590394,
      mainCategoryId: '55',
      name: '[Mystic] Glorious Shudad Classic Set',
    }, {
      id: 590395,
      mainCategoryId: '55',
      name: '[Lahn] Glorious Shudad Helmet',
    }, {
      id: 590396,
      mainCategoryId: '55',
      name: '[Lahn] Glorious Shudad Armor',
    }, {
      id: 590398,
      mainCategoryId: '55',
      name: 'Glorious Shudad Classic Set',
    }, {
      id: 590399,
      mainCategoryId: '55',
      name: 'Glorious Shudad Premium Set',
    }, {
      id: 590401,
      mainCategoryId: '55',
      name: '[Berserker] White Bunny Ears',
    }, {
      id: 590402,
      mainCategoryId: '55',
      name: '[Lahn] White Bunny Ears',
    }, {
      id: 590403,
      mainCategoryId: '55',
      name: '[Musa] White Bunny Ears',
    }, {
      id: 590404,
      mainCategoryId: '55',
      name: '[Mystic] White Bunny Ears',
    }, {
      id: 590405,
      mainCategoryId: '55',
      name: '[Kunoichi] White Bunny Ears',
    }, {
      id: 590406,
      mainCategoryId: '55',
      name: '[Ninja] White Bunny Ears',
    }, {
      id: 590407,
      mainCategoryId: '55',
      name: '[Dark Knight] White Bunny Ears',
    }, {
      id: 590408,
      mainCategoryId: '55',
      name: '[Wizard] White Bunny Ears',
    }, {
      id: 590409,
      mainCategoryId: '55',
      name: '[Archer] White Bunny Ears',
    }, {
      id: 590410,
      mainCategoryId: '55',
      name: '[Witch] White Bunny Ears',
    }, {
      id: 590411,
      mainCategoryId: '55',
      name: '[Striker] White Bunny Ears',
    }, {
      id: 590412,
      mainCategoryId: '55',
      name: '[Maehwa] White Bunny Ears',
    }, {
      id: 590413,
      mainCategoryId: '55',
      name: '[Warrior] White Bunny Ears',
    }, {
      id: 590414,
      mainCategoryId: '55',
      name: '[Ranger] White Bunny Ears',
    }, {
      id: 590415,
      mainCategoryId: '55',
      name: '[Sorceress] White Bunny Ears',
    }, {
      id: 590416,
      mainCategoryId: '55',
      name: '[Valkyrie] White Bunny Ears',
    }, {
      id: 590421,
      mainCategoryId: '55',
      name: '[Lahn] Glorious Shudad Crescent Pendulum',
    }, {
      id: 590422,
      mainCategoryId: '55',
      name: '[Lahn] Glorious Shudad Noble Sword',
    }, {
      id: 590423,
      mainCategoryId: '55',
      name: '[Lahn] Glorious Shudad Classic Set',
    }, {
      id: 590424,
      mainCategoryId: '55',
      name: '[Archer] Glorious Shudad Crossbow',
    }, {
      id: 590425,
      mainCategoryId: '55',
      name: '[Archer] Glorious Shudad Ra\'ghon',
    }, {
      id: 590426,
      mainCategoryId: '55',
      name: '[Archer] Glorious Shudad Classic Set',
    }, {
      id: 590427,
      mainCategoryId: '55',
      name: '[Warrior] Glorious Shudad Great Sword',
    }, {
      id: 590428,
      mainCategoryId: '55',
      name: '[Sorceress] Glorious Shudad Scythe',
    }, {
      id: 590429,
      mainCategoryId: '55',
      name: '[Ranger] Glorious Shudad Kamasylven Sword',
    }, {
      id: 590430,
      mainCategoryId: '55',
      name: '[Berserker] Glorious Shudad Iron Buster',
    }, {
      id: 590431,
      mainCategoryId: '55',
      name: '[Tamer] Glorious Shudad Celestial Bo Staff',
    }, {
      id: 590432,
      mainCategoryId: '55',
      name: '[Musa] Glorious Shudad Crescent Blade',
    }, {
      id: 590433,
      mainCategoryId: '55',
      name: '[Valkyrie] Glorious Shudad Lancia',
    }, {
      id: 590434,
      mainCategoryId: '55',
      name: '[Maehwa] Glorious Shudad Kerispear',
    }, {
      id: 590435,
      mainCategoryId: '55',
      name: '[Kunoichi] Glorious Shudad Sah Chakram',
    }, {
      id: 590436,
      mainCategoryId: '55',
      name: '[Ninja] Glorious Shudad Sura Katana',
    }, {
      id: 590437,
      mainCategoryId: '55',
      name: '[Dark Knight] Glorious Shudad Vediant',
    }, {
      id: 590438,
      mainCategoryId: '55',
      name: '[Striker] Glorious Shudad Gardbrace',
    }, {
      id: 590439,
      mainCategoryId: '55',
      name: '[Wizard] Glorious Shudad Godr Sphera',
    }, {
      id: 590440,
      mainCategoryId: '55',
      name: '[Witch] Glorious Shudad Aad Sphera',
    }, {
      id: 590441,
      mainCategoryId: '55',
      name: '[Mystic] Glorious Shudad Cestus',
    }, {
      id: 590442,
      mainCategoryId: '55',
      name: '[Lahn] Glorious Shudad Crimson Glaives',
    }, {
      id: 590443,
      mainCategoryId: '55',
      name: '[Archer] Glorious Shudad Greatbow',
    }, {
      id: 590461,
      mainCategoryId: '55',
      name: '[Warrior] Glorious Shudad Premium Set',
    }, {
      id: 590462,
      mainCategoryId: '55',
      name: '[Berserker] Glorious Shudad Premium Set',
    }, {
      id: 590463,
      mainCategoryId: '55',
      name: '[Wizard] Glorious Shudad Premium Set',
    }, {
      id: 590464,
      mainCategoryId: '55',
      name: '[Sorceress] Glorious Shudad Premium Set',
    }, {
      id: 590465,
      mainCategoryId: '55',
      name: '[Ranger] Glorious Shudad Premium Set',
    }, {
      id: 590466,
      mainCategoryId: '55',
      name: '[Witch] Glorious Shudad Premium Set',
    }, {
      id: 590467,
      mainCategoryId: '55',
      name: '[Musa] Glorious Shudad Premium Set',
    }, {
      id: 590468,
      mainCategoryId: '55',
      name: '[Striker] Glorious Shudad Premium Set',
    }, {
      id: 590469,
      mainCategoryId: '55',
      name: '[Ninja] Glorious Shudad Premium Set',
    }, {
      id: 590470,
      mainCategoryId: '55',
      name: '[Maehwa] Glorious Shudad Premium Set',
    }, {
      id: 590471,
      mainCategoryId: '55',
      name: '[Tamer] Glorious Shudad Premium Set',
    }, {
      id: 590472,
      mainCategoryId: '55',
      name: '[Dark Knight] Glorious Shudad Premium Set',
    }, {
      id: 590473,
      mainCategoryId: '55',
      name: '[Kunoichi] Glorious Shudad Premium Set',
    }, {
      id: 590474,
      mainCategoryId: '55',
      name: '[Valkyrie] Glorious Shudad Premium Set',
    }, {
      id: 590475,
      mainCategoryId: '55',
      name: '[Mystic] Glorious Shudad Premium Set',
    }, {
      id: 590476,
      mainCategoryId: '55',
      name: '[Lahn] Glorious Shudad Premium Set',
    }, {
      id: 590477,
      mainCategoryId: '55',
      name: '[Archer] Glorious Shudad Premium Set',
    }, {
      id: 590482,
      mainCategoryId: '55',
      name: '[Musa] Tundra Warden Helmet',
    }, {
      id: 590483,
      mainCategoryId: '55',
      name: '[Musa] Tundra Warden Armor',
    }, {
      id: 590484,
      mainCategoryId: '55',
      name: '[Musa] Tundra Warden Classic Set',
    }, {
      id: 590485,
      mainCategoryId: '55',
      name: '[Archer] Ignis Helmet',
    }, {
      id: 590486,
      mainCategoryId: '55',
      name: '[Archer] Ignis Armor',
    }, {
      id: 590487,
      mainCategoryId: '55',
      name: '[Archer] Ignis Crossbow',
    }, {
      id: 590488,
      mainCategoryId: '55',
      name: '[Archer] Ignis Ra\'ghon',
    }, {
      id: 590489,
      mainCategoryId: '55',
      name: '[Archer] Ignis Classic Set',
    }, {
      id: 590531,
      mainCategoryId: '55',
      name: '[Ranger] Lephria Helmet',
    }, {
      id: 590532,
      mainCategoryId: '55',
      name: '[Ranger] Lephria Armor',
    }, {
      id: 590533,
      mainCategoryId: '55',
      name: '[Ranger] Lephria Shoes',
    }, {
      id: 590534,
      mainCategoryId: '55',
      name: '[Ranger] Lephria Classic Set',
    }, {
      id: 590535,
      mainCategoryId: '55',
      name: '[Valkyrie] Solaria Helmet',
    }, {
      id: 590536,
      mainCategoryId: '55',
      name: '[Valkyrie] Solaria Armor',
    }, {
      id: 590537,
      mainCategoryId: '55',
      name: '[Valkyrie] Solaria Shoes',
    }, {
      id: 590538,
      mainCategoryId: '55',
      name: '[Valkyrie] Solaria Classic Set',
    }, {
      id: 590539,
      mainCategoryId: '55',
      name: '[Maehwa] Te\'enah Headpiece',
    }, {
      id: 590540,
      mainCategoryId: '55',
      name: '[Maehwa] Te\'enah Clothes',
    }, {
      id: 590541,
      mainCategoryId: '55',
      name: '[Maehwa] Te\'enah Classic Set',
    }, {
      id: 590569,
      mainCategoryId: '55',
      name: '[Berserker] Bractus Helmet',
    }, {
      id: 590570,
      mainCategoryId: '55',
      name: '[Berserker] Bractus Armor',
    }, {
      id: 590571,
      mainCategoryId: '55',
      name: '[Berserker] Bractus Classic Set',
    }, {
      id: 590572,
      mainCategoryId: '55',
      name: '[Tamer] Moonlight Faerie Headpiece',
    }, {
      id: 590573,
      mainCategoryId: '55',
      name: '[Tamer] Moonlight Faerie Armor',
    }, {
      id: 590575,
      mainCategoryId: '55',
      name: '[Tamer] Moonlight Faerie Shoes',
    }, {
      id: 590576,
      mainCategoryId: '55',
      name: '[Tamer] Moonlight Faerie Classic Set',
    }, {
      id: 590579,
      mainCategoryId: '55',
      name: '[Ninja] Bloodfiend Helmet',
    }, {
      id: 590580,
      mainCategoryId: '55',
      name: '[Ninja] Bloodfiend Armor',
    }, {
      id: 590581,
      mainCategoryId: '55',
      name: '[Ninja] Bloodfiend Classic Set',
    }, {
      id: 590601,
      mainCategoryId: '55',
      name: '[Berserker] Chipmunk Headband',
    }, {
      id: 590602,
      mainCategoryId: '55',
      name: '[Lahn] Chipmunk Headband',
    }, {
      id: 590603,
      mainCategoryId: '55',
      name: '[Musa] Chipmunk Headband',
    }, {
      id: 590604,
      mainCategoryId: '55',
      name: '[Mystic] Chipmunk Headband',
    }, {
      id: 590605,
      mainCategoryId: '55',
      name: '[Kunoichi] Chipmunk Headband',
    }, {
      id: 590606,
      mainCategoryId: '55',
      name: '[Ninja] Chipmunk Headband',
    }, {
      id: 590607,
      mainCategoryId: '55',
      name: '[Dark Knight] Chipmunk Headband',
    }, {
      id: 590608,
      mainCategoryId: '55',
      name: '[Wizard] Chipmunk Headband',
    }, {
      id: 590609,
      mainCategoryId: '55',
      name: '[Tamer] Chipmunk Headband',
    }, {
      id: 590610,
      mainCategoryId: '55',
      name: '[Witch] Chipmunk Headband',
    }, {
      id: 590611,
      mainCategoryId: '55',
      name: '[Striker] Chipmunk Headband',
    }, {
      id: 590612,
      mainCategoryId: '55',
      name: '[Maehwa] Chipmunk Headband',
    }, {
      id: 590613,
      mainCategoryId: '55',
      name: '[Warrior] Chipmunk Headband',
    }, {
      id: 590614,
      mainCategoryId: '55',
      name: '[Ranger] Chipmunk Headband',
    }, {
      id: 590615,
      mainCategoryId: '55',
      name: '[Sorceress] Chipmunk Headband',
    }, {
      id: 590617,
      mainCategoryId: '55',
      name: '[Shai] Chipmunk Headband',
    }, {
      id: 590618,
      mainCategoryId: '55',
      name: '[Archer] Chipmunk Headband',
    }, {
      id: 590619,
      mainCategoryId: '55',
      name: '[Guardian] Chipmunk Headband',
    }, {
      id: 590620,
      mainCategoryId: '55',
      name: '[Warrior] Cantabile Headband',
    }, {
      id: 590621,
      mainCategoryId: '55',
      name: '[Warrior] Cantabile Clothes',
    }, {
      id: 590622,
      mainCategoryId: '55',
      name: '[Warrior] Cantabile Gloves',
    }, {
      id: 590623,
      mainCategoryId: '55',
      name: '[Warrior] Cantabile Shoes',
    }, {
      id: 590624,
      mainCategoryId: '55',
      name: '[Warrior] Cantabile Outfit Set',
    }, {
      id: 590625,
      mainCategoryId: '55',
      name: '[Berserker] Cantabile Headband',
    }, {
      id: 590626,
      mainCategoryId: '55',
      name: '[Berserker] Cantabile Clothes',
    }, {
      id: 590627,
      mainCategoryId: '55',
      name: '[Berserker] Cantabile Gloves',
    }, {
      id: 590628,
      mainCategoryId: '55',
      name: '[Berserker] Cantabile Shoes',
    }, {
      id: 590629,
      mainCategoryId: '55',
      name: '[Berserker] Cantabile Outfit Set',
    }, {
      id: 590630,
      mainCategoryId: '55',
      name: '[Musa] Cantabile Headband',
    }, {
      id: 590633,
      mainCategoryId: '55',
      name: '[Musa] Cantabile Shoes',
    }, {
      id: 590634,
      mainCategoryId: '55',
      name: '[Musa] Cantabile Outfit Set',
    }, {
      id: 590635,
      mainCategoryId: '55',
      name: '[Wizard] Cantabile Headband',
    }, {
      id: 590639,
      mainCategoryId: '55',
      name: '[Wizard] Cantabile Outfit Set',
    }, {
      id: 590640,
      mainCategoryId: '55',
      name: '[Archer] Cantabile Headband',
    }, {
      id: 590641,
      mainCategoryId: '55',
      name: '[Archer] Cantabile Clothes',
    }, {
      id: 590642,
      mainCategoryId: '55',
      name: '[Archer] Cantabile Gloves',
    }, {
      id: 590644,
      mainCategoryId: '55',
      name: '[Archer] Cantabile Outfit Set',
    }, {
      id: 590645,
      mainCategoryId: '55',
      name: '[Ninja] Cantabile Headband',
    }, {
      id: 590646,
      mainCategoryId: '55',
      name: '[Ninja] Cantabile Clothes',
    }, {
      id: 590647,
      mainCategoryId: '55',
      name: '[Ninja] Cantabile Gloves',
    }, {
      id: 590648,
      mainCategoryId: '55',
      name: '[Ninja] Cantabile Shoes',
    }, {
      id: 590649,
      mainCategoryId: '55',
      name: '[Ninja] Cantabile Outfit Set',
    }, {
      id: 590650,
      mainCategoryId: '55',
      name: '[Striker] Cantabile Headband',
    }, {
      id: 590651,
      mainCategoryId: '55',
      name: '[Striker] Cantabile Clothes',
    }, {
      id: 590654,
      mainCategoryId: '55',
      name: '[Striker] Cantabile Outfit Set',
    }, {
      id: 600004,
      mainCategoryId: '55',
      name: '[Shai] Trilby Headpiece',
    }, {
      id: 600005,
      mainCategoryId: '55',
      name: '[Shai] Yianaros Headpiece',
    }, {
      id: 600006,
      mainCategoryId: '55',
      name: '[Shai] Grolia Hat',
    }, {
      id: 600007,
      mainCategoryId: '55',
      name: '[Shai] Lychnia Headpiece',
    }, {
      id: 600010,
      mainCategoryId: '55',
      name: '[Shai] Dumpling Headset',
    }, {
      id: 600023,
      mainCategoryId: '55',
      name: '[Shai] Shooting Star Headband',
    }, {
      id: 600025,
      mainCategoryId: '55',
      name: '[Shai] Pink Polka-Dot Hair Bow',
    }, {
      id: 600070,
      mainCategoryId: '55',
      name: '[Shai] Florchestra Headband',
    }, {
      id: 600071,
      mainCategoryId: '55',
      name: '[Shai] Florchestra Robe',
    }, {
      id: 600072,
      mainCategoryId: '55',
      name: '[Shai] Florchestra Shoes',
    }, {
      id: 600073,
      mainCategoryId: '55',
      name: '[Shai] Florchestra Florang',
    }, {
      id: 600074,
      mainCategoryId: '55',
      name: '[Shai] Florchestra Vitclari',
    }, {
      id: 600081,
      mainCategoryId: '55',
      name: '[Shai] Florchestra Classic Set',
    }, {
      id: 600097,
      mainCategoryId: '55',
      name: '[Shai] Whimsical Alchemist Premium Set',
    }, {
      id: 600113,
      mainCategoryId: '55',
      name: '[Shai] Marine Romance Hat',
    }, {
      id: 600114,
      mainCategoryId: '55',
      name: '[Shai] Marine Romance Clothes',
    }, {
      id: 600115,
      mainCategoryId: '55',
      name: '[Shai] Marine Romance Gloves',
    }, {
      id: 600116,
      mainCategoryId: '55',
      name: '[Shai] Marine Romance Shoes',
    }, {
      id: 600117,
      mainCategoryId: '55',
      name: '[Shai] Marine Romance Outfit Set',
    }, {
      id: 600118,
      mainCategoryId: '55',
      name: '[Warrior] Cornelius Longsword',
    }, {
      id: 600119,
      mainCategoryId: '55',
      name: '[Ranger] Lephria Longbow',
    }, {
      id: 600120,
      mainCategoryId: '55',
      name: '[Sorceress] Iron Thorn Amulet',
    }, {
      id: 600121,
      mainCategoryId: '55',
      name: '[Berserker] Bractus Axe',
    }, {
      id: 600122,
      mainCategoryId: '55',
      name: '[Tamer] Moonlight Faerie Shortsword',
    }, {
      id: 600123,
      mainCategoryId: '55',
      name: '[Musa] Tundra Warden Blade',
    }, {
      id: 600124,
      mainCategoryId: '55',
      name: '[Valkyrie] Solaria Longsword',
    }, {
      id: 600125,
      mainCategoryId: '55',
      name: '[Maehwa] Te\'enah Blade',
    }, {
      id: 600126,
      mainCategoryId: '55',
      name: '[Wizard] Tempyrion Staff',
    }, {
      id: 600127,
      mainCategoryId: '55',
      name: '[Witch] Arcanis Staff',
    }, {
      id: 600128,
      mainCategoryId: '55',
      name: '[Kunoichi] Giha Shortsword',
    }, {
      id: 600129,
      mainCategoryId: '55',
      name: '[Ninja] Bloodfiend Shortsword',
    }, {
      id: 600130,
      mainCategoryId: '55',
      name: '[Dark Knight] Ataraxia Kriegsmesser',
    }, {
      id: 600131,
      mainCategoryId: '55',
      name: '[Striker] Darkbane Gauntlet',
    }, {
      id: 600132,
      mainCategoryId: '55',
      name: '[Mystic] Khamsin Gauntlet',
    }, {
      id: 600133,
      mainCategoryId: '55',
      name: '[Lahn] Ruby Floretta Crescent Pendulum',
    }, {
      id: 600135,
      mainCategoryId: '55',
      name: '[Warrior] Cornelius Shield',
    }, {
      id: 600136,
      mainCategoryId: '55',
      name: '[Ranger] Lephria Dagger',
    }, {
      id: 600137,
      mainCategoryId: '55',
      name: '[Sorceress] Iron Thorn Talisman',
    }, {
      id: 600138,
      mainCategoryId: '55',
      name: '[Berserker] Bractus Ornamental Knot',
    }, {
      id: 600139,
      mainCategoryId: '55',
      name: '[Tamer] Moonlight Faerie Trinket',
    }, {
      id: 600140,
      mainCategoryId: '55',
      name: '[Musa] Tundra Warden Horn Bow',
    }, {
      id: 600141,
      mainCategoryId: '55',
      name: '[Valkyrie] Solaria Shield',
    }, {
      id: 600142,
      mainCategoryId: '55',
      name: '[Maehwa] Te\'enah Horn Bow',
    }, {
      id: 600143,
      mainCategoryId: '55',
      name: '[Wizard] Tempyrion Dagger',
    }, {
      id: 600144,
      mainCategoryId: '55',
      name: '[Witch] Arcanis Dagger',
    }, {
      id: 600145,
      mainCategoryId: '55',
      name: '[Kunoichi] Giha Kunai',
    }, {
      id: 600146,
      mainCategoryId: '55',
      name: '[Ninja] Bloodfiend Kunai',
    }, {
      id: 600147,
      mainCategoryId: '55',
      name: '[Dark Knight] Ataraxia Ornamental Knot',
    }, {
      id: 600148,
      mainCategoryId: '55',
      name: '[Striker] Darkbane Vambrace',
    }, {
      id: 600149,
      mainCategoryId: '55',
      name: '[Mystic] Khamsin Vambrace',
    }, {
      id: 600150,
      mainCategoryId: '55',
      name: '[Lahn] Ruby Floretta Noble Sword',
    }, {
      id: 600152,
      mainCategoryId: '55',
      name: '[Warrior] Cornelius Helmet',
    }, {
      id: 600154,
      mainCategoryId: '55',
      name: '[Warrior] Cornelius Gloves',
    }, {
      id: 600156,
      mainCategoryId: '55',
      name: '[Warrior] Cornelius Classic Set',
    }, {
      id: 600229,
      mainCategoryId: '55',
      name: '[Warrior] Cornelius Armor N',
    }, {
      id: 600230,
      mainCategoryId: '55',
      name: '[Warrior] Cornelius Classic Set N',
    }, {
      id: 600231,
      mainCategoryId: '55',
      name: '[Kunoichi] Giha Headpiece',
    }, {
      id: 600232,
      mainCategoryId: '55',
      name: '[Kunoichi] Giha Clothes',
    }, {
      id: 600234,
      mainCategoryId: '55',
      name: '[Kunoichi] Giha Shoes',
    }, {
      id: 600235,
      mainCategoryId: '55',
      name: '[Kunoichi] Giha Classic Set',
    }, {
      id: 600236,
      mainCategoryId: '55',
      name: '[Sorceress] Iron Thorn Headpiece',
    }, {
      id: 600237,
      mainCategoryId: '55',
      name: '[Sorceress] Iron Thorn Clothes',
    }, {
      id: 600238,
      mainCategoryId: '55',
      name: '[Sorceress] Iron Thorn Shoes',
    }, {
      id: 600239,
      mainCategoryId: '55',
      name: '[Sorceress] Iron Thorn Classic Set',
    }, {
      id: 600240,
      mainCategoryId: '55',
      name: '[Warrior] Crayodel Soldier Hat',
    }, {
      id: 600241,
      mainCategoryId: '55',
      name: '[Warrior] Crayodel Soldier Uniform',
    }, {
      id: 600242,
      mainCategoryId: '55',
      name: '[Warrior] Crayodel Soldier Outfit Set',
    }, {
      id: 600245,
      mainCategoryId: '55',
      name: '[Berserker] Crayodel Soldier Outfit Set',
    }, {
      id: 600246,
      mainCategoryId: '55',
      name: '[Musa] Crayodel Soldier Hat',
    }, {
      id: 600247,
      mainCategoryId: '55',
      name: '[Musa] Crayodel Soldier Uniform',
    }, {
      id: 600248,
      mainCategoryId: '55',
      name: '[Musa] Crayodel Soldier Outfit Set',
    }, {
      id: 600249,
      mainCategoryId: '55',
      name: '[Wizard] Crayodel Soldier Hat',
    }, {
      id: 600250,
      mainCategoryId: '55',
      name: '[Wizard] Crayodel Soldier Uniform',
    }, {
      id: 600251,
      mainCategoryId: '55',
      name: '[Wizard] Crayodel Soldier Outfit Set',
    }, {
      id: 600252,
      mainCategoryId: '55',
      name: '[Ninja] Crayodel Soldier Hat',
    }, {
      id: 600253,
      mainCategoryId: '55',
      name: '[Ninja] Crayodel Soldier Uniform',
    }, {
      id: 600254,
      mainCategoryId: '55',
      name: '[Ninja] Crayodel Soldier Outfit Set',
    }, {
      id: 600255,
      mainCategoryId: '55',
      name: '[Striker] Crayodel Soldier Hat',
    }, {
      id: 600256,
      mainCategoryId: '55',
      name: '[Striker] Crayodel Soldier Uniform',
    }, {
      id: 600257,
      mainCategoryId: '55',
      name: '[Striker] Crayodel Soldier Outfit Set',
    }, {
      id: 600258,
      mainCategoryId: '55',
      name: '[Archer] Crayodel Soldier Hat',
    }, {
      id: 600260,
      mainCategoryId: '55',
      name: '[Archer] Crayodel Soldier Outfit Set',
    }, {
      id: 600261,
      mainCategoryId: '55',
      name: '[Ranger] Crayodel Soldier Hat',
    }, {
      id: 600262,
      mainCategoryId: '55',
      name: '[Ranger] Crayodel Soldier Uniform',
    }, {
      id: 600263,
      mainCategoryId: '55',
      name: '[Ranger] Crayodel Soldier Outfit Set',
    }, {
      id: 600264,
      mainCategoryId: '55',
      name: '[Sorceress] Crayodel Soldier Hat',
    }, {
      id: 600265,
      mainCategoryId: '55',
      name: '[Sorceress] Crayodel Soldier Uniform',
    }, {
      id: 600266,
      mainCategoryId: '55',
      name: '[Sorceress] Crayodel Soldier Outfit Set',
    }, {
      id: 600267,
      mainCategoryId: '55',
      name: '[Tamer] Crayodel Soldier Hat',
    }, {
      id: 600268,
      mainCategoryId: '55',
      name: '[Tamer] Crayodel Soldier Uniform',
    }, {
      id: 600269,
      mainCategoryId: '55',
      name: '[Tamer] Crayodel Soldier Outfit Set',
    }, {
      id: 600270,
      mainCategoryId: '55',
      name: '[Valkyrie] Crayodel Soldier Hat',
    }, {
      id: 600271,
      mainCategoryId: '55',
      name: '[Valkyrie] Crayodel Soldier Uniform',
    }, {
      id: 600272,
      mainCategoryId: '55',
      name: '[Valkyrie] Crayodel Soldier Outfit Set',
    }, {
      id: 600273,
      mainCategoryId: '55',
      name: '[Maehwa] Crayodel Soldier Hat',
    }, {
      id: 600274,
      mainCategoryId: '55',
      name: '[Maehwa] Crayodel Soldier Uniform',
    }, {
      id: 600275,
      mainCategoryId: '55',
      name: '[Maehwa] Crayodel Soldier Outfit Set',
    }, {
      id: 600276,
      mainCategoryId: '55',
      name: '[Kunoichi] Crayodel Soldier Hat',
    }, {
      id: 600277,
      mainCategoryId: '55',
      name: '[Kunoichi] Crayodel Soldier Uniform',
    }, {
      id: 600278,
      mainCategoryId: '55',
      name: '[Kunoichi] Crayodel Soldier Outfit Set',
    }, {
      id: 600279,
      mainCategoryId: '55',
      name: '[Witch] Crayodel Soldier Hat',
    }, {
      id: 600280,
      mainCategoryId: '55',
      name: '[Witch] Crayodel Soldier Uniform',
    }, {
      id: 600281,
      mainCategoryId: '55',
      name: '[Witch] Crayodel Soldier Outfit Set',
    }, {
      id: 600282,
      mainCategoryId: '55',
      name: '[Dark Knight] Crayodel Soldier Hat',
    }, {
      id: 600283,
      mainCategoryId: '55',
      name: '[Dark Knight] Crayodel Soldier Uniform',
    }, {
      id: 600284,
      mainCategoryId: '55',
      name: '[Dark Knight] Crayodel Soldier Outfit Set',
    }, {
      id: 600285,
      mainCategoryId: '55',
      name: '[Mystic] Crayodel Soldier Hat',
    }, {
      id: 600286,
      mainCategoryId: '55',
      name: '[Mystic] Crayodel Soldier Uniform',
    }, {
      id: 600287,
      mainCategoryId: '55',
      name: '[Mystic] Crayodel Soldier Outfit Set',
    }, {
      id: 600288,
      mainCategoryId: '55',
      name: '[Lahn] Crayodel Soldier Hat',
    }, {
      id: 600289,
      mainCategoryId: '55',
      name: '[Lahn] Crayodel Soldier Uniform',
    }, {
      id: 600290,
      mainCategoryId: '55',
      name: '[Lahn] Crayodel Soldier Outfit Set',
    }, {
      id: 600291,
      mainCategoryId: '55',
      name: '[Shai] Crayodel Soldier Hat',
    }, {
      id: 600292,
      mainCategoryId: '55',
      name: '[Shai] Crayodel Soldier Uniform',
    }, {
      id: 600293,
      mainCategoryId: '55',
      name: '[Shai] Crayodel Soldier Outfit Set',
    }, {
      id: 600294,
      mainCategoryId: '55',
      name: '[Shai] Crayodel Soldier Shoes',
    }, {
      id: 600523,
      mainCategoryId: '55',
      name: '[Lahn] Ruby Floretta Headpiece',
    }, {
      id: 600524,
      mainCategoryId: '55',
      name: '[Lahn] Ruby Floretta Clothes',
    }, {
      id: 600525,
      mainCategoryId: '55',
      name: '[Lahn] Ruby Floretta Classic Set',
    }, {
      id: 600526,
      mainCategoryId: '55',
      name: '[Striker] Darkbane Headpiece',
    }, {
      id: 600527,
      mainCategoryId: '55',
      name: '[Striker] Darkbane Armor',
    }, {
      id: 600528,
      mainCategoryId: '55',
      name: '[Striker] Darkbane Gloves',
    }, {
      id: 600529,
      mainCategoryId: '55',
      name: '[Striker] Darkbane Classic Set',
    }, {
      id: 600530,
      mainCategoryId: '55',
      name: '[Mystic] Khamsin Headpiece',
    }, {
      id: 600531,
      mainCategoryId: '55',
      name: '[Mystic] Khamsin Clothes',
    }, {
      id: 600532,
      mainCategoryId: '55',
      name: '[Mystic] Khamsin Shoes',
    }, {
      id: 600533,
      mainCategoryId: '55',
      name: '[Mystic] Khamsin Classic Set',
    }, {
      id: 600534,
      mainCategoryId: '55',
      name: '[Witch] Arcanis Hat',
    }, {
      id: 600535,
      mainCategoryId: '55',
      name: '[Witch] Arcanis Robe',
    }, {
      id: 600536,
      mainCategoryId: '55',
      name: '[Witch] Arcanis Classic Set',
    }, {
      id: 600538,
      mainCategoryId: '55',
      name: '[Wizard] Tempyrion Robe',
    }, {
      id: 600539,
      mainCategoryId: '55',
      name: '[Wizard] Tempyrion Classic Set',
    }, {
      id: 600575,
      mainCategoryId: '55',
      name: '[Guardian] Crayodel Soldier Hat',
    }, {
      id: 600577,
      mainCategoryId: '55',
      name: '[Guardian] Crayodel Soldier Outfit Set',
    }, {
      id: 600578,
      mainCategoryId: '55',
      name: '[Nova] Crayodel Soldier Hat',
    }, {
      id: 600579,
      mainCategoryId: '55',
      name: '[Nova] Crayodel Soldier Uniform',
    }, {
      id: 600580,
      mainCategoryId: '55',
      name: '[Nova] Crayodel Soldier Outfit Set',
    }, {
      id: 600584,
      mainCategoryId: '55',
      name: '[Guardian] Noel Outfit Set',
    }, {
      id: 600585,
      mainCategoryId: '55',
      name: '[Nova] Noel Hat',
    }, {
      id: 600586,
      mainCategoryId: '55',
      name: '[Nova] Noel Clothes',
    }, {
      id: 600587,
      mainCategoryId: '55',
      name: '[Nova] Noel Shoes',
    }, {
      id: 600588,
      mainCategoryId: '55',
      name: '[Nova] Noel Outfit Set',
    }, {
      id: 600589,
      mainCategoryId: '55',
      name: '[Hashashin] Noel Hat',
    }, {
      id: 600592,
      mainCategoryId: '55',
      name: '[Shai] Noel Hat',
    }, {
      id: 600593,
      mainCategoryId: '55',
      name: '[Shai] Noel Clothes',
    }, {
      id: 600594,
      mainCategoryId: '55',
      name: '[Shai] Noel Shoes',
    }, {
      id: 600595,
      mainCategoryId: '55',
      name: '[Shai] Noel Outfit Set',
    }, {
      id: 600596,
      mainCategoryId: '55',
      name: '[Shai] Tick-Tock Great Detective Helmet',
    }, {
      id: 600597,
      mainCategoryId: '55',
      name: '[Shai] Tick-Tock Great Detective Armor',
    }, {
      id: 600598,
      mainCategoryId: '55',
      name: '[Shai] Tick-Tock Great Detective Shoes',
    }, {
      id: 600599,
      mainCategoryId: '55',
      name: '[Shai] Tick-Tock Great Detective Outfit Set',
    }, {
      id: 601001,
      mainCategoryId: '55',
      name: '[Guardian] Mueburus Classic Set',
    }, {
      id: 601002,
      mainCategoryId: '55',
      name: '[Guardian] Mueburus Headpiece',
    }, {
      id: 601003,
      mainCategoryId: '55',
      name: '[Guardian] Mueburus Armor',
    }, {
      id: 601004,
      mainCategoryId: '55',
      name: '[Guardian] Mueburus Shoes',
    }, {
      id: 601005,
      mainCategoryId: '55',
      name: '[Guardian] Mueburus Battle Axe',
    }, {
      id: 601006,
      mainCategoryId: '55',
      name: '[Guardian] Mueburus Shield',
    }, {
      id: 601043,
      mainCategoryId: '55',
      name: '[Guardian] Ynixtra Headpiece',
    }, {
      id: 601044,
      mainCategoryId: '55',
      name: '[Guardian] Ynixtra Clothes',
    }, {
      id: 601045,
      mainCategoryId: '55',
      name: '[Guardian] Ynixtra Gloves',
    }, {
      id: 601046,
      mainCategoryId: '55',
      name: '[Guardian] Ynixtra Shoes',
    }, {
      id: 601109,
      mainCategoryId: '55',
      name: '[Guardian] Trilby Headpiece',
    }, {
      id: 601110,
      mainCategoryId: '55',
      name: '[Guardian] Yianaros Headpiece',
    }, {
      id: 601111,
      mainCategoryId: '55',
      name: '[Guardian] Grolia Hat',
    }, {
      id: 601112,
      mainCategoryId: '55',
      name: '[Guardian] Lychnia Headpiece',
    }, {
      id: 601124,
      mainCategoryId: '55',
      name: '[Guardian] Ynixtra Jordun',
    }, {
      id: 601125,
      mainCategoryId: '55',
      name: '[Guardian] Ynixtra Battle Axe',
    }, {
      id: 601126,
      mainCategoryId: '55',
      name: '[Guardian] Ynixtra Shield',
    }, {
      id: 601127,
      mainCategoryId: '55',
      name: '[Guardian] Ynixtra Classic Set',
    }, {
      id: 601128,
      mainCategoryId: '55',
      name: '[Guardian] Ynixtra Premium Set',
    }, {
      id: 601130,
      mainCategoryId: '55',
      name: '[Guardian] Marine Romance Hat',
    }, {
      id: 601132,
      mainCategoryId: '55',
      name: '[Guardian] Marine Romance Shoes',
    }, {
      id: 601133,
      mainCategoryId: '55',
      name: '[Guardian] Marine Romance Outfit Set',
    }, {
      id: 601134,
      mainCategoryId: '55',
      name: '[Guardian] Terrminé Helmet',
    }, {
      id: 601135,
      mainCategoryId: '55',
      name: '[Guardian] Terrminé Armor',
    }, {
      id: 601136,
      mainCategoryId: '55',
      name: '[Guardian] Terrminé Outfit Set',
    }, {
      id: 601141,
      mainCategoryId: '55',
      name: '[Guardian] Kibelius Helmet',
    }, {
      id: 601142,
      mainCategoryId: '55',
      name: '[Guardian] Kibelius Divinus Armor',
    }, {
      id: 601143,
      mainCategoryId: '55',
      name: '[Guardian] Kibelius Armor',
    }, {
      id: 601144,
      mainCategoryId: '55',
      name: '[Guardian] Kibelius Shoes',
    }, {
      id: 601145,
      mainCategoryId: '55',
      name: '[Guardian] Kibelius Jordun',
    }, {
      id: 601146,
      mainCategoryId: '55',
      name: '[Guardian] Kibelius Battle Axe',
    }, {
      id: 601147,
      mainCategoryId: '55',
      name: '[Guardian] Kibelius Shield',
    }, {
      id: 601148,
      mainCategoryId: '55',
      name: '[Guardian] Kibelius Divinus Classic Set',
    }, {
      id: 601149,
      mainCategoryId: '55',
      name: '[Guardian] Kibelius Classic Set',
    }, {
      id: 601152,
      mainCategoryId: '55',
      name: '[Guardian] Mountain Guardian Spirit Helmet',
    }, {
      id: 601153,
      mainCategoryId: '55',
      name: '[Guardian] Mountain Guardian Spirit Armor',
    }, {
      id: 601154,
      mainCategoryId: '55',
      name: '[Guardian] Mountain Guardian Spirit Outfit Set',
    }, {
      id: 601167,
      mainCategoryId: '55',
      name: '[Guardian] Karlstein Hat',
    }, {
      id: 601168,
      mainCategoryId: '55',
      name: '[Guardian] Karlstein Armor',
    }, {
      id: 601169,
      mainCategoryId: '55',
      name: '[Guardian] Karlstein Shoes',
    }, {
      id: 601170,
      mainCategoryId: '55',
      name: '[Guardian] Karlstein Battle Axe',
    }, {
      id: 601171,
      mainCategoryId: '55',
      name: '[Guardian] Karlstein Shield',
    }, {
      id: 601172,
      mainCategoryId: '55',
      name: '[Guardian] Karlstein Classic Set',
    }, {
      id: 601204,
      mainCategoryId: '55',
      name: 'Secret Book of Old Moon (15 Days)',
    }, {
      id: 601208,
      mainCategoryId: '55',
      name: '[Shai] Vediras Hood',
    }, {
      id: 601209,
      mainCategoryId: '55',
      name: '[Shai] Vediras Clothes',
    }, {
      id: 601210,
      mainCategoryId: '55',
      name: '[Shai] Vediras Outfit Set',
    }, {
      id: 601211,
      mainCategoryId: '55',
      name: '[Guardian] Vediras Hood',
    }, {
      id: 601212,
      mainCategoryId: '55',
      name: '[Guardian] Vediras Clothes',
    }, {
      id: 601213,
      mainCategoryId: '55',
      name: '[Guardian] Vediras Outfit Set',
    }, {
      id: 601214,
      mainCategoryId: '55',
      name: '[Guardian] Kharoxia Battle Axe',
    }, {
      id: 601215,
      mainCategoryId: '55',
      name: '[Guardian] Kharoxia Shield',
    }, {
      id: 601216,
      mainCategoryId: '55',
      name: '[Guardian] Kharoxia Headpiece',
    }, {
      id: 601217,
      mainCategoryId: '55',
      name: '[Guardian] Kharoxia Clothes',
    }, {
      id: 601218,
      mainCategoryId: '55',
      name: '[Guardian] Kharoxia Shoes',
    }, {
      id: 601219,
      mainCategoryId: '55',
      name: '[Guardian] Kharoxia Classic Set',
    }, {
      id: 601222,
      mainCategoryId: '55',
      name: '[Shai] New Year Hanbok Hat',
    }, {
      id: 601223,
      mainCategoryId: '55',
      name: '[Shai] New Year Hanbok Clothes',
    }, {
      id: 601224,
      mainCategoryId: '55',
      name: '[Shai] New Year Hanbok Shoes',
    }, {
      id: 601225,
      mainCategoryId: '55',
      name: '[Shai] New Year Hanbok Outfit Set',
    }, {
      id: 601226,
      mainCategoryId: '55',
      name: '[Guardian] New Year Hanbok Hat',
    }, {
      id: 601227,
      mainCategoryId: '55',
      name: '[Guardian] New Year Hanbok Clothes',
    }, {
      id: 601228,
      mainCategoryId: '55',
      name: '[Guardian] New Year Hanbok Shoes',
    }, {
      id: 601229,
      mainCategoryId: '55',
      name: '[Guardian] New Year Hanbok Outfit Set',
    }, {
      id: 601380,
      mainCategoryId: '55',
      name: '[Shai] Kibelius Divinus Classic Set',
    }, {
      id: 601381,
      mainCategoryId: '55',
      name: '[Shai] Kibelius Classic Set',
    }, {
      id: 601382,
      mainCategoryId: '55',
      name: '[Shai] Kibelius Helmet',
    }, {
      id: 601383,
      mainCategoryId: '55',
      name: '[Shai] Kibelius Divinus Armor',
    }, {
      id: 601384,
      mainCategoryId: '55',
      name: '[Shai] Kibelius Armor',
    }, {
      id: 601385,
      mainCategoryId: '55',
      name: '[Shai] Kibelius Shoes',
    }, {
      id: 601386,
      mainCategoryId: '55',
      name: '[Shai] Kibelius Florang',
    }, {
      id: 601387,
      mainCategoryId: '55',
      name: '[Shai] Kibelius Vitclari',
    }, {
      id: 601467,
      mainCategoryId: '55',
      name: '[Kunoichi] Aconite Headpiece',
    }, {
      id: 601468,
      mainCategoryId: '55',
      name: '[Kunoichi] Aconite Clothes',
    }, {
      id: 601469,
      mainCategoryId: '55',
      name: '[Kunoichi] Aconite Shoes',
    }, {
      id: 601470,
      mainCategoryId: '55',
      name: '[Kunoichi] Aconite Outfit Set',
    }, {
      id: 601475,
      mainCategoryId: '55',
      name: '[Witch] Ivies Hat',
    }, {
      id: 601476,
      mainCategoryId: '55',
      name: '[Witch] Ivies Clothes',
    }, {
      id: 601477,
      mainCategoryId: '55',
      name: '[Witch] Ivies Outfit Set',
    }, {
      id: 601478,
      mainCategoryId: '55',
      name: '[Lahn] Clead Helmet',
    }, {
      id: 601479,
      mainCategoryId: '55',
      name: '[Lahn] Clead Armor',
    }, {
      id: 601480,
      mainCategoryId: '55',
      name: '[Lahn] Clead Shoes',
    }, {
      id: 601481,
      mainCategoryId: '55',
      name: '[Lahn] Clead Outfit Set',
    }, {
      id: 601482,
      mainCategoryId: '55',
      name: '[Striker] Blue Gaia Helmet',
    }, {
      id: 601483,
      mainCategoryId: '55',
      name: '[Striker] Blue Gaia Armor',
    }, {
      id: 601484,
      mainCategoryId: '55',
      name: '[Striker] Blue Gaia Gloves',
    }, {
      id: 601485,
      mainCategoryId: '55',
      name: '[Striker] Blue Gaia Outfit Set',
    }, {
      id: 601488,
      mainCategoryId: '55',
      name: '[Shai] Terrminé Helmet',
    }, {
      id: 601489,
      mainCategoryId: '55',
      name: '[Shai] Terrminé Armor',
    }, {
      id: 601490,
      mainCategoryId: '55',
      name: '[Shai] Terrminé Gloves',
    }, {
      id: 601491,
      mainCategoryId: '55',
      name: '[Shai] Terrminé Shoes',
    }, {
      id: 601492,
      mainCategoryId: '55',
      name: '[Shai] Terrminé Outfit Set',
    }, {
      id: 601661,
      mainCategoryId: '55',
      name: '[Ranger] Cantabile Headband',
    }, {
      id: 601663,
      mainCategoryId: '55',
      name: '[Ranger] Cantabile Outfit Set',
    }, {
      id: 601664,
      mainCategoryId: '55',
      name: '[Sorceress] Cantabile Headband',
    }, {
      id: 601665,
      mainCategoryId: '55',
      name: '[Sorceress] Cantabile Clothes',
    }, {
      id: 601666,
      mainCategoryId: '55',
      name: '[Sorceress] Cantabile Outfit Set',
    }, {
      id: 601667,
      mainCategoryId: '55',
      name: '[Tamer] Cantabile Headband',
    }, {
      id: 601668,
      mainCategoryId: '55',
      name: '[Tamer] Cantabile Clothes',
    }, {
      id: 601669,
      mainCategoryId: '55',
      name: '[Tamer] Cantabile Outfit Set',
    }, {
      id: 601670,
      mainCategoryId: '55',
      name: '[Valkyrie] Cantabile Headband',
    }, {
      id: 601671,
      mainCategoryId: '55',
      name: '[Valkyrie] Cantabile Clothes',
    }, {
      id: 601672,
      mainCategoryId: '55',
      name: '[Valkyrie] Cantabile Outfit Set',
    }, {
      id: 601673,
      mainCategoryId: '55',
      name: '[Maehwa] Cantabile Headband',
    }, {
      id: 601674,
      mainCategoryId: '55',
      name: '[Maehwa] Cantabile Clothes',
    }, {
      id: 601675,
      mainCategoryId: '55',
      name: '[Maehwa] Cantabile Outfit Set',
    }, {
      id: 601676,
      mainCategoryId: '55',
      name: '[Witch] Cantabile Headband',
    }, {
      id: 601677,
      mainCategoryId: '55',
      name: '[Witch] Cantabile Clothes',
    }, {
      id: 601678,
      mainCategoryId: '55',
      name: '[Witch] Cantabile Outfit Set',
    }, {
      id: 601679,
      mainCategoryId: '55',
      name: '[Kunoichi] Cantabile Headband',
    }, {
      id: 601680,
      mainCategoryId: '55',
      name: '[Kunoichi] Cantabile Clothes',
    }, {
      id: 601681,
      mainCategoryId: '55',
      name: '[Kunoichi] Cantabile Outfit Set',
    }, {
      id: 601682,
      mainCategoryId: '55',
      name: '[Dark Knight] Cantabile Headband',
    }, {
      id: 601683,
      mainCategoryId: '55',
      name: '[Dark Knight] Cantabile Clothes',
    }, {
      id: 601684,
      mainCategoryId: '55',
      name: '[Dark Knight] Cantabile Outfit Set',
    }, {
      id: 601685,
      mainCategoryId: '55',
      name: '[Mystic] Cantabile Headband',
    }, {
      id: 601686,
      mainCategoryId: '55',
      name: '[Mystic] Cantabile Clothes',
    }, {
      id: 601687,
      mainCategoryId: '55',
      name: '[Mystic] Cantabile Outfit Set',
    }, {
      id: 601688,
      mainCategoryId: '55',
      name: '[Lahn] Cantabile Headband',
    }, {
      id: 601689,
      mainCategoryId: '55',
      name: '[Lahn] Cantabile Clothes',
    }, {
      id: 601690,
      mainCategoryId: '55',
      name: '[Lahn] Cantabile Outfit Set',
    }, {
      id: 601691,
      mainCategoryId: '55',
      name: '[Shai] Cantabile Headband',
    }, {
      id: 601692,
      mainCategoryId: '55',
      name: '[Shai] Cantabile Clothes',
    }, {
      id: 601693,
      mainCategoryId: '55',
      name: '[Shai] Cantabile Outfit Set',
    }, {
      id: 601694,
      mainCategoryId: '55',
      name: '[Guardian] Cantabile Headband',
    }, {
      id: 601696,
      mainCategoryId: '55',
      name: '[Guardian] Cantabile Outfit Set',
    }, {
      id: 602000,
      mainCategoryId: '55',
      name: '[Hashashin] Karakum Helmet',
    }, {
      id: 602001,
      mainCategoryId: '55',
      name: '[Hashashin] Karakum Armor',
    }, {
      id: 602002,
      mainCategoryId: '55',
      name: '[Hashashin] Karakum Gloves',
    }, {
      id: 602003,
      mainCategoryId: '55',
      name: '[Hashashin] Karakum Shoes',
    }, {
      id: 602004,
      mainCategoryId: '55',
      name: '[Hashashin] Karakum Classic Set',
    }, {
      id: 602005,
      mainCategoryId: '55',
      name: '[Hashashin] Domtur Helmet',
    }, {
      id: 602006,
      mainCategoryId: '55',
      name: '[Hashashin] Domtur Armor',
    }, {
      id: 602007,
      mainCategoryId: '55',
      name: '[Hashashin] Domtur Gloves',
    }, {
      id: 602009,
      mainCategoryId: '55',
      name: '[Hashashin] Domtur Classic Set',
    }, {
      id: 602010,
      mainCategoryId: '55',
      name: '[Hashashin] Karakum Shamshir',
    }, {
      id: 602011,
      mainCategoryId: '55',
      name: '[Hashashin] Karakum Haladie',
    }, {
      id: 602013,
      mainCategoryId: '55',
      name: '[Hashashin] Domtur Premium Set',
    }, {
      id: 602014,
      mainCategoryId: '55',
      name: '[Hashashin] Karlstein Hat',
    }, {
      id: 602015,
      mainCategoryId: '55',
      name: '[Hashashin] Karlstein Armor',
    }, {
      id: 602016,
      mainCategoryId: '55',
      name: '[Hashashin] Karlstein Shamshir',
    }, {
      id: 602017,
      mainCategoryId: '55',
      name: '[Hashashin] Karlstein Haladie',
    }, {
      id: 602018,
      mainCategoryId: '55',
      name: '[Hashashin] Karlstein Classic Set',
    }, {
      id: 602031,
      mainCategoryId: '55',
      name: '[Hashashin] Kibelius Helmet',
    }, {
      id: 602032,
      mainCategoryId: '55',
      name: '[Hashashin] Kibelius Divinus Armor',
    }, {
      id: 602033,
      mainCategoryId: '55',
      name: '[Hashashin] Kibelius Armor',
    }, {
      id: 602034,
      mainCategoryId: '55',
      name: '[Hashashin] Kibelius Shoes',
    }, {
      id: 602035,
      mainCategoryId: '55',
      name: '[Hashashin] Kibelius Dual Glaives',
    }, {
      id: 602036,
      mainCategoryId: '55',
      name: '[Hashashin] Kibelius Shamshir',
    }, {
      id: 602037,
      mainCategoryId: '55',
      name: '[Hashashin] Kibelius Haladie',
    }, {
      id: 602038,
      mainCategoryId: '55',
      name: '[Hashashin] Kibelius Divinus Classic Set',
    }, {
      id: 602039,
      mainCategoryId: '55',
      name: '[Hashashin] Kibelius Classic Set',
    }, {
      id: 602042,
      mainCategoryId: '55',
      name: '[Hashashin] Domtur Dual Glaives',
    }, {
      id: 602043,
      mainCategoryId: '55',
      name: '[Hashashin] Domtur Shamshir',
    }, {
      id: 602044,
      mainCategoryId: '55',
      name: '[Hashashin] Domtur Haladie',
    }, {
      id: 602093,
      mainCategoryId: '55',
      name: '[Hashashin] Mezari Helmet',
    }, {
      id: 602094,
      mainCategoryId: '55',
      name: '[Hashashin] Mezari Armor',
    }, {
      id: 602095,
      mainCategoryId: '55',
      name: '[Hashashin] Mezari Gloves',
    }, {
      id: 602096,
      mainCategoryId: '55',
      name: '[Hashashin] Mezari Shoes',
    }, {
      id: 602097,
      mainCategoryId: '55',
      name: '[Hashashin] Mezari Shamshir',
    }, {
      id: 602098,
      mainCategoryId: '55',
      name: '[Hashashin] Mezari Haladie',
    }, {
      id: 602099,
      mainCategoryId: '55',
      name: '[Hashashin] Mezari Classic Set',
    }, {
      id: 602120,
      mainCategoryId: '55',
      name: '[Hashashin] Yianaros Headpiece',
    }, {
      id: 602169,
      mainCategoryId: '55',
      name: '[Hashashin] New Year Hanbok Outfit Set',
    }, {
      id: 602170,
      mainCategoryId: '55',
      name: '[Hashashin] Vediras Hood',
    }, {
      id: 602171,
      mainCategoryId: '55',
      name: '[Hashashin] Vediras Clothes',
    }, {
      id: 602172,
      mainCategoryId: '55',
      name: '[Hashashin] Vediras Outfit Set',
    }, {
      id: 602182,
      mainCategoryId: '55',
      name: '[Hashashin] Crayodel Soldier Hat',
    }, {
      id: 602183,
      mainCategoryId: '55',
      name: '[Hashashin] Crayodel Soldier Uniform',
    }, {
      id: 602184,
      mainCategoryId: '55',
      name: '[Hashashin] Crayodel Soldier Outfit Set',
    }, {
      id: 603004,
      mainCategoryId: '55',
      name: '[Nova] Aquila Helmet',
    }, {
      id: 603005,
      mainCategoryId: '55',
      name: '[Nova] Aquila Armor',
    }, {
      id: 603007,
      mainCategoryId: '55',
      name: '[Nova] Aquila Morning Star',
    }, {
      id: 603008,
      mainCategoryId: '55',
      name: '[Nova] Aquila Quoratum',
    }, {
      id: 603009,
      mainCategoryId: '55',
      name: '[Nova] Aquila Classic Set',
    }, {
      id: 603088,
      mainCategoryId: '55',
      name: '[Nova] Yianaros Headpiece',
    }, {
      id: 603090,
      mainCategoryId: '55',
      name: '[Nova] Trilby Headpiece',
    }, {
      id: 603092,
      mainCategoryId: '55',
      name: '[Nova] Chipmunk Headband',
    }, {
      id: 603105,
      mainCategoryId: '55',
      name: '[Nova] Adamant Helmet',
    }, {
      id: 603106,
      mainCategoryId: '55',
      name: '[Nova] Adamant Armor',
    }, {
      id: 603107,
      mainCategoryId: '55',
      name: '[Nova] Adamant Outfit Set',
    }, {
      id: 603108,
      mainCategoryId: '55',
      name: '[Nova] Sephia Helmet',
    }, {
      id: 603109,
      mainCategoryId: '55',
      name: '[Nova] Sephia Armor',
    }, {
      id: 603110,
      mainCategoryId: '55',
      name: '[Nova] Sephia Morning Star',
    }, {
      id: 603111,
      mainCategoryId: '55',
      name: '[Nova] Sephia Quoratum',
    }, {
      id: 603112,
      mainCategoryId: '55',
      name: '[Nova] Sephia Sting',
    }, {
      id: 603113,
      mainCategoryId: '55',
      name: '[Nova] Sephia Classic Set',
    }, {
      id: 603115,
      mainCategoryId: '55',
      name: '[Nova] Sephia Premium Set',
    }, {
      id: 603116,
      mainCategoryId: '55',
      name: '[Nova] Adamant Morning Star',
    }, {
      id: 603117,
      mainCategoryId: '55',
      name: '[Nova] Adamant Quoratum',
    }, {
      id: 603118,
      mainCategoryId: '55',
      name: '[Nova] Adamant Classic Set',
    }, {
      id: 604174,
      mainCategoryId: '55',
      name: '[Berserker] Mountain Guardian Spirit Helmet',
    }, {
      id: 604175,
      mainCategoryId: '55',
      name: '[Berserker] Mountain Guardian Spirit Armor',
    }, {
      id: 604176,
      mainCategoryId: '55',
      name: '[Berserker] Mountain Guardian Spirit Outfit Set',
    }, {
      id: 604177,
      mainCategoryId: '55',
      name: '[Witch] Aether Helmet',
    }, {
      id: 604178,
      mainCategoryId: '55',
      name: '[Witch] Aether Armor',
    }, {
      id: 604179,
      mainCategoryId: '55',
      name: '[Witch] Aether Shoes',
    }, {
      id: 604180,
      mainCategoryId: '55',
      name: '[Witch] Aether Outfit Set',
    }, {
      id: 604181,
      mainCategoryId: '55',
      name: '[Valkyrie] Aether Helmet',
    }, {
      id: 604182,
      mainCategoryId: '55',
      name: '[Valkyrie] Aether Armor',
    }, {
      id: 604183,
      mainCategoryId: '55',
      name: '[Valkyrie] Aether Shoes',
    }, {
      id: 604184,
      mainCategoryId: '55',
      name: '[Valkyrie] Aether Outfit Set',
    }, {
      id: 604204,
      mainCategoryId: '55',
      name: '[Warrior] Azure Knight Helmet',
    }, {
      id: 604205,
      mainCategoryId: '55',
      name: '[Warrior] Azure Knight Armor',
    }, {
      id: 604206,
      mainCategoryId: '55',
      name: '[Warrior] Azure Knight Gloves',
    }, {
      id: 604207,
      mainCategoryId: '55',
      name: '[Warrior] Azure Knight Outfit Set',
    }, {
      id: 604208,
      mainCategoryId: '55',
      name: '[Hashashin] Chipmunk Headband',
    }, {
      id: 604215,
      mainCategoryId: '55',
      name: '[Nova] Karlstein Hat',
    }, {
      id: 604216,
      mainCategoryId: '55',
      name: '[Nova] Karlstein Armor',
    }, {
      id: 604217,
      mainCategoryId: '55',
      name: '[Nova] Karlstein Shoes',
    }, {
      id: 604218,
      mainCategoryId: '55',
      name: '[Nova] Karlstein Morning Star',
    }, {
      id: 604219,
      mainCategoryId: '55',
      name: '[Nova] Karlstein Quoratum',
    }, {
      id: 604220,
      mainCategoryId: '55',
      name: '[Nova] Karlstein Classic Set',
    }, {
      id: 604280,
      mainCategoryId: '55',
      name: '[Shai] Glorious Shudad Helmet',
    }, {
      id: 604281,
      mainCategoryId: '55',
      name: '[Shai] Glorious Shudad Armor',
    }, {
      id: 604282,
      mainCategoryId: '55',
      name: '[Shai] Glorious Shudad Florang',
    }, {
      id: 604283,
      mainCategoryId: '55',
      name: '[Shai] Glorious Shudad Vitclari',
    }, {
      id: 604284,
      mainCategoryId: '55',
      name: '[Shai] Glorious Shudad Classic Set',
    }, {
      id: 604285,
      mainCategoryId: '55',
      name: '[Guardian] Glorious Shudad Helmet',
    }, {
      id: 604286,
      mainCategoryId: '55',
      name: '[Guardian] Glorious Shudad Armor',
    }, {
      id: 604287,
      mainCategoryId: '55',
      name: '[Guardian] Glorious Shudad Jordun',
    }, {
      id: 604288,
      mainCategoryId: '55',
      name: '[Guardian] Glorious Shudad Battle Axe',
    }, {
      id: 604289,
      mainCategoryId: '55',
      name: '[Guardian] Glorious Shudad Shield',
    }, {
      id: 604290,
      mainCategoryId: '55',
      name: '[Guardian] Glorious Shudad Premium Set',
    }, {
      id: 604294,
      mainCategoryId: '55',
      name: '[Hashashin] Glorious Shudad Helmet',
    }, {
      id: 604295,
      mainCategoryId: '55',
      name: '[Hashashin] Glorious Shudad Armor',
    }, {
      id: 604296,
      mainCategoryId: '55',
      name: '[Hashashin] Glorious Shudad Dual Glaives',
    }, {
      id: 604297,
      mainCategoryId: '55',
      name: '[Hashashin] Glorious Shudad Shamshir',
    }, {
      id: 604298,
      mainCategoryId: '55',
      name: '[Hashashin] Glorious Shudad Haladie',
    }, {
      id: 604299,
      mainCategoryId: '55',
      name: '[Hashashin] Glorious Shudad Premium Set',
    }, {
      id: 604303,
      mainCategoryId: '55',
      name: '[Nova] Glorious Shudad Helmet',
    }, {
      id: 604304,
      mainCategoryId: '55',
      name: '[Nova] Glorious Shudad Armor',
    }, {
      id: 604305,
      mainCategoryId: '55',
      name: '[Nova] Glorious Shudad Morning Star',
    }, {
      id: 604306,
      mainCategoryId: '55',
      name: '[Nova] Glorious Shudad Quoratum',
    }, {
      id: 604307,
      mainCategoryId: '55',
      name: '[Nova] Glorious Shudad Sting',
    }, {
      id: 604308,
      mainCategoryId: '55',
      name: '[Nova] Glorious Shudad Premium Set',
    }, {
      id: 604321,
      mainCategoryId: '55',
      name: '[Lahn] Prowling Tiger Helmet',
    }, {
      id: 604322,
      mainCategoryId: '55',
      name: '[Lahn] Prowling Tiger Armor',
    }, {
      id: 604323,
      mainCategoryId: '55',
      name: '[Lahn] Prowling Tiger Shoes',
    }, {
      id: 604324,
      mainCategoryId: '55',
      name: '[Lahn] Prowling Tiger Outfit Set',
    }, {
      id: 604325,
      mainCategoryId: '55',
      name: '[Shai] Skippity Hoppity Helmet',
    }, {
      id: 604326,
      mainCategoryId: '55',
      name: '[Shai] Skippity Hoppity Armor',
    }, {
      id: 604327,
      mainCategoryId: '55',
      name: '[Shai] Skippity Hoppity Gloves',
    }, {
      id: 604328,
      mainCategoryId: '55',
      name: '[Shai] Skippity Hoppity Shoes',
    }, {
      id: 604330,
      mainCategoryId: '55',
      name: '[Nova] New Year Hanbok Hat',
    }, {
      id: 604331,
      mainCategoryId: '55',
      name: '[Nova] New Year Hanbok Clothes',
    }, {
      id: 604332,
      mainCategoryId: '55',
      name: '[Nova] New Year Hanbok Shoes',
    }, {
      id: 604333,
      mainCategoryId: '55',
      name: '[Nova] New Year Hanbok Outfit Set',
    }, {
      id: 604334,
      mainCategoryId: '55',
      name: '[Nova] Kibelius Helmet',
    }, {
      id: 604335,
      mainCategoryId: '55',
      name: '[Nova] Kibelius Divinus Armor',
    }, {
      id: 604336,
      mainCategoryId: '55',
      name: '[Nova] Kibelius Shoes',
    }, {
      id: 604337,
      mainCategoryId: '55',
      name: '[Nova] Kibelius Morning Star',
    }, {
      id: 604338,
      mainCategoryId: '55',
      name: '[Nova] Kibelius Quoratum',
    }, {
      id: 604339,
      mainCategoryId: '55',
      name: '[Nova] Kibelius Sting',
    }, {
      id: 604340,
      mainCategoryId: '55',
      name: '[Nova] Kibelius Divinus Classic Set',
    }, {
      id: 604343,
      mainCategoryId: '55',
      name: '[Nova] Kibelius Classic Set',
    }, {
      id: 604345,
      mainCategoryId: '55',
      name: '[Wizard] Corvicanus Robe',
    }, {
      id: 604346,
      mainCategoryId: '55',
      name: '[Guardian] Heidel Masquerade Phantom Mask',
    }, {
      id: 604348,
      mainCategoryId: '55',
      name: '[Guardian] Heidel Masquerade Outfit Set',
    }, {
      id: 604349,
      mainCategoryId: '55',
      name: '[Nova] Heidel Masquerade Phantom Mask',
    }, {
      id: 604350,
      mainCategoryId: '55',
      name: '[Nova] Heidel Masquerade Dress',
    }, {
      id: 604351,
      mainCategoryId: '55',
      name: '[Nova] Heidel Masquerade Outfit Set',
    }, {
      id: 604352,
      mainCategoryId: '55',
      name: '[Shai] Heidel Masquerade Phantom Mask',
    }, {
      id: 604353,
      mainCategoryId: '55',
      name: '[Shai] Heidel Masquerade Dress',
    }, {
      id: 604354,
      mainCategoryId: '55',
      name: '[Shai] Heidel Masquerade Outfit Set',
    }, {
      id: 604355,
      mainCategoryId: '55',
      name: '[Hashashin] Heidel Masquerade Phantom Mask',
    }, {
      id: 604357,
      mainCategoryId: '55',
      name: '[Hashashin] Heidel Masquerade Outfit Set',
    }, {
      id: 604359,
      mainCategoryId: '55',
      name: '[Wizard] Corvicanus Staff',
    }, {
      id: 604360,
      mainCategoryId: '55',
      name: '[Wizard] Corvicanus Dagger',
    }, {
      id: 604361,
      mainCategoryId: '55',
      name: '[Wizard] Corvicanus Godr Sphera',
    }, {
      id: 604363,
      mainCategoryId: '55',
      name: '[Wizard] Corvicanus Premium Set',
    }, {
      id: 604365,
      mainCategoryId: '55',
      name: '[Striker] Heidel Masquerade Phantom Mask',
    }, {
      id: 604366,
      mainCategoryId: '55',
      name: '[Striker] Heidel Masquerade Suit',
    }, {
      id: 604367,
      mainCategoryId: '55',
      name: '[Striker] Heidel Masquerade Outfit Set',
    }, {
      id: 604368,
      mainCategoryId: '55',
      name: '[Archer] Heidel Masquerade Phantom Mask',
    }, {
      id: 604370,
      mainCategoryId: '55',
      name: '[Archer] Heidel Masquerade Outfit Set',
    }, {
      id: 604371,
      mainCategoryId: '55',
      name: '[Striker] Devoured Sun Helmet',
    }, {
      id: 604372,
      mainCategoryId: '55',
      name: '[Striker] Devoured Sun Armor',
    }, {
      id: 604373,
      mainCategoryId: '55',
      name: '[Striker] Devoured Sun Outfit Set',
    }, {
      id: 604374,
      mainCategoryId: '55',
      name: '[Guardian] Rosa De Sharon Headpiece',
    }, {
      id: 604375,
      mainCategoryId: '55',
      name: '[Guardian] Rosa De Sharon Clothes',
    }, {
      id: 604376,
      mainCategoryId: '55',
      name: '[Guardian] Rosa De Sharon Shoes',
    }, {
      id: 604377,
      mainCategoryId: '55',
      name: '[Guardian] Rosa De Sharon Outfit Set',
    }, {
      id: 604385,
      mainCategoryId: '55',
      name: '[Ranger] Pieris Helmet',
    }, {
      id: 604386,
      mainCategoryId: '55',
      name: '[Ranger] Pieris Armor',
    }, {
      id: 604387,
      mainCategoryId: '55',
      name: '[Ranger] Pieris Outfit Set',
    }, {
      id: 604428,
      mainCategoryId: '55',
      name: '[Sage] Contular Helmet',
    }, {
      id: 604429,
      mainCategoryId: '55',
      name: '[Sage] Contular Armor A',
    }, {
      id: 604430,
      mainCategoryId: '55',
      name: '[Sage] Contular Gloves',
    }, {
      id: 604431,
      mainCategoryId: '55',
      name: '[Sage] Contular Outfit Set A',
    }, {
      id: 604432,
      mainCategoryId: '55',
      name: '[Sage] Contular Classic Set A',
    }, {
      id: 604433,
      mainCategoryId: '55',
      name: '[Sage] Contular Kyve',
    }, {
      id: 604434,
      mainCategoryId: '55',
      name: '[Sage] Contular Talisman',
    }, {
      id: 604455,
      mainCategoryId: '55',
      name: '[Sage] Contular Armor B',
    }, {
      id: 604456,
      mainCategoryId: '55',
      name: '[Sage] Contular Outfit Set B',
    }, {
      id: 604457,
      mainCategoryId: '55',
      name: '[Sage] Contular Classic Set B',
    }, {
      id: 604458,
      mainCategoryId: '55',
      name: '[Sage] Karlstein Hat',
    }, {
      id: 604459,
      mainCategoryId: '55',
      name: '[Sage] Karlstein Armor',
    }, {
      id: 604460,
      mainCategoryId: '55',
      name: '[Sage] Karlstein Kyve',
    }, {
      id: 604461,
      mainCategoryId: '55',
      name: '[Sage] Karlstein Talisman',
    }, {
      id: 604462,
      mainCategoryId: '55',
      name: '[Sage] Karlstein Classic Set',
    }, {
      id: 604594,
      mainCategoryId: '55',
      name: '[Shai] Skippity Hoppity Florang',
    }, {
      id: 604595,
      mainCategoryId: '55',
      name: '[Shai] Skippity Hoppity Vitclari',
    }, {
      id: 604596,
      mainCategoryId: '55',
      name: '[Shai] Skippity Hoppity Classic Set',
    }, {
      id: 604610,
      mainCategoryId: '55',
      name: '[Shai] Rosa De Sharon Headpiece',
    }, {
      id: 604611,
      mainCategoryId: '55',
      name: '[Shai] Rosa De Sharon Clothes',
    }, {
      id: 604612,
      mainCategoryId: '55',
      name: '[Shai] Rosa De Sharon Shoes',
    }, {
      id: 604613,
      mainCategoryId: '55',
      name: '[Shai] Rosa De Sharon Outfit Set',
    }, {
      id: 604614,
      mainCategoryId: '55',
      name: '[Nova] Rosa De Sharon Headpiece',
    }, {
      id: 604616,
      mainCategoryId: '55',
      name: '[Nova] Rosa De Sharon Shoes',
    }, {
      id: 604617,
      mainCategoryId: '55',
      name: '[Nova] Rosa De Sharon Outfit Set',
    }, {
      id: 690506,
      mainCategoryId: '1',
      name: 'Elsh Battle Axe',
    }, {
      id: 690508,
      mainCategoryId: '1',
      name: 'Azwell Battle Axe',
    }, {
      id: 690509,
      mainCategoryId: '1',
      name: 'Ain Battle Axe',
    }, {
      id: 690510,
      mainCategoryId: '1',
      name: 'Seleth Battle Axe',
    }, {
      id: 690512,
      mainCategoryId: '1',
      name: 'Liverto Battle Axe',
    }, {
      id: 690513,
      mainCategoryId: '1',
      name: 'Kzarka Battle Axe',
    }, {
      id: 690515,
      mainCategoryId: '1',
      name: 'Kalis Battle Axe',
    }, {
      id: 690516,
      mainCategoryId: '1',
      name: 'Bares Battle Axe',
    }, {
      id: 690517,
      mainCategoryId: '1',
      name: 'Yuria Battle Axe',
    }, {
      id: 690518,
      mainCategoryId: '1',
      name: 'Krea Battle Axe',
    }, {
      id: 690519,
      mainCategoryId: '1',
      name: 'Rosar Battle Axe',
    }, {
      id: 690520,
      mainCategoryId: '1',
      name: 'Styd Battle Axe',
    }, {
      id: 690521,
      mainCategoryId: '1',
      name: 'Ultimate Styd Battle Axe',
    }, {
      id: 690541,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Battle Axe',
    }, {
      id: 690563,
      mainCategoryId: '1',
      name: 'Blackstar Battle Axe',
    }, {
      id: 691502,
      mainCategoryId: '10',
      name: 'Frost Iron Jordun',
    }, {
      id: 691503,
      mainCategoryId: '10',
      name: 'Dandelion Jordun',
    }, {
      id: 691504,
      mainCategoryId: '10',
      name: 'Frost Jordun',
    }, {
      id: 692004,
      mainCategoryId: '1',
      name: 'Elsh Shamshir',
    }, {
      id: 692006,
      mainCategoryId: '1',
      name: 'Azwell Shamshir',
    }, {
      id: 692007,
      mainCategoryId: '1',
      name: 'Ain Shamshir',
    }, {
      id: 692008,
      mainCategoryId: '1',
      name: 'Seleth Shamshir',
    }, {
      id: 692010,
      mainCategoryId: '1',
      name: 'Liverto Shamshir',
    }, {
      id: 692011,
      mainCategoryId: '1',
      name: 'Kzarka Shamshir',
    }, {
      id: 692013,
      mainCategoryId: '1',
      name: 'Kalis Shamshir',
    }, {
      id: 692014,
      mainCategoryId: '1',
      name: 'Bares Shamshir',
    }, {
      id: 692015,
      mainCategoryId: '1',
      name: 'Yuria Shamshir',
    }, {
      id: 692016,
      mainCategoryId: '1',
      name: 'Krea Shamshir',
    }, {
      id: 692017,
      mainCategoryId: '1',
      name: 'Rosar Shamshir',
    }, {
      id: 692018,
      mainCategoryId: '1',
      name: 'Styd Shamshir',
    }, {
      id: 692039,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Shamshir',
    }, {
      id: 692045,
      mainCategoryId: '1',
      name: 'Blackstar Shamshir',
    }, {
      id: 692504,
      mainCategoryId: '5',
      name: 'Ahin Haladie',
    }, {
      id: 692505,
      mainCategoryId: '5',
      name: 'Baduum Haladie',
    }, {
      id: 692506,
      mainCategoryId: '5',
      name: 'Neshal Haladie',
    }, {
      id: 692510,
      mainCategoryId: '5',
      name: 'Krea Haladie',
    }, {
      id: 692511,
      mainCategoryId: '5',
      name: 'Rosar Haladie',
    }, {
      id: 692514,
      mainCategoryId: '5',
      name: 'Nouver Haladie',
    }, {
      id: 692516,
      mainCategoryId: '5',
      name: 'Kutum Haladie',
    }, {
      id: 692801,
      mainCategoryId: '10',
      name: 'Baharom Dual Glaives',
    }, {
      id: 692802,
      mainCategoryId: '10',
      name: 'Dandelion Dual Glaives',
    }, {
      id: 692803,
      mainCategoryId: '10',
      name: 'Sahmarin Dual Glaives',
    }, {
      id: 692812,
      mainCategoryId: '10',
      name: 'Dragon Slayer Dual Glaives',
    }, {
      id: 692813,
      mainCategoryId: '10',
      name: 'Hughol\'s Dual Glaives',
    }, {
      id: 701011,
      mainCategoryId: '15',
      name: 'Akum Helmet',
    }, {
      id: 701012,
      mainCategoryId: '15',
      name: 'Akum Armor',
    }, {
      id: 701013,
      mainCategoryId: '15',
      name: 'Akum Gloves',
    }, {
      id: 701014,
      mainCategoryId: '15',
      name: 'Akum Shoes',
    }, {
      id: 702501,
      mainCategoryId: '10',
      name: 'Dragon Slayer Great Sword',
    }, {
      id: 702502,
      mainCategoryId: '10',
      name: 'Dragon Slayer Scythe',
    }, {
      id: 702503,
      mainCategoryId: '10',
      name: 'Dragon Slayer Iron Buster',
    }, {
      id: 702504,
      mainCategoryId: '10',
      name: 'Dragon Slayer Kamasylven Sword',
    }, {
      id: 702505,
      mainCategoryId: '10',
      name: 'Dragon Slayer Celestial Bo Staff',
    }, {
      id: 702506,
      mainCategoryId: '10',
      name: 'Dragon Slayer Lancia',
    }, {
      id: 702507,
      mainCategoryId: '10',
      name: 'Dragon Slayer Crescent Blade',
    }, {
      id: 702508,
      mainCategoryId: '10',
      name: 'Dragon Slayer Kerispear',
    }, {
      id: 702509,
      mainCategoryId: '10',
      name: 'Dragon Slayer Sura Katana',
    }, {
      id: 702510,
      mainCategoryId: '10',
      name: 'Dragon Slayer Sah Chakram',
    }, {
      id: 702511,
      mainCategoryId: '10',
      name: 'Dragon Slayer Aad Sphera',
    }, {
      id: 702512,
      mainCategoryId: '10',
      name: 'Dragon Slayer Godr Sphera',
    }, {
      id: 702513,
      mainCategoryId: '10',
      name: 'Dragon Slayer Vediant',
    }, {
      id: 702514,
      mainCategoryId: '10',
      name: 'Dragon Slayer Gardbrace',
    }, {
      id: 702515,
      mainCategoryId: '10',
      name: 'Dragon Slayer Cestus',
    }, {
      id: 702516,
      mainCategoryId: '10',
      name: 'Dragon Slayer Crimson Glaives',
    }, {
      id: 702517,
      mainCategoryId: '10',
      name: 'Hughol\'s Great Sword',
    }, {
      id: 702518,
      mainCategoryId: '10',
      name: 'Hughol\'s Scythe',
    }, {
      id: 702519,
      mainCategoryId: '10',
      name: 'Hughol\'s Iron Buster',
    }, {
      id: 702520,
      mainCategoryId: '10',
      name: 'Hughol\'s Kamasylven Sword',
    }, {
      id: 702521,
      mainCategoryId: '10',
      name: 'Hughol\'s Celestial Bo Staff',
    }, {
      id: 702522,
      mainCategoryId: '10',
      name: 'Hughol\'s Lancia',
    }, {
      id: 702523,
      mainCategoryId: '10',
      name: 'Hughol\'s Crescent Blade',
    }, {
      id: 702524,
      mainCategoryId: '10',
      name: 'Hughol\'s Kerispear',
    }, {
      id: 702525,
      mainCategoryId: '10',
      name: 'Hughol\'s Sura Katana',
    }, {
      id: 702526,
      mainCategoryId: '10',
      name: 'Hughol\'s Sah Chakram',
    }, {
      id: 702527,
      mainCategoryId: '10',
      name: 'Hughol\'s Aad Sphera',
    }, {
      id: 702528,
      mainCategoryId: '10',
      name: 'Hughol\'s Godr Sphera',
    }, {
      id: 702529,
      mainCategoryId: '10',
      name: 'Hughol\'s Vediant',
    }, {
      id: 702530,
      mainCategoryId: '10',
      name: 'Hughol\'s Gardbrace',
    }, {
      id: 702531,
      mainCategoryId: '10',
      name: 'Hughol\'s Cestus',
    }, {
      id: 702532,
      mainCategoryId: '10',
      name: 'Hughol\'s Crimson Glaives',
    }, {
      id: 702533,
      mainCategoryId: '10',
      name: 'Dragon Slayer Greatbow',
    }, {
      id: 702534,
      mainCategoryId: '10',
      name: 'Hughol\'s Greatbow',
    }, {
      id: 702535,
      mainCategoryId: '10',
      name: 'Dragon Slayer Jordun',
    }, {
      id: 702536,
      mainCategoryId: '10',
      name: 'Hughol\'s Jordun',
    }, {
      id: 705015,
      mainCategoryId: '15',
      name: 'Manos Trainer\'s Clothes',
    }, {
      id: 705022,
      mainCategoryId: '15',
      name: 'Manos Hunter\'s Clothes',
    }, {
      id: 705032,
      mainCategoryId: '15',
      name: 'Manos Sailor\'s Clothes',
    }, {
      id: 705037,
      mainCategoryId: '15',
      name: 'Manos Cook\'s Clothes',
    }, {
      id: 705047,
      mainCategoryId: '15',
      name: 'Manos Alchemist\'s Clothes',
    }, {
      id: 705052,
      mainCategoryId: '15',
      name: 'Manos Fisher\'s Clothes',
    }, {
      id: 705074,
      mainCategoryId: '15',
      name: 'Crio Fisher\'s Clothes',
    }, {
      id: 705075,
      mainCategoryId: '15',
      name: 'Srulk Sailor\'s Clothes',
    }, {
      id: 705076,
      mainCategoryId: '15',
      name: 'Robeau Hunter\'s Clothes',
    }, {
      id: 705081,
      mainCategoryId: '15',
      name: 'Gorgath Alchemist\'s Clothes',
    }, {
      id: 705086,
      mainCategoryId: '15',
      name: 'Roroju Cook\'s Clothes',
    }, {
      id: 705107,
      mainCategoryId: '15',
      name: 'Loggia Fisher\'s Clothes',
    }, {
      id: 705108,
      mainCategoryId: '15',
      name: 'Loggia Sailor\'s Clothes',
    }, {
      id: 705109,
      mainCategoryId: '15',
      name: 'Loggia Hunter\'s Clothes',
    }, {
      id: 705114,
      mainCategoryId: '15',
      name: 'Loggia Alchemist\'s Clothes',
    }, {
      id: 705119,
      mainCategoryId: '15',
      name: 'Loggia Cook\'s Clothes',
    }, {
      id: 705148,
      mainCategoryId: '15',
      name: 'Loggia Trainer\'s Clothes',
    }, {
      id: 705153,
      mainCategoryId: '15',
      name: 'Izaro Trainer\'s Clothes',
    }, {
      id: 705154,
      mainCategoryId: '40',
      name: 'Loggia Riding Crop',
    }, {
      id: 705155,
      mainCategoryId: '40',
      name: 'Izaro Riding Crop',
    }, {
      id: 705156,
      mainCategoryId: '40',
      name: 'Manos Riding Crop',
    }, {
      id: 705501,
      mainCategoryId: '20',
      name: 'Loggia Necklace',
    }, {
      id: 705502,
      mainCategoryId: '20',
      name: 'Loggia Earring',
    }, {
      id: 705503,
      mainCategoryId: '20',
      name: 'Loggia Ring',
    }, {
      id: 705504,
      mainCategoryId: '20',
      name: 'Loggia Belt',
    }, {
      id: 705505,
      mainCategoryId: '20',
      name: 'Geranoa Necklace',
    }, {
      id: 705506,
      mainCategoryId: '20',
      name: 'Geranoa Earring',
    }, {
      id: 705507,
      mainCategoryId: '20',
      name: 'Geranoa Ring',
    }, {
      id: 705508,
      mainCategoryId: '20',
      name: 'Geranoa Belt',
    }, {
      id: 705509,
      mainCategoryId: '20',
      name: 'Manos Necklace',
    }, {
      id: 705510,
      mainCategoryId: '20',
      name: 'Manos Earring',
    }, {
      id: 705511,
      mainCategoryId: '20',
      name: 'Manos Ring',
    }, {
      id: 705512,
      mainCategoryId: '20',
      name: 'Manos Belt',
    }, {
      id: 705513,
      mainCategoryId: '15',
      name: 'Loggia Gatherer\'s Clothes',
    }, {
      id: 705514,
      mainCategoryId: '15',
      name: 'Loggia Craftsman\'s Clothes',
    }, {
      id: 705515,
      mainCategoryId: '15',
      name: 'Carta Gatherer\'s Clothes',
    }, {
      id: 705516,
      mainCategoryId: '15',
      name: 'Carta Craftsman\'s Clothes',
    }, {
      id: 705517,
      mainCategoryId: '15',
      name: 'Manos Gatherer\'s Clothes',
    }, {
      id: 705518,
      mainCategoryId: '15',
      name: 'Manos Craftsman\'s Clothes',
    }, {
      id: 715001,
      mainCategoryId: '1',
      name: 'Blackstar Longsword',
    }, {
      id: 715003,
      mainCategoryId: '1',
      name: 'Blackstar Longbow',
    }, {
      id: 715005,
      mainCategoryId: '1',
      name: 'Blackstar Amulet',
    }, {
      id: 715007,
      mainCategoryId: '1',
      name: 'Blackstar Axe',
    }, {
      id: 715009,
      mainCategoryId: '1',
      name: 'Blackstar Shortsword',
    }, {
      id: 715011,
      mainCategoryId: '1',
      name: 'Blackstar Blade',
    }, {
      id: 715013,
      mainCategoryId: '1',
      name: 'Blackstar Staff',
    }, {
      id: 715016,
      mainCategoryId: '1',
      name: 'Blackstar Kriegsmesser',
    }, {
      id: 715017,
      mainCategoryId: '1',
      name: 'Blackstar Gauntlet',
    }, {
      id: 715019,
      mainCategoryId: '1',
      name: 'Blackstar Crescent Pendulum',
    }, {
      id: 715021,
      mainCategoryId: '1',
      name: 'Blackstar Crossbow',
    }, {
      id: 718503,
      mainCategoryId: '1',
      name: 'Elsh Florang',
    }, {
      id: 718505,
      mainCategoryId: '1',
      name: 'Azwell Florang',
    }, {
      id: 718506,
      mainCategoryId: '1',
      name: 'Ain Florang',
    }, {
      id: 718507,
      mainCategoryId: '1',
      name: 'Seleth Florang',
    }, {
      id: 718509,
      mainCategoryId: '1',
      name: 'Liverto Florang',
    }, {
      id: 718510,
      mainCategoryId: '1',
      name: 'Kzarka Florang',
    }, {
      id: 718512,
      mainCategoryId: '1',
      name: 'Kalis Florang',
    }, {
      id: 718513,
      mainCategoryId: '1',
      name: 'Bares Florang',
    }, {
      id: 718514,
      mainCategoryId: '1',
      name: 'Yuria Florang',
    }, {
      id: 718520,
      mainCategoryId: '1',
      name: 'Krea Florang',
    }, {
      id: 718521,
      mainCategoryId: '1',
      name: 'Rosar Florang',
    }, {
      id: 718522,
      mainCategoryId: '1',
      name: 'Styd Florang',
    }, {
      id: 718523,
      mainCategoryId: '1',
      name: 'Ultimate Styd Florang',
    }, {
      id: 718586,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Florang',
    }, {
      id: 718616,
      mainCategoryId: '1',
      name: 'Blackstar Florang',
    }, {
      id: 719003,
      mainCategoryId: '5',
      name: 'Saiyer Vitclari',
    }, {
      id: 719004,
      mainCategoryId: '5',
      name: 'Oros Vitclari',
    }, {
      id: 719005,
      mainCategoryId: '5',
      name: 'Theos Vitclari',
    }, {
      id: 719024,
      mainCategoryId: '5',
      name: 'Krea Vitclari',
    }, {
      id: 719025,
      mainCategoryId: '5',
      name: 'Rosar Vitclari',
    }, {
      id: 719038,
      mainCategoryId: '5',
      name: 'Nouver Vitclari',
    }, {
      id: 719040,
      mainCategoryId: '5',
      name: 'Kutum Vitclari',
    }, {
      id: 719525,
      mainCategoryId: '15',
      name: '[Shai] Kanna\'s Naga Disguise',
    }, {
      id: 719544,
      mainCategoryId: '15',
      name: '[Shai] Florin Cook\'s Clothes',
    }, {
      id: 719545,
      mainCategoryId: '15',
      name: '[Shai] Florin Herb Gatherer Clothes',
    }, {
      id: 719898,
      mainCategoryId: '15',
      name: 'Fallen God\'s Armor',
    }, {
      id: 719901,
      mainCategoryId: '15',
      name: 'Blackstar Helmet',
    }, {
      id: 719902,
      mainCategoryId: '15',
      name: 'Blackstar Armor',
    }, {
      id: 719903,
      mainCategoryId: '15',
      name: 'Blackstar Gloves',
    }, {
      id: 720501,
      mainCategoryId: '40',
      name: 'Manos Processing Stone - Lake',
    }, {
      id: 720502,
      mainCategoryId: '40',
      name: 'Manos Processing Stone - Vitality',
    }, {
      id: 720503,
      mainCategoryId: '40',
      name: 'Manos Processing Stone - Energy',
    }, {
      id: 720504,
      mainCategoryId: '40',
      name: 'Manos Processing Stone - Sun',
    }, {
      id: 720505,
      mainCategoryId: '40',
      name: 'Manos Processing Stone - Wind',
    }, {
      id: 720506,
      mainCategoryId: '40',
      name: 'Manos Processing Stone - Lava',
    }, {
      id: 720508,
      mainCategoryId: '40',
      name: 'Dostter Steel Lumbering Axe',
    }, {
      id: 720509,
      mainCategoryId: '40',
      name: 'Dostter Steel Fluid Collector',
    }, {
      id: 720510,
      mainCategoryId: '40',
      name: 'Dostter Steel Tanning Knife',
    }, {
      id: 720511,
      mainCategoryId: '40',
      name: 'Dostter Steel Butcher Knife',
    }, {
      id: 720512,
      mainCategoryId: '40',
      name: 'Dostter Steel Pickaxe',
    }, {
      id: 720513,
      mainCategoryId: '40',
      name: 'Techthon Processing Stone - Lake',
    }, {
      id: 720514,
      mainCategoryId: '40',
      name: 'Techthon Processing Stone - Vitality',
    }, {
      id: 720515,
      mainCategoryId: '40',
      name: 'Techthon Processing Stone - Energy',
    }, {
      id: 720516,
      mainCategoryId: '40',
      name: 'Techthon Processing Stone - Sun',
    }, {
      id: 720517,
      mainCategoryId: '40',
      name: 'Techthon Processing Stone - Wind',
    }, {
      id: 720518,
      mainCategoryId: '40',
      name: 'Techthon Processing Stone - Lava',
    }, {
      id: 720519,
      mainCategoryId: '40',
      name: 'Loggia Hoe',
    }, {
      id: 720520,
      mainCategoryId: '40',
      name: 'Loggia Lumbering Axe',
    }, {
      id: 720521,
      mainCategoryId: '40',
      name: 'Loggia Fluid Collector',
    }, {
      id: 720522,
      mainCategoryId: '40',
      name: 'Loggia Tanning Knife',
    }, {
      id: 720523,
      mainCategoryId: '40',
      name: 'Loggia Butcher Knife',
    }, {
      id: 720524,
      mainCategoryId: '40',
      name: 'Loggia Pickaxe',
    }, {
      id: 720525,
      mainCategoryId: '40',
      name: 'Loggia Processing Stone - Lake',
    }, {
      id: 720526,
      mainCategoryId: '40',
      name: 'Loggia Processing Stone - Vitality',
    }, {
      id: 720527,
      mainCategoryId: '40',
      name: 'Loggia Processing Stone - Energy',
    }, {
      id: 720528,
      mainCategoryId: '40',
      name: 'Loggia Processing Stone - Sun',
    }, {
      id: 720529,
      mainCategoryId: '40',
      name: 'Loggia Processing Stone - Wind',
    }, {
      id: 720530,
      mainCategoryId: '40',
      name: 'Loggia Processing Stone - Lava',
    }, {
      id: 721003,
      mainCategoryId: '30',
      name: 'Caphras Stone',
    }, {
      id: 730504,
      mainCategoryId: '1',
      name: 'Elsh Morning Star',
    }, {
      id: 730506,
      mainCategoryId: '1',
      name: 'Azwell Morning Star',
    }, {
      id: 730507,
      mainCategoryId: '1',
      name: 'Ain Morning Star',
    }, {
      id: 730508,
      mainCategoryId: '1',
      name: 'Seleth Morning Star',
    }, {
      id: 730510,
      mainCategoryId: '1',
      name: 'Liverto Morning Star',
    }, {
      id: 730511,
      mainCategoryId: '1',
      name: 'Kzarka Morning Star',
    }, {
      id: 730513,
      mainCategoryId: '1',
      name: 'Kalis Morning Star',
    }, {
      id: 730514,
      mainCategoryId: '1',
      name: 'Bares Morning Star',
    }, {
      id: 730515,
      mainCategoryId: '1',
      name: 'Yuria Morning Star',
    }, {
      id: 730516,
      mainCategoryId: '1',
      name: 'Krea Morning Star',
    }, {
      id: 730517,
      mainCategoryId: '1',
      name: 'Rosar Morning Star',
    }, {
      id: 730518,
      mainCategoryId: '1',
      name: 'Styd Morning Star',
    }, {
      id: 730519,
      mainCategoryId: '1',
      name: 'Ultimate Styd Morning Star',
    }, {
      id: 730539,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Morning Star',
    }, {
      id: 730564,
      mainCategoryId: '1',
      name: 'Blackstar Morning Star',
    }, {
      id: 730704,
      mainCategoryId: '5',
      name: 'Pau Quoratum',
    }, {
      id: 730705,
      mainCategoryId: '5',
      name: 'Luka Quoratum',
    }, {
      id: 730706,
      mainCategoryId: '5',
      name: 'Vishur Quoratum',
    }, {
      id: 730710,
      mainCategoryId: '5',
      name: 'Krea Quoratum',
    }, {
      id: 730711,
      mainCategoryId: '5',
      name: 'Rosar Quoratum',
    }, {
      id: 730714,
      mainCategoryId: '5',
      name: 'Nouver Quoratum',
    }, {
      id: 730716,
      mainCategoryId: '5',
      name: 'Kutum Quoratum',
    }, {
      id: 730902,
      mainCategoryId: '10',
      name: 'Dark Thorn Sting',
    }, {
      id: 730903,
      mainCategoryId: '10',
      name: 'Dandelion Sting',
    }, {
      id: 730904,
      mainCategoryId: '10',
      name: 'Crimson Thorn Sting',
    }, {
      id: 730913,
      mainCategoryId: '10',
      name: 'Dragon Slayer Sting',
    }, {
      id: 730914,
      mainCategoryId: '10',
      name: 'Hughol\'s Sting',
    }, {
      id: 731101,
      mainCategoryId: '10',
      name: 'Blackstar Great Sword',
    }, {
      id: 731102,
      mainCategoryId: '10',
      name: 'Blackstar Scythe',
    }, {
      id: 731103,
      mainCategoryId: '10',
      name: 'Blackstar Iron Buster',
    }, {
      id: 731104,
      mainCategoryId: '10',
      name: 'Blackstar Kamasylven Sword',
    }, {
      id: 731105,
      mainCategoryId: '10',
      name: 'Blackstar Celestial Bo Staff',
    }, {
      id: 731106,
      mainCategoryId: '10',
      name: 'Blackstar Lancia',
    }, {
      id: 731107,
      mainCategoryId: '10',
      name: 'Blackstar Crescent Blade',
    }, {
      id: 731108,
      mainCategoryId: '10',
      name: 'Blackstar Kerispear',
    }, {
      id: 731109,
      mainCategoryId: '10',
      name: 'Blackstar Sura Katana',
    }, {
      id: 731110,
      mainCategoryId: '10',
      name: 'Blackstar Sah Chakram',
    }, {
      id: 731111,
      mainCategoryId: '10',
      name: 'Blackstar Aad Sphera',
    }, {
      id: 731112,
      mainCategoryId: '10',
      name: 'Blackstar Godr Sphera',
    }, {
      id: 731113,
      mainCategoryId: '10',
      name: 'Blackstar Vediant',
    }, {
      id: 731114,
      mainCategoryId: '10',
      name: 'Blackstar Gardbrace',
    }, {
      id: 731115,
      mainCategoryId: '10',
      name: 'Blackstar Cestus',
    }, {
      id: 731116,
      mainCategoryId: '10',
      name: 'Blackstar Greatbow',
    }, {
      id: 731117,
      mainCategoryId: '10',
      name: 'Blackstar Crimson Glaives',
    }, {
      id: 731118,
      mainCategoryId: '10',
      name: 'Blackstar Jordun',
    }, {
      id: 731119,
      mainCategoryId: '10',
      name: 'Blackstar Dual Glaives',
    }, {
      id: 731120,
      mainCategoryId: '10',
      name: 'Blackstar Sting',
    }, {
      id: 732253,
      mainCategoryId: '1',
      name: 'Elsh Kyve',
    }, {
      id: 732255,
      mainCategoryId: '1',
      name: 'Azwell Kyve',
    }, {
      id: 732256,
      mainCategoryId: '1',
      name: 'Ain Kyve',
    }, {
      id: 732257,
      mainCategoryId: '1',
      name: 'Seleth Kyve',
    }, {
      id: 732259,
      mainCategoryId: '1',
      name: 'Liverto Kyve',
    }, {
      id: 732260,
      mainCategoryId: '1',
      name: 'Kzarka Kyve',
    }, {
      id: 732262,
      mainCategoryId: '1',
      name: 'Kalis Kyve',
    }, {
      id: 732263,
      mainCategoryId: '1',
      name: 'Bares Kyve',
    }, {
      id: 732264,
      mainCategoryId: '1',
      name: 'Yuria Kyve',
    }, {
      id: 732265,
      mainCategoryId: '1',
      name: 'Krea Kyve',
    }, {
      id: 732266,
      mainCategoryId: '1',
      name: 'Rosar Kyve',
    }, {
      id: 732267,
      mainCategoryId: '1',
      name: 'Styd Kyve',
    }, {
      id: 732288,
      mainCategoryId: '1',
      name: 'Offin Tett\'s Radiant Kyve',
    }, {
      id: 732313,
      mainCategoryId: '1',
      name: 'Blackstar Kyve',
    }, {
      id: 754002,
      mainCategoryId: '15',
      name: '[Warrior] Karlstein Armor',
    }, {
      id: 754005,
      mainCategoryId: '15',
      name: '[Sorceress] Karlstein Hat',
    }, {
      id: 754006,
      mainCategoryId: '15',
      name: '[Sorceress] Karlstein Armor',
    }, {
      id: 754007,
      mainCategoryId: '15',
      name: '[Sorceress] Karlstein Shoes',
    }, {
      id: 754008,
      mainCategoryId: '15',
      name: '[Sorceress] Karlstein Amulet',
    }, {
      id: 754009,
      mainCategoryId: '15',
      name: '[Sorceress] Karlstein Talisman',
    }, {
      id: 754010,
      mainCategoryId: '15',
      name: '[Ranger] Karlstein Hat',
    }, {
      id: 754011,
      mainCategoryId: '15',
      name: '[Ranger] Karlstein Armor',
    }, {
      id: 754012,
      mainCategoryId: '15',
      name: '[Ranger] Karlstein Shoes',
    }, {
      id: 754015,
      mainCategoryId: '15',
      name: '[Berserker] Karlstein Hat',
    }, {
      id: 754017,
      mainCategoryId: '15',
      name: '[Berserker] Karlstein Axe',
    }, {
      id: 754027,
      mainCategoryId: '15',
      name: '[Musa] Karlstein Horn Bow',
    }, {
      id: 754029,
      mainCategoryId: '15',
      name: '[Valkyrie] Karlstein Armor',
    }, {
      id: 754034,
      mainCategoryId: '15',
      name: '[Maehwa] Karlstein Armor',
    }, {
      id: 754035,
      mainCategoryId: '15',
      name: '[Maehwa] Karlstein Shoes',
    }, {
      id: 754042,
      mainCategoryId: '15',
      name: '[Witch] Karlstein Hat',
    }, {
      id: 754043,
      mainCategoryId: '15',
      name: '[Witch] Karlstein Armor',
    }, {
      id: 754045,
      mainCategoryId: '15',
      name: '[Witch] Karlstein Staff',
    }, {
      id: 754046,
      mainCategoryId: '15',
      name: '[Witch] Karlstein Dagger',
    }, {
      id: 754047,
      mainCategoryId: '15',
      name: '[Kunoichi] Karlstein Hat',
    }, {
      id: 754048,
      mainCategoryId: '15',
      name: '[Kunoichi] Karlstein Armor',
    }, {
      id: 754050,
      mainCategoryId: '15',
      name: '[Kunoichi] Karlstein Shortsword',
    }, {
      id: 754052,
      mainCategoryId: '15',
      name: '[Ninja] Karlstein Hat',
    }, {
      id: 754053,
      mainCategoryId: '15',
      name: '[Ninja] Karlstein Armor',
    }, {
      id: 754054,
      mainCategoryId: '15',
      name: '[Ninja] Karlstein Shortsword',
    }, {
      id: 754055,
      mainCategoryId: '15',
      name: '[Ninja] Karlstein Kunai',
    }, {
      id: 754056,
      mainCategoryId: '15',
      name: '[Mystic] Karlstein Hat',
    }, {
      id: 754057,
      mainCategoryId: '15',
      name: '[Mystic] Karlstein Armor',
    }, {
      id: 754058,
      mainCategoryId: '15',
      name: '[Mystic] Karlstein Shoes',
    }, {
      id: 754059,
      mainCategoryId: '15',
      name: '[Mystic] Karlstein Gauntlet',
    }, {
      id: 754060,
      mainCategoryId: '15',
      name: '[Mystic] Karlstein Vambrace',
    }, {
      id: 754061,
      mainCategoryId: '15',
      name: '[Dark Knight] Karlstein Hat',
    }, {
      id: 754062,
      mainCategoryId: '15',
      name: '[Dark Knight] Karlstein Armor',
    }, {
      id: 754063,
      mainCategoryId: '15',
      name: '[Dark Knight] Karlstein Shoes',
    }, {
      id: 754064,
      mainCategoryId: '15',
      name: '[Dark Knight] Karlstein Kriegsmesser',
    }, {
      id: 754066,
      mainCategoryId: '15',
      name: '[Striker] Karlstein Hat',
    }, {
      id: 754070,
      mainCategoryId: '15',
      name: '[Lahn] Karlstein Hat',
    }, {
      id: 754071,
      mainCategoryId: '15',
      name: '[Lahn] Karlstein Armor',
    }, {
      id: 754072,
      mainCategoryId: '15',
      name: '[Lahn] Karlstein Shoes',
    }, {
      id: 754073,
      mainCategoryId: '15',
      name: '[Lahn] Karlstein Crescent Pendulum',
    }, {
      id: 754074,
      mainCategoryId: '15',
      name: '[Lahn] Karlstein Noble Sword',
    }, {
      id: 754075,
      mainCategoryId: '15',
      name: '[Archer] Karlstein Hat',
    }, {
      id: 754076,
      mainCategoryId: '15',
      name: '[Archer] Karlstein Armor',
    }, {
      id: 754077,
      mainCategoryId: '15',
      name: '[Archer] Karlstein Crossbow',
    }, {
      id: 754087,
      mainCategoryId: '15',
      name: '[Nova] Karlstein Shoes',
    }, {
      id: 754088,
      mainCategoryId: '15',
      name: '[Nova] Karlstein Morning Star',
    }, {
      id: 754089,
      mainCategoryId: '15',
      name: '[Nova] Karlstein Quoratum',
    }, {
      id: 757010,
      mainCategoryId: '65',
      name: 'Mythical Feather',
    }, {
      id: 757031,
      mainCategoryId: '35',
      name: 'Fiery Celerity Draught',
    }, {
      id: 757032,
      mainCategoryId: '35',
      name: 'Stonetail Wind\'s Meal',
    }]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Item');
    await queryInterface.bulkDelete('MainCategory');
  },
};
