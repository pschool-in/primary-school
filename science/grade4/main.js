const list = [
  {
    label: 'Solar System - Reading',
    type: "passage",
    data: {
      title: `Solar System`,
      text: `We  can  see  numerous  stars  in  a  clear  sky at night.  The  sun  we  see  everyday  is  also a star and it is the  nearest  star  to  the earth.  The planets  revolve  around  the  sun  at  different  distances  in different orbits.  This  is  called solar system. 
The sun is a ball of fire. It is very  hot.  Living  organisms  cannot  exist  on the earth  in the absence  of  the  sun.           
1. Mercury is the smallest and the nearest planet to the sun.
2. Venus is the second planet. It is  very hot.  It  is  the  brightest  planet. 
3. Earth is the third  planet and it  has  air  and  water.  It  supports  life and we all live here. 
4. Mars  is  the  fourth  planet. It  is  red  in  colour.
5. Jupiter  is the fifth planet. It is the largest planet in the  solar  system. 
6. Saturn is the sixth planet. There are big rings around it. 
7. Uranus  is the seventh planet. It is made up of gases. It  also  has  rings. It  is  the  coldest  planet.
8. Neptune is  the  eighth  planet. It  is  bluish  green in  colour  and  it  is  surrounded  by  clouds.
9. Upto 2006, s  considered as the ninth planet. Since  it does not have the  properties of a  planet,  it  is  now  regarded  as  a  dwarf  planet. `,
    },
  },
  {
    label: "Solar System - Fillup",
    type: "matchByDragDrop",
    data: {
      isPractice: false,
      title: "Drag and drop the words at proper places.",
      styles: {
        fontSize: "1rem",
        dashWidth: 70,
      },
      text: `~Sun~ is the center of solar system.
~Jupiter~ is the biggest planet.
~Saturn~ has a big ring around it.
~Venus~ is the bright and hotest planet.
~Uranus~ is the coldest planet.
~Pluto~ is a dwarf planet.`,
    },
  },
  {
    label: "Air",
    type: "matchByDragDrop",
    data: {
      isPractice: false,
      title: "Drag and drop the words at proper places.",
      styles: {
        fontSize: "1rem",
        dashWidth: 80,
      },
      text: `Living things inhale ~oxygen~ and exhale ~carbon-dioxide~.
      The air present in Earth, is majorly made up of ~nitrogen~.
      Air has ~weight~ but it doesn't have ~shape~.`,
    },
  },
  {
    label: "Plants Function",
    type: "matchByDragDrop",
    data: {
      isPractice: false,
      title: "Drag and drop the plant parts at proper places.",
      styles: {
        fontSize: "1rem",
        dashWidth: 50,
      },
      text: `The ~root~ absorbs water from the soil and help hold the plant in the soil.
      The ~leaf~ uses the sun and air to make food for the plant.
      The ~stem~ helps the plant to stand straight.
      The ~flower~ makes the seeds and fruits.
      All plants start as a ~seed~.`,
    },
  },
  {
    label: 'Digestive System - Reading',
    type: "passage",
    data: {
      title: `Digestive System`,
      text: `We need energy to do our daily activities. We get energy from the food we eat. If we don't take food for some time, we will feel hungry.
A group of our body parts work together and convert the food we eat into fuel that body needs to function. While eating we first chew the food in our mouth. Saliva present in our mouth helps in breaking the food into small pieces. Your tongue does the work of pushing the food around, and your teeth will do the work of chewing.
The esophagus is like a flexible pipe and it takes the food from mouth to stomach. Stomach is the place where digestion happens. Acidic fluids present in stomach helps in breaking down the food further. Energy present in our food, is absorbed from the walls of stomach and passed through blood stream. 
Then the food is passed to small intestine. Bile is a digestive juice helps in breaking down the fats when the food passes through small intestine. Bile is created in liver, which is the largest human organ. 
After extracting fats and other nutrients, the waste is passed to large intestine, and finally reaches rectum.
All the body parts we discussed above, together form the digestive system. If is an important function of our body. Always eat healthy food even if they are less tasty, so that your digestive system will be happy.`,
    },
  },
  {
    label: "Digestive System - Parts",
    type: "dragAndDrop",
    data: {
      img:
        "https://s3.ap-south-1.amazonaws.com/pschool.in/assets/science/digestive.png",
      title: `Drag and drop the parts of digestive sytem at appropriate places.`,
      width: 310,
      height: 380,
      wordWidth: 100,
      words: [
        { word: "esophagus", x: 190, y: 90 },
        { word: "stomach", x: 215, y: 186 },
        { word: "liver", x: 100, y: 210 },
        { word: "small intestine", x: 0, y: 310 },
        { word: "large intestine", x: 220, y: 280 },
        { word: "rectum", x: 190, y: 350 },
      ],
    },
  },
  {
    label: 'Digestive System - MCQ',
    type: "mcq",
    data: {
      title: "Multiple Choice Question",
      questions: [
        {
          qText: `If we don't take food for a long time, we will feel ________`,
          options: `hungry, sleepy, angry, boring`,
        },
        {
          qText: `Which is the biggest organ in our body?`,
          options: `Liver, Lungs, Heart, Kidney`,
        },
        {
          qText: `Bile helps in breaking ______.`,
          options: `Fat, Glucose, Protein`,
        },
        {
          qText: `What is the final destination of the food we eat?`,
          options: `rectum, large intestine, small intestine, stomach`,
        },
        {
          qText: `What is the digestive juice generated by Liver.`,
          options: `Bile, Enzyme, Acidic acid`,
        },
      ],
    }
  },
]