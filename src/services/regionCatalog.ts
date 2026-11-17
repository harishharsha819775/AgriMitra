export interface DistrictOption {
  name: string;
  markets: string[];
}

export interface StateOption {
  name: string;
  districts: DistrictOption[];
}

export const INDIA_AGRI_REGIONS: StateOption[] = [
  {
    name: 'Karnataka',
    districts: [
      { name: 'Mandya', markets: ['Mandya APMC', 'Maddur APMC', 'Pandavapura'] },
      { name: 'Mysuru', markets: ['Mysuru Bandipalya', 'Nanjangud', 'Hunsur'] },
      { name: 'Bengaluru Rural', markets: ['Doddaballapura', 'Devanahalli', 'Hoskote'] },
      { name: 'Belagavi', markets: ['Belagavi APMC', 'Gokak', 'Bailhongal'] },
      { name: 'Hassan', markets: ['Hassan APMC', 'Arsikere', 'Channarayapatna'] },
    ],
  },
  {
    name: 'Maharashtra',
    districts: [
      { name: 'Nashik', markets: ['Lasalgaon', 'Pimpalgaon', 'Nashik APMC'] },
      { name: 'Pune', markets: ['Pune Gultekdi', 'Baramati', 'Junnar'] },
      { name: 'Nagpur', markets: ['Nagpur Kalamna', 'Kamptee', 'Katol'] },
    ],
  },
  {
    name: 'Tamil Nadu',
    districts: [
      { name: 'Thanjavur', markets: ['Thanjavur Uzhavar Sandhai', 'Kumbakonam', 'Pattukkottai'] },
      { name: 'Coimbatore', markets: ['Coimbatore Pollachi', 'Mettupalayam', 'Sulur'] },
      { name: 'Madurai', markets: ['Madurai Mattuthavani', 'Melur', 'Usilampatti'] },
    ],
  },
  {
    name: 'Andhra Pradesh',
    districts: [
      { name: 'Guntur', markets: ['Guntur Mirchi Yard', 'Tenali', 'Mangalagiri'] },
      { name: 'Chittoor', markets: ['Madanapalle Tomato Market', 'Chittoor', 'Palamaner'] },
      { name: 'Kurnool', markets: ['Kurnool Market Yard', 'Adoni', 'Nandyal'] },
    ],
  },
  {
    name: 'Uttar Pradesh',
    districts: [
      { name: 'Lucknow', markets: ['Lucknow Naveen Mandi', 'Malihabad', 'Bakshi Ka Talab'] },
      { name: 'Varanasi', markets: ['Varanasi Pahariya', 'Pindra', 'Chiraigaon'] },
      { name: 'Agra', markets: ['Agra Sikandra Mandi', 'Fatehabad', 'Kheragarh'] },
    ],
  },
];
