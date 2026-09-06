type SectionText = {
  counter: String;
  text: String;
};

export default function SectionTitle({ counter, text }: SectionText) {
  return (
    <div className="w-full font-extrabold font-manrope justify-start gap-10 md:text-lg lg:text-xl md:mb-2 lg:mb-3  flex">
      <span className="border-b-2 text-tan">&nbsp; {counter} &nbsp;&nbsp;</span>
      <span className="text-brown">{text}</span>
    </div>
  );
}
