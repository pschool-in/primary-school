const sentence = {
  label: 'வாக்கியம்',
  id: 'sentence',
  img: 'sentence',
  list: [
    {
      id: 'jumbled-sentence',
      type: 'sequence',
      label: 'வாக்கியம் அமை ',
      data: {
        text:
          'வாரத்தின் நாட்கள் ஏழு \n சூரியன் உதிக்கும் திசை கிழக்கு \n பூனை ஒரு வீட்டு விலங்கு \n நாய் நன்றியுள்ள பிராணி \n பூக்கள் மென்மையாக இருக்கும் \n ராமு வேகமாக ஓடுவான் \n தாத்தா செடி வளர்க்கிறார் \n பாட்டி தினமும் கதை சொல்வார் \n முகிலன் நன்றாக வரைவான் \n  கீதா ஒரு சுட்டிப்பெண் \n நான் பாடம் படிக்கிறேன் \n பனை மரம் உயரமாக இருக்கும் \n வானவில்லில் ஏழு நிறங்கள் இருக்கும் \n அறம் செய விரும்பு ',
        lang: 'ta'
      }
    },
    {
      id: '100',
      label: 'குறிப்புகளைக் கொண்டு கண்டுபிடி ',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'குறிப்புகளைக் கொண்டு கண்டுபிடி ',
        styles: {
          fontSize: '1rem',
          dashWidth: 60
        },
        text:
          'மணக்கும் எழுத்து : *பூ* \n அரசரும், அமைச்சர்களும் கூடும் இடம் : *அரசவை* \n நிலவும், விண்மீன்களும் வானில் தெரியும் நேரம்: *இரவு* \n நவரசங்களில் ஆச்சரியத்தைக் குறிக்கும்: *வியப்பு* \n சிக்கலைக் தீர்க்க உதவும் குணம்: *அறிவுக்கூர்மை*'
      }
    },
    {
      id: '300',
      label: 'நிரப்புக ',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'நிரப்புக ',
        styles: {
          fontSize: '1rem',
          dashWidth: 60
        },
        text:
          'வணிகர் *அரபு* நாட்டைச் சேர்ந்தவர். \n உழவர், வணிகர் இருவரின் வழக்கை எதிர்கொண்டவர் *மரியாதை ராமன்* \n திருமண ஊர்வலத்தில் *யானை* இறந்து விட்டது. \n  *பானைகள்* கீழே விழுந்து நொறுங்கின.'
      }
    },
    {
      id: '400',
      label: 'நிரப்புக : __ர்',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'நிரப்புக : __ர்',
        styles: {
          fontSize: '1rem',
          dashWidth: 60
        },
        text:
          'உலகம் என்பதன் வேறு சொல்: *பார்* \n திருவிழா என்றாலே இது இருக்கும் : *தேர்* \n மக்கள் சேர்ந்து வாழுமிடம் : *ஊர்* \n இது இல்லாமல் உயிர்கள் இல்லை : *நீர்* '
      }
    },
    {
      id: '500',
      label: 'நிரப்புக : __ர் - 2',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'நிரப்புக : __ர்',
        styles: {
          fontSize: '1rem',
          dashWidth: 60
        },
        text:
          ' நீர் விட்டுத் தயிர் கடைந்தால்: *மோர்* \n மரம், செடி, கொடி மண்ணில் ஊன்றி நிற்க உதவும்: *வேர்* \n மன்னர்கள் தம் நாட்டின் எல்லையை விரிவுபடுத்த அண்டை நாடுகளோடு செய்வது : *போர்* \n பூத்தொடுக்க உதவுவது: *நார்*'
      }
    }
  ]
};

export default sentence;
