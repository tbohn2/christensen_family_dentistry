/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Home page redirects
      {
        source: '/',
        destination: 'https://hentgesdental.com',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Home-p43282.asp',
        destination: 'https://hentgesdental.com',
        permanent: true,
      },

      // About page redirects
      {
        source: '/p/dentist-Mesa-AZ-About-p43589.asp',
        destination: 'https://hentgesdental.com/about',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-About-p43589.asp#About-Us',
        destination: 'https://hentgesdental.com/about',
        permanent: true,
      },

      // Patient Information redirects
      {
        source: '/p/dentist-Mesa-AZ-Patient-Information-p43590.asp',
        destination: 'https://hentgesdental.com/patient-information',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Patient-Information-p43590.asp#Patient-Information',
        destination: 'https://hentgesdental.com/patient-information',
        permanent: true,
      },

      // Services redirects
      {
        source: '/p/dentist-Mesa-AZ-Services-p43591.asp',
        destination: 'https://hentgesdental.com/services',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Services-p43591.asp#Dental-Services',
        destination: 'https://hentgesdental.com/services',
        permanent: true,
      },

      // Contact redirects
      {
        source: '/p/dentist-Mesa-AZ-Contact-p43592.asp',
        destination: 'https://hentgesdental.com/contact',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Contact-p43592.asp#Contact-Us',
        destination: 'https://hentgesdental.com/contact',
        permanent: true,
      },

      // Dr. Leo Christensen redirects
      {
        source: '/p/dentist-Mesa-AZ-Leo-Christensen-DDS-p43600.asp',
        destination: 'https://hentgesdental.com/Dr-Leo-Christensen',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Leo-Christensen-DDS-p43600.asp#New-Beginnings',
        destination: 'https://hentgesdental.com/Dr-Leo-Christensen',
        permanent: true,
      },

      // Dr. Zach Hentges redirects
      {
        source: '/p/dentist-Mesa-AZ-Zach-Hentges-DMD-p43601.asp',
        destination: 'https://hentgesdental.com/Dr-Zach-Hentges',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Zach-Hentges-DMD-p43601.asp#Meet-Dr.-Zach-Hentges',
        destination: 'https://hentgesdental.com/Dr-Zach-Hentges',
        permanent: true,
      },

      // Dental Technology redirects
      {
        source: '/p/dentist-Mesa-AZ-Dental-Technology-p43602.asp',
        destination: 'https://hentgesdental.com/dental-technology',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Dental-Technology-p43602.asp#Dental-Technology',
        destination: 'https://hentgesdental.com/dental-technology',
        permanent: true,
      },

      // New Patient Forms redirects
      {
        source: '/p/dentist-Mesa-AZ-New-Patient-Forms-p43597.asp',
        destination: 'https://hentgesdental.com/new-patient-forms',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-New-Patient-Forms-p43597.asp#New-Patient-Forms',
        destination: 'https://hentgesdental.com/new-patient-forms',
        permanent: true,
      },

      // Financial and Insurance redirects
      {
        source: '/p/dentist-Mesa-AZ-Financial-Insurance-p43598.asp',
        destination: 'https://hentgesdental.com/financial-and-insurance',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Financial-Insurance-p43598.asp#Financial-and-Insurance',
        destination: 'https://hentgesdental.com/financial-and-insurance',
        permanent: true,
      },

      // Patient Testimonials redirects
      {
        source: '/p/dentist-Mesa-AZ-Patient-Testimonials-p43599.asp',
        destination: 'https://hentgesdental.com/patient-testimonials',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Patient-Testimonials-p43599.asp#Patient-Testimonials',
        destination: 'https://hentgesdental.com/patient-testimonials',
        permanent: true,
      },

      // Dental Blog redirects
      {
        source: '/p/dentist-Mesa-AZ-Dental-Blog-p45661.asp',
        destination: 'https://hentgesdental.com/dental-blog',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Dental-Blog-p45661.asp#Our-Blog',
        destination: 'https://hentgesdental.com/dental-blog',
        permanent: true,
      },

      // Family Dentistry redirects
      {
        source: '/p/dentist-Mesa-AZ-Family-Dentistry-p43593.asp',
        destination: 'https://hentgesdental.com/family-dentistry',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Family-Dentistry-p43593.asp#Mesa-AZ',
        destination: 'https://hentgesdental.com/family-dentistry',
        permanent: true,
      },

      // Restorative Dentistry redirects
      {
        source: '/p/dentist-Mesa-AZ-Restorative-Dentistry-p43594.asp',
        destination: 'https://hentgesdental.com/restorative-dentistry',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Restorative-Dentistry-p43594.asp#Mesa-AZ',
        destination: 'https://hentgesdental.com/restorative-dentistry',
        permanent: true,
      },

      // Cosmetic Dentistry redirects
      {
        source: '/p/dentist-Mesa-AZ-Cosmetic-Dentistry-p43595.asp',
        destination: 'https://hentgesdental.com/cosmetic-dentistry',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Cosmetic-Dentistry-p43595.asp#Mesa-AZ',
        destination: 'https://hentgesdental.com/cosmetic-dentistry',
        permanent: true,
      },

      // Emergency Dentistry redirects
      {
        source: '/p/dentist-Mesa-AZ-Emergency-Dentistry-p43596.asp',
        destination: 'https://hentgesdental.com/emergency-dentistry',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Emergency-Dentistry-p43596.asp#Emergency-Dentistry',
        destination: 'https://hentgesdental.com/emergency-dentistry',
        permanent: true,
      },

      // All other redirects
      {
        source: '/:path*',
        destination: 'https://hentgesdental.com/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
