const rawData = [
  { name: "John Doe", amount: "42,500" },
  { name: "Jane Smith", amount: "73,800" },
  { name: "David Johnson", amount: "109,200" },
  { name: "Sarah Wilson", amount: "88,500" },
  { name: "Michael Brown", amount: "56,700" },
  // ... Add more objects as needed
];

const { uniqueNamesGenerator, Config, adjectives, colors, names } = require('unique-names-generator');






// Generate additional data
for (let i = 5; i < 150; i++) {
  const nigerianFirstNames = [
    "Adebayo",
    "Adesua",
    "Chinweike",
    "Chisom",
    "Chukwudi",
    "Emeka",
    "Ezinne",
    "Folake",
    "Funmilayo",
    "Ifeoma",
    "Ikechukwu",
    "Kehinde",
    "Mofeoluwa",
    "Ngozi",
    "Nneka",
    "Nwabueze",
    "Obinna",
    "Ogechi",
    "Olufemi",
    "Olumide",
    "Onyinye",
    "Oreoluwa",
    "Osarugue",
    "Ozioma",
    "Patience",
    "Precious",
    "Uchenna",
    "Uzoma",
    "Yakubu",
    "Yetunde",
    "Zainab",
    "Abimbola",
    "Chibuzo",
    "Chinelo",
    "Chinyere",
    "Emmanuel",
    "Folasade",
    "Jumoke",
    "Kamaldeen",
    "Muyiwa",
    "Nneoma",
    "Oluwaseun",
    "Oluwatoyin",
    "Osahon",
    "Oyindamola",
    "Ugonna",
    "Uzochukwu",
    "Yewande"
  ];

  const randomIndex = Math.floor(Math.random() * nigerianFirstNames.length);
  const randomIndex2 = Math.floor(Math.random() * nigerianFirstNames.length);

const fname = nigerianFirstNames[randomIndex]
const lname = nigerianFirstNames[randomIndex2]
  
  const randomName = fname +  " " + lname; // You can replace this with a random name generator
  const randomAmount = (Math.floor(Math.random() * 271) + 30) * 1000; // Random amount between 30,000 and 300,000
  const formattedAmount = randomAmount.toLocaleString(); // Add commas to the amount
  rawData.push({ name: randomName, amount: formattedAmount });
}

export default rawData;