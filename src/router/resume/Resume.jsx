import React from "react";
import resume from "../../assets/otabek.pdf";

const Resume = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src={resume}
        type="application/pdf"
        width="100%"
        height="100%"
        title="Resume"
      >
        Sizning brauzeringiz PDF fayllarni qo'llab-quvvatlamaydi. PDFni ko'rish
        uchun quyidagi havoladan foydalaning:{" "}
        <a href={resume}>PDFni yuklab olish</a>.
      </iframe>
    </div>
  );
};

export default Resume;
