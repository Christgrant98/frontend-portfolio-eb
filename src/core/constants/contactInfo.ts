

export const CONTACT_INFO = {

  whatsapp: {
    number: '14383574398',
    message: 'Thank you for reaching out to Pharus Creative. Please let us know how we can help you.',
    get url() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    }
  },


  instagram: {
    username: 'pharus.creative',
    url: 'https://www.instagram.com/pharus.creative/'
  },


  company: {
    name: 'Pharus Creative',
    tagline: 'Histoires d\'amour illuminées par l\'art',
    location: 'Montreal, Canada'
  },


  contact: {
    email: 'info@pharuscreative.com', 
    phone: '+1 (438) 357-4398' 
  }
} as const;

export const SOCIAL_LINKS = {
  whatsapp: CONTACT_INFO.whatsapp.url,
  instagram: CONTACT_INFO.instagram.url
} as const;

export default CONTACT_INFO;
