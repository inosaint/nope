const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 60, bottom: 60, left: 60, right: 60 }
});

const output = fs.createWriteStream(path.join(__dirname, '../public/noopurs_resume.pdf'));
doc.pipe(output);

// Colors
const black = '#111111';
const gray = '#666666';

// Helper function for section headers (no lines, just whitespace)
function sectionHeader(text) {
  doc.moveDown(1.5);
  doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text(text.toUpperCase(), { characterSpacing: 1 });
  doc.moveDown(0.8);
}

// Helper function for work items (more breathing room)
function workItem(date, title, description) {
  doc.fontSize(10).font('Helvetica').fillColor(gray).text(date);
  doc.moveDown(0.15);
  doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text(title);
  if (description) {
    doc.moveDown(0.15);
    doc.fontSize(10).font('Helvetica').fillColor(gray).text(description, { lineGap: 3 });
  }
  doc.moveDown(1.0);
}

// === HEADER ===
doc.fontSize(28).font('Helvetica-Bold').fillColor(black).text('Noopur', { align: 'left' });
doc.fontSize(12).font('Helvetica').fillColor(gray).text('Designer - Consultant - Educator', { align: 'left' });
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica').fillColor(gray)
  .text('noopur190@gmail.com  |  ', { continued: true })
  .text('noopur.me', { link: 'https://noopur.me', underline: false });

// === ABOUT (no heading) ===
doc.moveDown(1.0);
doc.fontSize(10).font('Helvetica').fillColor(black).text(
  'I have always been attracted to complexity. I like seeing patterns in things and making sense of things. I like challenging myself, so I can grow. I spend time reading, meeting people and cooking for leisure. I enjoy working with hand and play around with linocut, watercolors, embroidery etc.',
  { lineGap: 3 }
);

// === WORK EXPERIENCE ===
sectionHeader('Work Experience');

workItem('2025 - Present', 'Project Tech4Dev', 'Currently working on building tools for the non-profit sector');

workItem('2023 - 2024', 'Design Ops & Business Development — 3 Sided Coin', 'Working on introducing processes and strategy for this boutique design agency');

workItem('2022 - Present', 'Visiting Faculty & Guide — National Institute of Design, Bangalore', 'Teaching Service Design for an 8 week module to 3rd semester Information Design students. Also serving as in-campus guide for Service Design Module and System Design course');

workItem('2021 - 2022', 'Product Design Consultant — 3 Sided Coin', 'Worked on market analysis, usability testing and in-depth interviews for a big e-commerce brand. Also worked on UX for a fintech startup\'s web portal & mobile app redesign');

workItem('2021', 'Product & Visual Designer — Wakao', 'Worked on MVP of this entertainment platform');

workItem('2020 - 2021', 'Product Design Lead — NavGurukul', 'Worked with the founding team to create a digital experience for learning Python & personality development skills for students from tier 2 and tier 3 cities');

workItem('2018 - 2020', 'Product Design Lead — GoJek', 'Led design for Chat (customer-customer) and Driver-customer experiences. Worked on the first app redesign since launch with multiple initiatives including driver-chat');

workItem('2014 - 2018', 'Product Designer, Partner — Nilenso LLP', 'Started the design studio and built design practice. Worked with startups and large scale organisations across education, training, e-commerce, finance, well-being, healthcare');

workItem('2014', 'Product Design Intern — Myntra Designs', 'Worked on Delivery Experience for Myntra and Myntra Delivery partners');

// === PAGE 2: SPEAKING ===
doc.addPage();

sectionHeader('Speaking');

workItem('2017', 'Designing healthcare for Rural India — Open Data Camp', 'Spoke about designing OpenCHS, an Open Community Health Service platform for NGO Hospitals');

workItem('2016', 'What I wish I knew as a newbie designer — MetaRefresh', 'Talk reflecting on challenges faced by newbie designers and techniques to grow');

// === VOLUNTEERING ===
sectionHeader('Volunteering');

workItem('2020 - 2021', 'Information Designer — CUPA India', 'Designed CUPA annual report for communication with trustees and funding');

workItem('2015 - 2017', 'Designer — DataKind', null);

workItem('2015', 'Cartographer — Humanitarian OpenStreetMap Team', 'Volunteered to trace maps for Nepal during the 2015 earthquakes. Maps were used by Red Cross for rescue operations');

// Finalize
doc.end();

output.on('finish', () => {
  console.log('Resume PDF generated at public/noopurs_resume.pdf');
});
