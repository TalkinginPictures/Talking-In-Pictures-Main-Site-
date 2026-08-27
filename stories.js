/* ============================================
   Talking in Pictures — Story Data
   Add new stories here following the same format
   ============================================ */

const STORIES = {
  "big-picnic": {
    title: "🐻 The Big Picnic",
    cover: "images/package-cover-1.jpg",
    levels: {
      jade: {
        label: "Jade — First Words",
        pages: [
          { text: "Bear. Hungry.", words: [{e:"🐻",t:"Bear"},{e:"🍽️",t:"hungry"}] },
          { text: "Sandwich. Yum!", words: [{e:"🥪",t:"sandwich"},{e:"😋",t:"yum"}] },
          { text: "Gone! Oh no.", words: [{e:"❌",t:"gone"},{e:"😮",t:"oh no"}] },
          { text: "Bird. Sorry!", words: [{e:"🐦",t:"bird"},{e:"😊",t:"sorry"}] }
        ]
      },
      green: {
        label: "Green — Short Phrases",
        pages: [
          { text: "Bear is hungry. He sees a picnic.", words: [{e:"🐻",t:"Bear"},{e:"🌳",t:"picnic"},{e:"👀",t:"sees"}] },
          { text: "Bear wants the sandwich. It looks yummy.", words: [{e:"🥪",t:"sandwich"},{e:"🤤",t:"wants"},{e:"😋",t:"yummy"}] },
          { text: "The sandwich is gone! Where is it?", words: [{e:"❌",t:"gone"},{e:"❓",t:"where?"},{e:"🔍",t:"look"}] },
          { text: "A bird took it. Bear is surprised!", words: [{e:"🐦",t:"bird"},{e:"😲",t:"surprised"},{e:"🥪",t:"sandwich"}] }
        ]
      },
      blue: {
        label: "Blue — Full Sentences",
        pages: [
          { text: "Bear was hungry. He saw a picnic blanket with a big sandwich on it. He wanted that sandwich very much.", words: [{e:"🐻",t:"Bear"},{e:"🥪",t:"sandwich"},{e:"🌳",t:"picnic"}] },
          { text: "But when Bear looked again, the sandwich was gone! Someone had taken it. Bear was confused.", words: [{e:"❌",t:"gone"},{e:"❓",t:"who?"},{e:"😕",t:"confused"}] },
          { text: "A little bird flew down with crumbs on her beak. \"Sorry Bear,\" she chirped. \"It was just too tasty!\"", words: [{e:"🐦",t:"bird"},{e:"😊",t:"sorry"},{e:"🍞",t:"crumbs"}] },
          { text: "Bear smiled. He shared his berries with Bird. They had a lovely picnic after all.", words: [{e:"🫐",t:"berries"},{e:"🤝",t:"share"},{e:"😊",t:"happy"}] }
        ]
      },
      red: {
        label: "Red — Complex Story",
        pages: [
          { text: "One sunny morning, Bear wandered through the forest and caught the most delicious smell drifting through the trees. Someone was having a picnic, and there on the blanket sat the biggest, most beautiful sandwich Bear had ever seen.", words: [{e:"🐻",t:"Bear"},{e:"🌲",t:"forest"},{e:"🥪",t:"sandwich"}] },
          { text: "Bear licked his lips and took a step closer. But just as he reached out his paw, the sandwich vanished! Bear blinked. He looked left. He looked right. The sandwich had completely disappeared, and Bear had no idea where it had gone.", words: [{e:"👀",t:"look"},{e:"❌",t:"gone"},{e:"🤔",t:"mystery"}] },
          { text: "A tiny bluebird fluttered down from the oak tree above, her beak dusted with breadcrumbs. She looked rather embarrassed. \"I am so sorry, Bear,\" she tweeted. \"I saw it sitting there and I simply could not resist. It was the most marvellous sandwich I have ever tasted.\"", words: [{e:"🐦",t:"bluebird"},{e:"🌳",t:"oak tree"},{e:"😳",t:"sorry"}] },
          { text: "Bear thought for a moment, then opened his basket. Inside were plump blueberries, sweet strawberries and crunchy nuts. \"Let us share,\" he said kindly. So Bear and Bluebird sat together in the sunshine, and it turned out to be the best picnic either of them had ever had.", words: [{e:"🫐",t:"blueberries"},{e:"🤝",t:"share"},{e:"☀️",t:"sunshine"}] }
        ]
      }
    }
  },

  "space-adventure": {
    title: "🚀 The Space Adventure",
    cover: "images/package-cover-2.jpg",
    levels: {
      jade: {
        label: "Jade — First Words",
        pages: [
          { text: "Astronaut. Space.", words: [{e:"🧑‍🚀",t:"astronaut"},{e:"🚀",t:"rocket"}] },
          { text: "Stars. Wow!", words: [{e:"⭐",t:"stars"},{e:"😮",t:"wow"}] },
          { text: "Planet. Big!", words: [{e:"🪐",t:"planet"},{e:"🔭",t:"look"}] },
          { text: "Home. Safe.", words: [{e:"🏠",t:"home"},{e:"🛸",t:"spaceship"}] }
        ]
      },
      green: {
        label: "Green — Short Phrases",
        pages: [
          { text: "The astronaut sees stars. They are bright.", words: [{e:"🧑‍🚀",t:"astronaut"},{e:"⭐",t:"stars"},{e:"✨",t:"bright"}] },
          { text: "The rocket flies up. It goes zoom!", words: [{e:"🚀",t:"rocket"},{e:"☁️",t:"clouds"},{e:"💨",t:"zoom"}] },
          { text: "A big planet! It has rings.", words: [{e:"🪐",t:"planet"},{e:"💍",t:"rings"},{e:"🔭",t:"telescope"}] },
          { text: "Time to go home. Goodbye space!", words: [{e:"🛸",t:"spaceship"},{e:"👋",t:"goodbye"},{e:"🌍",t:"Earth"}] }
        ]
      },
      blue: {
        label: "Blue — Full Sentences",
        pages: [
          { text: "Captain Nova climbed into the rocket. The engines roared and the ship blasted off into the dark sky. She was going to explore a new planet!", words: [{e:"🧑‍🚀",t:"Captain Nova"},{e:"🚀",t:"rocket"},{e:"🌌",t:"space"}] },
          { text: "High above Earth, Nova looked out of the window. The stars twinkled like tiny diamonds. Then she saw something amazing — a planet with bright blue rings!", words: [{e:"🌍",t:"Earth"},{e:"⭐",t:"stars"},{e:"🪐",t:"planet"}] },
          { text: "Nova landed gently on the planet. The ground was soft and purple. She planted a flag and collected some special space rocks to take home.", words: [{e:"🚩",t:"flag"},{e:"🪨",t:"rocks"},{e:"🔬",t:"science"}] },
          { text: "It was time to return. Nova waved goodbye to the purple planet and fired up the engines. Soon she could see Earth getting bigger and bigger. Home at last!", words: [{e:"👋",t:"wave"},{e:"🛸",t:"spaceship"},{e:"🏠",t:"home"}] }
        ]
      },
      red: {
        label: "Red — Complex Story",
        pages: [
          { text: "Commander Yuki had trained for five years to lead the Horizon Mission. As the countdown reached zero, she felt the rumble of the boosters beneath her. The rocket climbed through the atmosphere, and soon the blue sky turned to velvet black. Her mission: to find water on the distant moon of Kepler-7.", words: [{e:"🧑‍🚀",t:"Commander Yuki"},{e:"🚀",t:"rocket"},{e:"🌑",t:"moon"}] },
          { text: "Three days into the journey, the navigation computer beeped urgently. An asteroid field lay directly ahead! Yuki had to make a quick decision. She fired the steering thrusters and guided the ship through a narrow gap between two giant space rocks. Her heart pounded, but she stayed calm and focused.", words: [{e:"☄️",t:"asteroid"},{e:"⚠️",t:"danger"},{e:"🎯",t:"focus"}] },
          { text: "When Yuki finally reached Kepler-7, she put on her spacesuit and stepped onto the surface. The ground crunched beneath her boots. Using her scanner, she searched for signs of ice. After hours of walking, she found it — a frozen lake hidden inside a deep crater! This discovery could change everything.", words: [{e:"🧊",t:"ice"},{e:"🔍",t:"discovery"},{e:"🏆",t:"success"}] },
          { text: "Yuki placed a beacon on the crater rim and sent her findings back to Earth. As she climbed back into the rocket for the long journey home, she looked out at the stars. Somewhere out there, more mysteries were waiting. But for now, she had done her job. Horizon Mission: complete.", words: [{e:"📡",t:"beacon"},{e:"🌍",t:"Earth"},{e:"✅",t:"complete"}] }
        ]
      }
    }
  }
};
