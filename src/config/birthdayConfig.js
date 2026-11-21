// ===== EDIT EVERYTHING HERE =====
const NAME = "Minal";
export const config = {
  name: NAME,
  fullName: "Ayesha Minal",
  birthday: "22 November",
  sender: "Ahmed",
  song: { title: "Tere Sang Yaara", artist: "Atif Aslam" },
  // Optional local audio: put file in public/audio/ . Set to "" to disable.
  localAudioFile: `${import.meta.env.BASE_URL}audio/tere-sang-yaara.mp3`,
  // Used when there is no (or a broken) local file. Opens in a new tab.
  musicUrl: "https://open.spotify.com/search/Tere%20Sang%20Yaara%20Atif%20Aslam",
  colors: { midnight: "#0b1030", pink: "#e8b4c4", lavender: "#b9a7e8", gold: "#e6c98f", ivory: "#fbf5ea" },
  letter: [
    `Dear ${NAME},`,
    "Some people have a way of making ordinary conversations feel a little more special, and you are one of those people.",
    "On your birthday, I just want to wish you countless reasons to smile, beautiful moments to remember, and happiness that stays with you long after the day is over.",
    "May you always find people who appreciate your heart, understand your silence, respect your feelings, and bring peace into your life.",
    "Never stop being your unique self. Keep smiling, keep shining, and keep making the world a little brighter in your own way.",
    "You deserve all the beautiful things life has to offer.",
    "Have the happiest birthday!",
  ],
  cards: [
    { icon: "Smile", title: "Your Smile", text: "Some smiles can make an ordinary moment feel special." },
    { icon: "Zap", title: "Your Energy", text: "That little spark of happiness you carry around." },
    { icon: "Heart", title: "Your Heart", text: "Never lose the kindness and warmth that make you who you are." },
    { icon: "Sparkles", title: "Your Uniqueness", text: "There is something special about being unapologetically yourself." },
    { icon: "Star", title: "Your Dreams", text: "May life surprise you with beautiful opportunities and moments." },
    { icon: "Sun", title: "Your Happiness", text: "May you always have more reasons to smile than reasons to worry." },
  ],
  bouquet: { title: "Flowers for you", text: "A little heart of flowers, because you deserve to be given flowers." },
  wish: ["May this little wish find its way to something beautiful.", "May this next chapter of your life be filled with happiness, growth, peace, and unforgettable memories."],
  final: ["I hope this little corner of the internet made you smile, even if just for a moment.", "You deserve to feel celebrated — today and every day.", `Happy Birthday once again, ${NAME}. ❤️`],
};
