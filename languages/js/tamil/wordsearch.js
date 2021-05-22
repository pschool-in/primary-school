const wordsearch = {
  label: 'வார்த்தை தேடல்',
  id: 'wordsearch',
  img: 'wordsearch',
  list: [
    {
      id: 'animals',
      type: 'wordsearch',
      label: 'விலங்குகள்',
      data: {
        slug: 'விலங்குகள்'
      }
    },
    {
      id: 'vehicles',
      type: 'wordsearch',
      label: 'வாகனங்கள்',
      data: {
        title: 'கீழே கொடுக்க பட்டுள்ள வாகனங்களை கண்டுபிடிக்கவும்',
        words: [
          {
            word: ['தொ', 'ட', 'ர்', 'வ', 'ண்', 'டி'],
            marker: [7, 0, 7, 5]
          },
          {
            word: ['மி', 'தி', 'வ', 'ண்', 'டி'],
            marker: [3, 5, 7, 5]
          },
          {
            word: ['பே', 'ரு', 'ந்', 'து'],
            marker: [3, 4, 6, 4]
          },
          {
            word: ['ம', 'கி', 'ழு', 'ந்', 'து'],
            marker: [6, 0, 6, 4]
          },
          {
            word: ['ப', 'ட', 'கு'],
            marker: [0, 0, 2, 2]
          },
          {
            word: ['வி', 'மா', 'ன', 'ம்'],
            marker: [1, 4, 4, 7]
          },
          {
            word: ['க', 'ப்', 'ப', 'ல்'],
            marker: [5, 0, 2, 3]
          }
        ],
        table: [
          ['ப', 'ஔ', 'ஃ', 'ழ', 'ங', 'க', 'ம', 'தொ'],
          ['ஆ', 'ட', 'ப', 'ம', 'ப்', 'உ', 'கி', 'ட'],
          ['ஆ', 'ஒ', 'கு', 'ப', 'ஔ', 'ந', 'ழு', 'ர்'],
          ['ஞ', 'ற', 'ல்', 'ஞ', 'ய', 'ழ', 'ந்', 'வ'],
          ['ஞ', 'வி', 'ங', 'பே', 'ரு', 'ந்', 'து', 'ண்'],
          ['ர', 'க', 'மா', 'மி', 'தி', 'வ', 'ண்', 'டி'],
          ['ண', 'ற', 'ஊ', 'ன', 'ல', 'க', 'ஏ', 'ஈ'],
          ['க', 'உ', 'ன', 'அ', 'ம்', 'ந', 'த', 'ந']
        ],
        lang: 'ta',
        showWords: true
      }
    },
    {
      id: 'flowers',
      type: 'wordsearch',
      label: 'மலர்கள்',
      data: {
        title: 'கீழே கொடுக்க பட்டுள்ள   மலர்களை  கண்டுபிடிக்கவும் ',
        words: [
          {
            word: ['தா', 'ம', 'ரை'],
            marker: [5, 1, 7, 3]
          },
          {
            word: ['சா', 'ம', 'ந்', 'தி'],
            marker: [6, 1, 6, 4]
          },
          {
            word: ['செ', 'ம்', 'ப', 'ரு', 'த்', 'தி'],
            marker: [1, 4, 6, 4]
          },
          {
            word: ['சூ', 'ரி', 'ய', 'கா', 'ந்', 'தி'],
            marker: [0, 2, 0, 7]
          },
          {
            word: ['க', 'ன', 'கா', 'ம்', 'ப', 'ர', 'ம்'],
            marker: [3, 0, 3, 6]
          },
          {
            word: ['மு', 'ல்', 'லை'],
            marker: [5, 0, 7, 0]
          },
          {
            word: ['ச', 'ம்', 'ப', 'ங்', 'கி'],
            marker: [2, 3, 2, 7]
          },
          {
            word: ['தா', 'ழ', 'ம்', 'பூ'],
            marker: [4, 6, 7, 6]
          },
          {
            word: ['ம', 'ல்', 'லி'],
            marker: [0, 0, 2, 2]
          }
        ],
        table: [
          ['ம', 'ஃ', 'ந', 'க', 'ஈ', 'மு', 'ல்', 'லை'],
          ['ஞ', 'ல்', 'ஓ', 'ன', 'த', 'தா', 'சா', 'க'],
          ['சூ', 'ந', 'லி', 'கா', 'ஈ', 'ஞ', 'ம', 'ஊ'],
          ['ரி', 'ஐ', 'ச', 'ம்', 'ஏ', 'ஈ', 'ந்', 'ரை'],
          ['ய', 'செ', 'ம்', 'ப', 'ரு', 'த்', 'தி', 'உ'],
          ['கா', 'ஐ', 'ப', 'ர', 'இ', 'ஔ', 'ங', 'ஏ'],
          ['ந்', 'உ', 'ங்', 'ம்', 'தா', 'ழ', 'ம்', 'பூ'],
          ['தி', 'ஔ', 'கி', 'ப', 'அ', 'அ', 'த', 'ஞ']
        ],
        lang: 'ta',
        showWords: true
      }
    },
    {
      id: 'vegetables',
      type: 'wordsearch',
      label: 'காய்கறிகள்',
      data: {
        title: 'காய்கறிகள்',
        words: [
          {
            word: ['உ', 'ரு', 'ளை'],
            marker: [5, 3, 7, 5]
          },
          {
            word: ['மு', 'ட்', 'டை', 'கோ', 'சு'],
            marker: [6, 5, 6, 9]
          },
          {
            word: ['வெ', 'ள்', 'ள', 'ரி', 'க்', 'கா', 'ய்'],
            marker: [0, 3, 0, 9]
          },
          {
            word: ['கா', 'ர', 'ட்'],
            marker: [0, 8, 2, 8]
          },
          {
            word: ['சோ', 'ள', 'ம்'],
            marker: [7, 0, 7, 2]
          },
          {
            word: ['வெ', 'ங்', 'கா', 'ய', 'ம்'],
            marker: [3, 2, 7, 2]
          },
          {
            word: ['த', 'க்', 'கா', 'ளி'],
            marker: [0, 0, 3, 3]
          },
          {
            word: ['பூ', 'ண்', 'டு'],
            marker: [4, 3, 4, 5]
          },
          {
            word: ['இ', 'ஞ்', 'சி'],
            marker: [4, 7, 4, 9]
          },
          {
            word: ['பூ', 'ச', 'ணி'],
            marker: [4, 3, 2, 5]
          },
          {
            word: ['க', 'த்', 'தி', 'ரி'],
            marker: [2, 4, 5, 7]
          },
          {
            word: ['அ', 'வ', 'ரை'],
            marker: [3, 1, 5, 1]
          }
        ],
        table: [
          ['த', 'ல', 'இ', 'வ', 'ஈ', 'ஊ', 'ப', 'சோ'],
          ['ஆ', 'க்', 'த', 'அ', 'வ', 'ரை', 'ர', 'ள'],
          ['ண', 'ம', 'கா', 'வெ', 'ங்', 'கா', 'ய', 'ம்'],
          ['வெ', 'ஞ', 'எ', 'ளி', 'பூ', 'உ', 'அ', 'ன'],
          ['ள்', 'ஈ', 'க', 'ச', 'ண்', 'ய', 'ரு', 'ஆ'],
          ['ள', 'உ', 'ணி', 'த்', 'டு', 'ப', 'மு', 'ளை'],
          ['ரி', 'உ', 'அ', 'ங', 'தி', 'த', 'ட்', 'எ'],
          ['க்', 'ஃ', 'ச', 'எ', 'இ', 'ரி', 'டை', 'ஊ'],
          ['கா', 'ர', 'ட்', 'வ', 'ஞ்', 'ழ', 'கோ', 'எ'],
          ['ய்', 'ஔ', 'ச', 'ய', 'சி', 'ள', 'சு', 'ல']
        ],
        lang: 'ta',
        showWords: true
      }
    },
    {
      id: 'animals-2',
      type: 'wordsearch',
      label: 'சிறு விலங்குகள் ',
      data: {
        title: 'சிறு விலங்குகள்',
        words: [
          {
            word: ['மீ', 'ன்'],
            marker: [3, 0, 3, 1]
          },
          {
            word: ['த', 'வ', 'ளை'],
            marker: [0, 3, 2, 3]
          },
          {
            word: ['ந', 'ண்', 'டு'],
            marker: [5, 3, 7, 5]
          },
          {
            word: ['பா', 'ம்', 'பு'],
            marker: [0, 5, 2, 7]
          },
          {
            word: ['அ', 'ணி', 'ல்'],
            marker: [3, 4, 5, 6]
          },
          {
            word: ['ஆ', 'மை'],
            marker: [5, 0, 6, 1]
          },
          {
            word: ['எ', 'லி'],
            marker: [5, 7, 6, 7]
          },
          {
            word: ['ஈ', 'ச', 'ல்'],
            marker: [0, 0, 2, 2]
          },
          {
            word: ['எ', 'று', 'ம்', 'பு'],
            marker: [1, 4, 1, 7]
          }
        ],
        table: [
          ['ஈ', 'ர', 'ழ', 'மீ', 'ள', 'ஆ', 'ஞ', 'ம'],
          ['எ', 'ச', 'அ', 'ன்', 'எ', 'அ', 'மை', 'ட'],
          ['ஔ', 'ஞ', 'ல்', 'ல', 'ஔ', 'ஊ', 'ஏ', 'ற'],
          ['த', 'வ', 'ளை', 'ட', 'உ', 'ந', 'ந', 'ஔ'],
          ['ஐ', 'எ', 'ஃ', 'அ', 'ய', 'வ', 'ண்', 'உ'],
          ['பா', 'று', 'ப', 'ற', 'ணி', 'ண', 'உ', 'டு'],
          ['ஆ', 'ம்', 'உ', 'ண', 'ஈ', 'ல்', 'ஊ', 'ஓ'],
          ['ற', 'பு', 'பு', 'வ', 'ஐ', 'எ', 'லி', 'ஐ']
        ],
        lang: 'ta',
        showWords: true
      }
    },
    {
      id: 'fruits',
      type: 'wordsearch',
      label: 'பழங்கள்',
      data: {
        title: 'பழங்கள்',
        words: [
          {
            word: ['ஆ', 'ப்', 'பி', 'ள்'],
            marker: [3, 4, 3, 7]
          },
          {
            word: ['ஆ', 'ர', 'ஞ்', 'சு'],
            marker: [3, 4, 6, 4]
          },
          {
            word: ['த', 'ர்', 'பூ', 'ச', 'ணி'],
            marker: [3, 0, 7, 4]
          },
          {
            word: ['மா', 'ம்', 'ப', 'ழ', 'ம்'],
            marker: [1, 3, 1, 7]
          },
          {
            word: ['ப', 'லா', 'ப்', 'ப', 'ழ', 'ம்'],
            marker: [1, 5, 6, 5]
          },
          {
            word: ['தி', 'ரா', 'ட்', 'சை'],
            marker: [1, 0, 4, 3]
          },
          {
            word: ['ப', 'ப்', 'பா', 'ளி'],
            marker: [0, 1, 0, 4]
          },
          {
            word: ['கொ', 'ய்', 'யா'],
            marker: [5, 7, 7, 7]
          },
          {
            word: ['மா', 'து', 'ளை'],
            marker: [1, 3, 3, 3]
          },
          {
            word: ['அ', 'ன்', 'னா', 'சி'],
            marker: [4, 0, 7, 0]
          }
        ],
        table: [
          ['த', 'தி', 'ல', 'த', 'அ', 'ன்', 'னா', 'சி'],
          ['ப', 'அ', 'ரா', 'ற', 'ர்', 'ஈ', 'த', 'ஆ'],
          ['ப்', 'ட', 'ல', 'ட்', 'ஞ', 'பூ', 'உ', 'ப'],
          ['பா', 'மா', 'து', 'ளை', 'சை', 'ங', 'ச', 'ள'],
          ['ளி', 'ம்', 'த', 'ஆ', 'ர', 'ஞ்', 'சு', 'ணி'],
          ['ல', 'ப', 'லா', 'ப்', 'ப', 'ழ', 'ம்', 'ண'],
          ['எ', 'ழ', 'ற', 'பி', 'ப', 'ள', 'ச', 'இ'],
          ['ன', 'ம்', 'ங', 'ள்', 'எ', 'கொ', 'ய்', 'யா']
        ],
        lang: 'ta',
        showWords: true
      }
    },
    {
      id: 'birds',
      type: 'wordsearch',
      label: 'பறவைகள்',
      data: {
        title: 'பறவைகள்',
        words: [
          {
            word: ['சி', 'ட்', 'டு', 'க்', 'கு', 'ரு', 'வி'],
            marker: [7, 1, 7, 7]
          },
          {
            word: ['ம', 'ர', 'ங்', 'கொ', 'த்', 'தி'],
            marker: [2, 0, 7, 0]
          },
          {
            word: ['கு', 'யி', 'ல்'],
            marker: [2, 5, 2, 7]
          },
          {
            word: ['ம', 'யி', 'ல்'],
            marker: [0, 7, 2, 7]
          },
          {
            word: ['கொ', 'க்', 'கு'],
            marker: [4, 5, 6, 7]
          },
          {
            word: ['சே', 'வ', 'ல்'],
            marker: [0, 5, 2, 7]
          },
          {
            word: ['மை', 'னா'],
            marker: [0, 0, 1, 1]
          },
          {
            word: ['பு', 'றா'],
            marker: [3, 1, 4, 1]
          },
          {
            word: ['கா', 'க', 'ம்'],
            marker: [0, 2, 0, 4]
          },
          {
            word: ['வா', 'த்', 'து'],
            marker: [3, 2, 3, 4]
          },
          {
            word: ['கோ', 'ழி'],
            marker: [5, 3, 5, 4]
          },
          {
            word: ['கி', 'ளி'],
            marker: [1, 2, 2, 3]
          }
        ],
        table: [
          ['மை', 'ந', 'ம', 'ர', 'ங்', 'கொ', 'த்', 'தி'],
          ['ங', 'னா', 'ஞ', 'பு', 'றா', 'அ', 'ம', 'சி'],
          ['கா', 'கி', 'எ', 'வா', 'ய', 'ந', 'ஞ', 'ட்'],
          ['க', 'ஓ', 'ளி', 'த்', 'ஆ', 'கோ', 'எ', 'டு'],
          ['ம்', 'ம', 'ச', 'து', 'ல', 'ழி', 'ஏ', 'க்'],
          ['சே', 'ல', 'கு', 'ஆ', 'கொ', 'ள', 'ப', 'கு'],
          ['ஔ', 'வ', 'யி', 'அ', 'ங', 'க்', 'ஏ', 'ரு'],
          ['ம', 'யி', 'ல்', 'ப', 'ல', 'ஈ', 'கு', 'வி']
        ],
        lang: 'ta',
        showWords: true
      }
    },
    {
      id: 'job',
      type: 'wordsearch',
      label: 'தொழில்',
      data: {
        title: 'தொழில்',
        words: [
          {
            word: ['உ', 'ழ', 'வ', 'ர்'],
            marker: [0, 0, 3, 3]
          },
          {
            word: ['வி', 'மா', 'னி'],
            marker: [5, 7, 7, 7]
          },
          {
            word: ['ஓ', 'வி', 'ய', 'ர்'],
            marker: [0, 3, 3, 3]
          },
          {
            word: ['வ', 'ணி', 'க', 'ர்'],
            marker: [4, 3, 7, 3]
          },
          {
            word: ['கு', 'ய', 'வ', 'ர்'],
            marker: [4, 0, 7, 3]
          },
          {
            word: ['மீ', 'ன', 'வ', 'ர்'],
            marker: [0, 4, 3, 7]
          },
          {
            word: ['த', 'ச்', 'ச', 'ர்'],
            marker: [0, 7, 3, 7]
          },
          {
            word: ['சி', 'ற்', 'பி'],
            marker: [3, 0, 3, 2]
          },
          {
            word: ['ம', 'ரு', 'த்', 'து', 'வ', 'ர்'],
            marker: [1, 4, 6, 4]
          },
          {
            word: ['ஓ', 'ட்', 'டு', 'ந', 'ர்'],
            marker: [3, 6, 7, 6]
          }
        ],
        table: [
          ['உ', 'ச', 'ட', 'சி', 'கு', 'ச', 'ஈ', 'ஃ'],
          ['ர', 'ழ', 'ஒ', 'ற்', 'ங', 'ய', 'த', 'த'],
          ['த', 'ர', 'வ', 'பி', 'ஔ', 'ந', 'வ', 'உ'],
          ['ஓ', 'வி', 'ய', 'ர்', 'வ', 'ணி', 'க', 'ர்'],
          ['மீ', 'ம', 'ரு', 'த்', 'து', 'வ', 'ர்', 'ங'],
          ['ல', 'ன', 'ஆ', 'ஆ', 'ட', 'ஓ', 'வ', 'ள'],
          ['ழ', 'ள', 'வ', 'ஓ', 'ட்', 'டு', 'ந', 'ர்'],
          ['த', 'ச்', 'ச', 'ர்', 'ஓ', 'வி', 'மா', 'னி']
        ],
        lang: 'ta',
        showWords: true
      }
    },
    {
      id: 'days',
      type: 'wordsearch',
      label: 'கிழமை - தேடுக',
      data: {
        title: 'கிழமை: தேடுக',
        words: [
          {
            word: 'திங்கள்',
            marker: [2, 1, 5, 1]
          },
          {
            word: 'வெள்ளி',
            marker: [5, 0, 5, 2]
          },
          {
            word: 'புதன்',
            marker: [3, 4, 3, 6]
          },
          {
            word: 'வியாழன்',
            marker: [0, 6, 3, 6]
          },
          {
            word: 'சனி',
            marker: [4, 5, 5, 5]
          },
          {
            word: 'செவ்வாய்',
            marker: [0, 0, 3, 3]
          },
          {
            word: 'ஞாயிறு ',
            marker: [2, 3, 0, 5]
          }
        ],
        table: [
          ['செ', 'ன', 'கி', 'டே', 'ல', 'வெ'],
          ['ய', 'வ்', 'தி', 'ங்', 'க', 'ள்'],
          ['து', 'ச', 'வா', 'ஞ்', 'ர', 'ளி'],
          ['டு', 'வ', 'ஞா', 'ய்', 'ம்', 'தா'],
          ['பு', 'யி', 'ள்', 'பு', 'தா', 'டி'],
          ['று', 'ய', 'க்', 'த', 'ச', 'னி'],
          ['வி', 'யா', 'ழ', 'ன்', 'ழ', 'ய்']
        ],
        lang: 'ta'
      }
    },
    {
      id: 'months',
      type: 'wordsearch',
      label: 'தமிழ் மாதங்கள் - தேடுக',
      data: {
        title: 'தமிழ் மாதங்கள் - தேடுக',
        words: [
          {
            word: 'தை',
            marker: [3, 2, 3, 2]
          },
          {
            word: 'கார்த்திகை',
            marker: [0, 1, 4, 1]
          },
          {
            word: 'மார்கழி',
            marker: [1, 0, 1, 3]
          },
          {
            word: 'ஆவணி',
            marker: [3, 4, 5, 4]
          },
          {
            word: 'ஆடி',
            marker: [3, 4, 3, 5]
          },
          {
            word: 'பங்குனி',
            marker: [2, 3, 5, 3]
          },
          {
            word: 'ஆனி',
            marker: [5, 2, 5, 3]
          },
          {
            word: 'புரட்டாசி',
            marker: [6, 2, 6, 6]
          },
          {
            word: 'ஐப்பசி',
            marker: [3, 6, 6, 6]
          },
          {
            word: 'மாசி',
            marker: [1, 0, 2, 0]
          },
          {
            word: 'சித்திரை',
            marker: [0, 4, 3, 7]
          },
          {
            word: 'வைகாசி',
            marker: [5, 0, 7, 2]
          }
        ],
        lang: 'ta',
        table: [
          ['டீ', 'மா', 'சி', 'ள', 'டி', 'வை', 'ர', 'வ'],
          ['கா', 'ர்', 'த்', 'தி', 'கை', 'க்', 'கா', 'கே'],
          ['ட்', 'க', 'ப', 'தை', 'ஃ', 'ஆ', 'பு', 'சி'],
          ['ட்', 'ழி', 'ப', 'ங்', 'கு', 'னி', 'ர', 'ஞ்'],
          ['சி', 'கு', 'து', 'ஆ', 'வ', 'ணி', 'ட்', 'ம்'],
          ['வ', 'த்', 'டி', 'டி', 'வ', 'பு', 'டா', 'கே'],
          ['ப்', 'ர்', 'தி', 'ஐ', 'ப்', 'ப', 'சி', 'கி'],
          ['ங', 'தி', 'ள்', 'ரை', 'தா', 'ம', 'ற', 'ம்']
        ]
      }
    },
    {
      id: 'wordsearch',
      type: 'wordsearch',
      label: 'கூடுதல் பயிற்சி',
      data: [
        {
          slug: 'தமிழ்'
        },
        {
          title: 'Find the given words from the table.',
          words: [
            {
              word: ['பெ', 'ரி', 'ய'],
              marker: [1, 0, 1, 2]
            },
            {
              word: ['வெ', 'ற்', 'றி'],
              marker: [5, 0, 7, 2]
            },
            {
              word: ['க', 'வ', 'லை'],
              marker: [3, 0, 3, 2]
            },
            {
              word: ['சே', 'ர்', 'த்', 'து'],
              marker: [0, 3, 3, 6]
            },
            {
              word: ['இ', 'னி', 'ப்', 'பு'],
              marker: [4, 3, 7, 3]
            },
            {
              word: ['இ', 'ன்', 'ப', 'ம்'],
              marker: [4, 3, 4, 6]
            },
            {
              word: ['இ', 'ள', 'மை'],
              marker: [4, 3, 6, 5]
            },
            {
              word: ['ஏ', 'ற்', 'ற', 'ம்'],
              marker: [0, 7, 3, 7]
            },
            {
              word: ['மு', 'டி', 'வு'],
              marker: [7, 5, 7, 7]
            },
            {
              word: ['உ', 'ண்', 'மை'],
              marker: [2, 2, 2, 4]
            }
          ],
          table: [
            ['ஓ', 'பெ', 'அ', 'க', 'ள', 'வெ', 'ள', 'ங'],
            ['ஈ', 'ரி', 'ச', 'வ', 'த', 'உ', 'ற்', 'ன'],
            ['ட', 'ய', 'உ', 'லை', 'ங', 'ஊ', 'ந', 'றி'],
            ['சே', 'ள', 'ண்', 'க', 'இ', 'னி', 'ப்', 'பு'],
            ['ல', 'ர்', 'மை', 'த', 'ன்', 'ள', 'இ', 'ள'],
            ['க', 'ல', 'த்', 'ஆ', 'ப', 'உ', 'மை', 'மு'],
            ['ஐ', 'ள', 'ஐ', 'து', 'ம்', 'ம', 'ஃ', 'டி'],
            ['ஏ', 'ற்', 'ற', 'ம்', 'ற', 'ச', 'ஊ', 'வு']
          ],
          lang: 'ta',
          showWords: true
        },
        {
          title: 'Find the given words from the table.',
          words: [
            {
              word: ['உ', 'ண', 'வ', 'க', 'ம்'],
              marker: [0, 0, 4, 4]
            },
            {
              word: ['க', 'த', 'ரா', 'டை'],
              marker: [3, 3, 3, 6]
            },
            {
              word: ['மூ', 'வா', 'யி', 'ர', 'ம்'],
              marker: [4, 0, 4, 4]
            },
            {
              word: ['அ', 'ற', 'வ', 'ழி'],
              marker: [4, 5, 7, 5]
            },
            {
              word: ['நெ', 'டு', 'நா', 'ள்'],
              marker: [0, 2, 0, 5]
            },
            {
              word: ['இ', 'ட', 'மி', 'ன்', 'றி'],
              marker: [0, 7, 4, 7]
            },
            {
              word: ['செ', 'ம்', 'மொ', 'ழி'],
              marker: [4, 6, 7, 6]
            },
            {
              word: ['ப', 'ழ', 'மை', 'யா', 'ன'],
              marker: [1, 2, 1, 6]
            }
          ],
          table: [
            ['உ', 'த', 'ஒ', 'ய', 'மூ', 'ல', 'உ', 'அ'],
            ['அ', 'ண', 'ஆ', 'ர', 'வா', 'ய', 'ங', 'ப'],
            ['நெ', 'ப', 'வ', 'ள', 'யி', 'ய', 'ம', 'ல'],
            ['டு', 'ழ', 'ய', 'க', 'ர', 'ஔ', 'வ', 'ஓ'],
            ['நா', 'மை', 'ஃ', 'த', 'ம்', 'உ', 'ஏ', 'ஈ'],
            ['ள்', 'யா', 'அ', 'ரா', 'அ', 'ற', 'வ', 'ழி'],
            ['ய', 'ன', 'ச', 'டை', 'செ', 'ம்', 'மொ', 'ழி'],
            ['இ', 'ட', 'மி', 'ன்', 'றி', 'ன', 'ல', 'ள']
          ],
          lang: 'ta',
          showWords: true
        }
      ]
    }
  ]
};

export default wordsearch;