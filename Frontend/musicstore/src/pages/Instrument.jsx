import React from "react";

const sections = [
  {
    title: "Piano & Keyboard",
    description:
      "เปียโนคือเครื่องดนตรีที่ให้ทั้งเมโลดี้และคอร์ดในตัวเดียว เหมาะสำหรับมือใหม่ที่อยากสร้างพื้นฐานทางดนตรี และมืออาชีพที่ต้องการความหลากหลายของเสียง",
    image: "/images/instruments/digital-piano.png",
    bg: "bg-orange-50",
  },
  {
    title: "Guitars & Bass",
    description:
      "กีตาร์เป็นเครื่องดนตรีที่ได้รับความนิยมที่สุดในโลก เล่นได้ทั้งแบบโซโล่และคอร์ด ให้ฟีลอบอุ่น สนุก และพกพาสะดวกมาก",
    image: "/images/instruments/guitar.png",
    bg: "bg-sky-50",
  },
  {
    title: "Woodwind",
    description:
      "เครื่องลมไม้ เช่น คลาริเน็ต แซกโซโฟน มีเสียงนุ่มลึกและอบอุ่น มีลักษณะเสียงเป็นเอกลักษณ์เฉพาะตัว เหมาะสำหรับคนที่ต้องการความโดดเด่น",
    image: "/images/instruments/Clarinet.png",
    bg: "bg-rose-50",
  },
  {
    title: "Brass Instruments",
    description:
      "ทรัมเป็ตและเครื่องลมทองเหลืองมีพลังเสียงที่ชัดเจนและเด่นชัด มักใช้ในวงดุริยางค์ แจ๊ส และวงโยธวาทิต",
    image: "/images/instruments/Trumpet.png",
    bg: "bg-green-50",
  },
  {
    title: "Drums",
    description:
      "กลองคือหัวใจของจังหวะในทุกแนวเพลง ให้พลัง ความสนุก และความมันส์ เหมาะกับคนชอบความท้าทายและการเคลื่อนไหว",
    image: "/images/instruments/drum.png",
    bg: "bg-purple-50",
  },
];

const Instrument = () => {
  return (
    <div className="w-full">
      {sections.map((item, index) => (
        <div
          key={index}
          className={`${item.bg} w-full py-20 px-6 md:px-20`}
        >
          <div
            className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10
            ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                {item.title}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 rounded-3xl shadow-xl bg-white flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-44 h-44 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="text-center py-10 bg-white"></div>
    </div>
  );
};

export default Instrument;
