const DATA = {
  collections: {
    seaside: {
      cover: {
        photo: "seahorse", // this is being used as a work reference, to obtain the first photo.
        description: "Valery Yershov’s “Seaside Collection” is an artistic amalgamation of woodwork, sculpture, and paint. This 3D art collection celebrates the beauty of wildlife in costal regions and coral reefs all around the world."
      },
      works: {
        seahorse: {
          title: "Hippocampus Kuda",
          description: "",
          medium: "Acrylic on wood, plaster, wood, resin",
          year: "2019",
          size: "44\" x 37\" (111cm x 94cm)",
          photos: [ // the photos are ordered by importance, first photo is the most important.
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/seaside/seahorse/main.png",
              alt: "painting of a seahorse surrounded by a reef"
            }
          ]
        },
        octopus: {
          title: "Ocean Master",
          description: "",
          medium: "Acrylic on wood, plaster, wood, resin",
          year: "2019",
          size: "48\" x 46\" (122cm x 116cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/seaside/octopus/main.png",
              alt: "painting of an octopus ready to hunt"
            }
          ]
        },
        chameleon: {
          title: "Coastal Chameleon",
          description: "",
          medium: "Acrylic on wood, wood, resin",
          year: "2019",
          size: "38\" x 37\" (96cm x 94cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/seaside/chameleon/main.png",
              alt: "painting of a chameleon by the sea"
            }
          ]
        },
        fish1: {
          title: "Bat Fish",
          description: "",
          medium: "Acrylic on wood, plaster, wood, resin",
          year: "2019",
          size: "36\" x 37\" (91cm x 95cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/seaside/fish1/main.png",
              alt: "painting of a fancy fish swimming in some coral"
            }
          ]
        },
        fish2: {
          title: "",
          description: "",
          medium: "",
          year: "",
          size: "",
          photos: [
            {
              src: "",
              alt: ""
            }
          ]
        }
      }
    },
    underground: {
      cover: {
        photo: "battle1",
        description: "Ocean levels have risen and the graffiti filled subways of New York City have been flooded—the animals of the African Savannah are roaming the streets. The latest collection of Valery Yershov entitled “Underground Art Collection” comprises works with themes that dares us to imagine a surreal world ravaged by climate change; a world in which all forces of nature have claimed our concrete jungles."
      },
      works: {
        gorilla: {
          title: "Graffiti-Backed Alpha",
          description: "",
          medium: "Acrylic paint on canvas",
          year: "2019",
          size: "37\" x 22\" (94cm x 56cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/underground/gorilla/main.png",
              alt: "painting of a gorilla covered in graffiti, sitting in a colorful catacomb"
            }
          ]
        },
        battle1: {
          title: "Siberian Hunter, Atlantic Prey”",
          description: "",
          medium: "Acrylic paint on canvas, wood, resin",
          year: "2019",
          size: "59\" x 33\" (149cm x 84cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/underground/battle1/main.png",
              alt: "painting of a tiger hunting an octopus in a flooded subway tunnel"
            }
          ]
        },
        battle2: {
          title: "Siberian Encounter",
          description: "",
          medium: "Acrylic paint on wood and canvas, wood, resin",
          year: "2019",
          size: "48in x 31in (121cm x 79cm)",
          photos: [
            {
              src: "",//"https://valeryyershov.s3.amazonaws.com/collections/underground/battle1/main.png",
              alt: "painting of a tiger hunting a white octopus in a flooded subway tunnel"
            }
          ]
        },
        rhino: {
          title: "Rhino Territory",
          description: "",
          medium: "Acrylic paint on canvas, wood, resin",
          year: "2019",
          size: "61\" x 46\" (156cm x 116cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/underground/rhino/main.png",
              alt: "painting of a rhino staring down a vibrant subway tunnel filled with colorful street art"
            }
          ]
        },
        dog: {
          title: "Man's Last Friend",
          description: "",
          medium: "Acrylic paint on canvas, wood, resin",
          year: "2019",
          size: "42\" x 33\" (106cm x 83cm)",
          photos: [
            {
              src: "",//"https://valeryyershov.s3.amazonaws.com/collections/underground/dog/main.png",
              alt: "painting of an American Pit Bull hanging out in a colorful subway tunnel"
            }
          ]
        },
        shark: {
          title: "Megalodon in the Bronx”",
          description: "",
          medium: "Acrylic paint on canvas, wood, resin",
          year: "2019",
          size: "55\" x 35\" (139cm x 88cm)",
          photos: [
            {
              src: "",//"https://valeryyershov.s3.amazonaws.com/collections/underground/shark/main.png",
              alt: "painting of a great white shark swimming in a flooded subway tunnel"
            }
          ]
        },
        elephant: {
          title: "Elephant Bath",
          description: "",
          medium: "Acrylic paint on wood, resin",
          year: "2019",
          size: "25\" (71cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/underground/elephant/main.png",
              alt: "painting of an elephant swimming in a flooded subway tunnel"
            }
          ]
        },
      }
    }
  }
};

export const seaside = DATA.collections.seaside;
export const underground = DATA.collections.underground;

export const app = {
  backgroundImage: 'https://valeryyershov.s3.amazonaws.com/misc/background.png',
};

export const frontPage = {
  slideshow: [
    seaside.works.seahorse.photos[0],
    underground.works.rhino.photos[0],
    seaside.works.octopus.photos[0],
    underground.works.battle1.photos[0],
    seaside.works.fish1.photos[0],
  ],
  video: {
    src: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvalery.yershov.3%2Fvideos%2F2500473070013934%2F&show_text=0&width=560',
    description: 'Watch as Valery deploys his signature technique to develop his work. Each piece is dressed with a beautiful hand crafted frame which is seamlessly merged with a traditional canvas painting. The entire piece is then finished with a brilliant coat of resin, revealing a stunning polished texture.',
  },
  covers: Object.keys(DATA.collections).map(collection => {
    const cover = DATA.collections[collection].cover;
    cover.photo = DATA.collections[collection].works[cover.photo].photos[0];
    cover.title = collection;
    return cover;
  }),
};
