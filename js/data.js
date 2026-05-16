const tools = [
  {
    id: "upscayl",
    name: "Upscayl"
  },
  {
    id: "topaz",
    name: "Topaz Gigapixel AI"
  },
  {
    id: "on1",
    name: "ON1 Resize AI 2026"
  },
  {
    id: "waifu2x",
    name: "Waifu2xGUIExtension"
  },
  {
    id: "aiarty",
    name: "Aiarty Image Enhancer"
  }
];

const categories = [
  {
    id: "photo",
    name: "Фотографические изображения",
    images: [
      {
        id: "chernika",
        name: "Черника",
        description: "Фотографическое изображение с мелкими природными текстурами и плавными тональными переходами.",
        original: "images/original/chernika3840.png",
        low: "images/low/chernika960.png",
        results: {
          upscayl: "images/upscayl/1chernika_Upscayl.png",
          topaz: "images/topaz/1chernika_Gigapixel.png",
          on1: "images/on1/1chernika_ON1.png",
          waifu2x: "images/waifu2x/1chernika_Waifu.png",
          aiarty: "images/aiarty/1chernika_Aiarty.png"
        }
      },
      {
        id: "city",
        name: "Городская сцена",
        description: "Фотографическое изображение с архитектурными объектами, прямыми линиями и множеством мелких деталей.",
        original: "images/original/city3840.png",
        low: "images/low/city960.png",
        results: {
          upscayl: "images/upscayl/1city_Upscayl.png",
          topaz: "images/topaz/1city_Gigapixel.png",
          on1: "images/on1/1city_ON1.png",
          waifu2x: "images/waifu2x/1city_Waifu.png",
          aiarty: "images/aiarty/1city_Aiarty.png"
        }
      },
      {
        id: "gora",
        name: "Горный пейзаж",
        description: "Фотографическое изображение с природными объектами, облаками, деревьями и дальним планом.",
        original: "images/original/gora3840.png",
        low: "images/low/gora960.png",
        results: {
          upscayl: "images/upscayl/1gora_Upscayl.png",
          topaz: "images/topaz/1gora_Gigapixel.png",
          on1: "images/on1/1gora_ON1.png",
          waifu2x: "images/waifu2x/1gora_Waifu.png",
          aiarty: "images/aiarty/1gora_Aiarty.png"
        }
      }
    ]
  },
  {
    id: "portrait",
    name: "Портретные изображения",
    images: [
      {
        id: "alt",
        name: "Портрет на светлом фоне",
        description: "Портретное изображение, используемое для оценки обработки лица, волос, кожи и одежды.",
        original: "images/original/alt3840.png",
        low: "images/low/alt960.png",
        results: {
          upscayl: "images/upscayl/2alt_Upscayl.png",
          topaz: "images/topaz/2alt_Gigapixel.png",
          on1: "images/on1/2alt_ON1.png",
          waifu2x: "images/waifu2x/2alt_Waifu.png",
          aiarty: "images/aiarty/2alt_Aiarty.png"
        }
      },
      {
        id: "red",
        name: "Портрет с размытым фоном",
        description: "Портретное изображение с выраженным фокусом на лице и размытием заднего плана.",
        original: "images/original/red3840.png",
        low: "images/low/red960.png",
        results: {
          upscayl: "images/upscayl/2red_Upscayl.png",
          topaz: "images/topaz/2red_Gigapixel.png",
          on1: "images/on1/2red_ON1.png",
          waifu2x: "images/waifu2x/2red_Waifu.png",
          aiarty: "images/aiarty/2red_Aiarty.png"
        }
      },
      {
        id: "tri",
        name: "Групповой портрет",
        description: "Портретная сцена с несколькими людьми и большим количеством мелких деталей.",
        original: "images/original/tri3840.png",
        low: "images/low/tri960.png",
        results: {
          upscayl: "images/upscayl/2tri_Upscayl.png",
          topaz: "images/topaz/2tri_Gigapixel.png",
          on1: "images/on1/2tri_ON1.png",
          waifu2x: "images/waifu2x/2tri_Waifu.png",
          aiarty: "images/aiarty/2tri_Aiarty.png"
        }
      }
    ]
  },
  {
    id: "screens",
    name: "Скриншоты из цифровой среды",
    images: [
      {
        id: "cyberpunk",
        name: "Ночная цифровая сцена",
        description: "Скриншот с большим количеством источников света, контрастных объектов и мелких деталей.",
        original: "images/original/cyberpunk3840.png",
        low: "images/low/cyberpunk960.png",
        results: {
          upscayl: "images/upscayl/3cyberpunk_Upscayl.png",
          topaz: "images/topaz/3cyberpunk_Gigapixel.png",
          on1: "images/on1/3cyberpunk_ON1.png",
          waifu2x: "images/waifu2x/3cyberpunk_Waifu.png",
          aiarty: "images/aiarty/3cyberpunk_Aiarty.png"
        }
      },
      {
        id: "ds",
        name: "Игровой пейзаж",
        description: "Скриншот из цифровой среды с фотореалистичной сценой и большим количеством природных текстур.",
        original: "images/original/ds3840.png",
        low: "images/low/ds960.png",
        results: {
          upscayl: "images/upscayl/3ds_Upscayl.png",
          topaz: "images/topaz/3ds_Gigapixel.png",
          on1: "images/on1/3ds_ON1.png",
          waifu2x: "images/waifu2x/3ds_Waifu.png",
          aiarty: "images/aiarty/3ds_Aiarty.png"
        }
      },
      {
        id: "overwatch",
        name: "Стилизованная игровая сцена",
        description: "Скриншот со стилизованными персонажами, освещением и контрастными деталями.",
        original: "images/original/overwatch3840.png",
        low: "images/low/overwatch960.png",
        results: {
          upscayl: "images/upscayl/3overwatch_Upscayl.png",
          topaz: "images/topaz/3overwatch_Gigapixel.png",
          on1: "images/on1/3overwatch_ON1.png",
          waifu2x: "images/waifu2x/3overwatch_Waifu.png",
          aiarty: "images/aiarty/3overwatch_Aiarty.png"
        }
      }
    ]
  },
  {
    id: "illustration",
    name: "Двумерная иллюстративная графика",
    images: [
      {
        id: "castle",
        name: "Иллюстративная сцена",
        description: "Изображение с выраженными контурами, декоративными элементами и стилизованной цветовой палитрой.",
        original: "images/original/castle3840.png",
        low: "images/low/castle960.png",
        results: {
          upscayl: "images/upscayl/4castle_Upscayl.png",
          topaz: "images/topaz/4castle_Gigapixel.png",
          on1: "images/on1/4castle_ON1.png",
          waifu2x: "images/waifu2x/4castle_Waifu.png",
          aiarty: "images/aiarty/4castle_Aiarty.png"
        }
      },
      {
        id: "cd",
        name: "Интерьерная иллюстрация",
        description: "Двумерная сцена с предметами, тенями, линиями и фоновыми деталями.",
        original: "images/original/cd3840.png",
        low: "images/low/cd960.png",
        results: {
          upscayl: "images/upscayl/4player_Upscayl.png",
          topaz: "images/topaz/4player_Gigapixel.png",
          on1: "images/on1/4player_ON1.png",
          waifu2x: "images/waifu2x/4player_Waifu.png",
          aiarty: "images/aiarty/4player_Aiarty.png"
        }
      },
      {
        id: "madara",
        name: "Фрагмент лица",
        description: "Двумерное изображение с крупным лицом, тенями, контрастными линиями и мелкими деталями.",
        original: "images/original/madara3840.png",
        low: "images/low/madara960.png",
        results: {
          upscayl: "images/upscayl/4madara_Upscayl.png",
          topaz: "images/topaz/4madara_Gigapixel.png",
          on1: "images/on1/4madara_ON1.png",
          waifu2x: "images/waifu2x/4madara_Waifu.png",
          aiarty: "images/aiarty/4madara_Aiarty.png"
        }
      }
    ]
  },
  {
    id: "text",
    name: "Текстовые, интерфейсные и логотипные элементы",
    images: [
      {
        id: "cats",
        name: "Контрастная графика",
        description: "Изображение с контрастными формами, линиями и мелкими декоративными элементами.",
        original: "images/original/cats3840.png",
        low: "images/low/cats960.png",
        results: {
          upscayl: "images/upscayl/5cats_Upscayl.png",
          topaz: "images/topaz/5cats_Gigapixel.png",
          on1: "images/on1/5cats_ON1.png",
          waifu2x: "images/waifu2x/5cats_Waifu.png",
          aiarty: "images/aiarty/5cats_Aiarty.png"
        }
      },
      {
        id: "bulka",
        name: "Логотипы и символы",
        description: "Изображение с большим количеством мелких контрастных символов и графических элементов.",
        original: "images/original/bulka3840.png",
        low: "images/low/bulka960.png",
        results: {
          upscayl: "images/upscayl/5bulka_Upscayl.png",
          topaz: "images/topaz/5bulka_Gigapixel.png",
          on1: "images/on1/5bulka_ON1.png",
          waifu2x: "images/waifu2x/5bulka_Waifu.png",
          aiarty: "images/aiarty/5bulka_Aiarty.png"
        }
      },
      {
        id: "logos",
        name: "Набор логотипов",
        description: "Изображение с текстовыми и логотипными элементами, где важны читаемость и сохранение формы символов.",
        original: "images/original/logos3840.png",
        low: "images/low/logos960.png",
        results: {
          upscayl: "images/upscayl/5logos_Upscayl.png",
          topaz: "images/topaz/5logos_Gigapixel.png",
          on1: "images/on1/5logos_ON1.png",
          waifu2x: "images/waifu2x/5logos_Waifu.png",
          aiarty: "images/aiarty/5logos_Aiarty.png"
        }
      }
    ]
  }
];
