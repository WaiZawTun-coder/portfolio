import "@/components/css/button.css";

export default function Xbutton({ title, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {title}
    </button>
  );
}
