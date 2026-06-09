const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
6 0 obj
<< /Length 1282 >>
stream
BT
/F2 28 Tf
72 720 Td
(Karthick Raj) Tj
/F1 12 Tf
0 -24 Td
(Business Analyst | Data Analyst | Power BI Developer) Tj
0 -18 Td
(Email: karthickrajts25@gmail.com | Phone: 8778635589) Tj
0 -18 Td
(LinkedIn: linkedin.com/in/karthick-raj-analyst | GitHub: github.com) Tj
/F2 16 Tf
0 -44 Td
(Profile) Tj
/F1 11 Tf
0 -18 Td
(Entry-level Business Analyst with hands-on experience using SQL, Excel, Power BI and Tableau) Tj
0 -14 Td
(to transform raw business data into actionable insights and interactive dashboards.) Tj
/F2 16 Tf
0 -34 Td
(Core Skills) Tj
/F1 11 Tf
0 -18 Td
(SQL, Power BI, Tableau, Microsoft Excel, Google Analytics, Data Visualization, Dashboard Design,) Tj
0 -14 Td
(Data Cleaning, Business Analysis, KPI Reporting, Requirement Gathering, Stakeholder Communication,) Tj
0 -14 Td
(Data Storytelling, Analytical Thinking, Problem Solving, Communication, Critical Thinking.) Tj
/F2 16 Tf
0 -34 Td
(Experience) Tj
/F2 12 Tf
0 -18 Td
(Business Analyst Intern - Ai Variant | Sep 2025 - Mar 2026) Tj
/F1 11 Tf
0 -16 Td
(Analyzed business data, supported requirement documentation, cleaned data using Excel and SQL,) Tj
0 -14 Td
(and built dashboards using Power BI and Tableau.) Tj
/F2 12 Tf
0 -22 Td
(Sales Analyst Intern - TVS Motor Company | Nov 2024 - Dec 2024) Tj
/F1 11 Tf
0 -16 Td
(Conducted customer satisfaction analysis, service quality analysis, reporting and statistical research.) Tj
/F2 16 Tf
0 -34 Td
(Projects) Tj
/F1 11 Tf
0 -18 Td
(Customer Insights & Revenue Analysis Dashboard - Power BI, Excel) Tj
0 -14 Td
(Zomato Analytics Dashboard - Excel and Tableau) Tj
0 -14 Td
(Crowdfunding Campaign Success Analysis - Excel and Tableau) Tj
/F2 16 Tf
0 -34 Td
(Education) Tj
/F1 11 Tf
0 -18 Td
(Hindustan College of Arts & Science - BBA, Market Analysis | 2022 - 2025) Tj
ET
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000253 00000 n 
0000000323 00000 n 
0000000398 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
1730
%%EOF`;

export const dynamic = "force-dynamic";

export function GET() {
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=Karthick-Raj-Resume.pdf"
    }
  });
}
