/**
 * ============================================================================
 *  CUSTOMIZE YOUR LOVE STORY HERE
 * ============================================================================
 *  This file is the ONLY place you need to edit to personalize the entire
 *  website — timeline memories, gallery photos, the 22 reasons, future
 *  dreams, and your secret letter text.
 *
 *  HOW TO ADD PHOTOS:
 *  1. Drop your image files into:  src/assets/photos/
 *  2. Import them at the top of this file, e.g.:
 *       import photo1 from '../assets/photos/first-date.jpg'
 *  3. Use the imported variable as the `image` value below.
 *
 *  Until you add real photos, placeholder gradient cards will be shown
 *  automatically (see Gallery.jsx / Timeline.jsx).
 * ============================================================================
 */

// --------------------------------------------------------------------------
// 1. LOVE TIMELINE — the story of you two, in order
// --------------------------------------------------------------------------
export const timelineEvents = [
  {
    id: 1,
    date: 'The Day We First Met',
    title: 'Where it all began',
    description:
      'I still remember the exact moment I saw you for the first time. The world seemed to slow down, and somehow I knew my story was about to change forever.',
    image: null, // e.g. import firstMeet from '../assets/photos/first-meet.jpg'
  },
  {
    id: 2,
    date: 'Our First Conversation',
    title: 'The first "hello"',
    description:
      'A simple message turned into hours of conversation. I fell asleep smiling that night, already counting the minutes until I could talk to you again.',
    image: null,
  },
  {
    id: 3,
    date: 'Our First Photo Together',
    title: 'Captured forever',
    description:
      'This photo holds a thousand unspoken feelings — the nervous laughter, the shy smiles, and the beginning of a thousand more memories to come.',
    image: null,
  },
  {
    id: 4,
    date: 'Our First Trip',
    title: 'Adventures begin',
    description:
      'New places, new memories, and you by my side made everything feel like magic. That trip is still one of my favorite chapters of us.',
    image: null,
  },
  {
    id: 5,
    date: 'The Funniest Memory',
    title: 'The day we couldn\u2019t stop laughing',
    description:
      'I don\u2019t even remember what started it, but I remember laughing until my stomach hurt — and realizing I want a lifetime of moments like this with you.',
    image: null,
  },
  {
    id: 6,
    date: 'Dreams For Our Future',
    title: 'Just the beginning',
    description:
      'Every memory we\u2019ve made is just the prologue. The best chapters of our story haven\u2019t even been written yet — and I can\u2019t wait to write them with you.',
    image: null,
  },
]

// --------------------------------------------------------------------------
// 2. MEMORY GALLERY — masonry photo grid with captions
//    Add as many as you like. `span` controls the masonry height
//    ("tall", "medium", "short") for visual variety.
// --------------------------------------------------------------------------
export const galleryPhotos = [
  { id: 1, image: null, caption: 'The smile that started it all', span: 'tall' },
  { id: 2, image: null, caption: 'Our first adventure together', span: 'medium' },
  { id: 3, image: null, caption: 'Lost in conversation for hours', span: 'short' },
  { id: 4, image: null, caption: 'That golden hour walk', span: 'medium' },
  { id: 5, image: null, caption: 'Just us, being silly', span: 'tall' },
  { id: 6, image: null, caption: 'A quiet moment I\u2019ll never forget', span: 'short' },
  { id: 7, image: null, caption: 'Celebrating little wins together', span: 'medium' },
  { id: 8, image: null, caption: 'You, my favorite view', span: 'tall' },
]

// --------------------------------------------------------------------------
// 3. 22 REASONS WHY I LOVE YOU — one for every year
// --------------------------------------------------------------------------
export const reasons = [
  'Because your smile is the first thing I look for in every room.',
  'Because you make even ordinary days feel like an adventure.',
  'Because you listen to me like my words actually matter.',
  'Because of the way you laugh at your own jokes before finishing them.',
  'Because you make me want to be a better person every single day.',
  'Because home isn\u2019t a place \u2014 it\u2019s wherever you are.',
  'Because you remember the little things that make me feel loved.',
  'Because your hugs feel like a safe place I never want to leave.',
  'Because you support my dreams like they\u2019re your own.',
  'Because you\u2019re my favorite person to do absolutely nothing with.',
  'Because you make me laugh even on my hardest days.',
  'Because your kindness towards others inspires me endlessly.',
  'Because you choose me, again and again, every day.',
  'Because of the way you say my name.',
  'Because you\u2019re effortlessly, breathtakingly you.',
  'Because every plan feels exciting when it includes you.',
  'Because you\u2019ve seen me at my worst and stayed anyway.',
  'Because your hand fits perfectly in mine.',
  'Because you make 22 feel like the beginning of everything good.',
  'Because you\u2019re my best friend before anything else.',
  'Because loving you comes as naturally as breathing.',
  'Because this is only Chapter 22 \u2014 and I can\u2019t wait for the rest.',
]

// --------------------------------------------------------------------------
// 4. SECRET LETTER — your heartfelt birthday message
//    Use \n\n for paragraph breaks.
// --------------------------------------------------------------------------
export const secretLetter = `My love,

Happy 22nd birthday. Today isn't just another year added to your life \u2014 it's another year of you becoming even more of the incredible person I'm endlessly grateful to love.

I wanted to create something as special as you are, something that captures even a small piece of how much you mean to me. Every memory on this page is real, every word is true, and every bit of love poured into this is just for you.

Thank you for being my partner, my best friend, my home. Thank you for every laugh, every late-night talk, every quiet moment that meant more than words ever could.

Here's to another year of us \u2014 to more memories, more adventures, and more reasons to fall in love with you all over again.

I love you more than any page could ever hold.

Forever yours.`

// --------------------------------------------------------------------------
// 5. FUTURE DREAMS — what's still ahead for you two
// --------------------------------------------------------------------------
export const futureDreams = [
  {
    id: 1,
    title: 'Future Trips Together',
    description:
      'New cities, new sunsets, new stamps in our passports \u2014 every trip with you is a story I want to keep living.',
    icon: 'plane',
  },
  {
    id: 2,
    title: 'Our Dream Home',
    description:
      'A place that\u2019s truly ours \u2014 filled with warmth, laughter, and a thousand little memories waiting to be made.',
    icon: 'home',
  },
  {
    id: 3,
    title: 'Adventures We Will Create',
    description:
      'Every "yes, let\u2019s do it" with you turns into a memory I\u2019ll treasure forever. Here\u2019s to many more.',
    icon: 'compass',
  },
  {
    id: 4,
    title: 'Growing Old Together',
    description:
      'Through every chapter, every season, every year \u2014 I want it to always be you and me, hand in hand.',
    icon: 'heart',
  },
]

// --------------------------------------------------------------------------
// 6. SITE META — names, date, music
// --------------------------------------------------------------------------
export const siteMeta = {
  partnerName: 'My Love',
  birthdayDate: 'July 1st',
  chapterNumber: '22',
  // Add your own royalty-free music file to src/assets/audio/ and reference it,
  // e.g. backgroundMusic: '/audio/romantic-piano.mp3'
  backgroundMusic: null,
  voiceMessage: null, // path to your recorded voice message audio file
}
