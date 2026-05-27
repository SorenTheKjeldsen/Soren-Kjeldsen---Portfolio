const commercialImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop';
import halgaardImage from '../assets/images/HDI_Forside.jpg';
import hdi01 from '../assets/images/01_HDI_Situationsplan.jpg';
import hdi02 from '../assets/images/02_HDI_Stueplan.jpg';
import hdi03 from '../assets/images/03_HDI_Tagplan.jpg';
import hdi04 from '../assets/images/04_HDI_Facade Nord & Syd.jpg';
import hdi05 from '../assets/images/05_HDI_Facade Øst & Vest.jpg';
import hdi06 from '../assets/images/06_HDI_Snit A-A.jpg';
import hdi07 from '../assets/images/07_HDI_Snit B-B.jpg';
import hdi08 from '../assets/images/08_HDI_Snit C-C.jpg';
import hdi09 from '../assets/images/09_HDI_Snit D-D.jpg';
import hdi10 from '../assets/images/10_HDI_Rumtegning Krybberum.jpg';
import hdi11 from '../assets/images/11_HDI_Bygningsdelstegning Tag.jpg';
import hdi12 from '../assets/images/12_HDI_Bygningsdelstegning Ovenlys.jpg';
import hdi13 from '../assets/images/13_HDI_Detalje tagfod Vest.jpg';
import hdi14 from '../assets/images/14_HDI_Detalje Ovenlys væg v. Tag.jpg';
import hdi15 from '../assets/images/15_HDI_Detalje UK. Vindue v. Gårdrum.jpg';
import hdi16 from '../assets/images/16_HDI_Detalje OK. Vindue v. Gårdrum.jpg';
import hdi17 from '../assets/images/17_HDI_Brandplan.jpg';
import jmMoerksImage from '../assets/images/JJMG9 Forside.jpg';

export const projects = [
  {
    id: 'halgaard-daginstitution',
    title: 'HALGÅRD DAGINSTITUTION',
    category: 'Nybyggeri',
    description: 'Nyt og moderne daginstitutionsbyggeri med fokus på lyse rum og holdbare materialer, der skaber de bedste rammer for børns trivsel og udvikling.',
    longDescription: [
      'Den nye daginstitution i Halgård opføres i et attraktivt og naturskønt område i direkte tilknytning til den eksisterende folkeskole og med udsigt over det åbne land. Området er under udvikling til en ny grøn bydel med op mod 700 boliger, hvor daginstitutionen sammen med skolen bliver et naturligt samlingspunkt for områdets beboere.',
      'Projektet tager afsæt i en grøn og bæredygtig profil, hvor bygningens arkitektur og materialevalg understøtter det pædagogiske læringsmiljø. Naturen er tænkt som en aktiv del af hverdagen, og udearealerne indrettes med fokus på leg, bevægelse og ophold i grønne omgivelser. De offentligt tilgængelige legeområder bidrager til at skabe liv og fællesskab i området – både for institutionens børn og for bydelens øvrige beboere.',
      'Daginstitutionen disponeres med fokus på funktionelle rammer, gode dagslysforhold og fleksible læringsmiljøer, hvor inde og ude tænkes sammen. Byggeriet skal danne trygge, inspirerende og bæredygtige rammer for børn og voksne i en ny, grøn bydel i udvikling.'
    ],
    image: halgaardImage,
    images: [
      hdi01, hdi02, hdi03, hdi04, hdi05, 
      hdi06, hdi07, hdi08, hdi09, hdi10, 
      hdi11, hdi12, hdi13, hdi14, hdi15, 
      hdi16, hdi17
    ],
    details: ['Holstebro', '2026', '1.770 m²', 'Bachelorprojekt · 7. semester'],
    align: 'left'
  },
  {
    id: 'jm-moerks-gade',
    title: 'J. M. MØRKS GADE',
    category: 'Renovering af etageejendom',
    description: 'Et spændende og udfordrende projekt i hjertet af Aarhus. Projektet omfatter en omfattende renovering og ombygning med fokus på at bevare bygningens historiske sjæl.',
    longDescription: [
      'Ejendommen på J. M. Mørks Gade i Aarhus C er opført i 1921 og består af 5 etager med kælder og tagetage. Bygningen er opført med massive murværksvægge i yder- og bærende indervægge, etageadskillelser i træbjælkelag med lerindskud samt tagdækning af teglsten og skifer. Ejendommen fremstår i dag nedslidt med utidssvarende køkken- og badeforhold.',
      'Projektet omfatter en gennemgribende renovering af ejendommen med fokus på at opgradere boligerne til nutidige standarder. Bygherren har et særligt fokus på de planetære grænser og ønsker en bæredygtig renovering, hvor eksisterende konstruktioner og materialer i videst muligt omfang bevares og genanvendes. Der arbejdes med forbedring af indeklimaet samt etablering af nye køkken- og badeforhold, der understøtter funktionelle og tidssvarende boliger.'
    ],
    image: jmMoerksImage,
    details: ['Aarhus C', '2024', '838 m²', 'Renovering · 5. semester'],
    align: 'right'
  },
  {
    id: 'lokesvej',
    title: 'LOKESVEJ',
    category: 'Etageboligbyggeri',
    description: 'Etageboligbyggeri opført som en integreret del af den eksisterende bystruktur i Aarhus, bestående af almene familieboliger og erhvervslejemål.',
    longDescription: [
      'Ejendommen beliggende på Lokesvej i Aarhus, indgår som en integreret del af den eksisterende bystruktur i området. Projektet består af 7 almene familieboliger med et samlet boligareal på 685 m² samt 2 store erhvervslejemål med et samlet areal på 181 m². De almene boliger er disponeret på 1., 2. og 3. sal samt en penthouselejlighed på 4. sal med et areal på 104 m².',
      'Fire af boligerne er indrettet som 3-værelses lejligheder med et areal på 108 m², mens tre boliger er indrettet som 2-værelses lejligheder på hver 85 m². På 4. sal etableres en stor tagterrasse orienteret mod sydvest, som er disponeret til fælles brug for bygningens beboere. Stueetagen indrettes med to store erhvervslejemål, velegnede til café, butik eller lignende publikumsorienterede funktioner. Kælderen indrettes med cykelparkering samt individuelle kælderrum til hvert lejemål.'
    ],
    image: commercialImage,
    details: ['Aarhus C', '2024', '846 m²', 'Etageboligbyggeri · 4. semester'],
    align: 'left'
  }
];
