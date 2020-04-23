const quotes = [
  {
    size: "small",
    quote: "I played in rhumba bands, mickey mouse bands; all kinds of bands.",
    musician: "Stan Getz"
  },
  {
    size: "medium",
    quote:
      "My life is music, and in some vague, mysterious and subconscious way, I have always " +
      "been driven by a taut inner spring which has propelled me to almost compulsively reach " +
      "for perfection in music, often-in fact, mostly-at the expense of everything else in my life",
    musician: "Stan Getz"
  },
  {
    size: "small",
    quote:
      "There are four qualities essential to a great jazzman. They are taste, courage, " +
      "individuality, and irreverence. These are the qualities I want to retain in my music",
    musician: "Stan Getz"
  },
  {
    size: "large",
    quote:
      "It’s like a language. You learn the alphabet, which are the scales. You learn sentences, " +
      "which are the chords. And then you talk extemporaneously with the horn. It’s a wonderful " +
      "thing to speak extemporaneously, which is something I’ve never gotten the hang of. " +
      "But musically I love to talk just off the top of my head. And that’s what jazz music is all about.",
    musician: "Stan Getz"
  },
  {
    size: "small",
    quote:
      "The saxophone is actually a translation of the human voice, in my conception. All you " +
      "can do is play melody. No matter how complicated it gets, it’s still a melody.",
    musician: "Stan Getz"
  },
  {
    size: "small",
    quote:
      "I came from an era when we didn’t use electronic instruments. The bass wasn’t even " +
      "amplified. The sound was the sound you got",
    musician: "Stan Getz"
  },
  {
    size: "small",
    quote:
      "Life is too full of distractions nowadays. When I was a kid we had a little Emerson " +
      "radio and that was it. We were more dedicated. We didn’t have a choice.",
    musician: "Stan Getz"
  },
  {
    size: "small",
    quote:
      "Records used to be documents, but now record companies want product.",
    musician: "Stan Getz"
  },
  {
    size: "small",
    quote:
      "The saxophone is an imperfect instrument, especially the tenor and soprano, as far " +
      "as intonation goes. The challenge is to sing on an imperfect instrument that is outside of your body.",
    musician: "Stan Getz"
  },
  {
    size: "small",
    quote:
      "You can read all the textbooks and listen to all the records, but you have to play " +
      "with musicians that are better than you",
    musician: "Stan Getz"
  },
  {
    size: "small",
    quote:
      "Sometimes they go around with guys who are scuffling – for a while. But usually they " +
      "end up marrying some cat with a factory. This is the way the world ends, not with a whim but a banker.",
    musician: "Paul Desmond"
  },
  {
    size: "small",
    quote:
      "I have won several prizes as the world’s slowest alto player, as well as a special award in 1961 for quietness.",
    musician: "Paul Desmond"
  },
  {
    size: "small",
    quote: "Writing is like jazz. It can be learned, but it can’t be taught.",
    musician: "Paul Desmond"
  },
  {
    size: "small",
    quote: "I was unfashionable before anyone knew who I was.",
    musician: "Paul Desmond"
  },
  {
    size: "small",
    quote: "I tried practicing for a few weeks and ended up playing too fast.",
    musician: "Paul Desmond"
  },
  {
    size: "small",
    quote:
      "We’re working as if it were going out of style-which of course it is.",
    musician: "Paul Desmond"
  },
  {
    size: "small",
    quote:
      "I think I had it in the back of my mind that I wanted to sound like a dry martini.",
    musician: "Paul Desmond"
  },
  {
    size: "small",
    quote:
      "Our basic audience begins with creaking elderly types of twenty-three and above.",
    musician: "Paul Desmond"
  },
  {
    size: "small",
    quote:
      "I would like to thank my father who discouraged me from playing the violin at an early age.",
    musician: "Paul Desmond"
  },
  {
    size: "small",
    quote:
      "Not for me. If I want to tune everybody out, I just take off my glasses and enjoy the haze.",
    musician: "Paul Desmond"
  },
  {
    size: "small",
    quote:
      "It was never supposed to be a hit. It was supposed to be a Joe Morello drum solo.",
    musician: "Paul Desmond"
  },
  {
    size: "small",
    quote:
      "We used to get on planes, and they'd ask who we were, and we'd say, 'The Dave Brubeck Quartet', " +
      "and they'd say, 'Who?' In later years they'd say, 'Oh', which amounts to the same thing.",
    musician: "Paul Desmond"
  },
  {
    size: "small",
    quote:
      "Complexity can be a trap. You can have a ball developing a phrase, inverting it, " +
      "playing it in different keys and times and all. But it's really more introspective than communicative. Like a crossword puzzle compared to a poem.",
    musician: "Paul Desmond"
  },
  {
    size: "small",
    quote:
      "Milton, of all people, gave the most perfect definition of the state of mind required to play jazz: ' with wanton heed and giddy cunning.' That's how you play jazz.",
    musician: "Paul Desmond"
  },
  {
    size: "medium",
    quote:
      "Once, when we were playing at the Apollo, Holiday was working a block away at the " +
      "Harlem Opera House. Some of us went over between shows to catch her, and afterwards " +
      "we went backstage. I did something then, and I still don’t know if it was the right " +
      "thing to do – I asked her for her autograph.",
    musician: "Ella Fitzgerald"
  },
  {
    size: "small",
    quote:
      "Sometimes when we’re flying or in the hotel, I might run over songs, or in the bathroom.",
    musician: "Ella Fitzgerald"
  },
  {
    size: "medium",
    quote:
      "I know I’m no glamour girl, and it’s not easy for me to get up in front of a crowd of " +
      "people. It used to bother me a lot, but now I’ve got it figured out that God gave me this " +
      "talent to use, so I just stand there and sing.",
    musician: "Ella Fitzgerald"
  },
  {
    size: "medium",
    quote:
      "I’ve had some wonderful love affairs and some that didn’t work out. I don’t want to dwell " +
      "on that and I don’t want to put people down, but I think all the fabulous places I’ve been, " +
      "the wonderful things that have happened for me, the great people I’ve met – that ought to make a story.",
    musician: "Ella Fitzgerald"
  },
  {
    size: "small",
    quote:
      "Just don’t give up trying to do what you really want to do. Where there is love and inspiration, I don’t think you can go wrong",
    musician: "Ella Fitzgerald"
  },
  {
    size: "small",
    quote:
      "I guess what everyone wants more than anything else is to be loved. And to know that you loved me for my singing is too much for me. " +
      "Forgive me if I don't have all the words. Maybe I can sing it and you'll understand.",
    musician: "Ella Fitzgerald"
  },
  {
    size: "small",
    quote:
      "I stole everything that I heard, but mostly I stole from the horns.",
    musician: "Ella Fitzgerald"
  },
  {
    size: "small",
    quote: "The only thing better than singing is more singing.",
    musician: "Ella Fitzgerald"
  },
  {
    size: "small",
    quote:
      "[On bebop years] All I did was sing ‘How High the Moon.’ It seemed like the only song I ever sang.",
    musician: "Ella Fitzgerald"
  },
  {
    size: "small",
    quote:
      "Some kids in Italy call me 'Mama Jazz; I thought that was so cute. As long as they don't call me 'Grandma Jazz.'",
    musician: "Ella Fitzgerald"
  },
  {
    size: "small",
    quote:
      "Oh, I have gobs and gobs of ideas, but... well, you dream things like that, and that's what these are, you know--my day dreams.",
    musician: "Ella Fitzgerald"
  },
  {
    size: "small",
    quote:
      "A lot of singers think all they have to do is exercise their tonsils to get ahead. They refuse to look for new ideas and new outlets, " +
      "so they fall by the wayside... I'm going to try to find out the new ideas before the others do.",
    musician: "Ella Fitzgerald"
  },
  {
    size: "small",
    quote: "It isn't where you came from, it's where you're going that counts.",
    musician: "Ella Fitzgerald"
  },
  {
    size: "small",
    quote:
      "Coming through the years, and finding that I not only have just the fans of my day, but the young ones of today -- that's what it means, it means it was worth all of it.",
    musician: "Ella Fitzgerald"
  },
  {
    size: "small",
    quote:
      "Music is your own experience, your thoughts, your wisdom. If you don’t live it, it won’t " +
      "come out of your horn. They teach you there’s a boundary line to music. But, man, there’s no boundary line to art.",
    musician: "Charlie Parker"
  },
  {
    size: "small",
    quote:
      "When I first heard music, I thought it should be very clean, very precise. Something that people could understand, something that was beautiful.",
    musician: "Charlie Parker"
  },
  {
    size: "small",
    quote:
      "I kept thinking there’s bound to be something else?. I could hear it sometimes, but I couldn’t play it.",
    musician: "Charlie Parker"
  },
  {
    size: "small",
    quote:
      "Master your instrument, Master the music, and then forget all that *!xy!@ and just play.",
    musician: "Charlie Parker"
  },
  {
    size: "small",
    quote: "If you don’t live it, it won’t come out your horn.",
    musician: "Charlie Parker"
  },
  {
    size: "small",
    quote: "Don’t play the saxophone. Let it play you.",
    musician: "Charlie Parker"
  },
  {
    size: "small",
    quote:
      "You’ve got to learn your instrument. Then, you practice, practice, practice. " +
      "And then, when you finally get up there on the bandstand, forget all that and just wail.",
    musician: "Charlie Parker"
  },
  {
    size: "medium",
    quote:
      "Any musician who says he is playing better either on tea, the needle, or when he is juiced, is a plain, straight liar. " +
      "When I get too much to drink, I can't even finger well, let alone play decent ideas. ... You can miss the most important years of your life, the years of possible creation.",
    musician: "Charlie Parker"
  },
  {
    size: "medium",
    quote:
      "l'd been getting bored with the stereotyped changes that were being used all the time at the time, and I kept thinking there's bound to be something else. " +
      "I could hear it sometimes but I couldn't play it. ... I found that by using the higher intervals of a chord as a melody line and backing them with appropriately " +
      "related changes I could play the thing I'd been hearing. I came alive.",
    musician: "Charlie Parker"
  },
  {
    size: "small",
    quote:
      "I realized by using the high notes of the chords as a melodic line, and by the right harmonic progression, I could play what I heard inside me. That's when I was born.",
    musician: "Charlie Parker"
  },
  {
    size: "small",
    quote:
      "Miles got a mysticque about him-plus he’s at the top of his profession. And he’s got way, way, way more money.",
    musician: "Dizzy Gillespie"
  },
  {
    size: "small",
    quote:
      "They’re not particular about whether you’re playing a flatted fifth or a ruptured 129th as ong as they can dance to it.",
    musician: "Dizzy Gillespie"
  },
  {
    size: "small",
    quote: "It’s taken me all my life to learn what not to play.",
    musician: "Dizzy Gillespie"
  },
  {
    size: "small",
    quote:
      "How do I know why Miles walks off the stage? Why don’t you ask him? And besides, " +
      "maybe we’d all like to be like Miles, and just haven’t got the guts.",
    musician: "Dizzy Gillespie"
  },
  {
    size: "small",
    quote:
      "I’d like to play for you one of my compositions, my only composition.",
    musician: "Dizzy Gillespie"
  },
  {
    size: "small",
    quote: "I don’t care much about music. What I like is sounds.",
    musician: "Dizzy Gillespie"
  },
  {
    size: "small",
    quote:
      "I always try to teach by example and not force my ideas on a young musician. " +
      "One of the reasons we’re here is to be a part of this process of exchange.",
    musician: "Dizzy Gillespie"
  },
  {
    size: "small",
    quote:
      "Some days you get up and put the horn to your chops and it sounds pretty good and you win. " +
      "Some days you try and nothing works and the horn wins. This goes on and on and then you die and the horn wins.",
    musician: "Dizzy Gillespie"
  },
  {
    size: "small",
    quote:
      "As a musician you have to keep one foot back in the past and have one foot forward into the future.",
    musician: "Dizzy Gillespie"
  },
  {
    size: "small",
    quote: "The sign of a mature musician is knowing what not to play.",
    musician: "Dizzy Gillespie"
  },
  {
    size: "small",
    quote:
      "I try to play the bare essence, to let everything be just what it's supposed to be in that particular spot..." +
      "You have many things to pick from when you're playing, so you try to train yourself to pick out the best things that you know.",
    musician: "Dizzy Gillespie"
  },
  {
    size: "small",
    quote: "Jazz will be the classical music of the future.",
    musician: "Dizzy Gillespie"
  },
  {
    size: "small",
    quote:
      "Many critics always saw and heard that my style comes from Roy Eldridge, which is true. But for many things, " +
      "not only how to play the trumpet but the way to choose the notes, how to play them and how to phrase all of them, I took that from Sweets [Edison]. He really brought something new to the trumpet.",
    musician: "Dizzy Gillespie"
  },
  {
    size: "small",
    quote:
      "Learn to play the piano, man, and then you can figure out crazy solos of your own.",
    musician: "Dizzy Gillespie"
  },
  {
    size: "small",
    quote: "I don’t need words – it’s all in the phrasing.",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote:
      "Man, all music is folk music. You ain’t never heard no horse sing a song, have you? ",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote:
      "Hot can be cool, and cool can be hot, and each can be both. But hot or cool, man, jazz is jazz.",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote: "Man, if you have to ask what it is, you’ll never know.",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote:
      "If I don’t practice for a day, I know it. If I don’t practice for two days, the critics know it. " +
      "And if I don’t practice for three days, the public knows it",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote: "Never play anything the same way twice.",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote:
      "Jazz is played from the heart. You can even live by it. Always love it.",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote: "To jazz, or not to jazz, there is no question!",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote: "What we play is life.",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote:
      "There’s only two ways to sum up music; either it’s good or it’s bad. " +
      "If it’s good you don’t mess about it, you just enjoy it.",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote:
      "The memory of things gone is important to a jazz musician. Things like old " +
      "folks singing in the moonlight in the back yard on a hot night or something said long ago.",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote:
      "Making money ain’t nothing exciting to me. You might be able to buy a little better booze " +
      "than the wino on the corner. But you get sick just like the next cat and when you die you’re just as graveyard dead as he is.",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote: "I’m a spade, you’re an ofay. Let’s play.",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote: "“If ya ain't got it in ya, ya can't blow it out.”",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote:
      "Musicians don't retire; they stop when there's no more music in them.",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote:
      "There is two kinds of music, the good, and the bad. I play the good kind.",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote:
      "We all do 'do, re, mi,' but you have got to find the other notes yourself.",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote:
      "My whole life, my whole soul, my whole spirit is to blow that horn...",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote:
      "“Seems to me it ain't the world that's so bad but what we're doing to it, and all I'm saying is: see what a wonderful world it would be if only we'd give it a chance. Love, baby - love. That's the secret.”",
    musician: "Louis Armstrong"
  },
  {
    size: "small",
    quote:
      "By and large, jazz has always been like the kind of a man you wouldn’t want your daughter to associate with.",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote:
      "I’m sure critics have their purpose, and they’re supposed to do what they do, but sometimes they get a little " +
      "carried away with what they think someone should have done, rather than concerning themselves with what he did.",
    musician: "Duke Ellington"
  },
  {
    size: "medium",
    quote:
      "Put it this way: Jazz is a good barometer of freedom… In its beginnings, the United States of America spawned " +
      "certain ideals of freedom and independence through which, eventually, jazz was evolved, and the music is so free " +
      "that many people say it is the only unhampered, unhindered expression of complete freedom yet produced in this country.",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote: "There are two kinds of music. Good music, and the other kind.",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote: "I merely took the energy it takes to pout and wrote some blues.",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote:
      "Love is indescribable and unconditional. I could tell you a thousand things that it is not, but not one that it is. " +
      "Either you have it or you haven’t; there’s no proof of it.",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote:
      "Playing ‘bop’ is like playing Scrabble with all the vowels missing.",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote: "If it sounds good and feels good, then it IS good!",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote: "Music is my mistress and she plays second fiddle to no one.",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote: "Gray skies are just clouds passing over.",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote:
      "The most important thing I look for in a musician is whether he knows how to listen.",
    musician: "Duke Ellington"
  },
  {
    size: "medium",
    quote:
      "What is music to you? What would you be without music? Music is everything. Nature is music " +
      "(cicadas in the tropical night). The sea is music, the wind is music. The rain drumming on the roof " +
      "and the storm raging in the sky are music. Music is the oldest entity. The scope of music is immense and infinite. It is the ‘esperanto’ of the world. ",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote:
      "It is becoming increasingly difficult to decide where jazz starts or where it stops, where Tin Pan Alley " +
      "begins and jazz ends, or even where the borderline lies between between classical music and jazz. I feel there is no boundary line.",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote:
      "I don’t believe in categories of any kind, and when you speak of problems between blacks and whites in the U.S.A. you are referring to categories again.",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote: "A goal is a dream with a finish line. ",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote:
      "I never had much interest in the piano until I realized that every time I played, a girl would appear on the piano bench to my left and another to my right.",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote:
      "There is nothing to keeping a band together. You simply have to have a gimmick, and the gimmick I use is to pay them money!",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote: "There is no art without intention.",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote: "It don’t mean a thing if it ain’t got that swing.",
    musician: "Duke Ellington"
  },
  {
    size: "small",
    quote: "Coltrane, you cant play everything at once!",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote:
      "We’re not going to play the blues anymore. Let the white folks play the blues. They got ’em, so they can keep ’em.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote:
      "At least one day out of the year all musicans should just put their instruments down, and give thanks too Duke Ellington.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote: "Always look ahead, but never look back.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote:
      "Jazz is the big brother of Revolution. Revolution follows it around.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote:
      "As long as I’ve been playing, they never say I done anything. They always say that some white guy did it.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote:
      "Monk was a gentle person, gentle and beautiful, but he was strong as an ox. And if I had ever said something " +
      "about punching Monk out in front of his face – and I never did – then somebody should have just come and got me " +
      "and taken me to the madhouse, because Monk could have just picked my little butt up and thrown me through a wall.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote:
      "I don’t care if a dude is purple with green breath as long as he can swing.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote:
      "In Europe, they like everything you do. The mistakes and everything. That’s a little bit too much.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote:
      "Keith [Jarrett] played so nice I had to give him two pianos. I’d say “Keith, how does it feel to be a genius?",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote: "You know why I quit playing ballads? Cause I love playing ballads.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote:
      "I really liked Wynton when I first met him. He’s still a nice young man, only confused.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote:
      "I don’t like to hear someone put down dixieland. Those people who say there’s no music but bop are just stupid; it shows how much they don’t know.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote:
      "You can’t play nothing on modern trumpet that doesn’t come from him, not even modern $#*!. " +
      "I can’t even remember a time when he sounded bad playing the trumpet. Never. Not even one time. " +
      "He had great feeling up in his playing and he always played on the beat. I just loved the way he played and sang. (On Louis Armstrong) ",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote:
      "If you got up on the bandstand at Minton’s and couldn’t play, you were not only going to be embarrassed by the people ignoring you or booing you, you might get your butt kicked.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote: "Don’t play what’s there, play what’s not there.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote:
      "Nothing is out of the question for me. I’m always thinking about creating. My future starts when I wake up in the morning and see the light…Then I’m grateful.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote: "I’ll play it first and tell you what it is afterwards.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote: "Do not fear mistakes. There are none.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote:
      "A legend is an old man with a cane known for what he used to do. I’m stil doing it.",
    musician: "Miles Davis"
  },
  {
    size: "small",
    quote:
      "Sometimes you have to play a long time to be able to play like yourself.",
    musician: "Miles Davis"
  }
];
