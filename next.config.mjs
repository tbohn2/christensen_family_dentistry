/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  async redirects() {
    return [
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
      {
        source: '/p/dentist-Mesa-AZ-About-p43589.asp',
        destination: 'https://hentgesdental.com/about',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Patient-Information-p43590.asp',
        destination: 'https://hentgesdental.com/patient-information',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Services-p43591.asp',
        destination: 'https://hentgesdental.com/services',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Contact-p43592.asp',
        destination: 'https://hentgesdental.com/contact',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Leo-Christensen-DDS-p43600.asp',
        destination: 'https://hentgesdental.com/Dr-Leo-Christensen',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Zach-Hentges-DMD-p43601.asp',
        destination: 'https://hentgesdental.com/Dr-Zach-Hentges',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Dental-Technology-p43602.asp',
        destination: 'https://hentgesdental.com/dental-technology',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-New-Patient-Forms-p43597.asp',
        destination: 'https://hentgesdental.com/new-patient-forms',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Financial-Insurance-p43598.asp',
        destination: 'https://hentgesdental.com/financial-and-insurance',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Patient-Testimonials-p43599.asp',
        destination: 'https://hentgesdental.com/patient-testimonials',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Dental-Blog-p45661.asp',
        destination: 'https://hentgesdental.com/dental-blog',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Family-Dentistry-p43593.asp',
        destination: 'https://hentgesdental.com/family-dentistry',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Restorative-Dentistry-p43594.asp',
        destination: 'https://hentgesdental.com/restorative-dentistry',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Cosmetic-Dentistry-p43595.asp',
        destination: 'https://hentgesdental.com/cosmetic-dentistry',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Emergency-Dentistry-p43596.asp',
        destination: 'https://hentgesdental.com/emergency-dentistry',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-All-on-4-p43603.asp',
        destination: 'https://hentgesdental.com/procedures/all-on-4',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-CEREC-p43622.asp',
        destination: 'https://hentgesdental.com/dental-technology',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Dental-Bonding-p43608.asp',
        destination: 'https://hentgesdental.com/procedures/dental-bonding',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Dental-Bridge-p43605.asp',
        destination: 'https://hentgesdental.com/procedures/dental-bridge',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Dental-Cleaning-p43604.asp',
        destination: 'https://hentgesdental.com/procedures/dental-cleaning',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Dental-Crown-p43606.asp',
        destination: 'https://hentgesdental.com/procedures/dental-crown',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Dental-Exam-p43648.asp',
        destination: 'https://hentgesdental.com/procedures/dental-exam',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Dental-Filling-p43611.asp',
        destination: 'https://hentgesdental.com/procedures/dental-filling',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Dental-Implants-p43607.asp',
        destination: 'https://hentgesdental.com/procedures/dental-implants',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Dental-Veneers-p43625.asp',
        destination: 'https://hentgesdental.com/procedures/dental-veneers',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Dentistry-for-Kids-p43609.asp',
        destination: 'https://hentgesdental.com/procedures/dentistry-for-kids',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Dentures-p43610.asp',
        destination: 'https://hentgesdental.com/procedures/dentures',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Digital-Radiography-p43649.asp',
        destination: 'https://hentgesdental.com/procedures/digital-radiography',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Inlays-Onlays-p43612.asp',
        destination: 'https://hentgesdental.com/procedures/inlays-and-onlays',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Invisalign-p43647.asp',
        destination: 'https://hentgesdental.com/cosmetic-dentistry',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Laser-Dentistry-p43646.asp',
        destination: 'https://hentgesdental.com/procedures/laser-dentistry',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Night-Mouthguard-p43613.asp',
        destination: 'https://hentgesdental.com/procedures/night-mouthguard',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Oral-Appliance-Therapy-p43644.asp',
        destination: 'https://hentgesdental.com/procedures/oral-appliance-therapy',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Oral-Cancer-Screening-p43643.asp',
        destination: 'https://hentgesdental.com/procedures/oral-cancer-screening',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Periodontal-Care-p43614.asp',
        destination: 'https://hentgesdental.com/procedures/periodontal-care',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Periodontal-Maintenance-p43629.asp',
        destination: 'https://hentgesdental.com/procedures/periodontal-maintenance',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Porcelain-Crowns-p43615.asp',
        destination: 'https://hentgesdental.com/procedures/porcelain-crowns',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Root-Canal-p43616.asp',
        destination: 'https://hentgesdental.com/procedures/root-canal',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Same-Day-Dentures-p43626.asp',
        destination: 'https://hentgesdental.com/procedures/dentures',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Sleep-Apnea-p43623.asp',
        destination: 'https://hentgesdental.com/procedures/sleep-apnea',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Snap-On-Smile-p43620.asp',
        destination: 'https://hentgesdental.com/cosmetic-dentistry',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Sports-Mouthguard-p43645.asp',
        destination: 'https://hentgesdental.com/procedures/sports-mouthguard',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Teeth-Whitening-p43617.asp',
        destination: 'https://hentgesdental.com/procedures/teeth-whitening',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-TMJ-p43618.asp',
        destination: 'https://hentgesdental.com/procedures/tmj',
        permanent: true,
      },
      {
        source: '/p/dentist-Mesa-AZ-Tooth-Extraction-p43619.asp',
        destination: 'https://hentgesdental.com/procedures/tooth-extraction',
        permanent: true,
      },

      // All other redirects
      {
        source: '/:path*',
        destination: 'https://hentgesdental.com/',
        permanent: true,
      },

      // Old pages urls
      // https://christensenfamilydentistry.com/p/dentist-Mesa-AZ-Home-p43282.asp
      // /p/dentist-Mesa-AZ-Home-p43282.asp
      // /p/dentist-Mesa-AZ-About-p43589.asp
      // /p/dentist-Mesa-AZ-Patient-Information-p43590.asp
      // /p/dentist-Mesa-AZ-Services-p43591.asp
      // /p/dentist-Mesa-AZ-Contact-p43592.asp
      // /p/dentist-Mesa-AZ-Leo-Christensen-DDS-p43600.asp
      // /p/dentist-Mesa-AZ-Zach-Hentges-DMD-p43601.asp
      // /p/dentist-Mesa-AZ-Dental-Technology-p43602.asp
      // /p/dentist-Mesa-AZ-New-Patient-Forms-p43597.asp
      // /p/dentist-Mesa-AZ-Financial-Insurance-p43598.asp
      // /p/dentist-Mesa-AZ-Patient-Testimonials-p43599.asp
      // /p/dentist-Mesa-AZ-Dental-Blog-p45661.asp
      // /p/dentist-Mesa-AZ-Family-Dentistry-p43593.asp
      // /p/dentist-Mesa-AZ-Restorative-Dentistry-p43594.asp
      // /p/dentist-Mesa-AZ-Cosmetic-Dentistry-p43595.asp
      // /p/dentist-Mesa-AZ-Emergency-Dentistry-p43596.asp
      // /p/dentist-Mesa-AZ-All-on-4-p43603.asp
      // /p/dentist-Mesa-AZ-CEREC-p43622.asp
      // /p/dentist-Mesa-AZ-Dental-Bonding-p43608.asp
      // /p/dentist-Mesa-AZ-Dental-Bridge-p43605.asp
      // /p/dentist-Mesa-AZ-Dental-Cleaning-p43604.asp
      // /p/dentist-Mesa-AZ-Dental-Crown-p43606.asp
      // /p/dentist-Mesa-AZ-Dental-Exam-p43648.asp
      // /p/dentist-Mesa-AZ-Dental-Filling-p43611.asp
      // /p/dentist-Mesa-AZ-Dental-Implants-p43607.asp
      // /p/dentist-Mesa-AZ-Dental-Veneers-p43625.asp
      // /p/dentist-Mesa-AZ-Dentistry-for-Kids-p43609.asp
      // /p/dentist-Mesa-AZ-Dentures-p43610.asp
      // /p/dentist-Mesa-AZ-Digital-Radiography-p43649.asp
      // /p/dentist-Mesa-AZ-Inlays-Onlays-p43612.asp
      // /p/dentist-Mesa-AZ-Invisalign-p43647.asp
      // /p/dentist-Mesa-AZ-Laser-Dentistry-p43646.asp
      // /p/dentist-Mesa-AZ-Night-Mouthguard-p43613.asp
      // /p/dentist-Mesa-AZ-Oral-Appliance-Therapy-p43644.asp
      // /p/dentist-Mesa-AZ-Oral-Cancer-Screening-p43643.asp
      // /p/dentist-Mesa-AZ-Periodontal-Care-p43614.asp
      // /p/dentist-Mesa-AZ-Periodontal-Maintenance-p43629.asp
      // /p/dentist-Mesa-AZ-Porcelain-Crowns-p43615.asp
      // /p/dentist-Mesa-AZ-Root-Canal-p43616.asp
      // /p/dentist-Mesa-AZ-Same-Day-Dentures-p43626.asp
      // /p/dentist-Mesa-AZ-Sleep-Apnea-p43623.asp
      // /p/dentist-Mesa-AZ-Snap-On-Smile-p43620.asp
      // /p/dentist-Mesa-AZ-Sports-Mouthguard-p43645.asp
      // /p/dentist-Mesa-AZ-Teeth-Whitening-p43617.asp
      // /p/dentist-Mesa-AZ-TMJ-p43618.asp
      // /p/dentist-Mesa-AZ-Tooth-Extraction-p43619.asp
    ];
  },
};

export default nextConfig;
